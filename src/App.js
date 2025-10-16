import "./App.css";
import PostHogDebugger from "./components/posthog/PostHogDebugger";
import Main from "./containers/Main";

function App() {
  return (
    <div>
      <Main />
      <PostHogDebugger />
    </div>
  );
}

export default App;
