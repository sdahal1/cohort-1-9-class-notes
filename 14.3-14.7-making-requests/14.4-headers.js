/* 

HTTP Methods (HTTP Verbs):
    GET- Request access to read information from a server
        -GetAll-> No id required. eg: localhost:5000/players
        -GetOne-> Need to specify the ID in the url  eg: localhost:5000/players/2
    POST - Requesst to create a new resource (create something new, new post, new comment, new message, new order)
        -Send body (containing information for the new resource) in the request in the form of: JSON
    PUT - Request to edit an existing resource
        - Need to specify the ID in the url
        - Send body (containing information for updating a resource) in the request in the form of: JSON
    DELETE - Request to delete an existing resource
        - Need to specify the ID in the url

*/