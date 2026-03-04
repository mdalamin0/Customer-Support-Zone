import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';
import TaskStatusContainer from '../TaskStatusContainer/TaskStatusContainer';

const TicketsContainer = ({ promiseTickets }) => {
  const tickets = use(promiseTickets);

  return (
    <div className='w-10/12 mx-auto pb-16'>
      <div className='text-2xl font-bold mt-16  mb-5 '>
        <h2 >Customer Tickets</h2>
        
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-5">
          {
            tickets.map(ticket => <TicketCard ticket={ticket}></TicketCard>)
          }
        </div>
        <div className=" ">
          <TaskStatusContainer></TaskStatusContainer>
        </div>
      </div>
    </div>
  );
};

export default TicketsContainer;