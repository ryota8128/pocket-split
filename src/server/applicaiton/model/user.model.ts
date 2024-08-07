import { UserDto } from '@/server/presentation/dto/user.dto';


export class UserModel {
  private constructor(
    readonly id: string,
    readonly username: string,
  ) {
  }

  public static of(id: string, username: string) {
    return new UserModel(id, username);
  }


  public static from(data: UserDto) {
    return UserModel.of(data.id, data.username);
  }

  public toDto(): UserDto {
    return {
      id: this.id,
      username: this.username,
    };
  }
}
