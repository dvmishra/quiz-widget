import React, { useEffect } from 'react';
import './style.css';
import { SpinnerAnimation } from './styled';
import above_average from './images/above_average.png';

const Spinner = (percentile) => {
  useEffect(() => {
    const startSpinnerBtn = document.getElementById('startSpinner');

    const animation = new SpinnerAnimation({
      container: 'spinnerContainer',
      list: 'spinnerList',
    });

    if (animation.started === 'ready') {
      return;
    }

    if (!animation.firstRound)
      animation.spinnerItems.item(animation.winningItem).classList.remove('win');
    animation.reset();
    animation.start();
  }, []);

  return (
    <>
      <div className="container">
        <div className="spinner" id="spinnerContainer">
          <ul className="spinner-items" id="spinnerList">
            <li className="spinner-items__item" id="8">
              <img className="images-emoji" src={above_average} />
            </li>
            <li className="spinner-items__item" id="9">
              🐷
            </li>
            <li className="spinner-items__item" id="1">
              🐸
            </li>
            <li className="spinner-items__item" id="2">
              🐹
            </li>
            <li className="spinner-items__item" id="3">
              🐵
            </li>
            <li className="spinner-items__item" id="4">
              🐰
            </li>
            <li className="spinner-items__item" id="5">
              🐭
            </li>
            <li className="spinner-items__item" id="6">
              🐮
            </li>
            <li className="spinner-items__item" id="7">
              🐨
            </li>
          </ul>
          <div className="spinner__marker" id="spinnerMarker">
            {' '}
          </div>
        </div>
        <div className="spinner__won" id="spinnerWon"></div>
        {/* <div className="button" id="startSpinner">Spin Emoji!</div> */}
      </div>
    </>
  );
};

export default Spinner;
