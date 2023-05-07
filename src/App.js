import "./App.css";
import Routes from "./routes/Routes";
import PageLoader from "./components/loader/PageLoader";

function App() {
  return (
    <>
      <PageLoader>
        <Routes />
      </PageLoader>
    </>
  );
}

export default App;
