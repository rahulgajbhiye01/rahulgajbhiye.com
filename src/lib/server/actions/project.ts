"use server";

import { db } from "@/lib/db/db";
import { ProjectValidation } from "@/schema/zod";
import { getSkillsData } from "@/lib/db/db-helper";

export async function createProject(prevState: any, formData: FormData) {
  const project = ProjectValidation.parse({
    title: formData.get("title"),
    description: formData.get("description"),
    link: formData.get("link"),
    github: formData.get("github"),
    techstack: formData.get("techstack"),
  });

  const skillsData = await getSkillsData();
  const data = project.techstack;
  const techstack = data.split(" ");
  const filteredTech = skillsData.filter((item) =>
    techstack.includes(item.name),
  );

  try {
    await db.project.create({
      data: {
        title: project.title,
        description: project.description,
        link: project.link,
        github: project.github,
        techstack: filteredTech,
      },
    });
    return { message: "Project added successfully", status: 200 };
  } catch (error) {
    return {
      message: "Error not able to add project, please try again.",
      status: 500,
    };
  }
}

export async function deleteProject(project: string) {
  try {
    await db.project.delete({
      where: {
        title: project,
      },
    });
    return { message: "Project deleted successfully", status: 200 };
  } catch (error) {
    return {
      message: "Error not able to delete project, please try again.",
      status: 500,
    };
  }
}
