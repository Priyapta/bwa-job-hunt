"use client";
import { CATEGORIES_OPTIONS } from "@/constants";
import ExploreDataContainers from "@/containers/ExploreDataContainer";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { CompanyType, filterFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
const FILTER_FORMS: filterFormType[] = [
  {
    name: "industry",
    label: "Industry",
    items: CATEGORIES_OPTIONS,
  },
];

const dataDummy: CompanyType[] = [
  {
    image: "/images/company2.png",
    categories: "Marketing",
    description: "Lorem",
    name: "Twitter",
    totalJob: 10,
  },
];
function FindCompanyPage() {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });
  const onSubmitFormFilter = async (
    val: z.infer<typeof formFilterCompanySchema>,
  ) => {
    console.log(val);
  };

  return (
    <ExploreDataContainers
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={FILTER_FORMS}
      title="dream companies"
      subtitle="Find the dream companies you dream work for "
      loading={false}
      data={dataDummy}
      type="company"
    />
  );
}

export default FindCompanyPage;
