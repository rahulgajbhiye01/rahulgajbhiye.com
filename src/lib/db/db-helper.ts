"use server";

import { db } from "@/lib/db/db";

export async function getSkillsData() {
  return await db.skill.findMany();
}

export async function getProjectsData() {
  return await db.project.findMany();
}

export async function getSocialsData() {
  return await db.social.findMany();
}

export async function getBlogsData() {
  return await db.blog.findMany();
}

export async function UserExist(userEmail: string) {
  const user = await db.user.findFirst({
    where: {
      email: userEmail,
    },
  });

  return user;
}
