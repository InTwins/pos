# Inventory Management System

**Environment Requirements**
1. NodeJs
2. Docker
3. pnpm
4. git

**Starting the development environment:**

1. Set the environment variables:

Copy the `.env.example` to `.env.development` 

```
cd server
cp .env.example .env.development
```

Now fill up the variables.

2. Start the database:
- Start docker engine (For windows)
- Start postgres container
```
pnpm db:up
```

3. Start the server:
```
pnpm start:server
```

4. Start the client:
```
pnpm start:web
```