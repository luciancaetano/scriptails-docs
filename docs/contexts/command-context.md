---
sidebar_label: Command Context
sidebar_position: 2
---

# The Command Context

The command context can be executed only in the definition of our commands, the function **command** receives as parameter the name of the command followed by the function o containing the context.

```js {3}
const { command } = require('scriptails');

command('my-command', (commandContext) => {
    ...
});

```

## CommandContext members


### aliases
This member allows you to define some aliases for the command that owns the context.

Example usage:
```js {4}
const { command } = require('scriptails');

command('my-command', (commandContext) => {
    commandContext.aliases('mc')
});

```
Now we can run
```sh
    node index.js c
```
Types:
```typescript
function aliases(aliases: string[])
```

### description
This member assigns a description to the command that owns the context.

Example usage:
```js {4}
    const { command } = require('scriptails');

    command('my-command', (commandContext) => {
        commandContext.description('My awesome command description.');
    });

```
Types:
```typescript
function description(description: string)
```

### arg
This member define arguments for the command that owns the context.

Example usage:
```js {4}
    const { command } = require('scriptails');

    command('my-command', (commandContext) => {
        commandContext.arg('name', false, false, 'project name');
    });

```
Now we can run
```sh
    node index.js my-command myAwesomeProject
```
Types:
```typescript
function arg(name: string, required?: boolean, variadic?: boolean, description?: string)
```
### option
This member allows definit options / flags to the command owner of the context.

Example usage:
```js {4}
    const { command } = require('scriptails');

    command('my-command', (commandContext) => {
        commandContext.option(['-D', '--debug'], null, 'build debug mode', false);
    });

```
Now we can run
```sh
    node index.js my-command --debug
```
Types:
```typescript
interface ICommandOptionValue {
    title: string;
    variadic?: boolean; // <arg...> | [arg...]
    required?: boolean; // required: <arg> | optional: [arg]
}

function option(flags: string[], argument: ICommandOptionValue | null, description?: string, defaultValue?: string | boolean)
```
### usage
This member allows you to define a usage manually for the command that owns the context.

Example usage:
```js {4}
    const { command } = require('scriptails');

    command('my-command', (commandContext) => {
        commandContext.usage('My customized usage');
    });

```
Types:
```typescript
function usage(usage: string)
```
### onAction
This member allows defining a function to be executed when the command is invoked by the command line, note that this callback receives the context
[Action Context](action-context).

Example usage:
```js {4-6}
    const { command } = require('scriptails');

    command('my-command', (commandContext) => {
        commandContext.onAction(async (ctx) => {
            // ...
        });
    });

```
Types:
```typescript
type ActionContextCallback = ((context: ActionContext) => void) | ((context: ActionContext) => Promise<void>);
function onAction(cb: ActionContextCallback)
```
### getName
This function returns the name of the command ateo (for documentation purposes and consumption of the internal api).