let isActive = false;

document.querySelector('.button').addEventListener('click',()=>{
    const searchbar = document.querySelector('.search-bar');
    if(isActive){
        isActive = false;
        searchbar.classList.remove('active');
    }
    else{
        isActive = true;
        searchbar.classList.add('active');
    }
    
})