module.exports={
  extends: ['./node_modules/ts-standard/eslintrc.json', './node_modules/standard/eslintrc.json'],
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  }
}
