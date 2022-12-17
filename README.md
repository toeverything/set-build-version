# @toeverything/set-build-version

## Feature Set

- [x] set `BUILD_VERSION`

## Usage

```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-node@v2
  - uses: toeverything/set-build-version@latest
  - run: npm install
  - run: npm publish
```

## License

[MIT](LICENSE)
