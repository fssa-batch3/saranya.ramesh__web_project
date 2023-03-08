// const places_list_forward = 
//     [
//         {
//             "image": {
//                 "source": "../../assets/images/trampoline.jpg",
//                 "alt": "trampoline park",
//             },
//             "name": "Airborne Trampoline park",
//             "regarding": "About",
//             "description": "Airborne - The Trampoline Park In Nungambakkam is bae for a number of reasons. Not only does it present a fresh break from your monotonous cafe and movie outings with friends.",
//             "more_detail": "For more information ",
//             "information": {
//                 "text": "Click here",
//                 "source": "../../pages/other pages/trampoline.html"
//             },
//         },
//         {
//             "image": {
//                 "source": "../../assets/images/Soap-Football-1.jpg",
//                 "alt": "Soap football",
//             },
//             "name": "Soap football",
//             "regarding": "About",
//             "description": "Soap Football is one of the funnest games ever! You do everything, walk, run and slide, but wait....not on grass, but on a soapy surface.",
//             "more_detail": "For more information ",
//             "information": {
//                 "text": "Click here",
//                 "source": "../../pages/other pages/trampoline.html"
//             },
//         },
//         {
//             "image": {
//                 "source": "../../assets/images/sathyam cinema.jpg",
//                 "alt": "sathyam cinimas",
//             },
//             "name": "sathyam cinimas",
//             "regarding": "About",
//             "description": "The Maker of Memories, Sathyam is Southern India's Iconic Home of Cinema, welcoming everyone to enjoy the ultimate cinematic experience.",
//             "more_detail": "For more information ",
//             "information": {
//                 "text": "Click here",
//                 "source": "../../pages/other pages/trampoline.html"
//             },
//         }
//     ]
// const places_list_reverse =
//     [
//         {
//             "name": "Gameistry",
//             "regarding": "About",
//             "description": "Gameistry Entertainment is Chennai's 1st and largest Board Gaming venture.",
//             "more_detail": "For more information ",
//             "information": {
//                 "text": "Click here",
//                 "source": "../../pages/other pages/trampoline.html"
//             },
//             "image": {
//                 "source": "../../assets/images/gameistry.jpg",
//                 "alt": "gameistry",
//             },
//         },
//         {
//             "image": {
//                 "source": "../../assets/images/escaperoom.jpg",
//                 "alt": "escape room",
//             },
//             "name": "Escape Room",
//             "regarding": "About",
//             "description": "Freeing India Escape Rooms with 2 locations in Chennai features unique, out of the world themes designed to provide mind-bending entertainment.",
//             "more_detail": "For more information ",
//             "information": {
//                 "text": "Click here",
//                 "source": "../../pages/other pages/trampoline.html"
//             },
//         },
//     ]

// let div_flex;
// let div_img;
// let div_image;
// let div_para;
// let div_about_p;
// let div_about_b;
// let div_text;
// let div_text_2;
// let div_text_a;


// for (i = 0; i <places_list_forward.length; i++) {
   

//     div_flex = document.createElement("div");
//     div_flex.setAttribute("class", "flex");
//     document.querySelector(".section-1").append(div_flex);
//     console.log(div_flex);

//     div_img = document.createElement("div");
//     div_img.setAttribute("class", "img");
//     div_flex.append(div_img);

//     div_image = document.createElement("img");
//     div_image.setAttribute("src", places_list_forward[i]["image"]["source"]);
//     div_image.setAttribute("alt",places_list_forward[i]["image"]["alt"] );
//     div_img.append(div_image)

//     div_para = document.createElement("div");
//     div_para.setAttribute("class", "para");
//     div_flex.append(div_para);

//     heading = document.createElement("h2");
//     heading.innerText = places_list_forward[i]["name"];
//     div_para.append(heading);

//     div_about_p = document.createElement("p");
//     div_para.append(div_about_p);

//     div_about_b = document.createElement("b");
//     div_about_b.innerText = places_list_forward[i]["regarding"];

//     // div_about_b.innerText = (about);
//     div_about_p.append(div_about_b);

//     div_text = document.createElement("p");
//     div_text.innerText = places_list_forward[i]["description"];
//     div_para.append(div_text);

