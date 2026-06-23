import axios from "axios";
import { QuizQuestion } from "../types";

const BASE_URL = "https://opentdb.com/api.php?amount=5&type=multiple";

export const getAllQuiz = async () => {
  const res = await axios.get(`${BASE_URL}`);
  return res.data;
};

export const getQuiz = async (category: number, difficulty: string) => {
  const res = await axios.get(
    `${BASE_URL}&category=${category}&difficulty=${difficulty}`,
  );

  return res.data;
};
