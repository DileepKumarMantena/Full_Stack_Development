const apiBase = "/items";

async function fetchItems() {
    const res = await fetch(apiBase);
    const data = await res.json();
    const list = document.getElementById("item-list");
    list.innerHTML = "";
    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} (${item.value})`;
        list.appendChild(li);
    });
}

async function createItem() {
    const name = document.getElementById("name").value;
    const value = parseInt(document.getElementById("value").value);

    if (!name || isNaN(value)) {
        alert("Please enter a name and a value");
        return;
    }

    const response = await fetch(`${apiBase}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, value })
    });

    if (response.ok) {
        fetchItems();  // refresh the list
    } else {
        alert("Failed to add item");
    }
}

fetchItems();  // initial load
