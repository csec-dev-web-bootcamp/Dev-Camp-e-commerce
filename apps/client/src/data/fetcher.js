"use server";

import axios from "axios";
import { cookies } from "next/headers";
const fetcher = axios.create();
fetcher.interceptors.request.use(async (request) => {
  const cookieManager = cookies();
  const accessToken = cookieManager.get("accessToken");
  if (accessToken) {
    request.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return request;
});
export default fetcher;

// import { redirect } from "next/navigation";
// import { server_host } from "../constants/host.config";
// // import { getAuthentication } from "./auth/authentications";

// export default async function fetcher(pathname, options) {
//   const headers = {
//     "Content-Type": "application/json",
//     ...options?.headers,
//   };

//   // const accessToken = await getAuthentication();
//   // if (accessToken) {
//   //   headers["Authorization"] = `Bearer ${accessToken}`;
//   // }

//   const url = `${server_host}${pathname}`;

//   let response = await fetch(url, {
//     ...options,
//     headers: headers,

//     next: {
//       ...options?.next,
//       tags: [...(options?.next?.tags ?? []), "ALL"],
//     },
//   });

//   if (!response.ok) {
//     if (response.status === 404) {
//       return redirect("/not-found");
//     }
//     if (response.status === 403) {
//       return redirect("/forbidden");
//     }
//     const error = await response.json();
//     return { error: error, success: false };
//   }

//   const data = await response.json();
//   return { data, success: true };
// }
