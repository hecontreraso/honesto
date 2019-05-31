export interface IUser {
  id: number;
  name: string;
  thumbnailUrl: string;
}

/**
 * Range is a question rated 1-10
 * Text expects a text to be entered
 * Multiple has multiple options
 */
export interface IQuestion {
  id: number;
  title: string;
  description?: string;
  type: "RANGE" | "TEXT" | "MULTIPLE";
  options?: string[];
}

export interface IAnswer {
  id: number;
  questionId: number;
  receiverId: number; // Who receives feedback
  senderId: number; // Who gives feedback
  answer: number | string; // Can be the option index, the range number or the text entered
}
