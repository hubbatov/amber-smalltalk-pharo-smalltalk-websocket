amber_pharo_websocket
=====================

This project will give you an example of how to comunicate Amber and Pharo using WebSockets. 
Using this example you can create realtime smalltalk web-applications, i hope)

How To run:<br>
-Download and install node.js (for example from nodejs.org)<br>
-Run pharo server (pharo directory/pharo.sh)<br>
-Run amber server (amber directory/#sudo node ./server/server.js), it must say that file server is running<br>
-Open your browser and go to http://localhost:4000/projects/simpleHMI/admin.html<br>
-In class WebHMI in amber find method 'createSocket' and edit server address there<br>
-During saving code not declare variable 'evt' as instance variable<br>
-Commit changes<br>
-Refresh page<br>

If you will find any bugs, will have additions to projects please let me know on hubbatov@mail.ru