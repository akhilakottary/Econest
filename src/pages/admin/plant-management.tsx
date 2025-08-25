import Button from "../../common-components/button";
import BackButton from "../../common-components/back-button"; // Updated to match your path
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./plant-management.css";

// Define the Plant interface
interface Plant {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
}

const PlantManagement = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [plants, setPlants] = useState<Plant[]>([
    { id: "1", name: "Rose", price: 35, stock: 50, image: "../src/assets/rose.jpg" },
    { id: "2", name: "Tulip", price: 25, stock: 30, image: "../src/assets/tulip.jpg" },
  ]);

  const handleAddPlant = () => {
    setIsAddModalOpen(true);
  };

  const handleEditPlant = (plant: Plant) => {
    setSelectedPlant(plant);
    setIsEditModalOpen(true);
  };

  const handleDeletePlant = (id: string) => {
    setPlants(plants.filter((plant) => plant.id !== id));
  };

  const handleSaveAdd = () => {
    const newPlant: Plant = { id: String(plants.length + 1), name: "New Plant", price: 20, stock: 10, image: "/images/newplant.jpg" };
    setPlants([...plants, newPlant]);
    setIsAddModalOpen(false);
  };

  const handleSaveEdit = () => {
    if (selectedPlant) {
      setPlants(plants.map((plant) =>
        plant.id === selectedPlant.id ? selectedPlant : plant
      ));
      setIsEditModalOpen(false);
      setSelectedPlant(null);
    }
  };

  return (
    <div className="plant-management">
      <BackButton className="back-button" /> {/* Using your BackButton with custom class */}
      <h1 className="title">🌿 Plant Management</h1>
      <Button onClick={handleAddPlant} ariaLabel="Add Plant" className="add-button">
        Add Plant
      </Button>
      <div className="plant-list">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.image} alt={plant.name} className="plant-image" />
            <div className="plant-details">
              <h3>{plant.name}</h3>
              <p>Price: ₹{plant.price}</p>
              <p>Stock: {plant.stock}</p>
              <div className="actions">
                <Button
                  onClick={() => handleEditPlant(plant)}
                  ariaLabel="Edit Plant"
                  className="action-button icon-button"
                >
                  <EditOutlined />
                </Button>
                <Button
                  onClick={() => handleDeletePlant(plant.id)}
                  ariaLabel="Delete Plant"
                  className="action-button icon-button delete"
                >
                  <DeleteOutlined />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isAddModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Plant</h2>
            <input placeholder="Name" className="modal-input" />
            <input placeholder="Price" className="modal-input" type="number" />
            <input placeholder="Stock" className="modal-input" type="number" />
            <input placeholder="Image URL" className="modal-input" />
            <div className="modal-actions">
              <Button onClick={handleSaveAdd} ariaLabel="Save" className="action-button">
                Save
              </Button>
              <Button
                onClick={() => setIsAddModalOpen(false)}
                ariaLabel="Cancel"
                className="action-button cancel"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
      {isEditModalOpen && selectedPlant && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Plant</h2>
            <input
              placeholder="Name"
              className="modal-input"
              defaultValue={selectedPlant.name}
              onChange={(e) => setSelectedPlant({ ...selectedPlant, name: e.target.value } as Plant)}
            />
            <input
              placeholder="Price"
              className="modal-input"
              type="number"
              defaultValue={selectedPlant.price}
              onChange={(e) => setSelectedPlant({ ...selectedPlant, price: Number(e.target.value) } as Plant)}
            />
            <input
              placeholder="Stock"
              className="modal-input"
              type="number"
              defaultValue={selectedPlant.stock}
              onChange={(e) => setSelectedPlant({ ...selectedPlant, stock: Number(e.target.value) } as Plant)}
            />
            <input
              placeholder="Image URL"
              className="modal-input"
              defaultValue={selectedPlant.image}
              onChange={(e) => setSelectedPlant({ ...selectedPlant, image: e.target.value } as Plant)}
            />
            <div className="modal-actions">
              <Button onClick={handleSaveEdit} ariaLabel="Save" className="action-button">
                Save
              </Button>
              <Button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setSelectedPlant(null);
                }}
                ariaLabel="Cancel"
                className="action-button cancel"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantManagement;