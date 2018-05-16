不同的webpack 打包需求
每一个分支放一种打包效果

master分支：less postcss  loader     内部样式style



webpack  4.0 +  对  extract-text-webpack-plugin  不支持， 安装用下面的命令：
npm install extract-text-webpack-plugin@next   --save-dev


less2 分支  ：  将所有的css ，less  打包成一个  css 文件， 作为外部css 文件链接


打包命令： webpack .  或者在 package.json 中设置 scripts   来运行命令

