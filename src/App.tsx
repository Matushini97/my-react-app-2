import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.cookie = "crossCookie=test; path=/; SameSite=None; Secure";
  }, []);
  return <div>App 2</div>;
}

export default App;
