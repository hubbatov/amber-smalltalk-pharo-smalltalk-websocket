<!--
var MinSize=50;
var MaxSize=400;
var Step=5;


//------------------------------------------------------------------
// Функция установки обработчика события
// Параметры вызова:
//   hElem     - DOM-элемент или его ID
//   eventName - событие
//   callback  - функция, которая будет вызвана при событии
// На выходе:
//   TRUE  - обработчик установлен
//   FALSE - элемент не найден или браузер не поддерживает события
//------------------------------------------------------------------
function hookEvent(hElem, eventName, callback) {
  if (typeof(hElem) == 'string') {
    // Если передан ID, то получить DOM-элемент
    hElem = document.getElementById(hElem);
  }
  // Если такого элемента нет, то возврат с ошибкой
  if (!hElem) { return false; }
 
  if (hElem.addEventListener) {
    if (eventName == 'mousewheel') {
      // Событие вращения колесика для Mozilla
      hElem.addEventListener('DOMMouseScroll', callback, false);
    }
    // Колесико для Opera, WebKit-based, а также любые другие события
    // для всех браузеров кроме Internet Explorer
    hElem.addEventListener(eventName, callback, false);
  }
  else if (hElem.attachEvent) {
    // Все события для Internet Explorer
    hElem.attachEvent('on' + eventName, callback);
  }
  else { return false; }
  return true;
}


//------------------------------------------------------------------
// Функция снятия обработчика события
// Параметры вызова:
//   hElem     - DOM-элемент или его ID
//   eventName - событие
//   callback  - функция обработки события, которую надо отменить
//------------------------------------------------------------------
function unhookEvent(hElem, eventName, callback) {
  if (typeof(hElem) == 'string') {
    // Если передан ID, то получить DOM-элемент
    hElem = document.getElementById(hElem);
  }
  // Если такого элемента нет, то возврат с ошибкой
  if (!hElem) { return false; }
 
  if (hElem.removeEventListener) {
    if (eventName == 'mousewheel') {
      // Событие вращения колесика для Mozilla
      hElem.removeEventListener('DOMMouseScroll', callback, false);
    }
    // Колесико для Opera, WebKit-based, а также любые другие события
    // для всех браузеров кроме Internet Explorer
    hElem.removeEventListener(eventName, callback, false);
  }
  else if (hElem.detachEvent) {
    // Все события для Internet Explorer
    hElem.detachEvent('on' + eventName, callback);
  }
  else { return false; }
  return true;
}


//------------------------------------------------------------------
// Кроссбраузерная функция подавления события
//------------------------------------------------------------------
function cancelEvent(e) {
  e = e ? e : window.event;
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.cancelBubble = true;
  e.cancel = true;
  e.returnValue = false;
  return false;
}


// Установка и снятие обработчика колеса мыши
function setHook(obj, act) {
  act ? hookEvent(obj.id, 'mousewheel', MouseWheelFunction) : unhookEvent(obj.id, 'mousewheel', MouseWheelFunction);
}

// Функция реагирования 
function MouseWheelFunction(e) {
  e = e ? e : window.event;

  var wheelElem = e.target ? e.target : e.srcElement;
  var wheelData = e.detail ? e.detail * -1 : e.wheelDelta / 40;
  // В движке WebKit возвращается значение в 100 раз больше
  if (Math.abs(wheelData)>100) { wheelData=Math.round(wheelData/100); }

  // Теперь в переменной 'wheelElem' содержится элемент, который перехватил колесо
  // мыши, а в 'wheelData' значение поворота колеса

  var nw = wheelElem.offsetWidth;
  var nh = wheelElem.offsetHeight;
  var coeff = nw!=0?(nh/nw):1;
  var delta = wheelData*Step;
  nw += delta;
  nh += Math.round(delta*coeff);

  if(delta < 0)
	smalltalk.WebHMI._zoomIn();
  else
 	smalltalk.WebHMI._zoomOut();

  // Отменить штатные действия браузера при кручении колеса мыши
  return cancelEvent(e);
}
//-->
