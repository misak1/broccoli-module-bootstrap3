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
  "broccoli-imageeditor-field": "git://github.com/pickles2/broccoli-imageeditor-field.git",
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
gulp.src(["node_modules/broccoli-imageeditor-field/dist/**/*"])
  .pipe(gulp.dest("./dist/{PATH_TO_YOUR_DIRECTORY}"))
;
```

- baskendJSに追加  
```
# atom backend/apis/broccoliBridgeForThemeEditor.js
```
```js
'customFields': {
  'imageeditor': require('broccoli-imageeditor-field')
},
```

- frontendJSに追加  
```
# atom  src/project/themeEditor/editors/broccoli-html-editor/index.html.twig
```
```js
<!--broccoli-imageeditor-field -->
<script src="/{PATH_TO_YOUR_DIRECTORY}broccoli-imageeditor-field.js"></script>
<link rel="stylesheet" href="/{PATH_TO_YOUR_DIRECTORY}css/Jcrop.css" />
<script src="/{PATH_TO_YOUR_DIRECTORY}Jcrop-editor.js"></script>
<script src="/{PATH_TO_YOUR_DIRECTORY}Jcrop.js"></script>
<script src="/{PATH_TO_YOUR_DIRECTORY}jquery.animate-colors-min.js"></script>
<script src="/{PATH_TO_YOUR_DIRECTORY}rgbcolor.js"></script>
<script src="/{PATH_TO_YOUR_DIRECTORY}underscore-min.js"></script>

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
