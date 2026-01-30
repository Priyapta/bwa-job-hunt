import React from "react";

interface TitleSectionProps {
  word1: string;
  word2: string;
}
function TitleSection({ word1, word2 }: TitleSectionProps) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="text-4xl font-bold">
        {word1} <span className="text-primary"> {word2}</span>
      </div>
      <div className="inline-flex gap-3 items-center text-primary font-semibold cursor-pointer">
        <span>Show all Jobs</span>
      </div>
    </div>
  );
}

export default TitleSection;
