import sqlite3

class Library:
    def __init__(self, db="library.db"):
        self.conn = sqlite3.connect(db)
        self.cursor = self.conn.cursor()

    def add_book(self, title, author):
        self.cursor.execute("INSERT INTO Books (title, author) VALUES (?, ?)", (title, author))
        self.conn.commit()

    def search_book(self, title):
        self.cursor.execute("SELECT * FROM Books WHERE title=?", (title,))
        return self.cursor.fetchall()

# Demo
lib = Library()
lib.add_book("Python Basics", "John Doe")
print(lib.search_book("Python Basics"))


