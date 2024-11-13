#!/bin/bash

# Criação de superusuário Django sem interação
python backend/app/manage.py createsuperuser --noinput --username root --email root@example.com;
#muda a senha do root
python backend/app/manage.py shell -c "from django.contrib.auth import get_user_model; user = get_user_model().objects.get(username='root'); user.set_password('root'); user.save()";
 

