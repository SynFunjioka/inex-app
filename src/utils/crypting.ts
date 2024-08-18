import '../../envConfig';
import bcrypt from 'bcrypt';

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS!);

export const cryptPassowrd = async (password: string) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const comparePassword = async (password: string, hash: string) => {
  const areEquals = await bcrypt.compare(password, hash);
  return areEquals;
};