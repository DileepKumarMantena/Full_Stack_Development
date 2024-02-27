import React, { useState } from 'react';
import axios from 'axios';

const MyModelForm = ({ onSubmit, initialValues }) => {
    const [formData, setFormData] = useState(initialValues || {});

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            if (onSubmit) {
                await onSubmit(formData);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={formData.description || ''} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyModelForm;
