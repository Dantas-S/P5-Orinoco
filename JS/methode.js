function fetch (){
async function requests(url) {
    let getResult = await fetch(url)
    return getResult.json();
    }
}