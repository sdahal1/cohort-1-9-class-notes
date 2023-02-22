import './Header.css';

function Header({ numVisitors }) {
  const logHi = () => {
    console.log('Hi!');
  }
  return <header>
    <h1 onClick={() => console.log('yo')} id="header" className="dogs-header">Dogs</h1>
    <p>You are visitor {numVisitors}.</p>
    <hr />
  </header>
}

export default Header;
