function inOrder(rootNode){
  if (rootNode.left){
    inOrder(rootNode.left);
  };

  console.log(rootNode.data);

  if (rootNode.right){
    inOrder(rootNode.right);
  };
};

function findOrAdd(rootNode, newNode){
  if (rootNode.data === newNode.data){
    return true;
  } else if (rootNode.data > newNode.data) {
    if (rootNode.left){
      return findOrAdd(rootNode.left, newNode);
    } else {
      return rootNode.left = newNode
    }
  } else {

  }
}
