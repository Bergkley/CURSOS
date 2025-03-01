import { auth } from "auth";
import { Session } from "next-auth";

export default async function getSession(): Promise<Session | null> {
    const session = await auth();
    return session
}