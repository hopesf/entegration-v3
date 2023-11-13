"use client";

import { Separator } from "../ui/separator";
import SidebarNav from "./SidebarNav";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const sidebarNavItems = [
    {
      title: "Profile",
      href: "/settings/forms",
    },
    {
      title: "Account",
      href: "/settings/forms/account",
    },
    {
      title: "Appearance",
      href: "/settings/forms/appearance",
    },
    {
      title: "Notifications",
      href: "/settings/forms/notifications",
    },
    {
      title: "Display",
      href: "/settings/forms/display",
    },
  ];

  return (
    <>
      <div>
        {/* <Image src="/examples/forms-light.png" width={1280} height={791} alt="Forms" className="block dark:hidden" /> */}
        {/* <Image src="/examples/forms-dark.png" width={1280} height={791} alt="Forms" className="hidden dark:block" /> */}
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5 max-h-screen h-screen">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
