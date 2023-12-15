import React, { useState, useEffect } from 'react';
import DisplayOptions from './DisplayOptions';
import SortOptions from './SortOptions';
import KanbanBoard from './KanbanBoard';
import './App.css'; // Your CSS styles

function App() {
  const [tickets, setTickets] = useState([]);
  const [displayOption, setDisplayOption] = useState('user');
  const [sortOption, setSortOption] = useState('priority');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleDisplayChange = (option) => {
    setDisplayOption(option);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <DisplayOptions handleDisplayChange={handleDisplayChange} />
      <SortOptions handleSortChange={handleSortChange} />
      <KanbanBoard tickets={tickets} displayOption={displayOption} sortOption={sortOption} />
    </div>
  );
}

export default App;
