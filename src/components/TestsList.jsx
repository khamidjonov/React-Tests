import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  testsFetching,
  testsFetched,
  testsFetchError,
  generateTestsChecking,
} from './../redux/actions';

import Loader from './Loader';
import ErrorNotFound from './ErrorNotFound';
import TestsItem from './TestsItem';

const TestsList = () => {
  const {
    tests,
    testsLoadingStatus,
    testNumber,
    numberOfQuestions,
    categoryOfQuestions,
    difficultyOfQuestions,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const fetchData = () => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryOfQuestions}&difficulty=${difficultyOfQuestions}&type=multiple`
      )
      .then((res) => {
        dispatch(testsFetched(res.data.results));
        dispatch(generateTestsChecking());
      })
      .catch(() => dispatch(testsFetchError()));
  };

  useEffect(() => {
    dispatch(testsFetching());

    fetchData();
    // eslint-disable-next-line
  }, []);
  if (testsLoadingStatus === 'loading') {
    return <Loader />;
  } else if (testsLoadingStatus === 'error') {
    <ErrorNotFound />;
  }

  if (!tests.length) {
    <h4>No Tests Found</h4>;
  }

  return (
    <div>
      <TestsItem {...tests[testNumber - 1]} question_number={testNumber} />
    </div>
  );
};

export default TestsList;
