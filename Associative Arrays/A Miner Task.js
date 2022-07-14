function minerTask(arr) {
  let result = new Map();

  for (let i = 0; i < arr.length; i += 2) {
    let resource = arr[i];
    let quantity = Number(arr[i + 1]);
    if (!result.has(resource)) {
      result.set(resource, quantity);
    } else {
      let oldValue = result.get(resource);
      result.set(resource, oldValue + quantity);
    }
  }

  for(let [resource,quantity] of result){
    console.log(`${resource} -> ${quantity}`);
  }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    );
