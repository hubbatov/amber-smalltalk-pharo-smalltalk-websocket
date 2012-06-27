Smalltalk current createPackage: 'HMI' properties: #{}!
Object subclass: #CommandExecutor
	instanceVariableNames: 'receiver'
	package: 'HMI'!

CommandExecutor class instanceVariableNames: 'reciever'!

!CommandExecutor class methodsFor: 'not yet classified'!

doIt: aString
| compiler  |
	compiler := Compiler new.
	[compiler parseExpression: aString] on: Error do: [:ex |
		^window alert: ex messageText].
	^(compiler eval: (compiler compile: 'doIt ^[', aString, '] value' forClass: DoIt)) fn applyTo: self receiver arguments: #()
!

receiver
	^receiver ifNil: [DoIt new]
!

receiver: anObject
	receiver := anObject
! !

Object subclass: #HMIelement
	instanceVariableNames: 'state elName elType element xPos yPos text elPicture elPictureOn elPictureOff params param1'
	package: 'HMI'!

!HMIelement methodsFor: 'not yet classified'!

drawOn: aRaphaelPaper
	element := aRaphaelPaper image: ( self elPicture ) onX: self xPos onY: self yPos w: 128 h: 128.
	text := aRaphaelPaper text: self xPos + 64 onY: (self yPos + 140) text: self elName.
        element attr: 'opacity' value: 0.8.
	((element attr: 'y') + 192) > ( WebHMI field height ) ifTrue: [ WebHMI setHeight: ( (element attr: 'y') + 192 ) ].
	((element attr: 'x') + 128) > ( WebHMI field width ) ifTrue: [ WebHMI setWidth: ( (element attr: 'x') + 128 ) ].
	WebHMI enableMoving ifTrue: [ self setActions ].
!

elName
	^elName ifNil:[ 'emptyName'] ifNotNil: [elName]
!

elName: aName
	elName := aName.
	text ifNotNil: [ text attr: 'text' value: aName ]
!

elPicture
        (self state = 'on') ifTrue: [ ^self elType on ] ifFalse: [ ^self elType off ]
!

elType
	elType ifNil: [ elType := HMIelementType new ].
	^elType
!

elType: aType
	elType := aType.
	element ifNotNil: [ element attr: 'src' value: ( self elPicture )]
!

element
	^element
!

setActions
| ox oy xFactor yFactor|
ox := ( element attr: 'x' ).
oy := ( element attr: 'y' ).
xFactor := 1.
yFactor := 1.

element drag: [ :dx :dy | 
			xFactor := ((WebHMI field width + WebHMI scale) / (WebHMI field width )).
			yFactor := ((WebHMI field height + WebHMI scale) / (WebHMI field height )).
                        socket send: '@changePos #(WebHMIElement elementFromCollection: ', '''', self elName, '''' , ' ) xPos:',  ( ox + dx ), ' yPos:',  ( oy + dy ).
			"(oy + dy + 192) > ( WebHMI field height ) ifTrue: [ WebHMI setHeight: ( oy + dy + 192 ) ]."
                        "(ox + dx + 128) > ( WebHMI field width ) ifTrue: [ WebHMI setWidth: ( ox + dx + 128 ) ]. "] 
		value: [  WebHMI currentItem: self. element attr: 'opacity' value: 1. ] 
		value: [  ox := (xFactor / ( element attr: 'x' ) + ( element attr: 'x' )). oy := (yFactor / ( element attr: 'y' ) +  ( element attr: 'y' )). element attr: 'opacity' value: 0.8. ].
element dblclick: [ socket send: '@switch #(WebHMIElement elementFromCollection: ', '''', self elName, '''' , ' ) switch' ].
!

state
	^state
!

state: aState
	state := aState
!

switch
	self state = 'on' ifTrue: [ self state: 'off' ] ifFalse: [ self state: 'on' ].
	element attr: 'src' value: ( self elPicture )
!

text
	^text
!

usingSocket: aSocket
	socket := aSocket
!

xPos
	^xPos ifNil: [0] ifNotNil:[xPos]
!

xPos: aPos
	xPos := aPos.
        element ifNotNil: [ element attr: 'x' value: xPos. text attr: 'x' value: xPos + 64]
!

yPos
	^yPos ifNil: [0] ifNotNil:[yPos]
!

yPos: aPos
	yPos := aPos.
        element ifNotNil: [ element attr: 'y' value: yPos. text attr: 'y' value: yPos + 140]
! !

HMIelement class instanceVariableNames: 'collection'!

!HMIelement class methodsFor: 'not yet classified'!

elements
	collection ifNil: [ collection := Array new ].
	^collection
!

getElement: aName
	(self elements) do: [ :el | (el elName = aName) ifTrue: [ ^el ]]
!

removeElement: aHMIelement
        aHMIelement element remove.
        aHMIelement text remove.
	self elements remove: aHMIelement.
! !

Object subclass: #HMIelementType
	instanceVariableNames: 'on off name'
	package: 'HMI'!

!HMIelementType methodsFor: 'not yet classified'!

off
	^off
!

off: aPath
	off := aPath
!

on
	^on
