---
title: 堆叠面积图
subtitle: Stacked Area Graph
tags:
    - 面积
    - 趋势
    - 部分
---

## 介绍
堆积面积图是一种特殊的面积图，可以用来比较在一个区间内的多个变量。堆叠面积图和面积图的区别在于，堆叠面积图每个数据系列的起点都是基于前一个数据系列绘制的，也就是每度量一行就要填满行与行之间的区域。

如果有多个数据系列，并想分析每个类别的部分到整体的关系，并展现部分量对于总量的贡献时，使用堆积面积图是非常合适的选择。例如下图显示某个销售员对总销售额的贡献。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xHySthj74z">
	    </iframe>
	</div>
</div>

<div  class="datatype" style="overflow:hidden" width="180px">
<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适合的数据类型</p>
<table class="lefttable" style="float:left; margin-right:15px">
	<tr>
		<td>X</td>
		<td>Y1</td>
        <td>Y2</td>
	</tr>
	<tr>
		<td>1</td>
		<td>30</td>
        <td>22</td>
	</tr>
	<tr>
		<td>2</td>
		<td>10</td>
        <td>18</td>
	</tr>
	<tr>
		<td>3</td>
		<td>20</td>
        <td>25</td>
	</tr>
</table>

<div class="morechart" style="margin-top: 150px">
		<p style="font-size:14px;font-weight:500;margin: 0 0 8px 0">类似图表</p>
		<a href="<%- url_for('chartusage/line/') %>" style="display:block;margin: 5px 0;font-size:12px">折线图</a>
		<a href="<%- url_for('chartusage/area/') %>" style="display:block;margin: 5px 0;font-size:12px">面积图</a>
		</div>

</div>

有两种不同的堆积面积图类型：

+ <b>传统的堆积面积图</b>：直接使用原始值堆叠，显示整个过程如何变化。
+ <b>百分比堆积面积图</b>：百分比堆积显示不同部分之间的关​​系如何随时间而变化。其中累积的总数不重要，重要的是显示出类别分布在整体中的作用。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xSyBN2i7Vf">
	    </iframe>
	</div>
</div>

## 堆叠面积图的使用建议

1、图表有重叠的数据时，类别数量越多，重叠越多，因此可见度越低。如果使用面积图（如下示例）时会因为系列的重叠而无法阅读。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xHyNDxOo4M">
	    </iframe>
	</div>
</div>

那同样的数据，换成使用堆叠面积图展示，则相对更容易阅读。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xBy02jDLVG">
	    </iframe>
	</div>
</div>

2、虽然多数据系列时堆叠面积图比面积图有更好的展示效果，但依然不建议堆叠面积图中包含过多数据系列，最好不要多于7个，以免数据难以辨识。

3、堆积面积图要展示部分和整体之间的关系，所以不能用于包含负值的数据的展示。

4、建议堆叠面积图中把变化量较大的数据放在上方，变化量较小的数据放在下方会获得更加的展示效果。

## 更多示例

<div class="more-charts-example">
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=area-stack">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./1sarea.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=xrkR0C8FVM&v=1">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./2sarea.png">
				</div>
			</div>
		</a>
	</div>
</div>
