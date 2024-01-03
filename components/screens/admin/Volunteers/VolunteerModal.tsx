import { ReactNode } from "react";

interface Props {
  isModalOpen: boolean;
  contentString: ReactNode;
  onClose: () => void;
}

const Modal = ({ isModalOpen, contentString, onClose }: Props) => {
  if (isModalOpen)
    return (
      <>
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-[1000] backdrop-brightness-50 cursor-pointer flex items-center justify-center"
          onClick={onClose}
        ></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] bg-white p-10 rounded-lg">
          {contentString}
        </div>
      </>
    );
};

export default Modal;
