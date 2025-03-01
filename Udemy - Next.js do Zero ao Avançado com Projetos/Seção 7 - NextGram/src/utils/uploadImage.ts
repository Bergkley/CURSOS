import {promises as fs } from "fs"
import path from "path"


export default async function uploadImage(imageFile: File): Promise<{uploadDir: string, imageUrl: string}> {
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, imageFile.name);
    const arrayBuffer = await imageFile.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(arrayBuffer));
    const imageUrl = `/uploads/${imageFile.name}`;

    return {uploadDir, imageUrl};
}