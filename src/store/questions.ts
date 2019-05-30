import { IQuestion } from "types/types";

export const QUESTIONS: IQuestion[] = [
  {
    id: 1,
    type: "MULTIPLE",
    title: "How well did I display courage?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    options: [
      "Please Improve\nYou may have done one or the following: Maybe you were mostly quiet in meetings and when you had something on your mind, you brought it to the team afterward. Or, you had feedback that would be valuable to go, but you found it too difficult. Or, you had an opportunity to grow by doing something uncomfortable but you didn’t.",
      "You Were Good\nYou sometimes participate in meetings but you feel that they don’t always bring up important things when they should.",
      "You Were Great\nI and others can count on your courage to help the team do what is right."
    ]
  }
];
