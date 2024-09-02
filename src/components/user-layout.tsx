import { HTMLAttributes, PropsWithChildren } from "react";

interface UserLayoutProps
  extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  title: string;
  actions?: React.ReactNode;
}

export default function UserLayout({
  title,
  children,
  actions,
  ...props
}: UserLayoutProps) {
  return (
    <main
      className="container mx-auto px-8 py-16"
      {...props}
    >
      <div className="flex justify-between">
        <h1 className="mb-4 text-3xl font-bold">{title}</h1>

        {actions}
      </div>

      <div>{children}</div>
    </main>
  );
}
