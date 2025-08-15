console.log("lets' weite a java script")

async function main(){
    let a = await fetch("/spotify clone/songs/");
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div");
    div.innerHTML = response;
}
main();
