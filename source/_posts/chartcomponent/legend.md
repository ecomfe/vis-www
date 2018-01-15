---
title: 图例

---

## 图例介绍

图例是图表中对内容区元素的注释、用不同形状、颜色、文字等 来标示不同数据列，通过点击标示可以显示或隐藏该数据列

图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。



图例虽然不是图表中的主要信息、却是了解图表信息的钥匙

图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。

离散型数据包括横向排列和纵向排列，连续型数据包括连续图例。连续型数据通过渐变色来展示数据大小的变化。

位置：支持自定义放置，默认放置位置为右上方；
样式：颜色标签和数据名称，多数据图例顺序排列；
交互：根据场景需要，图例可支持交互操作，点击则显示或隐藏对于数据图表；

## 图例位置

图例一般放在图表的底部、也可以放在图表的侧面、同一页面的图例位置保持一致，可以横排也可以纵排摆放。所有图表类型的排列方式要统一，所以要考虑整体的图表空间是适合横向排列，还是纵向排列。

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
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:22.6%">
	    <img class="article-look-content" src="./charts_sign_img03.png">
	</div>
</div>
<br>
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:13.63%">
	    <img class="article-look-content" src="./charts_sign_img04.png">
	</div>
</div>
<br>


## 交互
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:8%">
	    <img class="article-look-content" src="./charts_sign_img05.png">
	</div>
</div>
<br>


## 图例注意事项

双轴图包含了2种图表类型，不同类型的图例样式要有所区分。如下图例子中，最新成交价和预购队列的图例样式是不一样的


<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:65%">
	    <iframe class="article-look-content" 
	    src="http://www.echartsjs.com/gallery/view.html?c=dynamic-data">
	    </iframe>  
	</div>
</div>

图例要要注意视情况使用，当图表只有一种数据信息时，用图表标题说明数据信息即可。建议此时不要加上图例。

