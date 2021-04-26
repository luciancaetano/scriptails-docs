---
sidebar_label: MixedFile
sidebar_position: 1
---


# Class: MixedFile

## Methods

### exists

▸ **exists**(): *boolean*

Check if File Exists

**Returns:** *boolean*

___

### readContent

▸ **readContent**(`options?`: { `encoding?`: ``null`` ; `flag?`: *string*  }): *Buffer*

Read file contents

#### Parameters:

| Name | Type |
| :------ | :------ |
| `options?` | *object* |
| `options.encoding?` | ``null`` |
| `options.flag?` | *string* |

**Returns:** *Buffer*

___

### toJson

▸ **toJson**<T\>(`encoding?`: BufferEncoding): T

Parse file as json

#### Type parameters:

| Name | Default |
| :------ | :------ |
| `T` | *any* |

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoding` | BufferEncoding | 'utf-8' |

**Returns:** T

___

### toYaml

▸ **toYaml**<T\>(`encoding?`: BufferEncoding): T

Parse file as yaml

#### Type parameters:

| Name | Default |
| :------ | :------ |
| `T` | *any* |

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `encoding` | BufferEncoding | 'utf-8' |

**Returns:** T

___

### writeContet

▸ **writeContet**(`content`: *string* \| ArrayBufferView): *Promise*<void\>

Write content to file

#### Parameters:

| Name | Type |
| :------ | :------ |
| `content` | *string* \| ArrayBufferView |

**Returns:** *Promise*<void\>