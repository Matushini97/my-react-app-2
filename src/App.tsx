import { useEffect, useState } from "react";

function App() {
  const [cookies, setCookies] = useState<string>("");

  useEffect(() => {
    document.cookie = "crossCookie=test; path=/; SameSite=None; Secure";

    const allCookies = document.cookie;
    setCookies(allCookies);
  }, []);

  return (
    <div>
      <h1>App 2</h1>
      <p>Все существующие куки:</p>
      <pre>{cookies || "Кук нет"}</pre>
    </div>
  );
}

export default App;
