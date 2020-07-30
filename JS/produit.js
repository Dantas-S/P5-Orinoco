const produitsList = document.getElementById('produits_list');
console.log(produitsList);
const formList = document.getElementById('form_list');
console.log(formList);

const url = "http://localhost:3000/api/cameras";

let urls = window.location.search;
let params = new URLSearchParams (urls);
let cameraId = params.get("id");
console.log(cameraId);

async function requests(url) {
    let getResult = await fetch(url)
    return getResult.json();
}

requests(url  + '/' + cameraId).then(camera => {
    console.log(camera);

    produitsList.innerHTML += '<article class="container">\
                                <img class="produit_picture" src="' + camera.imageUrl + '">\
                                <div class="produit_infos">\
                                    <h2 class="produit_name">'+ camera.name +'</h2>\
                                        <p class="produit_price"> '+ camera.price/100 + '€' +'</p>\
                                        <p class="produit_description"> '+ camera.description +'</p>\
                                </div>\
                                </article>'
    
    formList.innerHTML += '<form class="container_form">\
                            <p class ="container_form_title"></p>\
                            </form>'
})