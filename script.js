const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('adviceText');
const button = document.getElementById('btn');

function generateAdvice(){
  fetch('https://api.adviceslip.com/advice').then(response=>{
    return response.json();
  }).then(adviceData=>{
    const adviceSlipNumber = adviceData.slip.id;
    const getAdvice = adviceData.slip.advice;
    adviceId.textContent = adviceSlipNumber;
    adviceText.innerHTML = `"${getAdvice}"`;
  }).catch(error =>{
    console.log(error);
  })
 
}
button.addEventListener('click',()=>{
    generateAdvice();
});