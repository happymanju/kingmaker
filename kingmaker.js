

function generateTitles(name, n = 5) {
    if (!name || typeof name !== 'string') {
        throw new Error("Please enter a valid string input -- can't give a title to a number or something!")
    }

    if (n <= 0) {
        throw new Error("you must generate more than 0 titles (n must be greater than 0)")
    }

    const prefixes = getPrefixes();
    const suffixes = getSuffixes();



    const newNames = [];

    for (let i = 0; i <= n; i++) {
        let prefixIndx = Math.floor(Math.random() * prefixes.length);
        let suffixIndx = Math.floor(Math.random() * suffixes.length);
        newNames.push(name + ' ' + 'the ' + prefixes[prefixIndx] + suffixes[suffixIndx])

    }

    return newNames;


}

function getPrefixes() {
    return [
        'Wave',
        'Fire',
        'King',
        'Earth',
        'Sky',
        'Heart',
        'Blade',
        'Dragon',
        'Ice',
        'Ash',
        'Cinder',
        'Bone'
    ]
}

function getSuffixes() {
    return [
        'breaker',
        'tamer',
        'maker',
        'caller',
        'slayer',
        'weaver',
        'shaper',
        'speaker',
        'borne'
    ]
}

module.exports = {
    generateTitles,
    getPrefixes,
    getSuffixes
};