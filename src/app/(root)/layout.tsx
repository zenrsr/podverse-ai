import { Toaster } from "@/components/ui/toaster";
import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";
import PodcastPlayer from "@/components/PodcastPlayer";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex relative flex-col">
      <main className="relative flex bg-black-3 ">
        <LeftSidebar />
        <section className="flex-1 flex-col p-4 sm:p-14 flex min-h-screen">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:p-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image
                src="/icons/logo.svg"
                alt="menu-icon"
                width={30}
                height={30}
              />
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              <Toaster />
              {children}
            </div>
          </div>
        </section>
        <RightSidebar />
      </main>
      <PodcastPlayer />
    </div>
  );
}
