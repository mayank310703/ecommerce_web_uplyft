from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=True)
    price = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(50), nullable=False)
    stock = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.String(255), nullable=True)  # Add image_url column

    def __repr__(self):
        return f'<Product {self.name}>'
