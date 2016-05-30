// Animated Circles

(function() {

    var width, height, coverAnimation, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();
    initAnimation();

    function initHeader() {
        if (screen.width < 599) {
            width = window.innerWidth;
        }
        else {
            width = window.innerWidth / 2;
        }
        height = window.innerHeight;
        target = {x: 0, y: height};

        coverAnimation = document.getElementById('coverAnimation');
        coverAnimation.style.height = height+'px';

        canvas = document.getElementById('coverAnimationCanvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < 480; x++) {
            addCircle(x*400);
        }
    }

    function addCircle(delay) {
        setTimeout(function() {
            var c = new Circle();
            circles.push(c);
            tweenCircle(c);
        }, delay);
    }

    function initAnimation() {
        animate();
    }

    function tweenCircle(cir) {
        var c = Math.random()*(2*Math.PI);
        var x = (200+Math.random()*100)*Math.cos(c) + width*0.5;
        var y = (200+Math.random()*100)*Math.sin(c) + height*0.5-20;
        var time = 4+3*Math.random();

        TweenLite.to(cir.pos, time, {x: x,
            y: y, ease:Circ.easeOut,
            onComplete: function() {
                cir.init();
                tweenCircle(cir);
        }});
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        if (screen.width < 599) {
            width = window.innerWidth;
        }
        else {
            width = window.innerWidth / 2;
        }
        height = window.innerHeight;
        coverAnimation.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            // _this.coords = [{},{},{}];
            _this.pos = {};
            _this.rad = 0;
            init();
        })();

        function init() {
            _this.pos.x = width*0.5;
            _this.pos.y = height*0.5-20;
            _this.rad = 2+Math.random()*10;
            _this.scale = 0.1+Math.random()*0.3;
            _this.color = '221,192,69';
            setTimeout(function() { _this.alpha = 0.8; }, 10);
        }

        this.draw = function() {
            if(_this.alpha >= 0.005) _this.alpha -= 0.005;
            else _this.alpha = 0;
            ctx.beginPath();
            ctx.arc(_this.pos.x,_this.pos.y,_this.rad,0,2*Math.PI);
            // ctx.moveTo(_this.coords[0].x+_this.pos.x, _this.coords[0].y+_this.pos.y);
            ctx.closePath();
            ctx.fillStyle = 'rgba('+_this.color+','+ _this.alpha+')';
            ctx.fill();
        };

        this.init = init;
    }
    
})();