import React, { useState } from "react";
import "./style.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [savedItems, setSavedItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track which item is being edited

  // Open popup (for adding new or editing existing)
  const openPopup = (index = null) => {
    if (index !== null) {
      // If editing an existing box
      setName(savedItems[index].name);
      setId(savedItems[index].id);
      setPassword(savedItems[index].password);
      setEditingIndex(index);
    } else {
      // If adding a new entry
      setName("");
      setId("");
      setPassword("");
      setEditingIndex(null);
    }
    setShowPopup(true);
  };

  // Close popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Save new or edited item
  const handleSave = () => {
    if (name.trim() === "") return; // Prevent saving empty names
    if (editingIndex !== null) {
      // Editing existing entry
      const updatedItems = [...savedItems];
      updatedItems[editingIndex] = { name, id, password };
      setSavedItems(updatedItems);
    } else {
      // Adding new entry
      setSavedItems([...savedItems, { name, id, password }]);
    }
    closePopup();
  };

  // Delete an item
  const handleDelete = (index) => {
    setSavedItems(savedItems.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Cost Report</h1>
      <button className="add-btn" onClick={() => openPopup()}>
        Add
      </button>

      {/* Container for saved items */}
      <div className="saved-container">
        {savedItems.map((item, index) => (
          <div
            key={index}
            className="saved-box"
            onClick={() => openPopup(index)}
          >
            {item.name}
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevent opening popup when clicking delete
                handleDelete(index);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>{editingIndex !== null ? "Edit Item" : "Add New Item"}</h2>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>ID:</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="popup-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
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
          {/* Dummy Data */}
          <tr>
            <td>Compute Engine</td>
            <td>Compute</td>
            <td>US-East</td>
            <td>12345</td>
            <td>Instance Usage</td>
            <td>$50.00</td>
            <td>Production</td>
            <td>2024-01-01</td>
            <td>2024-01-31</td>
            <td>100 hours</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
