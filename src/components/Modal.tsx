import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth: number
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, maxWidth }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        style={{ width: `${maxWidth}px` }}
        className="relative w-full max-w-full mx-2 bg-white rounded-lg shadow-lg w-fit"
      >
        <button
          onClick={onClose}
          className="absolute top-[-30px] right-0 sm:right-[-30px]"
        >
          {/* ✖ */}
          <X className="w-6 h-6 text-white border-2 border-white transaction-all duration-300 hover:scale-[1.2] focus:scale-[1.2] rounded-full" />
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;