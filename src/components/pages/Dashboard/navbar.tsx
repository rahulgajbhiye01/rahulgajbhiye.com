"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <span className="text-lg font-medium">Dashboard</span>
      <div className="flex flex-row gap-4">
        <Link href={"/dashboard"} className="hover:underline">
          dashboard
        </Link>
        <span>/</span>
        <Link href={"/dashboard/blogs"} className="hover:underline">
          blogs
        </Link>
        <Link href={"/dashboard/projects"} className="hover:underline">
          projects
        </Link>
        <Link href={"/dashboard/skills"} className="hover:underline">
          skills
        </Link>
        <Link href={"/dashboard/socials"} className="hover:underline">
          socials
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
