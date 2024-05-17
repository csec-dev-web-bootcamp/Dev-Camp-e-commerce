"use server";
import axios from "axios";
import { cookies } from "next/headers";
const SERVER_HOST = "http://localhost:8000";
export async function login(formData) {
  const cookieManager = cookies();
  try {
    const res = await axios.post(`${SERVER_HOST}/auth/login`, formData);
    const data = res.data;
    if (data.user && data.jwt) {
      cookieManager.set({
        name: "accessToken",
        value: data.jwt,
        secure: process.env.NODE_ENV === "production",
        expires: 12 * 36000,
      });
    }
  } catch (err) {
    return { err: err.response ? err.response.data : err.message };
  }
}
export async function register(formData) {
  const cookieManager = cookies();
  try {
    const res = await axios.post(`${SERVER_HOST}/auth/register`, formData);
    const data = res.data;
    if (data.user && data.jwt) {
      cookieManager.set({
        name: "accessToken",
        value: data.jwt.accessToken,
        secure: process.env.NODE_ENV === "production",
      });
    }
  } catch (err) {
    return { err: err.response ? err.response.data : err.message };
  }
}
