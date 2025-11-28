import { IonIcon } from '@ionic/react';
import { personCircle, menu } from 'ionicons/icons';

const Topbar = () => {
  return (
    <div className="bg-white w-full h-14 border-b border-gray-300 flex justify-between items-center pr-5">
      <button className="pl-5">
        <IonIcon icon={menu} className="text-4xl" />
      </button>
      <button className="group relative bg-white text-gray-500 text-lg pt-1 ">
        <IonIcon icon={personCircle} className="text-4xl" />
        <div className=" bg-white absolute top-full right-0 rounded-lg p-3 mt-1 shadow-md scale-y-0 group-focus:scale-y-100 origin-top duration-2 00">
          <ul>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
};
export default Topbar;
