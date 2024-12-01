import  { useState, useEffect} from "react";
import { Outlet, useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Cookies from "js-cookie";
import {setAuth} from "../../redux/authSlice"
import { useDispatch, useSelector } from "react-redux";
import {  useGetProfileQuery } from "../../redux/apiSlice";


const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate()
  const auth = useSelector((state) => state.authSlice)

  
  const {data, isLoading,error} =  useGetProfileQuery(auth.id);
 const dispatch = useDispatch()

  useEffect(()=>{
    if(!Cookies.get("accessToken")){
      navigate("/login")
  }
  if(!isLoading && data) {
   dispatch(setAuth(data.data))
  }

  
},[data, isLoading, error])

  return (
    <>
      <main>
        <section className="container">
          <div className="flex gap-x-2">
            {isOpen && (
              <div>
                <Sidebar />
              </div>
            )}
            <div className="w-full">
              <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
              <Outlet />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainLayout;
