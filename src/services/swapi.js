function getSwapiShips() {
    const endpoint = "https://swapi.co/api/starships/";
    return fetch(endpoint, {
        mode: 'cors'
    }).then(res => res.json());
}

export {
    getSwapiShips
}
