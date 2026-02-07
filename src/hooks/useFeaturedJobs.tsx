import { fetcher, parsingJobs } from "@/lib/utils";
import { JobType } from "@/types";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

const useFeaturedJobs = () => {
  const { data, isLoading, error } = useSWR("/api/job/featured", fetcher);
  console.log(data);
  const parseJobs = useCallback(async () => {
    const parseData = await parsingJobs(data, isLoading, error);
    setJobs(parseData);
  }, [data, isLoading, error]);
  const [jobs, setJobs] = useState<JobType[]>([]);
  useEffect(() => {
    parseJobs();
  }, [data, isLoading, error]);

  return {
    jobs,
    isLoading,
    error,
  };
};
export default useFeaturedJobs;
