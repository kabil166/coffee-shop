import connectToDatabase from '../../lib/mongodb';
import { hashPassword } from '../../utils/auth';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../../model/schema';


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }else{
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const result = {...user,token:token}
      console.log(result);
      res.status(200).json({result:result, message:"user logged in successfully!"});
    }

}
