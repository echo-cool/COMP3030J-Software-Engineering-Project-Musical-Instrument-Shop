var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function () {
    $messages.mCustomScrollbar();
    setTimeout(function () {
        //fakeMessage();
    }, 100);
});

function updateScrollbar() {
    $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
    });
}

function setDate() {
    d = new Date()
    if (m != d.getMinutes()) {
        m = d.getMinutes();
        $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    }
}

function insertMessage() {
    msg = $('.message-input').val();
    if ($.trim(msg) == '') {
        return false;
    }
    $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    $('.message-input').val(null);
    updateScrollbar();
    interact(msg);
    setTimeout(function () {
        //fakeMessage();
    }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function () {
    insertMessage();
});

$(window).on('keydown', function (e) {
    if (e.which == 13) {
        insertMessage();
        return false;
    }
})


function interact(message) {
    // loading message
    $('<div class="message loading new"><figure class="avatar"><img src="/static/res/easybot.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
    // make a POST request [ajax call]
    $.ajax({
        url: '/chat/rasa/',
        type: 'POST',
        data: {
            message: message
        },
        success: function (response) {
            console.log(response)
            // remove loading message
            $('.message.loading').remove();
            // add response message
            $('<div class="message new"><figure class="avatar"><img src="/static/assets/ai_chat_test/res/easybot.png" /></figure>' + response + '</div>').appendTo($('.mCSB_container')).addClass('new');
            // update scrollbar
            setDate();
            updateScrollbar();
        },
        error: function (error) {
            console.log(error)
        }
    });
    // $.post('/chat/rasa/', {
    // 	'message': message,
    // }).done(function(reply) {
    //   console.log(reply)
    // 	// Message Received
    // 	// 	remove loading meassage
    // $('.message.loading').remove();
    // 	// Add message to chatbox
    // $('<div class="message new"><figure class="avatar"><img src="/static/res/easybot.png" /></figure>' + reply + '</div>').appendTo($('.mCSB_container')).addClass('new');
    // setDate();
    // updateScrollbar();
    //
    // 	}).fail(function(res) {
    //   console.log(res)
    // 			alert('error calling function');
    // 			});
}
