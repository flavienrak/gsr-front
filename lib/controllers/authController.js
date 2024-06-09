const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const loginController = async ({ email, password }) => {
  return await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json());
};
