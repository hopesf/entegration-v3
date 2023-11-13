"use client";

import Navbar from "@/components/Navbar";
import SettingsLayout from "@/components/settings/SettingsLayout";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  return (
    <>
      <Navbar />
      <SettingsLayout>{/* <ProfileForm /> */}</SettingsLayout>;
    </>
  );
}
