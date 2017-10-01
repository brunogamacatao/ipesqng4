import { Ipesqng4Page } from './app.po';

describe('ipesqng4 App', () => {
  let page: Ipesqng4Page;

  beforeEach(() => {
    page = new Ipesqng4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
