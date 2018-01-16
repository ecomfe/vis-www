---
title: 图例

---

## 介绍

图例是图表中对内容区元素的注释、用不同形状、颜色、文字等来标示不同数据列，通过点击对应数据列的标记，可以显示或隐藏该数据列。图例虽然不是图表中的主要信息、却是了解图表信息的钥匙。图例的设计方式建议如下：

  + 位置：与标题位置相配合，建议位置为图表底部或者右上角；
  + 样式：由颜色标签和数据名称组成，多数据图例顺序排列；
  + 交互：根据场景需要，图例可支持交互操作，点击控制显示或隐藏对应的数据列；

## 布局

图例一般放在图表的右上角、也可以放在图表的底部、同一页面中的所有图例位置保持一致，可以横排对齐也可以纵排对齐。还要综合考虑整体的图表空间是适合哪种摆放方式。当图表纵向空间紧张或者内容区量过大的时候、建议摆放在图表的下方。下面是几种图例的摆放方式：

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:76%">
	    <img class="article-look-content" src="./charts_sign_img01.png">
	</div>
</div>
<br>
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:25.2%">
	    <img class="article-look-content" src="./charts_sign_img02.png">
	</div>
</div>
<br>



## 样式

在深色系背景下、为了方便阅读，最好给图例下方加一个半透明的浅色背景层。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:22.6%">
	    <img class="article-look-content" src="./charts_sign_img03.png">
	</div>
</div>
<br>

图例的颜色标签有很多种设计方式、针对不同的图表、图例样式也会有所不同、例如下图：

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:13.63%">
	    <img class="article-look-content" src="./charts_sign_img04.png">
	</div>
</div>
<br>

根据场景需要，图例可支持交互操作，点击控制显示或隐藏对应的数据列；隐藏的图例建议设置一个40%透明度。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:8%">
	    <img class="article-look-content" src="./charts_sign_img05.png">
	</div>
</div>
<br>


## 图例注意事项

图例要要注意视情况使用，有些双轴图包含了2种图表类型，不同类型的图例样式要有所区分。如下图例子中，最新成交价和预购队列的图例样式是不一样的


<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:65%">
	    <iframe class="article-look-content" 
	    src="http://www.echartsjs.com/gallery/view.html?c=dynamic-data">
	    </iframe>  
	</div>
</div>

当图表只有一种数据信息时，用图表标题说明数据信息即可。建议此时不要加上图例。

