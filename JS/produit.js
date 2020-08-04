const infos = document.getElementById('produit_infos');
console.log(infos);
const lentilles = document.getElementById('choix_lentilles');
console.log(lentilles);

// Récupèration de l'id

let params = new URLSearchParams(window.location.search);
let cameraId = params.get("id");

requests('http://localhost:3000/api/cameras/' + cameraId).then(camera => {

    infos.innerHTML += `<img class="produit_picture" src="${camera.imageUrl}" alt="photo caméra">
                        <p class="produit_name">${camera.name}</p>
                        <p class="produit_description">${camera.description}</p>
                        <p class="produit_price">${camera.price / 100}€</p>`

    lentilles.innerHTML += `<option value="">Choisissez votre lentille</option>`

    camera.lenses.forEach(lenses => {

        lentilles.innerHTML += `<option value="${lenses}">${lenses}</option>`

    });
});