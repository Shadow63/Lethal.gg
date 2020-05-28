import { getAbilities } from "./calc.js";
const $root = $("#root");
const $champs = $("#champs");
let champs = "";

renderSummonerSearchbar();
$champs.append(renderChampStats("one"));
$champs.append(renderChampStats("two"));
renderDamageNumbers();



/**
 * Renders the summoner searchbar
 */
function renderSummonerSearchbar() {
    let hold = `
        <div id="live-game">
            <input placeholder="Enter Summoner's Name" id="name-inputbox"> </input>
        </div>
    `;
    $root.append(hold);
}

function renderDamageNumbers() {
    let hold = `
    <div id='total-damage'>
        <div id="ability-damage-buttons"> 
        </div>
        <div id="ability-damage" class= columns> 
            <div id="P-damage" class="column"></div>
            <div id="Q-damage" class="column"></div>
            <div id="W-damage" class="column"></div>
            <div id="E-damage" class="column"></div>
            <div id="R-damage" class="column"></div>
        </div>
    </div>`
    $(`#damage-numbers`).append(hold);
}

/**
 * Handles Live Game button press
 */
$('#live-game-button').on('click', function(e) {        
    // $("#champ-lists").remove();
    // $(`#input-level-one`).remove();
    // $(`#input-level-two`).remove();
    // $(`#add-item-button-one`).remove();
    // $(`#add-item-button-two`).remove();
    // $(`#stats-button-one`).remove();
    // $(`#stats-button-two`).remove();
    // $(`#runes-button-one`).remove();
    // $(`#runes-button-two`).remove();
    champs = $("#champions").detach();
    $("#calc-button").removeClass('disable');
    $(this).addClass('disable');
    renderSummonerSearchbar();

    e.preventDefault();
});

export function getChamps() {
    return champs;
}

function renderChampStats(num) {
    let hold = `
    <div class="column champ-column">
        <div id="champ-name-${num}"></div>

        <div id="champ-pictures-${num}">
            <img id="image-${num}" ></img>
        </div>

        <div id="champ-buttons-${num}"></div>
        <div id="champ-items-${num}"></div>

        <div class="" id="champ-stats-${num}">
            <div id="level-${num}">
            </div>

            <div id="HP-${num}">
            </div>

            <div id="MP-${num}">
            </div>

            <div id="damage-${num}">
                <div id="AD-${num}">
                </div>

                <div id="AP-${num}">
                </div>
            </div>
        
            <div id="defense-${num}">
                <div id="MR-${num}">
                </div>

                <div id="armor-${num}">
                </div>
            </div>
        </div>
    </div>
    `
    return hold;
}



