from django.contrib import messages
from django.contrib.auth import login, authenticate, REDIRECT_FIELD_NAME
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import (
    LogoutView as BaseLogoutView, PasswordChangeView as BasePasswordChangeView,
    PasswordResetDoneView as BasePasswordResetDoneView, PasswordResetConfirmView as BasePasswordResetConfirmView,
)
from django.shortcuts import get_object_or_404, redirect, render
from django.utils.crypto import get_random_string
from django.utils.decorators import method_decorator
from django.utils.http import url_has_allowed_host_and_scheme
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.utils.translation import gettext_lazy as _
from django.views.decorators.cache import never_cache
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.debug import sensitive_post_parameters
from django.views.generic import View, FormView
from django.conf import settings

from shop.models import Activation, Profile
from .utils import (
    send_activation_email, send_reset_password_email, send_forgotten_username_email, send_activation_change_email,
)
from .forms import (
    SignInViaUsernameForm, SignInViaEmailForm, SignInViaEmailOrUsernameForm, SignUpForm,
    RestorePasswordForm, RestorePasswordViaEmailOrUsernameForm, RemindUsernameForm,
    ResendActivationCodeForm, ResendActivationCodeViaEmailForm, ChangeProfileForm, ChangeEmailForm, SignInByStaff,
)


class GuestOnlyView(View):
    def dispatch(self, request, *args, **kwargs):
        # Redirect to the index page if the user already authenticated
        if request.user.is_authenticated:
            return redirect(settings.LOGIN_REDIRECT_URL)

        return super().dispatch(request, *args, **kwargs)


def LogInStaffPost(request):
    if request.method == "POST":
        sign_in_form = SignInViaUsernameForm(request.POST)
        if settings.DISABLE_USERNAME or settings.LOGIN_VIA_EMAIL:
            sign_in_form = SignInViaEmailForm(request.POST)

        if settings.LOGIN_VIA_EMAIL_OR_USERNAME:
            sign_in_form = SignInByStaff(request.POST)
        form = sign_in_form
        if form.is_valid():
            print("DSADS")
            # If the test cookie worked, go ahead and delete it since its no longer needed
            if request.session.test_cookie_worked():
                request.session.delete_test_cookie()

            # The default Django's "remember me" lifetime is 2 weeks and can be changed by modifying
            # the SESSION_COOKIE_AGE settings' option.
            if settings.USE_REMEMBER_ME:
                if not form.cleaned_data['remember_me']:
                    request.session.set_expiry(0)

            login(request, form.user_cache)
            messages.success(request, "Login successfully")

            redirect_to = "management:index"
            # url_is_safe = url_has_allowed_host_and_scheme(redirect_to, allowed_hosts=request.get_host(),
            #                                               require_https=request.is_secure())

            # if url_is_safe:
            return redirect(redirect_to)

            # return redirect(settings.LOGIN_REDIRECT_URL)
        else:
            print("DSADSAsadasd")
            form2 = SignUpForm()
            context = {
                "form": form,
                "form2": form2,
            }
            return render(request, 'layouts/default/cool_login.html', context)


def LogInPost(request):
    if request.method == "POST":
        sign_in_form = SignInViaUsernameForm(request.POST)
        if settings.DISABLE_USERNAME or settings.LOGIN_VIA_EMAIL:
            sign_in_form = SignInViaEmailForm(request.POST)

        if settings.LOGIN_VIA_EMAIL_OR_USERNAME:
            sign_in_form = SignInViaEmailOrUsernameForm(request.POST)
        form = sign_in_form
        if form.is_valid():
            print("DSADSA")
            # If the test cookie worked, go ahead and delete it since its no longer needed
            if request.session.test_cookie_worked():
                request.session.delete_test_cookie()

            # The default Django's "remember me" lifetime is 2 weeks and can be changed by modifying
            # the SESSION_COOKIE_AGE settings' option.
            if settings.USE_REMEMBER_ME:
                if not form.cleaned_data['remember_me']:
                    request.session.set_expiry(0)

            login(request, form.user_cache)
            messages.success(request, "Login successfully")

            redirect_to = request.POST.get(REDIRECT_FIELD_NAME, request.GET.get(REDIRECT_FIELD_NAME))
            if redirect_to is None:
                redirect_to = request.session.get(REDIRECT_FIELD_NAME)
            url_is_safe = url_has_allowed_host_and_scheme(redirect_to, allowed_hosts=request.get_host(),
                                                          require_https=request.is_secure())
            if redirect_to and url_is_safe:
                request.session.delete(REDIRECT_FIELD_NAME)

            print(redirect_to)
            print(f"url_is_safe: {url_is_safe}")

            if url_is_safe:
                return redirect(redirect_to)

            return redirect(settings.LOGIN_REDIRECT_URL)
        else:
            print("DSADSAsadasd")
            # redirect_to = request.POST.get(REDIRECT_FIELD_NAME, request.GET.get(REDIRECT_FIELD_NAME))
            # print(redirect_to)
            form2 = SignUpForm()
            context = {
                "form": form,
                "form2": form2,
            }
            return render(request, 'layouts/default/cool_login.html', context)


