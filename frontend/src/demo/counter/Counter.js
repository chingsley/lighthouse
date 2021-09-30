import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  const delayInSeconds = (timeout) =>
    new Promise((res) => {
      setTimeout(() => {
        res();
      }, timeout * 1000);
    });

  // delayInSeconds(5)
  //   .finally(() => console.log('finally'))
  //   .then(() => console.log('then'));

  const inrementAsync = () => {
    // setTimeout(() => {
    //   // setCount(count + 1);
    //   setCount((prevCount) => {
    //     // the 'return' keyword here is a 'MUST' (you  can also use arrow return in one line: (prevState) => prevState + 1)
    //     return prevCount + 1;
    //   });
    // }, 3000);
    delayInSeconds(3).then(() => {
      // setCount(count + 1);
      setCount((prevCount) => prevCount + 1);
    });
  };

  return (
    <>
      <section>
        <h2>regular counter</h2>
        <h1>{count}</h1>
        <button className='btn' onClick={incrementCount}>
          increase
        </button>
        <button className='btn' onClick={resetCount}>
          reset
        </button>
        <button className='btn' onClick={decrementCount}>
          decrease
        </button>
      </section>
      <hr className='separator' />
      <section>
        <h2>Asynchronous counter</h2>
        <h1>{count}</h1>
        <button className='btn' onClick={inrementAsync}>
          increase async
        </button>
      </section>
    </>
  );
}

export default Counter;
