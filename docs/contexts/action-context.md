---
sidebar_label: Action Context
sidebar_position: 3
---

# The Action Context

ActionContext will only be available at the time of executing the command itself, it provides members who help in the process of building our command as well as in querying arguments and options / flags.

```js {4}
    const { command } = require('scriptails');

    command('build', (c) => {
        c.aliases(['b']);
        c.description('description');
        c.option(['-D', '--debug'], null, 'build debug mode', false);
        c.option(
            ['-P', '--project'],
            { title: 'projectName', required: true },
            'project name',
        );
        c.option(
            ['-P', '--platforms'],
            { title: 'platforms', variadic: true },
            'target platforms',
            'linux'
        );
        c.arg('path', true, false, 'project path');

        c.onAction((ctx) => {
            const debug = ctx.getOption('debug').toBoolean();
            const project = ctx.getOption('project').toString();
            const patforms = ctx.getOption('platforms').variadic().map(arg => arg.toString();
            const args = ctx.getArgs().map(arg => arg.toString());

            ctx.logWithLabel('info', { debug, args, project, platforms });

            ctx.exitError('Error');
        });
    });
```

## Action Context members

### getOption

This member finds and returns current command option.
```ts
    declare function getOption(name: string): MixedType;

    ....
    c.onAction(async (ctx) => {
        const option = ctx.getOption('myOption').toString();
    });
    ...
```

### getArgs

This member returns current command arguments.

```ts
    declare function getArgs(): MixedType[];

    ....
    c.onAction(async (ctx) => {
        const args = ctx.getArgs();
        const firstArg = args[0].toString();
    });
    ...
```

### exitError

This member print's an error and exit with specified code

```ts
    declare function exitError(error: string | Error, exitCode = 1, label = true);

    ....
    c.onAction(async (ctx) => {
        ctx.exitError('build failed');
    });
    ...
```

### toMixed

Create an MixedType content from string

```ts
    declare function toMixed(value: string);

    ....
    c.onAction(async (ctx) => {
        const myConfig = toMixed('./my-file.json').toFile().toJson();
    });
    ...
```

### isPlatform

Check if proccess is runing on expected platform

```ts
    declare function  isPlatform(expected: 'aix' | 'darwin' | 'freebsd' | 'linux' | 'openbsd' | 'sunos' | 'win32'): boolean;

    ....
    c.onAction(async (ctx) => {
        if(ctx.isPlatform('win32')) {
            // ... run win32 commands
        }
    });
    ...
```

### log

Write a message in the terminal, a wrapper for console.log but this respects the --silent flag

```ts
    declare function log(...args: any[]);

    ....
    c.onAction(async (ctx) => {
        ctx.log('hello world');
    });
    ...
```

### logLines

Write in the terminal each element of the array on a line.
**respects the --silent flag**

```ts
    declare function logLines(lines: string[]);

    ....
    c.onAction(async (ctx) => {
        ctx.logLines(['hello world', 'second line]);
    });
    ...
```

### logWithLabel

Write in the terminal with a label as a prefix, this label is stylized and formatted according to its context.
**respects the --silent flag**

```ts
    declare function logWithLabel(label: 'error' | 'info' | 'warning' | 'success', ...args: any[]);

    ....
    c.onAction(async (ctx) => {
        ctx.logWithLabel('info', 'info log');
    });
    ...
```

### glob

Create an promisified glob see more in https://github.com/isaacs/node-glob

```ts
    declare function  glob(pattern: string, options: globLib.IOptions);

    ....
    c.onAction(async (ctx) => {
        const files = await ctx.glob('./*/**/*.js', {});
    });
    ...
```

### isSilent

Check if CLI is running on silent mode

```ts
    declare function  isSilent(): boolean;

    ....
    c.onAction(async (ctx) => {
        if(ctx.isSilent()) {
            // ....
        }
    });
    ...
```

### setSilent

Artificially activates silent mode

```ts
    declare function  setSilent(silent: boolean);

    ....
    c.onAction(async (ctx) => {
        ctx.setSilent(true);
    });
    ...
```