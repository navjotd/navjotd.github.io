
// // Single 24k

// $(".single").change(function(){
//     if ($(this).val() == "24k-single") {
//        $("#sngl-karat option[value='karat']").prop("selected", false);
//        $("#sngl-karat option[value='24k']").prop("selected", true);
//     }

//      else if ($(this).val() != "24k-single") {
//       $("#sngl-karat option").removeAttr("disabled");
//       $("#sngl-karat option[value='karat']").attr("disabled", "disabled");
//     }
// });

// // Dub Cap karat

// $(".dub-cap").change(function(){
//     if ($(this).val() === "dub-69-14k") {
//        $("#dub-karat option[value='10k']").attr( "disabled", "disabled");
//        $("#dub-karat option[value='18k']").attr("disabled", "disabled");
//        $("#dub-karat option[value='karat']").prop("selected", false);
//        $("#dub-karat option[value='14k']").prop("selected", true);
//     }

//      else if ($(this).val() != "dub-69-14k") {
//       $("#dub-karat option").removeAttr("disabled");
//       $("#dub-karat option[value='karat']").attr("disabled", "disabled");
//     }
// });

// // Dub cap different colors

// $(".dub-cap").change(function(){
//     if ($(this).val() === "dub-black-gold") {
//        $("#dub-color option[value='yellow']").attr( "disabled", "disabled");
//        $("#dub-color option[value='rose']").attr("disabled", "disabled");
//        $("#dub-color option[value='white']").attr("disabled", "disabled");
//        $("#dub-color option[value='color']").prop("selected", false);
//        $("#dub-color option[value='black']").prop("selected", true);

//     } else if ($(this).val() != "dub-black-gold") {
//       $("#dub-color option").removeAttr("disabled");
//       $("#dub-color option[value='color']").attr("disabled", "disabled");
//     }
// });

// $(".dub-cap").change(function(){
//     if ($(this).val() == "dub-rose-gold") {
//        $("#dub-color option[value='yellow']").attr( "disabled", "disabled");
//        $("#dub-color option[value='black']").attr("disabled", "disabled");
//        $("#dub-color option[value='white']").attr("disabled", "disabled");
//        $("#dub-color option[value='color']").prop("selected", false);
//        $("#dub-color option[value='rose']").prop("selected", true);

//     } else if ($(this).val() != "dub-rose-gold") {
//       $("#dub-color option").removeAttr("disabled");
//       $("#dub-color option[value='color']").attr("disabled", "disabled");
//     }
// });

// $(".dub-cap").change(function(){
//     if ($(this).val() == "dub-yellow-gold") {
//        $("#dub-color option[value='rose']").attr( "disabled", "disabled");
//        $("#dub-color option[value='black']").attr("disabled", "disabled");
//        $("#dub-color option[value='white']").attr("disabled", "disabled");
//        $("#dub-color option[value='color']").prop("selected", false);
//        $("#dub-color option[value='yellow']").prop("selected", true);
//     } else if ($(this).val() != "dub-yellow-gold") {
//       $("#dub-color option").removeAttr("disabled");
//       $("#dub-color option[value='color']").attr("disabled", "disabled");
//     }
// });



// $(".dub-cap").change(function(){
//     if ($(this).val() == "dub-white-gold") {
//        $("#dub-color option[value='rose']").attr( "disabled", "disabled");
//        $("#dub-color option[value='black']").attr("disabled", "disabled");
//        $("#dub-color option[value='yellow']").attr("disabled", "disabled");
//        $("#dub-color option[value='color']").prop("selected", false);
//        $("#dub-color option[value='white']").prop("selected", true);

//     } else if ($(this).val() != "dub-white-gold") {
//       $("#dub-color option").removeAttr("disabled");
//       $("#dub-color option[value='color']").attr("disabled", "disabled");
//     }
// });

function setFormData(form, val) {
  debugger;
  form.val(val);
}

$(".color-select").change(function() {
  debugger;
  var $productContainer = $(this).closest('.product-container');
  var $colorInput = $productContainer.find('input[name="color"]');
  var $colorVal = $(this).val();
  debugger;
  setFormData($colorInput, $colorVal);
})

$(".karat-select").change(function() {
  debugger;
  var $productContainer = $(this).closest('.product-container');
  var $karatInput = $productContainer.find('input[name="karat"]');
  var $karatVal = $(this).val();
  debugger;
  setFormData($karatInput, $karatVal);
})

$(".item-select").change(function() {
  var $productContainer = $(this).closest('.product-container');
  var $images = $productContainer.find('.lightbox-image');
  var $pic = $productContainer.find('.product-picture')
  var value = $(this).val();
  var option = $(this).find('option[value="' + value + '"]')
  var index = $(this).find('option').index(option);
  var img = $($images[index-1]).css('background-image');
  var $productInput = $productContainer.find('input[name="product"]');
  debugger;
  setFormData($productInput, value);

  $pic.css('background-image', img);
  
  var karats = option.attr('data-karats').toLowerCase();
  var colors = option.attr('data-colors').toLowerCase();

  var colorSelect = $productContainer.find('.color-select');
  var karatSelect = $productContainer.find('.karat-select');

  colorOptions = colorSelect.find('option');
  karatOptions = karatSelect.find('option');


  //initially enable all options
  karatOptions.removeAttr("disabled");
  colorOptions.removeAttr("disabled");

  for (var i = 0; i < colorOptions.length; i++) {
    var optionColor = $(colorOptions[i]).val().toLowerCase();
    if (!(colors.indexOf(optionColor) > -1)) {
      $(colorOptions[i]).attr("disabled", "disabled");
    }
  }

  for (var i = 0; i < karatOptions.length; i++) {
    var optionKarat = $(karatOptions[i]).val().toLowerCase();
    if (!(karats.indexOf(optionKarat) > -1)) {
      debugger;
      $(karatOptions[i]).attr("disabled", "disabled");
    }
  }
})