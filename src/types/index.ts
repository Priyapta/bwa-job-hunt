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
  category: categoryJobType;
  need: number;
  applicantsCount: number;
  skills: string[];
};

export type OptionType = { id: string; label: string };

export type filterFormType = {
  label: string;
  name: string;
  items: OptionType[];
};

export type CompanyTeamType = {
  id: string;
  name: string;
  position: string;
  instagram: string;
  linkedin: string;
};

export type CompanySocmedType = {
  id: string;
  instagram: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  youtube: string;
};
export type CompanyType = {
  id: string;
  website: string;
  location: string;
  industry: string;
  dateFounded: Date;
  techStack: string[];
  image: string;
  employee: string;
  totalJob: number;
  name: string;
  description: string;
  sosmed: CompanySocmedType;
  teams: CompanyTeamType[];
  
};
