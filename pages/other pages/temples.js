const  places_list =
[
    {
        "image":"../../assets/images/iskcon temple.jpg",
        "h2": "Iskcon Temple",
    },

    {
        "image":"../../assets/images/Kalikambal-Temple-kb6592.webp",
        "h2": "Kalikambal Temple"
    },  
    
    {
        "image":"../../assets/images/Thirumala-Thirupathi-Devasthanam-Temple-kb6592.webp",
        "h2": "Thirupathi-Devasthanam"
    },

    {
        "image":"../../assets/images/Shirdi-Sai-Baba-Temple.jpg",
        "h2": "Shirdi-Sai-Baba-Temple"
    },

    {
        "image": "../../assets/images/Parthasarathy-Temple-.webp",
        "h2":"Parthasarathy Temple"
    },

    {
        "image":"../../assets/images/Marundheeswarar-Temple-.webp",
        "h2":"marutheswarar Temple"
    },

    {
        "image":"../../assets/images/Kapaleeswarar-temple.webp",
        "h2": "Kapaleeswarar Temple"
    },

    {
        "image": "../../assets/images/ramanatheeswarar temple.webp",
        "h2":"Ramanatheswarar Temple"
    },

    {
        "image": "../../assets/images/amjaneyar temple.jfif", 
        "h2": "Anjaneyar Temple"
    }
]
    

for (let i=0; i<8; i++) {

    
    div_img1 = document.createElement("div");
    div_img1.setAttribute("class","img1");
    console.log(div_img1);
    document.querySelector("div.all-img").append(div_img1);

    div_img = document.createElement("img");
    div_img.setAttribute("src", places_list[i]["image"]);
    div_img.setAttribute("href","")
    div_img.setAttribute("alt","image_placeholder");
    document.querySelector("div.img1").append(div_img);

    h2=document.createElement("h2");
    h2.innerText = places_list[i]["h2"];
    document.querySelector("div.img1").append(h2);
}