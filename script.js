


// let celsiusInput = document.querySelector(' .celsius-input')
// let fahrenheitInput = document.querySelector(' .fahrenheit-input')
// let switchBtn = document.querySelector(' fa-solid ')
// let formula = document.querySelector(' .formula-box p')


// let gloFehrenValue;
// let currCelValue;
// let currFerValue;


// switchBtn.addEventListener("click",()=>{
//     currCelValue = celsiusInput.value
//     currFerValue = fahrenheitInput.value
//     celsiusInput.value = currFerValue
//     fahrenheitInput.value = currCelValue
//     let celToFehren = (Number(currFerValue) - 32) * (5/9);

// })

// celsiusInput.addEventListener("input",()=>{
//     let celsius = celsiusInput.value
//     let celToFehren = Number(celsius) * (9/5) + 32;
//     fahrenheitInput.value = celToFehren.toFixed(2);
//     formula.innerHTML = `(${celsius}°C x 9/5) + 32 = <span style= "font-weight : 600">${celToFehren}°F</span>`

// })






// let celsiusInput = document.querySelector('.celsius-input');
// let fahrenheitInput = document.querySelector('.fahrenheit-input');
// let switchBtn = document.querySelector('.fa-solid');
// let formula = document.querySelector('.formula-box p');

// switchBtn.addEventListener('click', () => {
//     let currCelValue = celsiusInput.value;
//     let currFerValue = fahrenheitInput.value;

//     celsiusInput.value = currFerValue;
//     fahrenheitInput.value = currCelValue;

//     let celToFehren = (Number(currFerValue) - 32) * (5/9);
//     formula.innerHTML = `(${currFerValue}°F - 32) * 5/9 = <span style="font-weight: 600">${celToFehren.toFixed(2)}°C</span>`;
// });

// celsiusInput.addEventListener("input", () => {
//     let celsius = celsiusInput.value;
//     let celToFehren = Number(celsius) * (9/5) + 32;
    
//     fahrenheitInput.value = celToFehren.toFixed(2);
//     formula.innerHTML = `(${celsius}°C x 9/5) + 32 = <span style="font-weight: 600">${celToFehren}°F</span>`;
// });




//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//         working code

document.addEventListener("DOMContentLoaded", () => {
    let celsiusInput = document.querySelector('.celsius-input');
    let fahrenheitInput = document.querySelector('.fahrenheit-input');
    let switchBtn = document.querySelector('.fa-solid');
    let formula = document.querySelector('.formula-box p');

    switchBtn.addEventListener('click', () => {
        let currCelValue = celsiusInput.value;
        let currFerValue = fahrenheitInput.value;

        celsiusInput.value = currFerValue;
        fahrenheitInput.value = currCelValue;



        let celToFehren = (Number(currFerValue) - 32) * (5/9);
        formula.innerHTML = `(${currFerValue}°F - 32) * 5/9 = <span style="font-weight: 600">${celToFehren.toFixed(2)}°C</span>`;
    });

    celsiusInput.addEventListener("input", () => {
        let celsius = celsiusInput.value;
        let celToFehren = Number(celsius) * (9/5) + 32;
        
        fahrenheitInput.value = celToFehren.toFixed(2);
        formula.innerHTML = `(${celsius}°C x 9/5) + 32 = <span style="font-weight: 600">${celToFehren}°F</span>`;
    });
});