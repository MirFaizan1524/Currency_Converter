
  let selectFrom = document.querySelector(".select-from");
  alert(selectFrom.value); 
       document.querySelector('.btn')

// function getInfo(e) {
//    
//     let fromBtn = document.querySelector(".selectFromBtn");
//     fromBtn.addEventListener('click', getData);
//     let imgFrom = document.querySelector(".img-from");
//     let newImgUrl = `https://flagsapi.com/${selectFrom.value}/flat/64.png`;
//     imgFrom.src = newImgUrl;
//     console.log(e);
//     e.preventDefault();
// }


function getData(num, callBack) {
    if (callBack) {
        setTimeout(() => {
            console.log(num);
            callBack();
        }, 2000)
    }
}
getData(12, () => {
    getData(13, () => {
        getData(14, () => {
        });
    });
})
