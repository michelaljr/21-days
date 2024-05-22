// const btn = document.getElementById('test');

function submitForm(event){
    event.preventDefault();
    console.log("FORM CLICKED")
      
// form data 
const form = document.forms['store'];
let storeName = form['storename'].value;
let storeAddress = form['address'].value;
let daysOpen = [];
Array.from(form['do']).forEach(checkbox => {
    if(checkbox.checked){
        daysOpen.push(checkbox.value);
    }
});
// inputs
let openTimeInput = document.getElementById('openTime');
let closeTimeInput = document.getElementById('closeTime');

// getting values

let openTime = openTimeInput.value;
let closeTime = closeTimeInput.value;

// Loggin value into console

localStorage.setItem("Store name:", storeName);
localStorage.setItem("Store Address:", storeAddress);
localStorage.setItem("Days Open:", JSON.stringify(daysOpen));
localStorage.setItem("Open:", openTime);
localStorage.setItem("Closed:", closeTime);

}

function loadFromLocalStorage(){
    const form = document.forms['store']

    form['storename'].value = localStorage.getItem('storeName') || '';
    form['address'].value = localStorage.getItem('storeAddress') || '';
    let daysOpen = JSON.parse(localStorage.getItem('daysOpen')) || [];
    Array.from(form['do']).forEach(checkbox => {
        checkbox.checked = daysOpen.includes(checkbox.value);
    });
    
    document.getElementById('openTime').value = localStorage.getItem('openTime') || '';
    document.getElementById('closeTime').value = localStorage.getItem('closeTime') || '';
}

window.addEventListener('load', loadFromLocalStorage);

// function submitForm(event){
  //  log.textContent = form sumbitted  console.log(event)}



    document.getElementById('storename').addEventListener('focus', (event) =>{
        event.target.style.background = 'pink';
        
    });

    document.getElementById('address').addEventListener('focus', (event) =>{
        event.target.style.background = 'pink';
       
    });

    document.getElementById('openTime').addEventListener('focus', (event) =>{
        event.target.style.background = 'pink';
    });

    document.getElementById('closeTime').addEventListener('focus', (event) =>{
        event.target.style.background = 'pink';
    });
