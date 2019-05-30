/**
 * Range is a question rated 1-10
 * Text expects a text to be entered
 * Multiple has multiple options
 */
export interface IQuestion {
  id: number;
  title: string;
  description: string;
  type: "RANGE" | "TEXT" | "MULTIPLE";
  options?: string[];
}
