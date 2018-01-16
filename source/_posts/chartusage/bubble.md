---
title: 气泡图
subtitle: Bubble Chart

---

## 介绍

气泡图是显示变量之间相关性的一种图表。与散点图类似。在直角坐标系中显示数据的两个变量（X和Y轴）之间的关系，数据显示为点的集合。与散点图不同的是，气泡图是一个多变量图，它增加了第三个数值即气泡大小的变量，在气泡图中，较大的气泡表示较大的值。可以通过气泡的位置分布和大小比例，来分析数据的规律。


<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:60%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xHkRpZuY4z&v=1">
	    </iframe>
	</div>
</div>

<div  class="datatype" style="overflow:hidden" width="180px">
<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适合的数据类型</p>
<table class="lefttable" style="width: 40%; float:left; margin-right:15px">
	<tr>
		<td>X</td>
		<td>Y</td>
        <td>Z</td>
	</tr>
	<tr>
		<td>1</td>
		<td>30</td>
        <td>15</td>
	</tr>
	<tr>
		<td>2</td>
		<td>20</td>
        <td>17</td>
	</tr>
	<tr>
		<td>3</td>
		<td>23</td>
        <td>13</td>
	</tr>
</table>

<div class="morechart" style="margin-top: 150px">
		<p style="font-size:14px;font-weight:500;margin: 0 0 8px 0">类似图表</p>
		<a href="<%- url_for('chartusage/scatter/') %>" style="display:block;margin: 5px 0;font-size:12px">散点图</a>
	</div>
</div>

## 气泡图的使用建议

1、当数据具有3个序列、特征及相关值，使用气泡图是一个不错的选择。如下图气泡的位置显示了代码提交的日期、具体的时间点，气泡的大小说明了提交的代码量。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=scatter-punchCard">
	    </iframe>
	</div>
</div>

2、我们还可以给气泡加入颜色编码。例如下图用不同的颜色将三个地区的空气数据分类标注，红色代表北京，黄色代表上海、蓝色代表广州，可以直观地对比分析三地的空气质量情况。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xr1kK7LoEf&v=1">
	    </iframe>
	</div>
</div>

3、气泡图还经常用于和地图结合，其中，x轴和y轴是经度和纬度的数据定位，气泡的大小可以表明该位置数量的多少。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=scatter-world-population">
	    </iframe>
	</div>
</div>


## 更多示例

<div class="more-charts-example">
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=scatter-painter-choice">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./bubble1.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=scatter-polar-punchCard">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./bubble2.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=bubble-gradient">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./bubble3.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=scatter-life-expectancy-timeline">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./bubble4.png">
				</div>
			</div>
		</a>
	</div>
</div>