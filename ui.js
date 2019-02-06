class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');   
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.cloudiness = document.getElementById('w-cloudiness'); 
        this.wind = document.getElementById('w-wind');
        this.sunrise = document.getElementById('w-sunrise');
        this.sunset = document.getElementById('w-sunset');
        this.temp = document.getElementById('w-temp');        
        this.tempLow = document.getElementById('w-temp-low');
        this.tempHigh = document.getElementById('w-temp-high');
    }
    showCity(city){        
        console.log(city);

        var sunrise = timeConverter(city.sys.sunrise);
        var sunset = timeConverter(city.sys.sunset);
        var icon = `https://openweathermap.org/img/w/${city.weather[0]['icon']}.png`;

        this.location.textContent = `${city.name}`;
        this.desc.textContent = `${city.weather[0]['description']}`;
        this.icon.setAttribute('src', icon);
        this.temp.textContent = `Temp: ${city.main.temp} F`;
        this.tempLow.textContent = `Low ${city.main.temp_min} F`;
        this.tempHigh.textContent = `High: ${city.main.temp_max} F`;
        this.humidity.textContent = `Humidity: ${city.main.humidity}%`;
        this.sunrise.textContent = `Sunrise: ${sunrise} UTC`;
        this.sunset.textContent = `Sunset: ${sunset} UTC`;
        this.cloudiness.textContent = `Cloudiness: ${city.clouds.all}%`;
        this.wind.textContent = `Wind: ${city.wind.speed} m/s`;
    }
    clearCity(){
        this.location.innerHTML = '';
    }
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    showAlert(message, className){
        this.clearCity();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        
        const container = document.querySelector('.searchContainer');

        const search = document.querySelector('.search');
        container.insertBefore(div, search);
        //Timeout to clear alert
        setTimeout(() =>{
            this.clearAlert();
        },3000);
    }
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return time;
  }