import TicketCard from '../TicketCard/TicketCard';

const TicketsContainer = ({ customerTickets, handleAddTask, taskStatus }) => {
  // const tickets = use(promiseTickets);

  return (
    <div className=' md:pb-16 col-span-4'>
      <div className='text-2xl font-bold mt-16  mb-5 '>
        <h2 >Customer Tickets: {customerTickets.length}</h2>

      </div>
      <div className="">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
          {
            customerTickets.map(ticket => <TicketCard
              key={ticket.id}
              ticket={ticket}
              handleAddTask={handleAddTask}
              taskStatus={taskStatus}
            ></TicketCard>)
          }
        </div>
       
      </div>
    </div>
  );
};

export default TicketsContainer;