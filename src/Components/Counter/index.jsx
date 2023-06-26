import React, { useState, useEffect } from 'react';

function Counter(props) {
  const [clicks, setClicks] = useState(0);
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  /*function Reducer(state, action){
    const {}

  }*/

  const changeHandler=({target: {textContent}})=>{
    //const newValue = type ==='button'
    const newValue=textContent
  }

  useEffect(function effectHandler() {
    // ComponentDidMount + DidUpdate
    console.log('use effect callback');
    window.addEventListener('mousemove', mouseMoveHandler);

    // ComponentWillUnmount
    return function clearEffects() {
      console.log('effects cleared');
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    document.title = `Current count is ${clicks}`;
  }, [clicks]);

  const add = (e) => {
    console.log(clicks);
    function handleNewClick(oldClicks) {
      console.log(oldClicks);
      return oldClicks + 1;
    }

    setClicks(handleNewClick);
  };

  // useEffect(() => {
  //   window.addEventListener('click', add);

  //   return () => {
  //     window.removeEventListener('click', add);
  //   };
  // }, [add]);

  const subtract = () => {
    setClicks(clicks - 1);
  };

  const mouseMoveHandler = (e) => {
    const { clientX, clientY } = e;

    setCoords({
      x: clientX,
      y: clientY,
    });
  };

  // window.addEventListener('mousemove', mouseMoveHandler);
  return (
    <div
      style={{
        padding: '40px',
        border: '5px solid black',
      }}
    >
      <p>Counter is {clicks}</p>
      <p>X coordinate is {coords.x}</p>
      <p>Y coordinate is {coords.y}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
}

export default Counter;
