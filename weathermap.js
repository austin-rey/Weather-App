class Weathermap {
    constructor(city) {
        this.app_id = '9404ed06bdb360f4bf9005a1f174a431';
        this.units = 'imperial';
        this.city = city;
    }
    async getWeather (){
        const locationRequest = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.app_id}&units=${this.units}`);

        const location = await locationRequest.json();
        return location;
    }
    changeLocation(city) {
        this.city = city;
    }
}