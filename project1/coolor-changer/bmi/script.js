const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const ht = parseInt(document.querySelector('#height').value);
    const wt = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')

    if (ht <= 0 || isNaN(ht) || ht === '') {
        result.innerHTML = 'Please give a valid height';
    }
    else if (wt <= 0 || isNaN(wt) || wt === '') {
        result.innerHTML = 'Please give a valid weight';
    }
    else {
        const bmi = (wt / (ht / 100) ** 2).toFixed(2);
        result.innerHTML = `${bmi}`;
        let uw = document.querySelector('#uw');
        let nr = document.querySelector('#nr');
        let ow = document.querySelector('#ow')
        if (bmi < 18.6) {
            uw.style.backgroundColor = 'yellow';
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            nr.style.backgroundColor = 'yellow';
        }
        else {
            ow.style.backgroundColor = 'yellow';
        }
    }
});