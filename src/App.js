import "./App.css";
import Routes from "./routes/Routes";
import { AuthProvider } from "./context/AuthContext";
import PageLoader from "./components/loader/PageLoader";

function App() {
  return (
    <>
      <PageLoader>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </PageLoader>
    </>
  );
}

export default App;
