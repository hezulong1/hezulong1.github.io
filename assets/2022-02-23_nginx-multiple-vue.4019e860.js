import{_ as o}from"./Post.e8c0b109.js";import{n as c,f as p,w as l,o as r,a as n,l as s}from"./vendor.8b079578.js";import"./app.9d3f2d14.js";const u=n("div",{class:"prose m-auto"},[n("p",null,[n("div",{class:"table-of-contents"},[n("ul",null,[n("li",null,[n("a",{href:"#\u6548\u679C"},"\u6548\u679C ")]),n("li",null,[n("a",{href:"#vue-\u7684\u914D\u7F6E"},"Vue \u7684\u914D\u7F6E ")]),n("li",null,[n("a",{href:"#nginx-\u7684\u914D\u7F6E"},"Nginx \u7684\u914D\u7F6E ")]),n("li",null,[n("a",{href:"#\u6700\u540E\u7684\u8C03\u8BD5"},"\u6700\u540E\u7684\u8C03\u8BD5 ")])])])]),n("p",null,"\u82B1\u4E86 3 \u5929\u65F6\u95F4\uFF0C\u8D81\u7740\u6211\u8FD8\u6CA1\u6709\u5FD8\u8BB0\uFF0C\u5148\u8BB0\u5F55\u4E0B\u6765\u3002"),n("h2",{id:"\u6548\u679C",tabindex:"-1"},[s("\u6548\u679C "),n("a",{class:"header-anchor",href:"#\u6548\u679C","aria-hidden":"true"},"#")]),n("p",null,"\u5047\u8BBE\u6211\u4EEC\u76EE\u524D\u6709\u4E24\u4E2A\u9879\u76EE project1 \u548C project2\uFF0C\u8FD8\u6709\u4E00\u4E2A nginx \u81EA\u5E26\u7684 index.html \u9875\u9762\uFF0C\u5728 index.html \u4E2D\u6DFB\u52A0\u9879\u76EE\u7684\u5BF9\u5E94\u94FE\u63A5\uFF08\u7A0D\u540E\u7C98\u8D34\u51FA\u6765\uFF09\uFF0C\u4E3A\u4E86\u7EDF\u4E00\u7BA1\u7406\u5B50\u9879\u76EE\u7684\u8DEF\u7531\u3002"),n("p",null,"\u671F\u671B\u5B9E\u73B0\u4E0B\u9762\u7684\u6548\u679C\uFF1A"),n("pre",{class:"language-bash"},[n("code",{class:"language-bash"},`http://localhost:8080/ \u8FDB\u5165\u6700\u5916\u5C42\u7684 index.html
http://localhost:8080/project1 \u8FDB\u5165\u9879\u76EE\u4E00
http://localhost:8080/project2 \u8FDB\u5165\u9879\u76EE\u4E8C
`)]),n("p",null,"\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u5F00\u59CB\u914D\u7F6E"),n("h2",{id:"vue-\u7684\u914D\u7F6E",tabindex:"-1"},[s("Vue \u7684\u914D\u7F6E "),n("a",{class:"header-anchor",href:"#vue-\u7684\u914D\u7F6E","aria-hidden":"true"},"#")]),n("blockquote",null,[n("p",null,[s("\u672C\u4EBA\u4F7F\u7528\u7684\u662F "),n("code",null,"vue-cli2"),s(" \u642D\u5EFA\u7684\u9879\u76EE\uFF0C\u6240\u4EE5\u5BF9\u5E94\u7684\u9700\u8981\u4FEE\u6539\u4E00\u4E9B "),n("code",null,"vue"),s(" \u7684\u914D\u7F6E\u53C2\u6570\u3002")])]),n("ul",null,[n("li",null,[s("config \u6587\u4EF6\u5939\u4E0B\u7684 index.js\uFF0C\u56E0\u4E3A\u662F\u6253\u5305\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5728 "),n("code",null,"build.assetsPublicPath"),s(" \u66F4\u6539\u5BF9\u5E94\u9879\u76EE\u540D\uFF0C\u8B6C\u5982")])]),n("pre",{class:"language-javascript"},[n("code",{class:"language-javascript"},[n("span",{class:"token comment"},"// project1"),s(`
module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"dev"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"assetsPublicPath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/project1/'"),s(),n("span",{class:"token comment"},"// \u6CE8\u610F\u524D\u540E\u7684 \u2018/\u2019"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// project2"),s(`
module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"dev"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"assetsPublicPath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/project2/'"),s(),n("span",{class:"token comment"},"// \u6CE8\u610F\u524D\u540E\u7684 \u2018/\u2019"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("ul",null,[n("li",null,"config \u6587\u4EF6\u5939\u4E0B\u7684 prod.env.js \u4FEE\u6539\u6210\u8FD9\u6837\uFF1A")]),n("pre",{class:"language-javascript"},[n("code",{class:"language-javascript"},[n("span",{class:"token comment"},"// project1"),s(`
module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token constant"},"NODE_ENV"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`'"production"'`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"BASE_API"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`'"/api/pro1"'`),s(),n("span",{class:"token comment"},"// \u8FD9\u91CC\u5F85\u4F1A\u4E0E nginx \u914D\u7F6E\u5BF9\u5E94"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// project2"),s(`
module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token constant"},"NODE_ENV"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`'"production"'`),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token constant"},"BASE_API"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},`'"/api/pro2"'`),s(),n("span",{class:"token comment"},"// \u8FD9\u91CC\u5F85\u4F1A\u4E0E nginx \u914D\u7F6E\u5BF9\u5E94"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("p",null,[n("strong",null,"[\u6CE8\u610F]"),s(" \u56E0\u4E3A\u6211\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u5230\u4E86 "),n("code",null,"BASE_API"),s(" \u4F5C\u4E3A\u4EE3\u7406\u7684\u524D\u7F00\uFF0C\u5982\u679C\u4F60\u7684\u4E0D\u5728\u8FD9\u8FB9\uFF0C\u4F60\u9700\u8981\u627E\u5230\u4F60\u81EA\u5DF1\u7684\u4EE3\u7406\u914D\u7F6E")]),n("ul",null,[n("li",null,[s("\u56E0\u4E3A\u6BCF\u4E2A\u4EBA\u7684 "),n("code",null,"vue-router"),s(" \u6587\u4EF6\u914D\u7F6E\u4E0D\u4E00\u6837\uFF0C\u4F60\u9700\u8981\u627E\u5230\u4F60\u7684 router \u914D\u7F6E\u6587\u4EF6\uFF0C\u5185\u90E8\u4FEE\u6539\u4E3A\uFF1A")])]),n("pre",{class:"language-javascript"},[n("code",{class:"language-javascript"},[n("span",{class:"token comment"},"// \u6211\u91C7\u7528\u4E86 history \u6A21\u5F0F\uFF0Chash \u6A21\u5F0F\u6211\u6CA1\u6709\u6D4B\u8BD5\uFF0C\u611F\u89C9\u5E94\u8BE5\u662F\u4E00\u6837\u7684\u6548\u679C"),s(`
`),n("span",{class:"token comment"},"// project1"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Router"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"base"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/project1/'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u6CE8\u610F\u66F4\u6539\u4F60\u5B50\u9879\u76EE\u540D\uFF0C\u8FD9\u4E2A\u5BF9\u5E94\u4F60\u7684 build.assetsPublicPath"),s(`
  `),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'history'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function-variable function"},"scrollBehavior"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"y"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u6CE8\u610F\u8FD9\u662F vue-router@3 \u4E2D\u7684\u5199\u6CD5"),s(`
  `),n("span",{class:"token literal-property property"},"routes"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// project2"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Router"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"base"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/project2/'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u6CE8\u610F\u66F4\u6539\u4F60\u5B50\u9879\u76EE\u540D\uFF0C\u8FD9\u4E2A\u5BF9\u5E94\u4F60\u7684 build.assetsPublicPath"),s(`
  `),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'history'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function-variable function"},"scrollBehavior"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"y"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u6CE8\u610F\u8FD9\u662F vue-router@3 \u4E2D\u7684\u5199\u6CD5"),s(`
  `),n("span",{class:"token literal-property property"},"routes"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("p",null,[n("strong",null,"[\u6CE8\u610F]"),s(" \u5728 "),n("code",null,"npm run build"),s(" \u53EF\u80FD\u4F1A\u62A5\u9519\uFF1A"),n("code",null,".tap(*)"),s(" \u4E4B\u7C7B\u7684\uFF0C\u90A3\u662F\u56E0\u4E3A\u6253\u5305\u4E2D\u7684 "),n("code",null,"html-webpack-plugin"),s(" \u7248\u672C\u51FA\u73B0\u4E86\u95EE\u9898\uFF0C\u53EF\u4EE5\u6267\u884C\u4E0B\u9762\u7684\u8BED\u53E5")]),n("pre",{class:"language-bash"},[n("code",{class:"language-bash"},[n("span",{class:"token comment"},"# \u8FD9\u4E2A\u7248\u672C\u5C31\u662F\u4F60\u7684 package.json \u4E2D\u7684\u7248\u672C\uFF0C\u53EA\u4E0D\u8FC7\u4F60\u9700\u8981\u91CD\u65B0\u518D\u6307\u5B9A\u8FD9\u4E2A\u7248\u672C"),s(`

$ `),n("span",{class:"token function"},"npm"),s(` i html-webpack-plugin@4.0.0-alpha -D
`)])]),n("h2",{id:"nginx-\u7684\u914D\u7F6E",tabindex:"-1"},[s("Nginx \u7684\u914D\u7F6E "),n("a",{class:"header-anchor",href:"#nginx-\u7684\u914D\u7F6E","aria-hidden":"true"},"#")]),n("ul",null,[n("li",null,[s("\u9996\u5148\u6211\u7684\u76EE\u5F55\u662F\u8FD9\u6837\u7684\uFF0C\u65E0\u5173\u6587\u4EF6\u5168\u90E8\u4EE5 "),n("code",null,"..."),s(" \u5C55\u793A")])]),n("pre",{class:"language-nginx"},[n("code",{class:"language-nginx"},[s(`.
\u251C\u2500conf
\u2502  \u251C\u2500... `),n("span",{class:"token comment"},"# \u5176\u4ED6\u6587\u4EF6"),s(`
\u2502  \u2514\u2500nginx.conf
\u2502
\u251C\u2500html `),n("span",{class:"token comment"},"# \u53EA\u770B\u8FD9\u91CC\uFF0C\u5176\u4ED6\u6682\u65F6\u6211\u6CA1\u7528\u5230 "),s(`
\u2502  \u251C\u2500project1
\u2502  \u2502  \u2514\u2500static
\u2502  \u2502      \u251C\u2500css
\u2502  \u2502      \u251C\u2500fonts
\u2502  \u2502      \u2514\u2500js
\u2502  \u2502          \u251C\u2500g
\u2502  \u2502          \u2514\u2500V
\u2502  \u251C\u2500project2
\u2502  \u2502   \u2514\u2500static
\u2502  \u2502       \u251C\u2500css
\u2502  \u2502       \u251C\u2500fonts
\u2502  \u2502       \u2514\u2500js
\u2502  \u2502           \u251C\u2500g
\u2502  \u2502           \u2514\u2500V
\u2502  \u251C\u2500index.html
\u2502  \u2514\u250050x.html
\u2514\u2500... `),n("span",{class:"token comment"},"# \u5176\u4ED6\u6587\u4EF6"),s(`
`)])]),n("p",null,[n("strong",null,"[\u89E3\u91CA]"),s(" \u6211\u7684 "),n("code",null,"nginx"),s(" \u76EE\u5F55\u5C31\u662F\u539F\u751F\u7684\uFF0C\u5185\u90E8\u5305\u542B\u4E86\u4E00\u4E2A "),n("code",null,"html"),s(" \u6587\u4EF6\u5939\uFF0C\u4E3A\u4E86\u7701\u4E8B\uFF0C\u6211\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E2A\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5176\u4ED6\u7684\u76EE\u5F55\uFF0C\u4F46\u662F\u76EE\u524D\u8FD8\u8BF7\u548C\u6211\u4E00\u6837\u7684\u914D\u7F6E\uFF0C\u540E\u9762\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u5236\u5316\u3002")]),n("ul",null,[n("li",null,[s("\u73B0\u5728\u6211\u4EEC\u5F00\u59CB\u914D\u7F6E\u5728 "),n("code",null,"conf"),s(" \u6587\u4EF6\u5939\u4E0B\u7684 "),n("code",null,"nginx.conf"),s(" \u6587\u4EF6")])]),n("p",null,[s("\u6211\u662F\u76F4\u63A5\u5728\u539F\u59CB\u6587\u4EF6\u4E0A\u4FEE\u6539\u7684\uFF0C\u800C\u4FEE\u6539\u7684\u914D\u7F6E\u90FD\u662F\u5728 "),n("code",null,"http"),s(" \u6A21\u5757\u4E2D\uFF0C\u6240\u4EE5\u5176\u4ED6\u7684\u4E0D\u9700\u8981\u7684\u4EE3\u7801\u6211\u76F4\u63A5\u7528 "),n("code",null,"..."),s(" \u4EE3\u66FF\u3002")]),n("pre",{class:"language-nginx"},[n("code",{class:"language-nginx"},[n("span",{class:"token comment"},"# ..."),s(`
`),n("span",{class:"token comment"},"# \u53CD\u5411\u4EE3\u7406"),s(`
`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"http")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"include"),s(" mime.types")]),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"default_type"),s(" application/octet-stream")]),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`#log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '`),s(`
  `),n("span",{class:"token comment"},`#                  '$status $body_bytes_sent "$http_referer" '`),s(`
  `),n("span",{class:"token comment"},`#                  '"$http_user_agent" "$http_x_forwarded_for"';`),s(`

  `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"sendfile"),s("        "),n("span",{class:"token boolean"},"on")]),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"keepalive_timeout"),s("  "),n("span",{class:"token number"},"65")]),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"client_max_body_size"),s(),n("span",{class:"token number"},"20M")]),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"client_body_buffer_size"),s(),n("span",{class:"token number"},"10M")]),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"large_client_header_buffers"),s(),n("span",{class:"token number"},"4"),s(),n("span",{class:"token number"},"128k")]),n("span",{class:"token punctuation"},";"),s(`
	
  `),n("span",{class:"token comment"},"# \u8FD9\u91CC\u53EF\u4EE5\u505A\u96C6\u7FA4"),s(`
	`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"upstream"),s(" p1_server")]),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"server"),s(" localhost:8081")]),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"# \u8FD9\u91CC\u53EF\u4EE5\u505A\u96C6\u7FA4"),s(`
	`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"upstream"),s(" p2_server")]),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"server"),s(" localhost:8082")]),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"server")]),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"listen"),s(),n("span",{class:"token number"},"8080")]),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"server_name"),s(" localhost")]),n("span",{class:"token punctuation"},";"),s(`
	  `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"charset"),s(" utf-8")]),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_connect_timeout"),s(),n("span",{class:"token number"},"180")]),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_send_timeout"),s(),n("span",{class:"token number"},"180")]),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_read_timeout"),s(),n("span",{class:"token number"},"180")]),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_set_header"),s(" Host "),n("span",{class:"token variable"},"$host")]),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_set_header"),s(" X-Forwarder-For "),n("span",{class:"token variable"},"$remote_addr")]),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"root"),s(" html")]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# \u8FD9\u91CC\u6307\u5B9A\u521A\u521A\u6211\u4EEC\u7684\u6587\u4EF6\u5939"),s(`
		
    `),n("span",{class:"token comment"},"# \u603B\u7684\u9879\u76EE\u8DEF\u7531\uFF0C\u6211\u5077\u61D2\u76F4\u63A5\u5199\u5728\u4E86\u540C\u4E00\u4E2A\u6587\u4EF6"),s(`
    `),n("span",{class:"token comment"},"# \u5982\u679C\u6709\u5F88\u591A\u53EF\u4EE5\u5728\u914D\u7F6E\u591A\u4E2A conf \u6587\u4EF6\uFF0C\u4F7F\u7528 include \u5173\u8054\u8FDB\u6765"),s(`
		`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"location"),s(" /")]),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"try_files"),s(),n("span",{class:"token variable"},"$uri"),s(),n("span",{class:"token variable"},"$uri"),s("/ /index.html")]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# \u8FD9\u91CC\u53EF\u4EE5\u7406\u89E3\u6307\u5B9A\u5230 html \u6587\u4EF6\u5939\u4E0B\u7684 index.html"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		
    `),n("span",{class:"token comment"},"# project1"),s(`
    `),n("span",{class:"token comment"},"# \u8FD9\u91CC\u5C31\u662F\u521A\u521A\u6211\u4EEC\u5728 vue \u9879\u76EE\u4E2D config/index.js \u7684\u914D\u7F6E build.assetsPublicPath\uFF0C"),s(`
    `),n("span",{class:"token comment"},"# \u4E5F\u662F vue \u9879\u76EE\u4E2D\u914D\u7F6E\u7684 router \u4E2D\u7684 base"),s(`
		`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"location"),s(" ^~ /project1")]),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"try_files"),s(),n("span",{class:"token variable"},"$uri"),s(),n("span",{class:"token variable"},"$uri"),s("/ /project1/index.html")]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# \u8FD9\u91CC\u53EF\u4EE5\u7406\u89E3\u6307\u5B9A\u5230 html \u6587\u4EF6\u5939\u4E0B project1 \u6587\u4EF6\u5939 \u7684 index.html"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		
    `),n("span",{class:"token comment"},"# project2"),s(`
    `),n("span",{class:"token comment"},"# \u8FD9\u91CC\u662F\u9879\u76EE\u4E8C\u7684\u914D\u7F6E"),s(`
		`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"location"),s(" ^~ /project2")]),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"# "),s(`
      `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"try_files"),s(),n("span",{class:"token variable"},"$uri"),s(),n("span",{class:"token variable"},"$uri"),s("/ /project2/index.html")]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# \u8FD9\u91CC\u53EF\u4EE5\u7406\u89E3\u6307\u5B9A\u5230 html \u6587\u4EF6\u5939\u4E0B project2 \u6587\u4EF6\u5939 \u7684 index.html"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		
    `),n("span",{class:"token comment"},"# \u8FD9\u91CC\u662F project1 \u914D\u7F6E\u9700\u8981\u8C03\u7528\u7684\u63A5\u53E3"),s(`
		`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"location"),s(" /api/pro1")]),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"# \u8FD9\u91CC\u5C31\u662F\u5728 vue \u9879\u76EE\u4E2D prod.env.js \u7684\u914D\u7F6E BASE_API "),s(`
			`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_redirect"),s(),n("span",{class:"token boolean"},"off")]),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_set_header"),s(" Host "),n("span",{class:"token variable"},"$host")]),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_set_header"),s(" X-Real-IP "),n("span",{class:"token variable"},"$remote_addr")]),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_set_header"),s(" X-Forwarded-For "),n("span",{class:"token variable"},"$proxy_add_x_forwarded_for")]),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_pass"),s(" http://p1_server")]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"# \u6B64\u5904\u7684 p1_server \u5BF9\u5E94\u7684\u4E0A\u9762\u7684\u914D\u7F6E upstream p1_server {}\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u505A\u96C6\u7FA4\uFF0C\u6211\u7528\u4E0D\u5230\uFF0C\u5C31\u7B80\u5355\u914D\u7F6E\u4E86"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
        
    `),n("span",{class:"token comment"},"# \u8FD9\u91CC\u662F project1 \u914D\u7F6E\u9700\u8981\u8C03\u7528\u7684\u63A5\u53E3"),s(`
    `),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"location"),s(" /api/pro2")]),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"# \u8FD9\u91CC\u5C31\u662F\u5728 vue \u9879\u76EE\u4E2D prod.env.js \u7684\u914D\u7F6E BASE_API"),s(`
			`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_redirect"),s(),n("span",{class:"token boolean"},"off")]),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_set_header"),s(" Host "),n("span",{class:"token variable"},"$host")]),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_set_header"),s(" X-Real-IP "),n("span",{class:"token variable"},"$remote_addr")]),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_set_header"),s(" X-Forwarded-For "),n("span",{class:"token variable"},"$proxy_add_x_forwarded_for")]),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token directive"},[n("span",{class:"token keyword"},"proxy_pass"),s(" http://p2_server")]),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"# \u6B64\u5904\u7684 p2_server \u5BF9\u5E94\u7684\u4E0A\u9762\u7684\u914D\u7F6E upstream p2_server {}\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u505A\u96C6\u7FA4\uFF0C\u6211\u7528\u4E0D\u5230\uFF0C\u5C31\u7B80\u5355\u914D\u7F6E\u4E86"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"# ..."),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"# ..."),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("ul",null,[n("li",null,[s("\u6700\u540E\u8D34\u51FA\u6211\u4FEE\u6539\u7684 "),n("code",null,"index.html"),s(" \u7684\u4EE3\u7801")])]),n("p",null,"\u56E0\u4E3A\u6211\u662F\u8FFD\u52A0\u7684\uFF0C\u6240\u4EE5\u76F4\u63A5\u8D34\u51FA\u6211\u8FFD\u52A0\u7684\u4EE3\u7801\uFF0C\u5176\u4ED6\u7684\u91C7\u7528 \u2026"),n("pre",{class:"language-html"},[n("code",{class:"language-html"},[s(`...
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("em")]),n("span",{class:"token punctuation"},">")]),s("Thank you for using nginx."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("em")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token comment"},"<!-- \u539F\u7248\u6587\u4EF6\u7684\u4F4D\u7F6E -->"),s(`

`),n("span",{class:"token comment"},"<!-- start: \u8FFD\u52A0-->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("hr")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/project1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u9879\u76EE\u4E00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),s(" | "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/project2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u9879\u76EE\u4E8C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token comment"},"<!-- end: \u8FFD\u52A0-->"),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("body")]),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token comment"},"<!-- \u539F\u7248\u6587\u4EF6\u7684\u4F4D\u7F6E -->"),s(`
`)])]),n("h2",{id:"\u6700\u540E\u7684\u8C03\u8BD5",tabindex:"-1"},[s("\u6700\u540E\u7684\u8C03\u8BD5 "),n("a",{class:"header-anchor",href:"#\u6700\u540E\u7684\u8C03\u8BD5","aria-hidden":"true"},"#")]),n("p",null,[s("\u6240\u6709\u7684\u914D\u7F6E\u5B8C\u6210\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u542F\u52A8 "),n("code",null,"nginx"),s(" \u4E86\uFF0C\u8FD9\u4E2A\u4E0D\u4F1A\u7684\u8BF7\u81EA\u884C\u89E3\u51B3\u4E86\u3002")]),n("p",null,[s("\u542F\u52A8\u6210\u529F\uFF0C\u6211\u4EEC\u5728\u6D4F\u89C8\u5668\u8F93\u5165 "),n("code",null,"http://localhost:8080"),s(" \u6211\u4EEC\u5C31\u53EF\u4EE5\u770B\u5230\uFF0C")]),n("p",null,[s("\u70B9\u51FB\u9879\u76EE\u4E00\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u94FE\u63A5\u53D8\u4E3A "),n("code",null,"http://localhost:8080/project1")]),n("p",null,[s("\u70B9\u51FB\u9879\u76EE\u4E8C\uFF0C\u94FE\u63A5\u53D8\u4E3A "),n("code",null,"http://localhost:8080/project2"),s("\uFF0C\u5B8C\u5168\u7B26\u5408\u6211\u4EEC\u7684\u671F\u671B\uFF0C\u90A3\u5C31\u6210\u529F\u4E86\u3002")]),n("p",null,[n("strong",null,"[\u5F3A\u884C\u89E3\u91CA\u4E00\u4E0B\u7384\u5B66]"),s(" \u90A3\u5929\u914D\u7F6E\u597D\u4E86\uFF0C\u4E00\u542F\u52A8\u5C31\u62A5\u9519\uFF0C\u5F04\u7684\u6211\u6700\u540E\u653E\u5F03\u4E86\u3002\u4F46\u662F\u7B2C\u4E8C\u5929\uFF0C\u51C6\u5907\u5728\u68C0\u67E5\u4E0B\uFF0C\u4E00\u542F\u52A8\u7ADF\u7136\u5168\u597D\u4E86\uFF0C\u6211\u90FD\u4E00\u8138\u61F5\u903C\u554A\uFF01 \u5982\u679C\u4F60\u4E5F\u9047\u5230\u548C\u6211\u4E00\u6837\u7684\u95EE\u9898\uFF0C\u5148\u653E\u653E\uFF0C\u8BF4\u4E0D\u5B9A\u9694\u5929\u5C31\u597D\u4E86\u3002\u{1F604}")])],-1),v="\u4F7F\u7528 nginx \u540C\u57DF\u540D\u4E0B\u90E8\u7F72\u591A\u4E2A vue \u9879\u76EE\uFF0C\u5E76\u4F7F\u7528\u53CD\u5411\u4EE3\u7406",_="2022-02-23T00:00:00.000Z",x="\u672C\u6587\u9996\u53D1\u4E8E2019/02/27\uFF0C\u53EF\u80FD\u4E0E\u73B0\u5728\u7684\u6280\u672F\u6709\u4E9B\u51FA\u5165\u3002",b="\u65E7",f="12\u5206\u949F",w=[{property:"og:title",content:"\u4F7F\u7528 nginx \u540C\u57DF\u540D\u4E0B\u90E8\u7F72\u591A\u4E2A vue \u9879\u76EE\uFF0C\u5E76\u4F7F\u7528\u53CD\u5411\u4EE3\u7406"}],j={setup(k,{expose:t}){const a={title:"\u4F7F\u7528 nginx \u540C\u57DF\u540D\u4E0B\u90E8\u7F72\u591A\u4E2A vue \u9879\u76EE\uFF0C\u5E76\u4F7F\u7528\u53CD\u5411\u4EE3\u7406",date:"2022-02-23T00:00:00.000Z",subtitle:"\u672C\u6587\u9996\u53D1\u4E8E2019/02/27\uFF0C\u53EF\u80FD\u4E0E\u73B0\u5728\u7684\u6280\u672F\u6709\u4E9B\u51FA\u5165\u3002",tag:"\u65E7",duration:"12\u5206\u949F",meta:[{property:"og:title",content:"\u4F7F\u7528 nginx \u540C\u57DF\u540D\u4E0B\u90E8\u7F72\u591A\u4E2A vue \u9879\u76EE\uFF0C\u5E76\u4F7F\u7528\u53CD\u5411\u4EE3\u7406"}]};return t({frontmatter:a}),c({title:"\u4F7F\u7528 nginx \u540C\u57DF\u540D\u4E0B\u90E8\u7F72\u591A\u4E2A vue \u9879\u76EE\uFF0C\u5E76\u4F7F\u7528\u53CD\u5411\u4EE3\u7406",meta:[{property:"og:title",content:"\u4F7F\u7528 nginx \u540C\u57DF\u540D\u4E0B\u90E8\u7F72\u591A\u4E2A vue \u9879\u76EE\uFF0C\u5E76\u4F7F\u7528\u53CD\u5411\u4EE3\u7406"}]}),(d,m)=>{const e=o;return r(),p(e,{frontmatter:a},{default:l(()=>[u]),_:1})}}};export{_ as date,j as default,f as duration,w as meta,x as subtitle,b as tag,v as title};
