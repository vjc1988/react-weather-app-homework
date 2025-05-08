import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="background">
          <Weather defaultCity="Barcelona" />
        </div>
        <footer>
          This project was coded by Victoria Coombs and is{" "}
          <a
            href="https://github.com/vjc1988/react-weather-app2/tree/master"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and hosted by{" "}
          <a
            href="https://reactwapphomework.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
