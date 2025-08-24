import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../features/cart/cartSlice";
import Button from "../../common-components/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined, DeleteOutlined } from "@ant-design/icons";
import "./cartpage.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Placeholder function to add a new item (navigates to dashboard for selection)
  const handleAddNewItem = () => {
    navigate("/dashboard"); // Navigate to dashboard to select a new item
  };

  return (
    <div className="nursery-dashboard">
      <Button
        onClick={() => navigate("/dashboard")}
        ariaLabel="Back to Dashboard"
        className="back-button"
      >
        <ArrowLeftOutlined style={{ color: '#000' }} />
      </Button>

      <h1 className="title">🛒 My Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-container">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-row">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3 className="name">{item.name}</h3>
                <p className="price">₹{item.price}</p>
              </div>
              <div className="qty-section">
                <button
                  className="qty-btn"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="qty">{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>
              <Button
                onClick={() => dispatch(removeItem(item.id))}
                ariaLabel={`Delete ${item.name}`}
                className="delete-btn"
              >
                <DeleteOutlined style={{ color: '#000' }} />
              </Button>
            </div>
          ))}
          <h2 className="total-price">Total: ₹{totalPrice}</h2>
        </div>
      )}
      {cartItems.length > 0 && (
        <Button
          onClick={handleAddNewItem}
          ariaLabel="Add New Item"
          className="add-item-btn"
        >
          Add Item
        </Button>
      )}
      <Button
        onClick={() => alert("Proceeding to payment...")}
        ariaLabel="Proceed to Pay"
        className="pay-button"
      >
        Pay
      </Button>
    </div>
  );
};

export default CartPage;
