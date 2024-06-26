<script src="https://cdn.jsdelivr.net/gh/hamudev/jsdelivr/tour/js/jquery-3.1.1.min.js"></script>

<script src="http://code.jquery.com/jquery-latest.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hamudev/jsdelivr/tour/css/iGuider.css">
<script src="https://cdn.jsdelivr.net/gh/hamudev/jsdelivr/tour/js/jquery.iGuider.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hamudev/jsdelivr/tour/theme/neon/iGuider-theme-neon.css">
<script src="https://cdn.jsdelivr.net/gh/hamudev/jsdelivr/tour/theme/neon/iGuider-theme-neon.js"></script>

<script>
    var preseOpt = {
        'tourTitle': 'Tour Title Default',
        'startStep': '1',
        'shapeBorderRadius': '8',
        'intro': {
            'title': 'Assalamualaikum',
            'content': 'Its me again! I\'m here to help you create a beautiful invitation page.'
        },
        'steps': [
            {
                'title': 'Information',
                'content': 'This is for general settings.',
                'target': '.btn.btn-outline.btn-flex.btn-color-muted.btn-active-color-primary.flex-column.position-relative.overflow-hidden.w-100.h-85px.justify-content-center'
            },
            {
                'title': 'Information',
                'content': 'You can change your template here.',
                'target': '.btn.btn-outline.btn-flex.btn-color-muted.btn-active-color-success.flex-column.position-relative.overflow-hidden.w-100.h-85px.justify-content-center.mx-5'
            },
            {
                'title': '1st Step',
                'content': 'You can change the background music here. Try taping here now.',
                'target': '.btn.btn-outline.btn-flex.btn-color-muted.btn-active-color-danger.flex-column.position-relative.overflow-hidden.w-100.h-85px.justify-content-center',
                'event':'click'
            },
            {
                'title': 'Information',
                'content': 'You can choose music from our library or import from SoundCloud',
                'target': '.d-flex.nav-group.nav-group-outline.mb-8',
                waitElementTime:4000
            },
            {
                'title': '2nd Step',
                'content': 'Tap here to use SoundCloud Integration. Let\'s try now.',
                'target': '#custome',
                'event':'click'
            },
            {
                'title': '3rd Step',
                'content': 'Now you can use music from SoundCloud. You can learn how to use it from this tutorial button.',
                'target': '.data-custome.mb-8 div > a:nth-child(1)'
            },
            {
                'title': 'Next Step',
                'content': 'Let\'s move on to the next step!',
                'target': '#modal_music div > div > div:nth-child(1) > div',
                'event':'click'
            },
            {
                'title': '4th Step',
                'content': 'To edit each page, you can tap the pencil button.',
                'target': '#form--opening div:nth-child(2) > div',
                'event':'click'
            },
            {
                'title': '5th Step',
                'content': 'Here you can fill in all the details of your event.',
                'target': '#accordion_opening',
                waitElementTime:4000
            },
            {
                'title': '6th Step',
                'content': 'Remember to save each page after you fill out the form',
                'target': '#form--opening--submit'
            },
            {
                'title': '7th Step',
                'content': 'You can see the template details here',
                'target': '#accordion_opening div:nth-child(2) > a',
                'event':'click'
            },
            {
                'title': '8th Step',
                'content': 'You can follow this image to edit your event details.',
                'target': '#tutorial_opening div > div > div:nth-child(2) > img',
                waitElementTime:4000
            },
            {
                'title': '9th Step',
                'content': 'And let\'s move on to the last important step',
                'target': '#tutorial_opening div > div > div:nth-child(1) > div',
                'event':'click'
            },
            {
                'title': '10th Step',
                'content': 'You can see all your guests RSVP here',
                'target': '.btn.btn-sm.btn-secondary.me-3.mb-3.flex-fill'
            },
            {
                'title': '11th Step',
                'content': 'This is our invitation sharing tool app',
                'target': '.btn.btn-sm.btn-success.me-3.mb-3.flex-fill'
            },
            {
                'title': 'Last Step',
                'content': '<p>Tap here to view your invitation page after completing your event details.</p><p>Thank you for your time!</p><p>Let\'s start creating your first invitation now!</p>',
                'target': '.btn.btn-sm.btn-primary.mb-3.w-100.w-sm-auto'
            }
        ]
    }
    function myTour(){
		iGuider(preseOpt);
	}
	
	$('.d-flex.align-items-center.justify-content-between.h-100.w-100.w-sm-550px.mx-auto div > a:nth-child(1)').on('click',function(){
		myTour();
		return false;
	});

	iGuider('button',preseOpt);
	myTour();
    
    window.addEventListener('load', function(event) {
        iGuider('button',preseOpt);
    });
    </script>

    <style>
        .iguider-btn{
            display: none;
        }
    </style>
