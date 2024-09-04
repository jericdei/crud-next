"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "./ui/input";
import { InputHTMLAttributes, useState } from "react";

interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function DatePicker(props: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <div className="relative">
          <Input
            type="text"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
            placeholder="Pick a date"
            value={date ? format(date, "yyyy-MM-dd") : ""}
            readOnly
            {...props}
          />

          <CalendarIcon className="absolute right-0 top-2.5 mr-2 h-4 w-4" />
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            setDate(date);
            setOpen(false);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
