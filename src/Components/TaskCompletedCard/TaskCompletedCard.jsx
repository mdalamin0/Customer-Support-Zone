import React from 'react';

const TaskCompletedCard = ({task}) => {
  return (
    <div className='mb-10'>
      <h2 className='tex-sm font-semibold bg-[#E0E7FF] p-3  rounded shadow-lg'>{task.title}</h2>
    </div>
  );
};

export default TaskCompletedCard;