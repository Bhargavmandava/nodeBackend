const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.sidemenu');
    const navLinks = document.querySelectorAll('.sidemenu li');
    
    burger.addEventListener('mouseover',()=>{
        //toggle Nav
        nav.classList.toggle('side-active');
        

        //Animated Links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } 
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;

            }
            

        });

        setTimeout(function() {
        nav.style.display = "none"
        }, 3000);
        nav.style.display = "block"


        
    });
    
    
    
    
}

navSlide();