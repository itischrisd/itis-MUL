(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"zgniatanieHTML5_atlas_1", frames: [[0,0,273,284]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.monster = function() {
	this.initialize(ss["zgniatanieHTML5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.item = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.monster();
	this.instance.setTransform(-7,-115,0.3597,0.4715);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.item, new cjs.Rectangle(-7,-115,98.2,133.9), null);


// stage content:
(lib.zgniatanieHTML5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Twoja animacja
	this.instance = new lib.item();
	this.instance.setTransform(129.25,164.05,0.9968,0.5626,0,0,0,35.6,71.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:71.5,scaleX:0.432,scaleY:1.0676,x:129.3,y:433.95},18,cjs.Ease.get(-1)).to({regX:35.7,regY:71.6,scaleX:0.9707,scaleY:0.6014,x:129.35,y:434},3,cjs.Ease.get(1)).to({regX:35.9,regY:71.7,scaleX:0.4554,scaleY:1.0584,x:129.4,y:434.1},3,cjs.Ease.get(-1)).to({regX:36,regY:71.8,scaleX:0.9517,scaleY:0.5653,x:129.45,y:162.6},15,cjs.Ease.get(1)).wait(1));

	// Layer 1 (referencja)
	this.instance_1 = new lib.item();
	this.instance_1.setTransform(377,164,1,0.59,0,0,0,35.6,71.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:42.1,regY:-48,scaleX:0.9921,scaleY:0.5967,x:383.4,y:96.25},0).wait(1).to({scaleX:0.9763,scaleY:0.6102,x:383.3,y:101.55},0).wait(1).to({scaleX:0.9547,scaleY:0.6286,x:383.2,y:108.85},0).wait(1).to({scaleX:0.929,scaleY:0.6505,x:383,y:117.65},0).wait(1).to({scaleX:0.9,scaleY:0.6752,x:382.85,y:127.6},0).wait(1).to({scaleX:0.8684,scaleY:0.7022,x:382.6,y:138.55},0).wait(1).to({scaleX:0.8346,scaleY:0.731,x:382.4,y:150.3},0).wait(1).to({scaleX:0.799,scaleY:0.7614,x:382.2,y:162.75},0).wait(1).to({scaleX:0.7619,scaleY:0.7929,x:381.95,y:175.7},0).wait(1).to({scaleX:0.7236,scaleY:0.8256,x:381.65,y:189.15},0).wait(1).to({scaleX:0.6843,scaleY:0.8591,x:381.4,y:202.95},0).wait(1).to({scaleX:0.6442,scaleY:0.8933,x:381.15,y:217.1},0).wait(1).to({scaleX:0.6036,scaleY:0.9279,x:380.9,y:231.45},0).wait(1).to({scaleX:0.5625,scaleY:0.963,x:380.65,y:245.95},0).wait(1).to({scaleX:0.5213,scaleY:0.9981,x:380.35,y:260.5},0).wait(1).to({scaleX:0.4803,scaleY:1.033,x:380.1,y:274.9},0).wait(1).to({scaleX:0.44,scaleY:1.0674,x:379.8,y:289.05},0).wait(1).to({scaleX:0.4013,scaleY:1.1004,x:379.6,y:302.65},0).wait(1).to({scaleX:0.7175,scaleY:0.8308,x:381.65,y:334.8},0).wait(1).to({scaleX:0.9152,scaleY:0.6623,x:382.95,y:354.9},0).wait(1).to({scaleX:0.9979,scaleY:0.5918,x:383.45,y:363.3},0).wait(1).to({scaleX:0.9121,scaleY:0.6649,x:382.9,y:354.6},0).wait(1).to({scaleX:0.7571,scaleY:0.797,x:381.9,y:338.85},0).wait(1).to({scaleX:0.4013,scaleY:1.1004,x:379.6,y:302.65},0).wait(1).to({scaleX:0.4475,scaleY:1.0609,x:379.9,y:286.1},0).wait(1).to({scaleX:0.4924,scaleY:1.0227,x:380.2,y:269.65},0).wait(1).to({scaleX:0.5365,scaleY:0.9851,x:380.5,y:253.3},0).wait(1).to({scaleX:0.5799,scaleY:0.9481,x:380.75,y:237.15},0).wait(1).to({scaleX:0.6227,scaleY:0.9117,x:381,y:221.2},0).wait(1).to({scaleX:0.665,scaleY:0.8756,x:381.3,y:205.45},0).wait(1).to({scaleX:0.7067,scaleY:0.84,x:381.55,y:190},0).wait(1).to({scaleX:0.748,scaleY:0.8048,x:381.85,y:174.8},0).wait(1).to({scaleX:0.7886,scaleY:0.7702,x:382.1,y:160.1},0).wait(1).to({scaleX:0.8286,scaleY:0.7361,x:382.4,y:145.8},0).wait(1).to({scaleX:0.8678,scaleY:0.7027,x:382.65,y:132.15},0).wait(1).to({scaleX:0.906,scaleY:0.6702,x:382.85,y:119.4},0).wait(1).to({scaleX:0.9425,scaleY:0.639,x:383.1,y:107.8},0).wait(1).to({scaleX:0.9762,scaleY:0.6103,x:383.3,y:98.3},0).wait(1).to({scaleX:1,scaleY:0.59,x:383.5,y:93.65},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(336.8,304.2,95.80000000000001,98.69999999999999);
// library properties:
lib.properties = {
	id: 'FEA89ED1C5ED7E45BECDFFEAAE497845',
	width: 500,
	height: 500,
	fps: 50,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/zgniatanieHTML5_atlas_1.png?1698221226641", id:"zgniatanieHTML5_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FEA89ED1C5ED7E45BECDFFEAAE497845'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;