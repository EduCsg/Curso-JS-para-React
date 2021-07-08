import CardGame from "../../components/Card-game";

function BoardGame(amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

    console.log($htmlBoardGame);

    return $htmlBoardGame;
}

export default BoardGame;
