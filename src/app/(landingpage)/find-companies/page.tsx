"use client";
import { CATEGORIES_OPTIONS } from "@/constants";
import ExploreDataContainers from "@/containers/ExploreDataContainer";
import UseCompanies from "@/hooks/useCompanies";
import useCategoryCompanyFilter from "@/hooks/useCompanyFilter";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { filterFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
const FILTER_FORMS: filterFormType[] = [
  {
    name: "industry",
    label: "Industry",
    items: CATEGORIES_OPTIONS,
  },
];

function FindCompanyPage() {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });
  const [categories, setCategories] = useState<string[]>([]);

  const { companies, isLoading, mutate } = UseCompanies(categories);

  const { filters } = useCategoryCompanyFilter();

  const onSubmitFormFilter = async (
    val: z.infer<typeof formFilterCompanySchema>,
  ) => {
    setCategories(val.industry);
  };
  console.log(companies);
  useEffect(() => {
    mutate();
  }, [categories]);

  return (
    <ExploreDataContainers
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={filters}
      title="dream companies"
      subtitle="Find the dream companies you dream work for "
      loading={isLoading}
      data={companies}
      type="company"
    />
  );
}

export default FindCompanyPage;
