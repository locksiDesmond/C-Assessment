# Employee Management Backend

This project uses Nestjs. The data are stored in MySQL database and connected to Nestjs via TypeOrm.

## Running the app

Here are the steps to follow to run the backend server.

1. Install Node.js and NPM: To get started with NestJS, you will need Node.js and NPM installed on your system. You can download and install Node.js from the official website https://nodejs.org/en/.

2. Install MySQL: You will need to install MySQL on your system if you haven't done so already. You can download and install MySQL from the official website https://dev.mysql.com/downloads/.

3. Create a database: Create a new database in MySQL for your NestJS project. You can use the MySQL CLI or a GUI tool like MySQL Workbench to create a database.
4. Configure the database connection: Open the app.module.ts file in your project and edit the following code in the imports array in `app.module` :

```ts
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'your-username',
      password: 'your-password',
      database: 'your-database',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
```

Replace the values in the host, username, password, and database fields with your MySQL configuration details.

5. Install dependencies: Navigate to the project (`./backend`) directory in your terminal and run the following command to install the project dependencies:

```bash
$ npm install
```

6. Start the NestJS application: To start your NestJS application, run one of the following command in your terminal:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

That's it! The backend application is ready.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Desmond Adenola](https://locksi.notion.site/Adenola-Desmond-8882627642844fd4b228cbbd1f0951c2)

## License

Nest is [MIT licensed](LICENSE).
