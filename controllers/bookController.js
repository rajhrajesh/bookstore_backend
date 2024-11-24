const Book = require("../models/bookModel");

// Get all books with sorting and pagination
exports.getBooks = async (req, res) => {
    try {
        const { page = 1, limit = 10, sortBy = 'title' } = req.query;
        const books = await Book.find()
            .sort({ [sortBy]: 1 })
            .skip((page - 1) * limit)
            .limit(limit);
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Failed to get books" });
    }
};

exports.getBookById = async (req, res) => {
    try {
      const { id } = req.params; // Extract the ID from the request parameters
      const book = await Book.findById(id); // Find the book by ID
  
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
  
      res.json(book); // Return the book if found
    } catch (error) {
      res.status(500).json({ message: "Failed to get book", error: error.message });
    }
  };

// Add a new book
exports.addBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: "Failed to add book" });
    }
};

// Update an existing book
exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: "Failed to update book" });
    }
};

// Delete a book
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete book" });
    }
};

// Add multiple books
exports.addBooks = async (req, res) => {
    try {
        const books = req.body;  // Assuming the body is an array of book objects
        if (!Array.isArray(books)) {
            return res.status(400).json({ message: "Invalid data format. Expected an array of books." });
        }

        const savedBooks = await Book.insertMany(books);  // Insert all books at once
        res.status(201).json(savedBooks);  // Return the saved books as the response
    } catch (error) {
        res.status(500).json({ message: "Failed to add books", error: error.message });
    }
};


exports.countBooks = async (req, res) => {
    try {
        const totalBooks = await Book.countDocuments(); // Count all documents in the books collection
        res.json({ totalBooks });
    } catch (error) {
        res.status(500).json({ message: "Failed to count books", error: error.message });
    }
};  

