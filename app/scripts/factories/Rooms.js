(function() {
  function Rooms($firebaseArray) {


    var ref = firebase.database().ref().child("rooms");

    var rooms = $firebaseArray(ref)

    return {
        all: rooms
    };
  }

  angular
    .module('cha-cha')
    .factory('Rooms', ['$firebaseArray', Rooms]);
})();