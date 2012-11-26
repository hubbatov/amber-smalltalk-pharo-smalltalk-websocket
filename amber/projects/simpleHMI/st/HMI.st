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
	instanceVariableNames: 'state elName elType element xPos yPos text elPicture elPictureOn elPictureOff params param1 usage scene socket netClient'
	package: 'HMI'!

!HMIelement methodsFor: 'not yet classified'!

client
	^netClient
!

drawOn: aRaphaelPaper
	element := aRaphaelPaper image: ( self elPicture ) onX: self xPos onY: self yPos w: 128 h: 128.
	text := aRaphaelPaper text: self xPos + 64 onY: (self yPos + 140) text: self elName.
 	usage := aRaphaelPaper text: self xPos + 64 onY: (self yPos + 160) text: ''.
	scene := aRaphaelPaper.
	self state: self state.
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

element drag: [ :dx :dy | (self client instance) send: '@changePos #(WebHMIElement elementFromCollection: ', '''', self elName, '''' , ' ) xPos:',  ( ox + dx ), ' yPos:',  ( oy + dy )] 
		value: [  element attr: 'opacity' value: 1. ] 
		value: [  ox := (xFactor / ( element attr: 'x' ) + ( element attr: 'x' )). oy := (yFactor / ( element attr: 'y' ) +  ( element attr: 'y' )). element attr: 'opacity' value: 0.8. ].

element dblclick: [ (self client instance) send: '@switch #(WebHMIElement elementFromCollection: ', '''', self elName, '''' , ' ) switch' ].

element click: [ WebHMIClientGui currentItem: self ]
!

setParent: aWebHMIClient
	netClient := aWebHMIClient.
	self drawOn: ( self client interface paper ).
	self setActions.
!

state
	^state
!

state: aState
	state := aState.
	usage ifNotNil:[ 
	self state = 'on' 
		ifTrue: [ usage attr: 'text' value: 'Loaded on: 0% ' ] 
		ifFalse: [ usage attr: 'text' value: 'Is switched off']]
!

switch
	self state = 'on' ifTrue: [ self state: 'off'. ] ifFalse: [ self state: 'on'.].
	element attr: 'src' value: ( self elPicture )
!

text
	^text
!

usage
	^usage
!

usage: anInteger
	usage ifNotNil: [ self state = 'on' ifTrue: [ usage attr: 'text' value: 'Loaded on: ', anInteger asString, '%' ]]
!

usingSocket: aSocket
	socket := aSocket
!

xPos
	^xPos ifNil: [0] ifNotNil:[xPos]
!

xPos: aPos
	xPos := aPos.
        element ifNotNil: [ element attr: 'x' value: xPos. text attr: 'x' value: xPos + 64. usage attr: 'x' value: xPos + 64.]
!

yPos
	^yPos ifNil: [0] ifNotNil:[yPos]
!

yPos: aPos
	yPos := aPos.
        element ifNotNil: [ element attr: 'y' value: yPos. text attr: 'y' value: yPos + 140. usage attr: 'y' value: yPos + 160.]
! !

HMIelement class instanceVariableNames: 'collection'!

!HMIelement class methodsFor: 'not yet classified'!

clear
	self elements do: [ :each |  HMIelement removeElement: each ].
!

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
	aHMIelement usage remove.
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
	instanceVariableNames: 'field elements socketCreated'
	package: 'HMI'!

!WebHMI methodsFor: 'not yet classified'!

createSocket
<socket = new WebSocket("ws://localhost:9898/broadcast"); >.
<socket.onopen = function() { alert('Connection has been made successfuly');>.
socket send: '@getScheme'.
<}>.
<socket.onmessage = function (evt) { >.
    self processMessage: (evt data).
<};>.
!

createSocket: aString

<socket = new WebSocket(aString); >.
<socket.onopen = function() { alert('Connection has been made successfuly');>.
socket send: '@getScheme'.
<}>.
<socket.onmessage = function (evt) { >.
    self processMessage: (evt data).
<};>.
<socket.onclose = function() { alert('Connection closed');}>.
socketCreated := true.
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
(self elementsContains: ( tmp elName )) ifFalse: [ HMIelement elements add: (tmp usingSocket: socket ; drawOn: (WebHMI field))]
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

