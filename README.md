### Furniro Backend

This repository contains the backend code for **Furniro**, a product catalog application. The backend is built using **Node.js**, **Express.js**, and **MongoDB**. It provides APIs to fetch product details with pagination.

---

### Features
- **API for Products**: Retrieve product details with pagination support.
- **Database Integration**: Uses MongoDB Atlas as the database.
- **Environment Configuration**: Secures sensitive information using `.env` files.
- **Middleware**:
  - `cors`: Enables Cross-Origin Resource Sharing.
  - `express.json`: Parses incoming JSON requests.

---

### Prerequisites
Make sure you have the following installed on your system:
1. **Node.js** (v14 or later)
2. **MongoDB Atlas** connection string
3. **Git** (optional, for cloning the repository)

---

### Installation

#### 1. Clone the repository:
```bash
git clone https://github.com/Parinay-raya/backened-furniro.git
cd backened-furniro
```

#### 2. Install dependencies:
```bash
npm install
```

#### 3. Set up environment variables:
Create a `.env` file in the root of the project and add your **MongoDB Atlas URI** and optional custom port:
```
MONGO_URI=your_mongo_atlas_connection_string
PORT=5000 # Optional, defaults to 5000
```

---

### Usage

#### 1. Start the server:
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

#### 2. API Endpoint:
- **GET `/api/products`**
  - Query Parameters:
    - `page` (optional): Page number (default is 1).
    - `limit` (optional): Number of products per page (default is 16).
  - Example Request:
    ```bash
    curl "http://localhost:5000/api/products?page=1&limit=10"
    ```
  - Response:
    ```json
    {
      "products": [
        {
          "name": "Product 1",
          "description": "Product description",
          "price": 100,
          "imageUrl": "https://example.com/image1.jpg"
        },
        ...
      ],
      "total": 100,
      "totalPages": 10,
      "currentPage": 1,
      "pageSize": 10
    }
    ```

---

### Project Structure
```
backened-furniro/
│
├── .env.example       # Example environment variables file
├── package.json       # Project metadata and dependencies
├── server.js          # Main application file
└── README.md          # Documentation
```

---

### Dependencies
- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling for Node.js.
- **cors**: Middleware to enable CORS.
- **dotenv**: Loads environment variables from `.env` file.

---

### Notes
- Ensure the MongoDB Atlas cluster is properly configured and accessible.
- Update the `.env` file with valid credentials before starting the server.

---

### License
This project is open-source and available under the MIT License. 