def SignUpPost(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            print("DSADSA")
            user = form.save(commit=False)

            if settings.DISABLE_USERNAME:
                # Set a temporary username
                user.username = get_random_string()
            else:
                user.username = form.cleaned_data['username']

            if settings.ENABLE_USER_ACTIVATION:
                user.is_active = False

            # Create a user record
            user.save()

            # Change the username to the "user_ID" form
            if settings.DISABLE_USERNAME:
                user.username = f'user_{user.id}'
                user.save()

            if settings.ENABLE_USER_ACTIVATION:
                code = get_random_string(20)

                act = Activation()
                act.code = code
                act.user = user
                act.save()

                send_activation_email(request, user.email, code)

                messages.success(
                    request, _('You are signed up. To activate the account, follow the link sent to the mail.'))
            else:
                raw_password = form.cleaned_data['password1']

                user = authenticate(username=user.username, password=raw_password)
                login(request, user)

                messages.success(request, _('You are successfully signed up!'))

            return redirect('shop:index')
        else:
            print("DSADSAsadasd")
            form2 = SignInViaUsernameForm()
            context = {
                "form": form2,
                "form2": form,
            }
            return render(request, 'layouts/default/cool_login.html', context)


class LogSign3View(View):
    def get(self, request):
        sign_in_form = SignInViaUsernameForm
        if settings.DISABLE_USERNAME or settings.LOGIN_VIA_EMAIL:
            sign_in_form = SignInViaEmailForm

        if settings.LOGIN_VIA_EMAIL_OR_USERNAME:
            sign_in_form = SignInViaEmailOrUsernameForm

        context = {
            'form': sign_in_form,
            'form2': SignUpForm,
        }
        redirect_to = request.POST.get(REDIRECT_FIELD_NAME, request.GET.get(REDIRECT_FIELD_NAME))
        print(redirect_to)
        request.session[REDIRECT_FIELD_NAME] = redirect_to
        return render(request, 'layouts/default/cool_login.html', context)


class LogInView(GuestOnlyView, FormView):
    template_name = 'layouts/default/cool_login.html'

    @staticmethod
    def get_form_class(**kwargs):
        if settings.DISABLE_USERNAME or settings.LOGIN_VIA_EMAIL:
            return SignInViaEmailForm, SignUpForm

        if settings.LOGIN_VIA_EMAIL_OR_USERNAME:
            return SignInViaEmailOrUsernameForm, SignUpForm

        return SignInViaUsernameForm, SignUpForm

    @method_decorator(sensitive_post_parameters('password'))
    @method_decorator(csrf_protect)
    @method_decorator(never_cache)
    def dispatch(self, request, *args, **kwargs):
        # Sets a test cookie to make sure the user has cookies enabled
        request.session.set_test_cookie()

        return super().dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        request = self.request

        # If the test cookie worked, go ahead and delete it since its no longer needed
        if request.session.test_cookie_worked():
            request.session.delete_test_cookie()

        # The default Django's "remember me" lifetime is 2 weeks and can be changed by modifying
        # the SESSION_COOKIE_AGE settings' option.
        if settings.USE_REMEMBER_ME:
            if not form.cleaned_data['remember_me']:
                request.session.set_expiry(0)

        login(request, form.user_cache)
        messages.success(request, "Login successfully")

        redirect_to = request.POST.get(REDIRECT_FIELD_NAME, request.GET.get(REDIRECT_FIELD_NAME))
        url_is_safe = url_has_allowed_host_and_scheme(redirect_to, allowed_hosts=request.get_host(),
                                                      require_https=request.is_secure())

        if url_is_safe:
            return redirect(redirect_to)

        return redirect(settings.LOGIN_REDIRECT_URL)


class SignUpView(GuestOnlyView, FormView):
    template_name = 'accounts/sign_up.html'
    form_class = SignUpForm

    def form_valid(self, form):
        request = self.request
        user = form.save(commit=False)

        if settings.DISABLE_USERNAME:
            # Set a temporary username
            user.username = get_random_string()
        else:
            user.username = form.cleaned_data['username']

        if settings.ENABLE_USER_ACTIVATION:
            user.is_active = False

        # Create a user record
        user.save()

        # Change the username to the "user_ID" form
        if settings.DISABLE_USERNAME:
            user.username = f'user_{user.id}'
            user.save()

        if settings.ENABLE_USER_ACTIVATION:
            code = get_random_string(20)

            act = Activation()
            act.code = code
            act.user = user
            act.save()

            send_activation_email(request, user.email, code)

            messages.success(
                request, _('You are signed up. To activate the account, follow the link sent to the mail.'))
        else:
            raw_password = form.cleaned_data['password1']

            user = authenticate(username=user.username, password=raw_password)
            login(request, user)

            messages.success(request, _('You are successfully signed up!'))

        return redirect('shop:index')


class ActivateView(View):
    @staticmethod
    def get(request, code):
        act = get_object_or_404(Activation, code=code)

        # Activate profile
        user = act.user
        user.is_active = True
        user.save()
        profile = Profile(user=user)
        profile.save()

        # Remove the activation record
        act.delete()

        messages.success(request, _('You have successfully activated your account!'))
        login(request, user)
        messages.success(request, _('Login successfully.'))

        return redirect('shop:index')


class ResendActivationCodeView(GuestOnlyView, FormView):
    template_name = 'accounts/resend_activation_code.html'

    @staticmethod
    def get_form_class(**kwargs):
        if settings.DISABLE_USERNAME:
            return ResendActivationCodeViaEmailForm

        return ResendActivationCodeForm

    def form_valid(self, form):
        user = form.user_cache

        activation = user.activation_set.first()
        activation.delete()

        code = get_random_string(20)

        act = Activation()
        act.code = code
        act.user = user
        act.save()

        send_activation_email(self.request, user.email, code)

        messages.success(self.request, _('A new activation code has been sent to your email address.'))

        return redirect('accounts:resend_activation_code')


class RestorePasswordView(GuestOnlyView, FormView):
    template_name = 'accounts/restore_password.html'

    @staticmethod
    def get_form_class(**kwargs):
        if settings.RESTORE_PASSWORD_VIA_EMAIL_OR_USERNAME:
            return RestorePasswordViaEmailOrUsernameForm

        return RestorePasswordForm

    def form_valid(self, form):
        user = form.user_cache
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))

        if isinstance(uid, bytes):
            uid = uid.decode()

        send_reset_password_email(self.request, user.email, token, uid)

        return redirect('accounts:restore_password_done')