reconnect
	self start.
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
|adress |

WebHMI field: ( self prepareWorkField: (WebHMI workSpaceId)).

adress := document getElementById: 'ServerAddress'.
	adress ifNotNil: [
         	self createSocket: 'ws://', adress value,'/broadcast'. adress hidden: true.].
!

startAdmin
|addButt remButt clearButt chButt connect sidebar|

WebHMI workSpaceId: 'workspace'.
WebHMI enableMoving: true.
addButt := '#addItem' asJQuery.
addButt hide.
addButt click: [  self showAddForm. ].
remButt := '#delItem' asJQuery.
remButt hide.
remButt click: [  self showRemForm ].
chButt := '#chItem' asJQuery.
chButt hide.
chButt click: [ self showChangeForm ].
sidebar := '#sidebar' asJQuery.
sidebar hide.

connect := '#ConnectButton' asJQuery.
connect click: [ self reconnect. connect hide. addButt show. remButt show. chButt show. self showAddForm. sidebar show.].
!

startClient
|connect|

WebHMI workSpaceId: 'workspace_client'.
WebHMI enableMoving: false.

connect := '#ConnectButton' asJQuery.
connect click: [ self reconnect. connect hide. ].
! !

WebHMI class instanceVariableNames: 'currentItem field scale moveAccess paperId'!

!WebHMI class methodsFor: 'not yet classified'!

