const apiStarWars = async () => {
    const response = await fetch("https://swapi.py4e.com/api/starships", { headers: { 'Accept': 'application/json' } });

    if (!response.ok) {
        throw new Error("API error" + response.status);
    }

    const data = await response.json();
    console.log("data: ", data);
    return data;    
}

export default apiStarWars;