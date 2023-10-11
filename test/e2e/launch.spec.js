const { expect, test } = require('@playwright/test')
const { launchElectron } = require('./helpers')

test.describe('Check Launch serpdown', async () => {
  let app = null
  let page = null

  test.beforeAll(async () => {
    const { app: electronApp, page: firstPage } = await launchElectron()
    app = electronApp
    page = firstPage
  })

  test.afterAll(async () => {
    await app.close()
  })

  test('Empty serpdown', async () => {
    const title = await page.title()
    expect(/^serpdown|Untitled-1 - serpdown$/.test(title)).toBeTruthy()
  })
})
