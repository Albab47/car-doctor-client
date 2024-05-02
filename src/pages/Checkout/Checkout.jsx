import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, service_id, img } = service;
  const {user} = useContext(AuthContext);

  const handleBookService = async(e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.fName.value;
    const lName = form.lName.value;
    const phone = form.phone.value;
    const email = user?.email;
    const message = form.message.value;
    const booking = {
        firstName: fName,
        lastName: lName,
        service: title,
        service_id: _id,
        img,
        phone,
        email,
        message,
    }

    const res = await fetch("http://localhost:5000/bookings", {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(booking)
    });
    const data = await res.json();
    if(data.insertedId) {
        alert('order submitted successfully')
    }
}

  return (
    <section className="bg-gray-100 mt-14 p-12 md:p-24 rounded-lg flex items-center justify-center">
      <form onSubmit={handleBookService} className="card-body grid md:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="name"
            name="fName"
            placeholder="First Name"
            defaultValue={user?.displayName}
            className="input"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            name="lName"
            placeholder="Last Name"
            className="input"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Phone</span>
          </label>
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            className="input"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={user?.email}
            className="input"
            required
          />
        </div>

        <label className="form-control col-span-full">
          <div className="label">
            <span className="label-text">Your Message</span>
          </div>
          <textarea
            className="textarea h-24"
            placeholder="Message"
            name="message"
          ></textarea>
        </label>

        <div className="form-control mt-6 col-span-full">
          <input
            className="btn bg-primary text-white"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </section>
  );
};

export default Checkout;
