import { uniq } from "lodash";

import { ANSWERS } from "store/answers";
import { USERS } from "store/users";
import { QUESTIONS } from "store/questions";

/**
 * Get an array of users who have given feedback to an user
 */
export const getSenders = (userId: number) => {
  const senderIds = ANSWERS.filter(answer => answer.receiverId === userId).map(
    answer => answer.senderId
  );
  let userIds = uniq(senderIds);
  return USERS.filter(user => userIds.includes(user.id));
};

/**
 * Get an array of users who have received feedback by an user
 */
export const getReceivers = (userId: number) => {
  const receiverIds = ANSWERS.filter(answer => answer.senderId === userId).map(
    answer => answer.receiverId
  );
  let userIds = uniq(receiverIds);
  return USERS.filter(user => userIds.includes(user.id));
};

/**
 * Get an array of answers received by an user
 */
export const getAnswers = (senderId: number, receiverId: number) => {
  return ANSWERS.filter(
    answer => answer.receiverId === receiverId && answer.senderId === senderId
  );
};

export const getQuestionById = (questionId: number) => {
  return QUESTIONS.find(question => question.id === questionId);
};
