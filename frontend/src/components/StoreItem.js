import { useState } from "react";
import formatCurrency from "../util/formatCurrency";
import StoreItemModal from "./StoreItemModal";

export default function StoreItem({ item }) {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <div className="lg:w-1/4 w-1/2 p-3 text-white">
        <div className="block relative h-24 rounded overflow-hidden">
          <img
            alt="e-commerce"
            className=" object-cover object-center w-50% h-full block"
            src={item.image}
          />
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h3 className="text-white text-xs tracking-widest title-font uppercase mb-1">
              {item.brand}
            </h3>
            <h2 className=" title-font text-lg font-medium">
              {item.name}
            </h2>
            <p className="mt-1">{formatCurrency(item.price.start)}</p>
          </div>
          <button
            onClick={openModal}
            className="text-black py-2 px-4 text-lg rounded-full hover:bg-blue-500 m-4 bg-white "
          >
            Details
          </button>
        </div>
      </div>
      <StoreItemModal item={item} open={open} closeModal={closeModal} />
    </>
  );
}
