// to write weather api

const key = [
    "4f3fa4ee51b57a31dc240195cd979ba1",
    "1522b7bd712aa3fcccd430112139b31a",
    "7e7cded75b6a5d1f862b806445fcdb8d",
    "c5be3c45e5c1817e08df7b85bde33f8f",
    "0ed5b024fd86bbe5a3c6c3309a286f6d",
    "404537c8760e2e7f80c1b34a2acb6068",
    "d7f7c2c1ba064f157eaee8448656ff33",
    "9ca49688ce7c1f16cee367b0c71e4a3f",
    "f336774a2e3724c443c558b879f4e3b9",
    "2d91c3e3ea90f1082db08374e4aaaeac"
  ];
const random = Math.floor(Math.random() * key.length);


const zip = document.getElementById('zip').innerHTML;
// console.log(zip);







function weatherZip(zipcode) {
    var url = 'https://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',us&appid='+key[random];
    fetch(url)
    .then(function (response) {
        if (response.status === 404) {
            alert('Please enter a valid US zipcode!');
            return;
        }
        return response.json();
    })
    .then(function (data) {
    generalInfo(data);
    images(data)
    });


};
function generalInfo(data) {
    var temp = Math.round(data.main.temp-273.15);
    var tempF = Math.round((data.main.temp-273.15)*1.8 + 32);
    $('.name').text(data.name);
    $('.temp').text("Temperature: " + temp + "\xB0C/ " + tempF + "\xB0F");
    $('.human').text('Humidity: '+data.main.humidity + "%");
    $('.wind').text('Wind Speed: ' + data.wind.speed +" m/s");
    var rex = data.weather[0].description.toString().split(' ');
    if (rex.includes('rain')) {
        $('.condition').text(data.weather[0].description + '🌧' );

    } else if (rex.includes('clear')) {
        $('.condition').text(data.weather[0].description + '🌞');

    } else if (rex.includes('snow')) {
        $('.condition').text(data.weather[0].description + '❄');

    } else if (rex.includes('clouds')) {
        $('.condition').text(data.weather[0].description + "☁️");

    } else {
        $('.condition').text(data.weather[0].description)
    };
};


function images(data) {
    const url = `https://pixabay.com/api/?key=21438663-60940dce2a3b8f288719617da&lang&q=${data.name}&image_type=photo`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data_img) {
          console.log(data_img.hits[0].webformatURL);
      var img = document.createElement('img');
      img.src = data_img.hits[0].webformatURL;
      document.getElementById('img_holder').appendChild(img);
        })


  }

// Calling weather API function
weatherZip(zip);