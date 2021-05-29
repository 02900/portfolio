import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCardTemplateComponent } from './page-card-template.component';

describe('PageCardTemplateComponent', () => {
  let component: PageCardTemplateComponent;
  let fixture: ComponentFixture<PageCardTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCardTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
