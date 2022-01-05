let weather = {
    apiKey : "a7a86392908cc7fc230e4fc8a3f19bd4",
    fetchWeather : function(city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="
            + city 
            +"&units=metric&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));

    },
    displayWeather : function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;

        document.querySelector('.city').innerText = "Weather in " + name ;
        document.querySelector('.temp').innerText = temp + '°C' ;
        document.querySelector('.descr').innerText = description ;
        document.querySelector('.temp-div').classList.remove('loading') ;
        body.style.backgroundImage = url('https://source.unsplash.com/1600x900/?"+ name +"')
    },
    search : function(){
        this.fetchWeather(document.querySelector('.input').value)
    }
};

document.querySelector('.btn').addEventListener('click', function(){
    weather.search();
});

document.querySelector('.input').addEventListener('keyup', function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})
weather.fetchWeather('lagos')






























// let input = document.querySelector(".input");
// let name = document.querySelector(".name");
// let temperature = document.querySelector(".temperature");
// let description = document.querySelector(".description");
// let btn = document.querySelector(".btn");

// btn.addEventListener('click', function() {
//     fetch('http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&unit=matric&appid=a7a86392908cc7fc230e4fc8a3f19bd4')

//     .then(response => response.json())
//     .then(data => {
//         let nameValue = data['name'];
//         let tempValue = data['main']['temp'];
//         let descValue = data['weather'][0]['description'];

//         name.innerHTML = nameValue.toUpperCase();
//         temperature.innerHTML = Math.floor(tempValue) + 'C';
//         description.innerHTML = descValue;
//     })


//     .catch(err => alert('Not a city'))

// })