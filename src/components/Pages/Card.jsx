import React from "react";

const Card = (props) => {
  return (
    <div className="grid grid-cols-3 justify-items-center bg-gray-400 mx-32 mb-8 ">
      <div className="mb-24 self-end">
        <h2 className="text-lg font-semibold mb-4">{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <div className="col-span-2 justify-self-end w-[661px] h-[374px]">
        <button>
          <img src={props.image} alt="" className="w-[661px] h-[374px]" />
        </button>
      </div>
    </div>
  );
};

export default Card;
