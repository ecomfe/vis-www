---
title: 堆叠柱状图
subtitle: Stacked Bar Chart

---

<h2 class="article-invisibleh2">介绍</h2>

堆叠柱状图是柱状图的扩展，不同的是，柱状图的数据值为并行排列，堆叠柱图则是一个个叠加起来的。它可以展示每一个分类的总量，以及该分类包含的每个小分类的大小及占比，因此非常适合处理部分与整体的关系。

与饼图显示单个部分到整体的关系不同的是，堆叠柱状图可以显示多个部分到整体的关系。例如一个班级体育课选课的各项目人数统计，你可以用柱状图或饼图来展示。但是，当需要进一步区分男生和女生参与到不同项目中的人数分别是多少时，就需要把每个项目中包含的男生数和女生数都展示出来。如图选用堆叠柱状图，不仅能显示每个项目的总人数，还能展示出每个项目中的一部分与整体的关系。


<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="https://gallery.echartsjs.com/view-lite.html?cid=xBk7oUNwEz">
	    </iframe>
	</div>
</div>


<div class="datatype" style="overflow:hidden" width="180px">
<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适合的数据类型</p>
<table class="lefttable" style="float:left; margin-right:15px">
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
        <td>15</td>
		<td>17</td>
	</tr>
</table>


<div class="morechart" style="margin-top: 150px">
		<p style="font-size:14px;font-weight:500;margin: 0 0 8px 0">类似图表</p>
		<a href="/chartusage/bar/" style="display:block;margin: 5px 0;font-size:12px">柱状图</a>
		<a href="/chartusage/bi-directional-bar/" style="display:block;margin: 5px 0;font-size:12px">双向柱状图</a>
		<a href="/chartusage/grouped-bar/" style="display:block;margin: 5px 0;font-size:12px">分组柱状图</a>
		</div>


</div>

## 堆叠柱状图的使用建议

1、遵循基本的柱状图使用原则。为了使图表易于理解，请避免使用太多颜色，不要刻意展示被截断的数据误导读者。

2、堆叠柱状图不适合用于对比不同分组内同个分类之间的数据大小。

3、堆叠柱状图最好的展示效果是每个组只包含两到三个类别，最多不要超过6个，因为太多的数据系列会使数据的阅读和分辨变得非常困难。

4、由于要分析部分数据在整体中的占比，因此要避免用堆叠柱状图展示包含负数的数据。

5、大多数的堆叠柱状图都是垂直绘制的，但是如果你的数据标签特别长时，考虑更好地展示效果，可以选择使用水平堆叠的方式。


## 更多示例


<div class="more-charts-example">
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=bar-stack">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./stacked-bar1.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=xr1AvE2JIb">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./stacked-bar2.png">
				</div>
			</div>
		</a>
	</div>
</div>