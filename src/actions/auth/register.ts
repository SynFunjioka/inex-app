'use server'
import { User } from "@/db/entities/User.entity";
import { AppDataSource, initializeDatabase } from "@/db";
import { cryptPassowrd } from "@/utils/crypting";

export const registerUser = async (email: string, password: string) => {
  try {
    await initializeDatabase();

    const user = new User();
    user.email = email;
    user.password = await cryptPassowrd(password);

    const userRepository = AppDataSource.getRepository(User)
    await userRepository.save(user);

    return {
      ok: true,
      message: 'User registered successfully',
      user: {
        id: user.id,
        email: user.email
      }
    }
    
  } catch (error) {
    console.error('Error registering user:', error);
    return {
      ok: false,
      message: 'Error registering user'
    }
  }
}