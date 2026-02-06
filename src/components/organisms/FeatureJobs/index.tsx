"use client";
import TitleSection from "@/components/atoms/TitleSection";
import React, { useMemo } from "react";
import JobItem from "./JobItem";
import useSWR from "swr";
import { fetcher, parsingJobs } from "@/lib/utils";
import { JobType } from "@/types";

type FeaturedJobs = {};
function FeatureJobs() {
  const { data, isLoading, error } = useSWR("/api/job/featured", fetcher);
  console.log(data, isLoading, error);
  const jobs = useMemo(
    () => parsingJobs(data, isLoading, error),
    [data, isLoading, error],
  );
  console.log(jobs);
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {jobs.map((item: JobType) => (
          <JobItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default FeatureJobs;
