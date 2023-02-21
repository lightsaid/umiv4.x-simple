# umijs v4 simple

- umi 没有直接封装 axios 因此需要安装一下
npm i umi-request --save

- umi max 有对axios封装，因此提供了
import { request, useRequest } from 'umi';


- 安装 umi 插件，开启dva
npm i -D @umijs/plugins