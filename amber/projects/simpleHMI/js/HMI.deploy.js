smalltalk.addPackage('HMI', {});
smalltalk.addClass('CommandExecutor', smalltalk.Object, ['receiver'], 'HMI');

smalltalk.CommandExecutor.klass.iVarNames = ['reciever'];
smalltalk.addMethod(
"_doIt_",
smalltalk.method({
selector: "doIt:",
fn: function (aString){
var self=this;
var $early={};
try{var compiler=nil;
(compiler=smalltalk.send((smalltalk.Compiler || Compiler), "_new", []));
smalltalk.send((function(){return smalltalk.send(compiler, "_parseExpression_", [aString]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return (function(){throw $early=[smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(ex, "_messageText", [])])]})();})]);
return smalltalk.send(smalltalk.send(smalltalk.send(compiler, "_eval_", [smalltalk.send(compiler, "_compile_forClass_", [smalltalk.send(smalltalk.send("doIt ^[", "__comma", [aString]), "__comma", ["] value"]), (smalltalk.DoIt || DoIt)])]), "_fn", []), "_applyTo_arguments_", [smalltalk.send(self, "_receiver", []), []]);
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.CommandExecutor.klass);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
fn: function (){
var self=this;
return (($receiver = (typeof receiver == 'undefined' ? nil : receiver)) == nil || $receiver == undefined) ? (function(){return smalltalk.send((smalltalk.DoIt || DoIt), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.CommandExecutor.klass);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
fn: function (anObject){
var self=this;
(receiver=anObject);
return self;}
}),
smalltalk.CommandExecutor.klass);


smalltalk.addClass('HMIelement', smalltalk.Object, ['state', 'elName', 'elType', 'element', 'xPos', 'yPos', 'text', 'elPicture', 'elPictureOn', 'elPictureOff', 'params', 'param1', 'usage', 'scene', 'socket', 'netClient'], 'HMI');
smalltalk.addMethod(
"_client",
smalltalk.method({
selector: "client",
fn: function (){
var self=this;
return self['@netClient'];
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_drawOn_",
smalltalk.method({
selector: "drawOn:",
fn: function (aRaphaelPaper){
var self=this;
(self['@element']=smalltalk.send(aRaphaelPaper, "_image_onX_onY_w_h_", [smalltalk.send(self, "_elPicture", []), smalltalk.send(self, "_xPos", []), smalltalk.send(self, "_yPos", []), (128), (128)]));
(self['@text']=smalltalk.send(aRaphaelPaper, "_text_onY_text_", [((($receiver = smalltalk.send(self, "_xPos", [])).klass === smalltalk.Number) ? $receiver +(64) : smalltalk.send($receiver, "__plus", [(64)])), ((($receiver = smalltalk.send(self, "_yPos", [])).klass === smalltalk.Number) ? $receiver +(140) : smalltalk.send($receiver, "__plus", [(140)])), smalltalk.send(self, "_elName", [])]));
(self['@usage']=smalltalk.send(aRaphaelPaper, "_text_onY_text_", [((($receiver = smalltalk.send(self, "_xPos", [])).klass === smalltalk.Number) ? $receiver +(64) : smalltalk.send($receiver, "__plus", [(64)])), ((($receiver = smalltalk.send(self, "_yPos", [])).klass === smalltalk.Number) ? $receiver +(160) : smalltalk.send($receiver, "__plus", [(160)])), ""]));
(self['@scene']=aRaphaelPaper);
smalltalk.send(self, "_state_", [smalltalk.send(self, "_state", [])]);
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_elName",
smalltalk.method({
selector: "elName",
fn: function (){
var self=this;
return (($receiver = self['@elName']) == nil || $receiver == undefined) ? (function(){return "emptyName";})() : (function(){return self['@elName'];})();
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_elName_",
smalltalk.method({
selector: "elName:",
fn: function (aName){
var self=this;
(self['@elName']=aName);
(($receiver = self['@text']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@text'], "_attr_value_", ["text", aName]);})() : nil;
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_elPicture",
smalltalk.method({
selector: "elPicture",
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(self, "_state", []), "__eq", ["on"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_elPicture', fn: function(){return smalltalk.send(smalltalk.send(self, "_elType", []), "_on", [])}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_elPicture', fn: function(){return smalltalk.send(smalltalk.send(self, "_elType", []), "_off", [])}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_elPicture', fn: function(){return smalltalk.send(smalltalk.send(self, "_elType", []), "_on", [])}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_elPicture', fn: function(){return smalltalk.send(smalltalk.send(self, "_elType", []), "_off", [])}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_elPicture'){return e.fn()} throw(e)}}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_elType",
smalltalk.method({
selector: "elType",
fn: function (){
var self=this;
(($receiver = self['@elType']) == nil || $receiver == undefined) ? (function(){return (self['@elType']=smalltalk.send((smalltalk.HMIelementType || HMIelementType), "_new", []));})() : $receiver;
return self['@elType'];
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_elType_",
smalltalk.method({
selector: "elType:",
fn: function (aType){
var self=this;
(self['@elType']=aType);
(($receiver = self['@element']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@element'], "_attr_value_", ["src", smalltalk.send(self, "_elPicture", [])]);})() : nil;
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_element",
smalltalk.method({
selector: "element",
fn: function (){
var self=this;
return self['@element'];
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_setActions",
smalltalk.method({
selector: "setActions",
fn: function (){
var self=this;
var ox=nil;
var oy=nil;
var xFactor=nil;
var yFactor=nil;
(ox=smalltalk.send(self['@element'], "_attr_", ["x"]));
(oy=smalltalk.send(self['@element'], "_attr_", ["y"]));
(xFactor=(1));
(yFactor=(1));
smalltalk.send(self['@element'], "_drag_value_value_", [(function(dx, dy){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_client", []), "_instance", []), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changePos #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self, "_elName", [])]), "__comma", ["'"]), "__comma", [" ) xPos:"]), "__comma", [((($receiver = ox).klass === smalltalk.Number) ? $receiver +dx : smalltalk.send($receiver, "__plus", [dx]))]), "__comma", [" yPos:"]), "__comma", [((($receiver = oy).klass === smalltalk.Number) ? $receiver +dy : smalltalk.send($receiver, "__plus", [dy]))])]);}), (function(){return smalltalk.send(self['@element'], "_attr_value_", ["opacity", (1)]);}), (function(){(ox=((($receiver = ((($receiver = xFactor).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@element'], "_attr_", ["x"]) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@element'], "_attr_", ["x"])]))).klass === smalltalk.Number) ? $receiver +smalltalk.send(self['@element'], "_attr_", ["x"]) : smalltalk.send($receiver, "__plus", [smalltalk.send(self['@element'], "_attr_", ["x"])])));(oy=((($receiver = ((($receiver = yFactor).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@element'], "_attr_", ["y"]) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@element'], "_attr_", ["y"])]))).klass === smalltalk.Number) ? $receiver +smalltalk.send(self['@element'], "_attr_", ["y"]) : smalltalk.send($receiver, "__plus", [smalltalk.send(self['@element'], "_attr_", ["y"])])));return smalltalk.send(self['@element'], "_attr_value_", ["opacity", (0.8)]);})]);
smalltalk.send(self['@element'], "_dblclick_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_client", []), "_instance", []), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@switch #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self, "_elName", [])]), "__comma", ["'"]), "__comma", [" ) switch"])]);})]);
smalltalk.send(self['@element'], "_click_", [(function(){return smalltalk.send((smalltalk.WebHMIClientGui || WebHMIClientGui), "_currentItem_", [self]);})]);
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_setParent_",
smalltalk.method({
selector: "setParent:",
fn: function (aWebHMIClient){
var self=this;
(self['@netClient']=aWebHMIClient);
smalltalk.send(self, "_drawOn_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_client", []), "_interface", []), "_paper", [])]);
smalltalk.send(self, "_setActions", []);
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_state",
smalltalk.method({
selector: "state",
fn: function (){
var self=this;
return self['@state'];
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_state_",
smalltalk.method({
selector: "state:",
fn: function (aState){
var self=this;
(self['@state']=aState);
(($receiver = self['@usage']) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_state", []), "__eq", ["on"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@usage'], "_attr_value_", ["text", "Loaded on: 0% "]);})() : (function(){return smalltalk.send(self['@usage'], "_attr_value_", ["text", "Is switched off"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@usage'], "_attr_value_", ["text", "Loaded on: 0% "]);}), (function(){return smalltalk.send(self['@usage'], "_attr_value_", ["text", "Is switched off"]);})]));})() : nil;
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_switch",
smalltalk.method({
selector: "switch",
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_state", []), "__eq", ["on"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_state_", ["off"]);})() : (function(){return smalltalk.send(self, "_state_", ["on"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_state_", ["off"]);}), (function(){return smalltalk.send(self, "_state_", ["on"]);})]));
smalltalk.send(self['@element'], "_attr_value_", ["src", smalltalk.send(self, "_elPicture", [])]);
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_text",
smalltalk.method({
selector: "text",
fn: function (){
var self=this;
return self['@text'];
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_usage",
smalltalk.method({
selector: "usage",
fn: function (){
var self=this;
return self['@usage'];
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_usage_",
smalltalk.method({
selector: "usage:",
fn: function (anInteger){
var self=this;
(($receiver = self['@usage']) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_state", []), "__eq", ["on"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@usage'], "_attr_value_", ["text", smalltalk.send(smalltalk.send("Loaded on: ", "__comma", [smalltalk.send(anInteger, "_asString", [])]), "__comma", ["%"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@usage'], "_attr_value_", ["text", smalltalk.send(smalltalk.send("Loaded on: ", "__comma", [smalltalk.send(anInteger, "_asString", [])]), "__comma", ["%"])]);})]));})() : nil;
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_usingSocket_",
smalltalk.method({
selector: "usingSocket:",
fn: function (aSocket){
var self=this;
(socket=aSocket);
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_xPos",
smalltalk.method({
selector: "xPos",
fn: function (){
var self=this;
return (($receiver = self['@xPos']) == nil || $receiver == undefined) ? (function(){return (0);})() : (function(){return self['@xPos'];})();
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_xPos_",
smalltalk.method({
selector: "xPos:",
fn: function (aPos){
var self=this;
(self['@xPos']=aPos);
(($receiver = self['@element']) != nil && $receiver != undefined) ? (function(){smalltalk.send(self['@element'], "_attr_value_", ["x", self['@xPos']]);smalltalk.send(self['@text'], "_attr_value_", ["x", ((($receiver = self['@xPos']).klass === smalltalk.Number) ? $receiver +(64) : smalltalk.send($receiver, "__plus", [(64)]))]);return smalltalk.send(self['@usage'], "_attr_value_", ["x", ((($receiver = self['@xPos']).klass === smalltalk.Number) ? $receiver +(64) : smalltalk.send($receiver, "__plus", [(64)]))]);})() : nil;
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_yPos",
smalltalk.method({
selector: "yPos",
fn: function (){
var self=this;
return (($receiver = self['@yPos']) == nil || $receiver == undefined) ? (function(){return (0);})() : (function(){return self['@yPos'];})();
return self;}
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_yPos_",
smalltalk.method({
selector: "yPos:",
fn: function (aPos){
var self=this;
(self['@yPos']=aPos);
(($receiver = self['@element']) != nil && $receiver != undefined) ? (function(){smalltalk.send(self['@element'], "_attr_value_", ["y", self['@yPos']]);smalltalk.send(self['@text'], "_attr_value_", ["y", ((($receiver = self['@yPos']).klass === smalltalk.Number) ? $receiver +(140) : smalltalk.send($receiver, "__plus", [(140)]))]);return smalltalk.send(self['@usage'], "_attr_value_", ["y", ((($receiver = self['@yPos']).klass === smalltalk.Number) ? $receiver +(160) : smalltalk.send($receiver, "__plus", [(160)]))]);})() : nil;
return self;}
}),
smalltalk.HMIelement);


smalltalk.HMIelement.klass.iVarNames = ['collection'];
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(each){return smalltalk.send((smalltalk.HMIelement || HMIelement), "_removeElement_", [each]);})]);
return self;}
}),
smalltalk.HMIelement.klass);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
fn: function (){
var self=this;
(($receiver = self['@collection']) == nil || $receiver == undefined) ? (function(){return (self['@collection']=smalltalk.send((smalltalk.Array || Array), "_new", []));})() : $receiver;
return self['@collection'];
return self;}
}),
smalltalk.HMIelement.klass);

smalltalk.addMethod(
"_getElement_",
smalltalk.method({
selector: "getElement:",
fn: function (aName){
var self=this;
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(el){return ((($receiver = smalltalk.send(smalltalk.send(el, "_elName", []), "__eq", [aName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_getElement_', fn: function(){return el}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_getElement_', fn: function(){return el}})})();})]));})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_getElement_'){return e.fn()} throw(e)}}
}),
smalltalk.HMIelement.klass);

smalltalk.addMethod(
"_removeElement_",
smalltalk.method({
selector: "removeElement:",
fn: function (aHMIelement){
var self=this;
smalltalk.send(smalltalk.send(aHMIelement, "_element", []), "_remove", []);
smalltalk.send(smalltalk.send(aHMIelement, "_text", []), "_remove", []);
smalltalk.send(smalltalk.send(aHMIelement, "_usage", []), "_remove", []);
smalltalk.send(smalltalk.send(self, "_elements", []), "_remove_", [aHMIelement]);
return self;}
}),
smalltalk.HMIelement.klass);


smalltalk.addClass('HMIelementType', smalltalk.Object, ['on', 'off', 'name'], 'HMI');
smalltalk.addMethod(
"_off",
smalltalk.method({
selector: "off",
fn: function (){
var self=this;
return self['@off'];
return self;}
}),
smalltalk.HMIelementType);

smalltalk.addMethod(
"_off_",
smalltalk.method({
selector: "off:",
fn: function (aPath){
var self=this;
(self['@off']=aPath);
return self;}
}),
smalltalk.HMIelementType);

smalltalk.addMethod(
"_on",
smalltalk.method({
selector: "on",
fn: function (){
var self=this;
return self['@on'];
return self;}
}),
smalltalk.HMIelementType);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aPath){
var self=this;
(self['@on']=aPath);
return self;}
}),
smalltalk.HMIelementType);

smalltalk.addMethod(
"_typeName",
smalltalk.method({
selector: "typeName",
fn: function (){
var self=this;
return self['@name'];
return self;}
}),
smalltalk.HMIelementType);

smalltalk.addMethod(
"_typeName_",
smalltalk.method({
selector: "typeName:",
fn: function (aName){
var self=this;
(self['@name']=aName);
return self;}
}),
smalltalk.HMIelementType);


smalltalk.HMIelementType.klass.iVarNames = ['collection'];
smalltalk.addMethod(
"_getType_",
smalltalk.method({
selector: "getType:",
fn: function (aTypeName){
var self=this;
try{smalltalk.send(self['@collection'], "_do_", [(function(t){return ((($receiver = smalltalk.send(smalltalk.send(t, "_typeName", []), "__eq", [aTypeName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_getType_', fn: function(){return t}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_getType_', fn: function(){return t}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_getType_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_getType_'){return e.fn()} throw(e)}}
}),
smalltalk.HMIelementType.klass);

smalltalk.addMethod(
"_types",
smalltalk.method({
selector: "types",
fn: function (){
var self=this;
(($receiver = self['@collection']) == nil || $receiver == undefined) ? (function(){return (self['@collection']=smalltalk.send((smalltalk.Array || Array), "_new", []));})() : $receiver;
return self['@collection'];
return self;}
}),
smalltalk.HMIelementType.klass);


smalltalk.addClass('WebHMI', smalltalk.Object, ['field', 'elements', 'socketCreated'], 'HMI');
smalltalk.addMethod(
"_createSocket",
smalltalk.method({
selector: "createSocket",
fn: function (){
var self=this;
socket = new WebSocket("ws://localhost:9898/broadcast"); ;
socket.onopen = function() { alert('Connection has been made successfuly');;
smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", ["@getScheme"]);
};
socket.onmessage = function (evt) { ;
smalltalk.send(self, "_processMessage_", [smalltalk.send((typeof evt == 'undefined' ? nil : evt), "_data", [])]);
};;
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_createSocket_",
smalltalk.method({
selector: "createSocket:",
fn: function (aString){
var self=this;
socket = new WebSocket(aString); ;
socket.onopen = function() { alert('Connection has been made successfuly');;
smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", ["@getScheme"]);
};
socket.onmessage = function (evt) { ;
smalltalk.send(self, "_processMessage_", [smalltalk.send((typeof evt == 'undefined' ? nil : evt), "_data", [])]);
};;
socket.onclose = function() { alert('Connection closed');};
(self['@socketCreated']=true);
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
fn: function (){
var self=this;
(($receiver = self['@elements']) == nil || $receiver == undefined) ? (function(){return (self['@elements']=smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []));})() : $receiver;
return self['@elements'];
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_elementsContains_",
smalltalk.method({
selector: "elementsContains:",
fn: function (aString){
var self=this;
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(el){return ((($receiver = smalltalk.send(smalltalk.send(el, "_elName", []), "__eq", [aString])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_elementsContains_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_elementsContains_', fn: function(){return true}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_elementsContains_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_elementsContains_'){return e.fn()} throw(e)}}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_prepareWorkField_",
smalltalk.method({
selector: "prepareWorkField:",
fn: function (aId){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [aId]));
return smalltalk.send((smalltalk.Raphael || Raphael), "_value_value_value_", [div, ((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processInfoMessage_",
smalltalk.method({
selector: "processInfoMessage:",
fn: function (msg){
var self=this;
var tmp=nil;
(tmp=smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@info ", ""])]));
((($receiver = smalltalk.send(self, "_elementsContains_", [smalltalk.send(tmp, "_elName", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []), "_add_", [(function($rec){smalltalk.send($rec, "_usingSocket_", [(typeof socket == 'undefined' ? nil : socket)]);return smalltalk.send($rec, "_drawOn_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", [])]);})(tmp)]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []), "_add_", [(function($rec){smalltalk.send($rec, "_usingSocket_", [(typeof socket == 'undefined' ? nil : socket)]);return smalltalk.send($rec, "_drawOn_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", [])]);})(tmp)]);})]));
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processMessage_",
smalltalk.method({
selector: "processMessage:",
fn: function (msg){
var self=this;
((($receiver = smalltalk.send(msg, "_match_", [unescape("@info")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processInfoMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processInfoMessage_", [msg]);})]));
((($receiver = ((($receiver = smalltalk.send(smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){((($receiver = smalltalk.send(msg, "_match_", [unescape("@switched")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [unescape("@moved")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [unescape("@params")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [unescape("@remove")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})]));return ((($receiver = smalltalk.send(msg, "_match_", [unescape("@change")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){((($receiver = smalltalk.send(msg, "_match_", [unescape("@switched")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [unescape("@moved")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [unescape("@params")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [unescape("@remove")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})]));return ((($receiver = smalltalk.send(msg, "_match_", [unescape("@change")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})]));})]));
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processMovedMessage_",
smalltalk.method({
selector: "processMovedMessage:",
fn: function (msg){
var self=this;
var tmp=nil;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", [unescape("@moved%20"), ""])]);
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processParamChangeMessage_",
smalltalk.method({
selector: "processParamChangeMessage:",
fn: function (msg){
var self=this;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", [unescape("@change%20"), ""])]);
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processParamsMessage_",
smalltalk.method({
selector: "processParamsMessage:",
fn: function (msg){
var self=this;
var tmp=nil;
smalltalk.send(smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", [unescape("@params%20"), ""])]), "_drawOn_", [self['@field']]);
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processRemoveMessage_",
smalltalk.method({
selector: "processRemoveMessage:",
fn: function (msg){
var self=this;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", [unescape("@remove%20"), ""])]);
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processSwitchedMessage_",
smalltalk.method({
selector: "processSwitchedMessage:",
fn: function (msg){
var self=this;
var tmp=nil;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", [unescape("@switched%20"), ""])]);
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_reconnect",
smalltalk.method({
selector: "reconnect",
fn: function (){
var self=this;
smalltalk.send(self, "_start", []);
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_showAddForm",
smalltalk.method({
selector: "showAddForm",
fn: function (){
var self=this;
var div=nil;
var addButton=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
smalltalk.send(div, "_innerHTML_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_addFormHTML", [])]);
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_showChangeForm",
smalltalk.method({
selector: "showChangeForm",
fn: function (){
var self=this;
var div=nil;
var addButton=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
smalltalk.send(div, "_innerHTML_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_changeFormHTML", [])]);
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_showRemForm",
smalltalk.method({
selector: "showRemForm",
fn: function (){
var self=this;
var div=nil;
var remButton=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
smalltalk.send(div, "_innerHTML_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_removeFormHTML", [])]);
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
var adress=nil;
smalltalk.send((smalltalk.WebHMI || WebHMI), "_field_", [smalltalk.send(self, "_prepareWorkField_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_workSpaceId", [])])]);
(adress=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["ServerAddress"]));
(($receiver = adress) != nil && $receiver != undefined) ? (function(){smalltalk.send(self, "_createSocket_", [smalltalk.send(smalltalk.send("ws://", "__comma", [smalltalk.send(adress, "_value", [])]), "__comma", ["/broadcast"])]);return smalltalk.send(adress, "_hidden_", [true]);})() : nil;
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_startAdmin",
smalltalk.method({
selector: "startAdmin",
fn: function (){
var self=this;
var addButt=nil;
var remButt=nil;
var clearButt=nil;
var chButt=nil;
var connect=nil;
var sidebar=nil;
smalltalk.send((smalltalk.WebHMI || WebHMI), "_workSpaceId_", ["workspace"]);
smalltalk.send((smalltalk.WebHMI || WebHMI), "_enableMoving_", [true]);
(addButt=smalltalk.send("#addItem", "_asJQuery", []));
smalltalk.send(addButt, "_hide", []);
smalltalk.send(addButt, "_click_", [(function(){return smalltalk.send(self, "_showAddForm", []);})]);
(remButt=smalltalk.send("#delItem", "_asJQuery", []));
smalltalk.send(remButt, "_hide", []);
smalltalk.send(remButt, "_click_", [(function(){return smalltalk.send(self, "_showRemForm", []);})]);
(chButt=smalltalk.send("#chItem", "_asJQuery", []));
smalltalk.send(chButt, "_hide", []);
smalltalk.send(chButt, "_click_", [(function(){return smalltalk.send(self, "_showChangeForm", []);})]);
(sidebar=smalltalk.send("#sidebar", "_asJQuery", []));
smalltalk.send(sidebar, "_hide", []);
(connect=smalltalk.send("#ConnectButton", "_asJQuery", []));
smalltalk.send(connect, "_click_", [(function(){smalltalk.send(self, "_reconnect", []);smalltalk.send(connect, "_hide", []);smalltalk.send(addButt, "_show", []);smalltalk.send(remButt, "_show", []);smalltalk.send(chButt, "_show", []);smalltalk.send(self, "_showAddForm", []);return smalltalk.send(sidebar, "_show", []);})]);
return self;}
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_startClient",
smalltalk.method({
selector: "startClient",
fn: function (){
var self=this;
var connect=nil;
smalltalk.send((smalltalk.WebHMI || WebHMI), "_workSpaceId_", ["workspace_client"]);
smalltalk.send((smalltalk.WebHMI || WebHMI), "_enableMoving_", [false]);
(connect=smalltalk.send("#ConnectButton", "_asJQuery", []));
smalltalk.send(connect, "_click_", [(function(){smalltalk.send(self, "_reconnect", []);return smalltalk.send(connect, "_hide", []);})]);
return self;}
}),
smalltalk.WebHMI);


smalltalk.WebHMI.klass.iVarNames = ['currentItem','field','scale','moveAccess','paperId'];
smalltalk.addMethod(
"_addFormHTML",
smalltalk.method({
selector: "addFormHTML",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("<form>", "__comma", ["<p>Item name:"]), "__comma", ["<input id=\x22itemName\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item type:"]), "__comma", ["<select id=\x22itemType\x22 class='inputField' value=\x22\x22>"]), "__comma", ["<option id=\x221\x22 value=\x22server\x22>Server</option>"]), "__comma", ["<option id=\x222\x22 value=\x22workstation\x22>Workstation</option>"]), "__comma", ["<option id=\x223\x22 value=\x22router\x22>Router</option>"]), "__comma", ["</select><br>"]), "__comma", ["<input id=\x22add\x22 class='actionButton'  type=\x22button\x22 value=\x22\x22 onclick=\x22 smalltalk.WebHMI._addItem()\x22>"]), "__comma", ["</form>"]), "__comma", ["<div id=\x22info\x22></div>"]);
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_addItem",
smalltalk.method({
selector: "addItem",
fn: function (){
var self=this;
var div=nil;
var itemName=nil;
var itemType=nil;
var err=nil;
(itemName=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemName"]));
(itemType=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemType"]));
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
((($receiver = ((($receiver = smalltalk.send(itemName, "_value", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", [unescape("%3Cbr%3EAdded%20Item%20")]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(itemType, "_value", [])])]);return smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("@add%20%23%28WebHMIElement%20Add%3A%20%28WebHMIElement%20new%20createElement%3A%20%20"), "__comma", [unescape("%27")]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [unescape("%27")]), "__comma", [unescape("%20withType%3A%20%28WebHMIElementType%20")]), "__comma", [smalltalk.send(itemType, "_value", [])]), "__comma", [unescape("%29%29%29")])]);})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [unescape("Field%20%27Name%27%20must%20be%20not%20empty")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", [unescape("%3Cbr%3EAdded%20Item%20")]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(itemType, "_value", [])])]);return smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("@add%20%23%28WebHMIElement%20Add%3A%20%28WebHMIElement%20new%20createElement%3A%20%20"), "__comma", [unescape("%27")]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [unescape("%27")]), "__comma", [unescape("%20withType%3A%20%28WebHMIElementType%20")]), "__comma", [smalltalk.send(itemType, "_value", [])]), "__comma", [unescape("%29%29%29")])]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [unescape("Field%20%27Name%27%20must%20be%20not%20empty")]);})]));
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_changeFormHTML",
smalltalk.method({
selector: "changeFormHTML",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("<form>", "__comma", ["<p>Item name:"]), "__comma", ["<input id=\x22itemName\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item type name:"]), "__comma", ["<input id=\x22itemTypeName\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item switched on value:"]), "__comma", ["<input id=\x22itemOnPath\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item switched off value:"]), "__comma", ["<input id=\x22itemOffPath\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<input id=\x22change\x22 class='actionButton' type=\x22button\x22 value='' onclick=\x22 smalltalk.WebHMI._changeItem()\x22>"]), "__comma", ["</form>"]), "__comma", ["<div id=\x22info\x22></div>"]);
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_changeItem",
smalltalk.method({
selector: "changeItem",
fn: function (){
var self=this;
var div=nil;
var itemName=nil;
var typeName=nil;
var onPic=nil;
var offPic=nil;
(itemName=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemName"]));
(typeName=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemTypeName"]));
(onPic=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemOnPath"]));
(offPic=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemOffPath"]));
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
((($receiver = ((($receiver = smalltalk.send(smalltalk.send(itemName, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(typeName, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(onPic, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(offPic, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(offPic, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(onPic, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(offPic, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(offPic, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(typeName, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(onPic, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(offPic, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(offPic, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(onPic, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(offPic, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(offPic, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@changeParam #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(typeName, "_value", [])])]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_currentItem",
smalltalk.method({
selector: "currentItem",
fn: function (){
var self=this;
(($receiver = self['@currentItem']) == nil || $receiver == undefined) ? (function(){return (self['@currentItem']=smalltalk.send((smalltalk.HMIelement || HMIelement), "_new", []));})() : $receiver;
return self['@currentItem'];
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_currentItem_",
smalltalk.method({
selector: "currentItem:",
fn: function (aItem){
var self=this;
var div=nil;
var text=nil;
var type=nil;
var onPath=nil;
var offPath=nil;
var remButton=nil;
(self['@currentItem']=aItem);
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["selected"]));
(text=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemName"]));
(type=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemTypeName"]));
(onPath=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemOnPath"]));
(offPath=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemOffPath"]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return smalltalk.send(div, "_innerHTML_", [smalltalk.send(unescape("Selected%20item%20-%20"), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])])]);})() : nil;
(($receiver = text) != nil && $receiver != undefined) ? (function(){return smalltalk.send(text, "_value_", [smalltalk.send(self['@currentItem'], "_elName", [])]);})() : nil;
(($receiver = type) != nil && $receiver != undefined) ? (function(){return smalltalk.send(type, "_value_", [smalltalk.send(smalltalk.send(self['@currentItem'], "_elType", []), "_typeName", [])]);})() : nil;
(($receiver = onPath) != nil && $receiver != undefined) ? (function(){return smalltalk.send(onPath, "_value_", [smalltalk.send(smalltalk.send(self['@currentItem'], "_elType", []), "_on", [])]);})() : nil;
(($receiver = offPath) != nil && $receiver != undefined) ? (function(){return smalltalk.send(offPath, "_value_", [smalltalk.send(smalltalk.send(self['@currentItem'], "_elType", []), "_off", [])]);})() : nil;
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_delItem",
smalltalk.method({
selector: "delItem",
fn: function (){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", []), "__eq", ["emptyName"])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Removed Item "]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", [])])]);smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send("@remove #(WebHMIElement RemoveByName: ", "__comma", ["'"]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", [])]), "__comma", ["')"])]);return smalltalk.send(self, "_currentItem_", [smalltalk.send((smalltalk.HMIelement || HMIelement), "_new", [])]);})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Select item to delete"]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Removed Item "]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", [])])]);smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send("@remove #(WebHMIElement RemoveByName: ", "__comma", ["'"]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", [])]), "__comma", ["')"])]);return smalltalk.send(self, "_currentItem_", [smalltalk.send((smalltalk.HMIelement || HMIelement), "_new", [])]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Select item to delete"]);})]));
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_enableMoving",
smalltalk.method({
selector: "enableMoving",
fn: function (){
var self=this;
return self['@moveAccess'];
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_enableMoving_",
smalltalk.method({
selector: "enableMoving:",
fn: function (value){
var self=this;
(self['@moveAccess']=value);
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_field",
smalltalk.method({
selector: "field",
fn: function (){
var self=this;
return self['@field'];
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_field_",
smalltalk.method({
selector: "field:",
fn: function (aRaphaelField){
var self=this;
(($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@field'], "_setFinish", []);})() : nil;
(self['@field']=aRaphaelField);
smalltalk.send(self['@field'], "_setStart", []);
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_removeFormHTML",
smalltalk.method({
selector: "removeFormHTML",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("Click%20item%20to%20select%2C%20than%20click%20%27%20Remove%20%27%20to%20remove%20it%20%3Cbr%3E"), "__comma", [unescape("%3Cdiv%20id%3D%22selected%22%3E%3C/div%3E")]), "__comma", [unescape("%3Cform%3E")]), "__comma", [unescape("%09%3Cinput%20id%3D%22remove%22%20class%3D%27actionButton%27%20type%3D%22button%22%20value%3D%22%22%20onclick%3D%22%20smalltalk.WebHMI._delItem%28%29%22%3E")]), "__comma", [unescape("%3C/form%3E")]), "__comma", [unescape("%3Cdiv%20id%3D%22info%22%3E%3C/div%3E")]);
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
fn: function (){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_workSpaceId", [])]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return (($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@field'], "_setSize_value_", [((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);})() : nil;})() : nil;
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_scale",
smalltalk.method({
selector: "scale",
fn: function (){
var self=this;
(($receiver = self['@scale']) == nil || $receiver == undefined) ? (function(){return (self['@scale']=(0));})() : $receiver;
return self['@scale'];
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_scale_",
smalltalk.method({
selector: "scale:",
fn: function (aVal){
var self=this;
var p=nil;
(p=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["scaleVal"]));
(($receiver = p) != nil && $receiver != undefined) ? (function(){return (($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(p, "_innerHTML_", [smalltalk.send(smalltalk.send("Scale ", "__comma", [((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver /((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver +aVal : smalltalk.send($receiver, "__plus", [aVal])) : smalltalk.send($receiver, "__slash", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver +aVal : smalltalk.send($receiver, "__plus", [aVal]))]))).klass === smalltalk.Number) ? $receiver *(100) : smalltalk.send($receiver, "__star", [(100)]))]), "__comma", ["%"])]);})() : nil;})() : nil;
(self['@scale']=aVal);
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_setHeight_",
smalltalk.method({
selector: "setHeight:",
fn: function (aHeight){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_workSpaceId", [])]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return (($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){return ((($receiver = ((($receiver = ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))).klass === smalltalk.Number) ? $receiver >aHeight : smalltalk.send($receiver, "__gt", [aHeight]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@field'], "_setSize_value_", [smalltalk.send(self['@field'], "_width", []), ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);})() : (function(){return smalltalk.send(self['@field'], "_setSize_value_", [smalltalk.send(self['@field'], "_width", []), aHeight]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@field'], "_setSize_value_", [smalltalk.send(self['@field'], "_width", []), ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);}), (function(){return smalltalk.send(self['@field'], "_setSize_value_", [smalltalk.send(self['@field'], "_width", []), aHeight]);})]));})() : nil;})() : nil;
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_setViewBox_atY_width_height_",
smalltalk.method({
selector: "setViewBox:atY:width:height:",
fn: function (x, y, w, h){
var self=this;
(($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@field'], "_setViewBox_value_width_height_fl_", [x, y, ((($receiver = smalltalk.send(self['@field'], "_width", [])).klass === smalltalk.Number) ? $receiver +w : smalltalk.send($receiver, "__plus", [w])), ((($receiver = smalltalk.send(self['@field'], "_height", [])).klass === smalltalk.Number) ? $receiver +h : smalltalk.send($receiver, "__plus", [h])), false]);})() : nil;
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_setWidth_",
smalltalk.method({
selector: "setWidth:",
fn: function (aWidth){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_workSpaceId", [])]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return (($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){return ((($receiver = ((($receiver = ((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))).klass === smalltalk.Number) ? $receiver >aWidth : smalltalk.send($receiver, "__gt", [aWidth]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@field'], "_setSize_value_", [((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), smalltalk.send(self['@field'], "_height", [])]);})() : (function(){return smalltalk.send(self['@field'], "_setSize_value_", [aWidth, smalltalk.send(self['@field'], "_height", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@field'], "_setSize_value_", [((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), smalltalk.send(self['@field'], "_height", [])]);}), (function(){return smalltalk.send(self['@field'], "_setSize_value_", [aWidth, smalltalk.send(self['@field'], "_height", [])]);})]));})() : nil;})() : nil;
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_workSpaceId",
smalltalk.method({
selector: "workSpaceId",
fn: function (){
var self=this;
(($receiver = self['@paperId']) == nil || $receiver == undefined) ? (function(){return (self['@paperId']="workspace");})() : $receiver;
return self['@paperId'];
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_workSpaceId_",
smalltalk.method({
selector: "workSpaceId:",
fn: function (aId){
var self=this;
(self['@paperId']=aId);
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_zoomIn",
smalltalk.method({
selector: "zoomIn",
fn: function (){
var self=this;
(($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){smalltalk.send(self, "_scale_", [((($receiver = smalltalk.send(self, "_scale", [])).klass === smalltalk.Number) ? $receiver +(20) : smalltalk.send($receiver, "__plus", [(20)]))]);smalltalk.send(self, "_setViewBox_atY_width_height_", [(0), (0), smalltalk.send(self, "_scale", []), smalltalk.send(self, "_scale", [])]);smalltalk.send(self, "_setHeight_", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_height", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);return smalltalk.send(self, "_setWidth_", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);})() : nil;
return self;}
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_zoomOut",
smalltalk.method({
selector: "zoomOut",
fn: function (){
var self=this;
(($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){smalltalk.send(self, "_scale_", [((($receiver = smalltalk.send(self, "_scale", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);smalltalk.send(self, "_setViewBox_atY_width_height_", [(0), (0), smalltalk.send(self, "_scale", []), smalltalk.send(self, "_scale", [])]);smalltalk.send(self, "_setHeight_", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_height", [])).klass === smalltalk.Number) ? $receiver +(20) : smalltalk.send($receiver, "__plus", [(20)]))]);return smalltalk.send(self, "_setWidth_", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver +(20) : smalltalk.send($receiver, "__plus", [(20)]))]);})() : nil;
return self;}
}),
smalltalk.WebHMI.klass);


smalltalk.addClass('WebHMIClient', smalltalk.Object, ['commander', 'ui'], 'HMI');
smalltalk.addMethod(
"_commander",
smalltalk.method({
selector: "commander",
fn: function (){
var self=this;
return self['@commander'];
return self;}
}),
smalltalk.WebHMIClient);

smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
fn: function (){
var self=this;
var address=nil;
(function($rec){smalltalk.send($rec, "_show_", ["Connecting to server..."]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
(address=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["ServerAddress"]));
(($receiver = address) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_initClientOn_", [smalltalk.send(smalltalk.send("ws://", "__comma", [smalltalk.send(address, "_value", [])]), "__comma", ["/broadcast"])]);})() : nil;
return self;}
}),
smalltalk.WebHMIClient);

smalltalk.addMethod(
"_initClientOn_",
smalltalk.method({
selector: "initClientOn:",
fn: function (anAddressWithPort){
var self=this;
(self['@commander']=smalltalk.send((smalltalk.WebHMICommandProcessor || WebHMICommandProcessor), "_new", []));
smalltalk.send(self['@commander'], "_baseClient_", [self]);
socket = new WebSocket(anAddressWithPort); ;
socket.onopen = function() { alert('Connection has been made successfuly');;
smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_getSchemeCommand", [])]);
};
socket.onmessage = function (evt) { ;
smalltalk.send(smalltalk.send(self, "_commander", []), "_processMessage_", [smalltalk.send((typeof evt == 'undefined' ? nil : evt), "_data", [])]);
};;
socket.onclose = function() { alert('Connection closed');};
return self;}
}),
smalltalk.WebHMIClient);

smalltalk.addMethod(
"_installGui_",
smalltalk.method({
selector: "installGui:",
fn: function (aWebHMIClientGui){
var self=this;
(self['@ui']=aWebHMIClientGui);
return self;}
}),
smalltalk.WebHMIClient);

smalltalk.addMethod(
"_instance",
smalltalk.method({
selector: "instance",
fn: function (){
var self=this;
return (typeof socket == 'undefined' ? nil : socket);
return self;}
}),
smalltalk.WebHMIClient);

smalltalk.addMethod(
"_interface",
smalltalk.method({
selector: "interface",
fn: function (){
var self=this;
return self['@ui'];
return self;}
}),
smalltalk.WebHMIClient);


smalltalk.WebHMIClient.klass.iVarNames = ['socket'];

smalltalk.addClass('WebHMIClientGui', smalltalk.Object, ['netClient', 'field', 'htmlContent'], 'HMI');
smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
fn: function (){
var self=this;
var connect=nil;
(function($rec){smalltalk.send($rec, "_show_", ["Creating GUI..."]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
smalltalk.send(self, "_paper_", [smalltalk.send(self, "_preparePaper_", ["workspace"])]);
(self['@netClient']=smalltalk.send((smalltalk.WebHMIClient || WebHMIClient), "_new", []));
smalltalk.send(self['@netClient'], "_installGui_", [self]);
(connect=smalltalk.send("#ConnectButton", "_asJQuery", []));
smalltalk.send(connect, "_click_", [(function(){smalltalk.send(self['@netClient'], "_init", []);(self['@htmlContent']=smalltalk.send((smalltalk.WebHMIClientHTMLBuilder || WebHMIClientHTMLBuilder), "_new", []));return smalltalk.send(self['@htmlContent'], "_buildMainHtml", []);})]);
return self;}
}),
smalltalk.WebHMIClientGui);

smalltalk.addMethod(
"_paper",
smalltalk.method({
selector: "paper",
fn: function (){
var self=this;
return self['@field'];
return self;}
}),
smalltalk.WebHMIClientGui);

smalltalk.addMethod(
"_paper_",
smalltalk.method({
selector: "paper:",
fn: function (aPaper){
var self=this;
(self['@field']=aPaper);
return self;}
}),
smalltalk.WebHMIClientGui);

smalltalk.addMethod(
"_preparePaper_",
smalltalk.method({
selector: "preparePaper:",
fn: function (aId){
var self=this;
var div=nil;
(function($rec){smalltalk.send($rec, "_show_", ["Creating paper..."]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [aId]));
return smalltalk.send((smalltalk.Raphael || Raphael), "_value_value_value_", [div, ((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);
return self;}
}),
smalltalk.WebHMIClientGui);


smalltalk.WebHMIClientGui.klass.iVarNames = ['currentItem'];
smalltalk.addMethod(
"_currentItem",
smalltalk.method({
selector: "currentItem",
fn: function (){
var self=this;
(($receiver = self['@currentItem']) == nil || $receiver == undefined) ? (function(){return (self['@currentItem']=smalltalk.send((smalltalk.HMIelement || HMIelement), "_new", []));})() : $receiver;
return self['@currentItem'];
return self;}
}),
smalltalk.WebHMIClientGui.klass);

smalltalk.addMethod(
"_currentItem_",
smalltalk.method({
selector: "currentItem:",
fn: function (aItem){
var self=this;
var div=nil;
var text=nil;
var type=nil;
var onPath=nil;
var offPath=nil;
var remButton=nil;
(self['@currentItem']=aItem);
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["selected"]));
(text=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemName"]));
(type=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemTypeName"]));
(onPath=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemOnPath"]));
(offPath=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemOffPath"]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return smalltalk.send(div, "_innerHTML_", [smalltalk.send("Selected item - ", "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])])]);})() : nil;
(($receiver = text) != nil && $receiver != undefined) ? (function(){return smalltalk.send(text, "_value_", [smalltalk.send(self['@currentItem'], "_elName", [])]);})() : nil;
(($receiver = type) != nil && $receiver != undefined) ? (function(){return smalltalk.send(type, "_value_", [smalltalk.send(smalltalk.send(self['@currentItem'], "_elType", []), "_typeName", [])]);})() : nil;
(($receiver = onPath) != nil && $receiver != undefined) ? (function(){return smalltalk.send(onPath, "_value_", [smalltalk.send(smalltalk.send(self['@currentItem'], "_elType", []), "_on", [])]);})() : nil;
(($receiver = offPath) != nil && $receiver != undefined) ? (function(){return smalltalk.send(offPath, "_value_", [smalltalk.send(smalltalk.send(self['@currentItem'], "_elType", []), "_off", [])]);})() : nil;
return self;}
}),
smalltalk.WebHMIClientGui.klass);

smalltalk.addMethod(
"_currentItemRemove",
smalltalk.method({
selector: "currentItemRemove",
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_show_", ["Removing current item"]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
return self;}
}),
smalltalk.WebHMIClientGui.klass);

smalltalk.addMethod(
"_currentItemUpdate",
smalltalk.method({
selector: "currentItemUpdate",
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_show_", ["Removing current item"]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
return self;}
}),
smalltalk.WebHMIClientGui.klass);

smalltalk.addMethod(
"_newItemAdd",
smalltalk.method({
selector: "newItemAdd",
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_show_", ["Adding new item"]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
return self;}
}),
smalltalk.WebHMIClientGui.klass);


smalltalk.addClass('WebHMIClientHTMLBuilder', smalltalk.Object, [], 'HMI');
smalltalk.addMethod(
"_buildMainHtml",
smalltalk.method({
selector: "buildMainHtml",
fn: function (){
var self=this;
var addButton=nil;
var removeButton=nil;
var updateButton=nil;
var sidebarDiv=nil;
(function($rec){smalltalk.send($rec, "_show_", ["Generating main HTML..."]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
(addButton=smalltalk.send("#addItem", "_asJQuery", []));
smalltalk.send(addButton, "_click_", [(function(){return smalltalk.send(self, "_renderAddForm", []);})]);
(removeButton=smalltalk.send("#delItem", "_asJQuery", []));
smalltalk.send(removeButton, "_click_", [(function(){return smalltalk.send(self, "_renderRemoveForm", []);})]);
(updateButton=smalltalk.send("#chItem", "_asJQuery", []));
smalltalk.send(updateButton, "_click_", [(function(){return smalltalk.send(self, "_renderUpdateForm", []);})]);
smalltalk.send(self, "_renderAddForm", []);
return self;}
}),
smalltalk.WebHMIClientHTMLBuilder);

smalltalk.addMethod(
"_renderAddForm",
smalltalk.method({
selector: "renderAddForm",
fn: function (){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return smalltalk.send(div, "_innerHTML_", [smalltalk.send((smalltalk.WebHMIClientHTMLBuilder || WebHMIClientHTMLBuilder), "_formAddHtml", [])]);})() : nil;
return self;}
}),
smalltalk.WebHMIClientHTMLBuilder);

smalltalk.addMethod(
"_renderRemoveForm",
smalltalk.method({
selector: "renderRemoveForm",
fn: function (){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return smalltalk.send(div, "_innerHTML_", [smalltalk.send((smalltalk.WebHMIClientHTMLBuilder || WebHMIClientHTMLBuilder), "_formRemoveHtml", [])]);})() : nil;
return self;}
}),
smalltalk.WebHMIClientHTMLBuilder);

smalltalk.addMethod(
"_renderUpdateForm",
smalltalk.method({
selector: "renderUpdateForm",
fn: function (){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return smalltalk.send(div, "_innerHTML_", [smalltalk.send((smalltalk.WebHMIClientHTMLBuilder || WebHMIClientHTMLBuilder), "_formUpdateHtml", [])]);})() : nil;
return self;}
}),
smalltalk.WebHMIClientHTMLBuilder);


smalltalk.addMethod(
"_formAddHtml",
smalltalk.method({
selector: "formAddHtml",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("<form>", "__comma", ["<p>Item name:"]), "__comma", ["<input id=\x22itemName\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item type:"]), "__comma", ["<select id=\x22itemType\x22 class='inputField' value=\x22\x22>"]), "__comma", ["<option id=\x221\x22 value=\x22server\x22>Server</option>"]), "__comma", ["<option id=\x222\x22 value=\x22workstation\x22>Workstation</option>"]), "__comma", ["<option id=\x223\x22 value=\x22router\x22>Router</option>"]), "__comma", ["</select><br>"]), "__comma", ["<input id=\x22add\x22 class='actionButton'  type=\x22button\x22 value=\x22\x22 onclick=\x22 smalltalk.WebHMIClientGui._newItemAdd()\x22>"]), "__comma", ["</form>"]), "__comma", ["<div id=\x22info\x22></div>"]);
return self;}
}),
smalltalk.WebHMIClientHTMLBuilder.klass);

smalltalk.addMethod(
"_formRemoveHtml",
smalltalk.method({
selector: "formRemoveHtml",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Click item to select, than click ' Remove ' to remove it <br>", "__comma", ["<div id=\x22selected\x22></div>"]), "__comma", ["<form>"]), "__comma", ["\x09<input id=\x22remove\x22 class='actionButton' type=\x22button\x22 value=\x22\x22 onclick=\x22 smalltalk.WebHMIClientGui._currentItemRemove()\x22>"]), "__comma", ["</form>"]), "__comma", ["<div id=\x22info\x22></div>"]);
return self;}
}),
smalltalk.WebHMIClientHTMLBuilder.klass);

smalltalk.addMethod(
"_formUpdateHtml",
smalltalk.method({
selector: "formUpdateHtml",
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("<form>", "__comma", ["<p>Item name:"]), "__comma", ["<input id=\x22itemName\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item type name:"]), "__comma", ["<input id=\x22itemTypeName\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item switched on value:"]), "__comma", ["<input id=\x22itemOnPath\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item switched off value:"]), "__comma", ["<input id=\x22itemOffPath\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<input id=\x22change\x22 class='actionButton' type=\x22button\x22 value='' onclick=\x22 smalltalk.WebHMIClientGui._currentItemUpdate()\x22>"]), "__comma", ["</form>"]), "__comma", ["<div id=\x22info\x22></div>"]);
return self;}
}),
smalltalk.WebHMIClientHTMLBuilder.klass);


smalltalk.addClass('WebHMICommand', smalltalk.Object, [], 'HMI');

smalltalk.addMethod(
"_changeCommand",
smalltalk.method({
selector: "changeCommand",
fn: function (){
var self=this;
return "@change";
return self;}
}),
smalltalk.WebHMICommand.klass);

smalltalk.addMethod(
"_getSchemeCommand",
smalltalk.method({
selector: "getSchemeCommand",
fn: function (){
var self=this;
return "@getScheme";
return self;}
}),
smalltalk.WebHMICommand.klass);

smalltalk.addMethod(
"_infoCommand",
smalltalk.method({
selector: "infoCommand",
fn: function (){
var self=this;
return "@info";
return self;}
}),
smalltalk.WebHMICommand.klass);

smalltalk.addMethod(
"_moveCommand",
smalltalk.method({
selector: "moveCommand",
fn: function (){
var self=this;
return "@moved";
return self;}
}),
smalltalk.WebHMICommand.klass);

smalltalk.addMethod(
"_paramsCommand",
smalltalk.method({
selector: "paramsCommand",
fn: function (){
var self=this;
return "@params";
return self;}
}),
smalltalk.WebHMICommand.klass);

smalltalk.addMethod(
"_removeCommand",
smalltalk.method({
selector: "removeCommand",
fn: function (){
var self=this;
return "@remove";
return self;}
}),
smalltalk.WebHMICommand.klass);

smalltalk.addMethod(
"_switchCommand",
smalltalk.method({
selector: "switchCommand",
fn: function (){
var self=this;
return "@switched";
return self;}
}),
smalltalk.WebHMICommand.klass);


smalltalk.addClass('WebHMICommandProcessor', smalltalk.Object, ['netclient', 'elements'], 'HMI');
smalltalk.addMethod(
"_baseClient",
smalltalk.method({
selector: "baseClient",
fn: function (){
var self=this;
return self['@netclient'];
return self;}
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_baseClient_",
smalltalk.method({
selector: "baseClient:",
fn: function (aWebHMIClient){
var self=this;
(function($rec){smalltalk.send($rec, "_show_", ["Creating commander..."]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
(self['@netclient']=aWebHMIClient);
return self;}
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
fn: function (){
var self=this;
(($receiver = self['@elements']) == nil || $receiver == undefined) ? (function(){return (self['@elements']=smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []));})() : $receiver;
return self['@elements'];
return self;}
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_elementsContains_",
smalltalk.method({
selector: "elementsContains:",
fn: function (aString){
var self=this;
var $early={};
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(el){return ((($receiver = smalltalk.send(smalltalk.send(el, "_elName", []), "__eq", [aString])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw $early=[true]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw $early=[true]})();})]));})]);
return false;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}}
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processInfoMessage_",
smalltalk.method({
selector: "processInfoMessage:",
fn: function (msg){
var self=this;
var resultElement=nil;
(function($rec){smalltalk.send($rec, "_show_", [msg]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
(resultElement=smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@info ", ""])]));
((($receiver = smalltalk.send(self, "_elementsContains_", [smalltalk.send(resultElement, "_elName", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []), "_add_", [smalltalk.send(resultElement, "_setParent_", [smalltalk.send(self, "_baseClient", [])])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []), "_add_", [smalltalk.send(resultElement, "_setParent_", [smalltalk.send(self, "_baseClient", [])])]);})]));
return self;}
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processMessage_",
smalltalk.method({
selector: "processMessage:",
fn: function (msg){
var self=this;
((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_infoCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processInfoMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processInfoMessage_", [msg]);})]));
((($receiver = ((($receiver = smalltalk.send(smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_switchCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_moveCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_paramsCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_removeCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})]));return ((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_changeCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_switchCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_moveCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_paramsCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_removeCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})]));return ((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_changeCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})]));})]));
return self;}
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processMovedMessage_",
smalltalk.method({
selector: "processMovedMessage:",
fn: function (msg){
var self=this;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@moved ", ""])]);
return self;}
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processParamChangeMessage_",
smalltalk.method({
selector: "processParamChangeMessage:",
fn: function (msg){
var self=this;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@change ", ""])]);
return self;}
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processParamsMessage_",
smalltalk.method({
selector: "processParamsMessage:",
fn: function (msg){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@params ", ""])]), "_drawOn_", [smalltalk.send((smalltalk.WebHMIClientGui || WebHMIClientGui), "_field", [])]);
return self;}
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processRemoveMessage_",
smalltalk.method({
selector: "processRemoveMessage:",
fn: function (msg){
var self=this;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@remove ", ""])]);
return self;}
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processSwitchedMessage_",
smalltalk.method({
selector: "processSwitchedMessage:",
fn: function (msg){
var self=this;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@switched ", ""])]);
return self;}
}),
smalltalk.WebHMICommandProcessor);



