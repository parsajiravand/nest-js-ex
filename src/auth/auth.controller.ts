import {
  Body,
  Controller,
  Post,
 
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credentials.dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @UsePipes(ValidationPipe)
  signUp(@Body() authCredentialDto: AuthCredentialDto) {
    console.log(authCredentialDto);
    return this.authService.signUp(authCredentialDto);
  }

  @Post('/signin')
  @UsePipes(ValidationPipe)
  signin(
    @Body() authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    console.log(authCredentialDto);
    return this.authService.signIn(authCredentialDto);
  }

 /*  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log(user);
  } */
}
