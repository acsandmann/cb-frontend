import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CarDetail() {
  const { sale_id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [formData, setFormData] = useState({
    price: "",
    engine: "",
    transmission: "",
    ownership: "",
    modifications: "",
    miles: "",
  });
  const [loading, setLoading] = useState(true);
  const [diff, set_diff] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:6969/car/${sale_id}`)
      .then((response) => response.json())
      .then((data) => {
        setCar(data);
        setFormData({
          // Set form data with the fetched car details
          price: data.price || "",
          engine: data.engine || "",
          transmission: data.transmission || "",
          ownership: data.ownership || "",
          modifications: data.modifications || "",
          miles: data.miles || "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Failed to load car data");
        setLoading(false);
      });
  }, [sale_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    set_diff({ ...diff, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(formData);
  };

  const handleEdit = (newData) => {
    fetch(`http://localhost:6969/car/${sale_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(diff),
    })
      .then((response) => response.json())
      .then((updatedCar) => {
        console.log(updatedCar)
        setCar(updatedCar); // Update the local state to reflect the edit
        alert("Car updated successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Failed to update car data");
      });
  };

  const handleDelete = () => {
    fetch(`http://localhost:6969/car/${sale_id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete the car");
        }
        alert("Car deleted successfully!");
        navigate("/"); // Redirect to the list after delete
      })
      .catch((error) => console.error("Error:", error));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!car) return <div>No car found.</div>;

  return (
    <div className="p-4 shadow rounded bg-white">
      <h2>Editing {`${car.year} ${car.brand} ${car.model}`}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Engine:
          <input
            type="text"
            name="engine"
            value={formData.engine}
            onChange={handleChange}
          />
        </label>
        <label>
          Transmission:
          <input
            type="text"
            name="transmission"
            value={formData.transmission}
            onChange={handleChange}
          />
        </label>
        <label>
          Ownership:
          <input
            type="text"
            name="ownership"
            value={formData.ownership}
            onChange={handleChange}
          />
        </label>
        <label>
          Modifications:
          <input
            type="text"
            name="modifications"
            value={formData.modifications}
            onChange={handleChange}
          />
        </label>
        <label>
          Mileage:
          <input
            type="text"
            name="miles"
            value={formData.miles}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Car
        </button>
      </form>
      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete Car
      </button>
    </div>
  );
}

export default CarDetail;
