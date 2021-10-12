const navClicked = (tag)=>{
    const list = document.querySelector('.tmp-category .second-navbar ul').childNodes;
    list.forEach(item => {
        if(item.classList.contains('active')){
            item.classList.remove('active');
        }
        if(item.dataset.tag == tag){
           item.classList.add('active'); 
        }
    })
}
const sendPost = ()=>{
    fetch()
}


export {navClicked ,sendPost};