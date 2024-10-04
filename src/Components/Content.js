import React from 'react';

const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1> 
      {/* added a h1 tag above */}
      {/* added a h2 tag displaying current time using data() */}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;