function init() {
  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  console.log(recipeFormTemplate);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
