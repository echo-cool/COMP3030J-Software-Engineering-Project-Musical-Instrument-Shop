from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
from django.urls import path

from .views import (
    LogInView, ResendActivationCodeView, RemindUsernameView, SignUpView, ActivateView, LogOutView,
    ChangeEmailView, ChangeEmailActivateView, ChangeProfileView, ChangePasswordView,
    RestorePasswordView, RestorePasswordDoneView, RestorePasswordConfirmView, cool_login, LogSign3View, LogInPost,
    SignUpPost, LogInStaffPost
)

app_name = 'accounts'


@login_required
def go_to_login(request):
    return redirect('shop:index')


urlpatterns = [
    path('cool_login/', cool_login, name='cool_login'),
    path('log-in/', LogSign3View.as_view(), name='log_in'),
    path('log-in-post/', LogInPost, name='log_in_post'),
    path('log-in-staff-post/', LogInStaffPost, name='log_in_staff_post'),
    path('sign-up-post/', SignUpPost, name='sign_up_post'),
    path('log-out/', LogOutView.as_view(), name='log_out'),

    path('resend/activation-code/', ResendActivationCodeView.as_view(), name='resend_activation_code'),

    path('sign-up/', SignUpView.as_view(), name='sign_up'),
    path('activate/<code>/', ActivateView.as_view(), name='activate'),

    path('restore/password/', RestorePasswordView.as_view(), name='restore_password'),
    path('restore/password/done/', RestorePasswordDoneView.as_view(), name='restore_password_done'),
    path('restore/<uidb64>/<token>/', RestorePasswordConfirmView.as_view(), name='restore_password_confirm'),

    path('remind/username/', RemindUsernameView.as_view(), name='remind_username'),

    path('change/profile/', ChangeProfileView.as_view(), name='change_profile'),
    path('change/password/', ChangePasswordView.as_view(), name='change_password'),
    path('change/email/', ChangeEmailView.as_view(), name='change_email'),
    path('change/email/<code>/', ChangeEmailActivateView.as_view(), name='change_email_activation'),

    # path('goto-login/', go_to_login, name='goto_login'),

]