addFormHTML
^
'<form>',
	'<p>Item name:',
 	'<input id="itemName" class=''inputField'' type="text" value=""><br>',
	'<p>Item type:',
	'<select id="itemType" class=''inputField'' value="">',
		'<option id="1" value="server">Server</option>',
		'<option id="2" value="workstation">Workstation</option>',
		'<option id="3" value="router">Router</option>',
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
	'<p>Item name:',
	'<input id="itemName" class=''inputField'' type="text" value=""><br>',
	'<p>Item type name:',
	'<input id="itemTypeName" class=''inputField'' type="text" value=""><br>',
	'<p>Item switched on value:',
	'<input id="itemOnPath" class=''inputField'' type="text" value=""><br>',
	'<p>Item switched off value:',
	'<input id="itemOffPath" class=''inputField'' type="text" value=""><br>',
	'<input id="change" class=''actionButton'' type="button" value='''' onclick=" smalltalk.WebHMI._changeItem()">',
'</form>',
'<div id="info"></div>'.
!

changeItem
|div itemName typeName onPic offPic |
itemName := document getElementById: 'itemName'.
typeName := document getElementById: 'itemTypeName'.
onPic := document getElementById: 'itemOnPath'.
offPic := document getElementById: 'itemOffPath'.
div := document getElementById: 'sidebar'.

itemName value size > 0 ifTrue: [
	typeName value size > 0 ifTrue: [
		onPic value size > 0 ifTrue: [
			offPic value size > 0 ifTrue: [

				socket send: '@changeParam #(WebHMIElement elementFromCollection: ' , '''' , currentItem elName, '''', ') elName:  ', '''' ,itemName value, '''', '; elType: ((WebHMIElementType new) typeName: ', '''' , typeName value,'''',  
						'; imageOn: ', '''', onPic value, '''', '; imageOff: ', '''', offPic value, '''', ')'.

				div innerHTML: ( div innerHTML ,'<br>Changed Item ', itemName value, ' ' , typeName value ) ]
			ifFalse: [ window alert: 'Please check out empty fields' ]]
		ifFalse: [ window alert: 'Please check out empty fields' ]] 
	ifFalse: [ window alert: 'Please check out empty fields' ]]
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
		div innerHTML: ( div innerHTML ,'<br>Removed Item ', self currentItem elName ).
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
div ifNotNil: [ 
field ifNotNil: [field setSize: ( div clientWidth - 20 ) value: ( div clientHeight -  20) ]]
!

scale
 scale ifNil: [ scale := 0 ].
 ^scale
!

scale: aVal
  | p |
  p := document getElementById: 'scaleVal'.
  p ifNotNil: [ field ifNotNil: [p innerHTML: 'Scale ', (((self field width) / ((self field width) + aVal)) * 100 ), '%' ]].
  scale := aVal
!

setHeight: aHeight
|div|
div := document getElementById: (self workSpaceId).
div ifNotNil: [
field ifNotNil:[
(div clientHeight - 20) > aHeight ifTrue: [ field setSize: ( field width) value: (div clientHeight - 20) ] ifFalse: [ field setSize: ( field width) value: aHeight ]]]
!

setViewBox: x atY: y width: w height: h
	field ifNotNil:[
	field setViewBox: x value: y  width:((field width) + w) height: ((field height) + h) fl: false.]
!

setWidth: aWidth
|div|
div := document getElementById: (self workSpaceId).
div ifNotNil: [
field ifNotNil: [
(div clientWidth - 20) > aWidth ifTrue: [ field setSize: (div clientWidth - 20) value:(field height ) ] ifFalse: [ field setSize: aWidth value:(field height ) ]]]
!

workSpaceId
	paperId ifNil: [ paperId := 'workspace' ].
	^paperId
!

workSpaceId: aId
	paperId := aId
!

zoomIn
	field ifNotNil: [
	self scale: ( self scale + 20 ).
	self setViewBox: 0 atY: 0 width: (self scale) height: (self scale).
	self setHeight: (self field height - 20).
	self setWidth: (self field width - 20).]
!

zoomOut
	field ifNotNil:[
	self scale: ( self scale - 20 ).
	self setViewBox: 0 atY: 0 width: (self scale) height: (self scale).
	self setHeight: (self field height + 20).
	self setWidth: (self field width + 20).]
! !

Object subclass: #WebHMIClient
	instanceVariableNames: 'commander ui'
	package: 'HMI'!

!WebHMIClient methodsFor: 'not yet classified'!

commander
	"Returns aWebHMICommandProcessor object of the client"
	^commander
!

init
	"Entry point for Network part. Here Network part will be initialized"
	| address |
	Transcript show: 'Connecting to server...'; cr.
	address := document getElementById: 'ServerAddress'.
		address ifNotNil: [  self initClientOn: 'ws://', address value,'/broadcast'. ]
!

initClientOn: anAddressWithPort
	"Initializing WebSocket for data exchange"
	commander := WebHMICommandProcessor new.
	commander baseClient: self.

	<socket = new WebSocket(anAddressWithPort); >.
	<socket.onopen = function() { alert('Connection has been made successfuly');>.
		socket send: (WebHMICommand getSchemeCommand).
	<}>.
	<socket.onmessage = function (evt) { >.
    		self commander processMessage: (evt data).
	<};>.
	
	<socket.onclose = function() { alert('Connection closed');}>.
!

installGui: aWebHMIClientGui
	"Installs the GUI, that NetClient can use"
	ui := aWebHMIClientGui
!

instance
	"Returns a WebSocket object of the client"
	^socket
!

interface
	"Returns a WebHMIClientGui object of the client"
	^ui
! !

WebHMIClient class instanceVariableNames: 'socket'!

Object subclass: #WebHMIClientGui
	instanceVariableNames: 'netClient field htmlContent'
	package: 'HMI'!

!WebHMIClientGui methodsFor: 'not yet classified'!

init
	"Entry point for application. Here GUI part will be initialized, after that Network part will be initialized"	 
	| connect |
	
	Transcript show: 'Creating GUI...'; cr.
	self paper: (self preparePaper: 'workspace').
	netClient := WebHMIClient new.
	netClient installGui: self.

	connect := '#ConnectButton' asJQuery.
	connect click: [ 
		netClient init. 	
		htmlContent := WebHMIClientHTMLBuilder new.
		htmlContent buildMainHtml ]
!

paper
	^field
!

paper: aPaper
	 field := aPaper
!

preparePaper: aId
	"Workfield prepare. Returns paper, where elements will be drawn"
	|div|
	Transcript show: 'Creating paper...'; cr.
	div := document getElementById: aId.
	^(Raphael value: div value: ( div clientWidth - 20 ) value: ( div clientHeight -  20))
! !

WebHMIClientGui class instanceVariableNames: 'currentItem'!

!WebHMIClientGui class methodsFor: 'not yet classified'!

currentItem
        currentItem ifNil: [ currentItem := HMIelement new ].
	^currentItem
!

currentItem: aItem
"Selecting item"
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

currentItemRemove
	Transcript show: 'Removing current item'; cr

	"|div|
div := document getElementById: 'sidebar'.

(self currentItem elName = 'emptyName') ifFalse: [
		div innerHTML: ( div innerHTML ,'<br>Removed Item ', self currentItem elName ).
		socket send: '@remove #(WebHMIElement RemoveByName: ', '''', self currentItem elName, ''')'.
		self currentItem: (HMIelement new) ]
								ifTrue: [ window alert: 'Select item to delete' ]"
