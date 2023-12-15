import React from 'react';
import TicketCard from './TicketCard';

const KanbanBoard = ({ tickets, displayOption, sortOption }) => {
  let sortedTickets = [...tickets]; // Create a copy of tickets array

  // Sorting logic based on sortOption
  if (sortOption === 'priority') {
    sortedTickets.sort((a, b) => b.priority - a.priority); // Sort by priority
  } else if (sortOption === 'title') {
    sortedTickets.sort((a, b) => a.title.localeCompare(b.title)); // Sort by title
  }

  // Filtering/grouping logic based on displayOption
  let groupedTickets;
  if (displayOption === 'status') {
    // Logic for grouping by status
    // groupedTickets = ...
  } else if (displayOption === 'user') {
    // Logic for grouping by user
    // groupedTickets = ...
  } else if (displayOption === 'priority') {
    // Logic for grouping by priority
    // groupedTickets = ...
  }

  return (
    <div className="kanban-board">
      {sortedTickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanBoard;
