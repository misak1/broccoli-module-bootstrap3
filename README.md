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
gulp.src(["node_modules/broccoli-module-bootstrap3/dist/**/*"])
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
  'Alert': require('broccoli-module-bootstrap3').alert,
  'Badge': require('broccoli-module-bootstrap3').badge,
  'Button': require('broccoli-module-bootstrap3').button,
  'Glyphicons': require('broccoli-module-bootstrap3').glyphicons,
  'Labels': require('broccoli-module-bootstrap3').labels
},
```

- frontendJSに追加  
```
# atom  src/project/themeEditor/editors/broccoli-html-editor/index.html.twig
```
```js&css
<!-- bootstrap -->
<link rel="stylesheet" href="./{PATH_TO_YOUR_DIRECTORY}broccoli-module-bootstrap3/client/dist/css/bootstrap.min.css" />
<link rel="stylesheet" href="./{PATH_TO_YOUR_DIRECTORY}broccoli-module-bootstrap3/client/dist/css/bootstrap-theme.min.css" />
<link rel="stylesheet" href="./{PATH_TO_YOUR_DIRECTORY}broccoli-module-bootstrap3/client/dist/css/bootstrap4broccoli.css" />
<script type="text/javascript" href="./{PATH_TO_YOUR_DIRECTORY}broccoli-module-bootstrap3/client/dist/js/bootstrap.min.js"></script>

```

- themeに追加  
```
# atom src/project/themeEditor/editors/broccoli-html-editor/index_files/cont.js
```
```js
'customFields': {
  // Bootstrap3
  'Alert': window.broccoliBootstrap3AlertField,
  'Badge': window.broccoliBootstrap3BadgeField,
  'Button': window.broccoliBootstrap3ButtonField,
  'Glyphicons': window.broccoliBootstrap3GlyphiconsField,
  'Labels': window.broccoliBootstrap3LabelsField,
},
```

- templateを追加
```
# cp node_modules/broccoli-module-bootstrap3/tests/testdata/modulesBT3 #{プロジェクトフォルダ}/px-files/themes/broccoli/
```

- 配置&実行
```
# gulp; gulp watch;
```

## ライセンス - License

MIT License


## 作者 - Author

- (C)Misaki Shibata <misaki.pink@gmail.com>
