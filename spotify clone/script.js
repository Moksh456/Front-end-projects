console.log("lets' weite a java script")

async function main(){
    let a = await fetch("C:\Users\USER\Desktop\Front-end-projects\spotify clone\songs")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div");
    div.innerHTML = response;
}
main();