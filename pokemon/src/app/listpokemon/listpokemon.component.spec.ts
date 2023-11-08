import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpokemonComponent } from './listpokemon.component';

describe('ListpokemonComponent', () => {
  let component: ListpokemonComponent;
  let fixture: ComponentFixture<ListpokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListpokemonComponent]
    });
    fixture = TestBed.createComponent(ListpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
