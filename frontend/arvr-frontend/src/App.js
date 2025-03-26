import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({});

  const baseURL = "https://arvr-api.vercel.app";

  const infoData = {
    1: { name: "Table", description: "A wooden dining table, perfect for family meals.", url: `${baseURL}/table` },
    2: { name: "Chair", description: "A comfortable ergonomic office chair.", url: `${baseURL}/chair` },
    3: { name: "Plastic Chair", description: "A lightweight and durable plastic chair.", url: `${baseURL}/plastic-chair` },
    4: { name: "Modern Arm", description: "A stylish modern armchair with cushioned seating.", url: `${baseURL}/modern-arm` },
    5: { name: "Steel Frame", description: "A sturdy steel-framed chair for outdoor use.", url: `${baseURL}/steel-frame` }
  };

  const fetchData = (id) => {
    setData((prevData) => ({ ...prevData, [id]: infoData[id] }));
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
      <div style={{ backgroundColor: "#d2b48c", minHeight: "100vh", padding: "20px" }}>
        <div className="container mt-5" style={{ padding: "20px", borderRadius: "10px" }}>
          <div className="row">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="col-md-4">
                <div className="card mb-3" style={{ backgroundColor: "#e3f2fd", border: "1px solid #90caf9" }}>
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#0d47a1" }}>{infoData[item].name}</h5>
                    <p className="card-text">Click below to view information.</p>
                    <button className="btn btn-primary" onClick={() => fetchData(item)}>View Info</button>
                    <a href={infoData[item].url} className="btn btn-secondary ms-2" target="_blank" rel="noopener noreferrer">Go to {infoData[item].name}</a>
                  </div>
                </div>
                {data[item] && (
                  <div className="card mt-2" style={{ backgroundColor: "#ffecb3", border: "1px solid #ffb300" }}>
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "#ff6f00" }}>{data[item].name}</h5>
                      <p className="card-text">{data[item].description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
