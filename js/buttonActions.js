function toggleFavorite(e) {
  if ($(e).hasClass('favorite'))
    $(e).removeClass('favorite');
  else
    $(e).addClass('favorite');
}

function toggleNotifications() {
  if ($('.notification-tray').hasClass('hide')) {
    $('.notification-tray').removeClass('hide');
    $('.dropdown-content').addClass('hide');
  }
  else {
    $('.notification-tray').addClass('hide');
  }
}

/* Prompts User to Deletes a BookMarx Folder*/
function showDeleteConf(e) {
  var parentContainer = e.parentNode;
  $(e).addClass('hide');
  $(parentContainer).find( ".deleteConfirmationContainer").removeClass('hide');
}

function cancelDelete(e) {
  var parentContainer = e.parentNode.parentNode;
  $(parentContainer).find( ".closeButton").removeClass('hide');
  $(parentContainer).find( ".deleteConfirmationContainer").addClass('hide');
}

/* Deletes a BookMarx*/
function confDelete(e) {
  var bookmarx = e.parentNode.parentNode.parentNode;
  var parentContainer = bookmarx.parentNode.parentNode;
  var elementHeight = $(bookmarx).height();

  $(bookmarx).remove();
  var newheight = $(parentContainer).height()-elementHeight;
  $(parentContainer).css('height', newheight +'px');

}

/* Toggles the filer */
function toggleSort() {
  if ($('.dropdown-content').hasClass('hide')) {
    $('.dropdown-content').removeClass('hide');
    $('.notification-tray').addClass('hide');
  }
  else {
    $('.dropdown-content').addClass('hide');
  }
}

function sort(e) {
  toggleSort();
}

function toggleFolder(e) {
  console.log(e)
  if ($(e).hasClass('closedFolder')) {
    $(e).removeClass('closedFolder').addClass('openFolder');
    $(e).find('img').addClass('openFolderAnim').removeClass('removeFolderAnim');
    expandFolder($(e.parentNode));
  }
  // If folder is open
  else {
    $(e).addClass('closedFolder').removeClass('openFolder');
    $(e.parentNode.parentNode).find('.folderContent').addClass('hide');
    $(e).find('img').removeClass('openFolderAnim').addClass('removeFolderAnim');
    removeFromRight($(e.parentNode));
  }
}

function expandFolder(e) {
  var folderId = e.context.id;
  $('.folderContent').each(function(){
    if (this.id != folderId ) {
      $(this).addClass('hide')
    }
  });

  console.log(folderId)
  $('.right-container').find('.'+folderId).removeClass("hide");
  console.log('hi')
  $('.slide-container').find('.folderToggle').each(function() {
    var id = $(this).context.parentNode.id
    if (id != folderId) {
      $(this).addClass('closedFolder').removeClass('openFolder');
      $(this).find('img').removeClass('openFolderAnim'); 
    }
  });
    /*var growDiv = e.find('.folder');
    var thisFolder=growDiv[0].id;
    var thisMarks=$(e.context.parentNode.parentNode.parentNode).find(thisFolder);
   
    thisMarks.removeClass("hide");

    if (growDiv.height()) {
      var maxHeight = growDiv.height();
      growDiv.css('height', 0);
      growDiv.animate({
            height: maxHeight +'px'
        }, 200);
    }
     */
}

function removeFromRight(e) {
  var folderId = e.context.id;

    $('.right-container').find('.'+folderId).addClass("hide");
  /*
     var growDiv = e.find('.folder');
    var thisFolder=growDiv.context.id;
     var thisMarks=$("rightContainer").find("."+thisFolder);
    thisMarks.addClass("hide");

    var rightContainer=$(".folderContent-right")[0];
    rightContainer.innerHTML=""
  */

}

function expandFabOverlay() {
  if ($('.overlayContainer').find('.fab').hasClass('rotateFab')) {
    $('.overlayContainer').find('.fab').removeClass('rotateFab').addClass('unRotateFab');
    $('.mini-fab-container').children().each(function(index, element) {
      $(this).removeClass('rollin').addClass('rollout');
    });
    $('.overlay').addClass('hide');
  }
  // Show Overlay
  else {
    $('.overlayContainer').find('.fab').addClass('rotateFab').removeClass('unRotateFab');
    $('.mini-fab-container').removeClass('hide');
    $('.mini-fab-container').children().each(function(index, element) {
      $(this).removeClass('rollout').addClass('rollin');
    });
    $('.overlay').removeClass('hide');
  }
}

function closeOverlay () {
  if (! ($('.overlay').hasClass('hide')) ) {
      expandFabOverlay();
  }
}

function deleteFolder() {
  $('.deleteContainer').removeClass('hide');
  $('.actionContainer').addClass('hide');
  $('.deleteConf').removeClass('hide');
}

function cancelDeleteFolder() {
  $('.deleteContainer').addClass('hide');
  $('.actionContainer').removeClass('hide');
  $('.deleteConf').addClass('hide');
}
