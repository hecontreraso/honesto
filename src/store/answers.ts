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
  },
  {
    id: 4,
    questionId: 1, // Multiple
    receiverId: 2,
    senderId: 1,
    answer: 1
  },
  {
    id: 5,
    questionId: 2, // Range
    receiverId: 3,
    senderId: 1,
    answer: 7
  },
  {
    id: 6,
    questionId: 3, // Text
    receiverId: 4,
    senderId: 1,
    answer: "You are the very best."
  }
];
