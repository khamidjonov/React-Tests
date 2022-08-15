import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitAnswer, setAllAnswers } from '../redux/actions';

const TestsItem = ({ question, correct_answer, question_number, category }) => {
  const { testNumber, tests, allTestsAnswers } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [ans, setAllAns] = useState([]);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const localizeQuestion = (str) => {
    if (!str) return;

    str = str.replaceAll('&#039;', "'");

    return str.replaceAll('&quot;', '"');
  };

  function getAllAnswers(allTestsAnswers, testNumber) {
    allTestsAnswers.forEach((elem, idx) => {
      if (testNumber === idx) {
        setAllAns(elem);
      }
    });
  }

  function setAllTestsAnswers(tests) {
    const allAnswers = tests.map((item) => {
      return shuffle([item.correct_answer, ...item.incorrect_answers]);
    });

    dispatch(setAllAnswers(allAnswers));
  }

  useEffect(() => {
    setAllTestsAnswers(tests);
  }, [tests]);

  useEffect(() => {
    getAllAnswers(allTestsAnswers, testNumber - 1);
  }, [allTestsAnswers, testNumber]);

  return (
    <div className="test-item">
      <h3>
        {category} Question {question_number}: {localizeQuestion(question)}
      </h3>

      <div className="answers mt-4 d-flex flex-wrap gap-5">
        {ans.map((item, idx) => (
          <div key={idx} className="bg-info d-flex gap-2 rounded py-1 px-4">
            <input
              type="radio"
              id={item}
              className="form-check-input"
              value={item}
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  submitAnswer(testNumber - 1, correct_answer, e.target.value)
                );
              }}
            />
            <label htmlFor={item} className="form-check-label">
              {localizeQuestion(item)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestsItem;
