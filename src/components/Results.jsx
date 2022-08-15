import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setResultsToFalse, setTestsToNull } from './../redux/actions';

const Results = () => {
  const { testsChecking } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className="mt-5 d-flex justify-content-center">
      <div className="card d-flex" style={{ width: '18rem' }}>
        <button
          type="button"
          className="btn-close d-flex align-self-end py-2 pe-3 text-end"
          aria-label="Close"
          onClick={() => {
            dispatch(setResultsToFalse());
            dispatch(setTestsToNull());
          }}
        ></button>
        <div className="card-header bg-primary">Your Results</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-warning">
            {testsChecking.filter((item) => item === 0).length} ta savol
            javobsiz qoldi
          </li>
          <li className="list-group-item bg-danger">
            {testsChecking.filter((item) => item === 1).length} ta savolga
            noto'g'ri javob berildi
          </li>
          <li className="list-group-item bg-success">
            {testsChecking.filter((item) => item === 2).length} ta savolga
            to'g'ri javob berildi
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Results;
