(function (root) {
  var TTT = root.TTT = (root.TTT || {});
  var turn = "x"
  function toggleTurn() {
    turn === "x" ? turn = "o" : turn = "x";
  }

  var game = new TTT.Game();


  $(document).ready(function () {
    $('.tile').on('click', function () {
      var tile = this;
      console.log('click');
      console.log($(tile).data('coords'));
      game.turn($(tile).data('coords'), function () {
        $(tile).addClass(turn);
        toggleTurn();
        if (game.winner())
        {
          alert("Someone won!");
        }
      })
    })
  })

})(this);