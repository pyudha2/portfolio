"use client";

import { useState } from "react";
import { uploadImage } from "@/lib/actions/upload";
import Image from "next/image";

type Props = {
    value?: string;
    onChange: (url: string) => void;
};

export default function ImageUpload({ value, onChange }: Props) {
    const [uploading, setUploading] = useState(false);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        const url = await uploadImage(formData);
        onChange(url);
        setUploading(false);
    };

    return (
        <div className="space-y-2">
            {value && (
                <Image src={value} alt="preview" className="h-32 w-32 rounded-md object-cover" width={128} height={128} />
            )}
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                disabled={uploading}
                className="block w-full text-sm text-neutral-400 file:mr-4 file:rounded-md file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-medium file:text-black hover:file:bg-neutral-200"
            />
            {uploading && <p className="text-sm text-neutral-500">Mengupload...</p>}
        </div>
    );
}