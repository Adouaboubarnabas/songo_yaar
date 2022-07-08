import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteBurkinaHomeComponent } from './carte-burkina-home.component';

describe('CarteBurkinaHomeComponent', () => {
  let component: CarteBurkinaHomeComponent;
  let fixture: ComponentFixture<CarteBurkinaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteBurkinaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteBurkinaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
