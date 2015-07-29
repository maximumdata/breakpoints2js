(function() {
    this.bp2js = function() { 
      return window.getComputedStyle(document.querySelector('body'), ':after').getPropertyValue('content').split('"').join('');
    }
}());