import os
import warnings

import django
from django.utils.translation import gettext_lazy as _
from os.path import dirname
# DO NOT REMOVE THESE IMPORT !!!!!!!
import fontawesomefree
import bootstrap4
import django_filters
from django_seed import Seed
# DO NOT REMOVE THESE IMPORT !!!!!!!
# warnings.simplefilter('error', DeprecationWarning)

BASE_DIR = dirname(dirname(dirname(dirname(os.path.abspath(__file__)))))
CONTENT_DIR = os.path.join(BASE_DIR, 'content')

SECRET_KEY = 'NhfTvayqggTBPswCXXhWaN69HuglgZIkM'

DEBUG = True
USE_I18N = True
ALLOWED_HOSTS = ['*']

SITE_ID = 1

INSTALLED_APPS = [
    # API Framework
    'drf_yasg',
    'rest_framework',
    'django_filters',

    # Faker
    'django_seed',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    
    # Vendor apps
    'bootstrap4',
    'fontawesomefree',

    # Application apps
    'main',
    'accounts',
    'shop',
    'management',
    'blog',
    'chat',
    'echarts',
    'landing_page',
    'image_search',




]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'app.cors_middleware.CORSMiddleware',
    'app.ErrorPageHandel.ErrorPageHandelMiddleware'


]
#     'app.auth_middleware.MyLoginRequiredMiddleware',
#     'app.ErrorPageHandel.ErrorPageHandelMiddleware'

ROOT_URLCONF = 'app.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(CONTENT_DIR, 'templates'),
            os.path.join(BASE_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'app.wsgi.application'
MESSAGES_TO_LOAD = 15
# EMAIL_BACKEND = 'django.core.mail.backends.filebased.EmailBackend'
# EMAIL_FILE_PATH = os.path.join(CONTENT_DIR, 'tmp/emails')
# EMAIL_HOST_USER = 'test@example.com'
# DEFAULT_FROM_EMAIL = 'test@example.com'

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.echo.cool'
EMAIL_HOST_USER = 'wyy@echo.cool'
DEFAULT_FROM_EMAIL = 'wyy@echo.cool'
EMAIL_HOST_PASSWORD = 'Lkq2mapp'
EMAIL_PORT = 465
EMAIL_USE_TLS = False
EMAIL_USE_SSL = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
    # 'default': {
    #     'ENGINE': 'django.db.backends.mysql',  # 数据库引擎
    #     'NAME': 'comp3030j',  # 数据库名
    #     'USER': 'comp3030j',  # 账号
    #     'PASSWORD': 'HcKsb2cfEKTb7T7W',  # 密码
    #     'HOST': 'echo.cool',  # HOST
    #     'POST': 3306,  # 端口
    # }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

ENABLE_USER_ACTIVATION = True
DISABLE_USERNAME = False
LOGIN_VIA_EMAIL = False
LOGIN_VIA_EMAIL_OR_USERNAME = True
LOGIN_REDIRECT_URL = 'shop:index'
LOGIN_URL = 'accounts:log_in'
USE_REMEMBER_ME = False

RESTORE_PASSWORD_VIA_EMAIL_OR_USERNAME = False
ENABLE_ACTIVATION_AFTER_EMAIL_CHANGE = True

SIGN_UP_FIELDS = ['username', 'first_name', 'last_name', 'email', 'password1', 'password2']
if DISABLE_USERNAME:
    SIGN_UP_FIELDS = ['first_name', 'last_name', 'email', 'password1', 'password2']

MESSAGE_STORAGE = 'django.contrib.messages.storage.cookie.CookieStorage'

USE_I18N = True
USE_L10N = True
LANGUAGE_CODE = 'en'
MODELTRANSLATION_FALLBACK_LANGUAGES = ('en',)
MODELTRANSLATION_DEFAULT_LANGUAGE = 'en'
MODELTRANSLATION_PREPOPULATE_LANGUAGE = 'en'
# for i in django.conf.locale.LANG_INFO:
#     print(i)
LANGUAGES = [
    ('en', _('English')),
    ('ru-RU'.lower(), _('Russian')),
    ('uk-UA'.lower(), _('Ukrainian')),
    ('zh-CN'.lower(), _('Simplified Chinese')),
    ('fr-FR'.lower(), _('French')),
    ('es-ES'.lower(), _('Spanish')),
    ('de-DE'.lower(), _('Dutch')),
    ('ja-JP'.lower(), _('Japanese')),
]

TIME_ZONE = 'UTC'
USE_TZ = True

STATIC_ROOT = os.path.join(CONTENT_DIR, 'static')
STATIC_URL = '/static/'


MEDIA_ROOT = os.path.join(CONTENT_DIR, 'media')
MEDIA_URL = '/media/'

STATICFILES_DIRS = [
    os.path.join(CONTENT_DIR, 'assets'),
]

LOCALE_PATHS = [
    os.path.join(CONTENT_DIR, 'locale')
]

REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend']
}

CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_ALLOW_ALL = True
# Origin '*' in CORS_ORIGIN_WHITELIST is missing scheme 出现该错误则将其注释掉
CORS_ORIGIN_WHITELIST = (
  "*"
)
CORS_ALLOW_METHODS = (
  'DELETE',
  'GET',
  'OPTIONS',
  'PATCH',
  'POST',
  'PUT',
  'VIEW',
)
CORS_ALLOW_HEADERS = (
  'XMLHttpRequest',
  'X_FILENAME',
  'accept-encoding',
  'authorization',
  'content-type',
  'dnt',
  'origin',
  'user-agent',
  'x-csrftoken',
  'x-requested-with',
  'Pragma',
)

DEFAULT_AUTO_FIELD = 'django.db.models.AutoField'