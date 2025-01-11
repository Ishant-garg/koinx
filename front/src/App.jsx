import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col lg:flex-row justify-between mx-auto my-4 sm:my-6 px-4 sm:px-6 max-w-7xl gap-6">
        <div className="w-full lg:w-[70%]">
          <Main />
        </div>
        <div className="w-full lg:w-[30%] mt-0 sm:mt-0">
          <SideBar />
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default App;