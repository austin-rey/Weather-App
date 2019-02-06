class UI{
    constructor(){
        //target container wher city will be shown
        this.location = document.getElementById('location');
    }
    showCity(city){
        let i = 0;
        console.log(city);
        //Make main icon show differet icons depending on the weather
        this.location.innerHTML = `
        <div class="card card-body mb-1" style="width: 40rem;margin: auto;">
            <div class="column">
            <div class="col-md-12" style="text-align: center;">
            <img src="http://openweathermap.org/img/w/${city.weather}.png
                    <i class="img-fluid mb-2 fas fa-sun fa-7x"></i>
                    <h2>${city.name}</h2>
                    <h4>${city.main.temp} F</h4>
                    <p>FIX DESCRIPTION</p>
                </div>
                <div class="col-md-12">
                    <div class="btn-group col-md-12" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary">${city.main.temp_min} F</button>
                        <button type="button" class="btn btn-danger">${city.main.temp_max} F</button>
                    </div>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Humidity: ${city.main.humidity} %</li>
                        <li class="list-group-item">Wind: ${city.wind.speed} m/s</li>
                        <li class="list-group-item">Sunrise: ${city.sys.sunrise}</li>
                        <li class="list-group-item">Sunset: ${city.sys.sunset}</li>
                        <li class="list-group-item">Cloudiness: ${city.clouds.all} %</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }
    clearCity(){
        this.location.innerHTML = '';
    }
    showAlert(message, className){
        this.clearCity();

        const div = document.createElement('div');

        div.className = className;
        div.appendChild(document.createTextNode(message));
        
        const container = document.querySelector('.searchContainer');

        const search = document.querySelector('.search');

        //Timeout to clear alert
        // setTimeout(() =>{
        //     this.clearCity();
        // },3000);
    }
}