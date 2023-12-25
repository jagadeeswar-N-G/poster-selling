import  EmailTemplate  from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any, res: any) {
  try {
    const body = await req.json()
    const {emails,userName} = body

    if (!emails) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: emails,
      subject: "posters selling invites you",
      react: EmailTemplate({ firstName: userName }) as React.ReactElement,
    });

    if (error) {
    
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}