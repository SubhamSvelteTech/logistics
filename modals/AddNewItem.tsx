import React from "react";

const AddNewItem = () => {
  return (
    <Modal id="booking-done">
      <div className="flex justify-center">
        <span className="font-bold">Booking done successfully!</span>
      </div>
      <div className="flex justify-center mt-6">
        <Image src={BookingDoneIcon} alt="done-icon" width={80} />
      </div>
      <div className="flex justify-end px-4 mt-6">
        <button
          onClick={() => dispatch(closeAllModals())}
          className="text-sm px-6 py-1 text-white bg-black rounded"
        >
          Done
        </button>
      </div>
    </Modal>
  );
};

export default AddNewItem;
