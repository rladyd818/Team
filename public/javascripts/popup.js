function dialog() {

    var dialogBox = $('.dialog'),
        dialogTrigger = $('.dialog__trigger'),
        dialogClose = $('.dialog__close'),
        dialogTitle = $('.dialog__title'),
        dialogContent = $('.dialog__content'),
        dialogAction = $('.dialog__action');

    // Open the dialog
    dialogTrigger.on('click', function(e) {
        dialogBox.toggleClass('dialog--active');
        e.stopPropagation()
    });

    // Close the dialog - click close button
    dialogClose.on('click', function() {
        dialogBox.removeClass('dialog--active');
    });

    // Close the dialog - press escape key // key#27
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            dialogBox.removeClass('dialog--active');
        }
    });

    // Close dialog - click outside
    $(document).on("click", function(e) {
        if ($(e.target).is(dialogBox) === false &&
            $(e.target).is(dialogTitle) === false &&
            $(e.target).is(dialogContent) === false &&
            $(e.target).is(dialogAction) === false) {
            dialogBox.removeClass("dialog--active");
        }
    });

};

// Run function when the document has loaded
$(function() {
    dialog();
});

/*
// signup dialog
function S_dialog() {

    var S_dialogBox = $('.S_dialog'),
        S_dialogTrigger = $('.S_dialog__trigger'),
        S_dialogClose = $('.S_dialog__close'),
        S_dialogTitle = $('.S_dialog__title'),
        S_dialogContent = $('.S_dialog__content'),
        S_dialogAction = $('.S_dialog__action');

    // Open the dialog
    S_dialogTrigger.on('click', function(e) {
        S_dialogBox.toggleClass('S_dialog--active');
        e.stopPropagation()
    });

    // Close the dialog - click close button
    S_dialogClose.on('click', function() {
        S_dialogBox.removeClass('S_dialog--active');
    });

    // Close the dialog - press escape key // key#27
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            S_dialogBox.removeClass('S_dialog--active');
        }
    });

    // Close dialog - click outside
    $(document).on("click", function(e) {
        if ($(e.target).is(S_dialogBox) === false &&
            $(e.target).is(S_dialogTitle) === false &&
            $(e.target).is(S_dialogContent) === false &&
            $(e.target).is(S_dialogAction) === false) {
                S_dialogBox.removeClass("S_dialog--active");
        }
    });

};

// Run function when the document has loaded
$(function() {
    S_dialog();
});
*/