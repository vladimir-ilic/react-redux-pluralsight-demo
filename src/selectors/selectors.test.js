import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Selectors', () => {
   it('authors are formatted for dropdown', () => {
       const authors = [
           {
               id: 'cory-house',
               firstName: 'Cory',
               lastName: 'House'
           },
           {
               id: 'scott-allen',
               firstName: 'Scott',
               lastName: 'Allen'
           },
           {
               id: 'dan-wahlin',
               firstName: 'Dan',
               lastName: 'Wahlin'
           }
       ];

       const actual = authorsFormattedForDropdown(authors);
       const expected = [
           {
               value: 'cory-house',
               text: 'Cory House'
           },
           {
               value: 'scott-allen',
               text: 'Scott Allen'
           },
           {
               value: 'dan-wahlin',
               text: 'Dan Wahlin'
           }
       ];
       expect(actual).toEqual(expected);
   });
});