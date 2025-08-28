---
title: 前端常规打包工具
date: 2020-07-14T00:00:00
---

任何行业都会有能力参差不齐的工作者，近几年的前端发展飞速，随之而来就是大量新知识的出现，我也身处这股潮流中，从不敢忘记学习，深怕自己被淘汰，但是技术这玩意，你不学自然有人学，所以我们只要做好自己即可。

所谓前端打包工具是为了更好管理 html, css, javascript。对于非前端开发，使用可以锦上添花，不使用也没关系。对于前端这些现在算是基础技能，我们应该多多使用。

## 为什么需要打包工具 {#wei-shen-me-xu-yao-da-bao-gong-ju}

### 前端 {#qian-duan}

一般我们说前端，通常指结构层 html，表现层 css，行为层 javascript。html 好比是房子的地基，css 和 javascript 是房子的建筑材料，这三个部分一起组成个漂亮的房子。

所以我们不能将他们分开说，某某部分是个房子，只有三个一起才能组成一个漂亮的房子。

### JavaScript 的简介 {#javascript-de-jian-jie}

这几年，javascript 发展非常快速，特别是在2015年，更是有一个质的飞跃。

#### ECMA {#ecma}

说到 javascript，就要说下 web 标准的组织协会，**ECMA**，它是“European Computer Manufactures Association”的缩写，中文称**欧洲计算机制造联合会**，1961 年成立，旨在建立统一的电脑操作格式标准（包括程序语言和输入输出的组织）。

#### JavaScript {#javascript}

2015年，javascript 引入许多新的语法糖，而且制定过程当中，还有很多组织和个人不断提交新功能。事情很快就变得清楚了，不可能在一个版本里面包括所有将要引入的功能。

常规的做法是先发布 6.0 版，过一段时间再发 6.1 版，然后是 6.2 版、6.3 版等等，这个 2015 年之前 javascript 现在习惯称为 ECMAScript5，而之后称为 ECMAScript6。

标准委员会商定后最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。

因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 javascript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。本书中提到 ES6 的地方，一般是指 ES2015标准，但有时也是泛指“下一代 JavaScript 语言”。

- 问题一：关于 ECMAScript 和 JavaScript 是什么关系？

  回答：从现在的角度来看，二者是可以互换的。即 ECMAScript 是 JavaScript，JavaScript 是 ECMAScript。

- 问题二：ECMAScript 6 和 ECMAScript 2015 是什么关系？

  回答：ECMAScript 6 泛指下一代 JavaScript 语言，ECMAScript 2015 指的是 2015 年的 JavaScript 标准。

- 总结：es6 泛指下一代 JavaScript 语言，当时部分人也会认为特指 ES2015

  ECMAScript6.0  =  ECMAScript2015 = es2015  =  es6(部分人会这么认为)
  ECMAScript6.1  =  ECMAScript2016 = es2016  =  es7(部分人会这么认为)
  ECMAScript6.2  =  ECMAScript2017 = es2017  =  es8(部分人会这么认为)

#### 浏览器的遭遇 {#liu-lan-qi-de-zao-yu}

很尴尬的是，JavaScript 发展很快，但是浏览器跟不上脚本更新的进度，一方面给出了标准，一方面却不能直接在浏览器上使用。这就出现了 Babel，它自称是 JavaScript 编译器，作用就是将 ES6 新语法转成 ES5，即现在浏览器可识别的脚本（基本现在是针对老版 IE 内核），但是使用 Babel 编译也有缺陷，那就是每一次保存，都需要手动的使用命令行编译，而且编译过程中还需要相关联的包配合使用，很繁琐。**所以，打包工具就出现了，它可以帮助做这些繁琐的工作。**

## 打包工具 {#da-bao-gong-ju}

目前仅介绍 4 款主流的打包工具：Grunt，Gulp，Webpack，Rollup，以发布时间为顺序。

1. Grunt：最老牌的打包工具，它运用配置的思想来写打包脚本，一切皆配置，所以会出现比较多的配置项，诸如 `option`，`src`，`dest` 等等，而且不同的插件可能会有自己扩展字段，认知成本高，运用的时候需要明白各种插件的配置规则。

2. Gulp：用代码方式来写打包脚本，并且代码采用流式的写法，只抽象出了 `gulp.src`, `gulp.pipe`, `gulp.dest`, `gulp.watch` 接口，运用相当简单。更易于学习和使用，代码量能比 Grunt 少一半左右（此介绍的是 `gulp3`，在 `gulp4` 不可用）。

