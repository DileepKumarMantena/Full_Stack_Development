const apiBase = "/items";

// Fetch and display all items
async function fetchItems() {
    try {
        const res = await fetch(apiBase);
        const data = await res.json();

        const list = document.getElementById("item-list");
        list.innerHTML = "";

        data.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${item.name}</strong> (${item.value})
                <button class="edit-btn" onclick="editItem(${item.id}, '${item.name.replace(/'/g, "\\'")}', ${item.value})">Edit</button>
                <button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button>
            `;
            list.appendChild(li);
        });
    } catch (error) {
        alert("Error fetching items: " + error.message);
    }
}

// Create a new item
async function createItem() {
    const name = document.getElementById("name").value;
    const value = parseInt(document.getElementById("value").value);

    if (!name || isNaN(value)) {
        alert("Please enter a valid name and value.");
        return;
    }

    try {
        const response = await fetch(`${apiBase}/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, value })
        });

        if (response.ok) {
            document.getElementById("name").value = "";
            document.getElementById("value").value = "";
            fetchItems();
        } else {
            const err = await response.json();
            alert("Error creating item: " + err.error);
        }
    } catch (error) {
        alert("Failed to create item: " + error.message);
    }
}

// Delete an item
async function deleteItem(id) {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
        const response = await fetch(`${apiBase}/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            fetchItems();
        } else {
            const err = await response.json();
            alert("Error deleting item: " + err.error);
        }
    } catch (error) {
        alert("Failed to delete item: " + error.message);
    }
}

// Edit an item
async function editItem(id, oldName, oldValue) {
    const name = prompt("Enter new name:", oldName);
    const value = prompt("Enter new value:", oldValue);

    if (name === null || value === null) return;

    const newValue = parseInt(value);
    if (!name || isNaN(newValue)) {
        alert("Invalid name or value.");
        return;
    }

    try {
        const response = await fetch(`${apiBase}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, value: newValue })
        });

        if (response.ok) {
            fetchItems();
        } else {
            const err = await response.json();
            alert("Error updating item: " + err.error);
        }
    } catch (error) {
        alert("Failed to update item: " + error.message);
    }
}

// Initial load
fetchItems();
