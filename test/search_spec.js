describe('to verify the home page', function () {

  let appUrl = 'https://www.coolstuff.se/';
  let pageTitle = 'Roliga prylar, presenter och gadgets på CoolStuff!';
  let searchPlaceHolderValue = 'Sök bland världens coolaste prylar...';
  let expectedSearchResult = 'Sökning på "Cool-Well Kylbrunn" gav 1 träff';
  let expectedShoppingCartTopLine = 'Där finns en enhörning i din kundvagn';
  let expectedShoppingCartOfferLine = 'Gratis frakt från 499 kr.';


  let cookiesGodkänn = element(by.xpath('//button[text()=\'Godkänn\']'));
  let searchInput = element(by.xpath('//*[@id="searchholder"]/div/div/div/div[2]/form/div/div/input'));
  let searchResult = element(by.xpath('//*[@id="page"]/div/div/h1[1]'));
  let shoppingCart = element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul[2]/li/div[1]'));
  let shoppingCartTopLine = element(by.xpath('//span[text()=\'Där finns en enhörning i din kundvagn\']'));
  let shoppingCartOfferLine = element(by.xpath('/html/body/div[15]/div/div/div[2]'));


  let originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 180000;

  browser.manage().window().maximize();
  browser.manage().deleteAllCookies();
  browser.waitForAngularEnabled(false);


  beforeEach(function () {
    browser.get(appUrl, 120000);
    
    cookiesGodkänn.isDisplayed().then(function (boolean) {
      if (boolean == true) {
        cookiesGodkänn.click();
      }
    });

  });

  it('To verify that we are at the correct webpage "https://www.coolstuff.se/"', function () {
    expect(browser.getCurrentUrl()).toEqual(appUrl);
    expect(browser.getTitle()).toEqual(pageTitle);
  });

  it('to verify the search placeholder text is "Sök bland världens coolaste prylar..."', function () {

    searchInput.getAttribute('placeholder').then(function (text) {
      expect(text).toEqual(searchPlaceHolderValue);
    });
  });

  it('to verify that user enter a search item and search gives matching result"', function () {

    searchInput.sendKeys('Cool-Well Kylbrunn');

    searchInput.sendKeys(protractor.Key.ENTER);
    browser.sleep(30000);

    searchResult.getText().then(function (text) {

      expect(text).toEqual(expectedSearchResult);
    });
  });

  it('to test the shopping cart icon is clickable', function () {


    shoppingCart.click();

    shoppingCartTopLine.getText().then(function (text) {

      expect(text).toEqual(expectedShoppingCartTopLine);
    });

    shoppingCartOfferLine.getText().then(function (text) {

      expect(text).toEqual(expectedShoppingCartOfferLine);
    });

  });



});







