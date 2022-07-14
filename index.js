const menuButton=document.querySelector('.nav-toggle');
const navigationMenu=document.querySelector('.mobile-links');
const closeButton=document.querySelector('.nav-toggle2');
const mainWrap = document.querySelector('.main-wrap')


menuButton.addEventListener('click', () => {
  
        menuButton.style.display='none'
        closeButton.style.display = 'block'
        // mainWrap.style.overflow= 'hidden'
        navigationMenu.style.transform ='translateX(-0%)'
})
 
    closeButton.addEventListener('click', () => {
            closeButton.style.display='none'   
            menuButton.style.display = 'block' 
            navigationMenu.style.transform ='translateX(-100%)'

            
    })

const certificate= document.querySelector(".certificate-button");
const service= document.querySelector(".service-button")
const servicesWrap=document.querySelector("serviceswrap")
const certificatesWrap=document.querySelector('certifications')


service.addEventListener('click', () =>{
    
        certificatesWrap.style.display = 'none' 
        servicesWrap.style.display='block'
})

certificate.addEventListener('click',() =>{

        certificatesWrap.style.display = 'block'
                servicesWrap.style.display='none'

})