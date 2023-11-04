import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  create(@Body() account: CreateAccountDto) {
    return this.authService.createAccount(account);
  }

  @Post('login')
  login(@Body() account: CreateAccountDto) {
    return this.authService.login(account);
  }

  @Get()
  getAll() {
    return this.authService.getAllAccounts();
  }
}
