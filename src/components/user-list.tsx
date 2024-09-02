"use client";

import { User } from "@/db/schema";
import UserCard from "./user-card";
import UserDeleteConfirmation from "./user-delete-confirmation";
import { useState } from "react";

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | undefined>();

  const deleteUser = () => {
    console.log("delete", selectedUser);
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={() => {
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
