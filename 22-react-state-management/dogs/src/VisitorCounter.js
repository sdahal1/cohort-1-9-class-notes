import './VisitorCounter.css';

function VisitorCounter({ userName, numVisitors, incrementNumVisitors }) {

  // when we mouseOver the footer, run incrementNumVisitors
  return <footer onMouseOver={incrementNumVisitors}>
    {/* display the numVisitors variable on the page */}
    You are visitor number {numVisitors}. Welcome, {userName}.
  </footer>
}

export default VisitorCounter;
