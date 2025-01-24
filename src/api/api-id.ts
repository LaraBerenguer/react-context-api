const apiById = async (id: number) => {
    const response = await fetch(`https://swapi.py4e.com/api/starships/${id}`, { headers: { 'Accept': 'application/json' } });

    if (!response.ok) {
        throw new Error("API error" + response.status);
    }

    const data = await response.json();
    return data;    
}

export default apiById;