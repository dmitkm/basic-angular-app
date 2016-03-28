/**
 * Created by Dmitry on 3/22/2016.
 */

angular
    .module("app")
    .filter("dataFilter",function(){
        return function (value){
            var now=new Date(),
                currYear=now.getFullYear(),
                today=now.toJSON().slice(0,10),
                dateValue,
                time;

            var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];


            dateValue=new Date(value);
            var year=dateValue.getFullYear();
            var valueToday = dateValue.toJSON().slice(0,10);

            if(today===valueToday){
                return dateValue.toTimeString().slice(0,8);
            }else if(year===currYear){
                time=dateValue.getHours()+":"+dateValue.getMinutes()+":"+dateValue.getSeconds();
                return monthNames[dateValue.getMonth()]+" "+dateValue.getDate()+", "+time;
            }else{
                return dateValue.toString();
            }
        }
    });