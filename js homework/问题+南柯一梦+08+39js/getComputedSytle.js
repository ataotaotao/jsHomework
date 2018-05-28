/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-01-27 11:00:18
 * @version $Id$
 */

 function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj)[attr];
    }else{
        return obj.currentStyle[attr];
    }
 }
