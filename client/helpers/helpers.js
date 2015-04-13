highlightConfig = function(){
	    hljs.configure({
       tabReplace: '    ', 
       classPrefix: '',
      useBR:true
                     
    })
  
     $('pre code').each(function(i, block) {
     hljs.highlightBlock(block);
    });
}