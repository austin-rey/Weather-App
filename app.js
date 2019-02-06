//Search Input
const searchCity = document.getElementById('searchCity');
//INIT weathermap
const weathermap = new Weathermap;
//INIT ui
const ui = new UI;

searchCity.addEventListener('keyup', (e) => {
    //Get Input Text
    const userText = e.target.value;
    if(userText !== ''){
    weathermap.getWeather(userText)
        .then(data => {
            if(data.location.message === "city not found"){
                ui.showAlert("City not found.", "alert alert-danger")
            }else{
                ui.showCity(data.location);
            }
        });
    }else{
        ui.clearCity();
    }
});