/**
 * 回调函数
 * @authors Your Name (you@example.org)
 * @date    2018-02-10 10:44:14
 * @version $Id$
 */

    function callbacks( obj,json,duration,callback){
        window.requestAnimationFrame = window.requestAnimationFrame || function(fn){
            return setTimeout( fn,1000/60 );
        };
        window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
        var init = {};//创建一个空的对象，用来存储从对象中获取到的属性以及值
        var target = {};//用来存储从函数调用中获取到的属性以及值
        for( attr in json ){//将数据填入到空的对象中去
            init[attr] = parseFloat(getStyle( obj,attr ));//从obj的自身属性中获取到值，并保存到init对象中去
            target[attr] = parseFloat( json[attr] );//从调用的函数中获取到json对象的内容
        }
        var init_t = new Date();//获取当前时间

        var run_t;
        var a;
        var val;
        var unit = '';
        if( attr != 'opacity'){
            unit = 'px';
        }
        (function run(){
            run_t = new Date() - init_t;//获取当前运动时间
            if( run_t >  duration){//这个判断写到json对象外面,还有，此处不能等，否则会出现超出现象
                run_t = duration;
            }else{
                window.requestAnimationFrame( run );
            }
            //console.log( run_t );
            for (attr in json) {
                a = ( target[attr] - init[attr] )*2/Math.pow( duration ,2 );//对象中的每个属性均不一样，那么算出来的加速度也不会相同，对象的每一个属性均有一个加速度，那么在计算的时候，要遍历对象的每一个元素然后再来算加速度，这个变量直接用a就可以了，在用的时候，先计算第一个a，然后算完了之后，第二个a就会将第一个a替换掉，这样就不会造成冲突
                 val = a*Math.pow( run_t,2 )/2;//计算运动路程
                 obj.style[attr] = init[attr] + val + unit;
            }
            run_t >= duration?callback&&callback():'';//此处，如果有callback那么就执行，如果没有的话，就不执行，如果这句话写到run（）外面的花，就会导致同时执行。
        })();
    }

    function getStyle( obj,attr){
        return window.getComputedStyle? window.getComputedStyle(obj)[attr]:obj.currentStyle[attr];
    }

