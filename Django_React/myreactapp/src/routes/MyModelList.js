import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyModelList = () => {
    const [models, setModels] = useState([]);

    useEffect(() => {
        fetchModels();
    }, []);

    const fetchModels = async () => {
        try {
            const response = await axios.get('http://localhost:8000/mymodels/');
            setModels(response.data);
        } catch (error) {
            console.error('Error fetching models:', error);
        }
    };

    return (
        <div>
            <h1>My Models</h1>
            <ul>
                {models.map(model => (
                    <li key={model.id}>
                        {model.name} - {model.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyModelList;
