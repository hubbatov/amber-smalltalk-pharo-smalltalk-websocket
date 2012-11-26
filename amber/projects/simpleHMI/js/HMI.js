smalltalk.addPackage('HMI', {});
smalltalk.addClass('CommandExecutor', smalltalk.Object, ['receiver'], 'HMI');

smalltalk.CommandExecutor.klass.iVarNames = ['reciever'];
smalltalk.addMethod(
"_doIt_",
smalltalk.method({
selector: "doIt:",
category: 'not yet classified',
fn: function (aString){
var self=this;
var $early={};
try{var compiler=nil;
(compiler=smalltalk.send((smalltalk.Compiler || Compiler), "_new", []));
smalltalk.send((function(){return smalltalk.send(compiler, "_parseExpression_", [aString]);}), "_on_do_", [(smalltalk.Error || Error), (function(ex){return (function(){throw $early=[smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send(ex, "_messageText", [])])]})();})]);
return smalltalk.send(smalltalk.send(smalltalk.send(compiler, "_eval_", [smalltalk.send(compiler, "_compile_forClass_", [smalltalk.send(smalltalk.send("doIt ^[", "__comma", [aString]), "__comma", ["] value"]), (smalltalk.DoIt || DoIt)])]), "_fn", []), "_applyTo_arguments_", [smalltalk.send(self, "_receiver", []), []]);
return self;
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["aString"],
source: "doIt: aString\x0a| compiler  |\x0a\x09compiler := Compiler new.\x0a\x09[compiler parseExpression: aString] on: Error do: [:ex |\x0a\x09\x09^window alert: ex messageText].\x0a\x09^(compiler eval: (compiler compile: 'doIt ^[', aString, '] value' forClass: DoIt)) fn applyTo: self receiver arguments: #()",
messageSends: ["new", "on:do:", "parseExpression:", "alert:", "messageText", "applyTo:arguments:", "fn", "eval:", "compile:forClass:", ",", "receiver"],
referencedClasses: ["Compiler", "Error", "DoIt"]
}),
smalltalk.CommandExecutor.klass);

smalltalk.addMethod(
"_receiver",
smalltalk.method({
selector: "receiver",
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = (typeof receiver == 'undefined' ? nil : receiver)) == nil || $receiver == undefined) ? (function(){return smalltalk.send((smalltalk.DoIt || DoIt), "_new", []);})() : $receiver;
return self;},
args: [],
source: "receiver\x0a\x09^receiver ifNil: [DoIt new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["DoIt"]
}),
smalltalk.CommandExecutor.klass);

