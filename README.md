<h3>Amber ❤ Pharo with WebSocket</h3>

=============================

This project will give you an example of how to comunicate Amber and Pharo using WebSockets. 
Using this example you can create realtime smalltalk web-applications, i hope)

<b>How to install and run</b>

To install this system in linux you have to:<br>
-  Download sources of this project or clone them using Git with command:<br>
<i>git clone https://github.com/hubbatov/amber_pharo_websocket.git </i><br>
-	Download and install node.js (for example from http://nodejs.org ) <br>
-	Run pharo using command: <i>pharo directory/pharo.sh </i><br>
-	Run server in Pharo using command: <i>WebHMIServer startServerOnPort: aPort </i><br>
- Run EventCaster using command: <i>WebHMIEventCaster start</i><br>
If you want to stop casting events run command: <i>WebHMIEventCaster stop</i><br>
-	Run amber server using command: <i>amber directory/#sudo node ./server/server.js. </i><br>
it must say that file server is running on port 4000<br>
-	Open your browser and go to http://localhost:4000/projects/simpleHMI/admin.html<br>
-	Type the server address in field on top-right corner of the page, for example “localhost:9898”<br>
-	Press connect button. It must say that connection has been made successfully and you will see objects <br>


If you will find any bugs, will have additions to projects please let me know on hubbatov@mail.ru