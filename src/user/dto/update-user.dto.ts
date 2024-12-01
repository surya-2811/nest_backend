import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto'; // Import the CreateUserDto
// import { IsString, IsEmail } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // Additional validations for UpdateUserDto, if needed, can go here
  //   @IsString()
  //   name?: string;
  //   @IsEmail()
  //   email?: string;
}
