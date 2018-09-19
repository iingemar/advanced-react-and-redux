import { saveComment } from 'actions'
import { SAVE_COMMENT } from 'actions/types';


describe('saveComment action', () => {
    it('has the correct type', () => {
        const action = saveComment('keso');

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        const comment = 'keso';
        const action = saveComment(comment);

        expect(action.payload).toEqual(comment);
    });
});
