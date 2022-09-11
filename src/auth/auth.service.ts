import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { AuthDto, SignUpDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private config: ConfigService,
    private userRepository: UserRepository,
  ) {}
  async signin(dto: AuthDto) {
    const user = await this.userRepository.findOne({
      email: dto.email,
    });
    if (!user)
      throw new ForbiddenException(
        'Credientials incorrect',
      );

    const pwMatches = argon.verify(
      user.password,
      dto.password,
    );
    if (!pwMatches)
      throw new ForbiddenException(
        'Credientials incorrect',
      );

    const token = await this.signToken(user.email);
    return {
      email: user.email,
      username: user.username,
      access_token: token,
    };
  }

  async signup(dto: SignUpDto) {
    const hash = await argon.hash(dto.password);
    try {
      const user = await this.userRepository.create({
        username: dto.username,
        email: dto.email,
        password: hash,
      });
      const token = await this.signToken(user.email);
      return {
        email: user.email,
        username: user.username,
        token: token,
      };
    } catch (error) {
      throw error;
    }
  }

  async signToken(email: string): Promise<string> {
    const payload = {
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '365d',
      secret,
    });
    return token;
  }
}
