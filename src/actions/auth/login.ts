/* 'use server'
import { User } from "@/database/entities/User";
import { AppDataSource, initializeDatabase } from "@/db";
import { cryptPassowrd } from "@/utils/crypting";
import { signIn } from "@/auth.config";

export const loginUser = async (email: string, password: string) => {
  const user = await signIn("credentials", {email ,password})

  if (!user) {
    return {
      ok: false,
      message: 'Invalid credentials'
    }
  }

  return {
    ok: true,
    message: 'User logged in successfully',
    // user: {
    //   id: user.id,
    //   email: user.email
    // }
  }
} */