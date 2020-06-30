import { getAvatarUri } from "../modules/network/NetWork";

var data = []
var delta;

function Route(route){
    this.id = route.Id
    this.routeName = route.routeName
    this.bks = route.bks
    this.driverName = route.driverName
    this.monitorName = route.monitorName
    this.checkins = route.checkins
    this.startTime = route.startTime
    this.endTime = route.endTime
    this.latitude = route.latitude
    this.longitude = route.longitude
    this.status = route.status
    this.routeType = route.routeType
    this.point = route.point
}

function Student(route){
    var self = this
    
    this.studentId = route.studentId
    this.studentName = route.studentName
    
    this.routes = {}
    
    // var route = new Route(route)
    this.routes[route.routeType] = route;

    this.addRoute = function(route){
        // var route = new Route(route)
        this.routes[route.routeType] = route;
    }
}


export default RouteData = {
    setRoute: function(_data){
        data = _data;
        delta = RAD*BUS_RADIUS/sqrtOfTwo*Math.random();                     // this value is randomly, add to actual bus location
    },
    getBusRadius: function(){
        return BUS_RADIUS;
    },
    getBusLocation: function(latLng){
        return {
            latitude: latLng.latitude + delta, 
            longitude: latLng.longitude + delta
        }
    },

    getTrackingBatch: function(){
        var routes = data.map((item, index)=>{
            var routeInfo = item.routeInfo;
            var student = routeInfo.LstStudents[0];
            return {
                // for tracking + info
                id: item.Id,
                bks: item.BKS,
                driverName: item.DriverName,
                monitorName: item.MonitorName,
                startTime: item.StartFrom,
                endTime: item.EndAt,
                latitude: item.Latitude,
                longitude: item.Longitude,
                routeName: item.RouteName,
                routeType: item.RouteType,
                checkins: routeInfo.LstStopPoints.map((item)=>item),
                point: student.PickupPoint,
                status: student.StatusText,
                studentName: student.Name,
                
                // for info
                studentId: student.Id,
                studentCode: student.StudentCode,
                studentGrade: student.SchoolLevel,
                studentSchool: student.StudentSchool,
                pickUpOfftion: student.PickupPoint.Type,
                pickUpPlace: student.PickupPoint.Name,
                pickUpTime: student.PickUpTime,
                dropOffPlace: student.DropOffPoint.Name,
                dropOffTime: student.DropOffTime,
                driverPhoneNumber: item.DriverPhone,
                monitorPhoneNumber: item.MonitorPhone,
                avatar: getAvatarUri(student.AvartarLink),
                availableDateNextYear: student.AvailableDateNextYear
            }
        });

        var childrenList = [];
        for (var r in routes){
            var route = routes[r];
            var matchChildren = childrenList.filter((item)=>item.studentId == route.studentId);
            if (matchChildren.length == 0){
                var child = new Student(route);
                childrenList.push(child);
            }
            else {
                var child = matchChildren[0];
                child.addRoute(route);
            }
        }

        return childrenList;
    }
}

const BUS_RADIUS = 1500; // khoảng mà xe nằm trong 
const RAD = 0.000009;
const sqrtOfTwo = Math.sqrt(2);