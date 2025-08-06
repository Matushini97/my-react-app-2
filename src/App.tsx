import { useEffect, useState } from "react";

function App() {
  const [cookies, setCookies] = useState<string[]>([]);

  useEffect(() => {
    document.cookie = "crossCookie=withoutPartition; path=/; SameSite=None; Secure";

    document.cookie =
      "partitionedCookie=withPartition; path=/; Partitioned; Secure; SameSite=None; max-age=3600";

    const allCookies = document.cookie.split("; ");
    setCookies(allCookies);
  }, []);

  return (
    <div>
      <h1>App 2</h1>
      <p>Все существующие куки:</p>
      {cookies.length === 0 ? (
        <p>Кук нет</p>
      ) : (
        <ul>
          {cookies.map((cookie, idx) => (
            <li key={idx}>{cookie}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
