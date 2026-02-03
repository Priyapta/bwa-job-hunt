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
function FormModalApply() {
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
  const onSubmit = (val: z.infer<typeof formApplySchema>) => {
    console.log(val);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" className="text-lg px-12 py-6">
            Apply
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[600px]:">
          <div className="inline-flex items-center gap-4">
            <div>
              {" "}
              <Image
                src="/images/company2.png"
                alt="/images/company2.png"
                width={60}
                height={60}
              />
            </div>
            <div>
              <div className="text-lg font-semibold">
                Social Media Assistant
              </div>
              <div className="text-gray-500">
                Agency . Paris , France . Full-Time
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
