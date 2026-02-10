import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import bcrypt from "bcryptjs";
import { boolean } from "zod";
import { categoryJobType, CompanyType, JobType, OptionType } from "@/types";
import { supabasePublicUrl } from "./supabase";
import { Company } from "@prisma/client";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 8);

  return hashedPassword;
};
export const comparePassword = async (
  password: string,
  hashedPassword: string,
) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json() as Promise<JSON>;
}

export const parsingCategories = (
  data: any,
  isLoading: boolean,
  error: any,
  isIndustry?: boolean,
) => {
  if (!isLoading && !error && data) {
    return data.map((item: any) => {
      return {
        id: isIndustry ? item.name : item.id,
        name: item.name,
        totalJobs: item._count.Job,
      };
    }) as categoryJobType[];
  }
  return [];
};

export const parsingJobs = async (
  data: any,
  isLoading: boolean,
  error: any,
) => {
  if (!isLoading && !error && data) {
    return await Promise.all(
      data.map(async (item: any) => {
        let imageName = item.company?.Companyoverview[0]?.image;
        let imageUrl;
        if (imageName) {
          imageUrl = await supabasePublicUrl(imageName, "company");
        } else {
          imageUrl = "/images/company.png";
        }
        const job: JobType = {
          id: item.id,
          name: item.roles,
          applicantsCount: item.applicantsCount,
          category: item.CategoryJob,
          desc: item.description,
          jobType: item.jobType,
          image: imageUrl,
          location: item.Company?.Companyoverview[0]?.location,
          need: item.need,
          type: item.CategoryJob.name,
          skills: item.requiredSkills,
        };
        return job;
      }),
    );
  }
  return [];
};

export const parsingCategoriesToOptions = (
  data: any,
  isLoading: boolean,
  error: any,
) => {
  if (!isLoading && !error && data) {
    return data.map((item: any) => {
      return {
        id: item.id,
        label: item.name,
      } as OptionType;
    }) as OptionType[];
  }
  return [];
};

export const parsingCompanies = async (
  data: any,
  isLoading: boolean,
  error: any,
) => {
  if (!isLoading && !error && data) {
    return await Promise.all(
      data.map(async (item: any) => {
        const overview = item.Companyoverview?.[0];

        let imageName = overview?.image;
        let imageUrl;
        if (imageName) {
          imageUrl = await supabasePublicUrl(imageName, "company");
        } else {
          imageUrl = "/images/company.png";
        }
        console.log(overview?.industry);
        const company: CompanyType = {
          id: item.id,
          name: overview?.name ?? item.name ?? "-",
          image: imageUrl,
          dateFounded: overview?.dateFounded ?? null,
          description: overview?.description ?? "",
          employee: overview?.employee ?? "",
          industry: overview?.industry.name ?? "",
          location: overview?.location ?? "",
          techStack: overview?.techStack ?? [],
          website: overview?.website ?? "",
          sosmed: item.CompanySocialMedia?.[0] ?? null,
          teams: item.CompanyTeam ?? [],
          totalJob: item._count?.Job ?? 0,
        };

        return company;
      }),
    );
  }
  return [];
};
