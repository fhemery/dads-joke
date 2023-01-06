import { HomePo } from '../support/app.po';
import { LoginPo } from '../support/login.po';

describe('app', () => {
  let homePage: HomePo;
  let loginPage: LoginPo;

  beforeEach(() => {
    homePage = new HomePo();
    loginPage = new LoginPo();
  });

  afterEach(() => {
    homePage.logoutIfNeeded();
  });

  it('should display default page correctly', () => {
    homePage.goTo();

    homePage.shouldHaveJokeHeader();
  });

  describe('when there are no jokes', function () {
    it('should display no joke in a card', function () {
      homePage.setApiToReturnNoJokes();

      homePage.goTo();

      homePage.shouldDisplayNoJokeCard();
    });
  });

  describe('login', () => {
    it('should work with an account that exists', () => {
      homePage.setApiToReturnNoJokes();

      homePage.clickLoginButton();
      loginPage.shouldBeDisplayed();

      loginPage.authenticate('fred@test.fr', 'Test123');

      homePage.shouldNotHaveLoginButton();
    });
  });
});
