---
sidebar_position: 6
---

# 3rd Party Libraries

Scriptails uses and export some 3rd party libraries by default.

### [Shell JS🔗](https://www.npmjs.com/package/shelljs)
ShellJS is a portable (Windows/Linux/OS X) implementation of Unix shell commands on top of the Node.js API. You can use it to eliminate your shell script's dependency on Unix while still keeping its familiar and powerful commands. You can also install it globally so you can run it from outside Node projects - say goodbye to those gnarly Bash scripts!

**Importing:**
```js
import { shell } from 'scriptails';
```

### [Chalk🔗](https://www.npmjs.com/package/chalk)
Terminal string styling done right
Chalk comes with an easy to use composable API where you just chain and nest the styles you want.

**Importing:**
```js
import { chalk } from 'scriptails';
```

### [Prompts🔗](https://www.npmjs.com/package/prompts)
Lightweight, beautiful and user-friendly interactive prompts

**Importing:**
```js
import { prompts } from 'scriptails';
```