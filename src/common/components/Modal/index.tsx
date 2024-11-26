import { FC } from "react";
import "./Modal.css";
import { useNavigate } from 'react-router';

interface Props {
  isOpen: boolean;
  onClose: () => void;

  title: string
  description: string
}



export const Modal: FC<Props> = ({ isOpen, onClose, title, description }) => {

  const navigate = useNavigate();

  
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{ title }</h2>
        <p>{ description }</p>
        <button className="modal-close-btn" onClick={() => {
            onClose();
            navigate('/');
          }}>
          Cerrar
        </button>
      </div>
    </div>
  );
};
