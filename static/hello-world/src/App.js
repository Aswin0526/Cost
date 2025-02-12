import React, { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Dummy data for testing
    const dummyData = [
      {
        ProductName: "Compute Engine",
        ProductFamily: "Compute",
        Region: "US-East",
        "Resource ID": "12345",
        Operation: "Instance Usage",
        "Effective Cost": "$50.00",
        "Resource Tag": "Production",
        "Start Date": "2024-01-01",
        "End Date": "2024-01-31",
        "Usage Amount": "100 hours",
      },
      {
        ProductName: "Cloud Storage",
        ProductFamily: "Storage",
        Region: "US-West",
        "Resource ID": "67890",
        Operation: "Data Stored",
        "Effective Cost": "$30.00",
        "Resource Tag": "Backup",
        "Start Date": "2024-01-01",
        "End Date": "2024-01-31",
        "Usage Amount": "500 GB",
      },
    ];

    setData(dummyData);
  }, []);

  return (
    <div className="container">
      <h1>Cost Report</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Family</th>
            <th>Region</th>
            <th>Resource ID</th>
            <th>Operation</th>
            <th>Effective Cost</th>
            <th>Resource Tag</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Usage Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item["ProductName"]}</td>
              <td>{item["ProductFamily"]}</td>
              <td>{item["Region"]}</td>
              <td>{item["Resource ID"]}</td>
              <td>{item["Operation"]}</td>
              <td>{item["Effective Cost"]}</td>
              <td>{item["Resource Tag"]}</td>
              <td>{item["Start Date"]}</td>
              <td>{item["End Date"]}</td>
              <td>{item["Usage Amount"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
