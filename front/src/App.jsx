import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-between mx-auto my-6 px-6">
        <div className="basis-[70%]">
          <Main />
        </div>
        <div className="basis-[30%]">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default App;
