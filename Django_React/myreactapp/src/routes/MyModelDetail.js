import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyModelDetail = ({ match }) => {
    const [model, setModel] = useState(null);

    useEffect(() => {
        fetchModel();
    }, []);

    const fetchModel = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/mymodels/${match.params.id}/`);
            setModel(response.data);
        } catch (error) {
            console.error('Error fetching model:', error);
        }
    };

    return (
        <div>
            {model ? (
                <div>
                    <h2>{model.name}</h2>
                    <p>{model.description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MyModelDetail;
