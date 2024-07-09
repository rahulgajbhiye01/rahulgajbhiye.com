"use server";

import { LoginValidation } from "@/schema/zod";
import { cookies } from "next/headers";
import { encrypt } from "@/lib/session";
import { decrypt } from "@/lib/session";
import { UserExist } from "@/lib/db/db-helper";

export async function login(prevState: any, formData: FormData) {
  // Input verification
  const userInput = LoginValidation.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // User verification on DB
  const userData = await UserExist(userInput.email);
  // Checking if cookie exist or not
  const cookieData = cookies().get("session")?.value;

  if (cookieData) {
    const cookieValue = await decrypt(cookieData);
    return {
      message: "success",
      data: {
        email: cookieValue.name,
        password: cookieValue.email,
      },
    };
  } else if (userData) {
    if (
      userData.email === userInput.email &&
      userData.password === userInput.password
    ) {
      // Create the session
      const expires = new Date(Date.now() + 48 * 60 * 60 * 1000);
      const session = await encrypt({ userData, expires });

      // Save the session in a cookie
      cookies().set("session", session, { expires, httpOnly: true });
      return {
        message: "success",
        data: {
          email: userData.email,
          password: userData.password,
        },
      };
    }
  }
}
