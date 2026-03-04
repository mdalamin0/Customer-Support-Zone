import React from 'react';

const TaskCompletedCard = ({task}) => {
  return (
    <div className='bg-[#E0E7FF] p-3 rounded shadow-lg'>
      <h2 className='tex-sm font-semibold'>{task.title}</h2>
    </div>
  );
};

export default TaskCompletedCard;