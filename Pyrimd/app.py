from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response

# View function
def hello_world(request):
    return Response('This is the first pyrmid app')

# Main application setup
if __name__ == '__main__':
    with Configurator() as config:
        config.add_route('hello', '/')  # Route name and path
        config.add_view(hello_world, route_name='hello')  # Associate view with route
        app = config.make_wsgi_app()
    
    # Start a simple WSGI server
    server = make_server('0.0.0.0', 6543, app)
    print("Serving on http://localhost:6543")
    server.serve_forever()
