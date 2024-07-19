class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null; 
    }
}

// --------------- In Order traversal ----------------------- //
// The algorithm recursively traverse through the left subtree and then to the root node and 
// then recursively traverses through the right subtree.

const depthFirstSearch = (root) => {
    let output = [];
    inOrderTraversal(root,output);
    return output
}

// --------------- Pre-Order traversal -------------------- //
// The algorithm first vist the root node and recursively traverse through the left subtree and 
// then recursively traverses through the right subtree.


const depthFirstSearchPreOrder = (root) => {
    let output = [];
    preOrderTraversal(root,output);
    return output
}

// --------------- Post-Order traversal -------------------- //
// The algorithm first recursively traverse through the left subtree and 
// then recursively traverses through the right subtree and finally the root Node.

const depthFirstSearchPostOrder = (root) => {
    let output = [];
    postOrderTraversal(root,output);
    return output
}

function inOrderTraversal(root,output) {
    if(root === null) return
    root.left && inOrderTraversal(root.left,output)
    output.push(root.val);
    root.right && inOrderTraversal(root.right,output)
    return output;
}

function preOrderTraversal(root,output) {
    if(root === null) {
        return;
    }
    output.push(root.val);
    root.left && preOrderTraversal(root.left,output)
    root.right && preOrderTraversal(root.right,output)
    return output;
}

function postOrderTraversal(root,output) {
    if(root === null) {
        return;
    }
    root.left && postOrderTraversal(root.left,output);
    root.right && postOrderTraversal(root.right,output);
    output.push(root.val);
    return output;
}

// ------------ forming the binary tree ------------------ //
let root = new Node(10);
root.left =  new Node(20);
root.right =  new Node(30);
root.left.left =  new Node(40);
root.left.right =  new Node(50);
root.right.left =  new Node(60);
root.right.right =  new Node(70);

//------------------- InOrder -----------//
console.log(depthFirstSearch(root))
//------------------- Preorder -----------//
console.log(depthFirstSearchPreOrder(root));
//------------------- Post order -----------//
console.log(depthFirstSearchPostOrder(root));