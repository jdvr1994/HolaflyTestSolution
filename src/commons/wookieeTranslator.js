LOOKUP_WOOKIEE_TO_ENGLISH = {
    'ra' : 'a', 'rh' : 'b', 'oa' : 'c', 'wa' : 'd', 'wo' : 'e', 'ww' : 'f',
    'rr' : 'g', 'ac' : 'h', 'ah' : 'i', 'sh' : 'j', 'or' : 'k', 'an' : 'l',
    'sc' : 'm', 'wh' : 'n', 'oo' : 'o', 'ak' : 'p', 'rq' : 'q', 'rc' : 'r',
    'c' : 's',  'ao' : 't', 'hu' : 'u', 'ho' : 'v', 'oh' : 'w', 'k' : 'x',
    'ro' : 'y', 'uf' : 'z'
}

to_wookie = (str)=>{
    if(!str) return undefined
    let wookie = ''
    const reverse_lookup = Object.keys(LOOKUP_WOOKIEE_TO_ENGLISH).reduce((newLookup, key) => {
        const value = LOOKUP_WOOKIEE_TO_ENGLISH[key]
        newLookup[value] = key
        return newLookup
    }, {})

    const chars = str.split('')
    for (const c of chars) {
        wookie += (reverse_lookup[c])
    }
    return wookie
}

from_wookie = (str)=>{
    if(!str) return undefined
    const chars = str.split('')
    const lookup = LOOKUP_WOOKIEE_TO_ENGLISH
    let english = ''
    let offset = 0
    while (offset < chars.length){
        let cur = chars[offset]
        let nxt = chars.slice(offset, offset+2).join('')
        if (lookup[cur]){
            english += lookup[cur]
        } else if (lookup[nxt]){
            english += lookup[nxt]
            offset += 1
        }else{
            english += cur
        }
        offset += 1
    }
        
    return english
}

getValueFromWookieeBody = (wookieeBody, key) =>{
    return from_wookie(wookieeBody[to_wookie(key)])
}

module.exports = {
    LOOKUP_WOOKIEE_TO_ENGLISH,
    to_wookie,
    from_wookie,
    getValueFromWookieeBody
}