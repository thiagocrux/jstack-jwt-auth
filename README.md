# Node.js Authentication

Implementation of JWT authentication with RBAC (Role-Based Access Control) and refresh token in a Node.js API.

## Technologies

These are some of the tecnologies used in this project:

- `bcrypt`: A library for hashing and comparing passwords securely in Node.js.
- `commitlint`: A tool that checks your commits and ensures consistency in version control.
- `dotenv`: A module that loads a `.env` file into `process.env`.
- `eslint`: A linting tool for JavaScript/TypeScript code.
- `express`: A Node.js minimalist framework.
- `husky`: A tool for adding Git hooks to automate tasks like linting, testing, or commits in JavaScript/Node.js projects.
- `jsonwebtoken`: A library for creating and verifying JSON Web Tokens (JWT) in Node.js.
- `lint-staged`: Runs linters on Git staged files.
- `prettier`: A code formatter.
- `prisma`: A modern, type-safe database toolkit and ORM for Node.js and TypeScript.
- `tsx`: A command-line tool and Node.js enhancement that allows you to execute TypeScript files directly without needing to explicitly compile them to JavaScript first.

_For more information about other dependencies, see the `package.json` file._

## Installation

1. Clone the repository:

```bash
git clone https://github.com/thiagocrux/jstack-live-006.git
```

2. Browse to the project folder:

```bash
cd jstack-live-006
```

3. Install dependencies:

```
pnpm install
```

4. Create a `.env` file on the project's root and set the environment variables updating the `user`, `password` and the `database_name`. It may be necessary to update the hostname (localhost) and database port (5432) if your Postgres installation is configured differently. It is also necessary to set the `JWT_SECRET` with a JWT secret so the authentication works correctly.

```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://user:password@localhost:5432/database_name?schema=public"
JWT_SECRET=
```

## Available scripts

This section describes the available scripts in the `package.json` file and their functionalities.

### Development

- #### `dev`

  Starts the server in development mode using `pnpm dev`, enabling faster builds and live-reloading.

  ```bash
  pnpm dev
  ```

### Production

- #### `build`

  Compiles the application for production.

  ```bash
  pnpm build
  ```

- #### `start`

  Start the server for production from the compiled files.

  ```bash
  pnpm start
  ```

### Git hooks

- #### `prepare`

  Automatically configures Git hooks (via `husky`) before each commit.

  ```bash
  pnpm prepare
  ```

## Useful links

- [Live #006 - Autenticação JWT em APIs Node.js](https://app.jstack.com.br/classroom/lives/autenticacao-jwt-em-apis-node-js)
- [Live #007 - Autorização baseada em cargos RBAC em APIs Node.js](https://app.jstack.com.br/classroom/lives/autorizacao-baseada-em-cargos-rbac-em-apis-node-js/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
