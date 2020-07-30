const camerasList = document.getElementById('cameras_list');
console.log(camerasList);
const url = 'http://localhost:3000/api/cameras'

/*async function requests(url) {
    let getResult = await fetch(url)
    return getResult.json();
}*/

async function requests (url) {
    let getResult = await fetch(url);
    if (getResult.ok) {
      getResult.json();
    } else {
      console.log('Mauvaise réponse du réseau');
    }
  }
  .catch(function(error) {
    console.log('Il y a eu un problème avec l\'opération fetch: ' + error);
  });

requests(url).then(cameras => {
    console.log(cameras);
    cameras.forEach(camera => {
        console.log(camera);
        camerasList.innerHTML +='<div class="products">\
                                    <a href="produit.html?id='+ camera._id + '">\
                                    <article class="data">\
                                        <img class="picture" src="' + camera.imageUrl + '">\
                                    <div class="name_price_description">\
                                        <h2 class="name">'+ camera.name +'</h2>\
                                            <p class="price">'+ camera.price/100 + '€' +'</p>\
                                            <p>'+ camera.description +'</p>\
                                    </div>\
                                    </article>\
                                    </a>\
                                </div>'
    });
})