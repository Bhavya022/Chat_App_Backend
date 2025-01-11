# Chat_App_Backend

# Chat Application Backend

This is the backend API for a chat application that supports real-time messaging, user status updates, and typing status. It is built with Node.js, Express, and MongoDB.

## Features

- **User Authentication**: Login and Signup functionality to manage user sessions.
- **Messaging**: Allows users to send and receive messages.
- **Typing Status**: Tracks and updates when a user is typing a message.
- **User Status**: Updates and retrieves the current status of users (e.g., online, offline).
- **Error Logging**: Integrated logging using custom logger to track events and errors.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing chat and user data.
- **Mongoose**: ODM to interact with MongoDB.
- **JWT**: JSON Web Token for user authentication.
- **Winston or Console Logger**: Custom logging system.

## Setup

### Prerequisites

- Node.js (v18 or higher)
- MongoDB instance (local or cloud, e.g., MongoDB Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-application-backend.git
Navigate to the project folder:

```bash

cd chat-application-backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory with the following:

makefile
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
Run the application:

bash
Copy code
npm start
API Endpoints
User Status
GET /user/:userId/status

Retrieves the current status of a user.
Params: userId (required) - The user's ID.
Response:
json
Copy code
{
  "status": "online"
}
POST /user/status

Updates the status of a user.
Request Body:
json
Copy code
{
  "userId": "userId",
  "status": "online"
}
Response:
json
Copy code
{
  "message": "User status updated successfully"
}
Typing Status
GET /typing/:userId/status

Retrieves the typing status of a user.
Params: userId (required) - The user's ID.
Response:
json
Copy code
{
  "isTyping": true
}
POST /typing/status

Updates the typing status of a user.
Request Body:
json
Copy code
{
  "userId": "userId",
  "isTyping": true
}
Response:
json
Copy code
{
  "message": "Typing status updated successfully"
}
Message Endpoints
GET /messages/:senderId/:recipientId

Retrieves all messages between two users.
Params: senderId, recipientId (required) - The IDs of the sender and recipient.
Response:
json
Copy code
[
  {
    "sender": "user1",
    "recipient": "user2",
    "content": "Hello!",
    "createdAt": "2025-01-01T00:00:00Z"
  }
]
POST /messages

Sends a message from one user to another.
Request Body:
json
Copy code
{
  "senderId": "user1",
  "recipientId": "user2",
  "content": "Hello!"
}
Response:
json
Copy code
{
  "message": "Message sent successfully"
}
Development
Running in Development Mode
For development mode, use the following command to run the app:

bash
Copy code
npm run dev
