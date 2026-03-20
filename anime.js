const anime=[

{
    name:"DemonSlayer",
    image:"https://4kwallpapers.com/images/walls/thumbs_3t/23247.jpg",
    description:"DemonSlayer"
},
{
    name:"Naruto Classic",
    image:"https://4kwallpapers.com/images/walls/thumbs_3t/25019.png",
    description:"Naruto Classic "
},
{
    name:"Vinland Saga",
    image:"https://4kwallpapers.com/images/walls/thumbs_3t/14817.jpg",
    description:"Vinland Saga "
},
{
    name:"Jujutsu Kaisen",
    image:"https://4kwallpapers.com/images/walls/thumbs_3t/25551.jpg",
    description:"Jujustu Kaisen"
},
{
    name:"One Piece",
    image:"https://4kwallpapers.com/images/walls/thumbs_3t/16927.jpg",
    description:"One-piece"
},
{
    name:"Attack on Titan",
    image:"https://4kwallpapers.com/images/walls/thumbs_3t/25679.jpg",
    description:"Attack on Titan"
},

];
function displayAnimes(list){
    let container=document.getElementById("animeContainer");
    container.innerHTML="";

    list.forEach(anime=> {

    let card=document.createElement("div");
    card.className="card";

    card.innerHTML= `
    <img src="${anime.image}">
    <h3>${anime.name}</h3>
<p>${anime.description}</p>
`;
container.appendChild(card);
});
}

function searchAnime(){
     let input=document.getElementById("searchBox").value.toLowerCase().trim();

     let filtered=anime.filter(a => 
        a.name.toLowerCase().includes(input)
     );
     displayAnimes(filtered);
}
displayAnimes(anime);
function autoslide(){
    const container=document.getElementById("animeContainer");
    scrollAmount += 1;
    if(scrollAmount>=
        container.clientWidth){
    scrollAmount=0;
        }
        container.scrollLeft=scrollAmount;
    
}
setInterval(autoslide,2000);