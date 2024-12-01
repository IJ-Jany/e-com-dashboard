import axios from "axios";
import  {useState} from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [inputFields, setInputFields] = useState({
    displayname: "",
    email: "",
    password: "",
    phonenumber: "",
    role:""
  });

  // handle input fileds
  const handleInput = (e) => {
    const inputFieldsInfo = { ...inputFields };
    inputFieldsInfo[e.target.name] = e.target.value;
    setInputFields(inputFieldsInfo);
  };

  // handle sign up
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/create",
        inputFields
      );
      console.log(res);
      setInputFields({
        displayname: "",
        phonenumber: "",
        email: "",
        password: "",
        role:""
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <section className="container">
        <section className="w-full h-[100vh] flex items-center justify-center">
          <section className="w-[560px] h-[760px] py-12 px-7 rounded">
            <section className="space-y-3 pb-5">
              <h1 className="">Sign Up</h1>
              <p className="">Please sign up your Admin Control Panel</p>
            </section>
            <section>
              <form action="">
                <div className="flex flex-col space-y-2 pb-6">
                  <label htmlFor="" className="">
                    Display Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your fullname"
                    name="displayname"
                    value={inputFields.displayname}
                    onChange={handleInput}
                    className=""
                  />
                </div>
                <div className="flex flex-col space-y-2 pb-6">
                  <label htmlFor="" className="">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={inputFields.email}
                    onChange={handleInput}
                    className=""
                  />
                </div>
                <div className="flex flex-col space-y-2 pb-6">
                  <label htmlFor="" className="">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={inputFields.password}
                    onChange={handleInput}
                    className=""
                  />
                </div>
                <div className="flex flex-col space-y-2 pb-6">
                  <label htmlFor="" className="">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    name="phonenumber"
                    value={inputFields.phonenumber}
                    onChange={handleInput}
                    className=""
                  />
                </div>
                <div className="flex flex-col space-y-2 pb-6">
                  <label htmlFor="" className="">
                    Role
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    name="role"
                    value={inputFields.role}
                    onChange={handleInput}
                    className=""
                  />
                </div>
                <div className="py-3">
                  <button
                    onClick={handleSignUp}
                    className="text-center w-full bg-black text-white"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div>
                <p className="text-center text-text font-inter font-normal text-base">
                  Already have and account?{" "}
                  <Link to="/login" className="text-primary">
                    Sign In
                  </Link>
                </p>
              </div>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Signup;
