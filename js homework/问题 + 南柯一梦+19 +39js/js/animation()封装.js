/**
 * 速度版运动框架
 * @authors Your Name (you@example.org)
 * @date    2018-02-08 23:40:23
 * @version $Id$
 */

    function animation( obj,attr,target,speed){
        window.requestAnimationFrame = window.requestAnimation || function(fn){
            return setTimeout( fn,1000/30);
        };
        window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
        var init = parseFloat( getStyle( obj,attr) );
        target = parseFloat( target );

        var unit='';
        if( attr != 'opacity'){
            unit = 'px';
        }
        (function run(){
            init += speed;
            if( Math.abs( init - target ) <= Math.abs( speed) ){
                init = target;
            }else{
                window.requestAnimationFrame( run );
            }
            obj.style[attr] = init + unit;
        })();
    }

    function getStyle(obj,attr){
        return window.getComputedStyle?window.getComputedStyle(obj)[attr]:obj.currentStyle[attr];
     }

