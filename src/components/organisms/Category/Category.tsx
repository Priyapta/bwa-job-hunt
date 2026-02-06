"use client";
import { fetcher, parsingCategories } from "@/lib/utils";
import { useMemo } from "react";
import useSWR from "swr";
import TitleSection from "../../atoms/TitleSection";
import CategoryItem from "./CategoryItem";
import { categoryJobType } from "@/types";

function Category() {
  const { data, isLoading, error } = useSWR("/api/job/categories", fetcher);

  const categories = useMemo(
    () => parsingCategories(data, isLoading, error),
    [data, isLoading, error],
  );

  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {categories.map((item: categoryJobType) => (
          <CategoryItem
            key={item.id}
            name={item.name}
            totalJobs={item.totalJobs}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
