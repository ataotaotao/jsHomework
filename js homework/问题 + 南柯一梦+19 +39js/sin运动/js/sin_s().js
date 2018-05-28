/**
 * 封装sin图像路线函数
 * @authors Your Name (you@example.org)
 * @date    2018-02-09 14:15:31
 * @version $Id$
 */

    function sin_s( obj,attr1,attr2,target,speed,R){
        window.requestAnimationFrame = window.requestAnimation || function(fn){
            return setTimeout( fn,1000/30);
        };
        window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
        var init = parseFloat( getStyle( obj,attr1) );
        var value = parseFloat( getStyle( obj,attr2) );
        R =  parseFloat(R);
        target = parseFloat( target );

        var unit='';
        if( attr1 != 'opacity'){
            unit = 'px';
        }
        (function run(){
            init += speed;
            if( Math.abs( init - target ) <= Math.abs( speed) ){
                init = target;
            }else{
                window.requestAnimationFrame( run );
            }
            obj.style[attr1] = R+ init + unit;
            obj.style[attr2] = value + R*Math.sin( init ) + 'px';
        })();
    }

    function getStyle(obj,attr){
            return window.getComputedStyle?window.getComputedStyle(obj)[attr]:obj.currentStyle[attr];
    }

