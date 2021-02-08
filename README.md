# web-development-with-node-and-express

## cnode与express开发

### 搭建环境步骤：

1、安装node（http://nodejs.org），运行如下命令验证是否安装成功

    node -v

下图表示安装成功

2、给项目创建新目录（及根目录），如～/projects/meadowlark/site，然后运行如下命令，它会问一系列问题后，生成package.json文件（入口点的问题，用meadowlark.js或项目的名字作为答案）

    npm init

3、安装express，运行如下命令

    npm install --save express

用了--save选项，会更新package.json文件。

4、创建一个.gitignore文件，把不需要添加到代码库中的文件名写入

    # ignore packages installed by npm
    node_modules

    # put any other files you don't want to check in here.
    # such as .DS_Store(OSX), *.bak, etc.

5、创建项目的入口文件meadowlark.js，添加路由、中间件、端口号等
6、安装模版框架，运行如下命令（此处引用模版框架Handlebars）

  npm install --save express3-handlebars

然后在入口文件meadowlark.js中创建一个模版引擎，并对Express进行配置，将其作为默认的视图引擎。
    
    var app = express();

    // 设置handlebars视图引擎
    var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
    app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars');

7、安装git（http://git-scm.com）,运行如下命令验证是否安装成功

    git --version

8、创建git存储库

    git init
