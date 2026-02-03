"use client";
import { Badge } from "@/components/ui/badge";
import { CompanyType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
interface CompanyCard extends CompanyType {}
function CompanyCard({
  categories,
  name,
  description,
  image,
  totalJob,
}: CompanyCard) {
  const router = useRouter();
  return (
    <div
      className="border broder-border p-6"
      onClick={() => router.push("/detail/company/1")}
    >
      <div className="flex flex-row justify-between items-start">
        <Image src={image} alt={image} width={66} height={66} />
        <Badge>{totalJob} Jobs</Badge>
      </div>
      <div className="mt-4">
        <div className="text-lg font-semibold mb-2">{name}</div>
        <div className="line-clamp-3 text-sm text-muted-foreground">
          {description}
        </div>
      </div>
      <div className="space-x-2">
        <Badge variant="outline">{categories}</Badge>
      </div>
    </div>
  );
}

export default CompanyCard;
