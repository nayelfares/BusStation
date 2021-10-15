
import { currentVirtualTime, SCREEN_DURATION, virtualMinutesToTime, virtualTimeToVirtualMinutes } from '../utils/Utils';

 export default class Train {
    constructor(
        destination:string,
        periodBetweenTrips:number,
        startTime:string,
        endTime:string) {
            this.destination = destination;
            this.periodBetweenTrips = periodBetweenTrips;
            this.startTime = virtualTimeToVirtualMinutes(startTime);
            this.endTime = virtualTimeToVirtualMinutes(endTime);
    }
    destination        : string;
    periodBetweenTrips : number;
    startTime          : number;
    endTime            : number;
    lastTrip           : number = -1;

    nextTrip():string {
        let now = currentVirtualTime()% 1440
        console.log(now);
        
        let next  = 1440
        if (now>=this.startTime && now <= this.endTime){
             next =  this.periodBetweenTrips -(now - this.startTime)%this.periodBetweenTrips
             if(next <= SCREEN_DURATION){
                 if(next == 0)
                    return "now"
                 return virtualMinutesToTime(next)
             }
            
        }
        return "";
    }
} 