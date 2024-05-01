import PropTypes from "prop-types"; 

const SliderContent = ({children}) => {
    return (
        <div className="absolute h-full flex items-center px-8 md:px-16 gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="text-white space-y-7 max-w-lg">
            {children}
          </div>
        </div>
    );
};


SliderContent.propTypes = {
  children: PropTypes.node,
};

export default SliderContent;