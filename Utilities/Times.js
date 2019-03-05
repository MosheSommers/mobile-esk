//import Moment from ''

export default class Times{

    //getCandleLighting -- 18 minutes before sunset excepts a timestamp as parameter
    getCandleLighting(sunset){
        //Change from timestamp to DateTime object
        let canLight = new Date(sunset);

        //Set minutes to 18 earlier, recast back to dateTime and get timestring
        canLight = this.formatAMPM(new Date(canLight.setMinutes(canLight.getMinutes() - 18))); 
        return canLight;
    }

    getPlag(sunrise, sunset){
        //Get MS per halachic hour
        const msPerHHour = (sunset - sunrise)  / 12;
        
        //Get plag - 1 1/4 halachic hours b4 sunset
        const msPlagB4Sunset = msPerHHour + (msPerHHour / 4);
        const plag = this.formatAMPM(new Date(sunset - msPlagB4Sunset));
        const latestCandle = this.formatAMPM(new Date(60000 * 30 + sunset - msPlagB4Sunset ));
        const mincha = this.formatAMPM(new Date(sunset - msPlagB4Sunset - (60000 * 10 )));
        
        
        return {plag, latestCandle, mincha};
    }


    getSunriseSunset(position){
        const thisChart = this;
        var request = new XMLHttpRequest();
        
        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'https://api.sunrise-sunset.org/json?lat=' + 
        String(position.coords.latitude)  + '&lng=' + String(position.coords.longitude) +
        '&date=friday&formatted=0' , true);

        request.onload = function () {
            const data = JSON.parse(this.response);
            thisChart.setTimes(data, thisChart);
        }

        // Send request
        request.send();
    }

    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
}