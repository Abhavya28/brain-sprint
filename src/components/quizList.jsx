import { useEffect, useState } from "react";
import { getQuiz } from "../services/quizService";

const QuizList = () => {
  const [quizData, setQuizData] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // const res = await getQuiz(27, "easy");
      // setQuizData(res);
    };
    fetchData();
  }, []);

  // console.log(quizData, "Quiz Data");
  // console.log("hello");

  return (
    <div>
      <h1>Choose a quiz you want to play.</h1>
      <div>
        <h1>Select Category</h1>
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="sciencenature">Science & Nature</option>
          <option value="sports">Sports</option>
          <option value="gk">General Knowledge</option>
          <option value="animals">Animals</option>
        </select>
      </div>
    </div>
  );
};

export default QuizList;
