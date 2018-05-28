/**
 * 随机取颜色值 rgb
 * @authors Your Name (you@example.org)
 * @date    2018-02-04 14:06:50
 * @version $Id$
 */
 function color_rgb(){
    var arr=[];
    for( var i=0;i<3;i++){
        arr[i]=Math.ceil( Math.random()*255 );
    }
    return 'rgb('+arr[0]+','+arr[1]+','+arr[2]+')';
 }
