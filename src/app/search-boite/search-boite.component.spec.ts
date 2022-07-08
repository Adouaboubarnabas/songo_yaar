import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoiteComponent } from './search-boite.component';

describe('SearchBoiteComponent', () => {
  let component: SearchBoiteComponent;
  let fixture: ComponentFixture<SearchBoiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBoiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBoiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
