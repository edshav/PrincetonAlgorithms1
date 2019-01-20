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

// Quick-union is also too slow

class WeightedQuickUnion {
    // Data structure.  Same as quick-union, but maintain extra array sizes[i]to count number of objects in the tree rooted at i
    constructor(num) {
        this.id = [];
        this.sizes = [];
        for (let i = 0; i < num; i++) {
            this.id[i] = i;
            this.sizes[i] = 0;
        }
    }
    _root(el) {
        while (el !== this.id[el]) {
            el = this.id(el);
        }
        return el;
    }
    // Find.  Identical to quick-union
    connected(p, q) {
        return this._root(p) === this._root(q);
    }
    // Union.  Modify quick-union to:・Link root of smaller tree to root of larger tree.・Update the sizes[] array.
    union(p, q) {
        const pRoot = this._root(p);
        const qRoot = this._root(q);
        if (pRoot === qRoot) return;
        if  (this.sizes[pRoot] < this.sizes[qRoot]) {
            this.id[pRoot] = qRoot;
            this.sizes[qRoot] += this.sizes[pRoot];
        }  else                {
            this.id[qRoot] = pRoot;
            this.sizes[pRoot] += this.sizes[qRoot];
        }
    }
}
// Weighted quick-union with path compression
class UnionFind {
    constructor(num) {
        this.id = [];
        this.sizes = [];
        for (let i = 0; i < num; i++) {
            this.id[i] = i;
            this.sizes[i] = 0;
        }
    }
    _root(el) {
        while (el !== this.id[el]) {
            this.id[el] = this.id[this.id[el]]; // <- only one extra line of code !
            el = this.id[el];
        }
        return el;
    }
    connected(p, q) {
        return this._root(p) === this._root(q);
    }
    union(p, q) {
        const pRoot = this._root(p);
        const qRoot = this._root(q);
        if (pRoot === qRoot) return;
        if  (this.sizes[pRoot] < this.sizes[qRoot]) {
            this.id[pRoot] = qRoot;
            this.sizes[qRoot] += this.sizes[pRoot];
        }  else                {
            this.id[qRoot] = pRoot;
            this.sizes[pRoot] += this.sizes[qRoot];
        }
    }
}