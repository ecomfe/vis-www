---
title: 散点图
subtitle: Scatter Plot

---

## 介绍

散点图在直角坐标系显示数据的两个变量（X和Y轴）之间的关系，数据显示为点的集合，适合用于在不考虑时间的情况下比较大量的数据点。散点图通常用来识别两个变量之间的相关性或用来观察他们的关系，从而发现某种趋势，对于查找异常值或理解数据分布也很有效。如下图某个班级学生身高和体重的分布状况。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xSkCyUwKNG&v=1">
	    </iframe>
	</div>
</div>

散点图会显示不同类型的相关性，相关性即变量之间的关系。通常有正相关、负相关、不相关三种相关性。

+ 正相关：数据点从低x、y值的点到高x、y值，一个变量增加，另一个变量增加。

+ 负相关：数据点从高x、y值的点到低x、y值，一个变量增加，另一个变量减少。

+ 不相关：数据没有明显的方向性，一个变量变化对另一个没有影响。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:29.634146%">
	    <img class="article-look-content" src="./scatter5.jpg">
	</div>
</div>

需要注意的是，散点图能够有效的说明两个变量之间的相关性，但是并不能有力地证明其中存在因果关系。例如广告投放量和点击率是正相关的，但是不能说点击率高一定是因为广告投放量多造成的。但是，如果有明显的正相关性，就有足够的理由去增加投放量，然后再去观察数据。

<div  class="datatype" style="overflow:hidden" width="180px">
<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适合的数据类型</p>
<table class="lefttable" style="width: 40%; float:left; margin-right:15px">
	<tr>
		<td> </td>
		<td>X</td>
        <td>Y</td>
	</tr>
	<tr>
		<td>A</td>
		<td>30</td>
        <td>15</td>
	</tr>
	<tr>
		<td>B</td>
		<td>20</td>
        <td>17</td>
	</tr>
	<tr>
		<td>C</td>
		<td>23</td>
        <td>13</td>
	</tr>
</table>

<div class="morechart" style="margin-top: 150px">
		<p style="font-size:14px;font-weight:500;margin: 0 0 8px 0">类似图表</p>
		<a href="<%- url_for('chartusage/bubble/') %>" style="display:block;margin: 5px 0;font-size:12px">气泡图</a>
		</div>


</div>

## 散点图的使用建议

1、如果一个散点图没有显示变量之间的任何关系，那么或许该图表类型不是此数据的最佳选择。

2、如果数据包含不同系列，可以给不同系列使用不同的颜色，例如蓝色代表男性，红色代表女性，并增加图例标注出蓝色代表的含义。可以区分了解男女不同性别身高和体重的分布状况。还可以分别添加每个系列平均值的辅助线，可以更好的理解数据的分布情况，如图中女生体重高于平均值的比低于平均值的少。


<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xBy9E2oufM">
	    </iframe>
	</div>
</div>

在观察两个变量之间的关系时，趋势线是非常有用的，趋势线的形状走向解释了两个变量之间的关系类型，还可以用来预测未来的值。但需要注意的是趋势线最可只能使用两条，以免干扰正常的数据的阅读。

3、散点图只有有足够多的数据点，并且数据之间有相关性时才能呈现很好的结果。如果一份数据只有极少的信息或者数据间没有相关性，那么绘制一个很空的散点图和不相关的散点图都是没有意义的。


## 更多示例


<div class="more-charts-example">
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=xByIYsbykb">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./scatter1.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=scatter-large">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./scatter2.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=scatter-weibo">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./scatter3.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=scatter-weibo">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./scatter4.png">
				</div>
			</div>
		</a>
	</div>