---
title: 坐标轴

---

>坐标轴是什么 ？

## X轴、Y轴
普通的二维数据坐标系都有x轴和y轴，通常情况下，x轴显示在图表的底部，y轴显示在左侧，如图所示。
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:38.9%">
	    <img class="article-look-content" src="./charts_axis_img01.jpg">
	</div>
</div>

X轴和Y轴都由轴线、刻度、刻度标签、轴标题四个部分组成。部分图表中还会有网格线来帮助查看和计算数据

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:38.9%">
	    <img class="article-look-content" src="./charts_axis_img02.jpg">
	</div>
</div>

<b>X轴</b>：常用来标示数据的维度，维度一般用来指数据的类别，是观察数据的角度，例如“销售时间”  “销售地点”  “产品名称”等。X轴的样式建议如下：

  + 轴线：建议显示；
  + 刻度：轴线下方，建议显示；
  + 隔线：建议显示；
  + 标记文字：轴线下方，居中对齐，建议显示；
  + 标记文字显示方式：水平，垂直，斜角；
  + 轴名称：显示可选，位置可自定义；

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:8.8785%">
	    <img class="article-look-content" src="./charts_axis_img06.png">
	</div>
</div>
<br>

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:21.308%">
	    <img class="article-look-content" src="./charts_axis_img07.png">
	</div>
</div>

当X轴（水平坐标轴）跨度很大，可以采用才区域缩放方式灵活显示数据内容。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:48.7097%">
	    <img class="article-look-content" src="./charts_axis_img10.png">
	</div>
</div>
<br>
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:29.818%">
	    <img class="article-look-content" src="./charts_axis_img12.png">
	</div>
</div>

<b>Y轴</b>：常常用来标示数据的数值，数值是用来具体考察某一类数据的数量值，也是我们需要分析的指标。例如“销售数量”和“销售金额”等。

  + 轴线：显示可选；
  + 刻度：显示可选；
  + 隔线：建议显示；
  + 标记文字：轴线内外可选，建议显示；
  + 轴名称：显示可选，位置可自定义；

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:43.453%">
	    <img class="article-look-content" src="./charts_axis_img02.png">
	</div>
</div>
<br>
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:28.128%">
	    <img class="article-look-content" src="./charts_axis_img04.png">
	</div>
</div>


在二维数据中，y轴也可以有多个，两个y轴显示在左右两侧，常用来对比两组值域范围不同的数据的趋势关系。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:28.182%">
	    <img class="article-look-content" src="./charts_axis_img05.png">
	</div>
</div>

如下图示例，图左侧的y轴代表着东京月平均气温，右图的y轴表示东京降水量，x轴表示时间。两组y轴在一起，反映了平均气味和降水量间的趋势关系。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:50%">
	    <iframe class="article-look-content"
	    src="https://gallery.echartsjs.com/view-lite.html?cid=xrJYBh__4z">
	    </iframe>
	</div>
</div>

