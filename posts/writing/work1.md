---
title: 使用 nginx 同域名下部署多个 vue 项目，并使用反向代理
date: 2022-02-23T00:00:00
---

[[toc]]

花了 3 天时间，趁着我还没有忘记，先记录下来。

## 效果

假设我们目前有两个项目 project1 和 project2，还有一个 nginx 自带的 index.html 页面，在 index.html 中添加项目的对应链接（稍后粘贴出来），为了统一管理子项目的路由。

期望实现下面的效果：

``` bash
http://localhost:8080/ 进入最外层的 index.html
http://localhost:8080/project1 进入项目一
http://localhost:8080/project2 进入项目二
```

废话不多说，开始配置

## Vue 的配置

> 本人使用的是 `vue-cli2` 搭建的项目，所以对应的需要修改一些 `vue` 的配置参数。

- config 文件夹下的 index.js，因为是打包，所以我们需要在 `build.assetsPublicPath` 更改对应项目名，譬如

``` javascript
// project1
module.exports = {
  dev: {},
  build: {
    assetsPublicPath: '/project1/' // 注意前后的 ‘/’
  }
}

// project2
module.exports = {
  dev: {},
  build: {
    assetsPublicPath: '/project2/' // 注意前后的 ‘/’
  }
}
```

- config 文件夹下的 prod.env.js 修改成这样：

``` javascript
// project1
module.exports = {
  NODE_ENV: '"production"',
  BASE_API: '"/api/pro1"' // 这里待会与 nginx 配置对应
}

// project2
module.exports = {
  NODE_ENV: '"production"',
  BASE_API: '"/api/pro2"' // 这里待会与 nginx 配置对应
}
```
**[注意]** 因为我在项目中使用到了 `BASE_API` 作为代理的前缀，如果你的不在这边，你需要找到你自己的代理配置

- 因为每个人的 `vue-router` 文件配置不一样，你需要找到你的 router 配置文件，内部修改为：

``` javascript
// 我采用了 history 模式，hash 模式我没有测试，感觉应该是一样的效果
// project1
export default new Router({
  base: '/project1/', // 注意更改你子项目名，这个对应你的 build.assetsPublicPath
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }), // 注意这是 vue-router@3 中的写法
  routes: []
})

// project2
export default new Router({
  base: '/project2/', // 注意更改你子项目名，这个对应你的 build.assetsPublicPath
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }), // 注意这是 vue-router@3 中的写法
  routes: []
})
```

**[注意]** 在 `npm run build` 可能会报错：`.tap(*)` 之类的，那是因为打包中的 `html-webpack-plugin` 版本出现了问题，可以执行下面的语句

``` bash
# 这个版本就是你的 package.json 中的版本，只不过你需要重新再指定这个版本

$ npm i html-webpack-plugin@4.0.0-alpha -D
```

## Nginx 的配置

- 首先我的目录是这样的，无关文件全部以 `...` 展示

``` nginx
.
├─conf
│  ├─... # 其他文件
│  └─nginx.conf
│
├─html # 只看这里，其他暂时我没用到 
│  ├─project1
│  │  └─static
│  │      ├─css
│  │      ├─fonts
│  │      └─js
│  │          ├─g
│  │          └─V
│  ├─project2
│  │   └─static
│  │       ├─css
│  │       ├─fonts
│  │       └─js
│  │           ├─g
│  │           └─V
│  ├─index.html
│  └─50x.html
└─... # 其他文件
```

**[解释]** 我的 `nginx` 目录就是原生的，内部包含了一个 `html` 文件夹，为了省事，我直接使用这个，当然你也可以指定其他的目录，但是目前还请和我一样的配置，后面可以自己定制化。

- 现在我们开始配置在 `conf` 文件夹下的 `nginx.conf` 文件

我是直接在原始文件上修改的，而修改的配置都是在 `http` 模块中，所以其他的不需要的代码我直接用 `...` 代替。

``` nginx
# ...
# 反向代理
http {
  include mime.types;
  default_type application/octet-stream;

  #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
  #                  '$status $body_bytes_sent "$http_referer" '
  #                  '"$http_user_agent" "$http_x_forwarded_for"';

  sendfile        on;
  keepalive_timeout  65;

  client_max_body_size 20M;
  client_body_buffer_size 10M;
  large_client_header_buffers 4 128k;
	
  # 这里可以做集群
	upstream p1_server {
		server localhost:8081;
	}

	# 这里可以做集群
	upstream p2_server {
		server localhost:8082;
	}

  server {
    listen 8080;
    server_name localhost;
	  charset utf-8;

    proxy_connect_timeout 180;
    proxy_send_timeout 180;
    proxy_read_timeout 180;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarder-For $remote_addr;

    root html; # 这里指定刚刚我们的文件夹
		
    # 总的项目路由，我偷懒直接写在了同一个文件
    # 如果有很多可以在配置多个 conf 文件，使用 include 关联进来
		location / {
      try_files $uri $uri/ /index.html; # 这里可以理解指定到 html 文件夹下的 index.html
		}
		
    # project1
    # 这里就是刚刚我们在 vue 项目中 config/index.js 的配置 build.assetsPublicPath，
    # 也是 vue 项目中配置的 router 中的 base
		location ^~ /project1 {
      try_files $uri $uri/ /project1/index.html; # 这里可以理解指定到 html 文件夹下 project1 文件夹 的 index.html
		}
		
    # project2
    # 这里是项目二的配置
		location ^~ /project2 { # 
      try_files $uri $uri/ /project2/index.html; # 这里可以理解指定到 html 文件夹下 project2 文件夹 的 index.html
		}
		
    # 这里是 project1 配置需要调用的接口
		location /api/pro1 { # 这里就是在 vue 项目中 prod.env.js 的配置 BASE_API 
			proxy_redirect off;
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_pass http://p1_server; # 此处的 p1_server 对应的上面的配置 upstream p1_server {}，这里可以做集群，我用不到，就简单配置了
    }
        
    # 这里是 project1 配置需要调用的接口
    location /api/pro2 { # 这里就是在 vue 项目中 prod.env.js 的配置 BASE_API
			proxy_redirect off;
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_pass http://p2_server;  # 此处的 p2_server 对应的上面的配置 upstream p2_server {}，这里可以做集群，我用不到，就简单配置了
    }
    # ...
  }
  # ...
}
```

-  最后贴出我修改的 `index.html` 的代码

因为我是追加的，所以直接贴出我追加的代码，其他的采用 ...

``` html
...
<p><em>Thank you for using nginx.</em></p> <!-- 原版文件的位置 -->

<!-- start: 追加-->
<hr>
<a href="/project1">项目一</a> | <a href="/project2">项目二</a>
<!-- end: 追加-->

</body> <!-- 原版文件的位置 -->
```

## 最后的调试

所有的配置完成，我们就可以启动 `nginx` 了，这个不会的请自行解决了。

启动成功，我们在浏览器输入 `http://localhost:8080` 我们就可以看到，

点击项目一，我们可以看到链接变为 `http://localhost:8080/project1`

点击项目二，链接变为 `http://localhost:8080/project2`，完全符合我们的期望，那就成功了。


**[强行解释一下玄学]** 那天配置好了，一启动就报错，弄的我最后放弃了。但是第二天，准备在检查下，一启动竟然全好了，我都一脸懵逼啊！ 如果你也遇到和我一样的问题，先放放，说不定隔天就好了。😄

