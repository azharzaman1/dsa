class HashMap {
  constructor(size) {
    // initiates an array of length size
    // populating undefined as value
    this.map = new Array(size);
    this.size = 0;
  }

  _hash(key) {
    // initalize a str variable
    let string = "";

    // we convert key to string datatype.
    if (typeof key === "string") string = key;
    if (typeof key === "number") string = String(key);
    if (typeof key === "function") string = key.toString();
    if (typeof key === "object" && key !== null) string = JSON.stringify(key);

    // initalize a hash a variable
    let hash = 0;

    for (let i in string) {
      // add a charCode of every charactor of key string
      hash += string.charCodeAt(i);
    }
    // apply modulas operator to ensure value is less than size
    return hash % this.map.length;
  }

  set(key, value) {
    // calculate hash of the key
    let hash = this._hash(key);

    // check conflicts

    if (!this.map[hash]) {
      // no duplicates
      // set key value pair at specific index
      // nest key value pair inside array
      this.map[hash] = [[key, value]];

      // increment size property by 1
      this.size++;

      return [key, value];
    }

    // hash is duplicate

    // loop through all values at this hash
    // see if array item exists with same key
    // then you would want to update value instead

    for (let i = 0; i < this.map[hash].length; i++) {
      if (this.map[hash][i][0] === key) {
        // key is duplicate too (hash is already duplucate)
        // in this case: update value
        this.map[hash][i][1] = value;
        return;
      }
    }

    // no duplicate key found, push a new key/value pair to this hash
    this.map[hash].push([key, value]);
    return;
  }

  get(key) {
    // calculate hash of key
    let hash = this._hash(key);

    // data at hash
    let temp = this.map[hash];

    if (!temp) {
      return undefined;
    }

    if (temp && Array.isArray(temp) && temp.length === 1) {
      // no duplicate entries against this hash
      return temp[0];
    } else if (temp.length > 1) {
      // duplicate entries against this hash
      // itterate over all and find correct key/value pair

      for (let i = 0; i < temp.length; i++) {
        if (temp[i][0] === key) {
          return temp[i];
        }
      }
    }
  }

  remove(key) {
    // calculate hash of key
    let hash = this._hash(key);

    // data at hash
    let temp = this.map[hash];

    if (temp && Array.isArray(temp) && temp.length === 1) {
      // no duplicate entries against this hash
      // rest hash
      this.map[hash] = undefined;

      this.size--;
      return true;
    } else if (temp.length > 1) {
      // duplicate entries against this hash
      // itterate over all and find correct key/value pair

      for (let i = 0; i < temp.length; i++) {
        if (temp[i][0] === key) {
          // filter out entries
          this.map[hash] = this.map[hash].filter((p) => p[0] !== key);
        }
      }

      this.size--;
      return true;
    }

    return false;
  }
}

const l = console.log;

let hashmap = new HashMap(100);
hashmap.set("Spain", "Madrid");
hashmap.set("France", "Paris");
hashmap.set("Potugal", "Lisbon");

l(hashmap.get("Spain")); // ['Spain', 'Madrid']
l(hashmap.get("France")); // ['France', 'Paris']
l(hashmap.get("Potugal")); // ['Potugal', 'Lisbon']

hashmap.remove("France");
l(hashmap.get("France")); // undefined

hashmap.set("ǻ", "some conflicting key");

l(hashmap.get("ǻ")); // ['ǻ', 'some conflicting key']
l(hashmap.get("Spain")); // ['ǻ', 'some conflicting key']
