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
    return
  } else {
    
  }
}