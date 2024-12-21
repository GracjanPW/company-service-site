'use server';

import { sendMail } from "@/lib/mailer";

export const sendEmail = async (formData:FormData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    return await sendMail(email as string, `New message from ${name}`, message as string);
};

