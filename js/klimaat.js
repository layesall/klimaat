const APIKEY = 'bdd8cd1c342ac6eab12ab31715490955';

//Appel de l'API openWeather 
let apiCall = function (city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then(response => response.json().then((data) => {
        
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°C';
        document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + ' km/h';
    })).catch((err) => console.log('Erreur : ' + err));
}

//Ecouteur d'evenement sur la soumission du form
document.querySelector('form').addEventListener('submit', function (e){
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    //let btnSubmit = document.querySelector('#btnSubmit');
    
    apiCall(ville);
    

});

//Appel par defaut
apiCall('Conakry');