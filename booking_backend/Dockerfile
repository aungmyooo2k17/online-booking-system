FROM python:3.9-alpine
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
RUN apk update && apk add --no-cache \
    gcc \
    libc-dev \
    linux-headers \
    musl-dev \
    zlib-dev \
    jpeg-dev \
    py-pip \
    python3-dev
WORKDIR /app
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
COPY . /app/
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]