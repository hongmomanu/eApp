angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,  $ionicActionSheet, $timeout, $state,$ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal

        var hideSheet = $ionicActionSheet.show({
            buttons: [
                { text: '<b>医生用户</b>' },
                { text: '<b>患者用户</b>' }
            ],
            //destructiveText: 'Delete',
            titleText: '选择角色登录',
            cancelOnStateChange:false,
            //cancelText: 'Cancel',
            cancel: function() {
                //console.log('www');
                //$state.go('app')
                window.location.reload();
                // add cancel code..
            },
            buttonClicked: function(index) {

                //console.log(index);
                if(index==0){

                    window.location.href="dindex.html";
                }else{

                    window.location.href="pindex.html";
                }
                //return true;
            }
        });

});
