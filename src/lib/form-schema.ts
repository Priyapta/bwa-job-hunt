import z, { email } from "zod";

export const formFilterSchema = z.object({
  categories: z.array(z.string()),
});

export const formFilterCompanySchema = z.object({
  industry: z.array(z.string()),
});

export const formApplySchema = z.object({
  resume: z.any().refine((file: any) => file?.name, "Please uplaod Resume"),
  fullname: z
    .string()
    .min(1, "Full name is required")
    .min(5, { message: "Full name minimal 5 character" }),
  email: z.email({ message: "Email is required" }),
  phone: z.string().min(6, { message: "Phone have min 6 characters" }),
});
