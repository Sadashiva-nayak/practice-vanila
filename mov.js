var burger=document.querySelector('.hamburger');
var navbar=document.querySelector('.navbar');
var list=document.querySelector('.list');
burger.addEventListener('click',()=>{
    navbar.classList.toggle('v-resp');
    list.classList.toggle('h-resp');
})

function handleonclick(){
    const form=document.getElementById("form");
    const s = `name=${form.name.value}&email=${form.email.value}&age=${form.age.value}&phone=${form.phone.value}`
    fetch(`http://localhost:8000/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: s
      });
    form.name.value="",
        form.email.value="",
        form.age.value="",
        form.phone.value=""
  }