class WeatherMap {
    constructor() {
        this.app_id = '9404ed06bdb360f4bf9005a1f174a431';
        this.units = 'imperial'
    }
    async getWeather (city){
        const locationRequest = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.app_id}&unit=${this.units}`);

        const location = await locationRequest.json();
        return {
            location
        }
    }
}