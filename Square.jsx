import React from 'react';

const Square = (props) => {
  return (
    <div onClick={props.onClick} className="border border-black h-[150px] w-[150px] flex items-center justify-center text-3xl font-bold cursor-pointer">
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
