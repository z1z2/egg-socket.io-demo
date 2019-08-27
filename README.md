# socket.io-demo

1. 打开浏览器，开启两个 tab，访问 http://localhost:7001/public/client.html
1. 打开两个 tab 的控制台，分别输入 `socket.emit('user', '1');` 和 `socket.emit('user', '2');`，告知服务端，自己的 userId 是 1 和 2
1. 在其中一个 tab 输入 `socket.emit('server', 'message');`，两个 tab 都会收到 `Hi user-X, someone sent message: message`，X 是上面发送过的 userId
1. 这两条消息是 controller 在收到 message 后，根据当前存活的连接分别发送的


## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org