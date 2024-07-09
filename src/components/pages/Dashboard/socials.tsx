"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createSocial, deleteSocial } from "@/lib/server/actions/social";
import { useFormState } from "react-dom";
import { SocialValidation } from "@/schema/zod";
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

const SocialsEditor = () => {
  const [state, formAction] = useFormState(createSocial, null);
  const [inputData, setInputData] = useState("");

  const { toast } = useToast();

  const form = useForm<z.infer<typeof SocialValidation>>({
    resolver: zodResolver(SocialValidation),
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
    <div className="m-8 flex w-full flex-row justify-center gap-4">
      <div className="flex flex-col gap-4">
        <span className="text-xl">Add New Social</span>
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
        <span className="text-xl">Delete Social</span>
        <div className="space-y-6">
          <Input
            placeholder="Name"
            name="delete"
            onChange={(e) => handleChange(e)}
          />

          <Button
            type="submit"
            onClick={async () => {
              const res = await deleteSocial(inputData);
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

export default SocialsEditor;
