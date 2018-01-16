---
title: 分组柱状图
subtitle: Grouped Bar Chart
tags:
	- 分组
	- 柱状
	- 关系
---

## 介绍

分组柱状图也被称为聚集柱状图。当两个或多个数据序列并排显示并在同一轴上的类别下分组时，将使用分组柱状图。相当于包含带有两个或更多图表的简单的条形图。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:60%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xr13FAH54f&v=1">
	    </iframe>
	</div>
</div>

分组柱状图通常是用于将包含相同变量或类别的几个分组进行比较。像柱状图一样，每个柱的长度用于显示类别的数值，每个数据系列被分配一个单独的颜色或相同色系的不同饱和度，以区分它们，每组数据之间相互间隔并进行对比。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:65%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xry8WsXdOW&v=3">
	    </iframe>
	</div>
</div>

<div  class="datatype" style="overflow:hidden" width="180px">
<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适合的数据类型</p>
<table class="lefttable" style="width: 40%; float:left; margin-right:15px">
	<tr>
		<td> </td>
		<td>I</td>
        <td>II</td>
		 <td>III</td>
	</tr>
	<tr>
		<td>A</td>
		<td>10</td>
        <td>8</td>
		<td>20</td>
	</tr>
	<tr>
		<td>B</td>
		<td>8</td>
        <td>15</td>
		<td>17</td>
	</tr>
	<tr>
		<td>C</td>
		<td>14</td>
        <td>157</td>
		<td>17</td>
	</tr>
</table>

<div class="morechart" style="margin-top: 150px">
		<p style="font-size:14px;font-weight:500;margin: 0 0 8px 0">类似图表</p>
		<a href="/chartusage/bar" style="display:block;margin: 5px 0;font-size:12px">柱状图</a>
		<a href="/chartusage/bi-directional-bar" style="display:block;margin: 5px 0;font-size:12px">双向柱状图</a>
		<a href="/chartusage/stacked-bar" style="display:block;margin: 5px 0;font-size:12px">堆叠柱状图</a>
		</div>


</div>

## 分组柱状图的使用建议

1、如果每个分组中拥有的系列过多，数据的阅读难度就会越增加，因此不建议每个分组中包含过多的系列。在系列较多时，可考虑使用堆叠柱状图。

2、每两个分组之间的间距要大于组内不同系列之间的间距，以免造成视觉上错误的归类和区分。

## 更多示例

<div class="more-charts-example">
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=multiple-y-axis">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./1group.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=xBk7TY_hWx">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./2group.png">
				</div>
			</div>
		</a>
	</div>
</div>