import http.server
import socketserver
import os
from urllib.parse import urlparse

PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse URL path
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        # Check if it's a direct file request
        if os.path.isfile(os.path.join('dist', path.lstrip('/'))):
            # If the file exists, serve it
            self.path = path
            return http.server.SimpleHTTPRequestHandler.do_GET(self)
            
        # Check if it's a request for assets in /Gryork_Frontend/
        if path.startswith('/Gryork_Frontend/'):
            # Try to serve from dist without the prefix
            modified_path = path.replace('/Gryork_Frontend/', '/')
            if os.path.isfile(os.path.join('dist', modified_path.lstrip('/'))):
                self.path = modified_path
                return http.server.SimpleHTTPRequestHandler.do_GET(self)
        
        # Default: serve index.html for SPA routing
        self.path = '/index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

# Set the working directory to dist
os.chdir('dist')
print(f"Serving at http://localhost:{PORT}")

# Create a simple HTTP server that serves files from 'dist'
with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    httpd.serve_forever()
