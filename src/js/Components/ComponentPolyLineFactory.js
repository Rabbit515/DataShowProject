'use strict';
import '../../less/ComponentPolyLineFactory.less';
import ComponentBaseFactory from './ComponentBaseFactory.js';
const ComponentPolyLineFactory = (config) => {
    let Component = ComponentBaseFactory(config);
    //二次改造
    Component.addClass('ComponentPolyLine');
    let oCanvasBg = $('<canvas/>').get(0);
    let ctxBg = oCanvasBg.getContext('2d');
    oCanvasBg.width = config.width;
    oCanvasBg.height = config.height;
    let {width, height} = config;

    ctxBg.beginPath();
    ctxBg.lineWidth = 2;
    ctxBg.strokeStyle = '#f00';
    //水平的线
    let step = 10;
    for(let i = 0; i < step + 1; i++) {
        let y = (height / step) * i;
        ctxBg.moveTo(0, y);
        ctxBg.lineTo(width, y);
    }
    ctxBg.stroke();

    //垂直的线

    step = config.data.length;
    for(let i = 0; i < step + 2; i++) {
        let x = (width / (step + 1)) * i;
        ctxBg.moveTo(x, 0);
        ctxBg.lineTo(x, height);
    }
    ctxBg.stroke();

    //写文本
    let data = config.data;
    let domWidth = width / 2 / (config.data.length + 1);
    data.forEach((ele, index) => {
        //ele -> ['j/h/c', 0.4, '#ff323a']
        let oText = $('<div class="text"/>').text(ele[0]).css('width', domWidth);
        let x = domWidth * (index + 1);
        oText.css({position: 'absolute', bottom: -25, height: 20, lineHeight: '20px',fontSize: '14px', left: x - domWidth /2, textAlign : 'center'})
        Component.append(oText);
        
    });

    let oCanvasLine = $('<canvas/>').get(0);
    let ctxLine = oCanvasLine.getContext('2d');
    oCanvasLine.width = config.width;
    oCanvasLine.height = config.height;

    let paintingSingleWidth = width / (data.length + 1);

    function draw (per) {
        ctxLine.clearRect(0,0,width, height);
        ctxLine.beginPath();
        ctxLine.lineWidth = 3;
        ctxLine.strokeStyle = '#1188f8';

        //描点
        data.forEach((ele, index) => {
            let x = paintingSingleWidth * (index + 1);
            let y = height - height * ele [1] * per;
            ctxLine.moveTo(x, y);
            ctxLine.arc(x,y,5,0,Math.PI * 2);
        })
        ctxLine.stroke();

        //连线
        ctxLine.moveTo(paintingSingleWidth,  height - height * data[0][1] * per);
        let lastX = 0;
        data.forEach((ele, index) => {
            let x = paintingSingleWidth * (index + 1);
            let y = height - height * ele [1] * per;
            ctxLine.lineTo(x, y);
            lastX = x;
        })
        ctxLine.stroke();

        //写文本
        data.forEach((ele, index) => {
            let x = paintingSingleWidth * (index + 1);
            let y = height - height * ele [1] * per;
            if(ele[2]) {
                ctxLine.fillStyle = ele[2] ? ele[2] : '#676767';

            }
            ctxLine.font = '40px Arial';
            ctxLine.fillText((ele[1]) * 100 + '%', x - 20, y - 20);
        })
        ctxLine.stroke();

        //阴影
        ctxLine.lineTo(lastX, height);
        ctxLine.lineTo(paintingSingleWidth, height);
        ctxLine.fillStyle = 'rgba(17, 136, 248, 0.37)';
        ctxLine.fill();
    }
 
    draw(0);

    let timer = null;
    Component.on('componentLoad', () => {
        let step = 0;
        timer = setTimeout(() => {
            for(var i = 0;i < 100; i++) {
                setTimeout(() => {
                    step += 0.01;
                    draw(step);
                }, i * 10);
            }
        },1500)
    });
    Component.on('componentLeave' ,() => {
        clearTimeout(timer);
        draw(0);
    });

    Component.append(oCanvasBg).append(oCanvasLine);
    return Component;
};
export default ComponentPolyLineFactory;