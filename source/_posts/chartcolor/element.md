---
title: 饼图
subtitle: Piechart
tags:
    - 饼图
    - 占比
    - 分区
---

## 饼图介绍

饼图主要用于展现不同类目数值相对于总数的占比情况。并图中每个分块（扇区）代表该数值在总数的占比大小，所有分块占比总和为100%。


<div  class="datatype" style="overflow:hidden" width="180px">
<p style="font-size:14px;font-weight:500;margin: 0 0 13px 0;">适宜的数据类型</p>
<table style="width: 40%; float:left; margin-right:15px">
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
<table style="width: 40%; float:right">
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


<div class="morechart" style="margin-top: 150px">
	<p style="font-size:14px;font-weight:500;margin: 0 0 8px 0">同数据类型图表</p>
	<a href="" style="display:block;margin: 5px 0;font-size:12px">环形图</a>
	<a href="" style="display:block;margin: 5px 0;font-size:12px">南丁格尔</a>
</div>


</div>


## 饼图的使用建议

虽然饼图被广泛用于各个领域，但是饼图及其变形图表一直是比较受争议的图表。因此，我们在使用饼图及其变形图表时一定要谨慎并避免走进误区。

1、饼图适合用来展示单一维度数据的占比，要求其数值中没有零或负值，并确保各分块占比总和为100%。 如下图某专业毕业去向分布。

<img src="./pie01.png" width="550" />


2、大多数人视觉习惯是按照顺时针和自上而下的顺序去观察。建议在绘制饼图时，从12点钟开始沿顺时针右边第一个分块绘制饼图最大的数据分块，能有效的强调其重要性。然后在12点钟的左边绘制第二大的分块，其余的分块按照逆时针排列，最小的分块放在底部。如下图所示，更符合用户的视觉习惯，也更易于数据的识别和比较。当然基于这个原理，我们也可以把我们需要强调的最重要的部分（不一定是最大的部分）放在最突出重要的位置。

<img src="./pie02.png" width="550" />

3、可以添加一些装饰来强调饼图中的某一个数据。颜色、动效、样式、位置等元素都可以被用来突出显示一个扇区。但注意适度原则，有时太多的装饰会让用户理解数据时分心。

<img src="./pie03.png" width="550" />

4、我们很难比较一个分块过多的饼图的数据，建议尽量将饼图分块数量控制在五个以内。当数据分块较多时，我们可以把较小或不重要的数据合并成第五个模块命名为&quot;其它&quot;。如果各分块都必须全部展示，那此时选择柱状图或堆积柱状图或许更合适。

<img src="./pie04.png" width="550" />

5、当各分类数据占比较接近时，如下图所示，我们很难对比出每个山区占比大小，也很难集中关注到其中某一个数据。此时建议选用柱状图或南丁格尔玫瑰图获取更好的展示效果。

<img src="./pie05.png" width="550" />

6、三维的饼图歪曲了各分块相对于整体的比例关系，会造成错误及理解上的困扰。因此不建议使用3D饼图。

<img src="./pie06.png" width="550" />



## 更多示例

<div style="margin: 400px">
	
</div>
