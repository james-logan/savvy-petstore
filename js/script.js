var count = 0;

var whatever = function(event) {
    event.preventDefault();

    var data = $(this).serializeArray();
    var formObject = {};

    formObject.id = ++count;
    data.forEach( function(field){
        formObject[field.name] = field.value;
    } );
    // console.log(JSON.stringify(formObject))
    append_to_page(formObject);
}

var petArray = [
  {
    pic:"http://tonsofcats.com/wp-content/uploads/2013/11/l-Teenie-tiny-kitten-on-the-window-sill-550x385.jpg",
    name: "Lucas",
    species: "Kitten",
    age: "1 month old",
    cost: "$250"
  },
  {
    pic: "http://stuffpoint.com/bunnies/image/320245-bunnies-baby-bunny.jpg",
    name: "Pearl",
    species: "Bunny",
    age: "2 weeks old",
    cost: "$30"
  },
  {
    pic: "http://www.chicagonow.com/wild-wisdom/files/2013/11/biddy-hedgehog-16.jpg",
    name: "Heisenberg",
    species: "Hedgehog",
    age: "3 weeks old",
    cost: "$80"
  }
]

$("form").on("submit", whatever);

var append_to_page = function (data) {
  //DO SOME JQUERY!!!!
  var pet = '<div class="pet"><img src="' + data.pic + '" alt="Baby Hedgehog"><h2 a href="">' + data.name + '</h2><ul><li>' + data.species + '</li><li>' + data.age + '</li><li>'+ data.cost +'</li></ul></div>'

  $(".list").append(pet)
}
