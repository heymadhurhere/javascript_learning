const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const ht = parseInt(document.querySelector('#height'));
    const wt = parseInt(document.querySelector('#weight'));
    const result = document.querySelector('#results')

    if (ht <= 0 || isNaN(ht)) {
        result.innerHTML = 'Please give a valid height';
    }
    else if (wt <= 0 || isNaN(wt)) {
        result.innerHTML = 'Please give a valid weight';
    }
    else {
        const bmi = (wt / (ht / 100) ** 2).toFixed(2);
        result.innerHTML = `${bmi}`;
    }
});