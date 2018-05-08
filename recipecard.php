<?php session_start()?>

	<?php include('header.php'); ?>

	<!--Recipe layout for displaying information-->
	
		<div id="content">

			<div id="recipe-wrapper" >

				<div id="recipe-select-container">

					<div class="reciperequest">

						<form>

							<select id="recipetype" name="recipetype">
								<option>Select a recipe type</option>
								<option value="meat">Meat</option>
								<option value="poultry">Poultry</option>
								<option value="fish">Fish/Seafood</option>
								<option value="vegetarian">Vegetarian</option>
								<option value="vegan">Vegan</option>
							<select>

						</form>

					</div>

					<div class="reciperequest">

						<form>

							<select id="recipelist" name="recipelist">
								<option>Select a recipe</option>
							<select>

						</form>
						
					</div>

				</div>
				
				<div id="saverecipe">
					<button>Save Recipe</button>
				</div>
		

			<div id="recipe" class="container">

				

				<div class="row">

					<div id="image" class="col-xs-12 col-sm-6 col-md-6 col-xl-6"><img class="headerimage" alt="recipe image" src="img/jollof-rice.jpg"></div>

					<div id="info" class="col-xs-12 col-sm-6 col-md-6 col-xl-6">
						<h1 class="recipe-heading"></h1>		

						<div id="description">
							
						</div>

						<div id="allergens">(<h3>Allergens:&nbsp;&nbsp;</h3><span id="allergen-list"></span>)</div>
						<div id="preptime"><h3>Prep time:&nbsp;&nbsp;</h3><span id="prep-mins"></span></div>
						<div id="cookingtime"><h3>Cooking time:&nbsp;&nbsp;</h3> <span id="cooking-mins"></span></div>
						<div id="difficulty"><h3>Difficulty:&nbsp;&nbsp;</h3> <span id="difficulty-level"></span></div>
						<div id="serving"><h3>Serves:&nbsp;&nbsp;</h3><span id="serves">8</span></div>

						<table id="nutrition">
							<thead><h3>Nutrition per serving:</h3></thead>
							<tbody>
								<tr>
									<th scope="col">kcal</th>
									<th scope="col">fat</th>
									<th scope="col">saturates</th>
									<th scope="col">carbs</th>
									<th scope="col">sugars</th>
									<th scope="col">fibre</th>
									<th scope="col">protein</th>
									<th scope="col">salt</th> 
								</tr>
								<tr>
									<td class="energy"></td>
									<td class="fat"></td>
									<td class="saturates"></td>
									<td class="carbs"></td>
									<td class="sugars"></td>
									<td class="fibre"></td>
									<td class="protein"></td>
									<td class="salt"></td>					
								</tr>
							</tbody>
						 
						</table>
					</div>
					
				</div>
				<hr>

				<div class="row">

				<div id="ingredients" class="col-xs-12 col-sm-6 col-md-6 col-lg-6  col-xl-6">
					<h3>Ingredients:</h3>
					<ul id="ingredients-list">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>

				<div id="method" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
					<h3>Method:</h3>
					<ol type="1" id="method-list">
						<li>
							
						</li>
						<li>
							
						</li>
						<li>
							
						</li>
						<li>
							
						</li>
					</ol>
				</div>

				</div>

			</div><!--recipecontainer-->
			
		</div><!--recipe wrapper-->
		
	</div>
	
</div><!--wrapper-->
</body>
</html>