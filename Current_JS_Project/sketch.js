var weather;
var api_path;
var format = '&units=metric';
var api_key = '&APPID=b1bd945411d62424d08cca2bc28799f9';
var input;

function setup() {
    createCanvas(600,400);
    // set a variable with the button in html
    var button = select('#button');
    // when button clicked , call this function ...
    button.mousePressed(weatherAsk);
    // set a variable with the input area in html
    input = select('#input');
}

function weatherAsk() {
    api_path = 'http://api.openweathermap.org/data/2.5/weather?q=';

    // get the value from the input area when button is clicked
    var city = input.value();

    loadJSON(api_path + city + api_key + format, gotData);
}

// JavaScript is Asyncrnim ?? So it might access data before it is completely loaded
// Thats why we use this method . 'gotData' and passing one parameter.
// gotData will be called when the loading of the data is finished and it will put
// all the data in the data parameter.
function gotData(data) {
    weather = data;
    // clears the canvas
    clear();

    textSize(20);
    text(data.name + ":",20,15);
    text('temp :\t'+ data.main.temp, 40,45,);
    text("status :\t"+ data.weather[0].main, 40,75,);
    text('humidity :\t%'+ data.main.humidity, 40,105,);
    text('wind speed:\t'+ data.wind.speed, 40,135,);
    text('country :\t' + data.sys.country, 40, 165);


}

function draw() {
    if (weather) {
        // console.log(weather);

    }

}


// ctrl + alt + q   --- stop server
// ctrl + alt + l   --- start server
