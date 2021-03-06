import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAnnonceComponent } from './search-annonce.component';

describe('SearchAnnonceComponent', () => {
  let component: SearchAnnonceComponent;
  let fixture: ComponentFixture<SearchAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
