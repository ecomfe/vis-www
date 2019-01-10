---
title: 饼图
subtitle: Pie Chart
tags:
    - 饼图
    - 占比
    - 分区
---

<h2 class="article-invisibleh2">介绍</h2>

饼图主要用于展现不同类别数值相对于总数的占比情况。图中每个分块（扇区）的弧长表示该类别的占比大小，所有分块数据总和为100%。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:60%">
	    <iframe class="article-look-content"
	    src="https://gallery.echartsjs.com/view-lite.html?cid=xHySlBkIEM&v=1">
	</div>
</div>

<div  class="datatype" style="overflow:hidden" width="180px">
<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适宜的数据类型</p>
<table class="lefttable" style="float:left; margin-right:15px">
	<tr>
		<td>A</td>
		<td>40%</td>
	</tr>
	<tr>
		<td>B</td>
		<td>30%</td>
	</tr>
	<tr>
		<td>C</td>
		<td>20%</td>
	</tr>
	<tr>
		<td>D</td>
		<td>10%</td>
	</tr>
</table>
<table class="righttable" style="float:right">
	<tr>
		<td>A</td>
		<td>200</td>
	</tr>
	<tr>
		<td>B</td>
		<td>130</td>
	</tr>
	<tr>
		<td>C</td>
		<td>101</td>
	</tr>
	<tr>
		<td>D</td>
		<td>98</td>
	</tr>
</table>


<!-- <div class="morechart" style="margin-top: 150px">
	<p style="font-size:14px;font-weight:500;margin: 0 0 8px 0">同数据类型图表</p>
	<a href="" style="display:block;margin: 5px 0;font-size:12px">环形图</a>
	<a href="" style="display:block;margin: 5px 0;font-size:12px">南丁格尔</a>
</div> -->


</div>

虽然饼图能快速有效地展示数据的比例分布，并被广泛用于各个领域，但是饼图及其变形图表一直是比较受争议的图表。因此，我们在使用饼图及其变形图表时一定要谨慎并避免走进误区。
## 饼图的使用建议

1、饼图适合用来展示单一维度数据的占比，要求其数值中没有零或负值，并确保各分块占比总和为100%。

2、我们很难比较一个分块过多的饼图的数据，建议尽量将饼图分块数量控制在五个以内。当数据类别较多时，我们可以把较小或不重要的数据合并成第五个模块命名为"其它"。如果各类别都必须全部展示，此时选择柱状图或堆积柱状图或许更合适。
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:32.926829%">
	    <img class="article-look-content" src="./pie02.jpg">
	</div>
</div>


3、饼图不适合被用于精确数据的比较，因此当各类别数据占比较接近时（如下左图），我们很难对比出每个类别占比的大小。此时建议选用柱状图或南丁格尔玫瑰图（如下右图）来获取更好的展示效果。
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:32.926829%">
	    <img class="article-look-content" src="./pie03.jpg">
	</div>
</div>


4、大多数人视觉习惯是按照顺时针和自上而下的顺序去观察。因此在绘制饼图时，建议从12点钟开始沿顺时针右边第一个分块绘制饼图最大的数据分块，有效的强调其重要性。

其余的数据分块有两种建议，一种是按照数据大小依次顺时针排列，另一种是在12点钟的左边绘制第二大的分块，其余的分块按照逆时针排列，最小的分块放在底部。如下图所示。
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:28.658537%">
	    <img class="article-look-content" src="./pie01.jpg">
	</div>
</div>

按照数据大小区别顺序，不仅符合用户的视觉习惯，也更易于数据的识别和比较。当然基于这个原理，我们也可以把需要强调的最重要的部分（不一定是最大的部分）放在最突出重要的位置。


5、可以添加一些装饰来强调饼图中的某一个数据。颜色、动效、样式、位置等元素都可以被用来突出显示一个扇区。但注意适度原则，有时太多的装饰会让用户理解数据时分心。
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:60%">
	    <iframe class="article-look-content"
	    src="https://gallery.echartsjs.com/view-lite.html?cid=xHySlBkIEM&v=1">
	    </iframe>
	</div>
</div>


6、三维的饼图歪曲了各分块相对于整体的比例关系，会造成错误及理解上的困扰。因此不建议使用3D饼图。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:28.658537%">
	    <img class="article-look-content" src="./pie04.jpg">
	</div>
</div>


## 更多示例

<div class="more-charts-example">
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=calendar-pie">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./1pie.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=pie-pattern">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./2pie.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=pie-nest">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./3pie.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="https://gallery.echartsjs.com/view-lite.html?cid=xHkhyiVyIW">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./4pie.png">
				</div>
			</div>
		</a>
	</div>

