class BST {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    
    insert(key, value) {
        //first we should check if tree is empty
        if (this.key === null) {
            this.key = key;
            this.value = value;
        } else if ( key < this.key ) { // check left
            //check if we can go left
            if ( this.left === null ) {
                //if we cant set the new node
                this.left = new BST(key, value, this)
            } else {
                //there is a left child so make a recursive call until left is null
                this.left.insert(key, value)
            }
        } else { //check right
            //check if we can go right
            if ( this.right === null ) {
                //if we cant set the new node
                this.right = new BST(key, value, this)
            } else {
                //there is a right child so make a recursive call until left is null
                this.right.insert(key, value)
            }
        }
        return this;
    }

    find(key) {
        //we found the key
        if (this.key === key) {
            return [this.key, this.value];
        } else if (key < this.key && this.left) { // do i go left and can i go left
            return this.left.find(key)
        } else if (key > this.key && this.right) {// do i go right and can i go right
            return this.right.find(key)
        } else {
            return null;
        }
    }
}

let BTS = new BST()
BTS.insert(4,4).insert(2,2).insert(6,6)

console.log(BTS);
