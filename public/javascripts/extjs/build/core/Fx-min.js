/*
 * Ext JS Library 2.2.1
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */


Ext.enableFx=true;Ext.Fx={slideIn:function(anchor,o){var el=this.getFxEl();o=o||{};el.queueFx(o,function(){anchor=anchor||"t";this.fixDisplay();var r=this.getFxRestore();var b=this.getBox();this.setSize(b);var wrap=this.fxWrap(r.pos,o,"hidden");var st=this.dom.style;st.visibility="visible";st.position="absolute";var after=function(){el.fxUnwrap(wrap,r.pos,o);st.width=r.width;st.height=r.height;el.afterFx(o);};var a,pt={to:[b.x,b.y]},bw={to:b.width},bh={to:b.height};switch(anchor.toLowerCase()){case"t":wrap.setSize(b.width,0);st.left=st.bottom="0";a={height:bh};break;case"l":wrap.setSize(0,b.height);st.right=st.top="0";a={width:bw};break;case"r":wrap.setSize(0,b.height);wrap.setX(b.right);st.left=st.top="0";a={width:bw,points:pt};break;case"b":wrap.setSize(b.width,0);wrap.setY(b.bottom);st.left=st.top="0";a={height:bh,points:pt};break;case"tl":wrap.setSize(0,0);st.right=st.bottom="0";a={width:bw,height:bh};break;case"bl":wrap.setSize(0,0);wrap.setY(b.y+b.height);st.right=st.top="0";a={width:bw,height:bh,points:pt};break;case"br":wrap.setSize(0,0);wrap.setXY([b.right,b.bottom]);st.left=st.top="0";a={width:bw,height:bh,points:pt};break;case"tr":wrap.setSize(0,0);wrap.setX(b.x+b.width);st.left=st.bottom="0";a={width:bw,height:bh,points:pt};break;}
this.dom.style.visibility="visible";wrap.show();arguments.callee.anim=wrap.fxanim(a,o,'motion',.5,'easeOut',after);});return this;},slideOut:function(anchor,o){var el=this.getFxEl();o=o||{};el.queueFx(o,function(){anchor=anchor||"t";var r=this.getFxRestore();var b=this.getBox();this.setSize(b);var wrap=this.fxWrap(r.pos,o,"visible");var st=this.dom.style;st.visibility="visible";st.position="absolute";wrap.setSize(b);var after=function(){if(o.useDisplay){el.setDisplayed(false);}else{el.hide();}
el.fxUnwrap(wrap,r.pos,o);st.width=r.width;st.height=r.height;el.afterFx(o);};var a,zero={to:0};switch(anchor.toLowerCase()){case"t":st.left=st.bottom="0";a={height:zero};break;case"l":st.right=st.top="0";a={width:zero};break;case"r":st.left=st.top="0";a={width:zero,points:{to:[b.right,b.y]}};break;case"b":st.left=st.top="0";a={height:zero,points:{to:[b.x,b.bottom]}};break;case"tl":st.right=st.bottom="0";a={width:zero,height:zero};break;case"bl":st.right=st.top="0";a={width:zero,height:zero,points:{to:[b.x,b.bottom]}};break;case"br":st.left=st.top="0";a={width:zero,height:zero,points:{to:[b.x+b.width,b.bottom]}};break;case"tr":st.left=st.bottom="0";a={width:zero,height:zero,points:{to:[b.right,b.y]}};break;}
arguments.callee.anim=wrap.fxanim(a,o,'motion',.5,"easeOut",after);});return this;},puff:function(o){var el=this.getFxEl();o=o||{};el.queueFx(o,function(){this.clearOpacity();this.show();var r=this.getFxRestore();var st=this.dom.style;var after=function(){if(o.useDisplay){el.setDisplayed(false);}else{el.hide();}
el.clearOpacity();el.setPositioning(r.pos);st.width=r.width;st.height=r.height;st.fontSize='';el.afterFx(o);};var width=this.getWidth();var height=this.getHeight();arguments.callee.anim=this.fxanim({width:{to:this.adjustWidth(width*2)},height:{to:this.adjustHeight(height*2)},points:{by:[-(width*.5),-(height*.5)]},opacity:{to:0},fontSize:{to:200,unit:"%"}},o,'motion',.5,"easeOut",after);});return this;},switchOff:function(o){var el=this.getFxEl();o=o||{};el.queueFx(o,function(){this.clearOpacity();this.clip();var r=this.getFxRestore();var st=this.dom.style;var after=function(){if(o.useDisplay){el.setDisplayed(false);}else{el.hide();}
el.clearOpacity();el.setPositioning(r.pos);st.width=r.width;st.height=r.height;el.afterFx(o);};this.fxanim({opacity:{to:0.3}},null,null,.1,null,function(){this.clearOpacity();(function(){this.fxanim({height:{to:1},points:{by:[0,this.getHeight()*.5]}},o,'motion',0.3,'easeIn',after);}).defer(100,this);});});return this;},highlight:function(color,o){var el=this.getFxEl();o=o||{};el.queueFx(o,function(){color=color||"ffff9c";var attr=o.attr||"backgroundColor";this.clearOpacity();this.show();var origColor=this.getColor(attr);var restoreColor=this.dom.style[attr];var endColor=(o.endColor||origColor)||"ffffff";var after=function(){el.dom.style[attr]=restoreColor;el.afterFx(o);};var a={};a[attr]={from:color,to:endColor};arguments.callee.anim=this.fxanim(a,o,'color',1,'easeIn',after);});return this;},frame:function(color,count,o){var el=this.getFxEl();o=o||{};el.queueFx(o,function(){color=color||"#C3DAF9";if(color.length==6){color="#"+color;}
count=count||1;var duration=o.duration||1;this.show();var b=this.getBox();var animFn=function(){var proxy=Ext.getBody().createChild({style:{visbility:"hidden",position:"absolute","z-index":"35000",border:"0px solid "+color}});var scale=Ext.isBorderBox?2:1;proxy.animate({top:{from:b.y,to:b.y-20},left:{from:b.x,to:b.x-20},borderWidth:{from:0,to:10},opacity:{from:1,to:0},height:{from:b.height,to:(b.height+(20*scale))},width:{from:b.width,to:(b.width+(20*scale))}},duration,function(){proxy.remove();if(--count>0){animFn();}else{el.afterFx(o);}});};animFn.call(this);});return this;},pause:function(seconds){var el=this.getFxEl();var o={};el.queueFx(o,function(){setTimeout(function(){el.afterFx(o);},seconds*1000);});return this;},fadeIn:function(o){var el=this.getFxEl();o=o||{};el.queueFx(o,function(){this.setOpacity(0);this.fixDisplay();this.dom.style.visibility='visible';var to=o.endOpacity||1;arguments.callee.anim=this.fxanim({opacity:{to:to}},o,null,.5,"easeOut",function(){if(to==1){this.clearOpacity();}
el.afterFx(o);});});return this;},fadeOut:function(o){var el=this.getFxEl();o=o||{};el.queueFx(o,function(){var to=o.endOpacity||0;arguments.callee.anim=this.fxanim({opacity:{to:to}},o,null,.5,"easeOut",function(){if(to===0){if(this.visibilityMode==Ext.Element.DISPLAY||o.useDisplay){this.dom.style.display="none";}else{this.dom.style.visibility="hidden";}
this.clearOpacity();}
el.afterFx(o);});});return this;},scale:function(w,h,o){this.shift(Ext.apply({},o,{width:w,height:h}));return this;},shift:function(o){var el=this.getFxEl();o=o||{};el.queueFx(o,function(){var a={},w=o.width,h=o.height,x=o.x,y=o.y,op=o.opacity;if(w!==undefined){a.width={to:this.adjustWidth(w)};}
if(h!==undefined){a.height={to:this.adjustHeight(h)};}
if(o.left!==undefined){a.left={to:o.left};}
if(o.top!==undefined){a.top={to:o.top};}
if(o.right!==undefined){a.right={to:o.right};}
if(o.bottom!==undefined){a.bottom={to:o.bottom};}
if(x!==undefined||y!==undefined){a.points={to:[x!==undefined?x:this.getX(),y!==undefined?y:this.getY()]};}
if(op!==undefined){a.opacity={to:op};}
if(o.xy!==undefined){a.points={to:o.xy};}
arguments.callee.anim=this.fxanim(a,o,'motion',.35,"easeOut",function(){el.afterFx(o);});});return this;},ghost:function(anchor,o){var el=this.getFxEl();o=o||{};el.queueFx(o,function(){anchor=anchor||"b";var r=this.getFxRestore();var w=this.getWidth(),h=this.getHeight();var st=this.dom.style;var after=function(){if(o.useDisplay){el.setDisplayed(false);}else{el.hide();}
el.clearOpacity();el.setPositioning(r.pos);st.width=r.width;st.height=r.height;el.afterFx(o);};var a={opacity:{to:0},points:{}},pt=a.points;switch(anchor.toLowerCase()){case"t":pt.by=[0,-h];break;case"l":pt.by=[-w,0];break;case"r":pt.by=[w,0];break;case"b":pt.by=[0,h];break;case"tl":pt.by=[-w,-h];break;case"bl":pt.by=[-w,h];break;case"br":pt.by=[w,h];break;case"tr":pt.by=[w,-h];break;}
arguments.callee.anim=this.fxanim(a,o,'motion',.5,"easeOut",after);});return this;},syncFx:function(){this.fxDefaults=Ext.apply(this.fxDefaults||{},{block:false,concurrent:true,stopFx:false});return this;},sequenceFx:function(){this.fxDefaults=Ext.apply(this.fxDefaults||{},{block:false,concurrent:false,stopFx:false});return this;},nextFx:function(){var ef=this.fxQueue[0];if(ef){ef.call(this);}},hasActiveFx:function(){return this.fxQueue&&this.fxQueue[0];},stopFx:function(){if(this.hasActiveFx()){var cur=this.fxQueue[0];if(cur&&cur.anim&&cur.anim.isAnimated()){this.fxQueue=[cur];cur.anim.stop(true);}}
return this;},beforeFx:function(o){if(this.hasActiveFx()&&!o.concurrent){if(o.stopFx){this.stopFx();return true;}
return false;}
return true;},hasFxBlock:function(){var q=this.fxQueue;return q&&q[0]&&q[0].block;},queueFx:function(o,fn){if(!this.fxQueue){this.fxQueue=[];}
if(!this.hasFxBlock()){Ext.applyIf(o,this.fxDefaults);if(!o.concurrent){var run=this.beforeFx(o);fn.block=o.block;this.fxQueue.push(fn);if(run){this.nextFx();}}else{fn.call(this);}}
return this;},fxWrap:function(pos,o,vis){var wrap;if(!o.wrap||!(wrap=Ext.get(o.wrap))){var wrapXY;if(o.fixPosition){wrapXY=this.getXY();}
var div=document.createElement("div");div.style.visibility=vis;wrap=Ext.get(this.dom.parentNode.insertBefore(div,this.dom));wrap.setPositioning(pos);if(wrap.getStyle("position")=="static"){wrap.position("relative");}
this.clearPositioning('auto');wrap.clip();wrap.dom.appendChild(this.dom);if(wrapXY){wrap.setXY(wrapXY);}}
return wrap;},fxUnwrap:function(wrap,pos,o){this.clearPositioning();this.setPositioning(pos);if(!o.wrap){wrap.dom.parentNode.insertBefore(this.dom,wrap.dom);wrap.remove();}},getFxRestore:function(){var st=this.dom.style;return{pos:this.getPositioning(),width:st.width,height:st.height};},afterFx:function(o){if(o.afterStyle){this.applyStyles(o.afterStyle);}
if(o.afterCls){this.addClass(o.afterCls);}
if(o.remove===true){this.remove();}
Ext.callback(o.callback,o.scope,[this]);if(!o.concurrent){this.fxQueue.shift();this.nextFx();}},getFxEl:function(){return Ext.get(this.dom);},fxanim:function(args,opt,animType,defaultDur,defaultEase,cb){animType=animType||'run';opt=opt||{};var anim=Ext.lib.Anim[animType](this.dom,args,(opt.duration||defaultDur)||.35,(opt.easing||defaultEase)||'easeOut',function(){Ext.callback(cb,this);},this);opt.anim=anim;return anim;}};Ext.Fx.resize=Ext.Fx.scale;Ext.apply(Ext.Element.prototype,Ext.Fx);