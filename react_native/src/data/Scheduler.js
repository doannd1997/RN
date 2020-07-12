import BackgroundTimer from 'react-native-background-timer'

const MailNetWork = require("../modules/mainTabs/mail/networking/NetWorking").default

var numberOfNewMails = 0

const updateMail = ()=>{
    MailNetWork.apiRequestGetMessages(null, (responseText)=>{
        var json = JSON.parse(responseText)
        global.mailData.setData(json)

        var inboxs = global.mailData.getInboxs()

        var _numberOfNewMails = inboxs.filter(item=>!item.isRead).length
        if (_numberOfNewMails > 0 && _numberOfNewMails != numberOfNewMails){
            global.notificationPusher.pushNotiMail(_numberOfNewMails)
            numberOfNewMails = _numberOfNewMails
        }
    })
}

export default Scheduler = {
    start: function(){
        updateMail()
        BackgroundTimer.runBackgroundTimer(() => { 
                updateMail()
            }, 
        2000);
    }
}