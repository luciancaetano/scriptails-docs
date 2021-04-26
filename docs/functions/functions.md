---
sidebar_label: Functions
sidebar_position: 1
---

### Functions

### command
Declare a new command

▸ **command**(`name`: *string*, `cb`: CommandContextCallback): *Promise*<void\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `name` | *string* |
| `cb` | CommandContextCallback |

**Returns:** *Promise*<void\>

___

### defaultCommand

Define a default command **single**

▸ **defaultCommand**(`cb`: CommandContextCallback): *Promise*<void\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `cb` | CommandContextCallback |

**Returns:** *Promise*<void\>

___

### start

▸ **start**(`argv`: *string*[], `options`: IStartOptions: *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `argv` | *string*[] |
| `options` | IStartOptions |

**Returns:** *void*