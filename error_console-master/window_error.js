window.onerror = function(msg, url, linenumber) {
    console.log('URL: '+url+'\n'+msg+'\nLine: '+linenumber);
return true;
}
