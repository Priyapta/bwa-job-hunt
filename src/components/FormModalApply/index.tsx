"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { formApplySchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import UploadField from "../UploadField";
import { useSession } from "next-auth/react";
import { supabaseUploadFile } from "@/lib/supabase";
import { resume } from "react-dom/server";
import { fetcher } from "@/lib/utils";
import { toast } from "sonner";
import { title } from "process";
import { useRouter } from "next/navigation";

interface modalApply {
  image: string | undefined;
  roles: string | undefined;
  location: string | undefined;
  jobType: string | undefined;
  id: string | undefined;
}
function FormModalApply({ image, roles, location, jobType, id }: modalApply) {
  const form = useForm<z.infer<typeof formApplySchema>>({
    resolver: zodResolver(formApplySchema),
    defaultValues: {
      resume: "",
      fullname: "",
      email: "",
      phone: "",
      previousJobTitle: "",
      linkedIn: "",
      portofolio: "",
      coverLetter: "",
    },
  });
  const router = useRouter();
  const { data: session, status } = useSession();
  const onSubmit = async (val: z.infer<typeof formApplySchema>) => {
    console.log(session?.user, id);
    try {
      const { filename, error } = await supabaseUploadFile(
        val.resume,
        "applicant",
      );
      const reqData = {
        userId: session?.user.id,
        jobId: id,
        resume: filename,
        coverLetter: val.coverLetter,
        linkedIn: val.linkedIn,
        phone: val.phone,
        portofolio: val.portofolio,
        previousJobTitle: val.previousJobTitle,
      };
      if (error) {
        throw "error";
      }
      await fetch("/api/job/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqData),
      });
      toast.success("Apply Job Success");

      router.replace("/");
    } catch (error) {
      console.log(error);
      toast.error("Please try again");
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {session ? (
            <Button size="lg" className="text-lg px-12 py-6">
              Apply
            </Button>
          ) : (
            <Button variant="outline" disabled>
              Sign In First
            </Button>
          )}
        </DialogTrigger>

        <DialogContent className="sm:max-w-[600px]:">
          <div className="inline-flex items-center gap-4">
            <div>
              {" "}
              <Image src={image!!} alt={image!!} width={60} height={60} />
            </div>
            <div>
              <div className="text-lg font-semibold">
                Social Media Assistant
              </div>
              <div className="text-gray-500">
                {location} . {jobType}
              </div>
            </div>
          </div>
          <Separator className="my-2" />
          <div className="mb-5">
            <div className="font-semibold text-lg">Submit your application</div>
            <div className="text-gray-500">
              The following is required and will only be shared with Nomald{" "}
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="previousJobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current of previous job title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What's your current or previous job"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Separator />
              <h2 className="font-semibold">LINKS</h2>
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="linkedIn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>linkedIn URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Linkedin URL"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="portofolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portofolio URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Add a cover letter else you want to share"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <UploadField form={form} />
              <Button className="w-full">Apply</Button>
            </form>
          </Form>

          <div></div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FormModalApply;
