function init() {
  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  console.log(recipeFormTemplate);
  document.getElementByTagName("main")[0].innerHTML += recipeFormTemplate;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
