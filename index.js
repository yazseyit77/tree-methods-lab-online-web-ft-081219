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
      return rootNode.left = newNode;
    };
  } else {
    if(rootNode.right){
      return findOrAdd(rootNode.right, newNode);
    } else {
      return rootNode.right = newNode;
    };
  };
};



function max(rootNode){
  let right = rootNode.right;
  if(right){
    return max(right);
  } else {
    return rootNode;
  }

}
