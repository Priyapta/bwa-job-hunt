import React from "react";
import TitleSection from "../../atoms/TitleSection";
import { BiCategory } from "react-icons/bi";
import { HiOutlineArrowRight } from "react-icons/hi";
import CategoryItem from "./CategoryItem";

function Category() {
  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {[1, 2, 3, 4].map((item: number) => (
          <CategoryItem key={item} name="Category" totalJobs={100} />
        ))}
      </div>
    </div>
  );
}

export default Category;
