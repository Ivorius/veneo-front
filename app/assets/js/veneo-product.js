function veneoProduct() {

  $("ul.o-mats").on("click", "li", function () {

    /* material and price */
    var chooseMaterial = $(this).data("option");
    $("input[name=parameter_4][value=" + chooseMaterial + "]").prop('checked', true);
    var material = ($(this).find(".o-mats__title").text());
    var price = $(this).find(".o-mats__price").text();
    $("#mat_ins").text(material);

    if ($("#mat_ins").parent().find(".o-sticky__icon--jewel").length == 0) {
      $("#mat_ins").parent().prepend('<div class="o-sticky__icon--jewel"><svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg"><title>Stroke 1 Copy 14</title><g id="icons" stroke-width="2.5" fill="none" fill-rule="evenodd"><path d="M12 16L2 7l4-5h12l4 5-10 9z" id="Stroke-1-Copy-14"/></g></svg> </div>');
    }
    $("#price_ins").text(price);

    /* weight  */
    var dataProducts = $(this).find('.productData');
    var weight = dataProducts.data('weight');
    $("#weight").find("span.weight").text(weight);

    /* expedition */
    chooseExpedition();
  });

  customizator();
  customizatePrice();

  /* variants */
  $("select[name='variant']").on('change', function () {
    var id = $(this).find(":selected").val();
    if (variantPrices)
      $("#price_ins").text(variantPrices[id]['withTax']);
  }).change();


  var materialChecked = $("ul.o-mats input:checked");
  if (materialChecked.length === 0) {
    $("ul.o-mats li:first-child").click();
  }

}

function chooseExpedition() {
  var input = $("ul.o-mats input:checked");

  //stribro nebo nevybrano  a CustomizeProductInfo vraci ze je jina expedice
  if ((input.val() == 1 || input.length == 0) && $('input.customizator').is(':checked') && $("#customizationExpedition").length) {
    var expedition = $("#customizationExpedition").data('expedition');
  } else {
    var expedition = input.parent().find('.productData').data('expedition');
  }

  $("#expedition").text(expedition);
}
