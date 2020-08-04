// Création de la constante pour récuperer les cameras sur le fichier Json du serveur

const camerasList = document.getElementById('cameras_list');

// Connection avec les caméras sur le serveur

requests('http://localhost:3000/api/cameras/').then(cameras => {
    console.log('Tout fonctionne !');
    cameras.forEach(camera => {
        console.log(camera);
        // Mise en place de l'HTML

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
}).catch(function (error) {
    console.log('Erreur repérée ' + error);
})