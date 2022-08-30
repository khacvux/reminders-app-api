import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signin(dto: AuthDto) {
    
    return "this.signToken(user.id, user.email)";
  }

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);


    return  "access_token: token,"
  }
}
