# Antd Checkbox Debuger

This is for debugging the following error 

```
Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. Check the render method of `t`
```

which only appears in `production` environment. Thank you for your help.

## How to

Dev:

```bash
npm run dev
- for windows -
npm run dev-win
```

Production:

```bash
npm run build
npm start
- for windows -
npm run start-win
```


## Note
In this repo, there are many ways to eliminate the error...
* removes `<Checkbox>Checkbox</Checkbox>` from `components/sell/SellForm.js`
* comments `import { connect } from 'react-redux'` in `components/sell/SellForm.js`
* delete a file in `pages/subdir/`
* remove `antd` import from `.babelrc`

Sub-folder plays key roles in reproducing the error in my opinion.

## More Note
I also tried to customize antd theme too via `styles/ant-theme-vars.less` according to [this repo](https://github.com/plxel/nextjs-ant-design-custom-theme).
