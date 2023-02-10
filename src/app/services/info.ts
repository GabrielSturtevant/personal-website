export interface Description {
  description: string;
  order: number;
}

export interface Job {
  company_name: string;
  title: string;
  date_range: string;
  location: string;
  website: string;
  descriptions: Array<Description>;
  order: number;
}

export interface Project {
  title: string;
  summary?: string;
  descriptions: Array<Description>;
  picture_path?: string;
  picture_link?: string;
  project_link?: string;
  order: number;
}

export interface Recommendation {
  author: string;
  relation: string;
  organization: string;
  order: number;
  descriptions: Array<Description>;
}

export interface Info {
  name: string;
  title: string;
  city: string;
  phone: string;
  email: string;
  website: string;
  github: string;
  linkedin: string
  about_me: Array<Description>;
  projects: Array<Project>;
  jobs: Array<Job>;
  recommendations: Array<Recommendation>
}
