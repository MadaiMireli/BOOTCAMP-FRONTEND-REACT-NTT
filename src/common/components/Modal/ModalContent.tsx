import { FC, ReactNode } from "react";
import "./Modal.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  title: string;
  description: string;
  onAction: () => void;
}

export const ModalContent: FC<Props> = ({
  isOpen,
  title,
  description,
  children,
}) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{description}</p>
        {children && children}
      </div>
    </div>
  );
};
