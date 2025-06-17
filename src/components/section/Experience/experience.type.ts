export interface ExperienceType {
  subheading: string;
  contents: {
    name: string;
    period: string;
    summaries: string[];
  }[];
  isLast?: boolean;
}
