/**
 * animation()时间框架
 * @authors Your Name (you@example.org)
 * @date    2018-02-09 00:11:13
 * @version $Id$
 */

    function animation( obj,attr,target,duration){
        window.requestAnimationFrame = window.requestAnimation || function(fn){
            return setTimeout( fn,1000/30);
        };
        window.cancelAnimationFrame = window.cancelAnimation || clearTimeout;
        var init = parseFloat( getStyle( obj,attr) );
        target = parseFloat( target ) - init;
        var init_t = new Date();

        var unit = '';
        if( attr !== 'opacity'){
            unit = 'px';
        };
        (function request(){
            var run_t = new Date() - init_t;
            var prop = run_t/duration;
            if( prop >= 1){
                prop = 1;
            }else{
                window.requestAnimationFrame( request );
            }
            var val = prop*target;
            obj.style[attr] = init+val+unit;
        })();
    }



    function getStyle(obj,attr){
        return window.getComputedStyle?window.getComputedStyle(obj)[attr]:obj.currentStyle[attr];
    }