!

currentItemUpdate
	Transcript show: 'Removing current item'; cr

"
itemName := document getElementById: 'itemName'.
typeName := document getElementById: 'itemTypeName'.
onPic := document getElementById: 'itemOnPath'.
offPic := document getElementById: 'itemOffPath'.
div := document getElementById: 'sidebar'.

itemName value size > 0 ifTrue: [
	typeName value size > 0 ifTrue: [
		onPic value size > 0 ifTrue: [
			offPic value size > 0 ifTrue: [

				socket send: '@changeParam #(WebHMIElement elementFromCollection: ' , '''' , currentItem elName, '''', ') elName:  ', '''' ,itemName value, '''', '; elType: ((WebHMIElementType new) typeName: ', '''' , typeName value,'''',  
						'; imageOn: ', '''', onPic value, '''', '; imageOff: ', '''', offPic value, '''', ')'.

				div innerHTML: ( div innerHTML ,'<br>Changed Item ', itemName value, ' ' , typeName value ) ]
			ifFalse: [ window alert: 'Please check out empty fields' ]]
		ifFalse: [ window alert: 'Please check out empty fields' ]] 
	ifFalse: [ window alert: 'Please check out empty fields' ]]
ifFalse: [ window alert: 'Please check out empty fields' ]"
!

newItemAdd
	Transcript show: 'Adding new item'; cr

"
|div itemName itemType err|
itemName := document getElementById: 'itemName'.
itemType := document getElementById: 'itemType'.
div := document getElementById: 'sidebar'.
itemName value > 0 ifTrue: [
                      div innerHTML: ( div innerHTML ,'<br>Added Item ', itemName value, ' ' ,itemType value ).
                      socket send: '@add #(WebHMIElement Add: (WebHMIElement new createElement:  ', '''' ,itemName value, '''', ' withType: (WebHMIElementType ', itemType value, ')))']
                                     ifFalse: [ window alert: 'Field ''Name'' must be not empty' ] "
! !

Object subclass: #WebHMIClientHTMLBuilder
	instanceVariableNames: ''
	package: 'HMI'!

!WebHMIClientHTMLBuilder methodsFor: 'not yet classified'!

buildMainHtml
	"HTML-generator init part. Builds html with linking buttons with functions"
	| addButton removeButton updateButton sidebarDiv |
	Transcript show: 'Generating main HTML...'; cr.

	addButton := '#addItem' asJQuery.
	addButton click: [  self renderAddForm ].

	removeButton := '#delItem' asJQuery.
	removeButton click: [  self renderRemoveForm ].

	updateButton := '#chItem' asJQuery.
	updateButton click: [ self renderUpdateForm ].

	self renderAddForm.
!

renderAddForm
|div|
	div := document getElementById: 'sidebar'.
	div ifNotNil: [ div innerHTML: (WebHMIClientHTMLBuilder formAddHtml)]
!

renderRemoveForm
|div|
	div := document getElementById: 'sidebar'.
	div ifNotNil: [ div innerHTML: (WebHMIClientHTMLBuilder formRemoveHtml) ]
!

renderUpdateForm
|div|
	div := document getElementById: 'sidebar'.
	div ifNotNil: [ div innerHTML: (WebHMIClientHTMLBuilder formUpdateHtml) ]
! !

!WebHMIClientHTMLBuilder class methodsFor: 'not yet classified'!

