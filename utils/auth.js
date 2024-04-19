import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secret = process.env.SECRET;

export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export async function comparePasswords(password, hashedPassword) {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
}

export function generateToken(payload) {
  const token = jwt.sign(payload, secret, { expiresIn: '1d' });
  return token;
}

export function verifyToken(token) {
  const payload = jwt.verify(token, secret);
  return payload;
}