class ChangeProfileView(LoginRequiredMixin, FormView):
    template_name = 'accounts/profile/change_profile.html'
    form_class = ChangeProfileForm

    def get_initial(self):
        user = self.request.user
        initial = super().get_initial()
        initial['first_name'] = user.first_name
        initial['last_name'] = user.last_name
        return initial

    def form_valid(self, form):
        user = self.request.user
        user.first_name = form.cleaned_data['first_name']
        user.last_name = form.cleaned_data['last_name']
        user.save()

        messages.success(self.request, _('Profile data has been successfully updated.'))

        return redirect('accounts:change_profile')


class ChangeEmailView(LoginRequiredMixin, FormView):
    template_name = 'accounts/profile/change_email.html'
    form_class = ChangeEmailForm

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['user'] = self.request.user
        return kwargs

    def get_initial(self):
        initial = super().get_initial()
        initial['email'] = self.request.user.email
        return initial

    def form_valid(self, form):
        user = self.request.user
        email = form.cleaned_data['email']

        if settings.ENABLE_ACTIVATION_AFTER_EMAIL_CHANGE:
            code = get_random_string(20)

            act = Activation()
            act.code = code
            act.user = user
            act.email = email
            act.save()

            send_activation_change_email(self.request, email, code)

            messages.success(self.request, _('To complete the change of email address, click on the link sent to it.'))
        else:
            user.email = email
            user.save()

            messages.success(self.request, _('Email successfully changed.'))

        return redirect('accounts:change_email')


class ChangeEmailActivateView(View):
    @staticmethod
    def get(request, code):
        act = get_object_or_404(Activation, code=code)

        # Change the email
        user = act.user
        user.email = act.email
        user.save()

        # Remove the activation record
        act.delete()

        messages.success(request, _('You have successfully changed your email!'))

        return redirect('accounts:change_email')


class RemindUsernameView(GuestOnlyView, FormView):
    template_name = 'accounts/remind_username.html'
    form_class = RemindUsernameForm

    def form_valid(self, form):
        user = form.user_cache
        send_forgotten_username_email(user.email, user.username)

        messages.success(self.request, _('Your username has been successfully sent to your email.'))

        return redirect('accounts:remind_username')


class ChangePasswordView(BasePasswordChangeView):
    template_name = 'accounts/profile/change_password.html'

    def form_valid(self, form):
        # Change the password
        user = form.save()

        # Re-authentication
        login(self.request, user)

        messages.success(self.request, _('Your password was changed.'))

        return redirect('accounts:change_password')


class RestorePasswordConfirmView(BasePasswordResetConfirmView):
    template_name = 'accounts/restore_password_confirm.html'

    def form_valid(self, form):
        # Change the password
        form.save()

        messages.success(self.request, _('Your password has been set. You may go ahead and log in now.'))

        return redirect('accounts:log_in')


class RestorePasswordDoneView(BasePasswordResetDoneView):
    template_name = 'accounts/restore_password_done.html'


class LogOutView(LoginRequiredMixin, BaseLogoutView):
    template_name = 'accounts/log_out.html'


@xframe_options_exempt
def cool_login(request):
    return render(request, 'layouts/default/cool_login.html', {
        "form": SignInViaEmailOrUsernameForm(),
        "form2": SignUpForm(),
    })
