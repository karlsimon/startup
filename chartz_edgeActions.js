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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'dia1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.play("button");

      });
      //Edge binding end

   })("dia1");
   //Edge symbol end:'dia1'

   //=========================================================
   
   //Edge symbol: 'dia2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.play("button");
         
         

      });
      //Edge binding end

   })("dia2");
   //Edge symbol end:'dia2'

   //=========================================================
   
   //Edge symbol: 'dia3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("go2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.play("button2");
         

      });
      //Edge binding end

   })("dia3");
   //Edge symbol end:'dia3'

   //=========================================================
   
   //Edge symbol: 'dia4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("go3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.play("button3");
         

      });
      //Edge binding end

   })("dia4");
   //Edge symbol end:'dia4'

   //=========================================================
   
   //Edge symbol: 'dia5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4Copy}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("go4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4Copy}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.play("button4");
         

      });
      //Edge binding end

   })("dia5");
   //Edge symbol end:'dia5'

   //=========================================================
   
   //Edge symbol: 'dia6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("go6");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.play("button6");
         
         

      });
      //Edge binding end

   })("dia6");
   //Edge symbol end:'dia6'

   //=========================================================
   
   //Edge symbol: 'dia7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1563, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5Copy}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("go7");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5Copy}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.play("button7");
         

      });
      //Edge binding end

   })("dia7");
   //Edge symbol end:'dia7'

   //=========================================================
   
   //Edge symbol: 'dia8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1415, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5Copy2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("go8");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5Copy2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.play("button8");
         

      });
      //Edge binding end

   })("dia8");
   //Edge symbol end:'dia8'

   //=========================================================
   
   //Edge symbol: 'dia9'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1595, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5Copy3}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("go8");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle5Copy3}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.play("button8");
         

      });
      //Edge binding end

   })("dia9");
   //Edge symbol end:'dia9'

})(jQuery, AdobeEdge, "EDGE-6782986");