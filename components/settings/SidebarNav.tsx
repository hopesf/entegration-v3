import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export default function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  return (
    <nav className={"flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-5"}>
      {items.map((item) => (
        <Link key={item.href} href={item.href} className={"hover:bg-transparent hover:underline items-start"}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
