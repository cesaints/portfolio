import { z } from "zod";

export type ContactMessages = { name: string; email: string; message: string };

export function makeContactSchema(msg: ContactMessages) {
    return z.object({
        name: z.string().min(2, msg.name),
        email: z.string().email(msg.email),
        message: z.string().min(10, msg.message),
    });
}

export type ContactInput = { name: string; email: string; message: string };
