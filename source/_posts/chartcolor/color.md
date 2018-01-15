---
title: 图表配色

---

## 配色指南

<b>标准色: </b>通过整体颜色规范提取和增加，提炼出 6 个标准色，颜色使用较少时，首选标准色；

分别为：<code>#60acfc 100%</code> 、<code>#32d3eb 100%</code> 、<code>#5bc49f 100%</code> 、<code>#feb64d 100%</code> 、<code>#ff7c7c 100%</code> 、<code>#9287e7 100%</code>

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:12.90%">
	    <img class="article-look-content" src="./charts_color_img01.png">
	</div>
</div>

<b>基准色: </b>通过标准色扩展出 24个基准色，相互链接组成基准色环，如果图表用色数量较多，标准色无法满足颜色要求，可以从基准色中进行拓展与标准色近似的色值。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:10%">
	    <img class="article-look-content" src="./charts_color_img02.png">
	</div>
</div>

<b>扩展色: </b>基础色相可以通过叠加 20% 白或者 10% 黑来扩展出不同明度的颜色，应用于颜色更加丰富的使用场景。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:15.545%">
	    <img class="article-look-content" src="./charts_color_img03.png">
	</div>
</div>

## 配色方案

为了方便特定场景下的图表样式，我们归纳了一下几个配色方案建议以供参考。

  + 颜色对比型：推荐图表颜色之间对比较为明显的场景下使用；
  + 冷色：推荐图表偏冷色系的情况使用； 
  + 暖色：推荐图表偏暖色系的情况使用。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:34.113%">
	    <img class="article-look-content" src="./charts_color_img04.png">
	</div>
</div>

## 配色示例

<b>多色使用</b>

柱状图示例：

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:28.18%">
	    <img class="article-look-content" src="./charts_color_img05.png">
	</div>
</div>

线性图示例：
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:25.91%">
	    <img class="article-look-content" src="./charts_color_img06.png">
	</div>
</div>

## 透明度使用

在线性面积图表中，也要重视透明度这个因素。通常使用透明度时，图表会有很多堆叠层次，我们需要做到使每一个前景层都能够在背景层之上良好地显示，并且不产生相互干扰。此时建议数据之间选择不同色相，面积区域使用 10% 不透明的标准色，建议数据叠加数量不超过4个，超过 4 个不建议使用线下面积图表；

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:27%">
	    <img class="article-look-content" src="./charts_color_img07.png">
	</div>
</div>

## 渐变色使用

有些情况下图表可以使用渐变色填充图表来表现特定场景，此时注意颜色选取为同一色系，渐变层级不宜过大，整体颜色需要与平台保持协调一致。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:31.936%">
	    <img class="article-look-content" src="./charts_color_img08.jpg">
	</div>
</div>

## 背景色使用

图表背景颜色必须要很好的衬托图表主体，又不产生喧宾夺主的效果。目前常见的背景色有深色系和浅色系两种。

<b>深色系</b>

  + 优点：更好的凸显主体，建立良好的视觉层次，反应图表内容，视觉吸引力强；
  + 缺点：可读性低、对配色水平要求较高； 

<b>浅色系</b>

  + 优点：适用性广，可读性高；
  + 缺点：图表内容不易聚焦； 

背景色建议：<code>#ffffff</code><code>#f7f7f7</code><code>#333333</code>

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:21.13%">
	    <img class="article-look-content" src="./charts_color_img09.jpg">
	</div>
</div>

背景色以及辅助元素还不能与图表内容太接近。文字、坐标的颜色也要遵循明显易读的基本准则。不然会给用户带来很大的障碍，如下图是两个反例：

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:60%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xHySlBkIEM&v=1">
	    </iframe>
	</div>
</div>
