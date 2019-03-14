import { reducer } from './reducer';
import { fetchJokes, fetchJokesSuccess } from './actions';

describe('jokes reducer', () => {

    it('should just for fun have one empty test to ensure it works', () => {
        expect(1).toBe(1);
    });

    it('should return initial state for first call', () => {
        const result = reducer(undefined, { type: 'TEST' });
        expect(result).toEqual({
            jokes: [],
            isLoading: false,
            isError: false,
        });
    });

    describe('when JOKES.FETCH reduced', () => {
        it('should have `isLoading` set to true', () => {
            const result = reducer(undefined, fetchJokes());
            expect(result.isLoading).toBe(true);
        });
        it('should have `isError` set to false', () => {
            const result = reducer(undefined, fetchJokes());
            expect(result.isError).toBe(false);
        });
        it('should have `jokes` set to empty array', () => {
            const result = reducer(undefined, fetchJokes());
            expect(result.jokes).toEqual([]);
        });

        describe('and when JOKES.FETCH.SUCCESS reduced', () => {

            const stubJokes = [{ id: 1, value: 'LOL'}];

            const actions = [
                fetchJokes(),
                fetchJokesSuccess(stubJokes),
            ];

            const result = actions.reduce(reducer, undefined);

            it('should have `isLoading` set to false', () => {
                expect(result.isLoading).toBe(false);
            });
            it('should have `isError` set to false', () => {
                expect(result.isError).toBe(false);
            });
            it('should have `jokes` set to jokes from API response', () => {
                expect(result.jokes).toBe(stubJokes);
            });

        });

    });

});