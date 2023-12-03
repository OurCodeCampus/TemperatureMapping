
const calculateTemp = () => {
    const numberTemp = document.getElementById('temp-value').value;

    const tempSelected = document.getElementById("temp-list");
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp)

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }
    const fahToCel = (fah) => {
        let celsius = Math.round((fah - 32) * 5 / 9);
        return celsius;
    }
    let result;

    if (valueTemp == 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('result').innerHTML = `${result}°Fahrenheit`;
    } else {
        result = fahToCel(numberTemp);
        document.getElementById('result').innerHTML = `${result}°Celsius`;
    }

}