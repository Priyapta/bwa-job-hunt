import FormModalApply from "@/components/FormModalApply";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";
import prisma from "../../../../../../lib/prisma";
import { supabasePublicUrl } from "@/lib/supabase";
import { dateFormat } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function getDetailJob(id: string) {
  const session = await getServerSession(authOptions);

  const data = await prisma.job.findFirst({
    where: { id },
    include: {
      Company: {
        include: {
          Companyoverview: true,
        },
      },
      CategoryJob: true,
    },
  });

  if (!data) return null;

  let imageUrl = "/images/company2.png";
  if (data.Company?.Companyoverview?.[0]?.image) {
    imageUrl = await supabasePublicUrl(
      data.Company.Companyoverview[0].image,
      "company",
    );
  }

  const applicants = data.applicantsCount ?? 0;
  const needs = data.need ?? 0;

  let isApply = 0;
  if (session?.user?.id) {
    isApply = await prisma.applicant.count({
      where: {
        userId: session.user.id,
        jobId: id,
      },
    });
  }

  return {
    ...data,
    imageUrl,
    applicants,
    needs,
    isApply,
  };
}

export default async function DetailJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getDetailJob(id);

  if (!data) {
    return <div className="p-10">Job not found</div>;
  }

  const progress = data.needs > 0 ? (data.applicants / data.needs) * 100 : 0;

  return (
    <>
      <div className="bg-slate-100 px-32 pt-10 pb-14">
        <div className="inline-flex gap-3 text-sm text-muted-foreground">
          <Link href="/" className="hover:underline hover:text-black">
            Home
          </Link>
          /
          <Link
            href="/find-companies"
            className="hover:underline hover:text-black"
          >
            Companies
          </Link>
          /
          <Link
            href={`/detail/company/${data?.Company?.Companyoverview?.[0]?.id}`}
            className="hover:underline hover:text-black"
          >
            {data?.Company?.Companyoverview?.[0]?.name}
          </Link>
          /<span className="text-black">{data.roles}</span>
        </div>

        <div className="bg-white shadow mt-10 p-5 w-11/12 mx-auto flex flex-row justify-between items-center">
          <div className="inline-flex items-center gap-5">
            <Image src={data.imageUrl} alt="company" width={88} height={88} />
            <div className="flex flex-col p-5">
              <div className="text-2xl font-semibold">{data.roles}</div>
              <div className="text-muted-foreground">
                {data?.Company?.Companyoverview?.[0]?.location} . {data.jobType}
              </div>
            </div>
          </div>

          <FormModalApply
            image={data.imageUrl}
            roles={data.roles}
            jobType={data.jobType}
            location={data?.Company?.Companyoverview?.[0]?.location ?? ""}
            id={data.id}
            isApply={data.isApply}
          />
        </div>
      </div>

      <div className="px-32 py-16 flex flex-row items-start gap-10">
        <div className="w-3/4">
          <div className="mb-4">
            <div className="text-3xl font-semibold mb-3">Description</div>
            <div
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: data.description ?? "" }}
            />
          </div>

          <div className="mb-4">
            <div className="text-3xl font-semibold mb-3">Responsibilites</div>
            <div
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: data.responsibility ?? "" }}
            />
          </div>

          <div className="mb-4">
            <div className="text-3xl font-semibold mb-3">Who You Are</div>
            <div
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: data.whoYouAre ?? "" }}
            />
          </div>

          <div className="mb-4">
            <div className="text-3xl font-semibold mb-3">Nice-To-Haves</div>
            <div
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: data.niceToHaves ?? "" }}
            />
          </div>
        </div>

        <div className="w-1/4">
          <div>
            <div className="text-3xl font-semibold">About this role</div>
            <div className="mt-6 p-6 bg-slate-50">
              <div className="mb-2">
                <span className="font-semibold">{data.applicants} Applied</span>{" "}
                <span className="text-gray-600">of {data.needs} capacity</span>
                <Progress value={progress} />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Apply Before</div>
                <div className="font-semibold">{dateFormat(data.dueDate)}</div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job Posted On</div>
                <div className="font-semibold">
                  {dateFormat(data.datePosted)}
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Job Type</div>
                <div className="font-semibold">{data.jobType}</div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="text-gray-500">Salary</div>
                <div className="font-semibold">
                  ${data.salaryFrom} - ${data.salaryTo}
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-10" />

          <div>
            <div className="text-3xl font-semibold">Category</div>
            <div className="my-10 inline-flex gap-4">
              <Badge>{data?.CategoryJob?.name ?? "-"}</Badge>
            </div>
          </div>

          <Separator className="my-10" />

          <div>
            <div className="text-3xl font-semibold">Required Skills</div>
            <div className="my-10 inline-flex gap-4">
              {data.requiredSkills?.map((item: string, i: number) => (
                <Badge variant="outline" key={item + i}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-32">
        <Separator className="mb-14" />
        <div className="mb-6">
          <div className="font-semibold text-3xl">Perks & Benefits</div>
          <div className="text-gray-500 mt-1">
            This job comes with several perks and benefits
          </div>

          <div className="grid grid-cols-3 gap-5">
            {Array.isArray(data.benefits) &&
              data.benefits.map((item: any, i: number) => (
                <div key={i}>
                  <BiCategory className="w-12 h-12 text-primary" />
                  <div className="font-semibold text-xl mt-6">
                    {item.benefit}
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    {item.description}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