3. Webpack：是模块化管理工具和打包工具。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、AMD 模块、ES6 模块、CSS、图片等。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。它定位是模块打包器，而 Gulp/Grunt 属于构建工具。Webpack 可以代替 Gulp/Grunt 的一些功能，但不是一个职能的工具，可以配合使用。

4. Rollup：下一代 ES6 模块化工具，最大的亮点是利用 ES6 模块设计，利用树摇（tree-shaking）生成更简洁、更简单的代码。一般而言，对于应用使用 Webpack，对于类库使用 Rollup；需要代码拆分（Code Splitting），或者很多静态资源需要处理，再或者构建项目需要引入很多 CommonJS 模块的依赖时，使用 Webpack，代码库是基于 ES6 模块，而且希望代码能够被其他人直接使用，使用 Rollup。

### 使用总结 {#shi-yong-zong-jie}

- Grunt：MPA，老牌打包工具，基于文件为媒介（运行慢，零散的脚本文件一当多起来就受到影响
- Gulp：MPA，易学，基于 NodeJs 的 `steam` 流打包
- Webpack：SPA，目前最强大的打包工具，但是过于臃肿，如何单纯打包js不推荐
- Rollup：MPA，树摇（tree-shaking）特性（针对es6，按需打包，目前 vue，react 主流使用）

### 如何选择 {#ru-he-xuan-ze}

如果你一个都不熟悉的话，那么我直接推荐 Webpack，官方文档非常详细，更新频率很高。而且在其他的打包工具在处理非网页文件（比如 svg, png, vue 等）基本还是需要借助它来实现，最关键现在的脚手架主流依旧是它。

如果处理文件需要关注前端三剑客的话，那么 Grunt 和 Gulp 会更好点，这两者我直接推荐 Gulp，除非你已经很熟悉 Grunt 了。

如果你更加在意脚本代码的简洁精炼，那么可以使用 Rollup。

如果你还要更加精炼一点，这里新出来一个新的打包工具，免插件式 Parcel，__时至 2025 年，使用 Vite 或者 Rspack 也是不错的选择。__

## 个人打包配置 {#ge-ren-da-bao-pei-zhi}

在打包上，我个人注重的是配置从简单到复杂，所以我分开使用。CSS 打包选择了 Gulp，2 个任务，3 个插件，有一个插件是为了编译 scss，如果直接使用 css，那么这个插件也可以去除。

```js
// 任务一：编译
gulp.task('compile', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass({outputStyle: 'expanded'})) // 插件一：编译scss
    .on('error', showError)
    .pipe(autoprefixer({ // 插件二：自动添加浏览器前缀
      browsers: ['> 1%', 'last 4 versions'],
      cascade: false,
      remove: true
    }))
    .pipe(cleanCss({ // 插件三：压缩样式
      compatibility: 'ie8',
      format: 'keep-breaks'
    }))
    .pipe(gulp.dest('../dist/css'));
})

// 任务二：观察
gulp.task('watch', function(){
  gulp.watch('src/scss/*.scss', ['compile'])
})
```

ECMAScript 个人现在基本使用 es6，所以在打包脚本上我选择了 Rollup，只提取有用的代码，配置上参考 React 官方配置文档。

```js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import { uglify } from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV;
console.log('当前环境：%s', env);

const configs = [
  {
    input: 'src/js/index.js',
    output: {
      file: 'dist/js/index.js',
      format: 'umd',
      name: 'atom',
      banner,
      sourcemap: true
    }
  }
]

const plugins = [
  eslint({ // 检测js代码语法格式
    formatter: 'codeframe',
    include: [
      'src/js/**/*.js'
    ]
  }),
  resolve({ // 提取所依赖的代码
    jsnext: true,
    main: true,
    browser: true,
    module: true
  }),
  babel({ // 编译es6 -> es5
    exclude: 'node_modules/**' // 只编译我们的源代码
  }),
  commonjs() // 将commonjs 转成 es6 
]

export default configs.map(v => {
  v.plugins = plugins

  if (env === 'development') {
    v.watch = { // 监听脚本的变化
      include: 'src/js/**',
      exclude: ['node_modules/**']
    }
  }

  if (env === 'production') {
    v.plugins.push(
      uglify({ // 压缩脚本
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    )
  }

  return v
});

```


html 个人不做任何处理，可以在上线压缩减少文件的体积，压缩直接使用 `gulp3`。

```js
// 任务一
gulp.task('testHtmlmin', function () {
  var options = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
  };
  gulp.src('src/html/*.html')
    .pipe(htmlmin(options)) // 使用gulp-htmlmin插件
    .pipe(gulp.dest('dist/html'));
});
```
