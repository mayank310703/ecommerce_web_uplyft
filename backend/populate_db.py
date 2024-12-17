# populate_db.py
from app import app
from models import db, Product

# Run the app context to populate the database
with app.app_context():
    db.drop_all()  # Drop all tables if they exist
    db.create_all()  # Create the tables

    # Adding mock data
    products = [
Product(name='Asus Laptop', description='High-performance laptop', price=899.99, category='Laptops', stock=30, image_url='Laptop1.jpg'),
Product(name='Rog Laptop', description='very high-performance laptop', price=1099.99, category='Laptops', stock=10, image_url='Laptop2.jpg'),
Product(name='Ideapad Laptop', description='Low-performance laptop', price=499.99, category='Laptops', stock=20, image_url='Laptop3.jpg'),
Product(name='lenovo Laptop', description='mid-performance laptop', price=699.99, category='Laptops', stock=40, image_url='Laptop4.jpg'),
Product(name='Acer Laptop', description='low-performance laptop', price=399.99, category='Laptops', stock=46, image_url='Laptop5.jpg'),
Product(name='Asus vivobook', description='mid-performance laptop', price=599.99, category='Laptops', stock=32, image_url='Laptop6.jpg'),


Product(name='MI', description='Latest model smartphone', price=199.99, category='Smart phones', stock=100, image_url='mobile1.jpg'),
Product(name='iphone 7', description='Latest model smartphone', price=699.99, category='Smart phones', stock=100, image_url='mobile2.jpg'),
Product(name='vivo', description='Latest model smartphone', price=599.99, category='Smart phones', stock=100, image_url='mobile3.jpg'),
Product(name='iphone 16', description='Latest model smartphone', price=799.99, category='Smart phones', stock=100, image_url='mobile4.jpg'),
Product(name='iphone 11', description='Latest model smartphone', price=899.99, category='Smart phones', stock=100, image_url='mobile5.jpg'),
Product(name='iphone 13', description='Latest model smartphone', price=399.99, category='Smart phones', stock=100, image_url='mobile6.jpg'),

Product(name='Skullcandy', description='Noise-canceling headphones', price=399.99, category='Headphones', stock=30, image_url='Headphones1.jpg'),
Product(name='noise', description='Noise-canceling headphones', price=199.99, category='Headphones', stock=30, image_url='Headphones2.jpg'),
Product(name='boat', description='Noise-canceling headphones', price=199.99, category='Headphones', stock=30, image_url='Headphones3.jpg'),
Product(name='JBL', description='Noise-canceling headphones', price=299.99, category='Headphones', stock=30, image_url='Headphones4.jpg'),
Product(name='Marshall', description='Noise-canceling headphones', price=399.99, category='Headphones', stock=30, image_url='Headphones5.jpg'),



Product(name='Book', description='Programming book', price=29.99, category='Books', stock=200, image_url=''),
Product(name='Shoes', description='Comfortable running shoes', price=49.99, category='Footwear', stock=70, image_url=''),
    ]
    
    db.session.bulk_save_objects(products)
    db.session.commit()

    print("Database populated with mock data.")
