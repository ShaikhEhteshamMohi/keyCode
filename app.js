const insert = document.getElementById('insert');
window.addEventListener('keydown', (event)=>{
let event1 = event.key === ' ' ? 'Space' : event.key;
insert.innerHTML = `
<div class='key'>
${event1}
<small>event.key</small>
</div>

<div class='key'>
${event.code}
<small>event.Code</small>
</div>

<div class='key'>
${event.keyCode}
<small>event.keyCode</small>
</div>
`
})