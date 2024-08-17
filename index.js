 // Getting Seleted Item From "From" dropdown:
  let selectFrom = document.querySelector(".select-from");
 // Getting Seleted Item From "To" dropdown:
  let selectTo = document.querySelector(".select-To");
  let convertBtn =  document.querySelector('.convertBtn');
  convertBtn.addEventListener('click', getSelectedCountry);
 
 


// console.log(countryList);
// Adding Country Codes Dynamically To Select From Dropdown :
    for(CurrencyCode in countryList){
      let option = document.createElement('option');
      option.name = CurrencyCode;
      option.value = CurrencyCode;
      option.innerText = CurrencyCode; 
      selectFrom.appendChild(option);
       
    }

    // Adding Country Codes Dynamically To Select To Dropdown :
    for(CurrencyCode in countryList){   
      let option = document.createElement('option');
      option.name = CurrencyCode;
      option.value = CurrencyCode;
      option.innerText = CurrencyCode;
      selectTo.appendChild(option);
     
    }
       // Selecting USA Flag By Default;
       for(selectDefault of selectFrom){
          if(selectDefault.name=="USD"){
            let srcFlag =    document.querySelector(".img-from");
            srcFlag.src = "https://flagsapi.com/US/flat/64.png";
            selectDefault.selected = true;

          }  

       }
       // Selecting Indian Flag By Default;
       for(selectDefault of selectTo){
        if(selectDefault.name=="INR"){
          let srcFlag = document.querySelector(".img-to");
          srcFlag.src = "https://flagsapi.com/IN/flat/64.png";
          selectDefault.selected = true;

        }  

     }     

  
  //To Set 'From' Flag Dynamically:
    selectFrom.addEventListener('change',(e)=>{
      let Countrycode = selectFrom.value;
      let CountryFlag = countryList[Countrycode];
    let imgFrom = document.querySelector(".img-from");
    let newImgUrl = `https://flagsapi.com/${CountryFlag}/flat/64.png`;
    imgFrom.src = newImgUrl;
    
   })
 // To Set 'To' Flag Dynamically: 
   selectTo.addEventListener('change',(e)=>{
    let Countrycode = selectTo.value;
    let CountryFlag = countryList[Countrycode];
      let imgto = document.querySelector(".img-to");
      //alert(imgto); 
     imgto.src = `https://flagsapi.com/${CountryFlag}/flat/64.png`;
      
   });

// OnClicking the Button :          
async function  getSelectedCountry(e) {   
  let fromBtn = document.querySelector(".selectFromBtn");   
  // console.log(e);
  e.preventDefault();
  let inputData = document.querySelector('.inputBox');
  
   if(parseInt(inputData.value)<1){
       inputData.value = 1;     
   }
   else if(inputData.value==null || inputData.value==""){
    alert("Enter Valid Amount");
   }
   else{
        let fromVal = document.querySelector('.select-from').value;
        let toVal =   document.querySelector('.select-To').value;
         console.log(fromVal,"Faiaaaa"); 

       let baseURI = `https://api.apilayer.com/exchangerates_data/convert?apikey=mhMpiJBalzXoRJihM56Wq46QyHKv11lX&from=${fromVal}&to=${toVal}&amount=${inputData.value}`;
       let rawData  =     await  fetch(baseURI);
       let jsonResponse =  await rawData.json();
          let Amount = jsonResponse.result;
          alert(Amount);
      //  console.log(selectTo.innerText,"faizn"); 
      // console.log(selectTo.value,"currency");
   } 
     
}


   

// function getData(num, callBack) {
//     if (callBack) {
//         setTimeout(() => {
//             console.log(num);
//             callBack();
//         }, 2000)
//     }
// }
// getData(12, () => {
//     getData(13, () => {
//         getData(14, () => {
//         });
//     });
// })
