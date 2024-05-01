import PropTypes from "prop-types"; 

const SliderNavigation = ({lSlide, rSlide}) => {
    return (
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={lSlide} className="btn btn-circle border-none text-white bg-primary">
            ❮
          </a>
          <a href={rSlide} className="btn btn-circle border-none text-white bg-primary">
            ❯
          </a>
        </div>
    );
};

SliderNavigation.propTypes = {
  lSlide: PropTypes.string,
  rSlide: PropTypes.string
};

export default SliderNavigation;