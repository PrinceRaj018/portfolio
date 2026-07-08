let projectsBtn = document.getElementById("projects-btn");

let projects = document.getElementById("projects");

projectsBtn.addEventListener("click", function(){
    projects.scrollIntoView({
        behavior:"smooth"
    });
});

let contactBtn = document.getElementById("contact-btn");

let contact = document.getElementById("contact");

contactBtn.addEventListener("click", function(){
    contact.scrollIntoView({
    behavior:"smooth"
    });
});

let progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", function(){
    
    let scrollTop = window.scrollY;
    
    let pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let scrollPercent =
    (scrollTop / pageHeight) * 100;

    progressBar.style.width =
    scrollPercent + "%";
});

let typingText = document.getElementById("typing-text");

let text = "Future AI Engineer";

let index = 0;

function type(){

    typingText.textContent += text[index];

    index++;

    if(index >= text.length){

        clearInterval(animation);

    }

}

let animation = setInterval(type,100);

let navLinks = document.querySelectorAll(".nav-link");

let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function(){

    let current = "";

    sections.forEach(function(section){

        let sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

let topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

let githubButtons = document.querySelectorAll(".github-btn");

githubButtons.forEach(function(button){

    button.addEventListener("click", function(){

        window.open(
            "https://github.com/PrinceRaj018",
            "_blank"
        );

    });

});

let contactForm = document.getElementById("contact-form");

let nameInput = document.getElementById("name");

let emailInput = document.getElementById("email");

let messageInput = document.getElementById("message");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    if(

        nameInput.value.trim() === "" ||

        emailInput.value.trim() === "" ||

        messageInput.value.trim() === ""

    ){

        alert("Please fill all fields.");

    }

    else if(

        !emailInput.value.includes("@")

    ){

        alert("Please enter a valid email.");

    }

    else{

        alert("Message Sent Successfully!");
        
        contactForm.reset();

    }

});
