---
title: 折线图
subtitle: Line Chart
tags:
    - 折线
    - 趋势
    - 波动
---

## 介绍

折线图主要用来展示数据相随着时间推移的趋势或变化。折线图非常适合用于展示一个连续的二维数据，如某网站访问人数或商品销量价格的波动。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xB1kG1rLEG&v=1">
	    </iframe>
	</div>
</div>

<div  class="datatype" style="overflow:hidden" width="180px">
<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适合的数据类型</p>
<table class="lefttable" style="float:left; margin-right:15px">
	<tr>
		<td>X</td>
		<td>Y</td>
	</tr>
	<tr>
		<td>1</td>
		<td>0</td>
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
		<a href="/chartusage/area/" style="display:block;margin: 5px 0;font-size:12px">面积图</a>
		<a href="/chartusage/stackedarea/" style="display:block;margin: 5px 0;font-size:12px">堆叠面积图</a>
		</div>


</div>

折线图除了展示某个事情发展的趋势，还可以用来比较多个不同的数据序列。如下图，可以通过对比同时间段的三种商品的销量，分析哪一种商品的销量最好。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xSkBiMSU4M&v=1">
	    </iframe>
	</div>
</div>

折线图是两个数据点之间用线连接起来，为了追求美观或特殊的效果，还可以如上图将两点之间用曲线连接，这种图又叫曲线图或样条图样条。样条图与折线图用法相同，只是每个数据点之间的绘制是曲线的。

## 折线图的使用建议

1、使用实线绘制数据线，首先要保证能够的区分数据线和坐标轴线，并且要尽力要所有的数据清晰可识别。

2、建议不要绘制4条以上的折线，如下图错误的示例，线都折叠在一起并且又没有明显的对比，整张图表就会混乱并难以阅读。
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xBJzdEItVz&v=1">
	    </iframe>
	</div>
</div>


3、不建议使用过多的装饰来区分图表，图例虽然可以帮助区分不同数据系列，但如下图使用过多种类的图例有时会让你分心。
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xS1Tbdr8EG&v=1">
	    </iframe>
	</div>
</div>


4、展示折线图的数据时，要避免刻意的歪曲趋势。如下图，左图过于扁平化掩盖了想传达的信息，右图过于夸大趋势。要根据展示数据波动的参考单位，做有意义的波动分析。正确的数据高度是线约占Y轴高度的2/3
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:24.512195%">
	    <img class="article-look-content" src="./line01.jpg">
	</div>
</div>


## 更多示例

<div class="more-charts-example">
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=dynamic-data2">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./1line.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=line-marker">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./2line.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=line-step">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./3line.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=line-aqi">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./4line.png">
				</div>
			</div>
		</a>
	</div>
</div>
