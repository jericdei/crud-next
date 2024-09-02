"use client";

import type { User } from "@/db/schema";
import { Button } from "./ui/button";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import Link from "next/link";

interface UserCardProps {
  user: User;
  onDelete?: (id: string) => void;
}

export default function UserCard({ user, onDelete }: UserCardProps) {
  return (
    <>
      <div className="group flex flex-col rounded-lg p-4 hover:bg-zinc-200 dark:bg-zinc-300 dark:text-zinc-700 dark:hover:bg-zinc-300/90">
        <div className="flex justify-between">
          <p className="font-bold">
            {user.firstName} {user.lastName}
          </p>

          <div className="flex items-center gap-2 group-hover:visible">
            <Link
              className="flex items-center"
              href={`/users/form?id=${user.id}`}
            >
              <Button
                className="text-blue-700"
                variant="link"
                size="xs"
              >
                <Edit2Icon />
              </Button>
            </Link>

            <Button
              className="text-red-700"
              variant="link"
              size="xs"
              onClick={() => onDelete?.(user.id as string)}
            >
              <Trash2Icon />
            </Button>
          </div>
        </div>

        <small>{user.email}</small>
      </div>
    </>
  );
}
