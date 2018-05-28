/**
 * addEvent封装
 * @authors Your Name (you@example.org)
 * @date    2018-03-06 09:11:48
 * @version $Id$
 */


    function addEvent(obj,type,fn,bool){
        bool = bool || false;
        if(obj.addEventListener){
            obj.addEventListener(type,handle,bool);//谷歌
            if(type == 'mousewheel'){
                obj.addEventListener('DOMMouoseScroll',handle,bool);//火狐
            }
        }else{
            obj.attachEvent('on'+type,handle);//ie
        }
        function handle(e){
            e = e || window.event;//兼容ie
            e.wheel = e.wheelDelta || e.detail*-40;//兼容滚轮方向
            fn.call(obj,e);
            e.preventDefault?e.preventDefault():e.returnValue = false;
        }
    }
    //c//onsole.log(1)
