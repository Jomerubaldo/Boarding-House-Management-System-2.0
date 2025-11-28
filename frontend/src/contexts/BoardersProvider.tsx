import Swal from 'sweetalert2';
import { createContext, useContext, useState, useEffect } from 'react';
import type { FC } from 'react';
import type {
  Boarder,
  BoarderFormData,
  BoardersContextValue,
  BoardersProviderProps,
} from '../types/boarders.types';

// Create context with proper type (can be undefined initially)
export const BoardersContext = createContext<BoardersContextValue | undefined>(
  undefined
);

const BoardersProvider: FC<BoardersProviderProps> = ({ children }) => {
  // State with explicit Boarder[] type
  const [boarders, setBoarders] = useState<Boarder[]>(() => {
    const saved = localStorage.getItem('boarders');
    return saved ? JSON.parse(saved) : [];
  });
  /*
    bantayan niya kapag may value nayung boarders
    tsaka siya gagana sasave na niya sa localstorage.
    */
  useEffect(() => {
    localStorage.setItem('boarders', JSON.stringify(boarders));
  }, [boarders]);

  // State para sa visibility ng modal (true = makikita, false = nakatago)
  const [showModal, setShowModal] = useState<boolean>(false);

  // State para sa ID ng boarder na in-eedit
  const [editingId, setEditingId] = useState<number | null>(null);

  // State para sa temporary data habang nag-eedit
  const [editData, setEditData] = useState<Partial<Boarder>>({});

  //State para sa form data kapag nag-a-add ng bagong boarder
  const [formData, setFormData] = useState<BoarderFormData>({
    firstName: '',
    lastName: '',
    room: '',
  });

  // Total rooms sa boarding house
  const totalRooms = 7;

  // Total ng mga current boarders
  const occupied = boarders.length;

  // Total available rooms
  const available = totalRooms - occupied;

  const openModal = (): void => {
    // check kapag zero na ang available na rooms
    if (available === 0) {
      Swal.fire({
        title: 'Room is Full!',
        icon: 'warning',
      });
      return; // Balik lang sa condition para e check ulit
    }
    setShowModal(true); //kung available pa ang room mabubuksan ang modal
  };

  // Function para i-close ang modal at i-reset ang form
  const closeModal = (): void => {
    setShowModal(false);
    setFormData({ firstName: '', lastName: '', room: '' });
  };

  // Function para sa pag-handle ng pagbabago sa form inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // Capitalized the input while typing add an value
    const { name, value } = e.target;

    const capitalizedValueInput =
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    setFormData({
      ...formData, // spread operator para di mabura yung ibang fields
      [name]: capitalizedValueInput, // i-update lang yung field na binago
    });
  };

  // Function kapag nag-submit ng form (Add Boarder)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // para hindi mag-refresh ang page

    // Validation: bawal ulitin ang room number
    if (boarders.some((b) => b.room === Number(formData.room))) {
      Swal.fire({
        title: 'Room already occupied!',
        icon: 'warning',
      });
      return;
    }

    // Check kung input field is 7 above
    const formRoomNumber = Number(formData.room);

    if (formRoomNumber > 7) {
      Swal.fire({
        title: 'Number must be below 7!',
        icon: 'warning',
      });
      return;
    }

    // Gumawa ng bagong boarder object
    const newBoarder = {
      id: Date.now(), // unique ID base sa current time
      firstName: formData.firstName,
      lastName: formData.lastName,
      room: Number(formData.room),
      dateEntered: new Date().toLocaleDateString(), //Date now
    };

    // Check niya kung same first name and last name
    if (
      boarders.some(
        (b) =>
          b.firstName.toLowerCase() === formData.firstName.toLowerCase() &&
          b.lastName.toLowerCase() === formData.lastName.toLowerCase()
      )
    ) {
      Swal.fire({
        title: 'This Boarder is Already Registered!',
        icon: 'warning',
      });
      return;
    }

    // Idagdag sa listahan ng boarders.
    setBoarders([...boarders, newBoarder]);
    closeModal(); // Isara ang modal

    // after add boarder show modal boarder added successfully
    Swal.fire({
      title: 'Boarder Added Successfully!',
      icon: 'success',
    });
  };

  // Function para burahin ang boarder gamit ang ID tapos add sweet alert modal
  const handleDelete = (id: number): void => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will permanently delete the boarder record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton:
          'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2',
        cancelButton:
          'bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded',
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        setBoarders(boarders.filter((boarder) => boarder.id !== id));
      }
    });
  };

  // Function para simulan ang pag-edit ng boarder
  const handleEdit = (boarder: Boarder): void => {
    setEditingId(boarder.id); // itago kung sino ang in-eedit
    setEditData({ ...boarder }); // gumawa ng temporary copy ng data
  };

  // Function para sa pag-handle ng pagbabago habang nag-eedit
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // Capitalized the input while typing an edit value
    const { name, value } = e.target;
    const capitalizedValueInput =
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    setEditData({ ...editData, [name]: capitalizedValueInput });
  };

  // Function para i-save ang inedit na data
  const handleSaveEdit = (): void => {
    setBoarders(
      boarders.map((boarder) =>
        boarder.id === editingId ? (editData as Boarder) : boarder
      )
    );

    /* 
      Check kung input field is 7 above
      dapat laging false para hindi gumana yung modal alert
      */
    const roomNumber = Number(editData.room);

    if (roomNumber > 7) {
      Swal.fire({
        title: 'Number must be below 7!',
        icon: 'warning',
      });
      return;
    }

    // Validate kung may laman lahat
    if (!editData.firstName || !editData.lastName || !editData.room) {
      Swal.fire({
        title: 'Please fill Out All the Fields!',
        icon: 'warning',
      });
      return;
    }

    setEditingId(null);
    setEditData({});
    Swal.fire({
      title: 'Boarder Updated Successfully!',
      icon: 'success',
    });
  };

  // Function para i-cancel ang edit mode
  const handleCancelEdit = (): void => {
    setEditingId(null);
    setEditData({}); // throw away the temporary copy
  };
  return (
    <BoardersContext.Provider
      value={{
        boarders,
        setBoarders,
        showModal,
        setShowModal,
        editingId,
        editData,
        formData,
        openModal,
        closeModal,
        handleChange,
        handleSubmit,
        handleDelete,
        handleEdit,
        handleEditChange,
        handleSaveEdit,
        handleCancelEdit,
        totalRooms,
        occupied,
        available,
      }}
    >
      {children}
    </BoardersContext.Provider>
  );
};
export default BoardersProvider;

export const useBoarders = (): BoardersContextValue => {
  const context = useContext(BoardersContext);
  if (!context) {
    throw new Error("'useBoarders must be used within a BoardersProvider'");
  }
  return context;
};
