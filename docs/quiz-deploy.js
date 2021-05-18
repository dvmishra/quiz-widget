function includeJS(file) {
  
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    
    document.getElementsByTagName('head').item(0).appendChild(script);
    
  }

  function includeCSS(file) {
  
    var link  = document.createElement('link');
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    link.href = file;
    
    document.getElementsByTagName('head').item(0).appendChild(link);
    
  }
    
  /* Include Many js files */
  includeJS('../bundles/index.js');
  includeCSS('../bundles/index.css');