"use client";

import { User } from "@/db/schema";
import UserCard from "./user-card";
import UserDeleteConfirmation from "./user-delete-confirmation";
import { useState } from "react";
import { deleteUser as deleteUserAction } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | undefined>();

  const deleteUser = async () => {
    if (!selectedUser) return;

    await deleteUserAction(selectedUser);

    toast({
      title: "Success!",
      description: "User was deleted successfully",
    });
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={async () => {
              setSelectedUser(user.id);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <UserDeleteConfirmation
        isOpen={open}
        setIsOpen={setOpen}
        onConfirm={deleteUser}
      />
    </>
  );
}
