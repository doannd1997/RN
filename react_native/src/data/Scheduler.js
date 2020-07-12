import BackgroundTimer from 'react-native-background-timer'

const MailNetWork = require("../modules/mainTabs/mail/networking/NetWorking").default

const updateMail = ()=>{
    MailNetWork.apiRequestGetMessages(null, (responseText)=>{
        var json = JSON.parse(responseText)
        global.mailData.setData(json)

        var inboxs = global.mailData.getInboxs()

        var _numberOfNewMails = inboxs.filter(item=>!item.isRead).length
        if (_numberOfNewMails > 0 && _numberOfNewMails != global.scheduler.numberOfNewMails){
            global.notificationPusher.pushNotiMail(_numberOfNewMails)
            global.scheduler.numberOfNewMails = _numberOfNewMails
        }
    })
}

export default Scheduler = {
    init: function(){
        this.numberOfNewMails = 0
    },
    start: function(){
        this.init()
        updateMail()
        BackgroundTimer.runBackgroundTimer(() => { 
                updateMail()
            }, 
        2000);
    },
    readMail: function(){
        this.numberOfNewMails --
    }
}