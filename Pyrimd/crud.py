from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.view import view_config
import json

# In-memory "database"
items = {}
item_id_counter = 1

# Helper to return JSON response
def json_response(data, status=200):
    return Response(
        body=json.dumps(data).encode('utf-8'),  
        content_type='application/json; charset=UTF-8',
        status=status
    )


@view_config(route_name='get_items', renderer='json', request_method='GET')
def get_items(request):
    return list(items.values())

@view_config(route_name='get_item', renderer='json', request_method='GET')
def get_item(request):
    item_id = int(request.matchdict['id'])
    item = items.get(item_id)
    if not item:
        return json_response({'error': 'Item not found'}, status=404)
    return item

@view_config(route_name='create_item', renderer='json', request_method='POST')
def create_item(request):
    global item_id_counter
    try:
        data = request.json_body
    except Exception as e:
        return json_response({'error': 'Invalid JSON body', 'details': str(e)}, status=400)

    name = data.get('name')
    value = data.get('value')
    if not name or value is None:
        return json_response({'error': 'Missing name or value'}, status=400)

    item = {
        'id': item_id_counter,
        'name': name,
        'value': value
    }
    
    items[item_id_counter] = item
    item_id_counter += 1
    return json_response(item, status=201)



@view_config(route_name='update_item', renderer='json', request_method='PUT')
def update_item(request):
    item_id = int(request.matchdict['id'])
    data = request.json_body
    item = items.get(item_id)
    if not item:
        return json_response({'error': 'Item not found'}, status=404)
    item.update({
        'name': data.get('name', item['name']),
        'value': data.get('value', item['value']),
    })
    return json_response(item)

@view_config(route_name='delete_item', renderer='json', request_method='DELETE')
def delete_item(request):
    item_id = int(request.matchdict['id'])
    if item_id in items:
        del items[item_id]
        return json_response({'message': 'Item deleted'})
    return json_response({'error': 'Item not found'}, status=404)

def main():
    with Configurator() as config:
        config.add_route('create_item', '/items/create')         # POST /items/create
        config.add_route('get_items', '/items')                  # GET /items
        config.add_route('update_item', '/items/{id}')           # PUT /items/{id}
        config.add_route('delete_item', '/items/{id}')           # DELETE /items/{id}
        config.add_route('get_item', '/items/{id}')              # GET /items/{id}

        config.scan()
        app = config.make_wsgi_app()

    return app

if __name__ == '__main__':
    app = main()
    server = make_server('0.0.0.0', 6543, app)
    print("Serving on http://localhost:6543")
    server.serve_forever()
