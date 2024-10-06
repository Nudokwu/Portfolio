import React from 'react';
import NameItem from './NameItem';

function NameList({ names, setNames }) {
  return (
    <div className="name-list">
      {names.map((item, index) => (
        <NameItem
          key={index}
          item={item}
          updateItem={(newItem) => {
            const updatedNames = [...names];
            updatedNames[index] = newItem;
            setNames(updatedNames);
          }}
        />
      ))}
    </div>
  );
}

export default NameList;
