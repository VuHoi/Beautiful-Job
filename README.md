## Why?
I just started to learn Angular and noticed that having a full-stack repo supporting TypeScript in both server and client side is would be great idea. It helps me to understand better how TypeScript is compiled and put lots of configurations together for a better development experience.

## Support

- [_Yarn workspace_](https://yarnpkg.com/lang/en/docs/workspaces/) - support maintaining and sharing dependencies across back-end and front-end. 
- [_Angular_](https://angular.io/) - Angular 7.
- [_Express_](https://expressjs.com/) - Express server using TypeScript.
- [_GraphQL_](https://graphql.org/) - On both server and client with Apollo Server Express and Apollo Angular respectively.
- [_TypeOrm_](http://typeorm.io/#/) - ORM to convert data from TypeScript to Postgres database.
- [_TypeGraphQL_](https://19majkel94.github.io/type-graphql/) - Make my life easier to work with TypeScript and GraphQL.
- [_Lint_](https://palantir.github.io/tslint/) - Tslint, check tslint.json file for more info.
- [_Test_](https://jestjs.io/) - Jest for both client and server.
- [_Husky_](https://github.com/typicode/husky) + [_Lint-staged_](https://github.com/okonet/lint-staged) - Run tasks before committing.

## Quick start
1. Clone this repo using `git clone https://github.com/Khang-Tran/fullstackTs-workspace.git`.
2. Move to its directory: `cd fullstackTs-workspace`.
3. Copy `.env.example` and change it to `.env`, fill it with your own variables.
3. Run `yarn install` to install all dependencies.
4. Run `yarn dev` to fire up application.


## How to fill .env file
1. Go to [Heroku](https://id.heroku.com), login or create a new account.
2. Select `New` button and `Create new app`.
3. Go to `Resources` tab and search for `Heroku Posgres`.
4. Select tier and click on the Postgres instance.
5. It should open a new tab, go to `Settings` and click on `View Credentials` button.
6. Fill the `.env` file with that data and you should be good.


## License
MIT license, Copyright (c) 2018 Hoi Vu.
