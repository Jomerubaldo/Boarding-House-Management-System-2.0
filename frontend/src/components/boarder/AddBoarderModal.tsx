import { motion, AnimatePresence } from 'framer-motion';
import { useBoarders } from '../../contexts/BoardersProvider';
import { CirclePlus, CircleX, Save } from 'lucide-react';

const AddBoarderModal = () => {
  const {
    showModal,
    closeModal,
    handleChange,
    handleSubmit,
    formData,
    openModal,
  } = useBoarders();

  return (
    <div className="mr-8">
      <button onClick={openModal}>
        <CirclePlus stroke="blue" size={40} />
      </button>

      {/* Framer Motion to animate open and close modal */}
      <AnimatePresence>
        {showModal && (
          // Backdrop
          <motion.div
            key="modal-backdrop"
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-1000"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Modal box */}
            <motion.div
              key="modal-box"
              className="bg-white p-8 rounded-lg w-[400px] shadow-lg"
              initial={{ y: -50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-center">
                Add New Boarder
              </h2>

              <form onSubmit={handleSubmit}>
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full mb-3 p-2 border border-gray-300 rounded"
                />

                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />

                <input
                  name="room"
                  type="number"
                  placeholder="Enter Room Number (1-7)"
                  value={formData.room}
                  onChange={handleChange}
                  required
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
                  >
                    <Save />
                  </button>

                  <button
                    type="button"
                    className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600"
                    onClick={closeModal}
                  >
                    <CircleX />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default AddBoarderModal;
