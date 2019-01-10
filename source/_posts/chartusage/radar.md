---
title: 雷达图
subtitle: Radar Chart

---

<h2 class="article-invisibleh2">介绍</h2>

雷达图（Radar Chart）又被叫做蜘蛛网图，适用于显示三个或更多的维度的变量。雷达图是以在同一点开始的轴上显示的三个或更多个变量的二维图表的形式来显示多元数据的方法，其中轴的相对位置和角度通常是无意义的。


雷达图的每个变量都有一个从中心向外发射的轴线，所有的轴之间的夹角相等，同时每个轴有相同的刻度，将轴到轴的刻度用网格线链接作为辅助元素，连接每个变量在其各自的轴线的数据点成一条多边形。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="https://gallery.echartsjs.com/view-lite.html?cid=xH1-fnLcVG&v=1">
	    </iframe>
	</div>
</div>


雷达图对于查看哪些变量具有相似的值、变量之间是否有异常值都很有用。雷达图表也可用于查看哪些变量在数据集内得分较高或较低，因此非常适合显示性能（见下图）。同样，雷达图也常用于排名、评估、评论等数据的展示。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="https://gallery.echartsjs.com/view-lite.html?cid=xHJH93GqVf&v=1">
	    </iframe>
	</div>
</div>


如下图，某幼儿园上周资金流统计的示例中比较的“东西”是预算、开销。参与比较的六个方面是食品、玩具、绘本、医疗、门票、服饰。每个变量都是通过0到500之间的金额来比较的。只有玩具一项的支出超出了预算。而服饰花费低于远预算，使用雷达图，哪些方面超出或不足变得一目了然了。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="https://gallery.echartsjs.com/view-lite.html?cid=xrk6EfmqVf">
	    </iframe>
	</div>
</div>


<div  class="datatype" style="overflow:hidden" width="180px">
<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适合的数据类型</p>

<table class="lefttable" style="width: 40%; float:left; margin-right:15px">
<tr>
		<td> </td>
		<td>A</td>
        <td>B</td>
		<td>C</td>
        <td>D</td>
	</tr>
	<tr>
		<td>系列1</td>
		<td>30</td>
        <td>15</td>
		<td>20</td>
        <td>19</td>
	</tr>
	<tr>
		<td>系列2</td>
		<td>8</td>
        <td>17</td>
		<td>11</td>
        <td>15</td>
	</tr>

</table>

</div>

## 雷达图的使用建议

1、一个雷达图包含的多边形数量是有限的，如果有五个以上要评估的事物，无论是轮廓还是填充区域，都会产生覆盖和混乱，使得数据难以阅读。

2、变量太多会产生太多的轴，也会使图表变得混乱，因此，要保持雷达图的简单并限制其变量数量。

3、由于径向距离很难判断，所以虽然有网格线的参考，但是还是很难直观的比较图表内变量具体的值，如果需要的比较具体值话，建议使用线图。


## 更多示例

<div class="more-charts-example">
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=radar-aqi">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./1radar.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=radar-multiple">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./2radar.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=radar2">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./3radar.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=xSyBqEr6Z-">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./4radar.png">
				</div>
			</div>
		</a>
	</div>
</div>