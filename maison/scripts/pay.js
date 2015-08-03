Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
	  
$('#payment-form').submit(function(event) {
	var $form = $(this);
	$form.find('button').prop('disabled', true);

	Stripe.card.createToken($form, stripeResponseHandler);

	return false;
})

function stripeResponseHandler(status, response) {
	var $form = $('#payment-form');

	if (response.error) {
		alert(response.error.message);
	} else {
		var token = repsonse.id;
		$form.append($('<input type="hidden" name="stripeToken" />').val(token));
		$form.get(0).submit();
	}
}