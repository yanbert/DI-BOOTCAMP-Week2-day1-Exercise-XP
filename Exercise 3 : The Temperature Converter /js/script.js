alert('Give celsius temperature to convert it to fahrenheit')
let celsiusTemperature = prompt('Give celsius temperature');

if(!isNaN(celsiusTemperature))
{
    fahrenheitTemperature = ((celsiusTemperature / 5 ) * 9)+32
    alert(celsiusTemperature + "°C is " + fahrenheitTemperature +"°F");
    console.log(celsiusTemperature + "°C is " + fahrenheitTemperature +"°F");
}

alert('Veuillez fournir un nombre');
