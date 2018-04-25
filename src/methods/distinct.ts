import { IIterator } from '../intefaces';
import { BaseIterator } from '../implements';
import { Utils } from '../utils';

export class DistinctClause<T> extends BaseIterator<T> implements IIterator<T> {
    _comparer: (aEntity: T, bEntity: T) => boolean;

    execute(source: T[]): T[] {
        if (!this._comparer)
            return Utils.distinct(source);
    }

    constructor(comparer?: (aEntity: T, bEntity: T) => boolean) {
        super();
        this._comparer = comparer;
    }
}