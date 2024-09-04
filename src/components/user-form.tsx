"use client";

import { User } from "@/db/schema";
import { upsertUser } from "@/lib/actions";
import { useServerAction } from "zsa-react";
import { Input } from "./ui/input";
import DatePicker from "./date-picker";
import { Button } from "./ui/button";
import moment from "moment";

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
          defaultValue={user?.firstName}
        />

        <Input
          name="lastName"
          placeholder="Last Name"
          defaultValue={user?.lastName}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          defaultValue={user?.email}
        />

        <DatePicker
          name="birthday"
          value={moment(user?.birthday).format("YYYY-MM-DD")}
        />
      </div>

      <Button type="submit">Save</Button>
    </form>
  );
}
