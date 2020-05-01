import store from '@/store/index'
const Util = {
    mergeById (list) {
        let obj = {}
        let arr = []
        for (let i = 0; i < list.length; i++) {
            if (!obj[list[i].id]) {
                list[i].num = 1
                arr.push(list[i])
                obj[list[i].id] = 1
            } else {
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j].id == list[i].id) {
                        arr[j].num++
                    }
                }
            }
        }
        return arr
    },
    getTotal () {
        let total = 0
        let list = this.deepCopy(store.state.sell.productList)
        list.forEach(item => {
            total = this.add(total, item.price)
        })
        return total
    },
    deepCopy(obj) {
        let result = Array.isArray(obj) ? [] : {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    result[key] = this.deepCopy(obj[key]);   
                } else {
                    result[key] = obj[key];
                }
            }
        }
        return result;
    },
    removeListById (id, list) {
        let index = -1;
        for (let i = 0; i < list.length; i++) {
          if (id == list[i].id) {
            index = i
            break
          }
        }
        index != -1 && list.splice(index, 1)
        return list
    },
    add (arg1, arg2) {
        var r1, r2, m;
        try {
            r1 = arg1.toString().split(".")[1].length
        } catch (e) {
            r1 = 0
        }
        try {
            r2 = arg2.toString().split(".")[1].length
        } catch (e) {
            r2 = 0
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m;
    },
    sub (arg1, arg2) {
        var r1, r2, m, n;
        try {
            r1 = arg1.toString().split(".")[1].length
        } catch (e) {
            r1 = 0
        }
        try {
            r2 = arg2.toString().split(".")[1].length
        } catch (e) {
            r2 = 0
        }
        m = Math.pow(10, Math.max(r1, r2));
        //动态控制精度长度
        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    },
    mul (arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length
        } catch (e) {
        }
        try {
            m += s2.split(".")[1].length
        } catch (e) {
        }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    },
    div (arg1, arg2) {
        if (!arg1)return '';
        if (!arg2)return '';
        var t1 = 0, t2 = 0, r1, r2;
        try {
            t1 = arg1.toString().split(".")[1].length
        } catch (e) {
        }
        try {
            t2 = arg2.toString().split(".")[1].length
        } catch (e) {
        }
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    }
}

export default Util