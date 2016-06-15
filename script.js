// Hello I'm Javascript
window.onload = function() {
  var click = document.getElementById("click");
  
  var addShape = function(param) {
    var shapes = {"foo": "box", "bar": "sphere", "fuzz": "cone"};
    var newShape = document.createElement(shapes[param]);
    var newAttributes = { "render": true, "solid": true, 
      "ccw": true, "usegeocache": true,
      "lit": true };
    for (var i in newAttributes) {
      newShape.setAttribute(i, newAttributes[i]);
    }
    var content = document.getElementById("shape");
    content.appendChild(newShape);
    
    var position = (Math.random()*6 - 3) + ' ' + 
      (Math.random()*6 - 3) + ' '+ (Math.random()*6 - 3);
    var transform = document.getElementById("transform");
    transform.setAttribute("translation", position);
    
    var colour = Math.random() + ' ' + Math.random() + ' '+ Math.random();
    var material = document.getElementById("material");
    material.setAttribute("diffuseColor", colour);

  };
  
  click.addEventListener("click", function () {
    var names = ["foo", "bar", "fuzz"];
    var rand = Math.floor(Math.random()*names.length);
    addShape(names[rand]);
  });
}
