$("#iAtlasChatDiv").ready(function () {
    console.log("load chat box");
    var conversationTimedOut = false;
    var welcomeBackMessage = null;
    var anon = 0;
    var startMin = 1;
    var fullscreen = 0;  // 0-100; 0=false otherwise is a percentage of window width
    var isMediaFullScreen = false;
    var customHeight = 0; //CustomHeight
    var customWidth = 0; //CustomWidth
    var custGUID = '';
    var numUnreadMessages = 0;
    var popoutText = '';
    var hasInteracted = false;
    var isRevisit = false;
    var isLoadingComplete = false;
    var parentDomain;
    var parentIP = '';
    var isSecure = false;
    var useEmoji = true;
    var useUpload = true;
    var useDelay = false;

    var hidePhoneNumber = false;
    var atlasSettings = '';
    var rtxContext = '';
    var calloutHideDelay = 0;
    var hideCallout = false;
    var launcherScale = "Standard";
    var calloutText = '';
    var welcomeMessage = '';
    var welcomeMessageDelay = 0;

    var customerID = null;
    var feedbackID = null;
    var accountID = null;
    var locationID = null;
    var programID = null;
    var visitorID = null;

    var clientUID = '';

    var clientTrackerName = 'AtlasRTXTracker';
    var gaEventCategory = 'AtlasRTXWebchat';
    var clientTrackerID = '';
    var googleTagManagerEnabled = false;

    var fullHeight = "100%";
    var fullWidth = "100%";

    var sideHeight = "100%";
    var sideWidth = "400px";

    var launcherHeight = "128px";
    var launcherWidth = "115px";

    var launcherWithPopoutHeight = "128px";
    var launcherWithPopoutWidth = "369px";

    var satisfactionHeight = "224px";
    var satisfactionWidth = "300px";

    var curHeight = "125px";
    var curWidth = "115px";

    var setMobileHeight = false;
    var setMobileWidth = false;

    var waitForInput = false;
    var nonInteractionHitOnLoad = true;
    var hasEngaged = false;
    var formDisplay = "";


    parent.postMessage({domain: 1}, "*");


    function adjustToMedia(x) {
        if (x.matches) { // If media query matches
            // mobile
            $("aside").css("width", "unset !important");
            $("aside").css("height", "unset !important");

        } else {
            // desktop (not mobile)
            $("#resizable").css("top", "");
            $("#resizable").css("left", "");
        }

        if ($('#tbScreenState').val() === "launcher") {
            setLauncherSize();
        } else {
            setParentSize(curHeight, curWidth, "chat");
        }
    }

    var x = window.matchMedia("(max-width: 650px)");

    adjustToMedia(x); // Call listener function at run time


    // $('#chat_close').click(function () {
    //     console.log("关闭对话框");
    //     $("#iAtlasChatDiv").css("display", "none");
    // })
//
    $('#chat_close').on({
        click: function () {
            console.log("关闭对话框");
            hasInteracted = true;
            ToggleChatMenu(true);
            showScreen("launcher", true);
        }
    });
    $('#divChatLauncherOpen').on({
        click: function () {
            console.log("开启对话框");
            // hasInteracted = true;
            // ToggleChatMenu(true);
            showScreen("start", true);
        }
    });

    // $('#chat_clear').on({});

    $("#chatMenu").on({
        click: function (e) {
            ToggleChatMenu();
            e.preventDefault();
        }
    });

    $("#resizable").on({
        mouseup: function (e) {
            var $menu = $("#chatMenu");
            // Check to make sure the chat menu and none of it's children have been clicked before hiding
            if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
                ToggleChatMenu(true);
            }
        }
    });


    function ToggleChatMenu(forceClose) {
        var $menu = $("#chatMenu ul");
        if ($menu.hasClass("show") || forceClose) {
            $menu.removeClass("show");
        } else {
            $menu.addClass("show");
        }
    }


    function showChatScreen(doShow) {
        if (doShow === true) {
            // display chat screen elements
            if (fullscreen > 0 && !isMediaFullScreen) {
                setFullscreenSize();
            } else {
                setParentSize(curHeight, curWidth, "chat");
            }
            // $(".chat_header_text").show();
            // ChatInputManager.applyState({display: true, disable: false});
            $(".chat_discussion_div").show();
            $(".chat_div").delay(200).fadeIn(function () {
                ScrollToBottom();
                // This will cause Fotorama to resize on reopens
                $('.fotorama').resize();
            });
            $("#chatMenu").show();
            $(".chat_error").hide();
        } else {
            // hide chat screen elements
            // $(".chat_header_text").hide();
            // ChatInputManager.applyState({display: false, disable: true});
            $(".chat_discussion_div").hide();
            $("#chatMenu").hide();
        }
    }


    function disableLoader() {
        $(".chat_aside").hide()
    }

    function ScrollToBottom() {
        scrollToBottom("discussion");
    }

    function scrollToBottom(viewportId, animateDelay) {
        if (!animateDelay) {
            animateDelay = 1500;
        }

        var objViewPort = document.getElementById(viewportId);
        if (objViewPort !== null) {
            var sHeight = objViewPort.scrollHeight;
            if (sHeight > 0) {
                $('#' + viewportId).stop().animate({scrollTop: sHeight}, animateDelay);
            }
        }
    }


    function showEstablishScreen(doShow) {
        if (doShow === true) {
            if (fullscreen > 0 && !isMediaFullScreen) {
                setFullscreenSize();
            } else {
                setParentSize(curHeight, curWidth, "chat");
            }
            // $(".chat_header_text").show();
            // ChatInputManager.applyState({display: true, establishingConnection: true});
            $(".chat_establish_connection").show();
            $(".chat_div").delay(200).fadeIn(function () {
                ScrollToBottom();
            });
        } else {
            // $(".chat_header_text").hide();
            // ChatInputManager.applyState({display: false, establishingConnection: false});
            $(".chat_establish_connection").hide();
        }
    }

    function setLauncherSize() {
        if (popoutText != '') {
            setParentSize(launcherWithPopoutHeight, launcherWithPopoutWidth, "launcher_callout");
        } else {
            setParentSize(launcherHeight, launcherWidth, "launcher");
        }
    }

    function showLauncher(doShow) {
        if (doShow === true) {
            // 关闭对话框
            // display launcher screen elements
            // setLauncherSize();
            console.log("DSD",);
            window.parent.document.getElementById("iAtlasChatDiv")
                .setAttribute("style", "position:fixed;inset:auto 0 45px auto;z-index: 21 !important; height: calc(17% - 0px); width: 8%; cursor: auto;");
            // $("#iAtlasChatDiv").css("height", "calc(17% - 0px)");
            // $("#iAtlasChatDiv").css("width", "calc(8%)");
            $("#divChatLauncher").css("display", "block");
            $("#resizable").css("display", "none");
            // $('#launcher').css("transform", "unset");
            // $(".chat_launcher_container").fadeIn();
        } else {
            // 开启对话框
            // hide launcher screen elements
            $(".iAtlasChatDiv").css("color", "red");
            $(".chat_icon_group").css("color", "red");

            window.parent.document.getElementById("iAtlasChatDiv")
                .setAttribute("style", "position:fixed;inset:auto 0 45px auto;z-index: 21 !important; height: calc(76% - 0px); width: 26%; cursor: auto;");

            // $("#iAtlasChatDiv").css("height", "calc(79% - 0px)");
            // $("#iAtlasChatDiv").css("width", "calc(26%)");
            $("#divChatLauncher").css("display", "none");
            $("#resizable").css("display", "flex");
        }
    }

    function showSatisfactionScreen(doShow) {
        if (doShow) {
            // set iframe size
            setParentSize(satisfactionHeight, satisfactionWidth, "satisfaction");
            //show satisfaction
            $('#chat_satisfaction_container').fadeIn();
        } else {
            // hide satisfaction
            $('#chat_satisfaction_container').hide();
        }
    }

    function showScreen(screenName, isFromCustomerClick) {
        $('#tbScreenState').val(screenName);
        if (screenName === "launcher") {
            // $(".chat_div").hide();
            showEstablishScreen(false);
            showSatisfactionScreen(false);
            showLauncher(true);
        } else if (screenName === "start") {
            showEstablishScreen(false);
            showSatisfactionScreen(false);
            showLauncher(false);
        } else if (screenName === "chat") {
            showLauncher(false);

            showEstablishScreen(false);
            showSatisfactionScreen(false);
            showChatScreen(true);

        } else if (screenName === "establish") {
            showLauncher(false);

            showChatScreen(false);
            showSatisfactionScreen(false);
            showEstablishScreen(true);

        } else if (screenName === "satisfaction") {
            $(".chat_div").hide();
            $("#starSatisfactionTextMain").show();
            $("#starSatisfactionTextSecond").hide();
            $(".satisfaction_rating_container").show();
            showLauncher(false);
            showChatScreen(false);
            showSatisfactionScreen(true);
        }
    }


//Default sizing values for the webchat
    function setDefaultScreenSize() {
        var heightValue = "calc(100vh - 2px)";
        var widthValue = "calc(100vw - 5px)";
        if (isMediaFullScreen) {
            heightValue = "100%";
            widthValue = "100%";
        }
        $("#resizable").css("max-width", "");
        $("#resizable").css("width", widthValue);
        $("#resizable").css("height", heightValue);
        $("#resizable").css("min-width", "");
        $("#resizable").css("margin-top", "");
        $("#resizable").css("margin-left", "");
        $("#resizable").css("margin-right", "");
        $("#resizable").addClass("positionabs");
        $(".content").removeClass("fullscreen");
    }

//Fullscreen mode sizing values, based on the "fullscreen" parameter, not the media matching
    function setFullscreenSize() {
        setParentSize(sideHeight, fullWidth, "chat");
        $("#resizable").css("max-width", fullscreen + "vw");
        $("#resizable").css("min-width", sideWidth);
        $("#resizable").css("width", "calc(" + fullscreen + "vw - 3px)");
        $("#resizable").css("height", "calc(100vh - 2px)");
        $("#resizable").css("margin-top", "2px");
        $("#resizable").css("margin-left", "auto");
        $("#resizable").css("margin-right", "auto");
        $("#resizable").removeClass("positionabs");
        $(".content").addClass("fullscreen");

    }

    function setParentSize(height, width, form) {
        formDisplay = form;
        parent.postMessage({
            size: 1,
            height: height,
            width: width,
            form: form
        }, "*");
    }
});