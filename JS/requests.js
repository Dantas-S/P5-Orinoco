// Connection sur le serveur

async function requests(url) {
    let getResult = await fetch(url);
    return getResult.json();
}

