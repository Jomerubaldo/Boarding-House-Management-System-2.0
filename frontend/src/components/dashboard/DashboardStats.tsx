import { IonIcon } from '@ionic/react';
import { home, people, homeSharp, homeOutline } from 'ionicons/icons';
import { useBoarders } from '../../contexts/BoardersProvider';
import type { FC } from 'react';

const DashboardStats: FC = () => {
  // TypeScript now knows exactly what types these are!
  const { totalRooms, occupied, available } = useBoarders();

  return (
    <div className="flex justify-between">
      <div className="p-6 bg-[#17a2b8] rounded w-[302px] h-[142px] shadow-xl">
        <div className="flex justify-between items-center pt-2">
          <div className="space-y-3">
            <p className="text-3xl font-bold text-white">{totalRooms}</p>
            <p className="text-lg text-white">Total Rooms</p>
          </div>
          <IonIcon icon={home} className="text-gray-700 text-7xl" />
        </div>
      </div>
      <div className="p-6 bg-[#28a745] rounded w-[302px] h-[142px] shadow-xl">
        <div className="flex justify-between items-center pt-3">
          <div className="space-y-3">
            <p className="text-3xl font-bold text-white">{occupied}</p>
            <p className="text-lg text-white">Total Boarders</p>
          </div>
          <IonIcon icon={people} className="text-gray-700 text-7xl" />
        </div>
      </div>

      <div className="p-6 bg-[#ffc107] rounded w-[302px] h-[142px] shadow-xl">
        <div className="flex justify-between items-center pt-3">
          <div className="space-y-3">
            <p className="text-3xl font-bold text-black">{occupied}</p>
            <p className="text-lg text-black">Occupied Rooms</p>
          </div>
          <IonIcon icon={homeSharp} className="text-gray-700 text-7xl" />
        </div>
      </div>
      <div className="p-6 bg-[#dc3545] rounded w-[302px] h-[142px] shadow-xl">
        <div className="flex justify-between items-center pt-3">
          <div className="space-y-3">
            <p className="text-3xl font-bold text-white">{available}</p>
            <p className="text-lg text-white">Available Rooms</p>
          </div>
          <IonIcon icon={homeOutline} className="text-gray-700 text-7xl" />
        </div>
      </div>
    </div>
  );
};
export default DashboardStats;
