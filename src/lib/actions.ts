"use server";

import { db } from "@/db";
import { User, users as usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export type UserInput = Omit<User, "id" | "createdAt" | "updatedAt">;

export async function createUser(user: UserInput) {
  return await db.insert(usersTable).values(user).returning();
}

export async function updateUser(id: string, user: UserInput) {
  return await db
    .update(usersTable)
    .set(user)
    .where(eq(usersTable.id, id))
    .returning();
}

export async function deleteUser(id: string) {
  return await db.delete(usersTable).where(eq(usersTable.id, id)).returning();
}
