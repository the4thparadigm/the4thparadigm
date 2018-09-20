
// json2HTML

var template;
var data;

$( document ).ready(function() {
  $.getJSON("./json/resources/template.json", function(json) {
    template = json;
    loadEnteries();
  });
});

function loadEnteries() {
  $.getJSON("./json/resources/entries.json", function(json) {
    data = json;
    $('#resources-grid').json2html(data, template);
  });
}

// jquery button functions

$(document).ready(function() {
  $("#btn-everything").click(function(){
    showAll();
  });
});

$(document).ready(function() {
  $("#btn-data-science").click(function(){
    hideAll();
    show("data-science");
  });
});

$(document).ready(function() {
  $("#btn-data-sets").click(function(){
    hideAll();
    show("data-sets");
  });
});

$(document).ready(function() {
  $("#btn-machine-learning").click(function(){
    hideAll();
    show("machine-learning");
  });
});

$(document).ready(function() {
  $("#btn-data-visualization").click(function(){
    hideAll();
    show("data-visualization");
  });
});

$(document).ready(function() {
  $("#btn-python").click(function(){
    hideAll();
    show("python");
  });
});

$(document).ready(function() {
  $("#btn-sql").click(function(){
    hideAll();
    show("sql");
  });
});

$(document).ready(function() {
  $("#btn-java").click(function(){
    hideAll();
    show("java");
  });
});

$(document).ready(function() {
  $("#btn-html-css-js").click(function(){
    hideAll();
    show("html-css-js");
  });
});

// functions for hide and show

function hideAll() {
  elements = document.getElementsByClassName("resources-item");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
  }
}

function showAll() {
  elements = document.getElementsByClassName("resources-item");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'inline';
  }
}

function show(className) {
  elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'inline';
  }
}
