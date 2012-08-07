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


smalltalk.addClass('HMIelement', smalltalk.Object, ['state', 'elName', 'elType', 'element', 'xPos', 'yPos', 'text', 'elPicture', 'elPictureOn', 'elPictureOff', 'params', 'param1'], 'HMI');
smalltalk.addMethod(
"_drawOn_",
smalltalk.method({
selector: "drawOn:",
category: 'not yet classified',
fn: function (aRaphaelPaper){
var self=this;
(self['@element']=smalltalk.send(aRaphaelPaper, "_image_onX_onY_w_h_", [smalltalk.send(self, "_elPicture", []), smalltalk.send(self, "_xPos", []), smalltalk.send(self, "_yPos", []), (128), (128)]));
(self['@text']=smalltalk.send(aRaphaelPaper, "_text_onY_text_", [((($receiver = smalltalk.send(self, "_xPos", [])).klass === smalltalk.Number) ? $receiver +(64) : smalltalk.send($receiver, "__plus", [(64)])), ((($receiver = smalltalk.send(self, "_yPos", [])).klass === smalltalk.Number) ? $receiver +(140) : smalltalk.send($receiver, "__plus", [(140)])), smalltalk.send(self, "_elName", [])]));
smalltalk.send(self['@element'], "_attr_value_", ["opacity", (0.8)]);
((($receiver = ((($receiver = ((($receiver = smalltalk.send(self['@element'], "_attr_", ["y"])).klass === smalltalk.Number) ? $receiver +(192) : smalltalk.send($receiver, "__plus", [(192)]))).klass === smalltalk.Number) ? $receiver >smalltalk.send(smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", []), "_height", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", []), "_height", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((smalltalk.WebHMI || WebHMI), "_setHeight_", [((($receiver = smalltalk.send(self['@element'], "_attr_", ["y"])).klass === smalltalk.Number) ? $receiver +(192) : smalltalk.send($receiver, "__plus", [(192)]))]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send((smalltalk.WebHMI || WebHMI), "_setHeight_", [((($receiver = smalltalk.send(self['@element'], "_attr_", ["y"])).klass === smalltalk.Number) ? $receiver +(192) : smalltalk.send($receiver, "__plus", [(192)]))]);})]));
((($receiver = ((($receiver = ((($receiver = smalltalk.send(self['@element'], "_attr_", ["x"])).klass === smalltalk.Number) ? $receiver +(128) : smalltalk.send($receiver, "__plus", [(128)]))).klass === smalltalk.Number) ? $receiver >smalltalk.send(smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", []), "_width", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", []), "_width", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send((smalltalk.WebHMI || WebHMI), "_setWidth_", [((($receiver = smalltalk.send(self['@element'], "_attr_", ["x"])).klass === smalltalk.Number) ? $receiver +(128) : smalltalk.send($receiver, "__plus", [(128)]))]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send((smalltalk.WebHMI || WebHMI), "_setWidth_", [((($receiver = smalltalk.send(self['@element'], "_attr_", ["x"])).klass === smalltalk.Number) ? $receiver +(128) : smalltalk.send($receiver, "__plus", [(128)]))]);})]));
((($receiver = smalltalk.send((smalltalk.WebHMI || WebHMI), "_enableMoving", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_setActions", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_setActions", []);})]));
return self;},
args: ["aRaphaelPaper"],
source: "drawOn: aRaphaelPaper\x0a\x09element := aRaphaelPaper image: ( self elPicture ) onX: self xPos onY: self yPos w: 128 h: 128.\x0a\x09text := aRaphaelPaper text: self xPos + 64 onY: (self yPos + 140) text: self elName.\x0a        element attr: 'opacity' value: 0.8.\x0a\x09((element attr: 'y') + 192) > ( WebHMI field height ) ifTrue: [ WebHMI setHeight: ( (element attr: 'y') + 192 ) ].\x0a\x09((element attr: 'x') + 128) > ( WebHMI field width ) ifTrue: [ WebHMI setWidth: ( (element attr: 'x') + 128 ) ].\x0a\x09WebHMI enableMoving ifTrue: [ self setActions ].",
messageSends: ["image:onX:onY:w:h:", "elPicture", "xPos", "yPos", "text:onY:text:", "+", "elName", "attr:value:", "ifTrue:", ">", "attr:", "height", "field", "setHeight:", "width", "setWidth:", "enableMoving", "setActions"],
referencedClasses: ["WebHMI"]
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
smalltalk.send(self['@element'], "_drag_value_value_", [(function(dx, dy){(xFactor=((($receiver = ((($receiver = smalltalk.send(smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send((smalltalk.WebHMI || WebHMI), "_scale", []) : smalltalk.send($receiver, "__plus", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_scale", [])]))).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", []), "_width", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", []), "_width", [])])));(yFactor=((($receiver = ((($receiver = smalltalk.send(smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", []), "_height", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send((smalltalk.WebHMI || WebHMI), "_scale", []) : smalltalk.send($receiver, "__plus", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_scale", [])]))).klass === smalltalk.Number) ? $receiver /smalltalk.send(smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", []), "_height", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", []), "_height", [])])));return smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("@changePos%20%23%28WebHMIElement%20elementFromCollection%3A%20"), "__comma", [unescape("%27")]), "__comma", [smalltalk.send(self, "_elName", [])]), "__comma", [unescape("%27")]), "__comma", [unescape("%20%29%20xPos%3A")]), "__comma", [((($receiver = ox).klass === smalltalk.Number) ? $receiver +dx : smalltalk.send($receiver, "__plus", [dx]))]), "__comma", [" yPos:"]), "__comma", [((($receiver = oy).klass === smalltalk.Number) ? $receiver +dy : smalltalk.send($receiver, "__plus", [dy]))])]);}), (function(){smalltalk.send((smalltalk.WebHMI || WebHMI), "_currentItem_", [self]);return smalltalk.send(self['@element'], "_attr_value_", ["opacity", (1)]);}), (function(){(ox=((($receiver = ((($receiver = xFactor).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@element'], "_attr_", ["x"]) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@element'], "_attr_", ["x"])]))).klass === smalltalk.Number) ? $receiver +smalltalk.send(self['@element'], "_attr_", ["x"]) : smalltalk.send($receiver, "__plus", [smalltalk.send(self['@element'], "_attr_", ["x"])])));(oy=((($receiver = ((($receiver = yFactor).klass === smalltalk.Number) ? $receiver /smalltalk.send(self['@element'], "_attr_", ["y"]) : smalltalk.send($receiver, "__slash", [smalltalk.send(self['@element'], "_attr_", ["y"])]))).klass === smalltalk.Number) ? $receiver +smalltalk.send(self['@element'], "_attr_", ["y"]) : smalltalk.send($receiver, "__plus", [smalltalk.send(self['@element'], "_attr_", ["y"])])));return smalltalk.send(self['@element'], "_attr_value_", ["opacity", (0.8)]);})]);
smalltalk.send(self['@element'], "_dblclick_", [(function(){return smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("@switch%20%23%28WebHMIElement%20elementFromCollection%3A%20"), "__comma", [unescape("%27")]), "__comma", [smalltalk.send(self, "_elName", [])]), "__comma", [unescape("%27")]), "__comma", [unescape("%20%29%20switch")])]);})]);
return self;},
args: [],
source: "setActions\x0a| ox oy xFactor yFactor|\x0aox := ( element attr: 'x' ).\x0aoy := ( element attr: 'y' ).\x0axFactor := 1.\x0ayFactor := 1.\x0a\x0aelement drag: [ :dx :dy | \x0a\x09\x09\x09xFactor := ((WebHMI field width + WebHMI scale) / (WebHMI field width )).\x0a\x09\x09\x09yFactor := ((WebHMI field height + WebHMI scale) / (WebHMI field height )).\x0a                        socket send: '@changePos #(WebHMIElement elementFromCollection: ', '''', self elName, '''' , ' ) xPos:',  ( ox + dx ), ' yPos:',  ( oy + dy ).\x0a\x09\x09\x09\x22(oy + dy + 192) > ( WebHMI field height ) ifTrue: [ WebHMI setHeight: ( oy + dy + 192 ) ].\x22\x0a                        \x22(ox + dx + 128) > ( WebHMI field width ) ifTrue: [ WebHMI setWidth: ( ox + dx + 128 ) ]. \x22] \x0a\x09\x09value: [  WebHMI currentItem: self. element attr: 'opacity' value: 1. ] \x0a\x09\x09value: [  ox := (xFactor / ( element attr: 'x' ) + ( element attr: 'x' )). oy := (yFactor / ( element attr: 'y' ) +  ( element attr: 'y' )). element attr: 'opacity' value: 0.8. ].\x0aelement dblclick: [ socket send: '@switch #(WebHMIElement elementFromCollection: ', '''', self elName, '''' , ' ) switch' ].",
messageSends: ["attr:", "drag:value:value:", "/", "+", "width", "field", "scale", "height", "send:", ",", "elName", "currentItem:", "attr:value:", "dblclick:"],
referencedClasses: ["WebHMI"]
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
return self;},
args: ["aState"],
source: "state: aState\x0a\x09state := aState",
messageSends: [],
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
source: "switch\x0a\x09self state = 'on' ifTrue: [ self state: 'off' ] ifFalse: [ self state: 'on' ].\x0a\x09element attr: 'src' value: ( self elPicture )",
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
(($receiver = self['@element']) != nil && $receiver != undefined) ? (function(){smalltalk.send(self['@element'], "_attr_value_", ["x", self['@xPos']]);return smalltalk.send(self['@text'], "_attr_value_", ["x", ((($receiver = self['@xPos']).klass === smalltalk.Number) ? $receiver +(64) : smalltalk.send($receiver, "__plus", [(64)]))]);})() : nil;
return self;},
args: ["aPos"],
source: "xPos: aPos\x0a\x09xPos := aPos.\x0a        element ifNotNil: [ element attr: 'x' value: xPos. text attr: 'x' value: xPos + 64]",
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
(($receiver = self['@element']) != nil && $receiver != undefined) ? (function(){smalltalk.send(self['@element'], "_attr_value_", ["y", self['@yPos']]);return smalltalk.send(self['@text'], "_attr_value_", ["y", ((($receiver = self['@yPos']).klass === smalltalk.Number) ? $receiver +(140) : smalltalk.send($receiver, "__plus", [(140)]))]);})() : nil;
return self;},
args: ["aPos"],
source: "yPos: aPos\x0a\x09yPos := aPos.\x0a        element ifNotNil: [ element attr: 'y' value: yPos. text attr: 'y' value: yPos + 140]",
messageSends: ["ifNotNil:", "attr:value:", "+"],
referencedClasses: []
}),
smalltalk.HMIelement);


