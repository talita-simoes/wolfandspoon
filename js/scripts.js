//Filter for the Menu

$('.filter-btn').on('click', function(){
    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'breakfast-btn'){
        eachBoxes('breakfast', boxes)
    }

});

function eachBoxes(type, boxes){

    if(type == 'all') {
        $(boxes).fadeIn();
    } else {
        $(boxes).each(function() {
            if(!$(this).hasClass(type)) {
                $(this).fadeOut('slow');
            } else {
                $(this).fadeIn();
            }
        });
    }

};

$('.filter-btn').on('click', function(){
    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'lunch-btn'){
        eachBoxes('lunch', boxes)
    }

});

function eachBoxes(type, boxes){

    if(type == 'all') {
        $(boxes).fadeIn();
    } else {
        $(boxes).each(function() {
            if(!$(this).hasClass(type)) {
                $(this).fadeOut('slow');
            } else {
                $(this).fadeIn();
            }
        });
    }

};
$('.filter-btn').on('click', function(){
    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'coffee-btn'){
        eachBoxes('coffee', boxes)
    }

});

/*This code changes the Tabs*/
var triggerTabList = [].slice.call(document.querySelectorAll('#menuTab a'))
triggerTabList.forEach(function (triggerEl) {
var tabTrigger = new bootstrap.Tab(triggerEl)

triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
})
});

/* Alert Boxes */

var alertList = document.querySelectorAll('.alert')
alertList.forEach(function (alert) {
  new bootstrap.Alert(alert)
});

function submitedalert() {
    alert("The form was submitted");
};


