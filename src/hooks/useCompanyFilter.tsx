import { fetcher, parsingCategoriesToOptions } from "@/lib/utils";
import { filterFormType } from "@/types";
import { useMemo } from "react";
import useSWR from "swr";

function useCategoryCompanyFilter() {
  const { data, error, isLoading } = useSWR("/api/job/categories", fetcher);

  const categories = useMemo(
    () => parsingCategoriesToOptions(data, isLoading, error),
    [data, error, isLoading],
  );

  const filters = useMemo(() => {
    return [
      {
        name: "industry",
        label: "Industry",
        items: categories,
      },
    ] as filterFormType[];
  }, [categories]);
  console.log(categories);
  return {
    filters,
  };
}

export default useCategoryCompanyFilter;
