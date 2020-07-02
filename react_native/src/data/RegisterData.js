var data = {}

var RegisterData = {
    setData: function(_data){
        data = _data        
    },
    getMergeStudent: function(studentList){
        for (var s in studentList){
            var student = studentList[s]
            var info = data.find(item=>item.StudentID == student.studentId)
            student.homeAddress = info.HomeAddress
            student.homeLatitude = info.HomeLat
            student.homeLongitude = info.HomeLong
            student.effectDate = info.EffectiveDate
            student.monthFee = info.MonthlyFee
            student.placeSelected = {
                latitude: student.homeLatitude,
                longitude: student.homeLongitude,
                title: student.homeAddress
            },
            student.distanceToSchool = info.StopToSchool
            student.guardiandsId = info.Supervisorids.split(',')
        }
        return studentList
    }
}

export default RegisterData