"use server";

import { db } from "@/lib/db/db";
import { SocialValidation } from "@/schema/zod";

export async function createSocial(prevState: any, formData: FormData) {
  const skill = SocialValidation.parse({
    name: formData.get("name"),
    link: formData.get("link"),
    icon: formData.get("icon"),
  });

  try {
    await db.skill.create({
      data: {
        name: skill.name,
        category: skill.link,
        icon: skill.icon,
      },
    });
    return { message: "Social account added successfully", status: 200 };
  } catch (error) {
    return {
      message: "Error not able to add social account, please try again.",
      status: 500,
    };
  }
}

export async function deleteSocial(social: string) {
  try {
    await db.skill.delete({
      where: {
        name: social,
      },
    });
    return { message: "Social account deleted successfully", status: 200 };
  } catch (error) {
    return {
      message: "Error not able to delete social account, please try again.",
      status: 500,
    };
  }
}
