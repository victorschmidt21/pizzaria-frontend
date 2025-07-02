import { api } from "@/services/api";

export async function validadeToken(token: string) {
  if (!token) return false;

  try {
    await api.get("user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
