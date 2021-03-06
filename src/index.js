
import "./styles.css"
import { menu } from "./menu"
import { homePageContents } from "./home"
import { contact } from "./contact"



const content = document.getElementById("content")
const mainNav = document.createElement("div")
const navBar = document.createElement("div")
const navBarConatiner = document.createElement("ul")
const homeTab = document.createElement("li")
const menuTab = document.createElement("li")
const contactTab = document.createElement("li")
navBar.setAttribute("id","nav")
homeTab.classList.add("tabs")
menuTab.classList.add("tabs")
contactTab.classList.add("tabs")
navBarConatiner.classList.add("container")
mainNav.classList.add("contain")
homeTab.textContent = "Home"
contactTab.textContent ="Contact"
menuTab.textContent = "Menu"
navBarConatiner.appendChild(homeTab)
navBarConatiner.appendChild(menuTab)
navBarConatiner.appendChild(contactTab)
navBar.appendChild(navBarConatiner)
mainNav.appendChild(navBar)
content.appendChild(mainNav)



homePageContents.loadHomepage()
homeTab.addEventListener("click",loadHomePage1)
function loadHomePage1(){
    if(homePageContents.homeContent.classList.contains("home")){
        return
    }else{
        homePageContents.homeContent.classList.add("home")
    }
    homePageContents.homeContent.innerHTML = ""
    homePageContents.loadHomepage()
    
    

}



menuTab.addEventListener("click",function(){
    homePageContents.homeContent.innerHTML = "";
    menu.loadMenuPage()

})
contactTab.addEventListener("click",function(){

    if(homePageContents.homeContent.classList.contains("home")){
        homePageContents.homeContent.classList.remove("home")
    }
    
    homePageContents.homeContent.innerHTML = "";
    contact.loadContactPage()

})

homePageContents.explorebtn.addEventListener("click",function(){
    homePageContents.homeContent.innerHTML = "";
    menu.loadMenuPage()

})




