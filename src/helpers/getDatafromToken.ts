import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server'

export const getDatafromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get('token')?.value || '';
    const decodedToken: any = jwt.verify(token, process.env.SECRET_TOKEN!);
    return decodedToken.id
  } catch (error: any) {
    console.log(error.message)
  }
}

