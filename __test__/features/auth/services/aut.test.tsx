import { getAuthentication } from "../../../../src/features/auth/services";
import { BASE_URL } from "../../../../src/global";

const mockUserResponse = {
  id: 1,
  username: "emilys",
  email: "emily.johnson@x.dummyjson.com",
  firstName: "Emily",
  lastName: "Johnson",
  gender: "female",
  image: "https://dummyjson.com/icon/emilys/128",
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", 
  refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
};

const mockFetch = (data: any, status = 200, ok = true) => {
  const fn = jest.fn().mockImplementationOnce(() => {
    const response = {
      ok,
      status,
      json: () => Promise.resolve(data),
      blob: () => Promise.resolve(data),
      clone: () => ({ ...response }),
      text: () => Promise.resolve(JSON.stringify(data)),
    };
    return Promise.resolve(response);
  });
  global.fetch = fn;
  return fn;
};

describe("getAuthentication", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should make a POST request and return the user data successfully", async () => {
    const fetchMock = mockFetch(mockUserResponse);

    const result = await getAuthentication({
      username: "emilys",
      password: "emilyspass",
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30,
      }),
    });

    expect(result).toEqual(mockUserResponse);
  });
});
