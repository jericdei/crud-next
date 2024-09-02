import UserLayout from "@/components/user-layout";
import { db } from "@/db";
import { users as usersTable } from "@/db/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const users = await db.select().from(usersTable);

  return (
    <UserLayout title="Users">
      {users.map((user) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </UserLayout>
  );
}
