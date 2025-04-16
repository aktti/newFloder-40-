import React, { useState } from "react";

function FetchApiExample() {
  const [inputValue, setInputValue] = useState("");
  const [apiData, setApiData] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const fetchApiData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error("Error:", error);
      setApiData(null);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fetch API Example</h2>
      <div>
        <input
          type="text"
          placeholder="Enter ID to fetch"
          value={inputValue}
          onChange={handleInputChange}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={fetchApiData} style={{ padding: "5px 10px" }}>
          Fetch API Data
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        {apiData ? (
          <div>
            <h3>Data:</h3>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          </div>
        ) : (
          <p>No data fetched yet</p>
        )}
      </div>
    </div>
  );
}

export default FetchApiExample;
