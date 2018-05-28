/**
 * 取随机两个整数之间的随机值
 * @authors Your Name (you@example.org)
 * @date    2018-02-04 13:58:39
 * @version $Id$
 */

 function random( a,b ){
    var num=(Math.random()*(b-a) +a ).toFixed(0);
    return num;
 }

