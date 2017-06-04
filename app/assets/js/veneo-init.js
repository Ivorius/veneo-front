$(document).ready(function() {

	$.nette.init();

	$(".inlinebox").colorbox({inline: true});
    $(".colorbox").colorbox();

	
	$("#frm-filterForm select").on("change", function() {
		 $(this).parents("form").find('#frm-filterForm-submit').click();
	});
	
	/* FORUM */
	//textcaptcha
	$('input[data-antitext]').each(function() {
		$(this).val($(this).data('antitext'));
	});
	// reply
	$('a.reply').click(function(e) {
		var reply = $(this).data('reply');
		$('form#kom_form input[name=re]').val(reply);
		e.preventDefault();
	});


	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur().parents('form').submit(function() {
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});

	$('a.toggle').click(function(e) {
		e.preventDefault();
		var co = $(this).attr('href');
		$(co).toggle();
	});

	//After choose from selectbox, submit form by ajax
	$('form.selectSubmit input[type=submit]').parent().hide();
    $('form.selectSubmit label').hide();
	$('form.selectSubmit select').change(function() {
		var form = $(this).closest('form');
		$.nette.ajax({
			type: 'POST',
			url: form.attr('action'),
			data: form.serialize()
		});
	});

	//ajax na úvodce
    jQuery('#hpCategory li a').click(function(e){
        var $link = jQuery(this);
        jQuery.nette.ajax({
            url: $link.attr('data-catproducts-url')
        });
        e.preventDefault();
    });


    jQuery(".topSelector").change(function () {
        location.href = jQuery(this).find(':selected').data('url');
    })

    //zbozi
	 materials();

});


function materials() {
    $("ul.o-mats").on("click", "li", function() {
        var chooseMaterial = $(this).data("option");
        $("input[name=parameter_4][value="+chooseMaterial+"]").prop('checked', true);
        var material = ($(this).find(".o-mats__title").text());
        var price = $(this).find(".o-mats__price").text();
        $("#mat_ins").text(material);

        if($("#mat_ins").parent().find(".o-sticky__icon--jewel").length == 0 ) {
            $("#mat_ins").parent().prepend('<div class="o-sticky__icon--jewel"><svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg"><title>Stroke 1 Copy 14</title><g id="icons" stroke-width="2.5" fill="none" fill-rule="evenodd"><path d="M12 16L2 7l4-5h12l4 5-10 9z" id="Stroke-1-Copy-14"/></g></svg> </div>');
        }
        $("#price_ins").text(price);
    });
}


