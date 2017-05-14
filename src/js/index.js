'use strict';
import '../less/ComponentBase.less';
import './jqUi.js';
import './jqFp.js';
import Manage from './PageComponentManage.js';
import '../less/index.less';

Manage
    .init('container')
        .addPage('index')
            .addComponent({
                type: 'Base',
                width: 428,
                height: 92,
                center: true,
                css: {
                    backgroundImage: 'url(./src/img/logoIndex.png)',
                    position: 'absolute',
                    top: -40,
                    opacity: 0
                },
                animateIn: {
                    top: 100,
                    opacity: 1
                },
                animateOut: {
                    top: -40,
                    opacity: 0
                }
            })
            .addComponent({
                type: 'Base',
                name: 'shake',
                width: 369,
                height: 95,
                center: true,
                css: {
                    backgroundImage: 'url(./src/img/slogan.png)',
                    position: 'absolute',
                    top: 220,
                    left: -400,
                    opacity: 0
                },
                animateIn: {
                    left: '50%',
                    opacity: 1
                },
                animateOut: {
                    left : -400,
                    opacity: 0
                },
                delay: 500
            })
            .addComponent({
                type: 'Base',
                name: 'left',
                width: 345,
                height: 493,
                css: {
                    backgroundImage: 'url(./src/img/left.png)',
                    position: 'absolute',
                    bottom: 30,
                    left: -345,
                    opacity: 0
                },
                animateIn: {
                    left: 0,
                    opacity: 1
                },
                animateOut: {
                    left: -345,
                    opacity: 0
                },
                delay: 1000
            })
            .addComponent({
                type: 'Base',
                name: 'right',
                width: 324,
                height: 449,
                css: {
                    backgroundImage: 'url(./src/img/right.png)',
                    position: 'absolute',
                    bottom: 30,
                    right: -324,
                    opacity: 0
                },
                animateIn: {
                    right: 0,
                    opacity: 1
                },
                animateOut: {
                    right: -324,
                    opacity: 0
                },
                delay: 1500
            })
        .addPage()
            .addComponent({
                type: 'Base',
                width: 500,
                height: 124,
                css: {
                    backgroundImage: 'url(./src/img/mind.png)',
                    position: 'absolute',
                    top: -40,
                    left: 0,
                    opacity: 0
                },
                animateIn: {
                    top: 40,
                    opacity: 1
                },
                animateOut: {
                    top: -40,
                    opacity: 0
                },
            })
            .addComponent({
                type: 'Base',
                width: 500,
                height: 15,
                center: true,
                text: '用实力将情怀落地',
                css: {
                    position: 'absolute',
                    top: -40,
                    opacity: 0,
                    color: '#f00',
                    lineHeight: '15px',
                    textAlign: 'center',
                    fontSize: '25px'
                },
                animateIn: {
                    top: 140,
                    opacity: 1
                },
                animateOut: {
                    top: -40,
                    opacity: 0
                },
                delay: 500
            })       
            .addComponent({
                type: 'Base',
                width: 521,
                height: 336,
                center: true,
                text: '渡一教育创立于2015年！在成哥 邓哥 思彤哥的带领下向高端编程教育公司大踏步。渡一Dream Factory,渡一web coffee于今年正式成立！',
                css: {
                    position: 'absolute',
                    bottom: 30,
                    opacity: 0,
                    color: '#000',
                    lineHeight: '15px',
                    textAlign: 'justify',
                    fontSize: '18px',
                    lineHeight: '24px',
                    fontWeight: 700,
                    padding: 8,
                    backgroundImage: 'url(./src/img/dialog.png)'
                },
                animateIn: {
                    bottom: 280,
                    opacity: 1
                },
                animateOut: {
                    bottom: 30,
                    opacity: 0
                },
                delay: 1000
            })
            .addComponent({
                type: 'Base',
                width: 515,
                height: 305,
                center: true,
                css: {
                    position: 'absolute',
                    bottom: -20,
                    opacity: 0,
                    backgroundImage: 'url(./src/img/people.png)'
                },
                animateIn: {
                    bottom: 80,
                    opacity: 1
                },
                animateOut: {
                    bottom: -20,
                    opacity: 0
                },
                delay: 1500
            })    
        .addPage()
            .addComponent({
                type: 'Base',
                width: 500,
                height: 124,
                css: {
                    backgroundImage: 'url(./src/img/bar.png)',
                    position: 'absolute',
                    top: -40,
                    left: 0,
                    opacity: 0
                },
                animateIn: {
                    top: 40,
                    opacity: 1
                },
                animateOut: {
                    top: -40,
                    opacity: 0
                },
            })
            .addComponent({
                type: 'Base',
                width: 500,
                height: 15,
                center: true,
                text: '课程体系柱状图',
                css: {
                    position: 'absolute',
                    top: -40,
                    opacity: 0,
                    color: '#f00',
                    lineHeight: '15px',
                    textAlign: 'center',
                    fontSize: '25px'
                },
                animateIn: {
                    top: 140,
                    opacity: 1
                },
                animateOut: {
                    top: -40,
                    opacity: 0
                },
                delay: 500
            })  
            .addComponent({
                type: 'Bar',
                width: 530,
                height: 600,
                center: true,
                css: {
                    position: 'absolute',
                    bottom: -40,
                    opacity: 0,
                    color: '#f00',
                    lineHeight: '15px',
                    textAlign: 'center',
                    fontSize: '25px'
                },
                data: [
                    ['JS', 0.4, '#ff7676'],
                    ['HTML5', 0.3, '#aa6554'],
                    ['CSS3', 0.2, '#455677'],
                    ['jQuery', 0.1, '#87aa42']
                ],
                animateIn: {
                    bottom: 120,
                    opacity: 1
                },
                animateOut: {
                    bottom: -40,
                    opacity: 0
                },
                delay: 1000
            })            
        .addPage()
            .addComponent({
                type: 'Base',
                width: 499,
                height: 125,
                css: {
                    backgroundImage: 'url(./src/img/polyline.png)',
                    position: 'absolute',
                    top: -40,
                    left: 0,
                    opacity: 0
                },
                animateIn: {
                    top: 40,
                    opacity: 1
                },
                animateOut: {
                    top: -40,
                    opacity: 0
                },
            })
            .addComponent({
                type: 'Base',
                width: 500,
                height: 15,
                center: true,
                text: '课程体系折线图',
                css: {
                    position: 'absolute',
                    top: -40,
                    opacity: 0,
                    color: '#f00',
                    lineHeight: '15px',
                    textAlign: 'center',
                    fontSize: '25px'
                },
                animateIn: {
                    top: 140,
                    opacity: 1
                },
                animateOut: {
                    top: -40,
                    opacity: 0
                },
                delay: 500
            })  
            .addComponent({
                type: 'Poly',
                width: 530,
                height: 600,
                center: true,
                css: {
                    position: 'absolute',
                    bottom: -40,
                    opacity: 0,
                    color: '#f00',
                    lineHeight: '15px',
                    textAlign: 'center',
                    fontSize: '25px'
                },
                data: [
                    ['JS', 0.4, '#ff7676'],
                    ['HTML5', 0.3, '#aa6554'],
                    ['CSS3', 0.2, '#455677'],
                    ['jQuery', 0.1, '#87aa42']
                ],
                animateIn: {
                    bottom: 120,
                    opacity: 1
                },
                animateOut: {
                    bottom: -40,
                    opacity: 0
                },
                delay: 1000
            })   
        .addPage()
            .addComponent({
                type: 'Base',
                width: 499,
                height: 125,
                css: {
                    backgroundImage: 'url(./src/img/pie.png)',
                    position: 'absolute',
                    top: -40,
                    left: 0,
                    opacity: 0
                },
                animateIn: {
                    top: 40,
                    opacity: 1
                },
                animateOut: {
                    top: -40,
                    opacity: 0
                },
            })
            .addComponent({
                type: 'Base',
                width: 500,
                height: 15,
                center: true,
                text: '课程体系饼图',
                css: {
                    position: 'absolute',
                    top: -40,
                    opacity: 0,
                    color: '#f00',
                    lineHeight: '15px',
                    textAlign: 'center',
                    fontSize: '25px'
                },
                animateIn: {
                    top: 140,
                    opacity: 1
                },
                animateOut: {
                    top: -40,
                    opacity: 0
                },
                delay: 500
            })  
            .addComponent({
                type: 'Pie',
                width: 530,
                height: 600,
                center: true,
                css: {
                    position: 'absolute',
                    bottom: -40,
                    opacity: 0,
                    color: '#f00',
                    lineHeight: '15px',
                    textAlign: 'center',
                    fontSize: '15px'
                },
                data: [
                    ['JS', 0.4, '#ff7676'],
                    ['HTML5', 0.3, '#aa6554'],
                    ['CSS3', 0.2, '#455677'],
                    ['jQuery', 0.1, '#87aa42']
                ],
                animateIn: {
                    bottom: 120,
                    opacity: 1
                },
                animateOut: {
                    bottom: -40,
                    opacity: 0
                },
                delay: 1000
            })   
        .addPage()
            .addComponent({
                type: 'Base',
                name: 'back',
                width: 96,
                height: 52,
                center: true,
                css: {
                    backgroundImage: 'url(./src/img/back.png)',
                    position: 'absolute',
                    opacity: 0
                },
                animateIn: {
                    opacity: 1
                },
                animateOut: {
                    opacity: 0
                },
                eventType: {
                    click: () => {
                        Manage.container.fullpage.moveTo(1);
                    }
                }
            })
            .addComponent({
                type: 'Base',
                width: 128,
                height: 120,
                css: {
                    backgroundImage: 'url(./src/img/share.png)',
                    position: 'absolute',
                    top: 200,
                    right: 50,
                    opacity: 0
                },
                animateIn: {
                    top: 0,
                    right: 0,
                    opacity: 1
                },
                animateOut: {
                    top: 200,
                    right: 50,
                    opacity: 0
                },
                delay: 500
            })
            .addComponent({
                type: 'Base',
                name: 'shake',
                width: 428,
                height: 92,
                center: true,
                css: {
                    backgroundImage: 'url(./src/img/logo.png)',
                    position: 'absolute',
                    top: 210,
                    left: -400,
                    opacity: 0
                },
                animateIn: {
                    left: '50%',
                    opacity: 1
                },
                animateOut: {
                    left: -400,
                    opacity: 0
                },
                delay: 1000
            })
            .addComponent({
                type: 'Base',
                width: 369,
                height: 95,
                center: true,
                css: {
                    backgroundImage: 'url(./src/img/slogan.png)',
                    position: 'absolute',
                    bottom: -20,
                    opacity: 0
                },
                animateIn: {
                    bottom: 240,
                    opacity: 1
                },
                animateOut: {
                    bottom: -20,
                    opacity: 0
                },
                delay: 1500
            })
    .load();
