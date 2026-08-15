"use client";

import { useState } from "react";
import { Project } from "@prisma/client";
import ProjectForm from "./ProjectForm";
import ProjectTable from "./ProjectTable";

type Props = {
    items: Project[];
};

export default function ProjectManager({ items }: Props) {
    const [editing, setEditing] = useState<Project | null>(null);
    const [showForm, setShowForm] = useState(false);

    const handleEdit = (item: Project) => {
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
                    Tambah Project
                </button>
            )}

            {showForm && <ProjectForm editing={editing} onClose={handleClose} />}

            <ProjectTable items={items} onEdit={handleEdit} />
        </div>
    );
}