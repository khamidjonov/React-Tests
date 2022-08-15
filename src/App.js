import { useSelector } from 'react-redux';

import TestsList from './components/TestsList';
import CharactersConfig from './components/CharactersConfig';
import TestsChecking from './components/TestsChecking';
import AskingModal from './components/AskingModal';
import Results from './components/Results';

const App = () => {
  const { isResults, tests } = useSelector((state) => state);
  return (
    <div className="container">
      {isResults ? (
        <Results />
      ) : (
        <>
          <CharactersConfig />
          {tests && (
            <>
              <TestsList />
              <TestsChecking />
              <AskingModal />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
