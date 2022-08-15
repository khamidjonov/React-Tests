export const testsFetching = () => ({ type: 'TESTS_FETCHING' });

export const testsFetched = (tests) => ({
  type: 'TESTS_FETCHED',
  payload: tests,
});

export const testsFetchError = () => ({ type: 'TESTS_FETCHING' });

export const setNumberOfQuestions = (number) => ({
  type: 'SET_NUMBER_OF_QUESTIONS',
  payload: number,
});

export const setCategoryOfQuestions = (category) => ({
  type: 'SET_CATEGORY_OF_QUESTIONS',
  payload: category,
});

export const setDifficultyOfQuestions = (difficulty) => ({
  type: 'SET_DIFFICULTY_OF_QUESTIONS',
  payload: difficulty,
});

export const generateTests = (tests) => ({
  type: 'GENERATE_TESTS',
  payload: tests,
});

export const generateTestsChecking = () => ({
  type: 'GENERATE_TESTS_CHECKING',
});

export const setTestNumber = (testNumber) => ({
  type: 'SET_TEST_NUMBER',
  payload: testNumber,
});

export const submitAnswer = (testNumber, correct_answer, choosenAnswer) => ({
  type: 'SUBMIT_ANSWER',
  payload: { testNumber, correct_answer, choosenAnswer },
});

export const setAllAnswers = (allTestsAnswers) => ({
  type: 'SET_ALL_ANSWERS',
  payload: allTestsAnswers,
});

export const setResultsToTrue = () => ({ type: 'SET_RESULTS_TO_TRUE' });

export const setResultsToFalse = () => ({ type: 'SET_RESULTS_TO_FALSE' });

export const setTestsToNull = () => ({ type: 'SET_TESTS_TO_NULL' });
