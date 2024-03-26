import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const [sortBy, setSortBy] = useState(null);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setData(sortedData);
    setSortBy("date");
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => b.views - a.views);
    setData(sortedData);
    setSortBy("views");
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div>
        <button type="button" onClick={sortByDate}>
          Sort by Date
        </button>
        <button type="button" onClick={sortByViews}>
          Sort by Views
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => (
            <tr key={index}>
              <td>{ele.date}</td>
              <td>{ele.views}</td>
              <td>{ele.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
