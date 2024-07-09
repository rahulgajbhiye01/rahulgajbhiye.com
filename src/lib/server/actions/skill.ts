"use server";

import { db } from "@/lib/db/db";
import { SkillValidation } from "@/schema/zod";

export async function createSkill(prevState: any, formData: FormData) {
  const skill = SkillValidation.parse({
    name: formData.get("name"),
    category: formData.get("category"),
    icon: formData.get("icon"),
  });

  try {
    await db.skill.create({
      data: {
        name: skill.name,
        category: skill.category,
        icon: skill.icon,
      },
    });
    return { message: "Skill added successfully", status: 200 };
  } catch (error) {
    return {
      message: "Error not able to add skill, please try again.",
      status: 500,
    };
  }
}

export async function deleteSkill(skill: string) {
  try {
    await db.skill.delete({
      where: {
        name: skill,
      },
    });
    return { message: "Skill deleted successfully", status: 200 };
  } catch (error) {
    return {
      message: "Error not able to delete skill, please try again.",
      status: 500,
    };
  }
}
