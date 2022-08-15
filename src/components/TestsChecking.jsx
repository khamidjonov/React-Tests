import { useSelector, useDispatch } from 'react-redux';
import { setTestNumber } from './../redux/actions';

const TestsChecking = () => {
  const { testsChecking } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="d-flex gap-5 flex-wrap my-5">
        {testsChecking.map((item, idx) => (
          <p
            key={idx}
            className={`bg-primary ${item === 1 && 'bg-danger'} ${
              item === 2 && 'bg-success'
            } py-2 p-3 rounded`}
            onClick={() => {
              dispatch(setTestNumber(idx + 1));
            }}
          >
            {idx + 1}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TestsChecking;
