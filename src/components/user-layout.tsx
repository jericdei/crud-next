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
    <main {...props}>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {actions}
      </div>

      <div>{children}</div>
    </main>
  );
}
