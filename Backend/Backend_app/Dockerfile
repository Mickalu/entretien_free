FROM python:3.8.2
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt ./

RUN pip3 install --upgrade pip
RUN python3 -m pip install --upgrade setuptools
RUN pip3 install -r requirements.txt
COPY . ./

CMD [ "python3", "manage.py", "runserver", "0.0.0.0:8000"]