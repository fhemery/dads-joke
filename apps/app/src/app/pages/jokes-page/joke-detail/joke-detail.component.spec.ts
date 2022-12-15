import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeDetailComponent } from './joke-detail.component';

describe('JokeDetailComponent', () => {
  let component: JokeDetailComponent;
  let fixture: ComponentFixture<JokeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ JokeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
