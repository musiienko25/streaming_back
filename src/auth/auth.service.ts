import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateJwtToken(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return this.jwtService.sign(payload);
  }
}
