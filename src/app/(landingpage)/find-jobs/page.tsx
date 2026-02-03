"use client";

import { CATEGORIES_OPTIONS } from "@/constants";
import ExploreDataContainers from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import { filterFormType, JobType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const FILTER_FORMS: filterFormType[] = [
  {
    name: "categories",
    label: "Categories",
    items: CATEGORIES_OPTIONS,
  },
];
export default function FindJobsClient() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const dummyData: JobType[] = [
    {
      applicants: 5,
      categories: ["Marketing", "Design"],
      desc: "lorem",
      image: "/images/company2.png",
      jobType: "Full-Time",
      location: "Paris, France",
      name: "Social Media Assistant",
      needs: 10,
      type: "Agency",
    },
  ];
  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    console.log(val);
  };

  return (
    <ExploreDataContainers
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={FILTER_FORMS}
      title="dream job"
      subtitle="Find your next career at companies like Hubspot, Nike, and Dropbox "
      loading={false}
      data={dummyData}
      type="job"
    />
  );
}
