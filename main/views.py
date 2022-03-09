from django.views.generic import TemplateView


# class IndexPageView(TemplateView):
#     template_name = 'main/leave-review-2.html'


class ChangeLanguageView(TemplateView):
    template_name = 'main/change_language.html'
