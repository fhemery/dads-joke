import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesPageHeaderComponent } from './jokes-page-header.component';

describe('JokesPageHeaderComponent', () => {
  let component: JokesPageHeaderComponent;
  let fixture: ComponentFixture<JokesPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ JokesPageHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokesPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
