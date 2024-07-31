(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"parallax_poziomo_atlas_1", frames: [[0,0,940,415],[632,417,304,123],[632,542,116,50],[442,417,188,230],[0,417,440,156]]}
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



(lib.bg = function() {
	this.initialize(ss["parallax_poziomo_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dom = function() {
	this.initialize(ss["parallax_poziomo_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.domek = function() {
	this.initialize(ss["parallax_poziomo_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.gosc = function() {
	this.initialize(ss["parallax_poziomo_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ufo = function() {
	this.initialize(ss["parallax_poziomo_atlas_1"]);
	this.gotoAndStop(4);
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


(lib.ufoin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa 1
	this.instance = new lib.ufo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ufoin, new cjs.Rectangle(0,0,440,156), null);


(lib.plan2in = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa 1
	this.instance = new lib.domek();
	this.instance.setTransform(768.95,11.25,0.5345,0.5345);

	this.instance_1 = new lib.domek();
	this.instance_1.setTransform(603.95,11.7,0.5171,0.5171);

	this.instance_2 = new lib.domek();
	this.instance_2.setTransform(270.95,0,0.4655,0.4655);

	this.instance_3 = new lib.domek();
	this.instance_3.setTransform(0,7.8,0.6724,0.6724);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plan2in, new cjs.Rectangle(0,0,831,41.4), null);


(lib.plan1in = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa 1
	this.instance = new lib.dom();
	this.instance.setTransform(803.95,15.8,0.7434,0.7434);

	this.instance_1 = new lib.dom();
	this.instance_1.setTransform(326.95,0,0.6449,0.6449);

	this.instance_2 = new lib.dom();
	this.instance_2.setTransform(0,15.8,0.7434,0.7434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plan1in, new cjs.Rectangle(0,0,1030,107.3), null);


(lib.nieboin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nieboin, new cjs.Rectangle(0,0,940,415), null);


(lib.goscin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa 1
	this.instance = new lib.gosc();
	this.instance.setTransform(-65,-77.95,0.6702,0.6702);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.goscin, new cjs.Rectangle(-65,-77.9,126,154.10000000000002), null);


(lib.tlo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa 1
	this.nieboin = new lib.nieboin();
	this.nieboin.name = "nieboin";
	this.nieboin.setTransform(470,207.5,1,1,0,0,0,470,207.5);

	this.timeline.addTween(cjs.Tween.get(this.nieboin).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tlo, new cjs.Rectangle(0,0,940,415), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(77));

	// Warstwa 1
	this.ufoin = new lib.ufoin();
	this.ufoin.name = "ufoin";
	this.ufoin.setTransform(412.45,48,1,1,0,0,0,220,78);

	this.timeline.addTween(cjs.Tween.get(this.ufoin).wait(24).to({y:255.95},50).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(192.5,-30,440,364);


(lib.domy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(76));

	// Warstwa 1
	this.plan1in = new lib.plan1in();
	this.plan1in.name = "plan1in";
	this.plan1in.setTransform(478,53.6,1,1,0,0,0,515,53.6);

	this.timeline.addTween(cjs.Tween.get(this.plan1in).wait(24).to({y:304.55},75).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,0,1030,358.2);


(lib.domki = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(101));

	// Warstwa 1
	this.plan3in = new lib.plan2in();
	this.plan3in.name = "plan3in";
	this.plan3in.setTransform(301.4,12.9,1,1,0,0,0,415.4,20.7);

	this.timeline.addTween(cjs.Tween.get(this.plan3in).wait(24).to({y:285.85},76).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-7.8,831,314.40000000000003);


(lib._1plan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(76));

	// Warstwa 1
	this.goscin = new lib.goscin();
	this.goscin.name = "goscin";

	this.timeline.addTween(cjs.Tween.get(this.goscin).wait(24).to({y:186.95},25).wait(51));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-77.9,126,341.1);


// stage content:
(lib.parallaxpoziomo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		stage.enableMouseOver();
		var dlanimacjiX = 100;
		var szertla = this.stage.canvas.width;
		var wsytla = this.stage.canvas.height;
		
		this.stage.on("stagemousemove", parallax, this);
		
		function parallax(evt){
			var pozKursoraX = evt.stageX;
			var pozKursoraY = evt.stageY;
			console.log(pozKursoraX);
			console.log(pozKursoraY)
			var xNormalized = pozKursoraX / szertla;
			var yNormalized = pozKursoraY / wsytla;
			var nrKlatkiX = Math.round(dlanimacjiX * xNormalized);
			var nrKlatkiY = Math.round(dlanimacjiX * yNormalized);
			this.gotoAndStop(nrKlatkiX);
			this.ufo.gotoAndStop(nrKlatkiY);
			this.plan1.gotoAndStop(nrKlatkiY);
			this.plan3.gotoAndStop(nrKlatkiY);
			this.gosc.gotoAndStop(nrKlatkiY);
			this.stage.update();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// Warstwa 1
	this.gosc = new lib._1plan();
	this.gosc.name = "gosc";
	this.gosc.setTransform(525.25,315.95);

	this.timeline.addTween(cjs.Tween.get(this.gosc).to({x:65},99).wait(1));

	// Warstwa 2
	this.ufo = new lib.Symbol1();
	this.ufo.name = "ufo";
	this.ufo.setTransform(392.4,291,1,1,0,0,0,412.4,48);

	this.timeline.addTween(cjs.Tween.get(this.ufo).to({x:124.45},99).wait(1));

	// Warstwa 5
	this.plan1 = new lib.domy();
	this.plan1.name = "plan1";
	this.plan1.setTransform(93.5,232.45,1,1,0,0,0,152,61.5);

	this.timeline.addTween(cjs.Tween.get(this.plan1).to({x:-50.5},99).wait(1));

	// Warstwa 6
	this.plan3 = new lib.domki();
	this.plan3.name = "plan3";
	this.plan3.setTransform(120.5,175.95,1,1,0,0,0,58,25);

	this.timeline.addTween(cjs.Tween.get(this.plan3).to({x:76.5},99).wait(1));

	// Warstwa 4
	this.niebo = new lib.tlo();
	this.niebo.name = "niebo";
	this.niebo.setTransform(470,207.5,1,1,0,0,0,470,207.5);

	this.timeline.addTween(cjs.Tween.get(this.niebo).wait(100));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(60.5,207.5,879.5,207.5);
// library properties:
lib.properties = {
	id: '0DF38B4F06DD844CB5C11D571380D094',
	width: 600,
	height: 415,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/parallax_poziomo_atlas_1.png?1698221253409", id:"parallax_poziomo_atlas_1"}
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
an.compositions['0DF38B4F06DD844CB5C11D571380D094'] = {
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