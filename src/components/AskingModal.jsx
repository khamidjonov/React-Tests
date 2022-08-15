import React from 'react';
import { useDispatch } from 'react-redux';
import { setResultsToTrue } from './../redux/actions';

const AskingModal = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary mb-5 w-100"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Testni Yakunlash
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Testni yakunlashga ishonchingiz komilmi ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Yopish
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  dispatch(setResultsToTrue());
                }}
              >
                Yakunlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AskingModal;
