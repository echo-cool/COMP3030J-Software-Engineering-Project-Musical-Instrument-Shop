# -*- coding: utf-8 -*-
"""
@Time ： 2022/4/17 14:30
@Auth ： Wang Yuyang
@File ：auth_middleware.py
@IDE ：PyCharm
"""
import time
from datetime import datetime

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
        date = time.strftime("%Y_%d_%H_%m_%H_%H_%d_%d", time.localtime())
        base_64_data = base64.b64encode(bytes(date, encoding="utf-8")).decode('ascii').replace("=", "").replace("\\", "").replace("/", "")
        if request.COOKIES.get('GROUP8-AUTH-SUCCESS-'+base_64_data) is None:
            # Reset request path to '/' and set a 403 response
            response = HttpResponse("<div style='display: flex;height: 100%;flex-direction: column;justify-content: "
                                    "center;align-content: flex-start;align-items: center;'><div style='display: "
                                    "flex;flex-direction: column;align-content: space-around;flex-wrap: wrap;'>"
                                    "<h1>You are Not Allowed to view this project</h1><br>" +
                                    "This is the project built by COMP3030J Group8-IllegalGroupNameException.<br>" +
                                    "Please contact <strong>Group8</strong> to view this project.<br>" +
                                    "Your request has been intercepted by our Authentication Middleware. <p "
                                    "style='color:red'>This incident has been reported.</p>"+
                                    "<h1>您无权查看此项目</h1><br>" +
                                    "此项目由 COMP3030J Group8-IllegalGroupNameException 维护<br>" +
                                    "请联系<strong>Group8</strong>以获得权限查看此项目<br>" +
                                    "您的请求已被 Authentication Middleware 拦截<p "
                                    "style='color:red'>此事件已报告.</p></div>"
                                    "</div>"
                                    , status=401)
            response['WWW-Authenticate'] = "Basic realm='Login Required'"
            if "Authorization" in request.headers:
                data = request.headers["Authorization"]
                if data.startswith("Basic "):
                    data = data.split("Basic ")[1]
                    data = base64.b64decode(data).decode("utf-8")
                    data = data.split(":")
                    try:
                        username = data[0]
                        password = data[1]
                        print(username, password)
                        if username == "group8" and password == "nb666":
                            with open("access_log/access_log.log", "a") as f:
                                f.write("\n")
                                f.write(
                                    request.path + " " + request.method + " " + request.headers["User-Agent"] + " " +
                                    str(time.strftime("%Y_%m_%d", time.localtime())) + "\n")
                                f.write(str(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())))
                                f.write("    AUTH_SUCCESS    ")
                                f.write(request.META["REMOTE_ADDR"])
                                f.write("\n")
                            response = HttpResponse("<div style='display: flex;height: 100%;flex-direction: "
                                                    "column;justify-content: center;align-content: "
                                                    "flex-start;align-items: center;'><div style='display: "
                                                    "flex;flex-direction: column;align-content: space-around;flex-wrap: "
                                                    "wrap;'> "
                                                    "<h1>Welcome!</h1> Now you can view the project.<br>Please refresh "
                                                    "this page to view our project.</div></div>", status=200)
                            response.set_cookie("GROUP8-AUTH-SUCCESS-"+base_64_data, "ok", max_age=3600)
                            # response: HttpResponse = self.get_response(request)
                            return response
                    except Exception as e:
                        print(e)
                    else:
                        with open("access_log/access_log.log", "a") as f:
                            f.write("\n")
                            f.write(str(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())))
                            f.write("\n")
                            f.write("USER: " + str(data))
                            f.write("\n")
                            f.write(request.META["REMOTE_ADDR"])
                            f.write("\n")
                            f.write(request.path + " " + request.method + " " + request.headers["User-Agent"] + " " +
                                    str(time.strftime("%Y_%m_%d", time.localtime())) + "\n")
                            for key in request.headers:
                                f.write(str(key) + ": " + request.headers.get(key))
                                f.write("\n")
                            f.write("\n")
                            f.write("\n")
        else:
            response: HttpResponse = self.get_response(request)
        # WWW-Authenticate

        # print(response)

        # Code to be executed for each request/response after
        # the view is called.

        return response
