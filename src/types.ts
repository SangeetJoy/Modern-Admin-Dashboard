export type CardAssignee = {
  id: number;
  name: string;
  imageUrl: string;
  imageUrlSecondary: string;
};

export type Card = {
  id: number;
  column_id: string;
  text: string;
  subText: string;
  comments: string[];
  links: string[];
  progress: string; // optionally: "0" | "25" | "50" | etc.
  priority: "low" | "medium" | "high";
  assignees: CardAssignee[];
};
