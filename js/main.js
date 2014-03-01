(function() {
  $(document).ready(function() {
    $('#main-content div').each(function( index ) {
      var link = $('.link', this)[0];
      var linkContent = $('.link', this)[0].innerHTML;
      var newItem = $("<li>").append(linkContent).click(function () {
	$('#main-content div').hide();
	$('#main-content div:nth-child(' + ( index + 1 ) + ')').show();
      });
      $('#sidebar ul').append(newItem);
      link.remove();
    });

    $("#horizAccord").liteAccordion({
      "theme":"custom",
      "containerWidth":"800",
      "containerHeight":"140",
      "headerWidth":"80",
      "slideSpeed":"400"
    });
  });
}());
