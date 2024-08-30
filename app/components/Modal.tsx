// components/Modal.tsx
import { closeModal } from "@/Redux/Slices/modalSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ModalProps {
  id: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ id, children }: any) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.modal.modals[id]);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal backdrop-blur-md">
      <div className="modal-content !px-0">
        <span className="close" onClick={() => dispatch(closeModal({ id }))}>
          &times;
        </span>
        {children}
      </div>
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
           z-index: 1000
        }
        .modal-content {
          background: white;
          border-radius: 4px;
          position: relative;
          width: 500px;
          z-index: 1001;
        }
        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Modal;
