const moonbtn = document.getElementById("moon");

moonbtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-them");
   if (document.body.classList.contains("dark-them")){
     moonbtn.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4GKFA1YQuslGipeawC7_LfYPezOYb6e4L3CEj60&s"
    }else{
        moonbtn.src = "kisspng-lunar-phase-moon-clip-art-5ae0767e5092e5.5999924415246598383301.png"
    }
})


