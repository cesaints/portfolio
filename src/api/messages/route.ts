import { NextResponse } from "next/server";
import clientPromise from "@shared/lib/db";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();
        if (!name || !email || !message) {
            return NextResponse.json({ ok: false, error: "Dados inválidos" }, { status: 400 });
        }
        const client = await clientPromise;
        const db = client.db();
        await db.collection("messages").insertOne({ name, email, message, createdAt: new Date() });
        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ ok: false, error: "Erro interno" }, { status: 500 });
    }
}
