import calenderImg from '../../assets/ri_calendar-line.png'

const TicketCard = ({ ticket, handleAddTask, }) => {
  const { id, title, description, status, priority, customer, createdAt } = ticket;
  const shortedDes = description?.split(" ").length > 9 ? description?.split(" ").slice(0, 9).join(" ") + "..." : description;

  return (
    <div onClick={() => handleAddTask(ticket)} className='card shadow-sm bg-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl'>
      <div className='p-5 space-y-3'>
        <div className='flex justify-between items-center'>
          <h3 className='card-title w-[290px] text-sm md:text-[18px] dark:text-black'>{title}</h3>
          <p className={`dark:text-black whitespace-nowrap ${status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"} rounded-full px-3 md:px-4  text-[10px] md:text-sm py-2 font-semibold flex items-center`}><span className={`badge badge-xs mr-2 ${status === "Open" ?  " badge-success " : "badge-warning"}`}></span> {status}</p>
        </div>
        <p className='text-gray-600 text-xs md:text-sm'>{shortedDes}</p>
        <div className='flex flex-col lg:flex-row lg:justify-between items-center'>
          <div className='flex items-center w-full lg:w-fit justify-between lg:justify-start space-x-4  text-gray-600'>
            <p className='text-xs md:text-sm'>#{id}</p>
            <p className={`text-xs md:text-sm ${priority === "High" ? "text-red-500" : priority === "Medium" ? "text-warning" : "text-green-600"} `}>{priority} Priority</p>
          </div>
          <div className='flex items-center w-full lg:w-fit justify-between lg:justify-start space-x-4 text-gray-600'>
            <p className='text-xs md:text-sm'>{customer}</p>
            <p className='flex items-center text-xs md:text-sm'> <img className='w-5 mr-2 ' src={calenderImg} alt="" /> {createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;