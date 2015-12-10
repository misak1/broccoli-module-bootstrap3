var assert = require('assert');
var path = require('path');
var fs = require('fs');
var phpjs = require('phpjs');
var Promise = require("es6-promise").Promise;
var Broccoli = require('broccoli-html-editor');

function makeDefaultBroccoli(callback){
	var broccoli = new Broccoli();
	broccoli.init(
		{
			'paths_module_template':{
				'PlainHTMLElements': '../PlainHTMLElements/',
				'testMod1': '../modules1/',
				'ModBT3': '../modulesBT3/'
			},
			'documentRoot': path.resolve(__dirname, 'testdata/htdocs/')+'/',
			'pathHtml': '/test1/test1.html',
			'pathResourceDir': '/test1/test1_files/resources/',
			'realpathDataDir': path.resolve(__dirname, 'testdata/htdocs/test1/test1_files/guieditor.ignore/')+'/' ,
			'customFields': {
				'imageeditor': require('./../libs/server.js')
			}
		},
		function(){
			callback(broccoli);
		}
	);
	return;
}

describe('インスタンス初期化', function() {

	it("インスタンス初期化", function(done) {
		this.timeout(60*1000);

		makeDefaultBroccoli( function(broccoli){
			// console.log(broccoli.options.documentRoot);
			// console.log(broccoli.realpathHtml);
			// console.log(broccoli.paths_module_template);

			assert.equal(typeof(broccoli.paths_module_template), typeof({}));
			assert.equal(broccoli.paths_module_template.testMod1, path.resolve(__dirname,'testdata/modules1/')+'/');
			assert.equal(broccoli.paths_module_template.ModBT3, path.resolve(__dirname,'testdata/modulesBT3/')+'/');

			done();
		} );
	});

});

describe('ビルドする', function() {

	it("テストデータをfinalizeモードでビルドする", function(done) {
		this.timeout(15*1000);
		makeDefaultBroccoli( function(broccoli){
			var data = require(__dirname+'/testdata/htdocs/test1/test1_files/guieditor.ignore/data.json');
			// console.log(data);
			broccoli.buildBowl(
				data.bowl.main ,
				{
					'mode': 'finalize'
				} ,
				function( html, err ){
					fs.writeFileSync(path.resolve(__dirname, './testdata/htdocs/test1/test1.html'), html);
					// console.log( html );
					done();
				}
			);
		} );
	});

	it("テストデータをcanvasモードでビルドする", function(done) {
		this.timeout(15*1000);
		makeDefaultBroccoli( function(broccoli){
			var data = require(__dirname+'/testdata/htdocs/test1/test1_files/guieditor.ignore/data.json');
			// console.log(data);
			broccoli.buildBowl(
				data.bowl.main ,
				{
					'mode': 'canvas'
				} ,
				function( html, err ){
					fs.writeFileSync(path.resolve(__dirname, './testdata/htdocs/test1/test1.canvas.html'), html);
					// console.log( html );
					done();
				}
			);
		} );
	});

});
