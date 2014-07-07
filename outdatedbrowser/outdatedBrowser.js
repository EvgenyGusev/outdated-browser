/*!--------------------------------------------------------------------
JAVASCRIPT "Outdated Browser"
Version:    1.0.2 - 2014
author:     Burocratik
website:    http://www.burocratik.com
* @preserve
-----------------------------------------------------------------------*/
var outdatedBrowser = function(options) {

    var outdated = document.getElementById("outdated");
    outdated.style.display = 'none'
    
    // Default settings
    this.defaultOpts = {
        lowerThan: 'transform'
    }

    if (options) {
        //assign css3 property to IE browser version
        if(options.lowerThan == 'IE8' || options.lowerThan == 'borderSpacing') {
            options.lowerThan = 'borderSpacing';
        } else if (options.lowerThan == 'IE9' || options.lowerThan == 'boxShadow') {
            options.lowerThan = 'boxShadow';
        } else if (options.lowerThan == 'IE10' || options.lowerThan == 'transform' || options.lowerThan == '' || typeof options.lowerThan === "undefined") {
            options.lowerThan = 'transform';
        } else if (options.lowerThan == 'IE11' || options.lowerThan == 'borderImage') {
            options.lowerThan = 'borderImage';
        }

        this.defaultOpts.lowerThan = options.lowerThan;
    }  
    
    var cssProp = this.defaultOpts.lowerThan;
      
    var supports = (function() {
       var div = document.createElement('div'),
          vendors = 'Khtml Ms O Moz Webkit'.split(' '),
          len = vendors.length;

       return function(prop) {
          if ( prop in div.style ) return true;

          prop = prop.replace(/^[a-z]/, function(val) {
             return val.toUpperCase();
          });

          while(len--) {
             if ( vendors[len] + prop in div.style ) {
                return true;
             }
          }
          return false;
       };
    })();

    //check for css3 property support (transform=default)
    if ( !supports(''+ cssProp +'') ) {
      outdated.style.display = 'block';
    }
}//end of function