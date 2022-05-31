(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(["chartist"], function (Chartist) {
            return (root.returnExportsGlobal = factory(Chartist));
        });
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require("chartist"));
    } else {
        root['Chartist.plugins.tooltips'] = factory(Chartist);
    }
}(this, function (Chartist) {

    /**
     * Chartist.js plugin to display a data label on top of the points in a line chart.
     *
     */
    /* global Chartist */
    (function (window, document, Chartist) {
        'use strict';

        var defaultOptions = {
            currency: undefined,
            currencyFormatCallback: undefined,
            tooltipOffset: {
                x: 0,
                y: -20
            },
            anchorToPoint: false,
            appendToBody: false,
            class: undefined,
            pointClass: 'ct-point'
        };

        Chartist.plugins = Chartist.plugins || {};
        Chartist.plugins.tooltip = function (options) {
            options = Chartist.extend({}, defaultOptions, options);

            return function tooltip(chart) {
                 console.log($chart, chart, chart.container);
                var tooltipSelector = options.pointClass;
                if (chart instanceof Chartist.Bar) {
                    tooltipSelector = 'ct-bar';
                } else if (chart instanceof Chartist.Pie) {
                    // Added support for donut graph
                    if (chart.options.donut) {
                        tooltipSelector = 'ct-slice-donut';
                    } else {
                        tooltipSelector = 'ct-slice-pie';
                    }
                }

                var $chart = chart.container;
                // console.log($chart,chart, chart.container);
                var $toolTip = $('.chartist-tooltip')[0];
                if (!$toolTip) {
                    $toolTip = document.createElement('div');
                    $toolTip.className = (!options.class) ? 'chartist-tooltip' : 'chartist-tooltip ' + options.class;
                    if (!options.appendToBody) {
                        $chart.appendChild($toolTip);
                    } else {
                        document.body.appendChild($toolTip);
                    }
                }
                var height = $toolTip.offsetHeight;
                var width = $toolTip.offsetWidth;

                hide($toolTip);

                function on(event, selector, callback) {
                    $chart.addEventListener(event, function (e) {
                        if (!selector || hasClass(e.target, selector))
                            callback(e);
                    });
                }

                on('mouseover', tooltipSelector, function (event) {
                    var $point = event.target;
                    var tooltipText = '';

                    var isPieChart = (chart instanceof Chartist.Pie) ? $point : $point.parentNode;
                    var seriesName = (isPieChart) ? $point.parentNode.getAttribute('ct:meta') || $point.parentNode.getAttribute('ct:series-name') : '';
                    var meta = $point.getAttribute('ct:meta') || seriesName || '';
                    var hasMeta = !!meta;
                    var value = $point.getAttribute('ct:value');

                    if (options.transformTooltipTextFnc && typeof options.transformTooltipTextFnc === 'function') {
                        value = options.transformTooltipTextFnc(value);
                    }

                    if (options.tooltipFnc && typeof options.tooltipFnc === 'function') {
                        tooltipText = options.tooltipFnc(meta, value);
                    } else {
                        if (options.metaIsHTML) {
                            var txt = document.createElement('textarea');
                            txt.innerHTML = meta;
                            meta = txt.value;
                        }

                        meta = '<span class="chartist-tooltip-meta">' + meta + '</span>';

                        if (hasMeta) {
                            tooltipText += meta + '<br>';
                        } else {
                            // For Pie Charts also take the labels into account
                            // Could add support for more charts here as well!
                            if (chart instanceof Chartist.Pie) {
                                var label = next($point, 'ct-label');
                                if (label) {
                                    tooltipText += text(label) + '<br>';
                                }
                            }
                        }

                        if (value) {
                            if (options.currency) {
                                if (options.currencyFormatCallback != undefined) {
                                    value = options.currencyFormatCallback(value, options);
                                } else {
                                    value = options.currency + value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
                                }
                            }
                            value = '<span class="chartist-tooltip-value">' + value + '</span>';
                            tooltipText += value;
                        }
                    }

                    if (tooltipText) {
                        $toolTip.innerHTML = tooltipText;
                        setPosition(event);
                        show($toolTip);

                        // Remember height and width to avoid wrong position in IE
                        height = $toolTip.offsetHeight;
                        width = $toolTip.offsetWidth;
                    }
                });

                on('mouseout', tooltipSelector, function () {
                    hide($toolTip);
                });

                on('mousemove', null, function (event) {
                    if (false === options.anchorToPoint)
                        setPosition(event);
                });

                function setPosition(event) {
                    height = height || $toolTip.offsetHeight;
                    width = width || $toolTip.offsetWidth;
                    var offsetX = -width / 2 + options.tooltipOffset.x
                    var offsetY = -height + options.tooltipOffset.y;
                    var anchorX, anchorY;

                    if (!options.appendToBody) {
                        var box = $chart.getBoundingClientRect();
                        var left = event.pageX - box.left - window.pageXOffset;
                        var top = event.pageY - box.top - window.pageYOffset;

                        if (true === options.anchorToPoint && event.target.x2 && event.target.y2) {
                            anchorX = parseInt(event.target.x2.baseVal.value);
                            anchorY = parseInt(event.target.y2.baseVal.value);
                        }

                        $toolTip.style.top = (anchorY || top) + offsetY + 'px';
                        $toolTip.style.left = (anchorX || left) + offsetX + 'px';
                    } else {
                        $toolTip.style.top = event.pageY + offsetY + 'px';
                        $toolTip.style.left = event.pageX + offsetX + 'px';
                    }
                }
            }
        };

        function show(element) {
            if (!hasClass(element, 'tooltip-show')) {
                element.className = element.className + ' tooltip-show';
            }
        }

        function hide(element) {
            var regex = new RegExp('tooltip-show' + '\\s*', 'gi');
            element.className = element.className.replace(regex, '').trim();
        }

        function hasClass(element, className) {
            return (' ' + element.getAttribute('class') + ' ').indexOf(' ' + className + ' ') > -1;
        }

        function next(element, className) {
            do {
                element = element.nextSibling;
            } while (element && !hasClass(element, className));
            return element;
        }

        function text(element) {
            return element.innerText || element.textContent;
        }

    }(window, document, Chartist));

    return Chartist.plugins.tooltips;

}));
    //
