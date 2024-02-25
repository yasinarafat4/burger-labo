import { User } from "@/app/models/User";
import mongoose from "mongoose";

export const POST = async (req) => {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const createdUser = await User.create(body);
  return Response.json(createdUser);
};
