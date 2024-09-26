import { YelpRecentLoginEmail } from '@/components/shared/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['ffhdrfs@gmail.com'],
      subject: 'This is from shop bd',
      react: YelpRecentLoginEmail({ userFirstName: "Alan",
        loginDate: new Date("September 7, 2022, 10:58 am"),
        loginDevice: "Chrome on Mac OS X",
        loginLocation: "Upland, California, United States",
        loginIp: "47.149.53.167", }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
