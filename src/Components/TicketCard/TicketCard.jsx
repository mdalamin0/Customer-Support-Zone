import calenderImg from '../../assets/ri_calendar-line.png'

const TicketCard = ({ ticket }) => {
  const { id, title, description, status, priority, customer, createdAt } = ticket;
  console.log(ticket)
  return (
    <div className='card shadow-sm bg-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl'>
     <div className='p-5 space-y-3'>
       <div className='flex justify-between items-center'>
        <h3 className='card-title'>{title}</h3>
        <p className='badge badge-success font-semibold'>{status}</p>
      </div>
      <p className='text-gray-600'>{description}</p>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-4 text-gray-600'>
          <p className=''>#{id}</p>
          <p className='text-warning'>{priority}</p>
        </div>
        <div className='flex items-center space-x-4 text-gray-600'>
          <p className=''>{customer}</p>
          <p className='flex items-center '> <img className='w-5 mr-2 ' src={calenderImg} alt="" /> {createdAt}</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default TicketCard;