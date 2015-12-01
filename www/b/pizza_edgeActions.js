/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3051, function(sym, e) {
         // insert code here
         sym.stop();
         
         sym.stop();
         
         // Pause a video track 
         sym.$("full")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${full}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play();
         
         sym.play();
         
         // Play a video track 
         sym.$("full")[0].play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-351844393");