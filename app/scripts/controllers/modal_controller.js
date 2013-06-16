'use strict';

function ModalCtrl($scope) {
  var modal_visible = false;

  $scope.modalVisible = function() {
    return modal_visible;
  }

  $scope.toggleModal = function() {
    jQuery('#main-modal').foundation('reveal', 'open', {
      animation: 'fade'
    });
    modal_visible = !modal_visible;
  }
}
