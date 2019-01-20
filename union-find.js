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