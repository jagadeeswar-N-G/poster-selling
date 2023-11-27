import {connect} from "@/app/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest){
  try {
    const requestBody = await request.json();
    const { username, email, password } = requestBody;

    // cheking if the user already exits
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "user already Exits" },
        { status: 400 }
      );
    }

    // hashing the user password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // creating new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "user created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

