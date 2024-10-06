import React from 'react';

function NameItem({ item, updateItem }) {
  const handleDescriptionChange = (e) => {
    updateItem({ ...item, description: e.target.value });
  };

  return (
    <div className="name-item">
      <h3>{item.name}</h3>
      <input
        type="text"
        placeholder="Add a description..."
        value={item.description}
        onChange={handleDescriptionChange}
      />
    </div>
  );
}

export default NameItem;
