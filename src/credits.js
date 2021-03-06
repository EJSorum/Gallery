const list = {
    birds: 'Image by <a href=\"https://pixabay.com/users/giani-1202/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=100367\">Giani Pralea</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=100367">Pixabay</a>',
    lake: 'Image by <a href="https://pixabay.com/users/jplenio-7645255/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3601004">jplenio</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3601004">Pixabay</a>',
    jetty: 'Image by <a href="https://pixabay.com/users/frankwinkler-64960/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=192990">Frank Winkler</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=192990">Pixabay</a>',
    tree: 'Image by <a href="https://pixabay.com/users/giani-1202/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=99852">Giani Pralea</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=99852">Pixabay</a>',
    meadow: 'Image by <a href="https://pixabay.com/users/nordseher-6327161/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6344387">Ingo Jakubke</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6344387">Pixabay</a>',
    coast: 'Image by <a href="https://pixabay.com/users/thanasispp-7223278/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6514351">Thanasis P.</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6514351">Pixabay</a>',
    waterfall: 'Image by <a href="https://pixabay.com/users/renegossner-10236719/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6473754">Rene Gossner</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6473754">Pixabay</a>',
    boardwalk: 'Image by <a href="https://pixabay.com/users/yangguangwu-23578224/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6796350">GuangWu YANG</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6796350">Pixabay</a>',
    town: 'Image by <a href="https://pixabay.com/users/elg21-3764790/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6467851">ELG21</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6467851">Pixabay</a>',
    bridge: 'Image by <a href="https://pixabay.com/users/frankwinkler-64960/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=192982">Frank Winkler</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=192982">Pixabay</a>',
    island: 'Image by <a href="https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1285147">Pexels</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1285147">Pixabay</a>',
    lavender: 'Image by <a href="https://pixabay.com/users/rdlaw-10461825/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3764937">RD Law</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3764937">Pixabay</a>'
}

// so instead of a full list, simply declare the credit for the featured pic
// need dataset to grab actual images instead of getting the ID, because
// the ID changes when the pics move.


// NOTHING WORKS

function credits() {
    let txt = document.getElementById('credits')
    let img = document.getElementById('imgB')
    switch (imgB.dataset.pic) {
        case 'birds':
            txt.innerHTML = list.birds;
            break;
        case 'lake':
            txt.innerHTML = list.lake;
            break;
        case 'jetty':
            txt.innerHTML = list.jetty;
            break;
        case 'tree':
            txt.innerHTML = list.tree;
            break;
        case 'meadow':
            txt.innerHTML = list.meadow;
            break;
        case 'coast':
            txt.innerHTML = list.coast;
            break;
        case 'waterfall':
            txt.innerHTML = list.waterfall;
            break;
        case 'boardwalk':
            txt.innerHTML = list.boardwalk;
        case 'bridge':
            txt.innerHTML = list.bridge;
            break;
        case 'island':
            txt.innerHTML = list.island;
            break;
        case 'lavender':
            txt.innerHTML = list.lavender;
    }
}

export default credits