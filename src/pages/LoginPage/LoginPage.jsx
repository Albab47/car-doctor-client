import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const LoginPage = () => {
    const {signInUser} = useContext(AuthContext);
    
  const handleLogin = async(e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
      const result = await signInUser(email, password);
      const user = result.user;
      console.log(user);
    } catch (err) {
      console.error(err);
    }
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
              <h1 className="text-3xl font-bold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  Login
                </button>
              </div>
            </form>
            <p className="text-light text-center mb-6 text-sm">
              Don't have an account yet?{" "}
              <Link to="/signup" className="text-primary font-medium">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
