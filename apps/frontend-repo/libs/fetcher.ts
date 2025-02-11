import Cookies from "js-cookie";

const token = Cookies.get(process.env.NEXT_PUBLIC_COOKIE_TOKEN_NAME || "");
export default function fetcher(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  return fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}), // Include the token if it exists
    },
  });
}
