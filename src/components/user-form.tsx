"use client";

import { User } from "@/db/schema";
import { upsertUser } from "@/lib/actions";
import { useServerAction } from "zsa-react";
import { Input } from "./ui/input";
import DatePicker from "./date-picker";
import { Button } from "./ui/button";

export default function UserForm({ user }: { user?: User }) {
  const { executeFormAction, error } = useServerAction(upsertUser, {
    bind: {
      id: user?.id,
    },
  });

  return (
    <form
      className="space-y-4"
      action={executeFormAction}
    >
      <pre>{JSON.stringify(error?.fieldErrors, null, 2)}</pre>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Input
          name="firstName"
          placeholder="First Name"
        />

        <Input
          name="lastName"
          placeholder="Last Name"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
        />

        <DatePicker name="birthday" />
      </div>

      <Button type="submit">Save</Button>
    </form>
  );
}
