"use client";
import TitleSection from "@/components/atoms/TitleSection";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobType } from "@/types";
import JobItem from "./JobItem";

type FeaturedJobs = {};
function FeatureJobs() {
  const { jobs, isLoading, error } = useFeaturedJobs();
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
