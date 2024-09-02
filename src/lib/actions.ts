"use server";

import { db } from "@/db";
import { User, users as usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export type UserInput = Omit<User, "id" | "createdAt" | "updatedAt">;

export async function createUser(user: UserInput) {
  return await db
    .insert(usersTable)
    .values({
      ...user,
      createdAt: new Date(),
    })
    .returning();
}

export async function updateUser(id: number, user: UserInput) {
  return await db
    .update(usersTable)
    .set(user)
    .where(eq(usersTable.id, id))
    .returning();
}

export async function deleteUser(id: number, path: string) {
  await db.delete(usersTable).where(eq(usersTable.id, id));

  revalidatePath(path);
}
