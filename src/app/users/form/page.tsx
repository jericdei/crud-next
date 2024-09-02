import UserForm from "@/components/user-form";
import UserLayout from "@/components/user-layout";
import { db } from "@/db";
import { User } from "@/db/schema";

export default async function UserFormPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const id = searchParams.id ? parseInt(searchParams.id) : undefined;
  let user: User | undefined;

  if (id) {
    user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
    });
  }

  return (
    <UserLayout title={user ? "Edit User" : "Create User"}>
      <UserForm user={user} />
    </UserLayout>
  );
}
