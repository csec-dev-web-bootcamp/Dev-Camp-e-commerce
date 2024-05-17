"use server";
import { cookies } from "next/headers";
import fetcher from "./fetcher";

const SERVER_HOST = "http://localhost:8000";
export async function getMe() {
  const cookiesManager = cookies();
  try {
    const res = await fetcher.get(`${SERVER_HOST}/users/me`);
    return res.data;
  } catch (error) {
    console.log({ error });
    const data = error?.response.data;
    return { error: data || "Unknown error" };
  }
}
