import React from 'react';

const SortOptions = ({ handleSortChange }) => {
  const handleChange = (option) => {
    handleSortChange(option);
  };

  return (
    <div className="sort-options">
      <button onClick={() => handleChange('priority')}>Sort by Priority</button>
      <button onClick={() => handleChange('title')}>Sort by Title</button>
    </div>
  );
};

export default SortOptions;
