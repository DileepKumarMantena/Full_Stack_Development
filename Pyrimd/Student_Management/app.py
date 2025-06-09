from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.view import view_config
import json

# In-memory student data store
students = [
    {"id": 1, "name": "Alice", "age": 20, "course": "Math"},
    {"id": 2, "name": "Bob", "age": 22, "course": "Science"},
]

def get_next_id():
    if students:
        return max(s["id"] for s in students) + 1
    else:
        return 1

# API: List students
@view_config(route_name='students', renderer='json', request_method='GET')
def list_students(request):
    return students

# API: Add student
@view_config(route_name='add_students', renderer='json', request_method='POST')
def add_student(request):
    try:
        data = request.json_body
        new_student = {
            "id": get_next_id(),
            "name": data["name"],
            "age": data["age"],
            "course": data["course"]
        }
        students.append(new_student)
        return new_student
    except Exception as e:
        return {"error": str(e)}

# API: Delete student by id
@view_config(route_name='del_student', renderer='json', request_method='DELETE')
def delete_student(request):
    student_id = int(request.matchdict['id'])
    global students
    students = [s for s in students if s["id"] != student_id]
    return {"status": "deleted"}

if __name__ == '__main__':
    with Configurator() as config:
        config.add_route('students', '/students')
        config.add_route('student', '/students/{id}')
        config.add_route('add_students', '/add_students')
        config.add_route('del_student', '/del_student/{id}')
        config.add_static_view(name='static', path='static', cache_max_age=3600)
        config.scan()
        app = config.make_wsgi_app()

    from waitress import serve
    print("Starting backend API on http://localhost:6543")
    serve(app, host='0.0.0.0', port=6543)
