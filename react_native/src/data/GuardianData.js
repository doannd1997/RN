var data = {}

export default GuardianData = {
    setData: function(_data){
        data = _data
    },
    getGuardianList: function(){
        return data
    }
}