const elInput = document.getElementById('input');
const elNumber = document.getElementById('number');
const elSelect = document.getElementById('select');
const elButton = document.getElementById('button');
const elForm = document.getElementById('form');


elForm.addEventListener('submit',function (e) {
    e.preventDefault()

    if(elSelect.value == '+'){
        let result = Number( elNumber.value) + Number(elInput.value);
        elButton.textContent = result;
    }else if(elSelect.value == '-'){
        let result = Number(elInput.value) - Number(elNumber.value);
        elButton.textContent = result;
    }else if(elSelect.value == '*'){
        let result = Number(elInput.value) * Number(elNumber.value);
        elButton.textContent = result;
    }else if(elSelect.value == '/'){
        let result = Number(elInput.value) / Number(elNumber.value);
        elButton.textContent = result;
    }
})

