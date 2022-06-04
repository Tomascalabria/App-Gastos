const toggleButton= document.querySelector('i')
const toggleMenu=document.querySelector('.navBarToggle')
const toggleContainer=document.querySelector('.navBarToggleContainer')
const navbarList=document.querySelector('.navbarList')
const closingButton=document.querySelector('.fa-x')

toggleButton.addEventListener('click',(e)=>{
    toggleMenu.classList.toggle('navBarToggleSlide')
    toggleContainer.classList.toggle('navBarToggleContainerOff')
   })
   
   closingButton.addEventListener('click',(e)=>{
    toggleMenu.classList.toggle('navBarToggleSlide')
    toggleContainer.classList.toggle('navBarToggleContainerOff')
   })