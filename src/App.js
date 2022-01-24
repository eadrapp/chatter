import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Chatter Header with logo and title */}
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER!</span>
      </header>
      {/* Chatter Header with logo and title */}
      <footer className="footer">
        <input className="text-input" />
        <button className="send">↑</button>
      </footer>
    </div>
  );
}

export default App;