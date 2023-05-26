import requests


def fetch_q1_data(request):
    url = "https://script.google.com/macros/s/AKfycbws-Qe-TqCQsjSaAit2vC8QauDEyIOk8UUNn9-6w9nSLXuCpXTKWR0aTgSQlKq5ArMWjw/exec"

    response = requests.get(url)
    data = response.json()
    return data


def fetch_q2_data(request):
    url = "https://script.google.com/macros/s/AKfycbwoCRdwyNjL3w_OPkpCypqFvv2i533eU8QGexzo_LTEXbxu4tX5urORn5yB2wCRzD6XMw/exec"

    response = requests.get(url)
    data = response.json()
    return data


def fetch_q3_data(request):
    url = "https://script.google.com/macros/s/AKfycbxeoC3WKs1qmhAAoOCfJENl-OqdWiI36Tct1Jqv38QYjX3kH-l-PJOzOvfGkAqmDmUbGg/exec"

    response = requests.get(url)
    data = response.json()
    return data
