class UnionFind {
    constructor(num) {
        this.id = [];
        this.sizes = [];
        this.large = [];
        for (let i = 0; i < num; i++) {
            this.id[i] = i;
            this.sizes[i] = 0;
            this.large[i] = i;
        }
    }
    _root(el) {
        while (el !== this.id[el]) {
            this.id[el] = this.id[this.id[el]];
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
            this.large[qRoot] = Math.max(this.large[qRoot], this.large[pRoot]);
        }  else                {
            this.id[qRoot] = pRoot;
            this.sizes[pRoot] += this.sizes[qRoot];
            this.large[pRoot] = Math.max(this.large[qRoot], this.large[pRoot]);
        }
    }
    find(el) {
        return this.large[this._root(el)];
    }
}

const uf = new UnionFind(10);
uf.union(1,2);
uf.union(2,6);
uf.union(6,9);
console.log(uf.find(1));
