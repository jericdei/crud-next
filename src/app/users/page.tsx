import Paginator from "@/components/paginator";
import { Button } from "@/components/ui/button";
import UserAlertDialog from "@/components/user-alert-dialog";
import UserCard from "@/components/user-card";
import UserLayout from "@/components/user-layout";
import UserList from "@/components/user-list";
import { db } from "@/db";
import { users as usersTable } from "@/db/schema";
import { count } from "drizzle-orm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

const PER_PAGE = 12;

export default async function UsersPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const userCount = await db.select({ count: count() }).from(usersTable);

  const users = await db
    .select()
    .from(usersTable)
    .limit(PER_PAGE)
    .offset(searchParams ? (parseInt(searchParams.page) - 1) * PER_PAGE : 0);

  return (
    <UserLayout
      title="Users"
      actions={<UserActions />}
    >
      <UserList users={users} />

      <div className="mt-16">
        <Paginator
          total={userCount[0].count}
          perPage={PER_PAGE}
        />
      </div>
    </UserLayout>
  );
}

function UserActions() {
  return (
    <Link href="/users/form">
      <Button variant="success">Create User</Button>
    </Link>
  );
}
