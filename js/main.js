(function() {
  $(document).ready(function() {

    var subCategories = {};

    $('#main-content div.category').each(function( index ) {
      var categoryName = $( this ).attr( 'data-category' );

      var $list = $( '<ul></ul>' );

      $( '> div', this ).each(function( index ) {
        var link = $( '.link', this )[0];
        var linkContent = link.innerHTML;

        link.remove();
        var content = $( this );

        var newItem = $("<li>").append(linkContent).click(function () {
          $( '#content-container' )
            .empty()
            .append( content );
        });

        $list.append( newItem );

        //link.remove();
      });

      subCategories[ categoryName ] = $list;
    });

    var showSlideContent = function( $slide ) {
      var categoryName = $slide.attr( 'data-category' );
      var content = subCategories[ categoryName ];
      $( '#sub-category' )
        .empty()
        .append( content );
    };

    $("#horizAccord").liteAccordion({
      "theme":"custom",
      "containerWidth":"800",
      "containerHeight":"140",
      "headerWidth":"80",
      "slideSpeed":"400",
      "onTriggerSlide": showSlideContent
    });
  });
}());
