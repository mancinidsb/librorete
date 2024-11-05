FROM python:3.13

# RUN apk update && apk add --no-cache \
#     mariadb-dev \
#     gcc \
#     musl-dev \
#     linux-headers
# WORKDIR /backend/app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install django-cors-headers

EXPOSE 8000

# CMD [ "python", "backend/app/manage.py", "runserver", "0.0.0.0:8000"]
# CMD ["ls"]