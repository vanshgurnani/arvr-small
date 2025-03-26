import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});

  const apis = {
    1: "https://arvr-api.vercel.app/table",
    2: "https://jsonplaceholder.typicode.com/users/1",
    3: "https://jsonplaceholder.typicode.com/comments/1",
    4: "https://jsonplaceholder.typicode.com/albums/1",
    5: "https://jsonplaceholder.typicode.com/photos/1",
    6: "https://jsonplaceholder.typicode.com/todos/1"
  };

  const fetchData = async (id) => {
    try {
      const response = await axios.get(apis[id]);
      setData((prevData) => ({ ...prevData, [id]: response.data }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">My App</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Box {item}</h5>
                  <p className="card-text">Click below to fetch API data.</p>
                  <button className="btn btn-primary" onClick={() => fetchData(item)}>Fetch Data</button>
                </div>
              </div>
              {data[item] && (
                <div className="card mt-2">
                  <div className="card-body">
                    <h5 className="card-title">{data[item].title || data[item].name}</h5>
                    <p className="card-text">{data[item].body || data[item].email || data[item].url}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
