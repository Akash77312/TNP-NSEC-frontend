import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../../config/config.js";
import { login } from "../../redux/authSlice.js";
import Loader from "../../components/loader/Loader.jsx";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(login(JSON.parse(user)));
    }
  }, []);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      fullname: "",
      username: "",
      email: "",
      password: "",
    });
  };

  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response;
      if (isLogin) {
        response = await axios.post(`${BASE_URL}/u/login`, {
          login: formData.username,
          password: formData.password,
        });
        toast.success("Login Successful!");
      } else {
        response = await axios.post(`${BASE_URL}/u/register`, {
          fullname: formData.fullname,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        toast.success("Registered Successfully!");
      }

      const userData = response.data.user;
      console.log(response.data.token)
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token",response.data.token);
      dispatch(login(userData));
 
    navigate('/')
     setLoading(false); // stop loader on error
    } catch (error) {
      const errMsg = error.response?.data?.message || "Something went wrong";
      toast.error(errMsg);
      
    }finally{
        setLoading(false); // stop loader on error
    }
  };

  const handleGoogleSignIn = async () => {
    // Optional: Google OAuth logic
  };

   if (loading) return <Loader />;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Toaster position="top-center" />
      <div className="w-[70%] p-4 bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://d299ydywi1tak7.cloudfront.net/media/colleges/19/logo/nsec-logo.png.crdownload"
            alt="Auth Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isLogin ? "Login" : "Signup"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </>
            )}

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <div className="relative">
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisiblity}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-500"
              >
                {passwordShown ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>

          <div className="my-4 text-center">OR</div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          <p className="text-center mt-4 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={toggleAuthMode}
              className="text-blue-500 underline"
            >
              {isLogin ? "Signup" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
