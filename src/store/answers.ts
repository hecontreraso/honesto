import { IAnswer } from "types/types";

export const ANSWERS: IAnswer[] = [
  {
    id: 1,
    questionId: 1, // Multiple
    receiverId: 1,
    senderId: 2,
    option: 3
  },
  {
    id: 2,
    questionId: 2, // Range
    receiverId: 1,
    senderId: 2,
    option: 1
  },
  {
    id: 3,
    questionId: 3, // Text
    receiverId: 1,
    senderId: 2,
    answer: "Jane you are the very best."
  },
  {
    id: 4,
    questionId: 4, // Multiple
    receiverId: 1,
    senderId: 2,
    option: 2
  },
  {
    id: 5,
    questionId: 5, // Range
    receiverId: 1,
    senderId: 2,
    option: 9
  },
  {
    id: 6,
    questionId: 6, // Multiple
    receiverId: 1,
    senderId: 2,
    option: 1
  },
  {
    id: 7,
    questionId: 1, // Multiple
    receiverId: 2,
    senderId: 1,
    option: 1
  },
  {
    id: 8,
    questionId: 2, // Range
    receiverId: 3,
    senderId: 1,
    option: 7
  },
  {
    id: 9,
    questionId: 3, // Text
    receiverId: 4,
    senderId: 1,
    answer: "You are the very best."
  },
  {
    id: 10,
    questionId: 2, // Range
    receiverId: 2,
    senderId: 1,
    option: 1
  },
  {
    id: 11,
    questionId: 3, // Text
    receiverId: 2,
    senderId: 1,
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 12,
    questionId: 6, // Multiple
    receiverId: 2,
    senderId: 1,
    option: 1
  }
];
