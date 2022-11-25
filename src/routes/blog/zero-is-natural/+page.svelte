<script lang='ts'>
	import { math, display } from 'mathlifier';
</script>

<h1> {@html math("0 \\in \\mathbb{N}")} </h1>

<p>
	A collection of reasons why {@html math("0")} should be included in the definition of the natural numbers.

	List originally compiled to settle an argument with a teacher from high school. 
</p>

<br>

<ol>
	<li> {@html math("0")} is the most natural number: How many apples do you have right now? </li>
	<li> The most natural definition of odd naturals is {@html math(`\\forall n \\in \\mathbb{N}: 2n + 1`)}. If {@html math("0")} isn't natural, it would be {@html math("2n - 1")}  </li>
	<li> A sum from {@html math("0")} to {@html math("n")} has {@html math("n")} elements. A sum from {@html math("1")} to {@html math("n")} has {@html math("n - 1")} elemnts. </li>
	<li> Pascal's triangle starts from {@html math("0 \\choose 0")}. </li>
	<li> The IB, the MIT and TUDelft say that {@html math("0")} is natural. </li>
	<li> Units are {@html math("10^0")} (or in general {@html math("b^0")}) </li>
	<li> Most programming languages and programmers start counting from {@html math("0")} (Matlab and Julia are the exception) </li>
</ol>