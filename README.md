# broccoli-imageeditor-field

_broccoli-imageeditor-field_ は、 _broccoli-html-editor_ に カスタムフィールド "画像編集フィールド" を追加する拡張パッケージです。

※ モジュール化手順
下リンクの差分箇所を修正します  
https://goo.gl/aOB8Jn

※ 設定手順
### broccoli-imageeditor-field install
- youngcorn/package.jsonに一行追加
```
"dependencies": {
  "broccoli-module-bootstrap3": "git://github.com/misak1/broccoli-module-bootstrap3.git",
}
```
- npmモジュールダウンロード
```
# cd youngcorn
# npm i
```

- gulpfile.jsにタスクを追加
```
# atom gulpfile.js
```
```js
// broccoli-client (frontend) を処理
gulp.src(["node_modules/broccoli-bootstrap3-fields/dist/**/*"])
  .pipe(gulp.dest("./dist/{PATH_TO_YOUR_DIRECTORY}"))
;
```

- baskendJSに追加  
```
# atom backend/apis/broccoliBridgeForThemeEditor.js
```
```js
'paths_module_template': {
  'ModBT3': '../modulesBT3/'
} ,

~ 中略 ~

'customFields': {
  // Bootstrap3
  'Alert': require('broccoli-bootstrap3-fields').alert,
  'Badge': require('broccoli-bootstrap3-fields').badge,
  'Button': require('broccoli-bootstrap3-fields').button,
  'Glyphicons': require('broccoli-bootstrap3-fields').glyphicons,
  'Labels': require('broccoli-bootstrap3-fields').labels
},
```

- frontendJSに追加  
```
# atom  src/project/themeEditor/editors/broccoli-html-editor/index.html.twig
```
```js&css
<!-- bootstrap -->
<link rel="stylesheet" href="./{PATH_TO_YOUR_DIRECTORY}bs3/css/bootstrap.min.css" />
<link rel="stylesheet" href="./{PATH_TO_YOUR_DIRECTORY}bs3/css/bootstrap-theme.min.css" />
<link rel="stylesheet" href="./{PATH_TO_YOUR_DIRECTORY}bs3/css/bootstrap4broccoli.css" />
<script type="text/javascript" href="./{PATH_TO_YOUR_DIRECTORY}bs3/js/bootstrap.min.js"></script>

```

- themeに追加  
```
# atom src/project/themeEditor/editors/broccoli-html-editor/index_files/cont.js
```
```js
'customFields': {
  'imageeditor': window.BroccoliImageEditorField
},
```

- templateを追加
```
# cp node_modules/broccoli-imageeditor-field/tests/testdata/modules1/dev/imageeditor #{プロジェクトフォルダ}/px-files/themes/broccoli/modules/images/
```

- 配置&実行
```
# gulp; gulp watch;
```

## ライセンス - License

MIT License


## 作者 - Author

- (C)Misaki Shibata <misaki.pink@gmail.com>
