import { IAnswer } from "types/types";

export const ANSWERS: IAnswer[] = [
  {
    id: 1,
    questionId: 1, // Multiple
    receiverId: 1,
    senderId: 2,
    answer: 1
  },
  {
    id: 2,
    questionId: 2, // Range
    receiverId: 1,
    senderId: 2,
    answer: 7
  },
  {
    id: 3,
    questionId: 3, // Text
    receiverId: 1,
    senderId: 2,
    answer: "You are the very best."
  }
];
