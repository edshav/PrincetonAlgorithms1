class QuickFindUF {
    constructor(num) {
        this.id = [];
        for (let i = 0; i < num; i++) {
            this.id[i] = i;
        }
    }
    connected(p, q) {
        return this.id[p] === this.id[q];
    }
    union(p, q) {
        const pid = this.id[p];
        const qid = this.id[q];
        for (let i = 0; i < this.id.length; i++) {
            if (this.id[i] === pid) {
                this.id[i] = qid;
            }
        }
    }
}

// Quick-find is too slow

class QuickUnionUF {
    constructor(num) {
        this.id = [];
        for (let i = 0; i < num; i++) {
            this.id[i] = i;
        }
    }
    _root(el) {
        while (el !== this.id[el]) {
            el = this.id(el);
        }
        return el;
    }
    connected(p, q) {
        return this._root(p) === this._root(q);
    }
    union(p, q) {
        const pRoot = this._root(p);
        const qRoot = this._root(q);
        this.id[pRoot] = qRoot;
    }
}
