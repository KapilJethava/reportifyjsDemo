import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect} from '@angular/core/testing';
import { HttpClientService } from './core/http-client/http-client.service';
import { APIService } from './core/app-config/app-config.service';
import { AppComponent } from './app.component';
import { ReportModule } from './reportModule/report.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>,
      component: AppComponent,
      apiServiceStub = {},
      httpClientServiceStub = {},
      httpClientService,
      apiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[ReportModule],
        declarations: [
          AppComponent
        ],
        providers:[
          { provide: APIService, useValue: apiService },
          { provide: HttpClientService, useValue: httpClientService }
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    apiService = TestBed.get(APIService);
    httpClientService = TestBed.get(HttpClientService);

    }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
});
