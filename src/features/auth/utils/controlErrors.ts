import { UserErrorResponse, UserResponse } from "../interfaces/responses/user";

export const isUserError = (response: UserResponse | UserErrorResponse) => {
    return (response as UserErrorResponse).message !== undefined;
}