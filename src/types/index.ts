export type categoryJobType = {
  id: string;
  name: string;
  totalJobs: number;
};
export type JobType = {
  id: string;
  image: string;
  jobType: string;
  name: string;
  type: string;
  location: string;
  desc: string;
  categories: categoryJobType;
  needs: number;
  applicants: number;
};

export type OptionType = { id: string; label: string };

export type filterFormType = {
  label: string;
  name: string;
  items: OptionType[];
};

export type CompanyType = {
  image: string;
  totalJob: number;
  name: string;
  categories: string;
  description: string;
};
