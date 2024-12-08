import { UserResponse } from "../interfaces/responses/user";
import { User } from "../interfaces/user";

export const mapperUserResponseToUser = (userResponse: UserResponse): User => {
  return {
    email: userResponse.email,
    username: userResponse.username,
    firstName: userResponse.firstName,
    lastName: userResponse.lastName,
    gender: userResponse.gender,
    image: userResponse.image,
    token: userResponse.accessToken,
  };
};
