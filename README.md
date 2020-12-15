# 中级软件实作

## 12/4 刘佳乐：   
1. 创建项目  
2. 已完成主页（index.html）

## 12/7 柳浩天：  
 简易版登录界面


## 12/7 姜智伦：  
  新闻(news)和新闻详情（newsinfo）界面基本框架  
  （专栏和新闻界面框架基本一致）
  
## 12/7 姜智伦
更新了一下news和newsinfo的页面文件，更改了一点布局，增加了链接到新闻详情页。


## 12/8 刘佳乐：   
已完成软件下载页面(software.html)  
解决了news.html和newsinfo.html的header部分bug

## 12/10 陈丽莎，张婉淳：
完成整个项目页面的跳转，实现登录，数据显示功能，创建数据库。
3dproject.rar文件为整合后的项目压缩包。
解压之后，
首先需要导入数据库文件（注意修改pool.js里面的数据库密码）
其次，通过nodejs环境运行app.js
然后通过网页输入127.0.0.1:（port）进入index.html页面。
除了index.html/app.js/pool.js之外，所有的index页面放在public文件夹下，所有的js/css/images文件放在assets文件夹下。

## 12/10 姜智伦
完成专栏页和专栏详情页

## 12/11 
### 11:57 刘佳乐
统一并优化了全部页面的header部分  
引入的bootstrap.css与bootstrap.min.css有冲突（应该是版本问题），斗胆注释掉新版bootstrap的重名样式，强行使用bootstrap.min.css样式（解决冲突最好的办法就是屏蔽它。。。
### 21:29 刘佳乐  
整出了softwareinfo.html

## 12/12
### 16：13 刘佳乐
开始完善页面的响应式布局，已完成header部分

## 12/13
### 9:03 姜智伦
修复页面中轮播部分的BUG问题  
  
### 21:22 刘佳乐
重新布局了index的news部分，整了些花样

### 23:32 刘佳乐
根据项目最新进展重新调整了目录。  
不开启服务器页面跳转没问题，样式没问题。  
<strong>但是开启服务器后，从index往前跳转页面没问题，但其他页面点击header部分的"DOWNLOADME!"无法跳回index!!!</strong>

## 12/14
### 9:35 刘佳乐
改善了news和newsinfo的布局和部分样式
### 19:45 刘佳乐
index整体已优化完成，除替换图片外不会再有任何改动
### 0:07 陈丽莎 张婉淳
更新了software.js,software_info.html,database.txt，软件详情内容显示数据库存储信息。  【目前数据库中存储软件信息的图片、描述，统一存储的是Pr的软件信息，后期可依据需求修改数据库文件】
### 0:07 张婉淳
解决了服务器下页面跳转问题（前端人员留意服务器挂载目录，根据服务器的目录在html写链接）  
/index.html  
/new/news.html  
/new/newsinfo.html  
/public/column.html  
/public/columninfo.html  
/soft/software.html  
/soft/softwareinfo.html

## 12/15
### 22:49 张婉淳
更新了software.js,software_info.html,database.txt（运行需重新导入数据库），安装教程从数据库读取
### 23:24 刘佳乐  
重新整理了一遍，综合了这几天的更新，目前的各个文件应该都是最新的了，请各位去下载到本地，检查检查自己负责的页面是否是最新的（我怕我有遗漏），有问题请先跟我说再进行更改
