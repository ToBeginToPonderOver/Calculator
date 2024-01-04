let string = "";
let buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } 
        else if (e.target.innerHTML === 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } 
        else if (e.target.innerHTML === 'DE') {
            string = string.toString().slice(0, -1);
            document.querySelector('input').value = string;
        } 
        else if (e.target.innerHTML !== '') {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
