var detailsModal = document.getElementById('modal');

var recipes = [
{
	key: 0,
	title: 'Pasta Carbonara',
	ingredients: '1 Tbsp olive oil or unsalted butter\n 1/2 pound pancetta or thick cut bacon\n diced 1-2 garlic cloves,minced\n about 1 teaspoon (optional)\n 3-4 whole eggs\n 1 cup grated parmesan or pecorino cheese\n 1 pound spaghetti pasta (or bucatini or fettuccine)\n Salt and black pepper to taste',
	instructions: 'Put a large pot of salted water on to boil (1 Tbsp salt for every 2 quarts of water.). Sauté pancetta/bacon and garlic: While the water is coming to a boil, heat the olive oil in a large sauté pan over medium heat. Add the bacon or pancetta and cook slowly until crispy. Add the garlic (if using) and cook another minute, then turn off the heat and put the pancetta and garlic into a large bowl. Beat eggs and half of the cheese: In a small bowl, beat the eggs and mix in about half of the cheese. Cook pasta: Once the water has reached a rolling boil, add the dry pasta, and cook, uncovered, at a rolling boil. Toss pasta with pancetta/bacon: When the pasta is al dente (still a little firm, not mushy), use tongs to move it to the bowl with the bacon and garlic. Let it be dripping wet. Reserve some of the pasta water. Move the pasta from the pot to the bowl quickly, as you want the pasta to be hot. It is the heat of the pasta that will heat the eggs sufficiently to create a creamy sauce. Toss everything to combine, allowing the pasta to cool just enough so that it doesn not make the eggs curdle when you mix them in. Add the beaten egg mixture: Add the beaten eggs with cheese and toss quickly to combine once more. Add salt to taste. Add some pasta water back to the pasta to keep it from drying out. Serve at once with the rest of the parmesan and freshly ground black pepper.'
},
{
	key: 1,
	title: 'Garlic Butter Steak',
	ingredients: '2 tablespoons butter, softened, divided\n 1 teaspoon minced fresh parsley\n 1/2 teaspoon minced garlic\n 1/4 teaspoon reduced-sodium soy sauce\n 1 beef flat iron steak or boneless top sirloin steak (3/4 pound)\n 1/8 teaspoon salt\n 1/8 teaspoon pepper',
	instructions: 'Mix 1 tablespoon butter, parsley, garlic and soy sauce. Sprinkle steak with salt and pepper. In a large skillet, heat remaining butter over medium heat. Add steak; cook until meat reaches desired doneness (for medium-rare, a thermometer should read 135°; medium, 140°; medium-well, 145°), 4-7 minutes per side. Serve with garlic butter.'
},
{
	key: 2,
	title: 'Lasagna',
	ingredients: '3/4 lb. lasagna noodles\n 1 tsp. extra-virgin olive oil, plus more for drizzling\n 1 lb. ground beef\n 2 cloves garlic, minced\n 1 tsp. dried oregano\n Freshly ground black pepper\n 1 (32-0z.) jar marinara\n 16 oz. whole milk ricotta\n 1/2 c. freshly grated Parmesan, divided\n 1/4 c. chopped parsley, plus more for garnish\n 1 1/2 lb. sliced mozzarella',
	instructions:'Preheat oven to 375º. In a large pot of salted boiling water, cook pasta according to package directions until al dente, less 2 minutes. Drain and drizzle a bit of olive oil to prevent noodles from sticking together. Meanwhile, in a large pot over medium-high heat, heat oil. Cook ground beef until no longer pink, breaking up with a wooden spoon, then drain fat. Return beef to skillet and add garlic and oregano and stir for 1 minute. Season with salt and pepper, then add marinara and stir until warmed through. Combine ricotta, 1/4 cup Parmesan, and parsley in a large mixing bowl and season with salt and pepper. Set aside. In a large casserole dish, spread a thin layer of meat sauce, a single layer of lasagna noodles, a layer of ricotta mixture, and a single layer of mozzarella, then repeat layers. Top last layer of noodles with meat sauce, Parmesan, and mozzarella. Cover with foil and bake for 15 minutes, then increase temperature to 400º and bake uncovered for 18 to 20 minutes. Garnish with parsley and serve.'
},
{
	key: 3,
	title: 'Mac and Cheese',
	ingredients:'1 box elbow macaroni\n 1/4 cup butter\n 1/4 cup all-purpose flour\n 1/2 teaspoon saltground black pepper to taste\n 2 cups milk2 cups shredded Cheddar cheese',
	instructions:'Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes. Drain. Melt butter in a saucepan over medium heat; stir in flour, salt, and pepper until smooth, about 5 minutes. Slowly pour milk into butter-flour mixture while continuously stirring until mixture is smooth and bubbling, about 5 minutes. Add Cheddar cheese to milk mixture and stir until cheese is melted, 2 to 4 minutes. Fold macaroni into cheese sauce until coated.'
}
]

//make an event listener for each link and open the modal with recipe details
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {    
    links[i].addEventListener('click', openModal);
}

function openModal(e) {
    console.log('click');
	detailsModal.style.display = 'block';
	var modalContent = document.getElementById('modalInfo');
	var modalBody = '';	
  modalBody += JSON.stringify(recipes[parseInt(e.currentTarget.dataset.recipeIndex)]);
	modalContent.innerHTML = modalBody;
}

//close the modal on button click
var modalCloseBtn = document.getElementById('modalClose');
modalCloseBtn.addEventListener('click', closeModal);

function closeModal(){
	detailsModal.style.display = 'none';
}