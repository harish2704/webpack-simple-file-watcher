module.exports = function( a, b, c ) {
  this.cacheable();

  var out = [
    '/*' + Date() + '*/',
    'module.exports = null;',
    'if(module.hot) {',
    '  module.hot.accept();',
    '  module.hot.dispose(function() {',
    '    window.location.reload();',
    '  });',
    '}',
    ].join( '\n' );
  return  out;
};
