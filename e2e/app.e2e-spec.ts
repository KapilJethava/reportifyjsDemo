import { ReportingModulePage } from './app.po';

describe('reporting-module App', () => {
  let page: ReportingModulePage;

  beforeEach(() => {
    page = new ReportingModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
