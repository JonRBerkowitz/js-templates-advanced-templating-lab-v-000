function init() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let formTemplateFn = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML += formTemplate;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
