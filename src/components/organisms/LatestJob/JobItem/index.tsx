import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { JobType } from "@/types";
import Image from "next/image";
import React from "react";
interface JobItem extends JobType {}
function JobItem({
  image,
  jobType,
  name,
  type,
  location,
  desc,
  categories,
}: JobItem) {
  return (
    <div className="border border-border p-8 flex flex-row items-start gap-6 cursor-pointer">
      <div>
        <Image src={image} alt={image} width={64} height={64} />
      </div>
      <div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm text-muted-foreground ">
          {type} . {location}
        </div>
        <div className="h-5 inline-flex gap-2 items-center">
          <Badge variant="secondary">{jobType}</Badge>
          <Separator orientation="vertical" />
          {categories.map((item: string, i: number) => (
            <Badge
              variant="outline"
              className="rounded border-primary bg-primary/5 text-primary"
              key={i}
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobItem;
