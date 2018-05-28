/**
 * 随机颜色值之十六进制
 * @authors Your Name (you@example.org)
 * @date    2018-02-04 14:58:40
 * @version $Id$
 */
    function color_sixteen(){
        var color='#';
        for( var i=0;i<3;i++){
            var num=Math.floor( Math.random() *255).toString(16);
            color += num.length >1?num:0+num;
        }
        return color;
    }
