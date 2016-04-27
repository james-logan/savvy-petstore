var count = 0;

$("form").on("submit", function(event) {
    event.preventDefault();

    var data = $(this).serializeArray();
    var formObject = {};

    formObject.id = ++count;
    data.forEach( function(field){
        formObject[field.name] = field.value;
    } );
    console.log(JSON.stringify(formObject))
    // append_to_page(formObject);
});




var append_to_page = function () {
  //DO SOME JQUERY!!!!
}
