import React, { useState } from 'react';
import { useFetch } from './util';
import LoadingCarCard from './components/LoadingCarCard';
import CarCard from './components/CarCard';
import Submit from './components/buttons/Submit'
import PredictionInput from './components/inputs/PredictionInput.jsx';
import Autocomplete from './components/inputs/AutoComplete';
import Dropdown from './components/inputs/Dropdown.jsx';
import PriceModal from './components/PriceModal.jsx';

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

const Predictions = () => {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState(0);
    const [price, setPrice] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const { data: brands } = useFetch("http://localhost:6969/brands/")
    const { data: cars, loading, error } = useFetch("http://localhost:6969/cars/");

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const jsonData = {
            'inspected': false,
            'featured': false,
        };
        for (const [key, value] of formData.entries()) {
            jsonData[key.toLowerCase()] = value;
        }
        setYear(jsonData['year']);
        console.log(formData, jsonData)
        const location = new URL('http://localhost:6969/predict');
        const url = window.location.href.includes('localhost') ? `http://localhost:6969${location.pathname + location.search}` : `https://154.53.38.83:6969${location.pathname + location.search}`;
        fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData)
        })
            .then(response => response.json())
            .then(d => {
                setPrice(d.price);
                setIsOpen(true);
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="flex">
            <PriceModal price={price} year={year} brand={brand} model={model} carPrices={cars.filter(c => c.model === model).map(c => ({ data: c.price, label: c.end_date }))} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="w-2/3 mt-4 ml-2 pl-4 pt-4">
                <form onKeyPress={(event) => {
                    if (event.key === 'Enter') event.preventDefault();
                }} onSubmit={handleSubmit} className="bg-card-150 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <Autocomplete options={brands}
                        value={brand}
                        onChange={setBrand}
                        label="Make"
                        placeholder="Enter car make"
                        required={true}
                    />
                    <Autocomplete options={[...new Set(cars.filter(c => c.brand === brand).map(c => c.model))]}
                        value={model}
                        onChange={setModel}
                        label="Model"
                        placeholder="Enter car model"
                        locked={brand === ""}
                        required={true}
                    />
                    <PredictionInput label="Mileage" placeholder="Enter car mileage" type="number" required={true} />
                    <PredictionInput label="Year" placeholder="Enter car year" type="number" year={true} required={true} />
                    <Dropdown label="Transmission" options={['Automatic', 'Manual']} />
                    {/* Submit button */}
                    <div className="flex items-center justify-between">
                        <Submit onClick={() => { }} text="Predict Price" />
                    </div>
                </form>
            </div>
            <div className="w-1/3 p-4">
                {/* Car Cards List */}
                <div className="">
                    {loading ? (
                        Array.from({ length: 3 }).map((_, i) => <LoadingCarCard key={i} />)

                    ) : (getRandom(cars, 3).map((car) => (
                        <div className='m-4'>
                            <CarCard car={car} key={car.sale_id} />
                        </div>
                    ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Predictions;