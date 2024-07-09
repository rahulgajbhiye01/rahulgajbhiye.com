"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createProject, deleteProject } from "@/lib/server/actions/project";
import { useFormState } from "react-dom";
import { ProjectValidation } from "@/schema/zod";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const ProjectsEditor = () => {
  const [state, formAction] = useFormState(createProject, null);
  const [inputData, setInputData] = useState("");

  const { toast } = useToast();

  const form = useForm<z.infer<typeof ProjectValidation>>({
    resolver: zodResolver(ProjectValidation),
  });

  useEffect(() => {
    toast({
      description: state?.message,
    });
  }, [state]);

  const handleChange = (e: any) => {
    setInputData(e.target.value);
  };

  return (
    <div className="flex w-full flex-row justify-center gap-4 p-8">
      <div className="flex w-3/12 flex-col gap-4">
        <span className="text-xl">Add New Project</span>
        <Form {...form}>
          <form action={formAction} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Title"
                      value={field.value}
                      name={field.name}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Description"
                      value={field.value}
                      name={field.name}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Link"
                      value={field.value}
                      name={field.name}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Github"
                      value={field.value}
                      name={field.name}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="techstack"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="TechStack"
                      value={field.value}
                      name={field.name}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Save</Button>
          </form>
        </Form>
      </div>
      <div className="flex w-3/12 flex-col gap-4">
        <span className="text-xl">Delete Project</span>
        <div className="space-y-6">
          <Input
            placeholder="Title"
            name="delete"
            onChange={(e) => handleChange(e)}
          />

          <Button
            type="submit"
            onClick={async () => {
              const res = await deleteProject(inputData);
              toast({
                description: res.message,
              });
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsEditor;