//     div_text_2 = document.createElement("p");
//     // const more_details = places_list[0]["more_detail"];
//     // const click_here = places_list[0]["information"]["text"];
//     div_text_2.innerText = places_list_forward[i]["more_detail"];
//     div_para.append(div_text_2);

//     div_text_a = document.createElement("a");
//     div_text_a.setAttribute("href", places_list_forward[i]["information"]["source"]);
//     div_text_a.innerText = places_list_forward[i]["information"]["text"];
//     div_text_2.append(div_text_a);

//     for (j = 0; j < 5; j++) {
//         star_span = document.createElement("span");
//         star_span.setAttribute("class", "fa fa-star checked");
//         star_span.setAttribute("style", "font-size:24px");
//         div_para.append(star_span);
//     }


//     div_flex = document.createElement("div");
//     div_flex.setAttribute("class", "flex-2");
//     document.querySelector(".section-1").append(div_flex);
//     console.log(div_flex);

//     div_para = document.createElement("div");
//     div_para.setAttribute("class", "para");
//     div_flex.append(div_para)

//     heading = document.createElement("h2");
//     heading.innerText = places_list_reverse[i]["name"];
//     div_para.append(heading);

//     div_about_p = document.createElement("p");
//     div_para.append(div_about_p);

//     div_about_b = document.createElement("b");
//     div_about_b.innerText = places_list_reverse[i]["regarding"];
//     div_about_p.append(div_about_b);

//     div_text = document.createElement("p");
//     div_text.innerText = places_list_reverse[i]["description"];
//     div_para.append(div_text);

//     div_text_2 = document.createElement("p");
//     div_text_2.innerText = places_list_reverse[i]["more_detail"];
//     div_para.append(div_text_2);

//     div_text_a = document.createElement("a");
//     div_text_a.setAttribute("href", places_list_reverse[i]["information"]["source"]);
//     div_text_a.innerText = places_list_reverse[i]["information"]["text"];
//     div_text_2.append(div_text_a);

//     for (j = 0; j < 5; j++) {
//         star_span = document.createElement("span");
//         star_span.setAttribute("class", "fa fa-star checked");
//         star_span.setAttribute("style", "font-size:24px");
//         div_para.append(star_span);
//     }

//     div_img = document.createElement("div");
//     div_img.setAttribute("class", "img");
//     div_flex.append(div_img);

//     div_image = document.createElement("img");
//     div_image.setAttribute("src", places_list_reverse[i]["image"]["source"]);
//     div_image.setAttribute("alt", places_list_reverse[i]["image"]["alt"]);
//     div_img.append(div_image)

//     document.querySelector("section.section-1").append(div_flex);
// }

let nungambakkam = JSON.parse(localStorage.getItem("nungambakkam_details"));
let div_flex;
let div_img;
let div_image;
let div_para;
let div_about_p;
let div_about_b;
let div_text;
let div_text_2;
let div_text_a;