formAddHtml
^
'<form>',
	'<p>Item name:',
 	'<input id="itemName" class=''inputField'' type="text" value=""><br>',
	'<p>Item type:',
	'<select id="itemType" class=''inputField'' value="">',
		'<option id="1" value="server">Server</option>',
		'<option id="2" value="workstation">Workstation</option>',
		'<option id="3" value="router">Router</option>',
	'</select><br>',
	'<input id="add" class=''actionButton''  type="button" value="" onclick=" smalltalk.WebHMIClientGui._newItemAdd()">',
'</form>',
'<div id="info"></div>'.
!

formRemoveHtml
^
 'Click item to select, than click '' Remove '' to remove it <br>', 
'<div id="selected"></div>',
'<form>',
'	<input id="remove" class=''actionButton'' type="button" value="" onclick=" smalltalk.WebHMIClientGui._currentItemRemove()">',
'</form>',
'<div id="info"></div>'.
!

formUpdateHtml
^
'<form>',
	'<p>Item name:',
	'<input id="itemName" class=''inputField'' type="text" value=""><br>',
	'<p>Item type name:',
	'<input id="itemTypeName" class=''inputField'' type="text" value=""><br>',
	'<p>Item switched on value:',
	'<input id="itemOnPath" class=''inputField'' type="text" value=""><br>',
	'<p>Item switched off value:',
	'<input id="itemOffPath" class=''inputField'' type="text" value=""><br>',
	'<input id="change" class=''actionButton'' type="button" value='''' onclick=" smalltalk.WebHMIClientGui._currentItemUpdate()">',
'</form>',
'<div id="info"></div>'.
! !

Object subclass: #WebHMICommand
	instanceVariableNames: ''
	package: 'HMI'!

!WebHMICommand class methodsFor: 'not yet classified'!

changeCommand
	^'@change'
!

getSchemeCommand
	^'@getScheme'
!

infoCommand
	^'@info'
!

moveCommand
	^'@moved'
!

paramsCommand
	^'@params'
!

removeCommand
	^'@remove'
!

switchCommand
	^'@switched'
! !

Object subclass: #WebHMICommandProcessor
	instanceVariableNames: 'netclient elements'
	package: 'HMI'!

!WebHMICommandProcessor methodsFor: 'not yet classified'!

baseClient
	^netclient
!

baseClient: aWebHMIClient
	Transcript show: 'Creating commander...'; cr.
	netclient := aWebHMIClient
!

elements 
	elements ifNil: [ elements := HMIelement elements ].
	^elements
!

elementsContains: aString
	self elements do: [ : el | el elName = aString ifTrue: [^ true]].
	^false
!

processInfoMessage: msg
	|resultElement|
	Transcript show: msg; cr.
	resultElement := (CommandExecutor doIt: (msg replace: '@info ' with: '')).
	(self elementsContains: ( resultElement elName )) ifFalse: [
			 HMIelement elements add: (resultElement setParent: (self baseClient))]
!

processMessage: msg
	(msg match: (WebHMICommand infoCommand))  ifTrue: [ self processInfoMessage: msg ].
	
	HMIelement elements size > 0 ifTrue: [
		(msg match: WebHMICommand switchCommand)  ifTrue: [ self processSwitchedMessage: msg ].
		(msg match: WebHMICommand moveCommand)  ifTrue: [ self processMovedMessage: msg ].
		(msg match: WebHMICommand paramsCommand)  ifTrue: [ self processParamsMessage: msg ].
		(msg match: WebHMICommand removeCommand)  ifTrue: [ self processRemoveMessage: msg ].
		(msg match: WebHMICommand changeCommand)  ifTrue: [ self processParamChangeMessage: msg ]]
!

processMovedMessage: msg
	CommandExecutor doIt: (msg replace: '@moved ' with: '')
!

processParamChangeMessage: msg
	(CommandExecutor doIt: (msg replace: '@change ' with: '')) .
!

processParamsMessage: msg
	(CommandExecutor doIt: (msg replace: '@params ' with: '')) drawOn: (WebHMIClientGui field).
!

processRemoveMessage: msg
	CommandExecutor doIt: (msg replace: '@remove ' with: '')
!

processSwitchedMessage: msg
	CommandExecutor doIt: (msg replace: '@switched ' with: '')
! !

