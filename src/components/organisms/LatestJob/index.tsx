import TitleSection from "@/components/atoms/TitleSection";
import React from "react";
import JobItem from "./JobItem";

function LatestJob() {
  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection word1="Latest" word2="jobs open" />
      <div className="mt-12 grid grid-cols-3 gap-8">
        {[0, 1, 2].map((item: number) => (
          <JobItem
            key={item}
            type="Agency"
            image="/images/company2.png"
            name="Social Media Assistant"
            location="Paric, France"
            jobType="Full Time"
            categories={["Marketing", "Design"]}
            desc="description"
          />
        ))}
      </div>
    </div>
  );
}

export default LatestJob;
