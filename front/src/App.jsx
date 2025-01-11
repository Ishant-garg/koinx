import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row justify-between mx-auto my-6 px-6">
        <div className="basis-full md:basis-[70%]">
          <Main />
        </div>
        <div className="basis-full md:basis-[30%] mt-4 md:mt-0">
          <SideBar />
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default App;
