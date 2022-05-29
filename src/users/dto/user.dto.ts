import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  password: number;
}

export default UserDto;
