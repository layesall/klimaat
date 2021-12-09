const APIKEY = 'bdd8cd1c342ac6eab12ab31715490955';
const form = document.querySelector('form');
const defaultCity = 'Conakry';

//Appel de l'API openWeather 
const klimaat = (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then(response => response.json().then((data) => {
        document.querySelector('#city').textContent = data.name;
        document.querySelector('#temp').textContent = data.main.temp + '°C';
        document.querySelector('#humidity').textContent = data.main.humidity + '%';
        document.querySelector('#wind').textContent = data.wind.speed + ' km/h';
    })).catch((err) => console.log('Erreur : ' + err));
}

//Ecouteur d'evenement sur la soumission du form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let cityName = document.querySelector('#inputCity').value;
    if(cityName !== ""){
        return klimaat(cityName);
    }else{
        return klimaat(defaultCity);
    }
});

//Appel par defaut
klimaat(defaultCity);