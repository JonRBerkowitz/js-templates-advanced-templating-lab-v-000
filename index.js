function init() {
  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += recipeFormTemplate;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
