(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.sample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
	}
	this.frame_277 = function() {
		this.stop();
		
		this.btn.onClick = function(){
			window.location.href = "http://clockmaker.jp/blog"
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(277).call(this.frame_277).wait(71));

	// レイヤー 1
	this.btn = new lib.Btn();
	this.btn.setTransform(220,395);
	this.btn.alpha = 0;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(270).to({_off:false},0).to({alpha:1},7).wait(1).to({alpha:0},7).to({_off:true},1).wait(63));

	// logo.png
	this.instance = new lib.logo_1();
	this.instance.setTransform(320,190,2,2,0,0,0,123,120);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(228).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},21,cjs.Ease.get(1)).wait(49).to({regX:0,regY:0,x:197,y:70},0).to({alpha:0},25).wait(26));

	// ClockMaker.jp.png
	this.instance_1 = new lib.ClockMakerjp_1();
	this.instance_1.setTransform(174,400);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(249).to({_off:false},0).to({y:340,alpha:1},14,cjs.Ease.get(1)).wait(35).to({alpha:0},25).wait(26));

	// WITH-FLASH-PLATFORM.png
	this.instance_2 = new lib.WITHFLASHPLATFORM_1();
	this.instance_2.setTransform(32,223);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(155).to({_off:false},0).to({x:72,alpha:1},13).wait(34).to({x:142,alpha:0},13,cjs.Ease.get(1)).to({_off:true},1).wait(133));

	// INTERACTIVE-MOTION-LAB.png
	this.instance_3 = new lib.INTERACTIVEMOTIONLAB_1();
	this.instance_3.setTransform(6,223);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({_off:false},0).to({x:46,alpha:1},13).wait(34).to({alpha:0},13).to({_off:true},1).wait(181));

	// rects.png
	this.instance_4 = new lib.rects_1();
	this.instance_4.setTransform(501,210,0.1,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({_off:false},0).to({scaleX:1,scaleY:1},8).to({alpha:0},2).to({alpha:1},2).to({alpha:0},2).to({alpha:1},2).to({alpha:0},2).to({alpha:1},2).wait(25).to({y:80,alpha:0},16).to({_off:true},1).wait(255));

	// rects.png
	this.instance_5 = new lib.rects_1();
	this.instance_5.setTransform(395.6,210,0.1,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(32).to({_off:false},0).to({scaleX:1,scaleY:1},8).to({alpha:0},2).to({alpha:1},2).to({alpha:0},2).to({alpha:1},2).to({alpha:0},2).to({alpha:1},2).wait(24).to({y:340,alpha:0},16,cjs.Ease.get(1)).to({_off:true},2).wait(255));

	// rects.png
	this.instance_6 = new lib.rects_1();
	this.instance_6.setTransform(290.4,210,0.1,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({scaleX:1,scaleY:1},8).to({alpha:0},2).to({alpha:1},2).to({alpha:0},2).to({alpha:1},2).to({alpha:0},2).to({alpha:1},2).wait(23).to({y:80,alpha:0},16,cjs.Ease.get(1)).to({_off:true},3).wait(255));

	// rects.png
	this.instance_7 = new lib.rects_1();
	this.instance_7.setTransform(185.2,210,0.1,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).to({scaleX:1,scaleY:1},8).to({alpha:0},2).to({alpha:1},2).to({alpha:0},2).to({alpha:1},2).to({alpha:0},2).to({alpha:1},2).wait(22).to({y:340,alpha:0},16,cjs.Ease.get(1)).to({_off:true},4).wait(255));

	// rects.png
	this.instance_8 = new lib.rects_1();
	this.instance_8.setTransform(80,210,0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(32).to({_off:false},0).to({scaleX:1,scaleY:1},8).to({alpha:0},2).to({alpha:1},2).to({alpha:0},2).to({alpha:1},2).to({alpha:0},2).to({alpha:1},2).wait(21).to({y:80,alpha:0},16,cjs.Ease.get(1)).to({_off:true},5).wait(255));

	// bgImg.png
	this.instance_9 = new lib.bgImg_1();
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({alpha:1},26).wait(294).to({alpha:0},25).wait(1));

	// bgMat.png
	this.instance_10 = new lib.bgMat_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(323).to({alpha:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


// symbols:
(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.bgMat = function() {
	this.initialize(img.bgMat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.ClockMakerjp = function() {
	this.initialize(img.ClockMakerjp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,45);


(lib.INTERACTIVEMOTIONLAB = function() {
	this.initialize(img.INTERACTIVEMOTIONLAB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,34);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,240);


(lib.rects = function() {
	this.initialize(img.rects);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.WITHFLASHPLATFORM = function() {
	this.initialize(img.WITHFLASHPLATFORM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,497,34);


(lib.TextBtn = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGjBEQgJgEgHgGQgGgGgEgKQgDgIAAgMQAAgKADgJQADgIAGgHQAGgHAJgEQAEgDAFgBIALgBIALABQAFABAEADQAIADAFAIQAFAGACAHQACAIAAAIIAAALIhCAAQABAGACAFQACAFAFADQAEADAFABQAFACAGAAQAJAAAGgCIAMgCIAEARIgPAEQgJABgKAAQgMAAgJgDgAHIALQAAgJgEgFIgGgGQgEgCgGgBQgFABgFACQgEACgDAEQgFAFgBAJIArAAIAAAAgAFcBFQgGgCgDgDQgEgFgCgHQgCgGAAgJIAAgtIgOAAIAAgSIAOAAIAAgWIAYgGIAAAcIAYAAIAAASIgYAAIAAApQAAAKADAEQADAFAHgBIAJgBIABATQgGACgMAAQgHAAgFgCgADIBFQgIgBgGgDIAFgSIAMAEQAHADAGAAQAIAAAEgDQAEgDAAgFQAAgFgEgDQgDgDgJgDIgMgGIgJgHIgFgHIgBgIQAAgFADgGQACgFAFgEQAFgFAHgCQAHgCAIAAIAPABQAGACAFADIgFARQgMgFgJgBQgGAAgEADQgDADAAAEQAAADADADQAEADAKAEQAGABAFADIAIAHQADAEACAEQACAEAAAGQAAAGgDAGQgCAGgFAEQgGAEgHACQgHACgKAAQgJAAgHgCgABvBEIgIgGQgDgDgDgEIAAAAIgBAOIgVAAIAAiMIAZAAIAAA7QAFgIAIgEQAIgEALAAQAIAAAIAEQAIADAFAHQAFAGADAIQADAJAAALQgBAQgDAGQgDAKgHAGQgGAHgIADQgIADgIAAQgKAAgHgDgABtgEQgGAEgCAHIgBAXIABAFQACAHAGAGQAGAEAHAAQAGAAAFgCQAEgCAEgFQADgDACgHQABgGAAgGQAAgIgBgFQgCgGgDgCQgDgEgFgCQgEgDgGAAQgIAAgGAFgAgDBEQgJgEgHgGQgGgGgEgKQgDgIAAgMQAAgKADgJQADgIAGgHQAGgHAJgEQAEgDADgBIALgBIALABQAFABAEADQAIADAFAIQAFAGACAHQACAIAAAIIAAALIhAAAQABAGACAFQACAFAEADQADADAFABQAFACAGAAQAJAAAGgCIAMgCIAEARIgPAEQgJABgKAAQgMAAgHgDgAAgALQAAgJgEgFIgGgGQgEgCgGgBQgFABgFACQgCACgDAEQgFAFgBAJIApAAIAAAAgAk8BEQgJgDgGgHQgHgHgEgJQgDgJAAgLQAAgMADgKQAEgIAHgGQAHgHAJgDQAJgEALAAQALAAAJAEQAJADAGAHQAHAHADAHQAEAJAAALQAAAHgCAFIgDALQgEAJgHAHQgHAGgJADQgJADgJAAQgLAAgJgDgAkzgHQgEACgDAFIgEAJQgCAFAAAHQAAAHACAGQABAGAEAEQADAFAEACQAFADAFAAQAGAAAEgDQAEgCADgFQAEgEABgGQACgGAAgHQAAgHgBgFIgEgJQgDgFgFgCQgEgDgGAAQgHAAgFADgAmnBGIgOgDIgMgGIgKgIIgIgKQgEgFgCgHQgDgGgBgHQgBgHAAgHQAAgHABgHIAEgNIAHgNIAJgKQAFgEAGgEQAGgDAGgCIAPgFIAQgBQALAAALACQAIACAGADIgGATQgQgFgOgBQgLAAgJAEQgJADgHAGQgGAHgEAIQgDAJAAAKQAAALADAJQADAKAHAGQAGAHAIADQAJADALAAQANAAAFgDIAAgiIgYAAIAAgRIAwAAIAABDQgZAHgSAAIgRgBgAEUBFIAAhfIAZAAIAABfgAhhBFIgOg/QgDgNgEgcIgBAAIgJApIgPA/IgbAAIghiFIAaAAIAWBrIAKguIAPg9IAaAAIANA+QAGAZACATIABAAIAJgtIAOg9IAZAAIgkCFgAEWgsQgDgEAAgFQAAgGADgEQAEgDAGAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape.setTransform(48,7.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96,14.4);


(lib.Text = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AVHBaQgLgEgIgJQgKgIgEgMQgFgNAAgPQAAgPAFgNQAEgKAKgJQAIgIAMgFQAMgFAOAAQAOAAANAFQALAFAIAIQAIAJAFAKQAEAMAAAOQAAAJgBAIIgEANQgGANgJAIQgJAIgMAFQgLAEgMAAQgOAAgMgFgAVTgJQgGAEgEAFQgDAFgCAIQgCAHAAAJQAAAJADAIQACAHADAGQAFAGAFADQAGADAIAAQAGAAAGgDQAGgDAEgGQAEgFACgIQACgIAAgKQAAgIgBgHQgCgIgDgFQgFgFgFgDQgGgEgIAAQgIAAgHADgAHhBaIAEgZQALADAJAAQAHAAAFgCQAGgCADgEQAFgFACgHQABgIAAgLIAAhuIAhAAIAABvQgBASgEANQgEAMgIAHQgHAIgLADQgKAEgOAAQgQAAgLgFgACdBbQgGgDgGgFQgFgFgDgHQgCgHAAgHQAAgMAFgJQAFgJAKgGQAJgGAPgDQANgDASAAIAAgCQAAgHgEgFQgEgEgEgCQgGgCgIAAQgJAAgKADQgIACgHAEIgGgVQAIgEALgDQAMgEAPAAQAOAAALAFQAKAEAGAIQAFAHADAKQADAHAAALIAAAtQAAAUACALIgdAAIgCgOIgBAAQgGAHgJAFQgLAFgMAAQgIAAgJgEgAC0AiQgGADgDAFQgFAFAAAHQAAAIAGAFQAFAFAIAAQAJAAAHgGQAGgEACgIIACgHIAAgRQgXABgIADgAnuBaQgLgEgJgJQgJgIgFgMQgEgNgBgPQABgPAEgNQAFgKAJgJQAJgIAMgFQAMgFAOAAQAOAAAMAFQALAFAJAIQAIAJAEAKQAFAMAAAOQAAAJgBAIIgFANQgFANgKAIQgIAIgMAFQgLAEgNAAQgOAAgLgFgAnigJQgGAEgEAFQgEAFgCAIQgCAHAAAJQABAJACAIQACAHAEAGQAEAGAGADQAGADAHAAQAHAAAFgDQAGgDAEgGQAEgFADgIQACgIAAgKQAAgIgBgHQgCgIgEgFQgEgFgGgDQgGgEgHAAQgJAAgGADgAxsBaQgMgEgIgJQgJgIgFgMQgEgNAAgPQAAgPAEgNQAFgKAJgJQAJgIAMgFQAMgFAOAAQAOAAAMAFQALAFAJAIQAIAJAEAKQAFAMAAAOQAAAJgBAIIgFANQgFANgJAIQgJAIgMAFQgMAEgMAAQgOAAgLgFgAxggJQgGAEgEAFQgDAFgDAIQgCAHAAAJQABAJACAIQACAHAEAGQAEAGAGADQAGADAHAAQAHAAAFgDQAGgDAEgGQAFgFACgIQACgIAAgKQAAgIgBgHQgDgIgDgFQgEgFgGgDQgGgEgHAAQgJAAgGADgAz+BaQgMgEgJgJQgIgIgFgMQgFgNAAgPQAAgPAFgNQAFgKAIgJQAJgIAMgFQANgFAOAAQAOAAALAFQAMAFAIAIQAIAJAFAKQAFAMAAAOQAAAJgCAIIgEANQgGANgJAIQgJAIgMAFQgLAEgNAAQgNAAgLgFgAzygJQgHAEgDAFQgEAFgCAIQgCAHAAAJQAAAJACAIQADAHAEAGQAEAGAFADQAGADAHAAQAIAAAFgDQAGgDAEgGQAEgFACgIQACgIABgKQgBgIgBgHQgCgIgEgFQgDgFgGgDQgGgEgIAAQgJAAgFADgAPlBaQgNgFgIgIQgIgIgFgMQgFgMAAgPQAAgNAFgMQAEgLAHgJQAJgKAKgFIANgEQAHgCAHAAQAIAAAHACIALAEQALAFAGAKQAGAIAEAKQACAKAAALIgBANIhVAAQAAAJAEAGQADAGAFAEQAFAEAHACQAIACAHAAQALAAAJgBQAIgCAHgDIAFAXQgJADgLACQgLACgNAAQgQAAgLgEgAQVAPQAAgLgFgHQgDgFgFgDQgGgDgIAAQgGAAgGADQgFADgEAFQgGAGgCAMIA4AAIAAAAgAJmBbQgNgDgHgFIAHgaQAIAFALADQAMADALAAQAHAAAHgCQAGgBAEgDQAEgEACgEQACgFAAgFQAAgKgHgGQgHgHgRgGQgLgEgJgFQgIgFgGgEQgHgGgDgIQgDgIgBgJQABgLAEgJQAEgJAIgHQAJgHALgDQAMgEANAAQANAAAMACQAKADAIAEIgIAZQgTgIgQAAQgIAAgFACQgFABgFAEQgGAFAAAJQAAAFACAEQABAEAFADQAGAGATAHQAMAEAIAEQAJAEAFAHQAGAGACAIQADAHAAAKQAAALgEAJQgDAKgJAHQgJAHgMAEQgNAEgQAAQgNAAgOgDgAGKBaQgNgFgIgIQgIgIgFgMQgFgMAAgPQAAgNAFgMQAEgLAHgJQAJgKAKgFIANgEQAHgCAHAAQAIAAAHACIALAEQALAFAGAKQAGAIAEAKQACAKAAALIgBANIhVAAQAAAJAEAGQADAGA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");
	this.shape.setTransform(146.5,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.3,2.8,288.4,19.1);


(lib.Logo = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.logo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,246,240);


(lib.WITHFLASHPLATFORM_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.WITHFLASHPLATFORM();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,497,34);


(lib.rects_1 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEsEsIpXAAIAApXIJXAAg");
	this.shape.setTransform(30,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("AkrEsIAApXIJXAAIAAJXg");
	this.shape_1.setTransform(30,30);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.INTERACTIVEMOTIONLAB_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.INTERACTIVEMOTIONLAB();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,549,34);


(lib.bgMat_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.bgMat();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.bgImg_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.bgImg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.BtnOver = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0.502)"],[0,1],0,15,0,-14.9).s().rr(-100.5,-15,201,30,3);
	this.shape.setTransform(100.5,15);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,201,30);


(lib.logo_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.Logo();
	this.instance.setTransform(123,120,1,1,0,0,0,123,120);
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,246,240);


(lib.ClockMakerjp_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.Text();
	this.instance.setTransform(146.8,17.6,1,1,0,0,0,146.8,17.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,102,255,1)",0,0,12);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.3,2.8,288.4,19.1);


(lib.Btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cnt = 0;
		
		this.onMouseOver = function(){
			this.flag = true;
		}
		
		this.onMouseOut = function(){
			this.flag = false;
		}
		
		this.onTick = function(){
			if(this.flag) this.cnt ++;
			else this.cnt --;
			
			if(this.cnt < 0) this.cnt = 0;
			if(this.cnt > 10) this.cnt = 10;
			
			this.gotoAndStop(this.cnt)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Go Website
	this.instance = new lib.TextBtn();
	this.instance.setTransform(102.7,15.3,1,1,0,0,0,48,7.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(11));

	// レイヤー 5
	this.instance_1 = new lib.BtnOver();
	this.instance_1.setTransform(100.5,15,1,1,0,0,0,100.5,15);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.5},10,cjs.Ease.get(1)).wait(1));

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#334668","#233347","#070B0E","#000000"],[0,0.49,0.502,1],-1.1,-17.3,-1.1,15.5).s("rgba(255,255,255,0.498)").ss(1,1,1).dr(-100.5,-15,201,30);
	this.shape.setTransform(101,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.5,30.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;