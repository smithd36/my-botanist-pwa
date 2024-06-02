import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (plainPass: string, hashPass: string): Promise<boolean> => {
  return bcrypt.compare(plainPass, hashPass);
};
