---
title: 数据提示

---

## 介绍

当鼠标悬停在图表数据列上某处的时候，出现并且提示该点数据的交互就是数据提示。可以是半透明框的形式、也可以是其他视觉样式。一般情况下会显示该点的值、单位等。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:26.72%">
	    <img class="article-look-content" src="./charts_tips_img03.png">
	</div>
</div>

要注意的是，数据提示框一般是用做额外补充信息，用户并不完全依赖数据提示框来了解数据值。静态的图表本身就需要展现用户所需的所有主要信息。

## 样式

数据提示信息提示内容要遵从表单规范，左边是维度、右边是数值。按照冒号对齐。

  + 位置：只有当鼠标和图表有交互时才会显示节点数据提示，根据不同类型图表进行特定显示，
  + 样式：默认为黑色半透明背景的提示内容区域；
  + 内容：根据业务场景自定义显示；

下图给出几种数据提示的显示方式

当提示单个数据的时候、位置要与该数据点垂直或者水平居中对齐、当提示为多个数据值的时候、数据提示框没有明显的位置指向性、位置位于悬浮点的左或者右边即可：
<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:34.845%">
	    <img class="article-look-content" src="./charts_tips_img01.jpg">
	</div>
</div>

在饼图上、数据提示框应该出现在当前选中的扇形数据列一侧：

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:37.39%">
	    <img class="article-look-content" src="./charts_tips_img02.png">
	</div>
</div>

柱状图上的数据提示示例：

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:28.63%">
	    <img class="article-look-content" src="./charts_tips_img04.png">
	</div>
</div>

