const apiPilots = async (id: number) => {
    const response = await fetch(`https://swapi.py4e.com/api/people/${id}`, { headers: { 'Accept': 'application/json' } });

    if (!response.ok) {
        throw new Error("API error" + response.status);
    }

    const data = await response.json();
    console.log("data: ", data);
    return data;    
}

export default apiPilots;