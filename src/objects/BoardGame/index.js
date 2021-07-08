import "./style.css";
import CardGame from "../../components/Card-game";

function BoardGame(amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);

    return `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;
}

export default BoardGame;
