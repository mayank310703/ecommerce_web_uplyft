from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from models import db, Product
from config import Config
import os
from chatbot import get_chat_response  # Import chatbot response function

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Load configuration
app.config.from_object(Config)

# Initialize the database
db.init_app(app)

# Define the path to the images folder
app.config['UPLOAD_FOLDER'] = os.path.join(app.root_path, 'static', 'images')

# Serve images from the static directory
@app.route('/images/<filename>')
def serve_image(filename):
    """
    Route to serve images stored in 'static/images'.
    """
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


# Route: Search Products with Filters
@app.route('/api/search', methods=['GET'])
def search_products():
    """
    Search products with optional query, min_price, and max_price filters.
    """
    query = request.args.get('query', '').lower()
    min_price = request.args.get('min_price', type=float, default=0)
    max_price = request.args.get('max_price', type=float, default=10000)

    # Filter products based on query and price range
    products = Product.query.filter(
        Product.name.ilike(f'%{query}%'),
        Product.price.between(min_price, max_price)
    ).all()

    # Convert products to a serializable format
    product_list = [
        {
            'id': product.id,
            'name': product.name,
            'description': product.description,
            'price': product.price,
            'category': product.category,
            'stock': product.stock,
            'image_url': f'/images/{product.image_url}'  # Correct image path to serve from static folder
        }
        for product in products
    ]

    return jsonify({'products': product_list})


# Route: Get All Products
@app.route('/api/products', methods=['GET'])
def get_all_products():
    """
    Fetch all products from the database.
    """
    products = Product.query.all()
    product_list = [
        {
            'id': product.id,
            'name': product.name,
            'description': product.description,
            'price': product.price,
            'category': product.category,
            'stock': product.stock,
            'image_url': f'/images/{product.image_url}'  # Correct image path to serve from static folder
        }
        for product in products
    ]
    return jsonify({'products': product_list})


# Route: Chatbot Query for normal texts (e.g., greetings, thanks)
@app.route('/api/chat', methods=['GET'])
def chat_with_bot():
    """
    Handle normal chatbot queries like greetings or thanks.
    """
    query = request.args.get('query', '').lower()
    response = get_chat_response(query)
    return jsonify({'response': response})


if __name__ == '__main__':
    """
    Run the Flask development server.
    """
    app.run(debug=True)
