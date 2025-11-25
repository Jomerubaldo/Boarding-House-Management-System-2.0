import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-[#343a40] w-[250px] h-screen">
      <div className="text-center font-light pt-3 pb-[15px]">
        <h2 className="text-[19px] text-white">Admin</h2>
      </div>
      <hr className="text-gray-600" />
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
