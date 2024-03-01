import React, { useState } from 'react';
import mockRecipes from './mockRecipies'; // Import mock recipe data

function RecipeFinder() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    const getRecipes = () => {
        // Use mockRecipes instead of defining it here
        setRecipes(mockRecipes);
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getRecipes();
    };

    return (
        <div>
            <h1>Recipe Finder</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Enter ingredients or recipe name"
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <img src={recipe.image} alt={recipe.title} />
                        <p>Ready in {recipe.readyInMinutes} minutes</p>
                        <p>Servings: {recipe.servings}</p>
                        <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
                            View Recipe
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeFinder;
