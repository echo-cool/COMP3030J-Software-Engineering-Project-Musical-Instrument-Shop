import os

IS_PRODUCTION = os.environ.get('IS_PRODUCTION')

if not IS_PRODUCTION:
    from .conf.development.settings import *
else:
    from .conf.production.settings import *
