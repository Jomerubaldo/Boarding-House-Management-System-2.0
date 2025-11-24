import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-[#343a40] w-[250px] h-screen">
      <div className="text-center pt-5 pb-5">
        <h2 className="text-2xl text-white">Admin</h2>
      </div>
      <hr className="text-white" />
      <div className="flex justify-center pt-5">
        <nav className="text-white text-[20px] space-y-5">
          <Link to="/">Dashboard</Link>
          <br />
          <Link to="boarders">Boarders</Link>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
