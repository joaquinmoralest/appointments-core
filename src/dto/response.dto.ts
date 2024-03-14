import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class ResponseDto {
  @IsBoolean()
  ok: boolean;

  @IsOptional()
  data: any;

  @IsOptional()
  @IsString()
  message: string;
}
