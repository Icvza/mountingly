// Nav responsiveness 
function myFunction() {
    const x = document.getElementById("myTopnav");
    console.log(x)
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//Home slider 
function currentSlide(dotNumber){
    let heroArea = document.querySelector("body > section.hero")
    if(dotNumber === 1) {
        heroArea.style="background-image: url(https://www.mymove.com/wp-content/uploads/2018/08/Wall-mounted-tv_@srijaroen_Getty-Images.jpg)"
    } else if (dotNumber === 2) {
        heroArea.children[0].children[0].innerHTML = 'Smart home services'
        heroArea.children[0].children[2].innerHTML = "GET EMMMM DONEEEEEE "
        heroArea.style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxkqUdS1846pXcBWjdbEwiqHS7fm6L3htdYw&usqp=CAU)"
    } else if (dotNumber === 3 ){
        heroArea.children[0].children[0].innerHTML = 'Learn more'
        heroArea.children[0].children[2].innerHTML = "Still have questions"
        heroArea.children[0].children[3].innerHTML = 'Learn More '
        heroArea.style="background-image: url(https://geniusmounts.com/wp-content/uploads/2021/06/SF01-1.gif)"
    }
}