// /*************************************************
//          *               Project Income               *
//          *************************************************/
//
//         var projectIncomeBar = new Chartist.Bar('#project-income-chart', {
//             labels: ['2017', '2016', '2015', '2014', '2013', '2012'],
//             series: [
//                 [8000, 12000, 14000, 13000, 9000, 7000],
//             ]
//         }, {
//             axisY: {
//                 labelInterpolationFnc: function (value) {
//                     return (value / 1000) + 'k';
//                 },
//                 scaleMinSpace: 50,
//                 showGrid: false
//             },
//             axisX: {
//                 showGrid: false
//             },
//             plugins: [
//                 Chartist.plugins.tooltip({
//                     appendToBody: true,
//                     pointClass: 'ct-point'
//                 })
//             ],
//         });
//         projectIncomeBar.on('draw', function (data) {
//             if (data.type === 'bar') {
//                 data.element.attr({
//                     style: 'stroke-width: 30px',
//                     y1: 400,
//                     x1: data.x1 + 0.001
//                 });
//                 data.group.append(new Chartist.Svg('circle', {
//                     cx: data.x2,
//                     cy: data.y2,
//                     r: 15
//                 }, 'ct-slice-pie'));
//             }
//         });
//         projectIncomeBar.on('created', function (data) {
//             var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
//             defs.elem('linearGradient', {
//                 id: 'barGradient2',
//                 x1: 0,
//                 y1: 0,
//                 x2: 0,
//                 y2: 1
//             }).elem('stop', {
//                 offset: '10%',
//                 'stop-color': 'rgba(249,111,155,0.9)'
//             }).parent().elem('stop', {
//                 offset: '90%',
//                 'stop-color': 'rgba(105,103,206,0.8)'
//             });
//             return defs;
//         });
//
//    /*************************************************
//              *               New Projects               *
//              *************************************************/
//
//             var newProjects = new Chartist.Line('#new-projects', {
//                 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//                 series: [
//                     [90, 325, 225, 600, 200],
//                     [590, 90, 300, 150, 500]
//                 ]
//             }, {
//                 low: 0,
//                 fullWidth: true,
//                 onlyInteger: true,
//                 axisY: {
//                     low: 0,
//                     scaleMinSpace: 50,
//                 },
//                 axisX: {
//                     showGrid: false
//                 },
//                 chartPadding: {
//                     right: 25
//                 },
//                 lineSmooth: Chartist.Interpolation.simple({
//                     divisor: 2
//                 }),
//                 plugins: [
//                     Chartist.plugins.tooltip({
//                         appendToBody: true,
//                         pointClass: 'ct-point-circle'
//                     })
//                 ]
//
//             });
//             newProjects.on('created', function (data) {
//                 var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
//                 defs.elem('linearGradient', {
//                     id: 'linear6',
//                     x1: 0,
//                     y1: 1,
//                     x2: 0,
//                     y2: 0
//                 }).elem('stop', {
//                     offset: 0,
//                     'stop-color': 'rgba(45,121,255,0.7)'
//                 }).parent().elem('stop', {
//                     offset: 1,
//                     'stop-color': 'rgba(249,81,255, 0.7)'
//                 });
//
//                 defs.elem('linearGradient', {
//                     id: 'linear7',
//                     x1: 0,
//                     y1: 1,
//                     x2: 1,
//                     y2: 0
//                 }).elem('stop', {
//                     offset: 0,
//                     'stop-color': 'rgba(247,214,142,1)'
//                 }).parent().elem('stop', {
//                     offset: 1,
//                     'stop-color': 'rgba(248,120,131, 1)'
//                 });
//
//                 return defs;
//
//
//             }).on('draw', function (data) {
//                 var circleRadius = 10;
//                 if (data.type === 'point') {
//                     var circle = new Chartist.Svg('circle', {
//                         cx: data.x,
//                         cy: data.y,
//                         'ct:value': data.y,
//                         r: circleRadius,
//                         class: data.value.y === 600 ? 'ct-point-circle' : 'ct-point-circle-transperent'
//                     });
//                     data.element.replace(circle);
//                 }
//                 if (data.type === 'line') {
//                     data.element.animate({
//                         d: {
//                             begin: 1000,
//                             dur: 1000,
//                             from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
//                             to: data.path.clone().stringify(),
//                             easing: Chartist.Svg.Easing.easeOutQuint
//                         }
//                     });
//                 }
//             });


