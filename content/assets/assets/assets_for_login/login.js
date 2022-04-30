window.onload = function () {
    activeMove();
    activeVisitor();
    activeSwitchSignUp();
    detectInfoValid();
}

// active the "change way", make it available to toggle the move transition
function activeMove() {
    let identity_button = document.querySelector('.change-way-btn');
    identity_button.onclick = function () {
        // when change the login way, hide in first
        document.querySelector('.sign-up').setAttribute("style", "display:none");
        document.querySelector('.content').classList.toggle("sign-switch");
    }
}

function activeVisitor() {
    let visitor_button = document.querySelector('.visitor_button');
    visitor_button.onclick = function () {
        // bring visitor to main courses page
        window.location.href = "/";
    }
}


function activeSwitchSignUp() {
    let switch_button = document.querySelector('.switch-to-sign-up');
    console.log("切换button", switch_button, document.querySelector('.sign-up'));
    let switch_button2 = document.querySelector('.switch-to-sign-in');
    switch_button.onclick = function () {
        document.querySelector('.sign-up').setAttribute("style", "display:inherit");
    }
    switch_button2.onclick = function () {
        document.querySelector('.sign-up').setAttribute("style", "display:none");

    }
}

function detectInfoValid() {
    let username_input = document.querySelector('.username_r');
    // two password input when register
    let password_input = document.querySelector('#password_r');
    let password_again_input = document.querySelector('#password_r2');
    // bind username_length detect for username input
    username_input.onblur = function () {
        detectUserNameLength();
    };
    username_input.onchange = function () {

        detectRegisterNameExist();

    };
    // bind password_equal detect for two password input
    password_input.onblur = function () {
        detectPasswordEqual();
        detectPasswordLength();
    };
    password_again_input.onblur = function () {
        detectPasswordEqual();
        detectPasswordLength();
    };
    let submit_button = document.querySelector("#submit_r")
    submit_button.onclick = function () {
        let flag = true;
        flag = detectUserNameLength();
        console.log("SADSADS" + flag);
        // only when pass previous verification, continue
        flag = flag ? detectPasswordEqual() : false;
        console.log("SADSADS33" + flag);
        flag = flag ? detectPasswordLength() : false;
        console.log("SADSADS555" + flag);
        // if false, prevent submit
        console.log("SADSADSasds" + flag);
        return flag;
    };
}

// detect whether the username is too short or too long
function detectUserNameLength() {
    let icon_username = document.querySelector('#icon-username');
    let username_input = document.querySelector('.username_r');
    // alert information
    let info = document.querySelector('.information');
    // submit button
    let original_hint = document.querySelector(".limitation_for_username");
    let submit_button = document.querySelector("#submit_r");
    let value = username_input.value;
    let flag;
    if (value !== "") {
        // limitation of username input with regex
        // Reference: We learnt it from Website: https://regexr.com/
        let regExp = /^[A-Za-z0-9]{6,16}$/;
        if (regExp.test(value)) {
            info.innerHTML = '';
            submit_button.disabled = false;
            original_hint.setAttribute("style", "display:none");
            icon_username.setAttribute("style", "display:inherit");
            submit_button.setAttribute("style", "background:#44a0d1");
            flag = true;
        } else {
            // output information in the alert place
            original_hint.setAttribute("style", "display:none");
            info.innerHTML = 'This username should within 6-16 characters (without special symbol)';
            info.setAttribute("style", "color:#ed8f72");
            // make submit disabled and change the background to gray
            submit_button.disabled = true;
            icon_username.setAttribute("style", "display:none");
            submit_button.setAttribute("style", "background:gray");
            flag = false;
        }
    } else {
        icon_username.setAttribute("style", "display:none");
        original_hint.setAttribute("style", "display:inherit");
        flag = false;
    }
    return flag;
}

// detect whether the register username has exist
function detectRegisterNameExist() {
    let name = $(".username_r").val();
    if (6 < name.length < 60) {
        let submit_button = document.querySelector("#submit_r");
        // alert information
        let info = document.querySelector('.information');
        // submit button
        let original_hint = document.querySelector(".limitation_for_username");
        let icon_username = document.querySelector('#icon-username');
        icon_username.setAttribute("src", "/static/images/gif/loading.gif");
        $.post('/check_username_exist', {'username': name})
            .done(function (response) {
                console.log(response);
                let server_code = response['code'];
                if (server_code === 200) {
                    setTimeout(function () {
                        console.log("Show the icon for one second");
                        icon_username.setAttribute("src", "/static/images/icon/icon-correct.png");
                    }, 1000);
                } else {
                    setTimeout(function () {
                        console.log("Show the icon for one second");
                        original_hint.setAttribute("style", "display:none");
                        info.innerHTML = 'Sorry, this username is existing. 😔 Please use another one.';
                        info.setAttribute("style", "color:#ed8f72");
                        // make submit disabled and change the background to gray
                        submit_button.disabled = true;
                        icon_username.setAttribute("style", "display:none");
                        submit_button.setAttribute("style", "background:gray");
                    }, 1000);
                }
            }).fail(function (response) {

            }
        );

    }
}

// detect whether the password is too short
function detectPasswordLength() {
    // indicator for correct input
    let icon_password = document.querySelector('#icon-password');
    // two password input when register
    let password_input = document.querySelector('#password_r');
    // alert information
    let info = document.querySelector('.information');
    // submit button
    let original_hint = document.querySelector(".limitation_for_password");
    let submit_button = document.querySelector("#submit_r");
    let value = password_input.value;
    if (value !== "") {
        // limitation of username input with regex
        // Reference: We learnt it from Website: https://regexr.com/
        let regExp = /^[A-Za-z0-9]{6,}$/;
        if (!regExp.test(value)) {
            // output information in the alert place
            original_hint.setAttribute("style", "display:none");
            info.innerHTML = 'This password should at least 6 characters (without special symbol)';
            info.setAttribute("style", "color:#ed8f72");
            // make submit disabled and change the background to gray
            submit_button.disabled = true;
            icon_password.setAttribute("style", "display:none");
            submit_button.setAttribute("style", "background:gray");
            return false;
        } else {
            info.innerHTML = '';
            submit_button.disabled = false;
            original_hint.setAttribute("style", "display:none");
            icon_password.setAttribute("style", "display:inherit");
            submit_button.setAttribute("style", "background:#44a0d1");
            return true;
        }
    } else {
        icon_password.setAttribute("style", "display:none");
        original_hint.setAttribute("style", "display:inherit");
    }
}

// detect whether the password are equal when register
function detectPasswordEqual() {
    // indicator for correct input
    let icon_password = document.querySelector('#icon-password2');
    // alert information
    let info = document.querySelector('.information');
    // submit button
    let submit_button = document.querySelector("#submit_r");
    // two password input when register
    let password_input = document.querySelector('#password_r');
    let password_again_input = document.querySelector('#password_r2');
    // only when both of them are not empty
    if (password_input.value !== "" && password_again_input.value !== "") {
        let passwordEqual = (password_input.value === password_again_input.value);
        // the same to the former detector
        if (passwordEqual) {
            info.innerHTML = '';
            submit_button.disabled = false;
            icon_password.setAttribute("style", "display:inherit");
            submit_button.setAttribute("style", "background:#44a0d1");
            return true;
        } else {
            info.innerHTML = 'Twice password input aren\'t the same, please check it :>';
            info.setAttribute("style", "color:#ed8f72");
            submit_button.disabled = true;
            icon_password.setAttribute("style", "display:none");
            submit_button.setAttribute("style", "background:gray");
            return false;
        }
    } else {
        icon_password.setAttribute("style", "display:none");
    }
}




