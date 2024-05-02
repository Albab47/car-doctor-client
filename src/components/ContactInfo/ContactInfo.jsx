import TimetableImg from "../../assets/icons/timetable.svg";
import CallImg from "../../assets/icons/call.svg";
import LocationImg from "../../assets/icons/location.svg";

const ContactInfo = () => {
  return (
    <section className="bg-dark text-white rounded-lg my-28">
      {/* container */}
      <div className="md:flex justify-between px-5 md:px-12 py-7 md:py-14">
        {/* info-1 */}
        <div>
          <img src={TimetableImg} alt="" />
          <div>
            <p className="font-medium">We are open monday-friday</p>
            <p className="font-bold text-2xl">7:00 am - 9:00 pm</p>
          </div>
        </div>
        {/* info-1 */}
        <div>
          <img src={CallImg} alt="" />
          <div>
            <p className="font-medium">We are open monday-friday</p>
            <p className="font-bold text-2xl">7:00 am - 9:00 pm</p>
          </div>
        </div>
        {/* info-1 */}
        <div>
          <img src={LocationImg} alt="" />
          <div>
            <p className="font-medium">We are open monday-friday</p>
            <p className="font-bold text-2xl">7:00 am - 9:00 pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
