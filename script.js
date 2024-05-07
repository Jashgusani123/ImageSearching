const inputTex = document.querySelector("input");
const btn = document.getElementById("btn");
const img = document.getElementById("img");
const key = "fNscfRHoMiyPBlqCzbSeiHrwXgd21Dv63Ep7JR4gpK0";
let firstcon = document.getElementById("fi");

let inputD = "";
let page = 1;
let smbtn = document.getElementById("ShowMorebtn");
let form = document.querySelector("form");

async function starting() {
    inputD = inputTex.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputD}&client_id=${key}`;

    let realD = await fetch(url);
    let data = await realD.json();
    // console.log(data.total);
    if(data.total === 0 ){
    smbtn.children[0].style.display = "none";
        alert("This is Not Available");

        firstcon.style.display = "block";
        return 0 ;
    }
    data.results.map((r) => {

        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = r.urls.small;
        // console.log(image);
        let imgcon = document.getElementById("imgcontenar");
        div.classList.add("newdiv");
        div.append(image);
        imgcon.append(div);
        // console.log(r.urls.small_s3);
    });
    smbtn.children[0].style.display = "block";
    // console.log(data);
    page++;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
        firstcon.style.display = "none";  
    starting();
    // inputTex.value = "";
});
smbtn.addEventListener("click", () => {
    starting();
})
document.getElementById("home").addEventListener("click" , ()=>{
    alert("This is Home");
});
document.getElementById("car").addEventListener("click" , ()=>{
    alert("This is Car");
});
document.getElementById("peris").addEventListener("click" , ()=>{
    alert("This is Peris");
})