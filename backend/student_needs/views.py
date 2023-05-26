from rest_framework.views import APIView
from rest_framework.response import Response
from .api_manager import fetch_q1_data, fetch_q2_data, fetch_q3_data


class QuestionOne(APIView):
    def get(self, request):
        fetch_data = fetch_q1_data(request)

        columns = fetch_data[0]
        converted_q1_data = []

        for row in fetch_data[1:]:
            converted_item = {
                columns[0]: row[0],
                columns[1]: row[1],
                "tags": set(str(tag) for tag in row[2:])
            }
            converted_q1_data.append(converted_item)

        return Response(converted_q1_data)
        

class QuestionTwo(APIView):
    def get(self, request):
        fetch_data = fetch_q2_data(request)
        columns = fetch_data[0]
        converted_q2_data = []

        for row in fetch_data[1:]:
            converted_item = {
                columns[0]: row[0],
                columns[1]: row[1],
                "tags": set(str(tag) for tag in row[2:])
            }
            converted_q2_data.append(converted_item)
        return Response(converted_q2_data)
        

class QuestionThree(APIView):
    def get(self, request):
        fetch_data = fetch_q3_data(request)
        columns = fetch_data[0]
        converted_q3_data = []

        for row in fetch_data[1:]:
            converted_item = {
                columns[0]: row[0],
                columns[1]: row[1],
                "tags": set(str(tag) for tag in row[2:])
            }
            converted_q3_data.append(converted_item)
        return Response(converted_q3_data)
