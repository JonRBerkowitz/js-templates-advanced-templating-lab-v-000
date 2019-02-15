function init() {
  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  console.log(recipeFormTemplate).innerHTML;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
