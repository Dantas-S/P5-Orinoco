/* ---------- Création - HTML ---------- */

const infos = document.getElementById('produit_infos');
const lentilles = document.getElementById('choix_lentilles');

/* ---------- Bouton ajouter au panier ---------- */

const ajoutProduitPanier = document.getElementById("ajoutPanier");
let storageCart = localStorage.getItem('cart')
/* ---------- Récupèration de l'id ---------- */

let params = new URLSearchParams(window.location.search);
let cameraId = params.get("id");

/* ---------- Appel au serveur  ---------- */

requests('http://localhost:3000/api/cameras/' + cameraId).then(camera => {

        /* ---------- HTML ---------- */

        infos.innerHTML += `<img class="produit_picture" src="${camera.imageUrl}" alt="photo caméra">
                        <p class="produit_name">${camera.name}</p>
                        <p class="produit_description">${camera.description}</p>
                        <p class="produit_price">${camera.price / 100}€</p>`

        lentilles.innerHTML += `<option value="">Choisissez votre lentille</option>`

        /* ---------- Boucle choix de lentilles ---------- */

        camera.lenses.forEach(lenses => {

            lentilles.innerHTML += `<option value="${lenses}">${lenses}</option>`

        })

        ajoutProduitPanier.addEventListener('click', function (event) {

            var lense = document.getElementById("choix_lentilles").value;
            console.log(lense);

            let produits = [];
            produits.id = cameraId;
            produits.picture = camera.imageUrl;
            produits.name = camera.name;
            produits.price = camera.price;
            produits.lense = camera.lenses;
            produits.quantity = 1;
            console.log(produits);

            if (panier !== null) {
                let panier = [];
                produits.push(produits);
                console.log('Panier crée');
            } else {
                let cart = JSON.parse(storageCart)
                console.log(storageCart);
            }
        })

    })
    .catch(function (error) { // Fonction en cas de problèmes
        console.log('Erreur repérée ' + error);
        alert("Une erreur s'est produit. Veuillez réessayer ultérieurement.")
    });

/*let infoProduit = {};
infoProduit.image = camera.imageUrl;
infoProduit.name = camera.name;
infoProduit.id = cameraId;
infoProduit.lense = lense;
infoProduit.price = camera.price; */

/* ajoutProduitPanier.addEventListener('click', function(event) {

        var lense = document.getElementById("choix_lentilles").value;
        console.log(lense);

        if (panier !== null) {
            let storageCart = localStorage.getItem("cart");
        } else {

            newCart = JSON.parse(storageCart)
        }
    }) */