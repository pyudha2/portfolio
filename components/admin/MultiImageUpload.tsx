"use client";

import { useState } from "react";
import { uploadImage } from "@/lib/actions/upload";

type Props = {
    value: string[];
    onChange: (urls: string[]) => void;
};

export default function MultiImageUpload({ value, onChange }: Props) {
    const [uploading, setUploading] = useState(false);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        setUploading(true);
        const uploaded: string[] = [];

        for (const file of Array.from(files)) {
            const formData = new FormData();
            formData.append("file", file);
            const url = await uploadImage(formData);
            uploaded.push(url);
        }

        onChange([...value, ...uploaded]);
        setUploading(false);
        e.target.value = "";
    };

    const handleRemove = (url: string) => {
        onChange(value.filter((item) => item !== url));
    };

    return (
        <div className="space-y-2">
            <div className="grid grid-cols-4 gap-2">
                {value.map((url) => (
                    <div key={url} className="relative">
                        <img src={url} alt="preview" className="h-24 w-full rounded-md object-cover" />
                        <button
                            type="button"
                            onClick={() => handleRemove(url)}
                            className="absolute right-1 top-1 rounded-full bg-red-600 px-2 py-0.5 text-xs text-white"
                        >
                            x
                        </button>
                    </div>
                ))}
            </div>
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                disabled={uploading}
                className="block w-full text-sm text-neutral-400 file:mr-4 file:rounded-md file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-medium file:text-black hover:file:bg-neutral-200"
            />
            {uploading && <p className="text-sm text-neutral-500">Mengupload...</p>}
        </div>
    );
}