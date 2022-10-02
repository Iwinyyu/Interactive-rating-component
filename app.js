const btns = document.querySelectorAll('.rating');
const submit = document.querySelector('#submit-btn');
const container = document.querySelector('#container');


let selected = null;


btns.forEach(btn =>{
  btn.addEventListener("click", ()=>{
    btns.forEach(b =>{
      b.classList.remove('active');
    })
    btn.classList.add('active');
    selected = btn;
  })
})

submit.addEventListener('click', ()=>{
  if(selected !== null){
    while (container.firstChild){
      container.removeChild(container.firstChild);
    }
    let temp = document.querySelector('template');
    let clone = temp.content.cloneNode(true);
    console.log(clone);
    let text = clone.querySelector('#selected');
    console.log(selected.textContent);
    text.textContent = `You selected ${selected.textContent} out of 5`;

    container.appendChild(clone);
  }
})