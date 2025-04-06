import React from "react";
import PropTypes from "prop-types";

// const FeatureItem = ({ icon: Icon, title, description, reverse }) => (
//     <div className={`flex w-full my-12 px-6 ${reverse ? 'flex-row-reverse text-center ' : 'text-center'}`}>
//         <div className="w-1/2 flex justify-center items-center">
//             <Icon className="w-1/3 h-auto text-black" />
//         </div>
//         <div className="w-1/2 flex items-center">
//             <div className="w-full">
//                 <p className="text-3xl font-bold text-black">{title}</p>
//                 {description && <p className="text-xl text-gray-600 mt-2">{description}</p>}
//             </div>
//         </div>
//     </div>
// );

const FeatureItem = ({ icon: Icon, title, description, reverse }) => (
    <div className={`flex w-full my-12 ${reverse ? 'flex-row-reverse text-center' : 'text-center'}`}>
        <div className="w-1/2 flex justify-center items-center">
            <div className={`w-[100%] h-full flex justify-center items-center bg-[#268044] ${reverse ? 'rounded-l-3xl ml-10' : 'rounded-r-3xl mr-10'} py-10`}>
                <Icon className="w-1/3 h-auto text-black" />
            </div>
        </div>
        <div className="w-1/2 flex items-center">
            <div className="w-full">
                <p className="text-3xl font-bold text-black">{title}</p>
                {description && <p className="text-xl text-gray-600 mt-2">{description}</p>}
            </div>
        </div>
    </div>
);

FeatureItem.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    reverse: PropTypes.bool,
};

FeatureItem.defaultProps = {
    description: "",
    reverse: false,
};


export default FeatureItem;