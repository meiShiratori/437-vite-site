import { useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onCloseRequested: () => void;
  headerLabel: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onCloseRequested, headerLabel, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      onCloseRequested();
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        className="bg-white w-full max-w-md rounded-lg shadow-lg p-4"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{headerLabel}</h2>
          <button
            onClick={onCloseRequested}
            aria-label="Close"
            className="text-xl font-bold text-gray-600 hover:text-black"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
