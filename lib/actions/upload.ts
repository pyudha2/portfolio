"use server";

import cloudinary from "@/lib/cloudinary";

export async function uploadImage(formData: FormData) {
    const file = formData.get("file") as File;

    if (!file) {
        throw new Error("File tidak ditemukan");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: "portfolio",
                fetch_format: "auto",
                quality: "auto",
            },
            (error, result) => {
                if (error || !result) return reject(error);
                resolve(result as { secure_url: string });
            }
        );
        stream.end(buffer);
    });

    return result.secure_url;
}