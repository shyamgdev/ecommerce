import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function QuantitySelector({
  maxQuantity,
  onQuantityChange,
  quantityValue = 1,
}) {
  const [quantity, setQuantity] = useState(quantityValue);

  // Function to handle quantity decrease
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1); // Call the parent function with new quantity
    }
  };

  // Function to handle quantity increase
  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
      onQuantityChange(quantity + 1); // Call the parent function with new quantity
    }
  };

  return (
    <div className="quantity-selector">
      <button onClick={handleDecrease}>
        <FaMinus />
      </button>
      {/* <span className="px-6 py-2 font-semibold">1</span> */}
      <input type="number" value={quantity} readOnly />
      <button onClick={handleIncrease}>
        <FaPlus />
      </button>
    </div>
  );
}

export default QuantitySelector;
