class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Avoid unnecessary warnings
    SQLALCHEMY_DATABASE_URI = 'sqlite:///products.db'  # SQLite database file
