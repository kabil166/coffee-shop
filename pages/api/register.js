import connectToDatabase from '../../lib/mongodb';
import { hashPassword } from '../../utils/auth';
import User from '../../model/schema';
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(422).json({ message: 'Invalid input' });
  }

  await connectToDatabase();
  // const users = db.collection('User');

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(422).json({ message: 'User already exists' });
  }

  const hashedPassword = await hashPassword(password);
  

  const result = new User(
    {
        name,
        email,
        password,
      }
  );

const response = await result.save();

  console.log(response);
  
  res.status(201).json({body:response, message: 'User created' });
}
