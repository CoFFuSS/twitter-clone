/// <reference types="Cypress" />
import { setUser } from '../../src/store/slices/userSlice';
import { UserState } from '../../src/types/common';

describe('sidebar tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/auth');
    const user: UserState = {
      id: 'DF7veDTmqwUClz0iuVurWxK3naA3',
      birthday: '01.02.1991',
      email: '313131@gmail.com',
      name: 'КРЕЗИ ФРОГ',
      phone: '+375829518762',
      token: '1234',
    };
    cy.window().its('store').invoke('dispatch', setUser(user));

    cy.wait(100);
  });
  it('should search tweets', () => {
    cy.visit('http://localhost:5173/profile');
    cy.get('[data-cy="searchbar"]');
    cy.wait(1000);
    cy.contains('ABIBUS OPTIMUS');
  });
  it('should search users', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="searchbar"]');
    cy.wait(1000);
    cy.contains('313131');
    cy.contains('КРЕЗИ ФРОГ');
  });
});
