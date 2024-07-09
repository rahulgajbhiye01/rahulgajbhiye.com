"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const { toast } = useToast();
  return (
    <header className="sticky top-0 z-50 flex w-full bg-background shadow-sm shadow-violet-600 drop-shadow">
      <NavigationMenu className="mx-4 flex h-16 max-w-full flex-grow items-center justify-center xl:mx-8">
        <span className="left-[0px] top-[14px] z-50 hidden font-medium md:absolute md:block md:text-3xl">
          Rahul Gajbhiye
        </span>
        <NavigationMenuList className="flex flex-row">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-base">Home</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-base">Projects</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blogs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-base">Blogs</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <Button
          onClick={() => {
            navigator.clipboard.writeText("rahulgajbhiye201@gmail.com");
            toast({
              description: "Email copied to clipboard.",
            });
          }}
          className="right-[0px] top-[14px] hidden md:absolute md:block"
        >
          Email Me
        </Button>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
