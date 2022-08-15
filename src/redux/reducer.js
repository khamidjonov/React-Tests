const initialState = {
  tests: [],
  allTestsAnswers: [],
  testsLoadingStatus: 'idle',
  testNumber: 1,
  numberOfQuestions: 10,
  difficultyOfQuestions: 'easy',
  categoryOfQuestions: '9',
  testsChecking: [],
  isResults: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TESTS_FETCHING':
      return {
        ...state,
        testsLoadingStatus: 'loading',
      };

    case 'TESTS_FETCHED':
      return {
        ...state,
        tests: action.payload,
        testsLoadingStatus: 'idle',
      };

    case 'TESTS_FETCH_ERROR':
      return {
        ...state,
        testsLoadingStatus: 'error',
      };

    case 'SET_NUMBER_OF_QUESTIONS':
      return { ...state, numberOfQuestions: action.payload };

    case 'SET_CATEGORY_OF_QUESTIONS':
      return { ...state, categoryOfQuestions: action.payload };

    case 'SET_DIFFICULTY_OF_QUESTIONS':
      return { ...state, difficultyOfQuestions: action.payload };

    case 'GENERATE_TESTS': {
      return {
        ...state,
        tests: action.payload,
      };
    }

    case 'GENERATE_TESTS_CHECKING': {
      const arr = Array(state.tests.length).fill(0);
      return {
        ...state,
        testsChecking: arr,
        testNumber: 1,
      };
    }

    case 'SET_TEST_NUMBER':
      return {
        ...state,
        testNumber: action.payload,
      };

    case 'SUBMIT_ANSWER': {
      const { testNumber, correct_answer, choosenAnswer } = action.payload;

      const newTestsChecking = state.testsChecking.map((item, idx) => {
        if (testNumber === idx) {
          return correct_answer === choosenAnswer ? 2 : 1;
        }

        return item;
      });

      return {
        ...state,
        testNumber:
          state.testNumber < state.tests.length
            ? state.testNumber + 1
            : state.tests.length,
        testsChecking: newTestsChecking,
      };
    }

    case 'SET_ALL_ANSWERS':
      return {
        ...state,
        allTestsAnswers: action.payload,
      };

    case 'SET_RESULTS_TO_TRUE':
      return {
        ...state,
        isResults: true,
      };

    case 'SET_RESULTS_TO_FALSE':
      return {
        ...state,
        isResults: false,
      };

    case 'SET_TESTS_TO_NULL':
      return {
        ...state,
        tests: null,
      };

    default:
      return state;
  }
};
