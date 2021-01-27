const helper = require('../assets/helper')
const mockDate = require('mockdate')

describe('mdToHtml function', () => {
  test('given null then return empty string', () => {
    expect(helper.mdToHtml(null)).toBe('')
  })

  test('given undefined then return empty string', () => {
    expect(helper.mdToHtml(undefined)).toBe('')
  })

  test('given empty string then return empty string', () => {
    expect(helper.mdToHtml('')).toBe('')
  })

  test('given any string then return html string', () => {
    expect(helper.mdToHtml('test')).toBe('<p>test</p>\n')
  })

  test('given markdown string then return html string', () => {
    expect(helper.mdToHtml('# Test')).toBe('<h1>Test</h1>\n')
  })
})

describe('calcLocation function', () => {
  test('given undefined then return null', () => {
    expect(helper.calcLocation(undefined)).toBe(null)
  })

  test('given empty object then return null', () => {
    expect(helper.calcLocation({})).toBe(null)
  })

  test('given valid countryCode then return country', () => {
    const location = {
      countryCode: 'ES'
    }
    expect(helper.calcLocation(location)).toBe('Spain')
  })

  test('given invalid countryCode then return countryCode', () => {
    const location = {
      countryCode: 'TEST'
    }
    expect(helper.calcLocation(location)).toBe('TEST')
  })

  test('given city then return city', () => {
    const location = {
      city: 'Santander'
    }
    expect(helper.calcLocation(location)).toBe('Santander')
  })

  test('given region then return region', () => {
    const location = {
      region: 'Cantabria'
    }
    expect(helper.calcLocation(location)).toBe('Cantabria')
  })

  test('given city and countryCode then return city, country', () => {
    const location = {
      city: 'Santander',
      countryCode: 'ES'
    }
    expect(helper.calcLocation(location)).toBe('Santander, Spain')
  })

  test('given region and countryCode then return region, country', () => {
    const location = {
      region: 'Cantabria',
      countryCode: 'ES'
    }
    expect(helper.calcLocation(location)).toBe('Cantabria, Spain')
  })

  test('given city and region then return city, region', () => {
    const location = {
      city: 'Santander',
      region: 'Cantabria'
    }
    expect(helper.calcLocation(location)).toBe('Santander, Cantabria')
  })

  test('given city, region and countryCode then return city, region, countryCode', () => {
    const location = {
      city: 'Santander',
      countryCode: 'ES',
      region: 'Cantabria'
    }
    expect(helper.calcLocation(location)).toBe('Santander, Cantabria, ES')
  })
})

describe('getCurrentDate function', () => {
  test('return current date', () => {
    mockDate.set('2000-11-22')
    expect(helper.getCurrentDate()).toBe('November 22, 2000')
    mockDate.reset()
  })
})
