import { NgxMenuBootstrapPage } from './app.po';

describe('ngx-menu-bootstrap App', () => {
  let page: NgxMenuBootstrapPage;

  beforeEach(() => {
    page = new NgxMenuBootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
