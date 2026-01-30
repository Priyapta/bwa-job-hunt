import TitleSection from "@/components/atoms/TitleSection";
import React from "react";
import JobItem from "./JobItem";

function FeatureJobs() {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[0, 1, 2].map((item: number) => (
          <JobItem
            key={item}
            image="/images/company.png"
            jobType="Full Time"
            name="Email Marketing"
            type="Agency"
            location="Paris, France"
            desc="LorenIpsum dolar amet"
            categories={["Marketing", "design"]}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureJobs;
