import { AgencehorizonabroadPage } from './app.po';

describe('agencehorizonabroad App', () => {
  let page: AgencehorizonabroadPage;

  beforeEach(() => {
    page = new AgencehorizonabroadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
