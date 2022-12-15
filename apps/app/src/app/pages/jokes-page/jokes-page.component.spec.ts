import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesPageComponent } from './jokes-page.component';

describe('JokesPageComponent', () => {
  let component: JokesPageComponent;
  let fixture: ComponentFixture<JokesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ JokesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
