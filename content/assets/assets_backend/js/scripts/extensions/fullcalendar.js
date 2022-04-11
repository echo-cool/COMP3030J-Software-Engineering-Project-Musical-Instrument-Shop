/*=========================================================================================
    File Name: fullcalendar.js
    Description: Fullcalendar
    --------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.2
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/


$(document).ready(function(){

    /************************************
    *               Default             *
    ************************************/
    $('#fc-default').fullCalendar({
        defaultDate: '2016-06-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2016-06-01'
            },
            {
                title: 'Long Event',
                start: '2016-06-07',
                end: '2016-06-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2016-06-11',
                end: '2016-06-13'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T10:30:00',
                end: '2016-06-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2016-06-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2016-06-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2016-06-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2016-06-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2016-06-28'
            }
        ]
    });

    

    /************************************************
    *               External Dragging               *
    ************************************************/

    /* initialize the calendar
    -----------------------------------------------------------------*/

    $('#fc-external-drag').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        defaultDate: '2016-06-12',
        events: [
            {
                title: 'All Day Event',
                start: '2016-06-01',
                color: '#967ADC'
            },
            {
                title: 'Long Event',
                start: '2016-06-07',
                end: '2016-06-10',
                color: '#37BC9B'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-09T16:00:00',
                color: '#37BC9B'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-16T16:00:00',
                color: '#F6BB42'
            },
            {
                title: 'Conference',
                start: '2016-06-11',
                end: '2016-06-13',
                color: '#DA4453'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T10:30:00',
                end: '2016-06-12T12:30:00',
                color: '#DA4453'
            },
            {
                title: 'Lunch',
                start: '2016-06-12T12:00:00',
                color: '#DA4453'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T14:30:00',
                color: '#DA4453'
            },
            {
                title: 'Happy Hour',
                start: '2016-06-12T17:30:00',
                color: '#DA4453'
            },
            {
                title: 'Dinner',
                start: '2016-06-12T20:00:00',
                color: '#DA4453'
            },
            {
                title: 'Birthday Party',
                start: '2016-06-13T07:00:00',
                color: '#DA4453'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2016-06-28',
                color: '#3BAFDA'
            }
        ],
        drop: function() {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        }
    });

    /* initialize the external events
    -----------------------------------------------------------------*/

    $('#external-events .fc-event').each(function() {

        // Different colors for events
        $(this).css({'backgroundColor': $(this).data('color'), 'borderColor': $(this).data('color')});

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            color: $(this).data('color'),
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });


    /****************************************
    *               Selectable              *
    ****************************************/
    $('#fc-selectable').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2016-06-12',
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                $('#fc-selectable').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#fc-selectable').fullCalendar('unselect');
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2016-06-01'
            },
            {
                title: 'Long Event',
                start: '2016-06-07',
                end: '2016-06-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-06-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2016-06-11',
                end: '2016-06-13'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T10:30:00',
                end: '2016-06-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2016-06-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2016-06-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2016-06-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2016-06-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2016-06-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2016-06-28'
            }
        ]
    });


});