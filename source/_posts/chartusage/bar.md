---
title: 柱状图
subtitle: Bar Chart

---

## 介绍

柱状图是最常见的图表类型，通过使用水平或垂直方向柱子的高度来显示不同类别的数值，其中柱状图的一个轴显示正在比较的类别，而另一个轴代表对应的刻度值。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xS18jqmX4f">
	    </iframe>
	</div>
</div>

<div  class="datatype" style="overflow:hidden" width="180px">
<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适合的数据类型</p>
<table class="lefttable" style="float:left; margin-right:15px">
	<tr>
		<td>A</td>
		<td>18</td>
	</tr>
	<tr>
		<td>B</td>
		<td>30</td>
	</tr>
	<tr>
		<td>C</td>
		<td>12</td>
	</tr>
	<tr>
		<td>D</td>
		<td>20</td>
	</tr>
</table>
</div>


<div class="morechart" style="margin-top: 150px">
		<p style="font-size:14px;font-weight:500;margin: 0 0 8px 0">类似图表</p>
		<a href="<%- url_for('chartusage/bi-directional-bar/') %>" style="display:block;margin: 5px 0;font-size:12px">双向柱状图</a>
		<a href="<%- url_for('chartusage/grouped-bar/') %>" style="display:block;margin: 5px 0;font-size:12px">分组柱状图</a>
		<a href="<%- url_for('chartusage/stacked-bar/') %>" style="display:block;margin: 5px 0;font-size:12px">堆叠柱状图</a>
	</div>


纵向柱状图的柱是垂直方向的，横向柱状图的柱是水平方向的，又称条形图。条形图与横向柱状图表达数据的形式是一样的，不过，当图表的数据标签很长或者有超过10个项目进行比较时，横向柱状图会无法完全显示完标签，或者只能倾斜展示，影响美观。因此当数据标签过长时，选择用条形图可以获得比较好的展示效果。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xByXtUE7Vz">
	    </iframe>
	</div>
</div>

## 柱状图的使用建议

1、避免使用太多颜色，一般情况一个柱状图（条形图）表示一组相同的度量，所以建议使用相同的颜色或同一颜色的不同色调。如果需要强调某个数据时，可以使用对比色或者变化色调来突出显示有意义的数据点。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xByYRlN7Ef">
	    </iframe>
	</div>
</div>

2、柱状图柱子间的宽度和间隙要适当。当柱子太窄时，用户的视觉可能会集中在两个柱中间的负空间，而这里是不承载任何数据的。合理的宽度和间隙应该是单个柱子的宽度不小于柱间间隙的两倍。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:29.634146%">
	    <img class="article-look-content" src="./bar01.jpg">
	</div>
</div>

3、Y轴数据应该从0基线开始，以恰当地反映数值。如果展示的是被截断的数据，那很可能会误导观众做出错误的判断。例如左侧图表显示出的数据结果是2017年收入是2014年收入的五倍，而实际上如右侧图表完整显示的数据表明2017年收入相对于2014年其实只提升了25%。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:29.634146%">
	    <img class="article-look-content" src="./bar03.jpg">
	</div>
</div>

4、对多个数据系列排序时，如果不涉及到日期等特定数据，最好能符合一定的逻辑用直观的方式引导用户更好的查看数据。可以通过升序或降序排布，例如按照数量从多到少来对数据进行排序，也可以按照字母顺序等来排布。总之，按照逻辑排序可以一定程度上引导人们更好地阅读数据。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xHJhWhGm4M">
	    </iframe>
	</div>
</div>

5、一般情况下不建议使用三维柱状图，与三维饼图一样，对于数据传达不太精准，甚至还要辛苦用户去猜测到底哪个才是数据的顶端。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:29.634146%">
	    <img class="article-look-content" src="./bar04.jpg">
	</div>
</div>


## 更多示例

<div class="more-charts-example">
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=bar-waterfall">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./1bar.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=xSJMmdH9EM">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./2bar.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=xHyg33VCl">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./3bar.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=xByHHV40b">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./4bar.png">
				</div>
			</div>
		</a>
	</div>


