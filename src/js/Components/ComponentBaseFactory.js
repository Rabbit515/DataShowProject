'use strict';
const ComponentBaseFactory = (config) => {
    let Component = $('<div class="ComponentBase"></div>');
    Component.attr('id', (Math.random() + '').replace('.', '_') );
    config.width && Component.css('width', config.width / 2);
    config.height && Component.css('height', config.height / 2);
    config.text && Component.text(config.text);
    config.name && Component.addClass(config.name);
    config.center && Component.css({left: '50%', marginLeft: -(config.width / 4)});
    config.css && Component.css(config.css);
    if(config.eventType) {
        for(var typeProp in config.eventType) {
            Component.on(typeProp, config.eventType[typeProp]);
        }
    }

    Component.on('componentLeave',  () => {
        Component.removeClass('cpLoad').addClass('.cpLeave');
        config.animateOut && Component.animate(config.animateOut);
    });
    Component.on('componentLoad', () => {
        Component.removeClass('cpLeave').addClass('cpLoad');
        config.animateIn && Component.delay(config.delay ? config.delay : 0).animate(config.animateIn);
        
        
    });

    return Component;
};
export default ComponentBaseFactory;