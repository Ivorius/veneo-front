function veneoSelectSubmit() {

//After choose from selectbox, submit form by ajax
  $('form.selectSubmit input[type=submit]').parent().hide();
  $('form.selectSubmit label').hide();
  $('form.selectSubmit select').change(function () {
    var form = $(this).closest('form');
    $.nette.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: form.serialize()
    });
  });

}
