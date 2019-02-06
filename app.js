//Search Input
const searchCity = document.getElementById('searchCity');
//INIT weathermap
const weathermap = new Weathermap('katy');
//INIT ui
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);
function getWeather(){    
    weathermap.getWeather()
        .then(data => {
            // if(data.location.message === 'city not found'){
            //     console.log("here")
            //     ui.showAlert('City not found', 'alert alert-danger');
            // }else{
                ui.showCity(data);
            // }
        })
        .catch(err => console.log(err));
}