"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createSkill, deleteSkill } from "@/lib/server/actions/skill";
import { useFormState } from "react-dom";
import { SkillValidation } from "@/schema/zod";
import { useToast } from "@/components/ui/use-toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";

const SkillsEditor = () => {
  const [state, formAction] = useFormState(createSkill, null);
  const [deleteSkillData, setDeleteSkillData] = useState("");

  const { toast } = useToast();

  const form = useForm<z.infer<typeof SkillValidation>>({
    resolver: zodResolver(SkillValidation),
  });

  useEffect(() => {
    toast({
      description: state?.message,
    });
  }, [state]);

  const handleChange = (e: any) => {
    setDeleteSkillData(e.target.value);
  };

  return (
    <div className="m-8 flex w-full flex-row justify-center gap-4">
      <div className="flex flex-col gap-4">
        <span className="text-xl">Add New Skill</span>
        <Form {...form}>
          <form action={formAction} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name"
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
              name="category"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} name={field.name}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="LANGUAGES">Languages</SelectItem>
                      <SelectItem value="FRAMEWORKS / LIBRARIES">
                        Frameworks / Libraries
                      </SelectItem>
                      <SelectItem value="DATABASES">Databases</SelectItem>
                      <SelectItem value="CLOUD / DEVOPS">
                        Cloud / Devops
                      </SelectItem>
                      <SelectItem value="TOOLS">Tools</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="icon"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Icon"
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
      <div className="flex flex-col gap-4">
        <span className="text-xl">Delete Skill</span>
        <div className="space-y-6">
          <Input
            placeholder="Name"
            name="delete"
            onChange={(e) => handleChange(e)}
          />

          <Button
            type="submit"
            onClick={async () => {
              const res = await deleteSkill(deleteSkillData);
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

export default SkillsEditor;
