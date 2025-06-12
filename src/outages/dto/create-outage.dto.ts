import { IsString } from 'class-validator';

export class CreateOutageDto {
  @IsString()
  location: string;

  @IsString()
  description: string;
}