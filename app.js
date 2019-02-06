//Search Input
const searchCity = document.getElementById('searchCity');
//INIT storage
const storage = new Storagedata();
//Get stored location data
const weatherLocation = storage.getLocationData();
//INIT weathermap
const weathermap = new Weathermap(weatherLocation.city);
//INIT ui
const ui = new UI();
//Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
//Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
    const city = document.getElementById('city').value;
    //Change Location
    weathermap.changeLocation(city);
    //Set location in local storage
    storage.setLocationData(city);
    //Get and display weather again
    getWeather();
    //Close Modal
    $('#locModal').modal('hide');
});

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