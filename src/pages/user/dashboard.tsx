import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import Button from "../../common-components/button";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../app/store";
import { useState } from "react";
import "./dashboard.css";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [searchTerm, setSearchTerm] = useState("");

    const plants = [
        { id: "1", name: "Rose", price: 35, image: "../src/assets/rose.jpg" },
        { id: "2", name: "Tulip", price: 25, image: "../src/assets/tulip.jpg" },
        { id: "3", name: "Sunflower", price: 30, image: "../src/assets/sunflower.jpg" },
        { id: "4", name: "Daisy", price: 20, image: "../src/assets/daisy.jpg" },
        { id: "5", name: "Lily", price: 28, image: "../src/assets/lily.jpg" },
        { id: "6", name: "Orchid", price: 40, image: "../src/assets/orchid.jpg" },
        { id: "7", name: "Marigold", price: 15, image: "../src/assets/marigold.jpg" },
        { id: "8", name: "Jasmine", price: 22, image: "../src/assets/jasmine.jpg" },
    ];

    const handleCheckboxChange = (plant: typeof plants[number]) => {
        dispatch(addItem({ ...plant, quantity: 1 }));
    };

    const filteredPlants = plants.filter((plant) =>
        plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="nursery-dashboard">
            <h1 className="title">🌿 Econest Dashboard</h1>
            <input
                className="search"
                placeholder="Search plants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="grid">
                {filteredPlants.map((plant) => {
                    const isInCart = cartItems.some((item) => item.id === plant.id);
                    const currentQuantity = cartItems.find((item) => item.id === plant.id)?.quantity || 0;
                    return (
                        <div key={plant.id} className="card">
                            <img src={plant.image} alt={plant.name} className="avatar" />
                            <h3 className="name">{plant.name}</h3>
                            <div className="qtyRow">
                                <button
                                    className="pill minus"
                                    onClick={() => {
                                        if (currentQuantity > 1) {
                                            dispatch(addItem({ ...plant, quantity: -1 }));
                                        } else if (currentQuantity === 1) {
                                            // remove the item from cart when quantity reaches 0
                                            dispatch(addItem({ ...plant, quantity: -1 }));
                                        }
                                    }}
                                    disabled={!isInCart}
                                >
                                    -
                                </button>

                                <span className="qty">{currentQuantity}</span>
                                <button
                                    className="pill plus"
                                    onClick={() => dispatch(addItem({ ...plant, quantity: 1 }))}
                                >
                                    +
                                </button>
                            </div>
                            <div className="footerRow">
                                <p className="price">₹{plant.price}</p>
                                <input
                                    type="checkbox"
                                    className="check"
                                    checked={isInCart}
                                    onChange={() => handleCheckboxChange(plant)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <Button
                onClick={() => navigate("/cartpage")}
                ariaLabel="View Cart"
                className="viewCart"
            >
                View Cart
            </Button>
        </div>
    );
};

export default Dashboard;