<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

- The @Res() decorator gives access to the underlying response object of expressjs (or fastify). However, try not to use it and stick with the nest way of handling responses to stay clear from incompatibilities of nest api and expressjs api.
- Encapsulate business domains inside a module. For example, a shopping cart has functionalities that are closely related and can be defined inside of a module.
- The `@Module()` decorator provides the metadata that nest uses to organize the structure of the app.
- DTOs are used to define the interface or shape of the input or output within our system. For example, in a post request we can use a DTO to define the interface or shape we are expecting to receive for the `body`. This can help us make sure that the post request payload has everything required that we need to run the rest of the code.
- DTOs are just simple objects. They don't contain any business logic, methods or testing.
- A best practice with DTOs is to mark each property with `readonly` to help maintain immutability.
- Dtos are useful for creating a bit of type safety within our application.
- Any backend app must validate the correctness of the data being sent to our app. Validating this data is the next important thing and nest uses validation pipes to address this issue.
- The `PartialType` function inherits all the properties and validation rules from the dto provided as its argument and marks each one of them as optional.
- When using TypeOrm, seeing the following log message indicates that the connection to db is successful: `TypeOrmModule dependencies initialized`.
- An entity represents the relationship between a typescript class and a database table. In fact, each class marked with the `@Entity()` decorator will create a sql table. The sql table name will be the class name in lowercase.
- TypeOrm supports repository design pattern, which means that each entity that we create has its own repository.
- The main idea of a provider is that it can inject dependencies. It means objects can create various relationship with each other and nest handle the logic of wiring up instances of objects together.
- Modules are used to encapsulate a closely related set of capabilities.
- Think of containers as running processes with some added encapsulation applied to it, making it isolated from the host and other containers.
- Relations are associations between two or more tables based on common fields from each table.
- Indexes are special lookup tables that database search engine use to speed up data retrieval.
- Database migration provides a way to incrementally update our database schema and keep it in sync with applications data model all while preserving existing data in our database.

## Project setup

```bash
npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
