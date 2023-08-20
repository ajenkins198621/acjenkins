import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
const TO_EMAIL = process.env.TO_EMAIL ?? 'default@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'default@gmail.com';

type RequestType = {
    body: {
        name: string;
        email: string;
        message: string;
    }
}

type ResponseType = {
    status: (code: number) => {
        json: (data: {success?: string, error?: string}) => void;
    }
}

export default async function sendEmail (req: RequestType, res: ResponseType) {
    const { name, email, message } = req.body;
    const msg = {
        to: TO_EMAIL!,
        from: FROM_EMAIL!,
        subject: `Portfolio mail from ${name} (${email})`,
        text: message,
        html: message,
    };
    try {
        await sgMail.send(msg);
        res.status(201).json({ success: 'Thanks for reaching out!  I will get back to you ASAP!' });
    } catch (error) {
        res.status(500).json({ error: 'There was an reaching out.  Please check the fields above and try again.' });
    }
};
