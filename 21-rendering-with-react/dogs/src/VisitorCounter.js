import React from 'react';

function VisitorCounter({ num, userName }) {
  return <React.Fragment>
    You are visitor number {num + 1}. Welcome, {userName}.
  </React.Fragment>
}

export default VisitorCounter;
