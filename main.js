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
        else if (e.target.innerHTML === '+ | -') {
            string = -1 * parseFloat(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === '1' || e.target.innerHTML === '2' || e.target.innerHTML === '3' || e.target.innerHTML === '4' || e.target.innerHTML === '5' || e.target.innerHTML === '6' || e.target.innerHTML === '7' || e.target.innerHTML === '8' || e.target.innerHTML === '9' || e.target.innerHTML === '0' || e.target.innerHTML === '.') {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === '+' || e.target.innerHTML === '-' || e.target.innerHTML === '*' || e.target.innerHTML === '/') {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
      
        else if (e.target.innerHTML ==='%'){
            let parts1 = string.split('+');
            let parts2 = string.split('-');
            let parts3 = string.split('*');
            let parts4 = string.split('/');
            if (!isNaN(parts[parts.length - 1])) {
                if (string = parts.join('+')){
                    document.querySelector('input').value = parseFloat(parts1[0]) + parseFloat(parts1[0]*(parts1[parts1.length-1]/100));
                }
                else if (string=parts.join('-')){
                    document.querySelector('input').value = parseFloat(parts[0]) - parseFloat(parts[0]*(parts[parts.length-1]/100));
                }
                else if (string=parts.join('*')){
                    document.querySelector('input').value = parseFloat(parts[0]) * parseFloat(parts[0]*(parts[parts.length-1]/100));
                }
                else if (string=parts.join('/')){
                    document.querySelector('input').value = parseFloat(parts[0]) / parseFloat(parts[0]*(parts[parts.length-1]/100));
                }
            } else {
                console.error('Error: string is not a number');
            }
        }
        
    });
});
