// Individual Boarder type
export interface Boarder {
  id: number;
  firstName: string;
  lastName: string;
  room: number;
  dateEntered: string;
}

// Form data type (same as Boarder but without id and dateEntered)
export interface BoarderFormData {
  firstName: string;
  lastName: string;
  room: string; // string because it comes from input field
}

// Context value type - all the things provided by context
export interface BoardersContextValue {
  boarders: Boarder[];
  setBoarders: React.Dispatch<React.SetStateAction<Boarder[]>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  editingId: number | null;
  editData: Partial<Boarder>; // Partial means all fields are optional
  formData: BoarderFormData;
  openModal: () => void;
  closeModal: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDelete: (id: number) => void;
  handleEdit: (boarder: Boarder) => void;
  handleEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveEdit: () => void;
  handleCancelEdit: () => void;
  totalRooms: number;
  occupied: number;
  available: number;
}

// Provider props type
export interface BoardersProviderProps {
  children: React.ReactNode;
}
