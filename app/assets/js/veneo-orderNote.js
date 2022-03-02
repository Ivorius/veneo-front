(function($) {
	$(document).ready(function() {
		//set
		$("form#frm-shipPayForm, form#frm-orderForm").on("focusout", "textarea[name='note']", function() {
			var orderNote = $(this).val();
			if (orderNote !== "") {
				localStorage.setItem("orderNote", orderNote);
			}
		});

		//get
		$("form#frm-shipPayForm textarea[name='note'], form#frm-orderForm textarea[name='note']").ready(function() {		
			var orderNote = localStorage.getItem("orderNote");
			if (orderNote !== "") {
				$("form textarea[name='note']").val(orderNote);
			}
		});

	});
})(jQuery);