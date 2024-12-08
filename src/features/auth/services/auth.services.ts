import { BASE_URL } from "@/global";

type GetAuthenticationParam = {
  username: string;
  password: string;
};
export const getAuthentication = async ({
  username,
  password,
}: GetAuthenticationParam) =>
  fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30,
    }),
  }).then((res) => res.json());
