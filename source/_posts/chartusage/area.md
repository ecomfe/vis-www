---
title: 面积图
subtitle: Area Graph
tags:
    - 面积
    - 趋势
    - 波动
---

<h2 class="article-invisibleh2">介绍</h2>

面积图又叫区域图，与折线图很相近，都可以用来展示随着连续时间的推移数据的变化趋势。区别在于，面积图在折线与类别数据的水平轴（X轴）之间填充颜色或者纹理，形成一个面表示数据体积。相对于折线而言，被填充的区域可以更好的引起人们对总值趋势的注意，所以面积图主要用于传达趋势的大小，而不是确切的单个数据值。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="https://gallery.echartsjs.com/view-lite.html?cid=area-simple">
	    </iframe>
	</div>
</div>

<div class="datatype" style="overflow:hidden" width="180px">
	<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适合的数据类型</p>
	<table class="lefttable" style="float:left; margin-right:15px">
		<tr>
			<td>X</td>
			<td>Y1</td>
		</tr>
		<tr>
			<td>1</td>
			<td>30</td>
		</tr>
		<tr>
			<td>2</td>
			<td>10</td>
		</tr>
		<tr>
			<td>3</td>
			<td>20</td>
		</tr>
	</table>

<div class="morechart" style="margin-top: 150px">
		<p style="font-size:14px;font-weight:500;margin: 0 0 8px 0">类似图表</p>
		<a href="/chartusage/line/" style="display:block;margin: 5px 0;font-size:12px">折线图</a>
		<a href="/chartusage/stackedarea/" style="display:block;margin: 5px 0;font-size:12px">堆叠面积图</a>
	</div>
</div>

## 面积图的使用建议

1、面积图要用填充区域来展示数据，当图表上有多个图层时，要尽量确保数据不要重叠。如果无法避免重叠，可以通过将颜色和透明度设置为适当的值，使重叠的数据图可以变得可读。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="https://gallery.echartsjs.com/view-lite.html?cid=xHJ-4tL84M">
	    </iframe>
	</div>
</div>

2、面积图适合用来展示二到三组数据，建议最多不要展示超过四组数据系列，否则就如下方错误示例，数据系列过多而导致无法数据辨识，因此要避免在需要比较多个类别和确切的数据值的情况下使用面积图。超过三个系列的非堆叠面积图表是很难阅读的。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="https://gallery.echartsjs.com/view-lite.html?cid=xHyNDxOo4M">
	    </iframe>
	</div>
</div>

3、当数据值相距很远时，区域是模糊不清的，此时不太适合使用面积图展示。如下方错误示例虽然仔细分析能确定只展示了两个类别，乍一看，很可能会误以为图表上显示三种不同的颜色。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="https://gallery.echartsjs.com/view-lite.html?cid=xSkO64PIEG&v=1">
	    </iframe>
	</div>
</div>

## 更多示例


<div class="more-charts-example">
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=area-rainfall">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./1area.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=area-simple">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./2area.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=xSkHPwVPeg">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./3area.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=christmas-children-population">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./4area.png">
				</div>
			</div>
		</a>
	</div>
</div>

