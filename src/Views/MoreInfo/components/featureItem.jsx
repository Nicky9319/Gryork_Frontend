import React from "react";

const CWC = ({ icon: Icon, title, description, reverse }) => (
    <div className={`flex w-full my-12 px-6 ${reverse ? 'flex-row-reverse text-center' : 'text-center'}`}>
      <div className="w-1/2 flex justify-center items-center">
        <Icon className="w-1/3 h-auto text-black" />
      </div>
      <div className="w-1/2 flex items-center">
        <div className="w-full pr-50 pl-50">
          <p className="text-[39px] font-bold" style={{ color: '#746F6D' }}>{title}</p>
          {description && <p className="text-xl mt-2" style={{ color: '#746F6D' }}>{description}</p>}
        </div>
      </div>
    </div>
  );

export default CWC;