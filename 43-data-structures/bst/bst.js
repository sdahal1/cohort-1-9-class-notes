const Queue = require("../queue/queue");
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

    remove(key) {
        if (this.key === key) {
            // check to see if bst has two children
            if ( this.left && this.right ) {
                // choose to find the max on the left or the min on the right
                let nodeToPromote = this.right._findMin();
                // let nodeToPromote = this.right._findMax();
                this.key = nodeToPromote.key;
                this.value = nodeToPromote.key;
                // remove the duplicate node from our bst
                nodeToPromote.remove(nodeToPromote.key)
            } else if ( this.left ) { // left child
                this._replaceWith(this.left)
            } else if ( this.right ) { // right child
                this._replaceWith(this.right)
            } else { // no children at all
                this._replaceWith(null);
            }
        }

        else if (key < this.key && this.left) { // should i go to the left and go to the left
            this.left.remove(key); // going left 
        } else if (key > this.key && this.right) { // should i go to the right and go to the right
            this.right.remove(key); // going right
        } else {
            return null;
        }
    }

    _replaceWith(node) {
        // check if the node we are replacing as a parent
        // if it does we can connect the refrences from the parent node to the replacement node
        if ( this.parent ) { //ask if the node has a parent
            if ( this.parent.left === this ) {
                // current node to be replaced on the left side of the parent
                this.parent.left = node;
            } else if ( this.parent.right === this ) {
                this.parent.right = node;
            }
            // replace the replacements nodes parent refrence
            if ( node ) {
                node.parent = this.parent
            }
        } else { // the node is a root node we just copy over the properties
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            } else { //user passsed in null
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    //find min helper
    _findMin(node) {
        if (!this.left) { // if i cant go right aka right is null
            return this; //return me that node
        }
        return this.left._findMin(); // keep traversing right recursively
    }

    //find min helper
    _findMax(node) {
        if (!this.right) { // if i cant go left aka left is null
            return this; //return me that node
        }
        return this.right._findMax(); // keep traversing left recursively
    }

    //pre order we push the root node first
    dfsPreOrder(values = []) {
        //process
        values.push(this.value);
        //step left recursively
        if (this.left) {
            this.left.dfsPreOrder(values);
        }
        //step right recursively
        if (this.right) {
            this.right.dfsPreOrder(values);
        }
        return values
    }

    //post order we push the root node at the end
    dfsPostOrder(values = []) {
        //step left recursively
        if (this.left) {
            this.left.dfsPostOrder(values);
        }
        //step right recursively
        if (this.right) {
            this.right.dfsPostOrder(values);
        }
        //process
        values.push(this.value);
        return values
    }

    //traversal that gives us our tree sorted
    dfsInOrder(values = []) {
        //step left recursively
        if (this.left) {
            this.left.dfsInOrder(values);
        }
        //process
        values.push(this.value);
        //step right recursively
        if (this.right) {
            this.right.dfsInOrder(values);
        }
        return values
    }

    /*
        4
    2       6
  1   3   5   7 
*/
    breadthFirstSearch(values = []) {
        //utilizing Qs constant time for enqueue dequeue
        let queue = new Queue(); // init new Q
        queue.enqueue(this); //put the root node in Q
        let node = queue.dequeue(); // take it out and start traversing

        while (node) {
            //process
            values.push(node.value);
            //going to check left
            if (node.left) {
                //put the left child in Q
                queue.enqueue(node.left);
            }
            //going to check right
            if (node.right) {
                //put the right child in Q
                queue.enqueue(node.right);
            }
            //we are done processing the curr node
            // we need to move on to the next node
            node = queue.dequeue();
        }
        return values;
    }
}

let BTS = new BST()
BTS.insert(4, 4).insert(2, 2).insert(6, 6).insert(1, 1).insert(3, 3).insert(5, 5).insert(7, 7)
console.log(BTS.dfsPreOrder()); // [ 4,2,1,3,6,5,7]
console.log(BTS.dfsPostOrder()); // [ 1,3,2,5,7,6,4 ]
console.log(BTS.dfsInOrder()); // [ 1,2,3,4,5,6,7 ]
/*
        4
    2       6
  1   3   5   7 
*/


