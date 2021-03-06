import { IQuestion } from "types/types";

export const QUESTIONS: IQuestion[] = [
  {
    id: 1,
    type: "MULTIPLE",
    title: "How well did I display courage?",
    options: [
      "Please Improve - You may have done one or the following: Maybe you were mostly quiet in meetings and when you had something on your mind, you brought it to the team afterward. Or, you had feedback that would be valuable to go, but you found it too difficult. Or, you had an opportunity to grow by doing something uncomfortable but you didn’t.",
      "You Were Good - You sometimes participate in meetings but you feel that they don’t always bring up important things when they should.",
      "You Were Great - I and others can count on your courage to help the team do what is right."
    ]
  },
  {
    id: 2,
    type: "RANGE",
    title: "How do you rate my braveness?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 3,
    type: "TEXT",
    title: "What do you think about me?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 4,
    type: "MULTIPLE",
    title: "How well did this person do X thing last month",
    options: [
      "OMG it was terrible",
      "Could be better",
      "Not that bad",
      "Very well",
      "Extremely well"
    ]
  },
  {
    id: 5,
    type: "RANGE",
    title: "How probable is to hire Esteban?",
    description: "How probable is to hire Esteban?"
  },
  {
    id: 6,
    type: "MULTIPLE",
    title: "Do you like how I prepare ice cream?",
    options: [
      "Let's better not talk about it",
      "OMG it was terrible",
      "Could be better",
      "Not that bad",
      "Very well",
      "Extremely well"
    ]
  }
];
