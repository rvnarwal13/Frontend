let openElt = document.querySelector('.active');
let iconShare = document.querySelector('.share')


const open = () => {

   if(openElt.style.display==='none'){
      openElt.style.display = 'flex';
   }else {
      openElt.style.display='none';
   }

}

iconShare.addEventListener('click',open);