for (i = 0; i < nungambakkam.length-1; i=i+2) {
   
    div_flex = document.createElement("div");
    div_flex.setAttribute("class", "flex");
    document.querySelector(".section-1").append(div_flex);
    console.log(div_flex);

    div_img = document.createElement("div");
    div_img.setAttribute("class", "img");
    div_flex.append(div_img);

    div_image = document.createElement("img");
    div_image.setAttribute("src", nungambakkam[i]["image_link"]);
    div_image.setAttribute("alt","");
    div_img.append(div_image)

    div_para = document.createElement("div");
    div_para.setAttribute("class", "para");
    div_flex.append(div_para);

    heading = document.createElement("h2");
    heading.innerText = nungambakkam[i]["place_name"];
    div_para.append(heading);

    div_about_p = document.createElement("p");
    div_para.append(div_about_p);

    div_about_b = document.createElement("b");
    div_about_b.innerText = "About";

    // div_about_b.innerText = (about);
    div_about_p.append(div_about_b);

    div_text = document.createElement("p");
    div_text.innerText = nungambakkam[i]["description"];
    div_para.append(div_text);

    div_text_2 = document.createElement("p");
    // const more_details = places_list[0]["more_detail"];
    // const click_here = places_list[0]["information"]["text"];
    div_text_2.innerText = "For more details ";
    div_para.append(div_text_2);

    div_text_a = document.createElement("a");
    // div_text_a.setAttribute("href", places_list_forward[i]["information"]["source"]);
    div_text_a.innerText = "Click here";
    div_text_a.setAttribute("href",nungambakkam[i]["detail_page"])
    div_text_2.append(div_text_a);


    for (j = 0; j < 5; j++) {
        star_span = document.createElement("span");
        star_span.setAttribute("class", "fa fa-star checked");
        star_span.setAttribute("style", "font-size:24px");
        div_para.append(star_span);
    }


    div_button_up = document.createElement("button");
    div_button_up.setAttribute("class", "up_button");
    div_button_up.innerText = "upload";
    star_span.append(div_button_up);

    div_button_edit = document.createElement("button");
    div_button_edit.setAttribute("class", "edit_button");
    div_button_edit.setAttribute("data-id",nungambakkam[i]["unique_id"]);
    div_button_edit.innerText = "edit";
    star_span.append(div_button_edit);

    div_button_del = document.createElement("button");
    div_button_del.setAttribute("class", "del_button");
    div_button_del.setAttribute("onclick", "del")
    div_button_del.innerText = "delete";
    star_span.append(div_button_del);
    console.log(div_button_del);

    div_flex = document.createElement("div");
    div_flex.setAttribute("class", "flex-2");
    document.querySelector(".section-1").append(div_flex);
    console.log(div_flex);

    div_para = document.createElement("div");
    div_para.setAttribute("class", "para");
    div_flex.append(div_para)

    heading = document.createElement("h2");
    heading.innerText = nungambakkam[i+1]["place_name"];
    div_para.append(heading);

    div_about_p = document.createElement("p");
    div_para.append(div_about_p);

    div_about_b = document.createElement("b");
    div_about_b.innerText = "About";
    div_about_p.append(div_about_b);

    div_text = document.createElement("p");
    div_text.innerText = nungambakkam[i+1]["description"];
    div_para.append(div_text);

    div_text_2 = document.createElement("p");
    div_text_2.innerText = "For more details ";
    div_para.append(div_text_2);

    div_text_a = document.createElement("a");
    // div_text_a.setAttribute("href", places_list_reverse[i]["information"]["source"]);
    div_text_a.innerText = "Click here";
    div_text_a.setAttribute("href",nungambakkam[i+1]["detail_page"])
    div_text_2.append(div_text_a);

    for (j = 0; j < 5; j++) {
        star_span = document.createElement("span"); 
        star_span.setAttribute("class", "fa fa-star checked");
        star_span.setAttribute("style", "font-size:24px");
        div_para.append(star_span);
    }

    div_button_up = document.createElement("button");
    div_button_up.setAttribute("class", "up_button");
    div_button_up.innerText = "upload";
    star_span.append(div_button_up);

    div_button_edit = document.createElement("button");
    div_button_edit.setAttribute("class", "edit_button");
    div_button_edit.setAttribute("data-id",nungambakkam[i+1]["unique_id"]);
    div_button_edit.innerText = "edit";
    star_span.append(div_button_edit);

    div_button_del = document.createElement("button");
    div_button_del.setAttribute("class", "del_button");
    div_button_del.innerText = "delete";
    star_span.append(div_button_del);

    div_img = document.createElement("div");
    div_img.setAttribute("class", "img");
    div_flex.append(div_img);

    div_image = document.createElement("img");
    div_image.setAttribute("src", nungambakkam[i+1]["image_link"]);
    // div_image.setAttribute("src", nungambakkam[i]["image_link"]);
    div_img.append(div_image)

    document.querySelector("section.section-1").append(div_flex);
}


let edit = document.querySelectorAll('button.edit_button');
edit.forEach(function (to_edit){
    to_edit.addEventListener("click", function(){
        const uuid = this.dataset.id 
        console.log(uuid);
        localStorage.setItem("Id", JSON.stringify(uuid));
        window.location.href = "../other pages/edit_form.html";
    })
})

// function del(event) {
//     if(confirm("Are you sure you want to delete your profile")){
//         let nungambakkam_details = JSON.parse(localStorage.getItem('nungambakkam_details'));
//         let Id = JSON.parse(localStorage.getItem('Id'));

//         function user_unique(e){
//             return e.unique_id == Id;
//         }
//         let places_data = nungambakkam_details.find(user_unique);
//         let indexOfPlaces  = numgambakkam_details.indexOf(places_data);
//         console.log(places_data);

//     }
// }