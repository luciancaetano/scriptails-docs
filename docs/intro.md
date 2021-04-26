---
sidebar_position: 1
---

# Getting started

Install scriptails using `yarn` or `npm`:


```shell
yarn add scriptails
```
Or
```shell
npm install scriptails
```

#### Let's start creating our index.js and our first command.

```js title="index.js"
const { start } = require('scriptails');

require('./my-frist.command.js');


start(process.argv, {
    name: 'my-cli',
    description: 'my cli description',
    version: '1.0',
});
```
Note: In the 3rd line we import our command file, the scriptails the commands must be **imported before** the **start function**, if you import/require them later it is very likely that you will have problems running it.

Now we will declare our first command within the `my-frist.command.js` file

```js title="my-frist.command.js"
const { command } = require('scriptails');

command('first', (command) => {
    command.option(['-D', '--debug'], null, 'Set debug mode', false);
    command.onAction((ctx) => {
        const isDebug = action.getOption('debug').toBoolean();
        if(isDebug) {
            ctx.log("Debug is On");
        }
        ctx.logWithLabel("success", "Hello world, with label");
    })
});

```

Finally run your new CLI using:

```shell
node index.js first
```
