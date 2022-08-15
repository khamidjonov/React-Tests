import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import {
  generateTestsChecking,
  setCategoryOfQuestions,
  setDifficultyOfQuestions,
  setNumberOfQuestions,
  testsFetched,
  testsFetchError,
  testsFetching,
} from './../redux/actions';

const CharactersConfig = () => {
  const { numberOfQuestions, difficultyOfQuestions, categoryOfQuestions } =
    useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className="characters-config my-4">
      <form
        className="d-flex justify-content-between align-items-center gap-3 flex-wrap"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(testsFetching());

          axios
            .get(
              `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryOfQuestions}&difficulty=${difficultyOfQuestions}&type=multiple`
            )
            .then((res) => {
              dispatch(testsFetched(res.data.results));
              dispatch(generateTestsChecking());
            })
            .catch(() => dispatch(testsFetchError()));
        }}
      >
        <div className="mb-3">
          <label htmlFor="number" className="form-label fs-5 text-dark ">
            Number of questions
          </label>
          <input
            type="number"
            id="number-questions"
            value={numberOfQuestions}
            name="number-questions"
            className="form-control"
            max={50}
            min={5}
            onChange={(e) => {
              e.preventDefault();
              dispatch(setNumberOfQuestions(e.target.value));
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="difficulty" className="form-label fs-5 text-dark ">
            Choose the level of difficulty
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={difficultyOfQuestions}
            className="form-select"
            onChange={(e) => {
              dispatch(setDifficultyOfQuestions(e.target.value));
            }}
          >
            <option>Choose difficulty...</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label fs-5 text-dark">
            Choose a category for your news
          </label>
          <select
            id="category"
            name="category"
            value={categoryOfQuestions}
            className="form-select"
            onChange={(e) => {
              dispatch(setCategoryOfQuestions(e.target.value));
            }}
          >
            <option>Choose category...</option>
            <option value="9">General Knowledge</option>
            <option value="21">Sport</option>
            <option value="23">History</option>
            <option value="27">Animals</option>
            <option value="22">Geography</option>
            <option value="10">Books</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Generate Tests
        </button>
      </form>
    </div>
  );
};

export default CharactersConfig;
