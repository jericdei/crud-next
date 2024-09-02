import { db } from "@/db";
import { User } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function UserFormPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const id = searchParams.id;
  let user: User | undefined;

  if (id) {
    user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
    });
  }

  return <UserForm user={user} />;
}

function UserForm({ user }: { user?: User }) {
  return <div>User form</div>;
}
