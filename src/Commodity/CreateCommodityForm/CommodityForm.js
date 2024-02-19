import React, { useState, useEffect } from 'react';
import './commodityFormStyles.css';

function CommodityForm({ id }) {
const [formData, setFormData] = useState({
    title: '',
    price: 0,
    description: '',
    defaultMeasureId: '',
    defaultMeasure: null,
    id: ''
});

useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(`https://localhost:7146/api/Commodity/${id}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setFormData(data);
            } else {
                setFormData({
                    title: '',
                    price: 0,
                    description: '',
                    defaultMeasureId: '',
                    defaultMeasure: null,
                    id: ''
                });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchData();
}, [id]);

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://localhost:7146/api/Commodity', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            //show some popup success
        } else {
            //show some popup error
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

return (
    <form onSubmit={handleSubmit} className='form-layout'>

        <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title"
            />
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price"
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
            />
            <input
                type="text"
                name="defaultMeasureId"
                value={formData.defaultMeasureId}
                onChange={handleInputChange}
                placeholder="Default Measure ID"
            />
            
        <button type="submit">Submit</button>
    </form>
);
}

export default CommodityForm;