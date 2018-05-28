/**
 * 随机颜色值之rgba
 * @authors Your Name (you@example.org)
 * @date    2018-02-04 14:26:09
 * @version $Id$
 */

 function color_rgba(){
    var arr=[];
    for( var i=0;i<3;i++){
        arr[i]=Math.ceil( Math.random()*255 );
    }
    var num=Math.floor( Math.random()*10 );
    // if( num != 0 ){
    //     arr[3]='.'+num;
    // }else{
    //     arr[3]=0;
    // }
    arr[3]= num!=0?'.'+num : 0;
    return 'rgba('+arr[0]+','+arr[1]+','+arr[2]+','+arr[3]+')';
 }

