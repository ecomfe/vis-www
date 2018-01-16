---
title: 漏斗图
subtitle: Funnel Chart

---

## 介绍

漏斗图又叫倒三角图，漏斗图将数据呈现为几个阶段，每个阶段的数据都是整体的一部分，从一个阶段到另一个阶段数据自上而下逐渐下降，所有阶段的占比总计100％。与饼图一样，漏斗图呈现的也不是具体的数据，而是该数据相对于总数的占比、漏斗图不需要使用任何数据轴。


<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xrJIQEN5NM">
	    </iframe>
	</div>
</div>


<div  class="datatype" style="overflow:hidden" width="180px">
<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适合的数据类型</p>
<table class="lefttable" style="width: 40%; float:left; margin-right:15px">
	<tr>
		<td>A</td>
		<td>30%</td>
	</tr>
	<tr>
		<td>B</td>
		<td>20%</td>
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
</div>


## 漏斗图的使用建议

1、以电商网站数据为代表，漏斗图能直观地展现从最初展现网站到最终下订单购买这整个流程中的转化状况。它不仅能展示用户从看到网站到实现购买的最终转化率，还可以展示每个步骤的转化率，能够直观地展示和说明问题所在，进而能针对性地通过各阶段的转化分析去改善设计。

如下图，「展现」「点击」「访问」三个环节基本并没有太大的流失，但是从「访问」到「咨询」环节数据明显减少，所以就可以重点分析为什么咨询量明显减少，例如是不是咨询的入口不够明显造成的。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xHJIPHN9Nf">
	    </iframe>
	</div>
</div>

2、可以对两个基于统一事情前后的两份数据使用叠加两个漏斗图进行对比，例如下图通过预期值和实现值的对比，可以分析每一项实现情况和预期指标的偏差。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xrydEwN94f">
	    </iframe>
	</div>
</div>

3、还可以用左右对比的漏斗图同时分析两个项目的转化情况。如下图可见项目B从「访问」到「咨询」环节的流失率明显大于项目A。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="http://gallery.echartsjs.com/view-lite.html?cid=xrJfrjEc4z&v=1">
	    </iframe>
	</div>
</div>

4、漏斗图不是表示各个分类的占比情况，而是展示数据变化的一个逻辑流程，如果数据是无逻辑顺序的占比比较，建议使用饼图更合适。

5、可以根据数据选择使用对比色或同一种颜色的色调渐变，从最暗到最浅来依照漏斗的尺寸排列。切记，不要添加许多图层和颜色造成漏斗图难以阅读。


## 更多示例

<div class="more-charts-example">
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=xBk3ufV0e">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./funnel1.png">
				</div>
			</div>
		</a>
	</div>
	<div class="charts-example-one">
		<a href="http://gallery.echartsjs.com/view-lite.html?cid=xrk_RpEqNz">
			<div class="example-look-outside">
				<div class="article-look-inside" style="padding-bottom:81.90%">
				    <img class="article-look-content" src="./funnel2.png">
				</div>
			</div>
		</a>
	</div>
</div>

