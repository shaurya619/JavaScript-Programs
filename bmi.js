<!DOCTYPE html>
<html>
<head>
	<title>A Simple BMI Calculator!!</title>
	
</head>
<body bgcolor="yellow">
	<script type="text/javascript">
		function clacBMI() {
		//This is a simple Body Mass Index Calculator
		//In the body we have a text feild and a button
		//I will be using the window.alert() function
		//We have a table for the uniform look
		//We will be presenting the calculator in form format
		var height = document.bmi.height.value;
		var weight = document.bmi.weight.value;

		var bmi = weight/(height/100 * height/100);
	

		window.alert("YOUR BMI IS :" + " " + bmi);

	}

	
	</script>
	<font color = "red">
<center>
		<h1 align="center">BMI CALCULATOR</h1>
		<h4 align="center">By:-SHAURYA BARA</h4>

		<form name = "bmi">
			<table border="1px">
				<tr bgcolor="pink">
						<td>
							HEIGHT IN CM : <input type="text" name="height">
						</td>
						<td>
							WEIGHT IN KG : <input type="text" name="weight">
						</td>

				</tr>
			</table>
			<br><br>
			<input type="button" value="BMI" onclick="clacBMI()">
		</form>
		</font>
		<font color = "green">
<br><br>

		<table border="5px" style="color:green">
			<tr>
				<th>BMI Range</th>
				<th>Category</th>
			</tr> 
				<tr>
					<td>Under 18.5</td>
					<td>Underweight</td>
				</tr>
				<tr>
					<td>18.5 - 24.9</td>
					<td>Healthy</td>
				</tr>
				<tr>
					<td>25.0 - 29.9</td>
					<td>Overweight</td>
				</tr>
				<tr>
					<td>Over 30</td>
					<td>Obese</td>
				</tr>
					
			
		</table>
		</center>
		</font>

		<p align="center">
			Having Trouble With Metric Conversions?
			<br><br>
			Don't Worry <a href="https://www.google.co.in/search?ei=EM55WpPdI8ztvgSu1InoBA&q=metric+converter+inches+to+cm&oq=metric++c&gs_l=psy-ab.1.0.35i39k1l2j0i67k1l4j0l2j0i67k1l2.3215.3215.0.5876.1.1.0.0.0.0.202.202.2-1.1.0....0...1c.1.64.psy-ab..0.1.201....0.9kIu0MFCi6w" target="a1">Click Here!!</a>
		</p>
	


</body>
</html>
