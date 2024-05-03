import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";

function App() {
  return (
    <>
      <div id="masthead">
        <a
          className="navbar-brand"
          href="https://dstark88.github.io/portfolio/"
        >
          Denise Stark
        </a>
        <nav className="navbar">
          <a href="https://dstark88.github.io/portfolio/" target="blank">
            Portfolio
          </a>
        </nav>
      </div>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
}

export default App;
