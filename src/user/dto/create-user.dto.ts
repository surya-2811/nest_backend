import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'surya',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({
    description: 'The email of the user',
    example: 'surya28.11@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
