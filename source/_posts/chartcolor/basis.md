---
title: 可视化色彩理论基础

---

## 色相、亮度、饱和度

从可视化编码的角度对颜色进行分析，可以将颜色分为色相、亮度和饱和度三个视觉通道。

<b>色相</b>
 即色彩的相貌和特征。自然界中色彩的种类很多，色相指色彩的种类和名称。如；红、橙、黄、绿、青、蓝、紫等等颜色的种类变化就叫色相。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:37.39%">
	    <img class="article-look-content" src="./basis01.jpg">
	</div>
</div>


<b>明度</b>
 指色彩的亮度。颜色有深浅、明暗的变化。比如，深黄、中黄、淡黄、柠檬黄等黄色在明度上就不一样，紫红、深红、玫瑰红、大红、朱红、桔红等红颜色在亮度上也不尽相同。这些颜色在明暗、深浅上的不同变化，也就是色彩的又一重要特征一一明度变化。


<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:26.195%">
	    <img class="article-look-content" src="./basis03.jpg">
	</div>
</div>

色彩的明度变化有许多种情况：

一、不同色相之间的明度变化。如：白比黄亮、黄比橙亮、橙比红亮、红比紫亮、紫比黑亮；

二、在某种颜色中加白色，亮度就会逐渐提高，加黑色亮度就会变暗，但同时它们的纯度(颜色的饱和度)就会降低



<b>饱和度</b>
 色彩的鲜艳程度，饱和度越高,表现越鲜明,饱和度较低,表现则较黯淡。

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:37.39%">
	    <img class="article-look-content" src="./basis02.jpg">
	</div>
</div>


## 映射方式

针对不同类型的数据，我们通常也会选用不同的颜色映射方式。根据上面的简介我们可以知道：

<b>色相：</b> 没有明显的顺序性、一般不用来表达数据量的高低，而是用来表达数据列的类别。

<b>明度和饱和度：</b> 在视觉上很容易区分出优先级的高低、被用作表达顺序或者表达数据量视觉通道。

下面给出两例映射方式：

嵌套饼图中通过不同色相来表达不同类别的数据列 ：

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:60%">
	    <iframe class="article-look-content"
	    src="https://gallery.echartsjs.com/view-lite.html?cid=xrJL-Z7cNf">
	    </iframe>
	</div>
</div>


下图通过明度的不同来表达微博签到数据高低，从图中可以很清晰得知、数据列明度越高、数据量越高：

<div class="article-look-outside">
	<div class="article-look-inside" style="padding-bottom:60%">
	    <iframe class="article-look-content"
	    src="https://gallery.echartsjs.com/view-lite.html?cid=scatter-weibo">
	    </iframe>
	</div>
</div>


