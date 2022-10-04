const yaml = require('js-yaml');
const fs   = require('fs');

try {
    const url = './config/smfcfg.yaml'
    const doc = yaml.load(fs.readFileSync(url, 'utf8'));
    console.log(doc.info);

    const info = doc.info;
    const configuration = doc.configuration;

    const arr = url.split("/")
    const names = arr[arr.length - 1].split(".")[0]
    const nfname = names.substring(0, names.length - 3)

    const httpurl = configuration.sbi.registerIPv4;
    const port = configuration.sbi.port;

    const servicenames = configuration.serviceNameList;
    const snssaiInfos = configuration.snssaiInfos;

    const snssais = []
    const dnninfos = []

    snssaiInfos.map((si, i) => {
        let snssai = snssaiInfos[i].sNssai;
        let dnnInfo = snssaiInfos[i].dnnInfos;
        // ToDo: get dnn and dns
        snssais.push(snssai)
        dnninfos.push(dnnInfo)
    })

    

    const plmnList = configuration.plmnList;
    const pfcp = configuration.pfcp;

    const userplaneInformation = configuration.userplaneInformation;
    const upNodes = userplaneInformation.upNodes;
    const links = userplaneInformation.links;

    const nrfuri = configuration.nrfuri;


    console.log(snssais)
    console.log(dnninfos)
    console.log(plmnList)
    console.log(upNodes)
    console.log(links)


} catch (e) {
    console.log(e);
}