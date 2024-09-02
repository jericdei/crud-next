"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Button } from "./ui/button";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";

interface UserAlertDialogProps extends AlertDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onConfirm?: () => void;
}

export default function UserDeleteConfirmation({
  isOpen,
  setIsOpen,
  onConfirm,
  ...props
}: UserAlertDialogProps) {
  const closeDialog = () => setIsOpen(false);

  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={setIsOpen}
      {...props}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this user?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <Button onClick={closeDialog}>No</Button>

          <AlertDialogAction onClick={onConfirm}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
