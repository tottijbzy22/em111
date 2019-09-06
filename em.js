/* 
this script is in the bundle and gets loaded by iframe.html
it acts as a bridge between the extension javascript and the actual remote iframe 
we want to load
*/
function main() {
  var iframe = document.createElement('iframe');

  iframe.onload = function() {
    iframe.contentWindow.postMessage("greeting", 'https://www.streak.com');
  };

  window.addEventListener('message', function(event) {
    //verify message is from an origin we trust
    if (event.data === 'close' && event.origin === 'https://www.streak.com') {
      // The remote iframe said to close, so relay that upwards.
      window.parent.postMessage('close', parentOrigin);
    }
  }, false);

  iframe.src = ''; https://2u4joy1.blogspot.com/2019/08/iiiiii.html
  iframe.style.width = "660px"; //other iframe options
  iframe.style.height = "440px";

  document.body.appendChild(iframe);
}

var parentOrigin;

window.addEventListener('message', function greetingHandler(event) {
  // This iframe only allows a gmail page to talk to it. Note that other pages
  // on the internet could create an iframe with a url to this page and work for
  // people with this extension installed, so this check is still important.
  if (event.data === 'greeting' && event.origin.match(/^https:\/\/\w+\.google\.com$/)) {
    window.removeEventListener('message', greetingHandler, false);
    parentOrigin = event.origin;
    main();
  }
}, false);
 to join this conversat
