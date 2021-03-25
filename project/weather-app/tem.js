var one = document.querySelector(".child");
var two = document.querySelector(".childOg");
var three = document.querySelector(".childOgg");
var four = document.querySelector(".childOggy");
var five = document.querySelector(".childOggyy");

function weather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=aca07d3cc33f6b5b06431820fd1a37e3"
  )
    .then((resp) => resp.json())
    .then(function (data) {
      var a = data.main.temp;
      var temp = a - 273.15;
      one.innerHTML = Math.floor(temp)+'  '+'C';
      var d = data.main.pressure;
      two.innerHTML = d+'  '+'km/h';
      var e = data.sys.country;
      three.innerHTML = e;
      var z = data.main.humidity;
      four.innerHTML = z+'  '+'bar';
      var p = data.coord.lon;
      five.innerHTML = p;
    });
}
weather();
