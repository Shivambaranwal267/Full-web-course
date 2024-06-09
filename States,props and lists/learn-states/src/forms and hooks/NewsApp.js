import React, { useState, useEffect, useRef } from "react";
import News from "./News";
import './NewsApp.css'

function NewsApp() {
  const apiKey = "2efa214a61e248e6a37e0352c7b59da0";
  
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState("tesla");
  
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-05-08&sortBy=publishedAt&apiKey=${apiKey}`;

  const queryInputRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      setNewsList(jsonData.articles);
    } catch (err) {
      console.log(err, "error occured");
    }
  }

  // const arr = [1, 2, 3, 7, 12, 34];

  function handleSubmit(event) {
    event.preventDefault()
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue);
  }

  return (
    <div className="news-app">
      <h1>News Daily</h1>
      <form onSubmit={handleSubmit}>
        <input className="query-input" type="text" ref={queryInputRef} />
        <input className="btn-submit" onClick={handleSubmit} type="submit" value="Submit" />
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 50%)",
          alignItems: "space-between",
          rowGap: "20px",
        }}
      >
        {newsList.map((news) => {
          return <News news={news} />;
        })}

        {/* <select name="" id="">
         {arr.map((element) => {
          return <option>choose {element}</option>
         })}
      </select> */}
      </div>
    </div>
  );
}

export default NewsApp;
