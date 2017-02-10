(function() {
  var links = document.links;
  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
    if (links[i].hostname != window.location.hostname) {
      links[i].target = '_blank';
      links[i].className += ' externalLink';
    }
  }
})();

(function(){
    var blocks = document.getElementsByClassName('auto-img');
    
    for(var i = 0; i < blocks.length; i++){
      var className = blocks[i].className;
      className = className.substr(9);
      
      var div = document.createElement('div');
      div.innerHTML = '<img class="logo-char" src="../assets/img/lms/avatar-'+className+'.png" />';
      blocks[i].appendChild(div);
      
    }
     
})();