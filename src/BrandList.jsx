import React from 'react';
import { useFetch } from './util';
import BrandCard from './components/BrandCard';
import Loading from './components/Loading';

// BrandList component using the custom hook
const BrandList = () => {
    const { data: brands, loading, error } = useFetch("http://localhost:6969/brands/");

    return (
        <div>
            <h1>Brand List</h1>
            {error && <p>Error: {error}</p>}
            {loading ? <Loading /> : (
                <div className="grid md:grid-cols-6 gap-4 mt-5">
                    {brands.map((brand) => (
                        <BrandCard brand={brand} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BrandList;
