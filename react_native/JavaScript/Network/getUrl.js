import serverConfig from '~/res/Network/Network.json'
export default function getExpressUrl(){
    return serverConfig.protocol + "://" + serverConfig.ip + ":" + serverConfig.port + "/";
}