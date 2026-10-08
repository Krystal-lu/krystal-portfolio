/* Original Figma interaction model. All sensors and connections are simulated. */
(function(root){
const initial=()=>({mode:'active',devices:{fridge:true,lights:true,cooktop:false,hood:false,oven:false,dishwasher:false},heat:'Off',gas:false,pan:false,cooking:0,ovenStage:'Off',dishStage:'Off',salt:0,soy:0,saltTimes:[],soyTimes:[],event:null,severity:'normal',modal:null,call:null,countdown:0,large:false,contrast:false,logs:[]});
function reduce(prev,action){const s=JSON.parse(JSON.stringify(prev));const log=t=>s.logs.unshift(t);const lower=h=>{s.heat=h;log('Cooktop automatically adjusted to '+h+'.');};
if(s.severity==='critical'&&['toggle','mode','all-off','pan','ignite','heat','oven','dishwasher'].includes(action.type))return s;
switch(action.type){
case 'reset':return initial();
case 'toggle':if(action.device==='fridge')break;s.devices[action.device]=!s.devices[action.device];if(action.device==='cooktop'){s.heat=s.devices.cooktop?'Low':'Off';s.gas=s.devices.cooktop;}log(action.device+' '+(s.devices[action.device]?'on':'off'));break;
case 'mode':s.mode=action.value;if(s.mode==='standby'){s.devices.lights=false;s.devices.cooktop=false;s.devices.hood=false;s.heat='Off';s.gas=false;if(s.ovenStage!=='Keeping warm'){s.devices.oven=false;s.ovenStage='Off';}s.devices.dishwasher=false;s.dishStage='Off';}else s.devices.lights=true;log('Mode: '+s.mode+'. Fridge and safety monitoring remain active.');break;
case 'shutdown-dialog':s.modal='shutdown';break;
case 'all-off':Object.keys(s.devices).forEach(k=>s.devices[k]=false);s.heat='Off';s.gas=false;s.ovenStage='Off';s.dishStage='Off';s.mode='off';s.modal=null;log('All appliances powered off; manual restart required.');break;
case 'restart':if(s.severity!=='critical'){s.mode='active';s.devices.fridge=true;s.devices.lights=true;log('Kitchen restarted. Cooking appliances remain off.');}break;
case 'pan':s.pan=true;s.gas=true;s.event='pan';log('Pan detected. Gas valve opened; hood prepared in standby.');break;
case 'ignite':s.devices.cooktop=true;s.devices.hood=true;s.devices.lights=true;s.heat='Low';s.cooking=1;s.event='ignite';log('Ignition detected. Ventilation automatically activated.');break;
case 'heat':s.devices.cooktop=true;s.gas=true;s.heat=action.value;break;
case 'warm':s.event='warm';log('Pan is hot. Voice and screen reminder issued.');break;
case 'oil':s.event='oil';s.devices.hood=true;lower('Low');break;
case 'dry':s.event='dry';s.devices.cooktop=true;lower(['Medium','Medium-low','Low'].includes(s.heat)?'Low':'Medium');break;
case 'unattended':s.event='unattended';s.devices.cooktop=true;lower('Medium-low');break;
case 'long-away':s.event='long-away';s.devices.cooktop=true;lower('Low');s.modal='unattended';s.countdown=30;break;
case 'confirm-off':s.devices.cooktop=false;s.heat='Off';s.gas=false;s.modal=null;s.countdown=0;s.event='off-confirmed';log('Cooktop off.');break;
case 'salt':s.salt++;s.saltTimes.push(['14:23','14:46','15:01'][Math.min(s.salt-1,2)]);s.event=s.salt>=3?'salt-repeat':'salt';log('Salt addition '+s.salt+' recorded.');break;
case 'soy':s.soy++;s.soyTimes.push(s.soy===1?'14:20':'14:31');log('Soy sauce addition recorded.');break;
case 'seasoning':s.modal='seasoning';break;
case 'oven':s.devices.oven=true;s.ovenStage=action.value;s.event='oven';log('Steam oven: '+s.ovenStage);break;
case 'dishwasher':s.devices.dishwasher=true;s.dishStage=action.value;s.event='dishwasher';log('Dishwasher: '+s.dishStage);break;
case 'risk':s.severity='critical';s.event=action.value;s.modal='risk';s.devices.cooktop=false;s.gas=false;s.heat='Off';Object.keys(s.devices).forEach(k=>s.devices[k]=false);s.call='calling';s.countdown=10;log(action.value+' detected. Power cut; simulated help request started.');break;
case 'sos':s.modal='sos';s.countdown=10;break;
case 'help':s.call='calling';s.modal='call';s.countdown=10;log('Simulated assistance request to family and responder.');break;
case 'family':s.call='calling';s.modal='family';s.countdown=10;log('Simulated family call; kitchen status shared.');break;
case 'tick':if(s.countdown>0)s.countdown--;if(!s.countdown){if(s.modal==='unattended')return reduce(s,{type:'confirm-off'});if(s.modal==='resolved')s.modal=null;if(s.modal==='sos')return reduce(s,{type:'help'});if(s.call==='calling'){s.call='connected';log('Simulated connection established. No real call placed.');}}break;
case 'cancel':if(s.severity==='critical'){s.modal='risk';break;}s.modal=null;s.call=null;s.countdown=0;break;
case 'clear-risk':s.severity='normal';s.event='resolved';s.modal='resolved';s.call=null;s.countdown=5;log('Risk-cleared scenario. Appliances remain off.');break;
case 'large':s.large=!s.large;break;
case 'contrast':s.contrast=!s.contrast;break;
}return s;}
root.AigerEngine={initial,reduce};if(typeof module!=='undefined')module.exports=root.AigerEngine;
})(typeof window==='undefined'?globalThis:window);
