import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDto, SignUpDto } from './dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @ApiBody({
    type: AuthDto,
		description: "",
		examples: {
			a:{
				summary: "Test",
				value: {email: "re@gmail.com", password: "12379989"} as AuthDto
			}
		}
  })
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }

  @Post('signup')
  @ApiBody({
    type: SignUpDto,
		description: "",
		examples: {
			a:{
				summary: "Test",
				value: {username: "username", email: "your@email", password: "your password"} as SignUpDto
			}
		}
  })
  signup(@Body() dto: SignUpDto) {
    return this.authService.signup(dto);
  }
}
