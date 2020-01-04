import '../scss/main.scss';


function changeActive () {
  const links = document.querySelectorAll('.navbar-link > a');
  const location = window.location;

  links.forEach(link =>{
    if(link.getAttribute('href') == location.pathname){
     link.classList.add('active')
    }
    else{
      console.log('eror')
    }
  })
}
changeActive();
