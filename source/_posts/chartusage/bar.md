---
title: 柱状图
subtitle: Bar Chart
tags:
    - 柱状
    - 比较
	- 条形
---

## 介绍
柱状图是最常见的图表类型，使用水平或垂直的柱子来显示不同类别之间的数值。柱状图的一个轴显示正在比较的类别，而另一个轴代表对应的刻度值。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view.html?cid=xS18jqmX4f">
	    </iframe>
	</div>
</div>

<div  class="datatype" style="overflow:hidden" width="180px">
<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适合的数据类型</p>
<table class="lefttable" style="float:left; margin-right:15px">
	<tr>
		<td>A</td>
		<
		>18</td>
	</tr>
	<tr>
		<td>B</td>
		<td>30</td>
	</tr>
	<tr>
		<td>C</td>
		<td>10</td>
	</tr>
	<tr>
		<td>D</td>
		<td>20</td>
	</tr>
</table>
<div class="morechart" style="margin-top: 150px">
	<p style="font-size:14px;font-weight:500;margin: 0 0 8px 0">类似图表</p>
	<a href="" style="display:block;margin: 5px 0;font-size:12px">折线图</a>
	<a href="" style="display:block;margin: 5px 0;font-size:12px">堆叠面积图</a>
</div>
</div>

纵向柱状图的柱是垂直方向的，横向柱状图又称条形图，柱是水平方向的。条形图与柱状图表达数据的形式是一样的，但当一个数据标签很长或者如果有超过10个项目进行比较时容易造成混乱，横向柱状图会因为标签太长而无法显示完全或者倾斜导致影响美观，所以此时选择使用条形图就可以获得比较好的展示效果。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view.html?cid=xByXtUE7Vz">
	    </iframe>
	</div>
</div>

## 柱状图的使用建议

1、避免使用太多颜色，因为一个柱状图（条形图）是表示相同的度量的，所以建议在一个图表中使用相同的颜色或不同色调的相同颜色。如果需要强调某个数据，可以选择对比色或者变化色调来突出显示有意义的数据点或随时间变化。
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view.html?cid=xByYRlN7Ef">
	    </iframe>
	</div>
</div>

2、柱状图柱子间的宽度和间隙要合适。当柱子太窄的时候，观众的视觉可能会集中在两个柱中间的负空间，而这里是不承载任何数据的。合理的宽度应该是柱的宽度不小于间隙的两倍。
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:46.341463%">
	    <img class="article-look-content" src="./bar01.jpg">
	</div>
</div>

3、从0基线开始y轴以恰当地反映数值。如果展示的是被截断的数据，那可能会误导观众做出错误的判断。例如，左一图表显示2017年收入是2014年收入的五倍，而实际上如右一图表显示2017年收入相对于2014年只提升了25%。
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:46.341463%">
	    <img class="article-look-content" src="./bar03.jpg">
	</div>
</div>
4、	对多个数据进行排序时，只要不涉及到日期等特定数据，最好能符合一定的逻辑用直观的方式引导读者查看数据。可以通过升序或降序来排布，例如按照数量从多到少来对地区进行排名，也可以按照字母顺序等来排布。
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view.html?cid=xHJhWhGm4M">
	    </iframe>
	</div>
</div>

5、一般情况下不建议使用三维柱状图，和三维饼图一样，对于数据的传达不太精准，而且还要辛苦用户猜测到底哪个才是数据的顶端。
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:46.341463%">
	    <img class="article-look-content" src="./bar04.jpg">
	</div>
</div>

## 更多示例

<div style="margin: 400px">

</div>
