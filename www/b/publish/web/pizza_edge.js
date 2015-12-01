
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x5='rgba(255,255,255,1)',i='none';var g4='full.mp4';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'full',t:'video',tag:'video',r:['0','0','324','578','auto','auto'],sr:[vid+g4],pr:'auto'}],style:{'${Stage}':{isStage:true,r:[undefined,undefined,'325px','578px'],overflow:'hidden',f:[x5]}}},tt:{d:6080,a:n,data:[["eid11","tr",0,function(e,d){this.eMA(e,d);},['play','${full}',[]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-351844393");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3051,function(sym,e){sym.stop();sym.stop();sym.$("full")[0].pause();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${full}","click",function(sym,e){sym.play();sym.play();sym.$("full")[0].play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-351844393");