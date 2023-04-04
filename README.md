# longhash

## 功能介绍
对于长文本内容使用关键词进行加密/解密

## 安装
npm install longhash-cuimc

## 使用范例

### common.js
cjs:
const longhash = require('longhash-cuimc')

### esModule
esm:
import longhash from 'longhash-cuimc'

const content = 'test'

const encodeText = longhash.encode('longhash', content)

const decodeText = longhash.decode('longhash', encodeText)

