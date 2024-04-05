"use strict ";

const Modal = ({ show, setShow, text, setbox }) => {
  const handleShow = () => {
    setShow(false);
    setbox(true);
  };
  return (
    <>
      {show && (
        <div className="modal">
          <div className="modal_bar">
            <p> {text} </p>
            <button onClick={handleShow}> close </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
