"use server";

import { db } from "@/db";
import { users as usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";
import z from "zod";
import { permanentRedirect } from "next/navigation";

const userInput = z.object({
  id: z.number().optional(),
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email().min(1, "Email is required"),
  birthday: z.string().min(1, "Birthday is required"),
});

export const upsertUser = createServerAction()
  .input(userInput, { type: "formData" })
  .handler(async ({ input }) => {
    const data = {
      ...input,
      birthday: new Date(Date.parse(input.birthday)),
    };

    if (input.id) {
      await db.update(usersTable).set(data).where(eq(usersTable.id, input.id));
    } else {
      await db.insert(usersTable).values(data);
    }

    revalidatePath("/users");
    permanentRedirect("/users");
  });

export const deleteUser = createServerAction()
  .input(z.number())
  .handler(async ({ input }) => {
    await db.delete(usersTable).where(eq(usersTable.id, input));

    revalidatePath("/users");
  });
