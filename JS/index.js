/* ---------- Création - HTML ---------- */

const camerasList = document.getElementById('cameras_list');

/* ---------- Appel au server ---------- */

requests('http://localhost:3000/api/cameras/').then(cameras => {
    console.log('Tout fonctionne !');
    cameras.forEach(camera => {

        /* ---------- HTML ---------- */

        camerasList.innerHTML += `<div class="products">
                                    <a href="produit.html?id=${camera._id}">
                                    <article class="data">
                                        <img class="picture" src="${camera.imageUrl}" alt="photo caméra">
                                    <div class="name_price_description">
                                        <h2 class="name">${camera.name}</h2>
                                            <p class="price">${camera.price / 100}€</p>
                                            <p>${camera.description}</p>
                                    </div>
                                    </article>
                                    </a>
                                </div>`
    })

/* ---------- Fonction en cas de problèmes ---------- */

})
.catch(function (error) {
    console.log('Erreur repérée ' + error);
    alert ("Une erreur s'est produit. Veuillez réessayer ultérieurement.")
})