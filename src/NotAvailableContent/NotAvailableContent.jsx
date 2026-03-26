import React from 'react';

const NotAvailableContent = ({pageName}) => {
  return (
     <div className='bg-base-200 border-t-2 border-gray-100 py-[149px]'>
      <h2 className='text-2xl md:text-3xl font-bold text-center text-gray-500'>{pageName} page not yet added!</h2>
    </div>
  );
};

export default NotAvailableContent;