!

on: aPath
	on := aPath
!

typeName
	^name
!

typeName: aName
	name := aName
! !

HMIelementType class instanceVariableNames: 'collection'!

!HMIelementType class methodsFor: 'not yet classified'!

getType: aTypeName
	collection do: [ :t| t typeName = aTypeName ifTrue: [ ^t ] ].
	^false
!

types
	collection ifNil: [ collection := Array new ].
       ^collection
! !

Object subclass: #WebHMI
	instanceVariableNames: 'field elements'
	package: 'HMI'!

!WebHMI methodsFor: 'not yet classified'!

createSocket
<socket = new WebSocket("ws://192.168.18.90:9898/broadcast"); >.
<socket.onopen = function() { alert('Connection has been made successfuly');>.
socket send: '@getScheme'.
<}>.
<socket.onmessage = function (evt) { >.
    self processMessage: (evt data).
<};>.
!

elements 
	elements ifNil: [ elements := HMIelement elements ].
	^elements
!

elementsContains: aString
	self elements do: [ : el | el elName = aString ifTrue: [^ true]].
	^false
!

prepareWorkField: aId
|div|
div := document getElementById: aId.
^(Raphael value: div value: ( div clientWidth - 20 ) value: ( div clientHeight -  20))
!

processInfoMessage: msg
|tmp|
tmp := (CommandExecutor doIt: (msg replace: '@info ' with: '')).
(self elementsContains: ( tmp elName )) ifFalse: [ elements add: (tmp usingSocket: socket ; drawOn: (WebHMI field))]
!

processMessage: msg
(msg match: '@info')  ifTrue: [ self processInfoMessage: msg ].
HMIelement elements size > 0 ifTrue: [
(msg match: '@switched')  ifTrue: [ self processSwitchedMessage: msg ].
(msg match: '@moved')  ifTrue: [ self processMovedMessage: msg ].
(msg match: '@params')  ifTrue: [ self processParamsMessage: msg ].
(msg match: '@remove')  ifTrue: [ self processRemoveMessage: msg ].
(msg match: '@change')  ifTrue: [ self processParamChangeMessage: msg ]]
!

processMovedMessage: msg
|tmp|
CommandExecutor doIt: (msg replace: '@moved ' with: '')
!

processParamChangeMessage: msg
(CommandExecutor doIt: (msg replace: '@change ' with: '')) .
!

processParamsMessage: msg
|tmp|
(CommandExecutor doIt: (msg replace: '@params ' with: '')) drawOn: field.
!

processRemoveMessage: msg
CommandExecutor doIt: (msg replace: '@remove ' with: '')
!

processSwitchedMessage: msg
|tmp|
CommandExecutor doIt: (msg replace: '@switched ' with: '')
!

showAddForm
|div addButton|
div := document getElementById: 'sidebar'.
div innerHTML: (WebHMI addFormHTML)
!

showChangeForm
|div addButton|
div := document getElementById: 'sidebar'.
div innerHTML: (WebHMI changeFormHTML)
!

showRemForm
|div remButton|
div := document getElementById: 'sidebar'.
div innerHTML: (WebHMI removeFormHTML)
!

start
WebHMI field: ( self prepareWorkField: (WebHMI workSpaceId)).
self createSocket.
!

startAdmin
|addButt remButt clearButt chButt|

WebHMI workSpaceId: 'workspace'.
WebHMI enableMoving: true.
addButt := '#addItem' asJQuery.
addButt click: [  self showAddForm ].
remButt := '#delItem' asJQuery.
remButt click: [  self showRemForm ].
chButt := '#chItem' asJQuery.
chButt click: [ self showChangeForm ].
self start.
!

startClient

WebHMI workSpaceId: 'workspace_client'.
WebHMI enableMoving: false.
self start.
! !

WebHMI class instanceVariableNames: 'currentItem field scale moveAccess paperId'!

!WebHMI class methodsFor: 'not yet classified'!

addFormHTML
^
'<form>',
 	'<input id="itemName" class=''inputField'' type="text" value=""><br>',
	'<select id="itemType" class=''inputField'' value="">',
		'<option id="1" value="server">Server</option>',
		'<option id="2" value="workstation">Workstation</option>',
	'</select><br>',
	'<input id="add" class=''actionButton''  type="button" value="" onclick=" smalltalk.WebHMI._addItem()">',
'</form>',
'<div id="info"></div>'.
!

addItem
|div itemName itemType err|
itemName := document getElementById: 'itemName'.
itemType := document getElementById: 'itemType'.
div := document getElementById: 'sidebar'.
itemName value > 0 ifTrue: [
                      div innerHTML: ( div innerHTML ,'<br>Added Item ', itemName value, ' ' ,itemType value ).
                      socket send: '@add #(WebHMIElement Add: (WebHMIElement new createElement:  ', '''' ,itemName value, '''', ' withType: (WebHMIElementType ', itemType value, ')))']
                                     ifFalse: [ window alert: 'Field ''Name'' must be not empty' ]
!

