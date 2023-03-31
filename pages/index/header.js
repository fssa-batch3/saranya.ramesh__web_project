 const root = window.location.origin;

const after_login = `
<video  class="video_of_background" width="1480px"  loop autoplay muted plays-inline>
<source src="assets/images/Home page Viedo.mp4" type="video/mp4">
</video>
<header>
            
<div class="header">
    <img src="assets/images/web logo.png" width="100" alt="logo" />
    <h3>TRAVEL GUIDE</h3>
</div>
<div class="search-bar">
    <input class="search" type="text" placeholder="Search what you are looking for?">
    <img class="icon" src="assets/images/google-icon.png" height="20px" width="20px">
</div>

<div class="navbar">
    <ul>
        <li> <a class="navbar-1"> HOME</a></li>

        <li class="navigation__item">
            <a class="navigation__link" href="#">

                <div class="dropdown">
                    <P class="dropbtn">LIST OF PLACES</P>
                    <div class="dropdown-content">
                        <a href="${root}/pages/card_list pages/Nungambakkam.html">Nungambakkam</a>
                        <a href="${root}pages/card_list pages/anna nagar.html">Anna nagar</a>
                        <a href="${root}pages/card_list pages/guindy places.html">Guindy</a>
                        <a href="#">Velachery</a>
                        <a href="#">Muttukadu</a>

                    </div>
                </div>
            </a>
        </li>

        <li> <a class="navbar-1" href="${root}pages/index/about us.html"> ABOUT</a></li>
        <li> <a class="navbar-1" href="${root}pages/index/contact.html"> CONTACT</a></li>
        
        
    </ul>
</div>
</header>`

const before_login =`
<video  class="video_of_background" width="1480px"  loop autoplay muted plays-inline>
<source src="assets/images/Home page Viedo.mp4" type="video/mp4">
</video>
<header>
            
<div class="header">
    <img src="assets/images/web logo.png" width="100" alt="logo" />
    <h3>TRAVEL GUIDE</h3>
</div>
<div class="search-bar">
    <input class="search" type="text" placeholder="Search what you are looking for?">
    <img class="icon" src="assets/images/google-icon.png" height="20px" width="20px">
</div>

<div class="navbar">
    <ul>
        <li> <a class="navbar-1"> HOME</a></li>

        <li class="navigation__item">
            <a class="navigation__link" href="#">

                <div class="dropdown">
                    <P class="dropbtn">LIST OF PLACES</P>
                    <div class="dropdown-content">
                        <a href="pages/card_list pages/Nungambakkam.html">Nungambakkam</a>
                        <a href="pages/card_list pages/anna nagar.html">Anna nagar</a>
                        <a href="pages/card_list pages/guindy places.html">Guindy</a>
                        <a href="#">Velachery</a>
                        <a href="#">Muttukadu</a>

                    </div>
                </div>
            </a>
        </li>

        <li> <a class="navbar-1" href="pages/index/about us.html"> ABOUT</a></li>
        <li> <a class="navbar-1" href="pages/index/login.html"> LOGIN</a></li>`

let unique_id1 = JSON.parse(localStorage.getItem("unique_id"));
console.log(unique_id1);

if(unique_id1 ){
    document.body.insertAdjacentHTML("afterbegin",after_login);
    const logout = document.querySelector("#logout");
    logout?.addEventListener("click", () => {
        localStorage.removeItem("unique_id");
        document.body.innerHTML = before_login;
    });
}else{
    document.body.insertAdjacentHTML("afterbegin",before_login);
    const logout = document.querySelector("#logout");
    logout?.removeEventListener("click", () =>
    document.body.innerHTML = after_login);
    localStorage.removeItem("unique_id");
};