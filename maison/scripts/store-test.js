
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

$(".item-select").change(function() {
  var value = $(this).val();
  var option = $(this).find('option[value="' + value + '"]')
  var karats = option.attr('data-karats').toLowerCase();
  var colors = option.attr('data-colors').toLowerCase();

  var colorSelect = $(this).siblings('.color-select');
  var karatSelect = $(this).siblings('.karat-select');

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
      $(karatOptions[i]).attr("disabled", "disabled");
    }
  }
})