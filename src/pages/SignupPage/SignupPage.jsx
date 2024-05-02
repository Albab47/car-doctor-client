import img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const handleLogin = () => {

  };
    
  return (
    <section>
      <div className="hero min-h-screen bg-base">
        <div className="hero-content flex-col gap-6 justify-between lg:flex-row">
          <div className="lg:w-1/2">
            <img src={img} alt="" />
          </div>

          <div className="card shrink-0 w-full max-w-sm border bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl font-bold text-center">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-primary text-white">
                  Sign up
                </button>
              </div>
            </form>
            <p className="text-light text-center mb-6 text-sm">
              Already have an account?{" "}
              <Link to="/login-up" className="text-primary font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
