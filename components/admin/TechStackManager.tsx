"use client";

import { useState } from "react";
import { TechStack } from "@prisma/client";
import TechStackForm from "./TechStackForm";
import TechStackTable from "./TechStackTable";

type Props = {
    items: TechStack[];
};

export default function TechStackManager({ items }: Props) {
    const [editing, setEditing] = useState<TechStack | null>(null);
    const [showForm, setShowForm] = useState(false);

    const handleEdit = (item: TechStack) => {
        setEditing(item);
        setShowForm(true);
    };

    const handleAdd = () => {
        setEditing(null);
        setShowForm(true);
    };

    const handleClose = () => {
        setEditing(null);
        setShowForm(false);
    };

    return (
        <div className="space-y-6">
            {!showForm && (
                <button
                    onClick={handleAdd}
                    className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200"
                >
                    Tambah Tech Stack
                </button>
            )}

            {showForm && <TechStackForm editing={editing} onClose={handleClose} />}

            <TechStackTable items={items} onEdit={handleEdit} />
        </div>
    );
}