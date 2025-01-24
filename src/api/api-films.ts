const apiFilms = async (id: string) => {
    const response = await fetch(`https://swapi.py4e.com/api/films/${id}`, { headers: { 'Accept': 'application/json' } });

    if (!response.ok) {
        throw new Error("API error" + response.status);
    }

    const data = await response.json();
    return data;    
}

export default apiFilms;