smalltalk.HMIelement.klass.iVarNames = ['collection'];
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
smalltalk.send(smalltalk.send(self, "_elements", []), "_remove_", [aHMIelement]);
return self;},
args: ["aHMIelement"],
source: "removeElement: aHMIelement\x0a        aHMIelement element remove.\x0a        aHMIelement text remove.\x0a\x09self elements remove: aHMIelement.\x0a\x09\x09",
messageSends: ["remove", "element", "text", "remove:", "elements"],
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


smalltalk.addClass('WebHMI', smalltalk.Object, ['field', 'elements'], 'HMI');
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
(tmp=smalltalk.send((smalltalk.CommandExecutor || CommandExecutor), "_doIt_", [smalltalk.send(msg, "_replace_with_", [unescape("@info%20"), ""])]));
((($receiver = smalltalk.send(self, "_elementsContains_", [smalltalk.send(tmp, "_elName", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@elements'], "_add_", [(function($rec){smalltalk.send($rec, "_usingSocket_", [(typeof socket == 'undefined' ? nil : socket)]);return smalltalk.send($rec, "_drawOn_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", [])]);})(tmp)]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@elements'], "_add_", [(function($rec){smalltalk.send($rec, "_usingSocket_", [(typeof socket == 'undefined' ? nil : socket)]);return smalltalk.send($rec, "_drawOn_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_field", [])]);})(tmp)]);})]));
return self;},
args: ["msg"],
source: "processInfoMessage: msg\x0a|tmp|\x0atmp := (CommandExecutor doIt: (msg replace: '@info ' with: '')).\x0a(self elementsContains: ( tmp elName )) ifFalse: [ elements add: (tmp usingSocket: socket ; drawOn: (WebHMI field))]",
messageSends: ["doIt:", "replace:with:", "ifFalse:", "elementsContains:", "elName", "add:", "usingSocket:", "drawOn:", "field"],
referencedClasses: ["CommandExecutor", "WebHMI"]
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
smalltalk.send((smalltalk.WebHMI || WebHMI), "_field_", [smalltalk.send(self, "_prepareWorkField_", [smalltalk.send((smalltalk.WebHMI || WebHMI), "_workSpaceId", [])])]);
smalltalk.send(self, "_createSocket", []);
return self;},
args: [],
source: "start\x0aWebHMI field: ( self prepareWorkField: (WebHMI workSpaceId)).\x0aself createSocket.",
messageSends: ["field:", "prepareWorkField:", "workSpaceId", "createSocket"],
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
smalltalk.send((smalltalk.WebHMI || WebHMI), "_workSpaceId_", ["workspace"]);
smalltalk.send((smalltalk.WebHMI || WebHMI), "_enableMoving_", [true]);
(addButt=smalltalk.send(unescape("%23addItem"), "_asJQuery", []));
smalltalk.send(addButt, "_click_", [(function(){return smalltalk.send(self, "_showAddForm", []);})]);
(remButt=smalltalk.send(unescape("%23delItem"), "_asJQuery", []));
smalltalk.send(remButt, "_click_", [(function(){return smalltalk.send(self, "_showRemForm", []);})]);
(chButt=smalltalk.send(unescape("%23chItem"), "_asJQuery", []));
smalltalk.send(chButt, "_click_", [(function(){return smalltalk.send(self, "_showChangeForm", []);})]);
smalltalk.send(self, "_start", []);
return self;},
args: [],
source: "startAdmin\x0a|addButt remButt clearButt chButt|\x0a\x0aWebHMI workSpaceId: 'workspace'.\x0aWebHMI enableMoving: true.\x0aaddButt := '#addItem' asJQuery.\x0aaddButt click: [  self showAddForm ].\x0aremButt := '#delItem' asJQuery.\x0aremButt click: [  self showRemForm ].\x0achButt := '#chItem' asJQuery.\x0achButt click: [ self showChangeForm ].\x0aself start.\x0a",
messageSends: ["workSpaceId:", "enableMoving:", "asJQuery", "click:", "showAddForm", "showRemForm", "showChangeForm", "start"],
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
smalltalk.send((smalltalk.WebHMI || WebHMI), "_workSpaceId_", ["workspace_client"]);
smalltalk.send((smalltalk.WebHMI || WebHMI), "_enableMoving_", [false]);
smalltalk.send(self, "_start", []);
return self;},
args: [],
source: "startClient\x0a\x0aWebHMI workSpaceId: 'workspace_client'.\x0aWebHMI enableMoving: false.\x0aself start.",
messageSends: ["workSpaceId:", "enableMoving:", "start"],
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
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%3Cform%3E"), "__comma", [unescape("%3Cinput%20id%3D%22itemName%22%20class%3D%27inputField%27%20type%3D%22text%22%20value%3D%22%22%3E%3Cbr%3E")]), "__comma", [unescape("%3Cselect%20id%3D%22itemType%22%20class%3D%27inputField%27%20value%3D%22%22%3E")]), "__comma", [unescape("%3Coption%20id%3D%221%22%20value%3D%22server%22%3EServer%3C/option%3E")]), "__comma", [unescape("%3Coption%20id%3D%222%22%20value%3D%22workstation%22%3EWorkstation%3C/option%3E")]), "__comma", [unescape("%3C/select%3E%3Cbr%3E")]), "__comma", [unescape("%3Cinput%20id%3D%22add%22%20class%3D%27actionButton%27%20%20type%3D%22button%22%20value%3D%22%22%20onclick%3D%22%20smalltalk.WebHMI._addItem%28%29%22%3E")]), "__comma", [unescape("%3C/form%3E")]), "__comma", [unescape("%3Cdiv%20id%3D%22info%22%3E%3C/div%3E")]);
return self;},
args: [],
source: "addFormHTML\x0a^\x0a'<form>',\x0a \x09'<input id=\x22itemName\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<select id=\x22itemType\x22 class=''inputField'' value=\x22\x22>',\x0a\x09\x09'<option id=\x221\x22 value=\x22server\x22>Server</option>',\x0a\x09\x09'<option id=\x222\x22 value=\x22workstation\x22>Workstation</option>',\x0a\x09'</select><br>',\x0a\x09'<input id=\x22add\x22 class=''actionButton''  type=\x22button\x22 value=\x22\x22 onclick=\x22 smalltalk.WebHMI._addItem()\x22>',\x0a'</form>',\x0a'<div id=\x22info\x22></div>'.",
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
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%3Cform%3E"), "__comma", [unescape("%3Cinput%20id%3D%22itemName%22%20class%3D%27inputField%27%20type%3D%22text%22%20value%3D%22%22%3E%3Cbr%3E")]), "__comma", [unescape("%3Cselect%20id%3D%22itemType%22%20class%3D%27inputField%27%20value%3D%22%22%3E")]), "__comma", [unescape("%3Coption%20id%3D%221%22%20value%3D%22server%22%3EServer%3C/option%3E")]), "__comma", [unescape("%3Coption%20id%3D%222%22%20value%3D%22workstation%22%3EWorkstation%3C/option%3E")]), "__comma", [unescape("%3C/select%3E%3Cbr%3E")]), "__comma", [unescape("%3Cinput%20id%3D%22itemTypeName%22%20class%3D%27inputField%27%20type%3D%22text%22%20value%3D%22%22%3E%3Cbr%3E")]), "__comma", [unescape("%3Cinput%20id%3D%22itemOnPath%22%20class%3D%27inputField%27%20type%3D%22text%22%20value%3D%22%22%3E%3Cbr%3E")]), "__comma", [unescape("%3Cinput%20id%3D%22itemOffPath%22%20class%3D%27inputField%27%20type%3D%22text%22%20value%3D%22%22%3E%3Cbr%3E")]), "__comma", [unescape("%3Cinput%20id%3D%22change%22%20class%3D%27actionButton%27%20type%3D%22button%22%20value%3D%27%27%20onclick%3D%22%20smalltalk.WebHMI._changeItem%28%29%22%3E")]), "__comma", [unescape("%3C/form%3E")]), "__comma", [unescape("%3Cdiv%20id%3D%22info%22%3E%3C/div%3E")]);
return self;},
args: [],
source: "changeFormHTML\x0a^\x0a'<form>',\x0a\x09'<input id=\x22itemName\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<select id=\x22itemType\x22 class=''inputField'' value=\x22\x22>',\x0a\x09\x09'<option id=\x221\x22 value=\x22server\x22>Server</option>',\x0a\x09\x09'<option id=\x222\x22 value=\x22workstation\x22>Workstation</option>',\x0a\x09'</select><br>',\x0a\x09'<input id=\x22itemTypeName\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<input id=\x22itemOnPath\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<input id=\x22itemOffPath\x22 class=''inputField'' type=\x22text\x22 value=\x22\x22><br>',\x0a\x09'<input id=\x22change\x22 class=''actionButton'' type=\x22button\x22 value='''' onclick=\x22 smalltalk.WebHMI._changeItem()\x22>',\x0a'</form>',\x0a'<div id=\x22info\x22></div>'.",
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
var itemType=nil;
var typeName=nil;
var onPic=nil;
var offPic=nil;
(itemName=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemName"]));
(itemType=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemType"]));
(typeName=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemTypeName"]));
(onPic=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemOnPath"]));
(offPic=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["itemOffPath"]));
(div=smalltalk.send((typeof document == 'undefined' ? nil : document), "_getElementById_", ["sidebar"]));
((($receiver = ((($receiver = smalltalk.send(smalltalk.send(itemName, "_value", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@change #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(itemType, "_value", [])])]);})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("@change #(WebHMIElement elementFromCollection: ", "__comma", ["'"]), "__comma", [smalltalk.send(self['@currentItem'], "_elName", [])]), "__comma", ["'"]), "__comma", [") elName:  "]), "__comma", ["'"]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", ["'"]), "__comma", ["; elType: ((WebHMIElementType new) typeName: "]), "__comma", ["'"]), "__comma", [smalltalk.send(typeName, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOn: "]), "__comma", ["'"]), "__comma", [smalltalk.send(onPic, "_value", [])]), "__comma", ["'"]), "__comma", ["; imageOff: "]), "__comma", ["'"]), "__comma", [smalltalk.send(offPic, "_value", [])]), "__comma", ["'"]), "__comma", [")"])]);return smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", ["<br>Changed Item "]), "__comma", [smalltalk.send(itemName, "_value", [])]), "__comma", [" "]), "__comma", [smalltalk.send(itemType, "_value", [])])]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Please check out empty fields"]);})]));
return self;},
args: [],
source: "changeItem\x0a|div itemName itemType typeName onPic offPic |\x0aitemName := document getElementById: 'itemName'.\x0aitemType := document getElementById: 'itemType'.\x0atypeName := document getElementById: 'itemTypeName'.\x0aonPic := document getElementById: 'itemOnPath'.\x0aoffPic := document getElementById: 'itemOffPath'.\x0adiv := document getElementById: 'sidebar'.\x0a\x0aitemName value size > 0 ifTrue: [\x0a\x0asocket send: '@change #(WebHMIElement elementFromCollection: ' , '''' , currentItem elName, '''', ') elName:  ', '''' ,itemName value, '''', '; elType: ((WebHMIElementType new) typeName: ', '''' , typeName value,'''',  \x0a\x09\x09\x09'; imageOn: ', '''', onPic value, '''', '; imageOff: ', '''', offPic value, '''', ')'.\x0a\x0adiv innerHTML: ( div innerHTML ,'<br>Changed Item ', itemName value, ' ' ,itemType value ) ]\x0aifFalse: [ window alert: 'Please check out empty fields' ]",
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
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", []), "__eq", ["emptyName"])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", [unescape("%3Cbr%3ERemoved%20Item%20")]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", [])]), "__comma", [unescape("%2C%20please%20refresh")])]);smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("@remove%20%23%28WebHMIElement%20RemoveByName%3A%20"), "__comma", [unescape("%27")]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", [])]), "__comma", [unescape("%27%29")])]);return smalltalk.send(self, "_currentItem_", [smalltalk.send((smalltalk.HMIelement || HMIelement), "_new", [])]);})() : (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Select item to delete"]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(div, "_innerHTML_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(div, "_innerHTML", []), "__comma", [unescape("%3Cbr%3ERemoved%20Item%20")]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", [])]), "__comma", [unescape("%2C%20please%20refresh")])]);smalltalk.send((typeof socket == 'undefined' ? nil : socket), "_send_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("@remove%20%23%28WebHMIElement%20RemoveByName%3A%20"), "__comma", [unescape("%27")]), "__comma", [smalltalk.send(smalltalk.send(self, "_currentItem", []), "_elName", [])]), "__comma", [unescape("%27%29")])]);return smalltalk.send(self, "_currentItem_", [smalltalk.send((smalltalk.HMIelement || HMIelement), "_new", [])]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Select item to delete"]);})]));
return self;},
args: [],
source: "delItem\x0a|div|\x0adiv := document getElementById: 'sidebar'.\x0a\x0a(self currentItem elName = 'emptyName') ifFalse: [\x0a\x09\x09div innerHTML: ( div innerHTML ,'<br>Removed Item ', self currentItem elName, ', please refresh' ).\x0a\x09\x09socket send: '@remove #(WebHMIElement RemoveByName: ', '''', self currentItem elName, ''')'.\x0a\x09\x09self currentItem: (HMIelement new) ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ window alert: 'Select item to delete' ]",
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
(($receiver = div) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@field'], "_setSize_value_", [((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);})() : nil;
return self;},
args: [],
source: "resize\x0a|div|\x0adiv := document getElementById: (self workSpaceId).\x0adiv ifNotNil: [ field setSize: ( div clientWidth - 20 ) value: ( div clientHeight -  20) ]",
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
(($receiver = p) != nil && $receiver != undefined) ? (function(){return smalltalk.send(p, "_innerHTML_", [smalltalk.send(smalltalk.send("Scale ", "__comma", [((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver /((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver +aVal : smalltalk.send($receiver, "__plus", [aVal])) : smalltalk.send($receiver, "__slash", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver +aVal : smalltalk.send($receiver, "__plus", [aVal]))]))).klass === smalltalk.Number) ? $receiver *(100) : smalltalk.send($receiver, "__star", [(100)]))]), "__comma", [unescape("%25")])]);})() : nil;
(self['@scale']=aVal);
return self;},
args: ["aVal"],
source: "scale: aVal\x0a  | p |\x0a  p := document getElementById: 'scaleVal'.\x0a  p ifNotNil: [ p innerHTML: 'Scale ', (((self field width) / ((self field width) + aVal)) * 100 ), '%' ].\x0a  scale := aVal",
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
((($receiver = ((($receiver = ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))).klass === smalltalk.Number) ? $receiver >aHeight : smalltalk.send($receiver, "__gt", [aHeight]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@field'], "_setSize_value_", [smalltalk.send(self['@field'], "_width", []), ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);})() : (function(){return smalltalk.send(self['@field'], "_setSize_value_", [smalltalk.send(self['@field'], "_width", []), aHeight]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@field'], "_setSize_value_", [smalltalk.send(self['@field'], "_width", []), ((($receiver = smalltalk.send(div, "_clientHeight", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);}), (function(){return smalltalk.send(self['@field'], "_setSize_value_", [smalltalk.send(self['@field'], "_width", []), aHeight]);})]));
return self;},
args: ["aHeight"],
source: "setHeight: aHeight\x0a|div|\x0adiv := document getElementById: (self workSpaceId).\x0a(div clientHeight - 20) > aHeight ifTrue: [ field setSize: ( field width) value: (div clientHeight - 20) ] ifFalse: [ field setSize: ( field width) value: aHeight ]",
messageSends: ["getElementById:", "workSpaceId", "ifTrue:ifFalse:", ">", "-", "clientHeight", "setSize:value:", "width"],
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
smalltalk.send(self['@field'], "_setViewBox_value_width_height_fl_", [x, y, ((($receiver = smalltalk.send(self['@field'], "_width", [])).klass === smalltalk.Number) ? $receiver +w : smalltalk.send($receiver, "__plus", [w])), ((($receiver = smalltalk.send(self['@field'], "_height", [])).klass === smalltalk.Number) ? $receiver +h : smalltalk.send($receiver, "__plus", [h])), false]);
return self;},
args: ["x", "y", "w", "h"],
source: "setViewBox: x atY: y width: w height: h\x0a\x09field setViewBox: x value: y  width:((field width) + w) height: ((field height) + h) fl: false.",
messageSends: ["setViewBox:value:width:height:fl:", "+", "width", "height"],
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
((($receiver = ((($receiver = ((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))).klass === smalltalk.Number) ? $receiver >aWidth : smalltalk.send($receiver, "__gt", [aWidth]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@field'], "_setSize_value_", [((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), smalltalk.send(self['@field'], "_height", [])]);})() : (function(){return smalltalk.send(self['@field'], "_setSize_value_", [aWidth, smalltalk.send(self['@field'], "_height", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@field'], "_setSize_value_", [((($receiver = smalltalk.send(div, "_clientWidth", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)])), smalltalk.send(self['@field'], "_height", [])]);}), (function(){return smalltalk.send(self['@field'], "_setSize_value_", [aWidth, smalltalk.send(self['@field'], "_height", [])]);})]));
return self;},
args: ["aWidth"],
source: "setWidth: aWidth\x0a|div|\x0adiv := document getElementById: (self workSpaceId).\x0a(div clientWidth - 20) > aWidth ifTrue: [ field setSize: (div clientWidth - 20) value:(field height ) ] ifFalse: [ field setSize: aWidth value:(field height ) ]",
messageSends: ["getElementById:", "workSpaceId", "ifTrue:ifFalse:", ">", "-", "clientWidth", "setSize:value:", "height"],
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
smalltalk.send(self, "_scale_", [((($receiver = smalltalk.send(self, "_scale", [])).klass === smalltalk.Number) ? $receiver +(20) : smalltalk.send($receiver, "__plus", [(20)]))]);
smalltalk.send(self, "_setViewBox_atY_width_height_", [(0), (0), smalltalk.send(self, "_scale", []), smalltalk.send(self, "_scale", [])]);
smalltalk.send(self, "_setHeight_", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_height", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);
smalltalk.send(self, "_setWidth_", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);
return self;},
args: [],
source: "zoomIn\x0a\x09self scale: ( self scale + 20 ).\x0a\x09self setViewBox: 0 atY: 0 width: (self scale) height: (self scale).\x0a\x09self setHeight: (self field height - 20).\x0a\x09self setWidth: (self field width - 20).",
messageSends: ["scale:", "+", "scale", "setViewBox:atY:width:height:", "setHeight:", "-", "height", "field", "setWidth:", "width"],
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
smalltalk.send(self, "_scale_", [((($receiver = smalltalk.send(self, "_scale", [])).klass === smalltalk.Number) ? $receiver -(20) : smalltalk.send($receiver, "__minus", [(20)]))]);
smalltalk.send(self, "_setViewBox_atY_width_height_", [(0), (0), smalltalk.send(self, "_scale", []), smalltalk.send(self, "_scale", [])]);
smalltalk.send(self, "_setHeight_", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_height", [])).klass === smalltalk.Number) ? $receiver +(20) : smalltalk.send($receiver, "__plus", [(20)]))]);
smalltalk.send(self, "_setWidth_", [((($receiver = smalltalk.send(smalltalk.send(self, "_field", []), "_width", [])).klass === smalltalk.Number) ? $receiver +(20) : smalltalk.send($receiver, "__plus", [(20)]))]);
return self;},
args: [],
source: "zoomOut\x0a\x09self scale: ( self scale - 20 ).\x0a\x09self setViewBox: 0 atY: 0 width: (self scale) height: (self scale).\x0a\x09self setHeight: (self field height + 20).\x0a\x09self setWidth: (self field width + 20).",
messageSends: ["scale:", "-", "scale", "setViewBox:atY:width:height:", "setHeight:", "+", "height", "field", "setWidth:", "width"],
referencedClasses: []
}),
smalltalk.WebHMI.klass);