changeFormHTML
^
'<form>',
	'<input id="itemName" class=''inputField'' type="text" value=""><br>',
	'<select id="itemType" class=''inputField'' value="">',
		'<option id="1" value="server">Server</option>',
		'<option id="2" value="workstation">Workstation</option>',
	'</select><br>',
	'<input id="itemTypeName" class=''inputField'' type="text" value=""><br>',
	'<input id="itemOnPath" class=''inputField'' type="text" value=""><br>',
	'<input id="itemOffPath" class=''inputField'' type="text" value=""><br>',
	'<input id="change" class=''actionButton'' type="button" value='''' onclick=" smalltalk.WebHMI._changeItem()">',
'</form>',
'<div id="info"></div>'.
!

changeItem
|div itemName itemType typeName onPic offPic |
itemName := document getElementById: 'itemName'.
itemType := document getElementById: 'itemType'.
typeName := document getElementById: 'itemTypeName'.
onPic := document getElementById: 'itemOnPath'.
offPic := document getElementById: 'itemOffPath'.
div := document getElementById: 'sidebar'.

itemName value size > 0 ifTrue: [

socket send: '@change #(WebHMIElement elementFromCollection: ' , '''' , currentItem elName, '''', ') elName:  ', '''' ,itemName value, '''', '; elType: ((WebHMIElementType new) typeName: ', '''' , typeName value,'''',  
			'; imageOn: ', '''', onPic value, '''', '; imageOff: ', '''', offPic value, '''', ')'.

div innerHTML: ( div innerHTML ,'<br>Changed Item ', itemName value, ' ' ,itemType value ) ]
ifFalse: [ window alert: 'Please check out empty fields' ]
!

currentItem
        currentItem ifNil: [ currentItem := HMIelement new ].
	^currentItem
!

currentItem: aItem
|div text type onPath offPath remButton|
currentItem := aItem.
div := document getElementById: 'selected'.
text := document getElementById: 'itemName'.
type := document getElementById: 'itemTypeName'.
onPath := document getElementById: 'itemOnPath'.
offPath := document getElementById: 'itemOffPath'.
div ifNotNil: [ div innerHTML: 'Selected item - ' , currentItem elName ].
text ifNotNil: [ text value: currentItem elName ].
type ifNotNil: [ type value: currentItem elType typeName ].
onPath ifNotNil: [ onPath value: currentItem elType on ].
offPath ifNotNil: [ offPath value: currentItem elType off ].
!

delItem
|div|
div := document getElementById: 'sidebar'.

(self currentItem elName = 'emptyName') ifFalse: [
		div innerHTML: ( div innerHTML ,'<br>Removed Item ', self currentItem elName, ', please refresh' ).
		socket send: '@remove #(WebHMIElement RemoveByName: ', '''', self currentItem elName, ''')'.
		self currentItem: (HMIelement new) ]
								ifTrue: [ window alert: 'Select item to delete' ]
!

enableMoving
^moveAccess
!

enableMoving: value
moveAccess := value.
!

field
 ^field
!

field: aRaphaelField
  field ifNotNil: [ field setFinish ].
  field := aRaphaelField.
  field setStart.
!

removeFormHTML
^
 'Click item to select, than click '' Remove '' to remove it <br>', 
'<div id="selected"></div>',
'<form>',
'	<input id="remove" class=''actionButton'' type="button" value="" onclick=" smalltalk.WebHMI._delItem()">',
'</form>',
'<div id="info"></div>'.
!

resize
|div|
div := document getElementById: (self workSpaceId).
field setSize:  ( div clientWidth - 20 ) value: ( div clientHeight -  20)
!

scale
 scale ifNil: [ scale := 0 ].
 ^scale
!

scale: aVal
  | p |
  p := document getElementById: 'scaleVal'.
  p ifNotNil: [ p innerHTML: 'Scale ', (((self field width) / ((self field width) + aVal)) * 100 ), '%' ].
  scale := aVal
!

setHeight: aHeight
|div|
div := document getElementById: (self workSpaceId).
(div clientHeight - 20) > aHeight ifTrue: [ field setSize: ( field width) value: (div clientHeight - 20) ] ifFalse: [ field setSize: ( field width) value: aHeight ]
!

setViewBox: x atY: y width: w height: h
	field setViewBox: x value: y  width:((field width) + w) height: ((field height) + h) fl: false.
!

setWidth: aWidth
|div|
div := document getElementById: (self workSpaceId).
(div clientWidth - 20) > aWidth ifTrue: [ field setSize: (div clientWidth - 20) value:(field height ) ] ifFalse: [ field setSize: aWidth value:(field height ) ]
!

workSpaceId
	paperId ifNil: [ paperId := 'workspace' ].
	^paperId
!

workSpaceId: aId
	paperId := aId
!

zoomIn
	self scale: ( self scale + 20 ).
	self setViewBox: 0 atY: 0 width: (self scale) height: (self scale).
	self setHeight: (self field height - 20).
	self setWidth: (self field width - 20).
!

zoomOut
	self scale: ( self scale - 20 ).
	self setViewBox: 0 atY: 0 width: (self scale) height: (self scale).
	self setHeight: (self field height + 20).
	self setWidth: (self field width + 20).
! !

