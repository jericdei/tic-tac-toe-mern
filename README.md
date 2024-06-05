# Tic-Tac-Toe MERN

This is a game of Tic-Tac-Toe developed using MERN (MongoDB, Express.js, React, Node) Stack.

## Running Locally

This project has a Docker container for MongoDB to be able to run locally. But if you want, you can ignore it and use MongoDB's cloud service.

### Running the MongoDB Container

Just run it using `docker compose`:

```bash
docker compose up -d
```

It should automatically build and spin up the container. You can access the database using the following url: `mongodb://localhost:27017`.

### Running the `Express.js` API

Go to the `backend` directory

```bash
cd ./backend
```

Install Node dependencies

```bash
pnpm install
```

Make sure to create a `.env` file and provide the `MongoDB` url.

```bash
# backend/.env

MONGODB_URL=<your-mongodb-url>
```

Start the Dev Server

```bash
pnpm start
```

You should now be able access the API at `http://localhost:4000`

### Running the `React.js` App

Go to the `frontend` directory

```bash
cd ./frontend
```

Install Node dependencies

```bash
pnpm install
```

Make sure to create a `.env` file and provide the `Express.js` API URL

```bash
# frontend/.env

VITE_API_URL="http://localhost:4000"
```

Start the Vite Dev Server

```bash
pnpm dev
```

You should now be able access the App at `http://localhost:5173`
