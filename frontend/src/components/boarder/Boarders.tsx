import { useState } from 'react';
import { useBoarders } from '../../contexts/BoardersProvider';
import AddBoarderModal from './AddBoarderModal';
import { CircleX, Save, SquarePen, Trash2 } from 'lucide-react';

const Boarders = () => {
  const {
    boarders,
    editingId,
    editData,
    handleEditChange,
    handleSaveEdit,
    handleCancelEdit,
    handleDelete,
    handleEdit,
  } = useBoarders();

  // search bar the users using filter in map()
  const [search, setSearch] = useState('');

  const filteredBoarders = boarders.filter(
    (b) =>
      b.firstName.toLowerCase().includes(search.toLowerCase()) ||
      b.lastName.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="bg-[#e5e7eb] w-full h-screen">
      <div className="flex justify-between p-4">
        <h2 className="text-3xl pb-3">Boarders</h2>
        <div className="pr-8">
          <AddBoarderModal />
        </div>
      </div>
      <div className="pl-5">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search boarders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-52 bg-white px-4 py-2 ring ring-black focus:ring-2 focus:ring-green-500 focus:outline-none rounded"
        />
      </div>
      {/* add overflow-y-auto to create an scroll vertically */}
      <div className="mt-6 overflow-y-auto">
        {/* Table */}
        <div>
          {/* tables-fixed para every edit hindi nagbabago yung width */}
          <table className="w-full table-fixed">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left">First Name</th>
                <th className="px-6 py-3 text-left">Last Name</th>
                <th className="px-6 py-3 text-left">Room Number</th>
                <th className="px-6 py-3 text-left">Date Entered</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBoarders.map((boarder) => (
                <tr key={boarder.id}>
                  {/* Kung in-eedit, papalitan ng input fields */}
                  {editingId === boarder.id ? (
                    <>
                      <td className="px-6 py-4">
                        <input
                          name="firstName"
                          type="text"
                          value={editData.firstName}
                          onChange={handleEditChange}
                          className="w-full p-1 border border-gray-300 rounded"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          name="lastName"
                          type="text"
                          value={editData.lastName}
                          onChange={handleEditChange}
                          className="w-full p-1 border border-gray-300 rounded"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          name="room"
                          type="number"
                          value={editData.room}
                          onChange={handleEditChange}
                          min="1"
                          max="7"
                          className="w-full p-1 border border-gray-300 rounded"
                        />
                      </td>
                      <td className="px-6 py-4">{boarder.dateEntered}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button onClick={handleSaveEdit}>
                            <Save stroke="green" size={26} />
                          </button>
                          <button onClick={handleCancelEdit}>
                            <CircleX stroke="red" size={26} />
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      {/* Normal display kapag hindi nag-eedit */}
                      <td className="px-6 py-4">{boarder.firstName}</td>
                      <td className="px-6 py-4">{boarder.lastName}</td>
                      <td className="px-6 py-4">{boarder.room}</td>
                      <td className="px-6 py-4">{boarder.dateEntered}</td>
                      <td className="px-6 py-4">
                        {/* x */}
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(boarder)}>
                            <SquarePen stroke="blue" size={26} />
                          </button>
                          <button onClick={() => handleDelete(boarder.id)}>
                            <Trash2 stroke="red" size={26} />
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Boarders;