smalltalk.addMethod(
"_receiver_",
smalltalk.method({
selector: "receiver:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
(receiver=anObject);
return self;},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.CommandExecutor.klass);


smalltalk.addClass('HMIelement', smalltalk.Object, ['state', 'elName', 'elType', 'element', 'xPos', 'yPos', 'text', 'elPicture', 'elPictureOn', 'elPictureOff', 'params', 'param1', 'usage', 'scene', 'socket', 'netClient'], 'HMI');
smalltalk.addMethod(
"_client",
smalltalk.method({
selector: "client",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@netClient'];
return self;},
args: [],
source: "client\x0a\x09^netClient",
messageSends: [],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_drawOn_",
smalltalk.method({
selector: "drawOn:",
category: 'not yet classified',
fn: function (aRaphaelPaper){
var self=this;
(self['@element']=smalltalk.send(aRaphaelPaper, "_image_onX_onY_w_h_", [smalltalk.send(self, "_elPicture", []), smalltalk.send(self, "_xPos", []), smalltalk.send(self, "_yPos", []), (128), (128)]));
(self['@text']=smalltalk.send(aRaphaelPaper, "_text_onY_text_", [((($receiver = smalltalk.send(self, "_xPos", [])).klass === smalltalk.Number) ? $receiver +(64) : smalltalk.send($receiver, "__plus", [(64)])), ((($receiver = smalltalk.send(self, "_yPos", [])).klass === smalltalk.Number) ? $receiver +(140) : smalltalk.send($receiver, "__plus", [(140)])), smalltalk.send(self, "_elName", [])]));
(self['@usage']=smalltalk.send(aRaphaelPaper, "_text_onY_text_", [((($receiver = smalltalk.send(self, "_xPos", [])).klass === smalltalk.Number) ? $receiver +(64) : smalltalk.send($receiver, "__plus", [(64)])), ((($receiver = smalltalk.send(self, "_yPos", [])).klass === smalltalk.Number) ? $receiver +(160) : smalltalk.send($receiver, "__plus", [(160)])), ""]));
(self['@scene']=aRaphaelPaper);
smalltalk.send(self, "_state_", [smalltalk.send(self, "_state", [])]);
return self;},
args: ["aRaphaelPaper"],
source: "drawOn: aRaphaelPaper\x0a\x09element := aRaphaelPaper image: ( self elPicture ) onX: self xPos onY: self yPos w: 128 h: 128.\x0a\x09text := aRaphaelPaper text: self xPos + 64 onY: (self yPos + 140) text: self elName.\x0a \x09usage := aRaphaelPaper text: self xPos + 64 onY: (self yPos + 160) text: ''.\x0a\x09scene := aRaphaelPaper.\x0a\x09self state: self state.",
messageSends: ["image:onX:onY:w:h:", "elPicture", "xPos", "yPos", "text:onY:text:", "+", "elName", "state:", "state"],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_elName",
smalltalk.method({
selector: "elName",
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = self['@elName']) == nil || $receiver == undefined) ? (function(){return "emptyName";})() : (function(){return self['@elName'];})();
return self;},
args: [],
source: "elName\x0a\x09^elName ifNil:[ 'emptyName'] ifNotNil: [elName]",
messageSends: ["ifNil:ifNotNil:"],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_elName_",
smalltalk.method({
selector: "elName:",
category: 'not yet classified',
fn: function (aName){
var self=this;
(self['@elName']=aName);
(($receiver = self['@text']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@text'], "_attr_value_", ["text", aName]);})() : nil;
return self;},
args: ["aName"],
source: "elName: aName\x0a\x09elName := aName.\x0a\x09text ifNotNil: [ text attr: 'text' value: aName ]",
messageSends: ["ifNotNil:", "attr:value:"],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_elPicture",
smalltalk.method({
selector: "elPicture",
category: 'not yet classified',
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(smalltalk.send(self, "_state", []), "__eq", ["on"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_elPicture', fn: function(){return smalltalk.send(smalltalk.send(self, "_elType", []), "_on", [])}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_elPicture', fn: function(){return smalltalk.send(smalltalk.send(self, "_elType", []), "_off", [])}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_elPicture', fn: function(){return smalltalk.send(smalltalk.send(self, "_elType", []), "_on", [])}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_elPicture', fn: function(){return smalltalk.send(smalltalk.send(self, "_elType", []), "_off", [])}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_elPicture'){return e.fn()} throw(e)}},
args: [],
source: "elPicture\x0a        (self state = 'on') ifTrue: [ ^self elType on ] ifFalse: [ ^self elType off ]",
messageSends: ["ifTrue:ifFalse:", "=", "state", "on", "elType", "off"],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_elType",
smalltalk.method({
selector: "elType",
category: 'not yet classified',
fn: function (){
var self=this;
(($receiver = self['@elType']) == nil || $receiver == undefined) ? (function(){return (self['@elType']=smalltalk.send((smalltalk.HMIelementType || HMIelementType), "_new", []));})() : $receiver;
return self['@elType'];
return self;},
args: [],
source: "elType\x0a\x09elType ifNil: [ elType := HMIelementType new ].\x0a\x09^elType",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HMIelementType"]
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_elType_",
smalltalk.method({
selector: "elType:",
category: 'not yet classified',
fn: function (aType){
var self=this;
(self['@elType']=aType);
(($receiver = self['@element']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@element'], "_attr_value_", ["src", smalltalk.send(self, "_elPicture", [])]);})() : nil;
return self;},
args: ["aType"],
source: "elType: aType\x0a\x09elType := aType.\x0a\x09element ifNotNil: [ element attr: 'src' value: ( self elPicture )]",
messageSends: ["ifNotNil:", "attr:value:", "elPicture"],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_element",
smalltalk.method({
selector: "element",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@element'];
return self;},
args: [],
source: "element\x0a\x09^element",
messageSends: [],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_setActions",
smalltalk.method({
selector: "setActions",
category: 'not yet classified',
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
return self;},
args: [],
source: "setActions\x0a| ox oy xFactor yFactor|\x0aox := ( element attr: 'x' ).\x0aoy := ( element attr: 'y' ).\x0axFactor := 1.\x0ayFactor := 1.\x0a\x0aelement drag: [ :dx :dy | (self client instance) send: '@changePos #(WebHMIElement elementFromCollection: ', '''', self elName, '''' , ' ) xPos:',  ( ox + dx ), ' yPos:',  ( oy + dy )] \x0a\x09\x09value: [  element attr: 'opacity' value: 1. ] \x0a\x09\x09value: [  ox := (xFactor / ( element attr: 'x' ) + ( element attr: 'x' )). oy := (yFactor / ( element attr: 'y' ) +  ( element attr: 'y' )). element attr: 'opacity' value: 0.8. ].\x0a\x0aelement dblclick: [ (self client instance) send: '@switch #(WebHMIElement elementFromCollection: ', '''', self elName, '''' , ' ) switch' ].\x0a\x0aelement click: [ WebHMIClientGui currentItem: self ]",
messageSends: ["attr:", "drag:value:value:", "send:", "instance", "client", ",", "elName", "+", "attr:value:", "/", "dblclick:", "click:", "currentItem:"],
referencedClasses: ["WebHMIClientGui"]
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_setParent_",
smalltalk.method({
selector: "setParent:",
category: 'not yet classified',
fn: function (aWebHMIClient){
var self=this;
(self['@netClient']=aWebHMIClient);
smalltalk.send(self, "_drawOn_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_client", []), "_interface", []), "_paper", [])]);
smalltalk.send(self, "_setActions", []);
return self;},
args: ["aWebHMIClient"],
source: "setParent: aWebHMIClient\x0a\x09netClient := aWebHMIClient.\x0a\x09self drawOn: ( self client interface paper ).\x0a\x09self setActions.",
messageSends: ["drawOn:", "paper", "interface", "client", "setActions"],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_state",
smalltalk.method({
selector: "state",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@state'];
return self;},
args: [],
source: "state\x0a\x09^state",
messageSends: [],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_state_",
smalltalk.method({
selector: "state:",
category: 'not yet classified',
fn: function (aState){
var self=this;
(self['@state']=aState);
(($receiver = self['@usage']) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_state", []), "__eq", ["on"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@usage'], "_attr_value_", ["text", "Loaded on: 0% "]);})() : (function(){return smalltalk.send(self['@usage'], "_attr_value_", ["text", "Is switched off"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@usage'], "_attr_value_", ["text", "Loaded on: 0% "]);}), (function(){return smalltalk.send(self['@usage'], "_attr_value_", ["text", "Is switched off"]);})]));})() : nil;
return self;},
args: ["aState"],
source: "state: aState\x0a\x09state := aState.\x0a\x09usage ifNotNil:[ \x0a\x09self state = 'on' \x0a\x09\x09ifTrue: [ usage attr: 'text' value: 'Loaded on: 0% ' ] \x0a\x09\x09ifFalse: [ usage attr: 'text' value: 'Is switched off']]",
messageSends: ["ifNotNil:", "ifTrue:ifFalse:", "=", "state", "attr:value:"],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_switch",
smalltalk.method({
selector: "switch",
category: 'not yet classified',
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_state", []), "__eq", ["on"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_state_", ["off"]);})() : (function(){return smalltalk.send(self, "_state_", ["on"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_state_", ["off"]);}), (function(){return smalltalk.send(self, "_state_", ["on"]);})]));
smalltalk.send(self['@element'], "_attr_value_", ["src", smalltalk.send(self, "_elPicture", [])]);
return self;},
args: [],
source: "switch\x0a\x09self state = 'on' ifTrue: [ self state: 'off'. ] ifFalse: [ self state: 'on'.].\x0a\x09element attr: 'src' value: ( self elPicture )",
messageSends: ["ifTrue:ifFalse:", "=", "state", "state:", "attr:value:", "elPicture"],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_text",
smalltalk.method({
selector: "text",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@text'];
return self;},
args: [],
source: "text\x0a\x09^text",
messageSends: [],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_usage",
smalltalk.method({
selector: "usage",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@usage'];
return self;},
args: [],
source: "usage\x0a\x09^usage",
messageSends: [],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_usage_",
smalltalk.method({
selector: "usage:",
category: 'not yet classified',
fn: function (anInteger){
var self=this;
(($receiver = self['@usage']) != nil && $receiver != undefined) ? (function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_state", []), "__eq", ["on"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@usage'], "_attr_value_", ["text", smalltalk.send(smalltalk.send("Loaded on: ", "__comma", [smalltalk.send(anInteger, "_asString", [])]), "__comma", ["%"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@usage'], "_attr_value_", ["text", smalltalk.send(smalltalk.send("Loaded on: ", "__comma", [smalltalk.send(anInteger, "_asString", [])]), "__comma", ["%"])]);})]));})() : nil;
return self;},
args: ["anInteger"],
source: "usage: anInteger\x0a\x09usage ifNotNil: [ self state = 'on' ifTrue: [ usage attr: 'text' value: 'Loaded on: ', anInteger asString, '%' ]]",
messageSends: ["ifNotNil:", "ifTrue:", "=", "state", "attr:value:", ",", "asString"],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_usingSocket_",
smalltalk.method({
selector: "usingSocket:",
category: 'not yet classified',
fn: function (aSocket){
var self=this;
(socket=aSocket);
return self;},
args: ["aSocket"],
source: "usingSocket: aSocket\x0a\x09socket := aSocket",
messageSends: [],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_xPos",
smalltalk.method({
selector: "xPos",
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = self['@xPos']) == nil || $receiver == undefined) ? (function(){return (0);})() : (function(){return self['@xPos'];})();
return self;},
args: [],
source: "xPos\x0a\x09^xPos ifNil: [0] ifNotNil:[xPos]",
messageSends: ["ifNil:ifNotNil:"],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_xPos_",
smalltalk.method({
selector: "xPos:",
category: 'not yet classified',
fn: function (aPos){
var self=this;
(self['@xPos']=aPos);
(($receiver = self['@element']) != nil && $receiver != undefined) ? (function(){smalltalk.send(self['@element'], "_attr_value_", ["x", self['@xPos']]);smalltalk.send(self['@text'], "_attr_value_", ["x", ((($receiver = self['@xPos']).klass === smalltalk.Number) ? $receiver +(64) : smalltalk.send($receiver, "__plus", [(64)]))]);return smalltalk.send(self['@usage'], "_attr_value_", ["x", ((($receiver = self['@xPos']).klass === smalltalk.Number) ? $receiver +(64) : smalltalk.send($receiver, "__plus", [(64)]))]);})() : nil;
return self;},
args: ["aPos"],
source: "xPos: aPos\x0a\x09xPos := aPos.\x0a        element ifNotNil: [ element attr: 'x' value: xPos. text attr: 'x' value: xPos + 64. usage attr: 'x' value: xPos + 64.]",
messageSends: ["ifNotNil:", "attr:value:", "+"],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_yPos",
smalltalk.method({
selector: "yPos",
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = self['@yPos']) == nil || $receiver == undefined) ? (function(){return (0);})() : (function(){return self['@yPos'];})();
return self;},
args: [],
source: "yPos\x0a\x09^yPos ifNil: [0] ifNotNil:[yPos]",
messageSends: ["ifNil:ifNotNil:"],
referencedClasses: []
}),
smalltalk.HMIelement);

smalltalk.addMethod(
"_yPos_",
smalltalk.method({
selector: "yPos:",
category: 'not yet classified',
fn: function (aPos){
var self=this;
(self['@yPos']=aPos);
(($receiver = self['@element']) != nil && $receiver != undefined) ? (function(){smalltalk.send(self['@element'], "_attr_value_", ["y", self['@yPos']]);smalltalk.send(self['@text'], "_attr_value_", ["y", ((($receiver = self['@yPos']).klass === smalltalk.Number) ? $receiver +(140) : smalltalk.send($receiver, "__plus", [(140)]))]);return smalltalk.send(self['@usage'], "_attr_value_", ["y", ((($receiver = self['@yPos']).klass === smalltalk.Number) ? $receiver +(160) : smalltalk.send($receiver, "__plus", [(160)]))]);})() : nil;
return self;},
args: ["aPos"],
source: "yPos: aPos\x0a\x09yPos := aPos.\x0a        element ifNotNil: [ element attr: 'y' value: yPos. text attr: 'y' value: yPos + 140. usage attr: 'y' value: yPos + 160.]",
messageSends: ["ifNotNil:", "attr:value:", "+"],
referencedClasses: []
}),
smalltalk.HMIelement);


smalltalk.HMIelement.klass.iVarNames = ['collection'];
smalltalk.addMethod(
"_clear",
smalltalk.method({
selector: "clear",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(each){return smalltalk.send((smalltalk.HMIelement || HMIelement), "_removeElement_", [each]);})]);
return self;},
args: [],
source: "clear\x0a\x09self elements do: [ :each |  HMIelement removeElement: each ].\x0a\x09",
messageSends: ["do:", "elements", "removeElement:"],
referencedClasses: ["HMIelement"]
}),
smalltalk.HMIelement.klass);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
category: 'not yet classified',
fn: function (){
var self=this;
(($receiver = self['@collection']) == nil || $receiver == undefined) ? (function(){return (self['@collection']=smalltalk.send((smalltalk.Array || Array), "_new", []));})() : $receiver;
return self['@collection'];
return self;},
args: [],
source: "elements\x0a\x09collection ifNil: [ collection := Array new ].\x0a\x09^collection",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.HMIelement.klass);

smalltalk.addMethod(
"_getElement_",
smalltalk.method({
selector: "getElement:",
category: 'not yet classified',
fn: function (aName){
var self=this;
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(el){return ((($receiver = smalltalk.send(smalltalk.send(el, "_elName", []), "__eq", [aName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_getElement_', fn: function(){return el}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_getElement_', fn: function(){return el}})})();})]));})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_getElement_'){return e.fn()} throw(e)}},
args: ["aName"],
source: "getElement: aName\x0a\x09(self elements) do: [ :el | (el elName = aName) ifTrue: [ ^el ]]",
messageSends: ["do:", "elements", "ifTrue:", "=", "elName"],
referencedClasses: []
}),
smalltalk.HMIelement.klass);

smalltalk.addMethod(
"_removeElement_",
smalltalk.method({
selector: "removeElement:",
category: 'not yet classified',
fn: function (aHMIelement){
var self=this;
smalltalk.send(smalltalk.send(aHMIelement, "_element", []), "_remove", []);
smalltalk.send(smalltalk.send(aHMIelement, "_text", []), "_remove", []);
smalltalk.send(smalltalk.send(aHMIelement, "_usage", []), "_remove", []);
smalltalk.send(smalltalk.send(self, "_elements", []), "_remove_", [aHMIelement]);
return self;},
args: ["aHMIelement"],
source: "removeElement: aHMIelement\x0a        aHMIelement element remove.\x0a        aHMIelement text remove.\x0a\x09aHMIelement usage remove.\x0a\x09self elements remove: aHMIelement.\x0a\x09\x09",
messageSends: ["remove", "element", "text", "usage", "remove:", "elements"],
referencedClasses: []
}),
smalltalk.HMIelement.klass);


smalltalk.addClass('HMIelementType', smalltalk.Object, ['on', 'off', 'name'], 'HMI');
smalltalk.addMethod(
"_off",
smalltalk.method({
selector: "off",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@off'];
return self;},
args: [],
source: "off\x0a\x09^off",
messageSends: [],
referencedClasses: []
}),
smalltalk.HMIelementType);

smalltalk.addMethod(
"_off_",
smalltalk.method({
selector: "off:",
category: 'not yet classified',
fn: function (aPath){
var self=this;
(self['@off']=aPath);
return self;},
args: ["aPath"],
source: "off: aPath\x0a\x09off := aPath",
messageSends: [],
referencedClasses: []
}),
smalltalk.HMIelementType);

smalltalk.addMethod(
"_on",
smalltalk.method({
selector: "on",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@on'];
return self;},
args: [],
source: "on\x0a\x09^on",
messageSends: [],
referencedClasses: []
}),
smalltalk.HMIelementType);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'not yet classified',
fn: function (aPath){
var self=this;
(self['@on']=aPath);
return self;},
args: ["aPath"],
source: "on: aPath\x0a\x09on := aPath",
messageSends: [],
referencedClasses: []
}),
smalltalk.HMIelementType);

smalltalk.addMethod(
"_typeName",
smalltalk.method({
selector: "typeName",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@name'];
return self;},
args: [],
source: "typeName\x0a\x09^name",
messageSends: [],
referencedClasses: []
}),
smalltalk.HMIelementType);

smalltalk.addMethod(
"_typeName_",
smalltalk.method({
selector: "typeName:",
category: 'not yet classified',
fn: function (aName){
var self=this;
(self['@name']=aName);
return self;},
args: ["aName"],
source: "typeName: aName\x0a\x09name := aName",
messageSends: [],
referencedClasses: []
}),
smalltalk.HMIelementType);


smalltalk.HMIelementType.klass.iVarNames = ['collection'];
smalltalk.addMethod(
"_getType_",
smalltalk.method({
selector: "getType:",
category: 'not yet classified',
fn: function (aTypeName){
var self=this;
try{smalltalk.send(self['@collection'], "_do_", [(function(t){return ((($receiver = smalltalk.send(smalltalk.send(t, "_typeName", []), "__eq", [aTypeName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_getType_', fn: function(){return t}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_getType_', fn: function(){return t}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_getType_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_getType_'){return e.fn()} throw(e)}},
args: ["aTypeName"],
source: "getType: aTypeName\x0a\x09collection do: [ :t| t typeName = aTypeName ifTrue: [ ^t ] ].\x0a\x09^false",
messageSends: ["do:", "ifTrue:", "=", "typeName"],
referencedClasses: []
}),
smalltalk.HMIelementType.klass);

smalltalk.addMethod(
"_types",
smalltalk.method({
selector: "types",
category: 'not yet classified',
fn: function (){
var self=this;
(($receiver = self['@collection']) == nil || $receiver == undefined) ? (function(){return (self['@collection']=smalltalk.send((smalltalk.Array || Array), "_new", []));})() : $receiver;
return self['@collection'];
return self;},
args: [],
source: "types\x0a\x09collection ifNil: [ collection := Array new ].\x0a       ^collection",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.HMIelementType.klass);


smalltalk.addClass('WebHMI', smalltalk.Object, ['field', 'elements', 'socketCreated'], 'HMI');
smalltalk.addMethod(
"_createSocket",
smalltalk.method({
selector: "createSocket",
category: 'not yet classified',
fn: function (){
var self=this;
socket = new WebSocket("ws://localhost:9898/broadcast"); ;
socket.onopen = function() { alert('Connection has been made successfuly');;
smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", ["@getScheme"]);
};
socket.onmessage = function (evt) { ;
smalltalk.send(self, "_processMessage_", [smalltalk.send((typeof evt == 'undefined' ? nil : evt), "_data", [])]);
};;
return self;},
args: [],
source: "createSocket\x0a<socket = new WebSocket(\x22ws://localhost:9898/broadcast\x22); >.\x0a<socket.onopen = function() { alert('Connection has been made successfuly');>.\x0asocket send: '@getScheme'.\x0a<}>.\x0a<socket.onmessage = function (evt) { >.\x0a    self processMessage: (evt data).\x0a<};>.",
messageSends: ["send:", "processMessage:", "data"],
referencedClasses: []
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_createSocket_",
smalltalk.method({
selector: "createSocket:",
category: 'not yet classified',
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
return self;},
args: ["aString"],
source: "createSocket: aString\x0a\x0a<socket = new WebSocket(aString); >.\x0a<socket.onopen = function() { alert('Connection has been made successfuly');>.\x0asocket send: '@getScheme'.\x0a<}>.\x0a<socket.onmessage = function (evt) { >.\x0a    self processMessage: (evt data).\x0a<};>.\x0a<socket.onclose = function() { alert('Connection closed');}>.\x0asocketCreated := true.",
messageSends: ["send:", "processMessage:", "data"],
referencedClasses: []
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
category: 'not yet classified',
fn: function (){
var self=this;
(($receiver = self['@elements']) == nil || $receiver == undefined) ? (function(){return (self['@elements']=smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []));})() : $receiver;
return self['@elements'];
return self;},
args: [],
source: "elements \x0a\x09elements ifNil: [ elements := HMIelement elements ].\x0a\x09^elements",
messageSends: ["ifNil:", "elements"],
referencedClasses: ["HMIelement"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_elementsContains_",
smalltalk.method({
selector: "elementsContains:",
category: 'not yet classified',
fn: function (aString){
var self=this;
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(el){return ((($receiver = smalltalk.send(smalltalk.send(el, "_elName", []), "__eq", [aString])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_elementsContains_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_elementsContains_', fn: function(){return true}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_elementsContains_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_elementsContains_'){return e.fn()} throw(e)}},
args: ["aString"],
source: "elementsContains: aString\x0a\x09self elements do: [ : el | el elName = aString ifTrue: [^ true]].\x0a\x09^false",
messageSends: ["do:", "elements", "ifTrue:", "=", "elName"],
referencedClasses: []
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_prepareWorkField_",
smalltalk.method({
selector: "prepareWorkField:",
category: 'not yet classified',
fn: function (aId){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [aId]));
return smalltalk.send((smalltalk.Raphael || Raphael), "_value_value_value_", [div, ((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);
return self;},
args: ["aId"],
source: "prepareWorkField: aId\x0a|div|\x0adiv := document getElementById: aId.\x0a^(Raphael value: div value: ( div clientWidth - 20 ) value: ( div clientHeight -  20))",
messageSends: ["getElementById:", "value:value:value:", "-", "clientWidth", "clientHeight"],
referencedClasses: ["Raphael"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processInfoMessage_",
smalltalk.method({
selector: "processInfoMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
var tmp=nil;
(tmp=smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@info ", ""])]));
((($receiver = smalltalk.send(self, "_elementsContains_", [smalltalk.send(tmp, "_elName", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []), "_add_", [(function($rec){smalltalk.send($rec, "_usingSocket_", [(typeof socket == 'undefined' ? nil : socket)]);return smalltalk.send($rec, "_drawOn_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", [])]);})(tmp)]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []), "_add_", [(function($rec){smalltalk.send($rec, "_usingSocket_", [(typeof socket == 'undefined' ? nil : socket)]);return smalltalk.send($rec, "_drawOn_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", [])]);})(tmp)]);})]));
return self;},
args: ["msg"],
source: "processInfoMessage: msg\x0a|tmp|\x0atmp := (CommandExecutor doIt: (msg replace: '@info ' with: '')).\x0a(self elementsContains: ( tmp elName )) ifFalse: [ HMIelement elements add: (tmp usingSocket: socket ; drawOn: (WebHMI field))]",
messageSends: ["doIt:", "replace:with:", "ifFalse:", "elementsContains:", "elName", "add:", "elements", "usingSocket:", "drawOn:", "field"],
referencedClasses: ["CommandExecutor", "HMIelement", "WebHMI"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processMessage_",
smalltalk.method({
selector: "processMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
((($receiver = smalltalk.send(msg, "_match_", [unescape("@info")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processInfoMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processInfoMessage_", [msg]);})]));
((($receiver = ((($receiver = smalltalk.send(smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){((($receiver = smalltalk.send(msg, "_match_", [unescape("@switched")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [unescape("@moved")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [unescape("@params")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [unescape("@remove")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})]));return ((($receiver = smalltalk.send(msg, "_match_", [unescape("@change")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){((($receiver = smalltalk.send(msg, "_match_", [unescape("@switched")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [unescape("@moved")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [unescape("@params")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [unescape("@remove")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})]));return ((($receiver = smalltalk.send(msg, "_match_", [unescape("@change")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})]));})]));
return self;},
args: ["msg"],
source: "processMessage: msg\x0a(msg match: '@info')  ifTrue: [ self processInfoMessage: msg ].\x0aHMIelement elements size > 0 ifTrue: [\x0a(msg match: '@switched')  ifTrue: [ self processSwitchedMessage: msg ].\x0a(msg match: '@moved')  ifTrue: [ self processMovedMessage: msg ].\x0a(msg match: '@params')  ifTrue: [ self processParamsMessage: msg ].\x0a(msg match: '@remove')  ifTrue: [ self processRemoveMessage: msg ].\x0a(msg match: '@change')  ifTrue: [ self processParamChangeMessage: msg ]]",
messageSends: ["ifTrue:", "match:", "processInfoMessage:", ">", "size", "elements", "processSwitchedMessage:", "processMovedMessage:", "processParamsMessage:", "processRemoveMessage:", "processParamChangeMessage:"],
referencedClasses: ["HMIelement"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processMovedMessage_",
smalltalk.method({
selector: "processMovedMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
var tmp=nil;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", [unescape("@moved%20"), ""])]);
return self;},
args: ["msg"],
source: "processMovedMessage: msg\x0a|tmp|\x0aCommandExecutor doIt: (msg replace: '@moved ' with: '')",
messageSends: ["doIt:", "replace:with:"],
referencedClasses: ["CommandExecutor"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processParamChangeMessage_",
smalltalk.method({
selector: "processParamChangeMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", [unescape("@change%20"), ""])]);
return self;},
args: ["msg"],
source: "processParamChangeMessage: msg\x0a(CommandExecutor doIt: (msg replace: '@change ' with: '')) .",
messageSends: ["doIt:", "replace:with:"],
referencedClasses: ["CommandExecutor"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processParamsMessage_",
smalltalk.method({
selector: "processParamsMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
var tmp=nil;
smalltalk.send(smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", [unescape("@params%20"), ""])]), "_drawOn_", [self['@field']]);
return self;},
args: ["msg"],
source: "processParamsMessage: msg\x0a|tmp|\x0a(CommandExecutor doIt: (msg replace: '@params ' with: '')) drawOn: field.",
messageSends: ["drawOn:", "doIt:", "replace:with:"],
referencedClasses: ["CommandExecutor"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processRemoveMessage_",
smalltalk.method({
selector: "processRemoveMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", [unescape("@remove%20"), ""])]);
return self;},
args: ["msg"],
source: "processRemoveMessage: msg\x0aCommandExecutor doIt: (msg replace: '@remove ' with: '')",
messageSends: ["doIt:", "replace:with:"],
referencedClasses: ["CommandExecutor"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_processSwitchedMessage_",
smalltalk.method({
selector: "processSwitchedMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
var tmp=nil;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", [unescape("@switched%20"), ""])]);
return self;},
args: ["msg"],
source: "processSwitchedMessage: msg\x0a|tmp|\x0aCommandExecutor doIt: (msg replace: '@switched ' with: '')",
messageSends: ["doIt:", "replace:with:"],
referencedClasses: ["CommandExecutor"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_reconnect",
smalltalk.method({
selector: "reconnect",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_start", []);
return self;},
args: [],
source: "reconnect\x0a\x09self start.",
messageSends: ["start"],
referencedClasses: []
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_showAddForm",
smalltalk.method({
selector: "showAddForm",
category: 'not yet classified',
fn: function (){
var self=this;
var div=nil;
var addButton=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
smalltalk.send(div, "_innerHTML_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_addFormHTML", [])]);
return self;},
args: [],
source: "showAddForm\x0a|div addButton|\x0adiv := document getElementById: 'sidebar'.\x0adiv innerHTML: (WebHMI addFormHTML)",
messageSends: ["getElementById:", "innerHTML:", "addFormHTML"],
referencedClasses: ["WebHMI"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_showChangeForm",
smalltalk.method({
selector: "showChangeForm",
category: 'not yet classified',
fn: function (){
var self=this;
var div=nil;
var addButton=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
smalltalk.send(div, "_innerHTML_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_changeFormHTML", [])]);
return self;},
args: [],
source: "showChangeForm\x0a|div addButton|\x0adiv := document getElementById: 'sidebar'.\x0adiv innerHTML: (WebHMI changeFormHTML)",
messageSends: ["getElementById:", "innerHTML:", "changeFormHTML"],
referencedClasses: ["WebHMI"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_showRemForm",
smalltalk.method({
selector: "showRemForm",
category: 'not yet classified',
fn: function (){
var self=this;
var div=nil;
var remButton=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
smalltalk.send(div, "_innerHTML_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_removeFormHTML", [])]);
return self;},
args: [],
source: "showRemForm\x0a|div remButton|\x0adiv := document getElementById: 'sidebar'.\x0adiv innerHTML: (WebHMI removeFormHTML)",
messageSends: ["getElementById:", "innerHTML:", "removeFormHTML"],
referencedClasses: ["WebHMI"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
category: 'not yet classified',
fn: function (){
var self=this;
var adress=nil;
smalltalk.send((smalltalk.WebHMI || WebHMI), "_field_", [smalltalk.send(self, "_prepareWorkField_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_workSpaceId", [])])]);
(adress=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["ServerAddress"]));
(($receiver = adress) != nil && $receiver != undefined) ? (function(){smalltalk.send(self, "_createSocket_", [smalltalk.send(smalltalk.send("ws://", "__comma", [smalltalk.send(adress, "_value", [])]), "__comma", ["/broadcast"])]);return smalltalk.send(adress, "_hidden_", [true]);})() : nil;
return self;},
args: [],
source: "start\x0a|adress |\x0a\x0aWebHMI field: ( self prepareWorkField: (WebHMI workSpaceId)).\x0a\x0aadress := document getElementById: 'ServerAddress'.\x0a\x09adress ifNotNil: [\x0a         \x09self createSocket: 'ws://', adress value,'/broadcast'. adress hidden: true.].\x0a\x0a\x0a\x0a",
messageSends: ["field:", "prepareWorkField:", "workSpaceId", "getElementById:", "ifNotNil:", "createSocket:", ",", "value", "hidden:"],
referencedClasses: ["WebHMI"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_startAdmin",
smalltalk.method({
selector: "startAdmin",
category: 'not yet classified',
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
return self;},
args: [],
source: "startAdmin\x0a|addButt remButt clearButt chButt connect sidebar|\x0a\x0aWebHMI workSpaceId: 'workspace'.\x0aWebHMI enableMoving: true.\x0aaddButt := '#addItem' asJQuery.\x0aaddButt hide.\x0aaddButt click: [  self showAddForm. ].\x0aremButt := '#delItem' asJQuery.\x0aremButt hide.\x0aremButt click: [  self showRemForm ].\x0achButt := '#chItem' asJQuery.\x0achButt hide.\x0achButt click: [ self showChangeForm ].\x0asidebar := '#sidebar' asJQuery.\x0asidebar hide.\x0a\x0aconnect := '#ConnectButton' asJQuery.\x0aconnect click: [ self reconnect. connect hide. addButt show. remButt show. chButt show. self showAddForm. sidebar show.].",
messageSends: ["workSpaceId:", "enableMoving:", "asJQuery", "hide", "click:", "showAddForm", "showRemForm", "showChangeForm", "reconnect", "show"],
referencedClasses: ["WebHMI"]
}),
smalltalk.WebHMI);

smalltalk.addMethod(
"_startClient",
smalltalk.method({
selector: "startClient",
category: 'not yet classified',
fn: function (){
var self=this;
var connect=nil;
smalltalk.send((smalltalk.WebHMI || WebHMI), "_workSpaceId_", ["workspace_client"]);
smalltalk.send((smalltalk.WebHMI || WebHMI), "_enableMoving_", [false]);
(connect=smalltalk.send("#ConnectButton", "_asJQuery", []));
smalltalk.send(connect, "_click_", [(function(){smalltalk.send(self, "_reconnect", []);return smalltalk.send(connect, "_hide", []);})]);
return self;},
args: [],
source: "startClient\x0a|connect|\x0a\x0aWebHMI workSpaceId: 'workspace_client'.\x0aWebHMI enableMoving: false.\x0a\x0aconnect := '#ConnectButton' asJQuery.\x0aconnect click: [ self reconnect. connect hide. ].\x0a",
messageSends: ["workSpaceId:", "enableMoving:", "asJQuery", "click:", "reconnect", "hide"],
referencedClasses: ["WebHMI"]
}),
smalltalk.WebHMI);


smalltalk.WebHMI.klass.iVarNames = ['currentItem','field','scale','moveAccess','paperId'];
smalltalk.addMethod(
"_addFormHTML",
smalltalk.method({
selector: "addFormHTML",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("<form>", "__comma", ["<p>Item name:"]), "__comma", ["<input id=\x22itemName\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item type:"]), "__comma", ["<select id=\x22itemType\x22 class='inputField' value=\x22\x22>"]), "__comma", ["<option id=\x221\x22 value=\x22server\x22>Server</option>"]), "__comma", ["<option id=\x222\x22 value=\x22workstation\x22>Workstation</option>"]), "__comma", ["<option id=\x223\x22 value=\x22router\x22>Router</option>"]), "__comma", ["</select><br>"]), "__comma", ["<input id=\x22add\x22 class='actionButton'  type=\x22button\x22 value=\x22\x22 onclick=\x22 smalltalk.WebHMI._addItem()\x22>"]), "__comma", ["</form>"]), "__comma", ["<div id=\x22info\x22></div>"]);
return self;},
args: [],
source: "addFormHTML\x0a^\x0a'<form>',\x0a\x09'<p>Item name:',\x0a \x09'<input id=\x22itemName\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<p>Item type:',\x0a\x09'<select id=\x22itemType\x22 class=''inputField'' value=\x22\x22>',\x0a\x09\x09'<option id=\x221\x22 value=\x22server\x22>Server</option>',\x0a\x09\x09'<option id=\x222\x22 value=\x22workstation\x22>Workstation</option>',\x0a\x09\x09'<option id=\x223\x22 value=\x22router\x22>Router</option>',\x0a\x09'</select><br>',\x0a\x09'<input id=\x22add\x22 class=''actionButton''  type=\x22button\x22 value=\x22\x22 onclick=\x22 smalltalk.WebHMI._addItem()\x22>',\x0a'</form>',\x0a'<div id=\x22info\x22></div>'.",
messageSends: [","],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_addItem",
smalltalk.method({
selector: "addItem",
category: 'not yet classified',
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
return self;},
args: [],
source: "addItem\x0a|div itemName itemType err|\x0aitemName := document getElementById: 'itemName'.\x0aitemType := document getElementById: 'itemType'.\x0adiv := document getElementById: 'sidebar'.\x0aitemName value > 0 ifTrue: [\x0a                      div innerHTML: ( div innerHTML ,'<br>Added Item ', itemName value, ' ' ,itemType value ).\x0a                      socket send: '@add #(WebHMIElement Add: (WebHMIElement new createElement:  ', '''' ,itemName value, '''', ' withType: (WebHMIElementType ', itemType value, ')))']\x0a                                     ifFalse: [ window alert: 'Field ''Name'' must be not empty' ]",
messageSends: ["getElementById:", "ifTrue:ifFalse:", ">", "value", "innerHTML:", ",", "innerHTML", "send:", "alert:"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_changeFormHTML",
smalltalk.method({
selector: "changeFormHTML",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("<form>", "__comma", ["<p>Item name:"]), "__comma", ["<input id=\x22itemName\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item type name:"]), "__comma", ["<input id=\x22itemTypeName\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item switched on value:"]), "__comma", ["<input id=\x22itemOnPath\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item switched off value:"]), "__comma", ["<input id=\x22itemOffPath\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<input id=\x22change\x22 class='actionButton' type=\x22button\x22 value='' onclick=\x22 smalltalk.WebHMI._changeItem()\x22>"]), "__comma", ["</form>"]), "__comma", ["<div id=\x22info\x22></div>"]);
return self;},
args: [],
source: "changeFormHTML\x0a^\x0a'<form>',\x0a\x09'<p>Item name:',\x0a\x09'<input id=\x22itemName\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<p>Item type name:',\x0a\x09'<input id=\x22itemTypeName\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<p>Item switched on value:',\x0a\x09'<input id=\x22itemOnPath\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<p>Item switched off value:',\x0a\x09'<input id=\x22itemOffPath\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<input id=\x22change\x22 class=''actionButton'' type=\x22button\x22 value='''' onclick=\x22 smalltalk.WebHMI._changeItem()\x22>',\x0a'</form>',\x0a'<div id=\x22info\x22></div>'.",
messageSends: [","],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_changeItem",
smalltalk.method({
selector: "changeItem",
category: 'not yet classified',
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
return self;},
args: [],
source: "changeItem\x0a|div itemName typeName onPic offPic |\x0aitemName := document getElementById: 'itemName'.\x0atypeName := document getElementById: 'itemTypeName'.\x0aonPic := document getElementById: 'itemOnPath'.\x0aoffPic := document getElementById: 'itemOffPath'.\x0adiv := document getElementById: 'sidebar'.\x0a\x0aitemName value size > 0 ifTrue: [\x0a\x09typeName value size > 0 ifTrue: [\x0a\x09\x09onPic value size > 0 ifTrue: [\x0a\x09\x09\x09offPic value size > 0 ifTrue: [\x0a\x0a\x09\x09\x09\x09socket send: '@changeParam #(WebHMIElement elementFromCollection: ' , '''' , currentItem elName, '''', ') elName:  ', '''' ,itemName value, '''', '; elType: ((WebHMIElementType new) typeName: ', '''' , typeName value,'''',  \x0a\x09\x09\x09\x09\x09\x09'; imageOn: ', '''', onPic value, '''', '; imageOff: ', '''', offPic value, '''', ')'.\x0a\x0a\x09\x09\x09\x09div innerHTML: ( div innerHTML ,'<br>Changed Item ', itemName value, ' ' , typeName value ) ]\x0a\x09\x09\x09ifFalse: [ window alert: 'Please check out empty fields' ]]\x0a\x09\x09ifFalse: [ window alert: 'Please check out empty fields' ]] \x0a\x09ifFalse: [ window alert: 'Please check out empty fields' ]]\x0aifFalse: [ window alert: 'Please check out empty fields' ]",
messageSends: ["getElementById:", "ifTrue:ifFalse:", ">", "size", "value", "send:", ",", "elName", "innerHTML:", "innerHTML", "alert:"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_currentItem",
smalltalk.method({
selector: "currentItem",
category: 'not yet classified',
fn: function (){
var self=this;
(($receiver = self['@currentItem']) == nil || $receiver == undefined) ? (function(){return (self['@currentItem']=smalltalk.send((smalltalk.HMIelement || HMIelement), "_new", []));})() : $receiver;
return self['@currentItem'];
return self;},
args: [],
source: "currentItem\x0a        currentItem ifNil: [ currentItem := HMIelement new ].\x0a\x09^currentItem",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HMIelement"]
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_currentItem_",
smalltalk.method({
selector: "currentItem:",
category: 'not yet classified',
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
return self;},
args: ["aItem"],
source: "currentItem: aItem\x0a|div text type onPath offPath remButton|\x0acurrentItem := aItem.\x0adiv := document getElementById: 'selected'.\x0atext := document getElementById: 'itemName'.\x0atype := document getElementById: 'itemTypeName'.\x0aonPath := document getElementById: 'itemOnPath'.\x0aoffPath := document getElementById: 'itemOffPath'.\x0adiv ifNotNil: [ div innerHTML: 'Selected item - ' , currentItem elName ].\x0atext ifNotNil: [ text value: currentItem elName ].\x0atype ifNotNil: [ type value: currentItem elType typeName ].\x0aonPath ifNotNil: [ onPath value: currentItem elType on ].\x0aoffPath ifNotNil: [ offPath value: currentItem elType off ].",
messageSends: ["getElementById:", "ifNotNil:", "innerHTML:", ",", "elName", "value:", "typeName", "elType", "on", "off"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_delItem",
smalltalk.method({
selector: "delItem",
category: 'not yet classified',
fn: function (){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", []), "__eq", ["emptyName"])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Removed Item "]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", [])])]);smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send("@remove #(WebHMIElement RemoveByName: ", "__comma", ["'"]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", [])]), "__comma", ["')"])]);return smalltalk.send(self, "_currentItem_", [smalltalk.send((smalltalk.HMIelement || HMIelement), "_new", [])]);})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Select item to delete"]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Removed Item "]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", [])])]);smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send("@remove #(WebHMIElement RemoveByName: ", "__comma", ["'"]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", [])]), "__comma", ["')"])]);return smalltalk.send(self, "_currentItem_", [smalltalk.send((smalltalk.HMIelement || HMIelement), "_new", [])]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Select item to delete"]);})]));
return self;},
args: [],
source: "delItem\x0a|div|\x0adiv := document getElementById: 'sidebar'.\x0a\x0a(self currentItem elName = 'emptyName') ifFalse: [\x0a\x09\x09div innerHTML: ( div innerHTML ,'<br>Removed Item ', self currentItem elName ).\x0a\x09\x09socket send: '@remove #(WebHMIElement RemoveByName: ', '''', self currentItem elName, ''')'.\x0a\x09\x09self currentItem: (HMIelement new) ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ window alert: 'Select item to delete' ]",
messageSends: ["getElementById:", "ifFalse:ifTrue:", "=", "elName", "currentItem", "innerHTML:", ",", "innerHTML", "send:", "currentItem:", "new", "alert:"],
referencedClasses: ["HMIelement"]
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_enableMoving",
smalltalk.method({
selector: "enableMoving",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@moveAccess'];
return self;},
args: [],
source: "enableMoving\x0a^moveAccess",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_enableMoving_",
smalltalk.method({
selector: "enableMoving:",
category: 'not yet classified',
fn: function (value){
var self=this;
(self['@moveAccess']=value);
return self;},
args: ["value"],
source: "enableMoving: value\x0amoveAccess := value.",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_field",
smalltalk.method({
selector: "field",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@field'];
return self;},
args: [],
source: "field\x0a ^field",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_field_",
smalltalk.method({
selector: "field:",
category: 'not yet classified',
fn: function (aRaphaelField){
var self=this;
(($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@field'], "_setFinish", []);})() : nil;
(self['@field']=aRaphaelField);
smalltalk.send(self['@field'], "_setStart", []);
return self;},
args: ["aRaphaelField"],
source: "field: aRaphaelField\x0a  field ifNotNil: [ field setFinish ].\x0a  field := aRaphaelField.\x0a  field setStart.",
messageSends: ["ifNotNil:", "setFinish", "setStart"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_removeFormHTML",
smalltalk.method({
selector: "removeFormHTML",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("Click%20item%20to%20select%2C%20than%20click%20%27%20Remove%20%27%20to%20remove%20it%20%3Cbr%3E"), "__comma", [unescape("%3Cdiv%20id%3D%22selected%22%3E%3C/div%3E")]), "__comma", [unescape("%3Cform%3E")]), "__comma", [unescape("%09%3Cinput%20id%3D%22remove%22%20class%3D%27actionButton%27%20type%3D%22button%22%20value%3D%22%22%20onclick%3D%22%20smalltalk.WebHMI._delItem%28%29%22%3E")]), "__comma", [unescape("%3C/form%3E")]), "__comma", [unescape("%3Cdiv%20id%3D%22info%22%3E%3C/div%3E")]);
return self;},
args: [],
source: "removeFormHTML\x0a^\x0a 'Click item to select, than click '' Remove '' to remove it <br>', \x0a'<div id=\x22selected\x22></div>',\x0a'<form>',\x0a'\x09<input id=\x22remove\x22 class=''actionButton'' type=\x22button\x22 value=\x22\x22 onclick=\x22 smalltalk.WebHMI._delItem()\x22>',\x0a'</form>',\x0a'<div id=\x22info\x22></div>'.",
messageSends: [","],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_resize",
smalltalk.method({
selector: "resize",
category: 'not yet classified',
fn: function (){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_workSpaceId", [])]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return (($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@field'], "_setSize_value_", [((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);})() : nil;})() : nil;
return self;},
args: [],
source: "resize\x0a|div|\x0adiv := document getElementById: (self workSpaceId).\x0adiv ifNotNil: [ \x0afield ifNotNil: [field setSize: ( div clientWidth - 20 ) value: ( div clientHeight -  20) ]]",
messageSends: ["getElementById:", "workSpaceId", "ifNotNil:", "setSize:value:", "-", "clientWidth", "clientHeight"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_scale",
smalltalk.method({
selector: "scale",
category: 'not yet classified',
fn: function (){
var self=this;
(($receiver = self['@scale']) == nil || $receiver == undefined) ? (function(){return (self['@scale']=(0));})() : $receiver;
return self['@scale'];
return self;},
args: [],
source: "scale\x0a scale ifNil: [ scale := 0 ].\x0a ^scale",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_scale_",
smalltalk.method({
selector: "scale:",
category: 'not yet classified',
fn: function (aVal){
var self=this;
var p=nil;
(p=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["scaleVal"]));
(($receiver = p) != nil && $receiver != undefined) ? (function(){return (($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(p, "_innerHTML_", [smalltalk.send(smalltalk.send("Scale ", "__comma", [((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver /((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver +aVal : smalltalk.send($receiver, "__plus", [aVal])) : smalltalk.send($receiver, "__slash", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver +aVal : smalltalk.send($receiver, "__plus", [aVal]))]))).klass === smalltalk.Number) ? $receiver *(100) : smalltalk.send($receiver, "__star", [(100)]))]), "__comma", ["%"])]);})() : nil;})() : nil;
(self['@scale']=aVal);
return self;},
args: ["aVal"],
source: "scale: aVal\x0a  | p |\x0a  p := document getElementById: 'scaleVal'.\x0a  p ifNotNil: [ field ifNotNil: [p innerHTML: 'Scale ', (((self field width) / ((self field width) + aVal)) * 100 ), '%' ]].\x0a  scale := aVal",
messageSends: ["getElementById:", "ifNotNil:", "innerHTML:", ",", "*", "/", "width", "field", "+"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_setHeight_",
smalltalk.method({
selector: "setHeight:",
category: 'not yet classified',
fn: function (aHeight){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_workSpaceId", [])]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return (($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){return ((($receiver = ((($receiver = ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))).klass === smalltalk.Number) ? $receiver >aHeight : smalltalk.send($receiver, "__gt", [aHeight]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@field'], "_setSize_value_", [smalltalk.send(self['@field'], "_width", []), ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);})() : (function(){return smalltalk.send(self['@field'], "_setSize_value_", [smalltalk.send(self['@field'], "_width", []), aHeight]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@field'], "_setSize_value_", [smalltalk.send(self['@field'], "_width", []), ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);}), (function(){return smalltalk.send(self['@field'], "_setSize_value_", [smalltalk.send(self['@field'], "_width", []), aHeight]);})]));})() : nil;})() : nil;
return self;},
args: ["aHeight"],
source: "setHeight: aHeight\x0a|div|\x0adiv := document getElementById: (self workSpaceId).\x0adiv ifNotNil: [\x0afield ifNotNil:[\x0a(div clientHeight - 20) > aHeight ifTrue: [ field setSize: ( field width) value: (div clientHeight - 20) ] ifFalse: [ field setSize: ( field width) value: aHeight ]]]",
messageSends: ["getElementById:", "workSpaceId", "ifNotNil:", "ifTrue:ifFalse:", ">", "-", "clientHeight", "setSize:value:", "width"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_setViewBox_atY_width_height_",
smalltalk.method({
selector: "setViewBox:atY:width:height:",
category: 'not yet classified',
fn: function (x, y, w, h){
var self=this;
(($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@field'], "_setViewBox_value_width_height_fl_", [x, y, ((($receiver = smalltalk.send(self['@field'], "_width", [])).klass === smalltalk.Number) ? $receiver +w : smalltalk.send($receiver, "__plus", [w])), ((($receiver = smalltalk.send(self['@field'], "_height", [])).klass === smalltalk.Number) ? $receiver +h : smalltalk.send($receiver, "__plus", [h])), false]);})() : nil;
return self;},
args: ["x", "y", "w", "h"],
source: "setViewBox: x atY: y width: w height: h\x0a\x09field ifNotNil:[\x0a\x09field setViewBox: x value: y  width:((field width) + w) height: ((field height) + h) fl: false.]",
messageSends: ["ifNotNil:", "setViewBox:value:width:height:fl:", "+", "width", "height"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_setWidth_",
smalltalk.method({
selector: "setWidth:",
category: 'not yet classified',
fn: function (aWidth){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [smalltalk.send(self, "_workSpaceId", [])]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return (($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){return ((($receiver = ((($receiver = ((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))).klass === smalltalk.Number) ? $receiver >aWidth : smalltalk.send($receiver, "__gt", [aWidth]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@field'], "_setSize_value_", [((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), smalltalk.send(self['@field'], "_height", [])]);})() : (function(){return smalltalk.send(self['@field'], "_setSize_value_", [aWidth, smalltalk.send(self['@field'], "_height", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@field'], "_setSize_value_", [((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), smalltalk.send(self['@field'], "_height", [])]);}), (function(){return smalltalk.send(self['@field'], "_setSize_value_", [aWidth, smalltalk.send(self['@field'], "_height", [])]);})]));})() : nil;})() : nil;
return self;},
args: ["aWidth"],
source: "setWidth: aWidth\x0a|div|\x0adiv := document getElementById: (self workSpaceId).\x0adiv ifNotNil: [\x0afield ifNotNil: [\x0a(div clientWidth - 20) > aWidth ifTrue: [ field setSize: (div clientWidth - 20) value:(field height ) ] ifFalse: [ field setSize: aWidth value:(field height ) ]]]",
messageSends: ["getElementById:", "workSpaceId", "ifNotNil:", "ifTrue:ifFalse:", ">", "-", "clientWidth", "setSize:value:", "height"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_workSpaceId",
smalltalk.method({
selector: "workSpaceId",
category: 'not yet classified',
fn: function (){
var self=this;
(($receiver = self['@paperId']) == nil || $receiver == undefined) ? (function(){return (self['@paperId']="workspace");})() : $receiver;
return self['@paperId'];
return self;},
args: [],
source: "workSpaceId\x0a\x09paperId ifNil: [ paperId := 'workspace' ].\x0a\x09^paperId\x0a\x0a",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_workSpaceId_",
smalltalk.method({
selector: "workSpaceId:",
category: 'not yet classified',
fn: function (aId){
var self=this;
(self['@paperId']=aId);
return self;},
args: ["aId"],
source: "workSpaceId: aId\x0a\x09paperId := aId",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_zoomIn",
smalltalk.method({
selector: "zoomIn",
category: 'not yet classified',
fn: function (){
var self=this;
(($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){smalltalk.send(self, "_scale_", [((($receiver = smalltalk.send(self, "_scale", [])).klass === smalltalk.Number) ? $receiver +(20) : smalltalk.send($receiver, "__plus", [(20)]))]);smalltalk.send(self, "_setViewBox_atY_width_height_", [(0), (0), smalltalk.send(self, "_scale", []), smalltalk.send(self, "_scale", [])]);smalltalk.send(self, "_setHeight_", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_height", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);return smalltalk.send(self, "_setWidth_", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);})() : nil;
return self;},
args: [],
source: "zoomIn\x0a\x09field ifNotNil: [\x0a\x09self scale: ( self scale + 20 ).\x0a\x09self setViewBox: 0 atY: 0 width: (self scale) height: (self scale).\x0a\x09self setHeight: (self field height - 20).\x0a\x09self setWidth: (self field width - 20).]",
messageSends: ["ifNotNil:", "scale:", "+", "scale", "setViewBox:atY:width:height:", "setHeight:", "-", "height", "field", "setWidth:", "width"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);

smalltalk.addMethod(
"_zoomOut",
smalltalk.method({
selector: "zoomOut",
category: 'not yet classified',
fn: function (){
var self=this;
(($receiver = self['@field']) != nil && $receiver != undefined) ? (function(){smalltalk.send(self, "_scale_", [((($receiver = smalltalk.send(self, "_scale", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);smalltalk.send(self, "_setViewBox_atY_width_height_", [(0), (0), smalltalk.send(self, "_scale", []), smalltalk.send(self, "_scale", [])]);smalltalk.send(self, "_setHeight_", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_height", [])).klass === smalltalk.Number) ? $receiver +(20) : smalltalk.send($receiver, "__plus", [(20)]))]);return smalltalk.send(self, "_setWidth_", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver +(20) : smalltalk.send($receiver, "__plus", [(20)]))]);})() : nil;
return self;},
args: [],
source: "zoomOut\x0a\x09field ifNotNil:[\x0a\x09self scale: ( self scale - 20 ).\x0a\x09self setViewBox: 0 atY: 0 width: (self scale) height: (self scale).\x0a\x09self setHeight: (self field height + 20).\x0a\x09self setWidth: (self field width + 20).]",
messageSends: ["ifNotNil:", "scale:", "-", "scale", "setViewBox:atY:width:height:", "setHeight:", "+", "height", "field", "setWidth:", "width"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);


smalltalk.addClass('WebHMIClient', smalltalk.Object, ['commander', 'ui'], 'HMI');
smalltalk.addMethod(
"_commander",
smalltalk.method({
selector: "commander",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@commander'];
return self;},
args: [],
source: "commander\x0a\x09\x22Returns aWebHMICommandProcessor object of the client\x22\x0a\x09^commander",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMIClient);

smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
category: 'not yet classified',
fn: function (){
var self=this;
var address=nil;
(function($rec){smalltalk.send($rec, "_show_", ["Connecting to server..."]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
(address=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["ServerAddress"]));
(($receiver = address) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_initClientOn_", [smalltalk.send(smalltalk.send("ws://", "__comma", [smalltalk.send(address, "_value", [])]), "__comma", ["/broadcast"])]);})() : nil;
return self;},
args: [],
source: "init\x0a\x09\x22Entry point for Network part. Here Network part will be initialized\x22\x0a\x09| address |\x0a\x09Transcript show: 'Connecting to server...'; cr.\x0a\x09address := document getElementById: 'ServerAddress'.\x0a\x09\x09address ifNotNil: [  self initClientOn: 'ws://', address value,'/broadcast'. ]\x0a\x09\x0a\x0a\x09\x0a\x09",
messageSends: ["show:", "cr", "getElementById:", "ifNotNil:", "initClientOn:", ",", "value"],
referencedClasses: ["Transcript"]
}),
smalltalk.WebHMIClient);

smalltalk.addMethod(
"_initClientOn_",
smalltalk.method({
selector: "initClientOn:",
category: 'not yet classified',
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
return self;},
args: ["anAddressWithPort"],
source: "initClientOn: anAddressWithPort\x0a\x09\x22Initializing WebSocket for data exchange\x22\x0a\x09commander := WebHMICommandProcessor new.\x0a\x09commander baseClient: self.\x0a\x0a\x09<socket = new WebSocket(anAddressWithPort); >.\x0a\x09<socket.onopen = function() { alert('Connection has been made successfuly');>.\x0a\x09\x09socket send: (WebHMICommand getSchemeCommand).\x0a\x09<}>.\x0a\x09<socket.onmessage = function (evt) { >.\x0a    \x09\x09self commander processMessage: (evt data).\x0a\x09<};>.\x0a\x09\x0a\x09<socket.onclose = function() { alert('Connection closed');}>.\x0a\x0a\x0a\x09",
messageSends: ["new", "baseClient:", "send:", "getSchemeCommand", "processMessage:", "commander", "data"],
referencedClasses: ["WebHMICommandProcessor", "WebHMICommand"]
}),
smalltalk.WebHMIClient);

smalltalk.addMethod(
"_installGui_",
smalltalk.method({
selector: "installGui:",
category: 'not yet classified',
fn: function (aWebHMIClientGui){
var self=this;
(self['@ui']=aWebHMIClientGui);
return self;},
args: ["aWebHMIClientGui"],
source: "installGui: aWebHMIClientGui\x0a\x09\x22Installs the GUI, that NetClient can use\x22\x0a\x09ui := aWebHMIClientGui",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMIClient);

smalltalk.addMethod(
"_instance",
smalltalk.method({
selector: "instance",
category: 'not yet classified',
fn: function (){
var self=this;
return (typeof socket == 'undefined' ? nil : socket);
return self;},
args: [],
source: "instance\x0a\x09\x22Returns a WebSocket object of the client\x22\x0a\x09^socket\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMIClient);

smalltalk.addMethod(
"_interface",
smalltalk.method({
selector: "interface",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@ui'];
return self;},
args: [],
source: "interface\x0a\x09\x22Returns a WebHMIClientGui object of the client\x22\x0a\x09^ui",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMIClient);


smalltalk.WebHMIClient.klass.iVarNames = ['socket'];

smalltalk.addClass('WebHMIClientGui', smalltalk.Object, ['netClient', 'field', 'htmlContent'], 'HMI');
smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
category: 'not yet classified',
fn: function (){
var self=this;
var connect=nil;
(function($rec){smalltalk.send($rec, "_show_", ["Creating GUI..."]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
smalltalk.send(self, "_paper_", [smalltalk.send(self, "_preparePaper_", ["workspace"])]);
(self['@netClient']=smalltalk.send((smalltalk.WebHMIClient || WebHMIClient), "_new", []));
smalltalk.send(self['@netClient'], "_installGui_", [self]);
(connect=smalltalk.send("#ConnectButton", "_asJQuery", []));
smalltalk.send(connect, "_click_", [(function(){smalltalk.send(self['@netClient'], "_init", []);(self['@htmlContent']=smalltalk.send((smalltalk.WebHMIClientHTMLBuilder || WebHMIClientHTMLBuilder), "_new", []));return smalltalk.send(self['@htmlContent'], "_buildMainHtml", []);})]);
return self;},
args: [],
source: "init\x0a\x09\x22Entry point for application. Here GUI part will be initialized, after that Network part will be initialized\x22\x09 \x0a\x09| connect |\x0a\x09\x0a\x09Transcript show: 'Creating GUI...'; cr.\x0a\x09self paper: (self preparePaper: 'workspace').\x0a\x09netClient := WebHMIClient new.\x0a\x09netClient installGui: self.\x0a\x0a\x09connect := '#ConnectButton' asJQuery.\x0a\x09connect click: [ \x0a\x09\x09netClient init. \x09\x0a\x09\x09htmlContent := WebHMIClientHTMLBuilder new.\x0a\x09\x09htmlContent buildMainHtml ]",
messageSends: ["show:", "cr", "paper:", "preparePaper:", "new", "installGui:", "asJQuery", "click:", "init", "buildMainHtml"],
referencedClasses: ["Transcript", "WebHMIClient", "WebHMIClientHTMLBuilder"]
}),
smalltalk.WebHMIClientGui);

smalltalk.addMethod(
"_paper",
smalltalk.method({
selector: "paper",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@field'];
return self;},
args: [],
source: "paper\x0a\x09^field",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMIClientGui);

smalltalk.addMethod(
"_paper_",
smalltalk.method({
selector: "paper:",
category: 'not yet classified',
fn: function (aPaper){
var self=this;
(self['@field']=aPaper);
return self;},
args: ["aPaper"],
source: "paper: aPaper\x0a\x09 field := aPaper",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMIClientGui);

smalltalk.addMethod(
"_preparePaper_",
smalltalk.method({
selector: "preparePaper:",
category: 'not yet classified',
fn: function (aId){
var self=this;
var div=nil;
(function($rec){smalltalk.send($rec, "_show_", ["Creating paper..."]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", [aId]));
return smalltalk.send((smalltalk.Raphael || Raphael), "_value_value_value_", [div, ((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);
return self;},
args: ["aId"],
source: "preparePaper: aId\x0a\x09\x22Workfield prepare. Returns paper, where elements will be drawn\x22\x0a\x09|div|\x0a\x09Transcript show: 'Creating paper...'; cr.\x0a\x09div := document getElementById: aId.\x0a\x09^(Raphael value: div value: ( div clientWidth - 20 ) value: ( div clientHeight -  20))",
messageSends: ["show:", "cr", "getElementById:", "value:value:value:", "-", "clientWidth", "clientHeight"],
referencedClasses: ["Transcript", "Raphael"]
}),
smalltalk.WebHMIClientGui);


smalltalk.WebHMIClientGui.klass.iVarNames = ['currentItem'];
smalltalk.addMethod(
"_currentItem",
smalltalk.method({
selector: "currentItem",
category: 'not yet classified',
fn: function (){
var self=this;
(($receiver = self['@currentItem']) == nil || $receiver == undefined) ? (function(){return (self['@currentItem']=smalltalk.send((smalltalk.HMIelement || HMIelement), "_new", []));})() : $receiver;
return self['@currentItem'];
return self;},
args: [],
source: "currentItem\x0a        currentItem ifNil: [ currentItem := HMIelement new ].\x0a\x09^currentItem",
messageSends: ["ifNil:", "new"],
referencedClasses: ["HMIelement"]
}),
smalltalk.WebHMIClientGui.klass);

smalltalk.addMethod(
"_currentItem_",
smalltalk.method({
selector: "currentItem:",
category: 'not yet classified',
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
return self;},
args: ["aItem"],
source: "currentItem: aItem\x0a\x22Selecting item\x22\x0a|div text type onPath offPath remButton|\x0a\x0acurrentItem := aItem.\x0a\x0adiv := document getElementById: 'selected'.\x0atext := document getElementById: 'itemName'.\x0atype := document getElementById: 'itemTypeName'.\x0aonPath := document getElementById: 'itemOnPath'.\x0aoffPath := document getElementById: 'itemOffPath'.\x0adiv ifNotNil: [ div innerHTML: 'Selected item - ' , currentItem elName ].\x0atext ifNotNil: [ text value: currentItem elName ].\x0atype ifNotNil: [ type value: currentItem elType typeName ].\x0aonPath ifNotNil: [ onPath value: currentItem elType on ].\x0aoffPath ifNotNil: [ offPath value: currentItem elType off ].",
messageSends: ["getElementById:", "ifNotNil:", "innerHTML:", ",", "elName", "value:", "typeName", "elType", "on", "off"],
referencedClasses: []
}),
smalltalk.WebHMIClientGui.klass);

smalltalk.addMethod(
"_currentItemRemove",
smalltalk.method({
selector: "currentItemRemove",
category: 'not yet classified',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_show_", ["Removing current item"]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
return self;},
args: [],
source: "currentItemRemove\x0a\x09Transcript show: 'Removing current item'; cr\x0a\x0a\x09\x22|div|\x0adiv := document getElementById: 'sidebar'.\x0a\x0a(self currentItem elName = 'emptyName') ifFalse: [\x0a\x09\x09div innerHTML: ( div innerHTML ,'<br>Removed Item ', self currentItem elName ).\x0a\x09\x09socket send: '@remove #(WebHMIElement RemoveByName: ', '''', self currentItem elName, ''')'.\x0a\x09\x09self currentItem: (HMIelement new) ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ window alert: 'Select item to delete' ]\x22",
messageSends: ["show:", "cr"],
referencedClasses: ["Transcript"]
}),
smalltalk.WebHMIClientGui.klass);

smalltalk.addMethod(
"_currentItemUpdate",
smalltalk.method({
selector: "currentItemUpdate",
category: 'not yet classified',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_show_", ["Removing current item"]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
return self;},
args: [],
source: "currentItemUpdate\x0a\x09Transcript show: 'Removing current item'; cr\x0a\x0a\x22\x0aitemName := document getElementById: 'itemName'.\x0atypeName := document getElementById: 'itemTypeName'.\x0aonPic := document getElementById: 'itemOnPath'.\x0aoffPic := document getElementById: 'itemOffPath'.\x0adiv := document getElementById: 'sidebar'.\x0a\x0aitemName value size > 0 ifTrue: [\x0a\x09typeName value size > 0 ifTrue: [\x0a\x09\x09onPic value size > 0 ifTrue: [\x0a\x09\x09\x09offPic value size > 0 ifTrue: [\x0a\x0a\x09\x09\x09\x09socket send: '@changeParam #(WebHMIElement elementFromCollection: ' , '''' , currentItem elName, '''', ') elName:  ', '''' ,itemName value, '''', '; elType: ((WebHMIElementType new) typeName: ', '''' , typeName value,'''',  \x0a\x09\x09\x09\x09\x09\x09'; imageOn: ', '''', onPic value, '''', '; imageOff: ', '''', offPic value, '''', ')'.\x0a\x0a\x09\x09\x09\x09div innerHTML: ( div innerHTML ,'<br>Changed Item ', itemName value, ' ' , typeName value ) ]\x0a\x09\x09\x09ifFalse: [ window alert: 'Please check out empty fields' ]]\x0a\x09\x09ifFalse: [ window alert: 'Please check out empty fields' ]] \x0a\x09ifFalse: [ window alert: 'Please check out empty fields' ]]\x0aifFalse: [ window alert: 'Please check out empty fields' ]\x22",
messageSends: ["show:", "cr"],
referencedClasses: ["Transcript"]
}),
smalltalk.WebHMIClientGui.klass);

smalltalk.addMethod(
"_newItemAdd",
smalltalk.method({
selector: "newItemAdd",
category: 'not yet classified',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_show_", ["Adding new item"]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
return self;},
args: [],
source: "newItemAdd\x0a\x09Transcript show: 'Adding new item'; cr\x0a\x0a\x22\x0a|div itemName itemType err|\x0aitemName := document getElementById: 'itemName'.\x0aitemType := document getElementById: 'itemType'.\x0adiv := document getElementById: 'sidebar'.\x0aitemName value > 0 ifTrue: [\x0a                      div innerHTML: ( div innerHTML ,'<br>Added Item ', itemName value, ' ' ,itemType value ).\x0a                      socket send: '@add #(WebHMIElement Add: (WebHMIElement new createElement:  ', '''' ,itemName value, '''', ' withType: (WebHMIElementType ', itemType value, ')))']\x0a                                     ifFalse: [ window alert: 'Field ''Name'' must be not empty' ] \x22",
messageSends: ["show:", "cr"],
referencedClasses: ["Transcript"]
}),
smalltalk.WebHMIClientGui.klass);


smalltalk.addClass('WebHMIClientHTMLBuilder', smalltalk.Object, [], 'HMI');
smalltalk.addMethod(
"_buildMainHtml",
smalltalk.method({
selector: "buildMainHtml",
category: 'not yet classified',
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
return self;},
args: [],
source: "buildMainHtml\x0a\x09\x22HTML-generator init part. Builds html with linking buttons with functions\x22\x0a\x09| addButton removeButton updateButton sidebarDiv |\x0a\x09Transcript show: 'Generating main HTML...'; cr.\x0a\x0a\x09addButton := '#addItem' asJQuery.\x0a\x09addButton click: [  self renderAddForm ].\x0a\x0a\x09removeButton := '#delItem' asJQuery.\x0a\x09removeButton click: [  self renderRemoveForm ].\x0a\x0a\x09updateButton := '#chItem' asJQuery.\x0a\x09updateButton click: [ self renderUpdateForm ].\x0a\x0a\x09self renderAddForm.\x0a",
messageSends: ["show:", "cr", "asJQuery", "click:", "renderAddForm", "renderRemoveForm", "renderUpdateForm"],
referencedClasses: ["Transcript"]
}),
smalltalk.WebHMIClientHTMLBuilder);

smalltalk.addMethod(
"_renderAddForm",
smalltalk.method({
selector: "renderAddForm",
category: 'not yet classified',
fn: function (){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return smalltalk.send(div, "_innerHTML_", [smalltalk.send((smalltalk.WebHMIClientHTMLBuilder || WebHMIClientHTMLBuilder), "_formAddHtml", [])]);})() : nil;
return self;},
args: [],
source: "renderAddForm\x0a|div|\x0a\x09div := document getElementById: 'sidebar'.\x0a\x09div ifNotNil: [ div innerHTML: (WebHMIClientHTMLBuilder formAddHtml)]",
messageSends: ["getElementById:", "ifNotNil:", "innerHTML:", "formAddHtml"],
referencedClasses: ["WebHMIClientHTMLBuilder"]
}),
smalltalk.WebHMIClientHTMLBuilder);

smalltalk.addMethod(
"_renderRemoveForm",
smalltalk.method({
selector: "renderRemoveForm",
category: 'not yet classified',
fn: function (){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return smalltalk.send(div, "_innerHTML_", [smalltalk.send((smalltalk.WebHMIClientHTMLBuilder || WebHMIClientHTMLBuilder), "_formRemoveHtml", [])]);})() : nil;
return self;},
args: [],
source: "renderRemoveForm\x0a|div|\x0a\x09div := document getElementById: 'sidebar'.\x0a\x09div ifNotNil: [ div innerHTML: (WebHMIClientHTMLBuilder formRemoveHtml) ]",
messageSends: ["getElementById:", "ifNotNil:", "innerHTML:", "formRemoveHtml"],
referencedClasses: ["WebHMIClientHTMLBuilder"]
}),
smalltalk.WebHMIClientHTMLBuilder);

smalltalk.addMethod(
"_renderUpdateForm",
smalltalk.method({
selector: "renderUpdateForm",
category: 'not yet classified',
fn: function (){
var self=this;
var div=nil;
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
(($receiver = div) != nil && $receiver != undefined) ? (function(){return smalltalk.send(div, "_innerHTML_", [smalltalk.send((smalltalk.WebHMIClientHTMLBuilder || WebHMIClientHTMLBuilder), "_formUpdateHtml", [])]);})() : nil;
return self;},
args: [],
source: "renderUpdateForm\x0a|div|\x0a\x09div := document getElementById: 'sidebar'.\x0a\x09div ifNotNil: [ div innerHTML: (WebHMIClientHTMLBuilder formUpdateHtml) ]",
messageSends: ["getElementById:", "ifNotNil:", "innerHTML:", "formUpdateHtml"],
referencedClasses: ["WebHMIClientHTMLBuilder"]
}),
smalltalk.WebHMIClientHTMLBuilder);


smalltalk.addMethod(
"_formAddHtml",
smalltalk.method({
selector: "formAddHtml",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("<form>", "__comma", ["<p>Item name:"]), "__comma", ["<input id=\x22itemName\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item type:"]), "__comma", ["<select id=\x22itemType\x22 class='inputField' value=\x22\x22>"]), "__comma", ["<option id=\x221\x22 value=\x22server\x22>Server</option>"]), "__comma", ["<option id=\x222\x22 value=\x22workstation\x22>Workstation</option>"]), "__comma", ["<option id=\x223\x22 value=\x22router\x22>Router</option>"]), "__comma", ["</select><br>"]), "__comma", ["<input id=\x22add\x22 class='actionButton'  type=\x22button\x22 value=\x22\x22 onclick=\x22 smalltalk.WebHMIClientGui._newItemAdd()\x22>"]), "__comma", ["</form>"]), "__comma", ["<div id=\x22info\x22></div>"]);
return self;},
args: [],
source: "formAddHtml\x0a^\x0a'<form>',\x0a\x09'<p>Item name:',\x0a \x09'<input id=\x22itemName\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<p>Item type:',\x0a\x09'<select id=\x22itemType\x22 class=''inputField'' value=\x22\x22>',\x0a\x09\x09'<option id=\x221\x22 value=\x22server\x22>Server</option>',\x0a\x09\x09'<option id=\x222\x22 value=\x22workstation\x22>Workstation</option>',\x0a\x09\x09'<option id=\x223\x22 value=\x22router\x22>Router</option>',\x0a\x09'</select><br>',\x0a\x09'<input id=\x22add\x22 class=''actionButton''  type=\x22button\x22 value=\x22\x22 onclick=\x22 smalltalk.WebHMIClientGui._newItemAdd()\x22>',\x0a'</form>',\x0a'<div id=\x22info\x22></div>'.",
messageSends: [","],
referencedClasses: []
}),
smalltalk.WebHMIClientHTMLBuilder.klass);

smalltalk.addMethod(
"_formRemoveHtml",
smalltalk.method({
selector: "formRemoveHtml",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Click item to select, than click ' Remove ' to remove it <br>", "__comma", ["<div id=\x22selected\x22></div>"]), "__comma", ["<form>"]), "__comma", ["\x09<input id=\x22remove\x22 class='actionButton' type=\x22button\x22 value=\x22\x22 onclick=\x22 smalltalk.WebHMIClientGui._currentItemRemove()\x22>"]), "__comma", ["</form>"]), "__comma", ["<div id=\x22info\x22></div>"]);
return self;},
args: [],
source: "formRemoveHtml\x0a^\x0a 'Click item to select, than click '' Remove '' to remove it <br>', \x0a'<div id=\x22selected\x22></div>',\x0a'<form>',\x0a'\x09<input id=\x22remove\x22 class=''actionButton'' type=\x22button\x22 value=\x22\x22 onclick=\x22 smalltalk.WebHMIClientGui._currentItemRemove()\x22>',\x0a'</form>',\x0a'<div id=\x22info\x22></div>'.",
messageSends: [","],
referencedClasses: []
}),
smalltalk.WebHMIClientHTMLBuilder.klass);

smalltalk.addMethod(
"_formUpdateHtml",
smalltalk.method({
selector: "formUpdateHtml",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("<form>", "__comma", ["<p>Item name:"]), "__comma", ["<input id=\x22itemName\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item type name:"]), "__comma", ["<input id=\x22itemTypeName\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item switched on value:"]), "__comma", ["<input id=\x22itemOnPath\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<p>Item switched off value:"]), "__comma", ["<input id=\x22itemOffPath\x22 class='inputField' type=\x22text\x22 value=\x22\x22><br>"]), "__comma", ["<input id=\x22change\x22 class='actionButton' type=\x22button\x22 value='' onclick=\x22 smalltalk.WebHMIClientGui._currentItemUpdate()\x22>"]), "__comma", ["</form>"]), "__comma", ["<div id=\x22info\x22></div>"]);
return self;},
args: [],
source: "formUpdateHtml\x0a^\x0a'<form>',\x0a\x09'<p>Item name:',\x0a\x09'<input id=\x22itemName\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<p>Item type name:',\x0a\x09'<input id=\x22itemTypeName\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<p>Item switched on value:',\x0a\x09'<input id=\x22itemOnPath\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<p>Item switched off value:',\x0a\x09'<input id=\x22itemOffPath\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<input id=\x22change\x22 class=''actionButton'' type=\x22button\x22 value='''' onclick=\x22 smalltalk.WebHMIClientGui._currentItemUpdate()\x22>',\x0a'</form>',\x0a'<div id=\x22info\x22></div>'.",
messageSends: [","],
referencedClasses: []
}),
smalltalk.WebHMIClientHTMLBuilder.klass);


smalltalk.addClass('WebHMICommand', smalltalk.Object, [], 'HMI');

smalltalk.addMethod(
"_changeCommand",
smalltalk.method({
selector: "changeCommand",
category: 'not yet classified',
fn: function (){
var self=this;
return "@change";
return self;},
args: [],
source: "changeCommand\x0a\x09^'@change'",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMICommand.klass);

smalltalk.addMethod(
"_getSchemeCommand",
smalltalk.method({
selector: "getSchemeCommand",
category: 'not yet classified',
fn: function (){
var self=this;
return "@getScheme";
return self;},
args: [],
source: "getSchemeCommand\x0a\x09^'@getScheme'",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMICommand.klass);

smalltalk.addMethod(
"_infoCommand",
smalltalk.method({
selector: "infoCommand",
category: 'not yet classified',
fn: function (){
var self=this;
return "@info";
return self;},
args: [],
source: "infoCommand\x0a\x09^'@info'",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMICommand.klass);

smalltalk.addMethod(
"_moveCommand",
smalltalk.method({
selector: "moveCommand",
category: 'not yet classified',
fn: function (){
var self=this;
return "@moved";
return self;},
args: [],
source: "moveCommand\x0a\x09^'@moved'",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMICommand.klass);

smalltalk.addMethod(
"_paramsCommand",
smalltalk.method({
selector: "paramsCommand",
category: 'not yet classified',
fn: function (){
var self=this;
return "@params";
return self;},
args: [],
source: "paramsCommand\x0a\x09^'@params'",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMICommand.klass);

smalltalk.addMethod(
"_removeCommand",
smalltalk.method({
selector: "removeCommand",
category: 'not yet classified',
fn: function (){
var self=this;
return "@remove";
return self;},
args: [],
source: "removeCommand\x0a\x09^'@remove'",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMICommand.klass);

smalltalk.addMethod(
"_switchCommand",
smalltalk.method({
selector: "switchCommand",
category: 'not yet classified',
fn: function (){
var self=this;
return "@switched";
return self;},
args: [],
source: "switchCommand\x0a\x09^'@switched'",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMICommand.klass);


smalltalk.addClass('WebHMICommandProcessor', smalltalk.Object, ['netclient', 'elements'], 'HMI');
smalltalk.addMethod(
"_baseClient",
smalltalk.method({
selector: "baseClient",
category: 'not yet classified',
fn: function (){
var self=this;
return self['@netclient'];
return self;},
args: [],
source: "baseClient\x0a\x09^netclient",
messageSends: [],
referencedClasses: []
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_baseClient_",
smalltalk.method({
selector: "baseClient:",
category: 'not yet classified',
fn: function (aWebHMIClient){
var self=this;
(function($rec){smalltalk.send($rec, "_show_", ["Creating commander..."]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
(self['@netclient']=aWebHMIClient);
return self;},
args: ["aWebHMIClient"],
source: "baseClient: aWebHMIClient\x0a\x09Transcript show: 'Creating commander...'; cr.\x0a\x09netclient := aWebHMIClient",
messageSends: ["show:", "cr"],
referencedClasses: ["Transcript"]
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
category: 'not yet classified',
fn: function (){
var self=this;
(($receiver = self['@elements']) == nil || $receiver == undefined) ? (function(){return (self['@elements']=smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []));})() : $receiver;
return self['@elements'];
return self;},
args: [],
source: "elements \x0a\x09elements ifNil: [ elements := HMIelement elements ].\x0a\x09^elements",
messageSends: ["ifNil:", "elements"],
referencedClasses: ["HMIelement"]
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_elementsContains_",
smalltalk.method({
selector: "elementsContains:",
category: 'not yet classified',
fn: function (aString){
var self=this;
var $early={};
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(el){return ((($receiver = smalltalk.send(smalltalk.send(el, "_elName", []), "__eq", [aString])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw $early=[true]})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw $early=[true]})();})]));})]);
return false;
return self;
} catch(e) {if(e===$early)return e[0]; throw e}},
args: ["aString"],
source: "elementsContains: aString\x0a\x09self elements do: [ : el | el elName = aString ifTrue: [^ true]].\x0a\x09^false",
messageSends: ["do:", "elements", "ifTrue:", "=", "elName"],
referencedClasses: []
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processInfoMessage_",
smalltalk.method({
selector: "processInfoMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
var resultElement=nil;
(function($rec){smalltalk.send($rec, "_show_", [msg]);return smalltalk.send($rec, "_cr", []);})((smalltalk.Transcript || Transcript));
(resultElement=smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@info ", ""])]));
((($receiver = smalltalk.send(self, "_elementsContains_", [smalltalk.send(resultElement, "_elName", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []), "_add_", [smalltalk.send(resultElement, "_setParent_", [smalltalk.send(self, "_baseClient", [])])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []), "_add_", [smalltalk.send(resultElement, "_setParent_", [smalltalk.send(self, "_baseClient", [])])]);})]));
return self;},
args: ["msg"],
source: "processInfoMessage: msg\x0a\x09|resultElement|\x0a\x09Transcript show: msg; cr.\x0a\x09resultElement := (CommandExecutor doIt: (msg replace: '@info ' with: '')).\x0a\x09(self elementsContains: ( resultElement elName )) ifFalse: [\x0a\x09\x09\x09 HMIelement elements add: (resultElement setParent: (self baseClient))]",
messageSends: ["show:", "cr", "doIt:", "replace:with:", "ifFalse:", "elementsContains:", "elName", "add:", "elements", "setParent:", "baseClient"],
referencedClasses: ["Transcript", "CommandExecutor", "HMIelement"]
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processMessage_",
smalltalk.method({
selector: "processMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_infoCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processInfoMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processInfoMessage_", [msg]);})]));
((($receiver = ((($receiver = smalltalk.send(smalltalk.send((smalltalk.HMIelement || HMIelement), "_elements", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_switchCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_moveCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_paramsCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_removeCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})]));return ((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_changeCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_switchCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processSwitchedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_moveCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processMovedMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_paramsCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamsMessage_", [msg]);})]));((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_removeCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processRemoveMessage_", [msg]);})]));return ((($receiver = smalltalk.send(msg, "_match_", [smalltalk.send((smalltalk.WebHMICommand || WebHMICommand), "_changeCommand", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_processParamChangeMessage_", [msg]);})]));})]));
return self;},
args: ["msg"],
source: "processMessage: msg\x0a\x09(msg match: (WebHMICommand infoCommand))  ifTrue: [ self processInfoMessage: msg ].\x0a\x09\x0a\x09HMIelement elements size > 0 ifTrue: [\x0a\x09\x09(msg match: WebHMICommand switchCommand)  ifTrue: [ self processSwitchedMessage: msg ].\x0a\x09\x09(msg match: WebHMICommand moveCommand)  ifTrue: [ self processMovedMessage: msg ].\x0a\x09\x09(msg match: WebHMICommand paramsCommand)  ifTrue: [ self processParamsMessage: msg ].\x0a\x09\x09(msg match: WebHMICommand removeCommand)  ifTrue: [ self processRemoveMessage: msg ].\x0a\x09\x09(msg match: WebHMICommand changeCommand)  ifTrue: [ self processParamChangeMessage: msg ]]",
messageSends: ["ifTrue:", "match:", "infoCommand", "processInfoMessage:", ">", "size", "elements", "switchCommand", "processSwitchedMessage:", "moveCommand", "processMovedMessage:", "paramsCommand", "processParamsMessage:", "removeCommand", "processRemoveMessage:", "changeCommand", "processParamChangeMessage:"],
referencedClasses: ["WebHMICommand", "HMIelement"]
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processMovedMessage_",
smalltalk.method({
selector: "processMovedMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@moved ", ""])]);
return self;},
args: ["msg"],
source: "processMovedMessage: msg\x0a\x09CommandExecutor doIt: (msg replace: '@moved ' with: '')",
messageSends: ["doIt:", "replace:with:"],
referencedClasses: ["CommandExecutor"]
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processParamChangeMessage_",
smalltalk.method({
selector: "processParamChangeMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@change ", ""])]);
return self;},
args: ["msg"],
source: "processParamChangeMessage: msg\x0a\x09(CommandExecutor doIt: (msg replace: '@change ' with: '')) .",
messageSends: ["doIt:", "replace:with:"],
referencedClasses: ["CommandExecutor"]
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processParamsMessage_",
smalltalk.method({
selector: "processParamsMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@params ", ""])]), "_drawOn_", [smalltalk.send((smalltalk.WebHMIClientGui || WebHMIClientGui), "_field", [])]);
return self;},
args: ["msg"],
source: "processParamsMessage: msg\x0a\x09(CommandExecutor doIt: (msg replace: '@params ' with: '')) drawOn: (WebHMIClientGui field).",
messageSends: ["drawOn:", "doIt:", "replace:with:", "field"],
referencedClasses: ["CommandExecutor", "WebHMIClientGui"]
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processRemoveMessage_",
smalltalk.method({
selector: "processRemoveMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@remove ", ""])]);
return self;},
args: ["msg"],
source: "processRemoveMessage: msg\x0a\x09CommandExecutor doIt: (msg replace: '@remove ' with: '')",
messageSends: ["doIt:", "replace:with:"],
referencedClasses: ["CommandExecutor"]
}),
smalltalk.WebHMICommandProcessor);

smalltalk.addMethod(
"_processSwitchedMessage_",
smalltalk.method({
selector: "processSwitchedMessage:",
category: 'not yet classified',
fn: function (msg){
var self=this;
smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", ["@switched ", ""])]);
return self;},
args: ["msg"],
source: "processSwitchedMessage: msg\x0a\x09CommandExecutor doIt: (msg replace: '@switched ' with: '')",
messageSends: ["doIt:", "replace:with:"],
referencedClasses: ["CommandExecutor"]
}),
smalltalk.WebHMICommandProcessor);



