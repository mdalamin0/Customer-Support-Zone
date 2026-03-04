import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const TicketsContainer = ({ promiseTickets, handleAddTask }) => {
  const tickets = use(promiseTickets);

  return (
    <div className=' md:pb-16 col-span-4'>
      <div className='text-2xl font-bold mt-16  mb-5 '>
        <h2 >Customer Tickets</h2>

      </div>
      <div className="">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {
            tickets.map(ticket => <TicketCard
              key={ticket.id}
              ticket={ticket}
              handleAddTask={handleAddTask}
            ></TicketCard>)
          }
        </div>
       
      </div>
    </div>
  );
};

export default TicketsContainer;