import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { categoryJobType, JobType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
interface JobCard extends JobType {}
function JobCard({
  image,
  jobType,
  name,
  type,
  location,
  skills,
  need,
  applicantsCount,
  id,
}: JobCard) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/detail/job/" + id)}
      className="w-full border mb-5 p-6 border-border flex flex-row justify-between items-center"
    >
      <div className="flex flex-row items-start gap-6">
        <div>
          <Image src={image} alt={image} width={64} height={64} />
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground mb-2">
            {type} . {location}
          </div>
          <div className="h-5 inline-flex gap-2 items-center">
            <Badge variant="secondary">{jobType}</Badge>
            <Separator orientation="vertical" />
            {skills.map((item: string, i: number) => (
              <Badge key={i}>{item}</Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[200px]">
        <Button className="w-full" size="lg">
          Apply
        </Button>
        <div className="w-full h-2 mt-2 relative bg-gray-300">
          <Progress className="mt-2 " value={(applicantsCount / need) * 100} />
        </div>
        <div className="text-gray-500 text-sm text-center mt-2">
          <span className="text-black font-semibold">
            {applicantsCount} applied{" "}
          </span>
          of {need} capacity
        </div>
      </div>
    </div>
  );
}

export default JobCard;
