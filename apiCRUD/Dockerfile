FROM python:3.8.3-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /apiCRUD
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . . 