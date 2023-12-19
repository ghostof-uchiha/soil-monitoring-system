import React from 'react';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onCancel,
  onConfirm,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-10 duration-500 flex items-center justify-center transition-scale ${
        isOpen ? 'scale-100' : 'scale-0 pointer-events-none'
      }`}
    >
      <div className="fixed inset-0 bg-gray-600 backdrop-filter backdrop-blur-sm opacity-50"></div>
      <div className="p-4 z-20 rounded-md border bg-white shadow-default dark:border-strokedark dark:bg-boxdark transition-opacity transform scale-100">
        <div className="pb-12 py-4 px-7">
          <h3 className="font-medium text-black dark:text-white">
            Are you sure you want to delete this forecast?
          </h3>
        </div>
        <div className="flex justify-around">
          <button
            className="px-3 py-1 text-base hover:text-primary"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-3 py-1 text-base hover:text-white hover:border-danger border-2 rounded-md text-danger hover:bg-danger"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
