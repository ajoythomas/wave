(function($) {
	
	 jQuery('.cmb2-wrap'  ).on( 'click', '.button.wysiwyg-editor',function ()
    {
      popEditor(this);
      //  return false; // Need this if your button is a <button>
    } );

    function popEditor( t )
    {
      var theSource = jQuery( t ).closest( '.cmb-td' ).find( '.cmb2_textarea' );
      var title = jQuery( t ).closest( '.postbox.cmb-row' ).find( 'h3.cmb-group-title' ).text();
      jQuery( '<div id="editor"></div>' ).dialog( {
        modal: true,
        width: 700,
        title: title + ' description',
        open: function ( event, ui )
        {
          jQuery( '#editor' ).html( '<textarea class="theeditor">' + jQuery( theSource ).val() + '</textarea>' );
          jQuery( '.theeditor' ).trumbowyg( {
			btns: [
				['viewHTML'],
				['formatting'],
				'btnGrp-semantic',
				['superscript', 'subscript'],
				['link'],
				['insertImage'],
				'btnGrp-justify',
				'btnGrp-lists',
				['horizontalRule'],
			],
            semantic: true,
            fullscreenable: true
          } );
        },
        close: function ( event, ui )
        {
          var theEditor = jQuery( '.theeditor' );
          jQuery( theSource ).val( theEditor.val() );
          theEditor.trumbowyg( 'destroy' );
          jQuery( '#editor' ).dialog( 'destroy' );
        }
      } );
    }

	/* Event - Document Ready */	
	$(document).ready(function($) {

		/* Disable : Page Editor */
		if( $('body.post-type-page #postdivrich').length && $('select#page_template').length ) {

			/* Sidebar Layout */
			if( $('select#page_template').val() != 'default' ) {
				$('body.post-type-page #postdivrich').slideUp(500);
			}

			$('select#page_template').live('change', function() {

				/* Sidebar Layout */
				if( $('select#page_template').val() != 'default' ) {
					$('body.post-type-page #postdivrich').slideUp(500);
				}
				else {
					$('body.post-type-page #postdivrich').slideDown(500);
					$(window).scrollTop($(window).scrollTop()+1);
				}

			});
		}

		/* Post : Formats */
		if( $('#post-formats-select').length ) {

			if( $('input[id="post-format-video"]').is(':checked') ) {
				$('#enhenyerowp_cf_metabox_post_video').slideDown(500); /* Enable Video */
				/* $('#enhenyerowp_cf_metabox_post_quote').slideUp(500); *//* Disable Quote */
				$('#enhenyerowp_cf_metabox_post_gallery').slideUp(500); /* Disable Gallery */
				$('#enhenyerowp_cf_metabox_post_audio').slideUp(500); /* Disable Audio */
			}
			else if( $('input[id="post-format-quote"]').is(':checked') ) {
				$('#enhenyerowp_cf_metabox_post_video').slideUp(500); /* Disable Video */
				/* $('#enhenyerowp_cf_metabox_post_quote').slideDown(500); */ /* Enable Quote */
				$('#enhenyerowp_cf_metabox_post_gallery').slideUp(500); /* Disable Gallery */
				$('#enhenyerowp_cf_metabox_post_audio').slideUp(500); /* Disable Audio */
			}
			else if( $('input[id="post-format-gallery"]').is(':checked') ) {
				$('#enhenyerowp_cf_metabox_post_video').slideUp(500); /* Disable Video */
				/* $('#enhenyerowp_cf_metabox_post_quote').slideUp(500); *//* Disable Quote */
				$('#enhenyerowp_cf_metabox_post_gallery').slideDown(500); /* Enable Gallery */
				$('#enhenyerowp_cf_metabox_post_audio').slideUp(500); /* Disable Audio */
			}
			else if( $('input[id="post-format-audio"]').is(':checked') ) {
				$('#enhenyerowp_cf_metabox_post_video').slideUp(500); /* Disable Video */
				/* $('#enhenyerowp_cf_metabox_post_quote').slideUp(500); *//* Disable Quote */
				$('#enhenyerowp_cf_metabox_post_gallery').slideUp(500); /* Disable Gallery */
				$('#enhenyerowp_cf_metabox_post_audio').slideDown(500); /* Enable Audio */
			}
			else {
				$('#enhenyerowp_cf_metabox_post_video').slideUp(500); /* Disable Video */
				/* $('#enhenyerowp_cf_metabox_post_quote').slideUp(500); *//* Disable Quote */
				$('#enhenyerowp_cf_metabox_post_gallery').slideUp(500); /* Disable Gallery */
				$('#enhenyerowp_cf_metabox_post_audio').slideUp(500); /* Disable Audio */
			}

			/* On Change : Event */
			$('#post-formats-select').live('change', function() {
				if( $('input[id="post-format-video"]').is(':checked') ) {
					$('#enhenyerowp_cf_metabox_post_video').slideDown(500); /* Enable Video */
					/* $('#enhenyerowp_cf_metabox_post_quote').slideUp(500); *//* Disable Quote */
					$('#enhenyerowp_cf_metabox_post_gallery').slideUp(500); /* Disable Gallery */
					$('#enhenyerowp_cf_metabox_post_audio').slideUp(500); /* Disable Audio */
				}
				else if( $('input[id="post-format-quote"]').is(':checked') ) {
					$('#enhenyerowp_cf_metabox_post_video').slideUp(500); /* Disable Video */
					/* $('#enhenyerowp_cf_metabox_post_quote').slideDown(500); *//* Enable Quote */
					$('#enhenyerowp_cf_metabox_post_gallery').slideUp(500); /* Disable Gallery */
					$('#enhenyerowp_cf_metabox_post_audio').slideUp(500); /* Disable Audio */
				}
				else if( $('input[id="post-format-gallery"]').is(':checked') ) {
					$('#enhenyerowp_cf_metabox_post_video').slideUp(500); /* Disable Video */
					/* $('#enhenyerowp_cf_metabox_post_quote').slideUp(500); *//* Disable Quote */
					$('#enhenyerowp_cf_metabox_post_gallery').slideDown(500); /* Enable Gallery */
					$('#enhenyerowp_cf_metabox_post_audio').slideUp(500); /* Disable Audio */
				} 
				else if( $('input[id="post-format-audio"]').is(':checked') ) {
					$('#enhenyerowp_cf_metabox_post_video').slideUp(500); /* Disable Video */
					/* $('#enhenyerowp_cf_metabox_post_quote').slideUp(500); *//* Disable Quote */
					$('#enhenyerowp_cf_metabox_post_gallery').slideUp(500); /* Disable Gallery */
					$('#enhenyerowp_cf_metabox_post_audio').slideDown(500); /* Enable Audio */
				}
				else {
					$('#enhenyerowp_cf_metabox_post_video').slideUp(500); /* Disable Video */
					/* $('#enhenyerowp_cf_metabox_post_quote').slideUp(500); *//* Disable Quote */
					$('#enhenyerowp_cf_metabox_post_gallery').slideUp(500); /* Disable Gallery */
					$('#enhenyerowp_cf_metabox_post_audio').slideUp(500); /* Disable Audio */
				}
			});
		}

		/* Post : Video */
		if( $('#enhenyerowp_cf_post_video_source').val() == 'video_link' ) {
			$('.cmb2-id-enhenyerowp-cf-post-video-link').slideDown(500); /* Enable Video Link */
			$('.cmb2-id-enhenyerowp-cf-post-video-embed').slideUp(500); /* Disable Embed */
			$('.cmb2-id-enhenyerowp-cf-post-video-local').slideUp(500); /* Disable Video Local */
		}
		else if ( $('#enhenyerowp_cf_post_video_source').val() == 'video_embed_code' ) {
			$('.cmb2-id-enhenyerowp-cf-post-video-link').slideUp(500); /* Disable Video Link */
			$('.cmb2-id-enhenyerowp-cf-post-video-embed').slideDown(500); /* Enable Embed */
			$('.cmb2-id-enhenyerowp-cf-post-video-local').slideUp(500); /* Disable Video Local */
		}
		else if ( $('#enhenyerowp_cf_post_video_source').val() == 'video_upload_local' ) {
			$('.cmb2-id-enhenyerowp-cf-post-video-link').slideUp(500); /* Disable Video Link */
			$('.cmb2-id-enhenyerowp-cf-post-video-embed').slideUp(500); /* Disable Embed */
			$('.cmb2-id-enhenyerowp-cf-post-video-local').slideDown(500); /* Enable Video Local */
		}
		else {
			$('.cmb2-id-enhenyerowp-cf-post-video-link').slideUp(500); /* Disable Video Link */
			$('.cmb2-id-enhenyerowp-cf-post-video-embed').slideUp(500); /* Disable Embed */
			$('.cmb2-id-enhenyerowp-cf-post-video-local').slideUp(500); /* Disable Video Local */
		}

		/* On Change : Event */
		$('#enhenyerowp_cf_post_video_source').live('change', function() {

			if( $('#enhenyerowp_cf_post_video_source').val() == 'video_link' ) {
				$('.cmb2-id-enhenyerowp-cf-post-video-link').slideDown(500); /* Enable Video Link */
				$('.cmb2-id-enhenyerowp-cf-post-video-embed').slideUp(500); /* Disable Embed */
				$('.cmb2-id-enhenyerowp-cf-post-video-local').slideUp(500); /* Disable Video Local */
			}
			else if ( $('#enhenyerowp_cf_post_video_source').val() == 'video_embed_code' ) {
				$('.cmb2-id-enhenyerowp-cf-post-video-link').slideUp(500); /* Disable Video Link */
				$('.cmb2-id-enhenyerowp-cf-post-video-embed').slideDown(500); /* Enable Embed */
				$('.cmb2-id-enhenyerowp-cf-post-video-local').slideUp(500); /* Disable Video Local */
			}
			else if ( $('#enhenyerowp_cf_post_video_source').val() == 'video_upload_local' ) {
				$('.cmb2-id-enhenyerowp-cf-post-video-link').slideUp(500); /* Disable Video Link */
				$('.cmb2-id-enhenyerowp-cf-post-video-embed').slideUp(500); /* Disable Embed */
				$('.cmb2-id-enhenyerowp-cf-post-video-local').slideDown(500); /* Enable Video Local */
			}
			else {
				$('.cmb2-id-enhenyerowp-cf-post-video-link').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-post-video-embed').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-post-video-local').slideUp(500);
			}
		});

		/* Post : Audio */
		if( $('#enhenyerowp_cf_post_audio_source').val() == 'soundcloud_link' ) {
			$('.cmb2-id-enhenyerowp-cf-post-soundcloud-url').slideDown(500); /* Enable Soundcloud URL */
			$('.cmb2-id-enhenyerowp-cf-post-audio-local').slideUp(500); /* Disable Audio Local */
		}
		else if ( $('#enhenyerowp_cf_post_audio_source').val() == 'audio_upload_local' ) {
			$('.cmb2-id-enhenyerowp-cf-post-soundcloud-url').slideUp(500); /* Enable Soundcloud URL */
			$('.cmb2-id-enhenyerowp-cf-post-audio-local').slideDown(500); /* Disable Audio Local */
		}
		else {
			$('.cmb2-id-enhenyerowp-cf-post-soundcloud-url').slideUp(500); /* Enable Soundcloud URL */
			$('.cmb2-id-enhenyerowp-cf-post-audio-local').slideUp(500); /* Disable Audio Local */
		}

		/* On Change : Event */
		$('#enhenyerowp_cf_post_audio_source').live('change', function() {
			if( $('#enhenyerowp_cf_post_audio_source').val() == 'soundcloud_link' ) {
				$('.cmb2-id-enhenyerowp-cf-post-soundcloud-url').slideDown(500); /* Enable Soundcloud URL */
				$('.cmb2-id-enhenyerowp-cf-post-audio-local').slideUp(500); /* Disable Audio Local */
			}
			else if ( $('#enhenyerowp_cf_post_audio_source').val() == 'audio_upload_local' ) {
				$('.cmb2-id-enhenyerowp-cf-post-soundcloud-url').slideUp(500); /* Enable Soundcloud URL */
				$('.cmb2-id-enhenyerowp-cf-post-audio-local').slideDown(500); /* Disable Audio Local */
			}
			else {
				$('.cmb2-id-enhenyerowp-cf-post-soundcloud-url').slideUp(500); /* Enable Soundcloud URL */
				$('.cmb2-id-enhenyerowp-cf-post-audio-local').slideUp(500); /* Disable Audio Local */
			}
		});

		/* Page : Metabox */
		if( $('#enhenyerowp_cf_metabox_page').length || $('#enhenyerowp_cf_metabox_product').length ) {

			/* Header Background Color */
			if( $('select#enhenyerowp_cf_page_desc_display').val() != 'enable' ) {
				$('.cmb2-id-enhenyerowp-cf-page-additional-title').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-page-short-description').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-page-description').slideUp(500);
			}

			$('#enhenyerowp_cf_page_desc_display').live('change', function() {

				/* Header Background Image */
				if( $('select#enhenyerowp_cf_page_desc_display').val() == 'disable' ) {
					$('.cmb2-id-enhenyerowp-cf-page-additional-title').slideUp(500);
					$('.cmb2-id-enhenyerowp-cf-page-short-description').slideUp(500);
					$('.cmb2-id-enhenyerowp-cf-page-description').slideUp(500);
				}
				else {
					$('.cmb2-id-enhenyerowp-cf-page-additional-title').slideDown(500);
					$('.cmb2-id-enhenyerowp-cf-page-short-description').slideDown(500);
					$('.cmb2-id-enhenyerowp-cf-page-description').slideDown(500);
				}
			});

			/* Sidebar Layout - Page */
			if( $('select#enhenyerowp_cf_sidebar_layout').val() == 'no_sidebar' ) {
				$('.cmb2-id-enhenyerowp-cf-widget-area').slideUp(500);
			}

			$('select#enhenyerowp_cf_sidebar_layout').live('change', function() {

				/* Sidebar Layout - Page */
				if( $('select#enhenyerowp_cf_sidebar_layout').val() == 'no_sidebar' ) {
					$('.cmb2-id-enhenyerowp-cf-widget-area').slideUp(500);
				}
				else {
					$('.cmb2-id-enhenyerowp-cf-widget-area').slideDown(500);
				}

			});
		}

		/* Portfolio Box 1 */
		if( $('#enhenyerowp_cf_portfolio_bx1_view').val() == 'disable' ) {
			
			$('.cmb2-id-enhenyerowp-cf-portfolio-title1').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-short-desc1').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-full-desc1').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-one1').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-one-cap1').slideUp(500);
		}
		else {			
			$('.cmb2-id-enhenyerowp-cf-portfolio-title1').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-short-desc1').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-full-desc1').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-one1').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-one-cap1').slideDown(500);
		}
		/* On Change : Event */
		$('#enhenyerowp_cf_portfolio_bx1_view').live('change', function() {

			if( $('#enhenyerowp_cf_portfolio_bx1_view').val() == 'disable' ) {
				
				$('.cmb2-id-enhenyerowp-cf-portfolio-title1').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-short-desc1').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-full-desc1').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-one1').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-one-cap1').slideUp(500);
			}
			else {
				$('.cmb2-id-enhenyerowp-cf-portfolio-title1').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-short-desc1').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-full-desc1').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-one1').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-one-cap1').slideDown(500);
			}
		});

		/* Portfolio Box 2 */
		if( $('#enhenyerowp_cf_portfolio_bx2_view').val() == 'disable' ) {
			
			$('.cmb2-id-enhenyerowp-cf-portfolio-title2').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-short-desc2').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-one2').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-one-cap2').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-two2').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-two-cap2').slideUp(500);
		}
		else {

			$('.cmb2-id-enhenyerowp-cf-portfolio-title2').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-short-desc2').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-one2').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-one-cap2').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-two2').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-two-cap2').slideDown(500);
		}
		/* On Change : Event */
		$('#enhenyerowp_cf_portfolio_bx2_view').live('change', function() {
			
			if( $('#enhenyerowp_cf_portfolio_bx2_view').val() == 'disable' ) {
				$('.cmb2-id-enhenyerowp-cf-portfolio-title2').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-short-desc2').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-one2').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-one-cap2').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-two2').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-two-cap2').slideUp(500);
			}
			else {

				$('.cmb2-id-enhenyerowp-cf-portfolio-title2').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-short-desc2').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-one2').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-one-cap2').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-two2').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-two-cap2').slideDown(500);
			}
		});

		/* Portfolio Box 3 */
		if( $('#enhenyerowp_cf_portfolio_bx3_view').val() == 'disable' ) {
			
			$('.cmb2-id-enhenyerowp-cf-portfolio-title3').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-short-desc3').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-one3').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-two3').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-three3').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-one-cap3').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-two-cap3').slideUp(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-three-cap3').slideUp(500);
		}
		else {

			$('.cmb2-id-enhenyerowp-cf-portfolio-title3').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-short-desc3').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-one3').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-two3').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-three3').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-one-cap3').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-two-cap3').slideDown(500);
			$('.cmb2-id-enhenyerowp-cf-protfolio-img-three-cap3').slideDown(500);
		}
		/* On Change : Event */
		$('#enhenyerowp_cf_portfolio_bx3_view').live('change', function() {
			
			if( $('#enhenyerowp_cf_portfolio_bx3_view').val() == 'disable' ) {
			
				$('.cmb2-id-enhenyerowp-cf-portfolio-title3').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-short-desc3').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-one3').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-two3').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-three3').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-one-cap3').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-two-cap3').slideUp(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-three-cap3').slideUp(500);
			}
			else {

				$('.cmb2-id-enhenyerowp-cf-portfolio-title3').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-short-desc3').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-one3').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-two3').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-three3').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-one-cap3').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-two-cap3').slideDown(500);
				$('.cmb2-id-enhenyerowp-cf-protfolio-img-three-cap3').slideDown(500);
			}
		});
	
	});
})(jQuery);