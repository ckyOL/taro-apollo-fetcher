## Taro Apollo Fetcher

### Introduction

Wechat and Bytedance Miniprogram don't provide global fetch. In order to use apollo-link-http, you need this custom fetcher.

### Install

```bash
npm i taro-apollo-fetcher -S
```

### Usage
```js
import { createHttpLink } from "apollo-link-http";
import taroApolloFetcher from "taro-apollo-fetcher";

const link = createHttpLink({ 
    uri: "xxxxx",
    fetch: taroApolloFetcher,
});
```
###