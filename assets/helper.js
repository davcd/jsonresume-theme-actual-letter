const md = require('markdown-it')();
const iso = require('iso-3166-1');
const moment = require('moment');


const mdToHtml = (string) => string ? md.render(string) : ''

const calcLocation = (location) => {
    let array = []

    if(!location){
        return null
    }

    if (location.city) {
        array.push(location.city)
    }

    if (location.region) {
        array.push(location.region)
    }

    if (location.countryCode) {
        const country = iso.whereAlpha2(location.countryCode)
        array.push(country && array.length < 2 ? country.country : location.countryCode)
    }


    return array.length > 0 ? array.join(', ') : null
}

const getCurrentDate = () => moment().format('LL')

module.exports = {
    mdToHtml,
    calcLocation,
    getCurrentDate
}
