---
title: 双向柱状图
subtitle: Bi-directional Bar
tags:
	- 柱状
	- 条形
	- 正负
---

## 介绍

双向柱状图多用于展示包含相反含义的数据的对比。其中图表的一个轴显示正在比较的类别，而另一轴代表对应的刻度值。

双向柱状图一般用于正负两份相反数据的对比。例如一周内个人收入和支出的统计，其中收入为正数，支出为负数。使用双向柱状图可以很明确的对收入和支出做出对比，并能从单个系列中分析收入和支出的数值及波动。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xByf1W67VM">
	    </iframe>
	</div>
</div>

双向柱状图可分为垂直方向的双向柱状图（如上图）和水平方向的双向柱状图（又叫正负条形图，如下图），例如一个客户满意度的调查数据分析中，有正面评价和负面评价，这很适合用正负条形图，所有数据在中间对齐，正面的评价数据分布在右侧，负面的评价数据分布在左侧。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xHJ1un374z">
	    </iframe>
	</div>
</div>

<div  class="datatype" style="overflow:hidden" width="180px">
<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适合的数据类型</p>
<table class="lefttable" style="float:left; margin-right:15px">
	<tr>
		<td>A</td>
		<td>-10</td>
        <td>13</td>
	</tr>
	<tr>
		<td>B</td>
		<td>-8</td>
        <td>15</td>
	</tr>
	<tr>
		<td>C</td>
		<td>-14</td>
        <td>11</td>
	</tr>
</table>

<div class="morechart" style="margin-top: 150px">
		<p style="font-size:14px;font-weight:500;margin: 0 0 8px 0">类似图表</p>
		<a href="/chartusage/bar" style="display:block;margin: 5px 0;font-size:12px">柱状图</a>
		<a href="/chartusage/grouped-bar" style="display:block;margin: 5px 0;font-size:12px">分组柱状图</a>
		<a href="/chartusage/stacked-bar" style="display:block;margin: 5px 0;font-size:12px">堆叠柱状图</a>
	</div>


</div>

## 双向柱状图的使用建议

1、双向柱状图正向和负向的数据具有对比性，因此一般选用差值较大的具有对比性的颜色。

2、永远不要在0基线的右边画负值的水平条行图或在0基线的上边画负值的柱子，以免和常识违背造成误解。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:29.634146%">
	    <img class="article-look-content" src="./bi-directional-bar01.jpg">
	</div>
</div>

3、双向柱状图多用于展示含相反含义的数据，因此要避免不具有正负含义的数据使用而造成的误解。 如下图人口统计图表中使用双向柱状图一边绘制男性一边绘制女性，只是单纯的两类不同数据的对比，并不存在负数。这种情况将两个数据序列绘制成一个分组柱状图是更合适的。
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:24.512195%">
	    <img class="article-look-content" src="./bi-directional-bar02.jpg">
	</div>
</div>

