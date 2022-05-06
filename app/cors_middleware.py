# cors_middleware.py
class MiddlewareMixin(object):
    def __init__(self, get_response=None):
        self.get_response = get_response
        super(MiddlewareMixin, self).__init__()

    def __call__(self, request):
        response = None
        if hasattr(self, 'process_request'):
            response = self.process_request(request)
        if not response:
            response = self.get_response(request)
        if hasattr(self, 'process_response'):
            response = self.process_response(request, response)
        return response


class CORSMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        # 添加响应头

        # 允许你的域名来获取我的数据
        response['Access-Control-Allow-Origin'] = "*"
        response['X-Frame-Options'] = 'allow-from *'

        # 允许你携带Content-Type请求头
        # response['Access-Control-Allow-Headers'] = "Content-Type"

        # 允许你发送DELETE,PUT
        # response['Access-Control-Allow-Methods'] = "DELETE,PUT"
        return response
