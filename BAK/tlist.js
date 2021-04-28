const elel = require("./elist")
const util = require("util")


function constructor_(items) {
    if(isTlist(items)) {

    } else if(items.length>1) {
        items = l2tl(items)
    } else if(Object.entries(items[0]).length>0) {
        items = d2tl(items[0])
    } else {
        items = []
    }
    return(items)
}

/**
 * Tlist
 *
 *
 *
 */

class Tlist  extends Array {
    /**
     * constructor
     *
     * <pre>
     * </pre>
     *
     * @example
     * term
     *
     *     //prototype
     *     var tl0 = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
     *     tl0
     *     var tl1 = new Tlist(0,'a',1,'b',2,'c',0,'a',1,'b',2,'c')
     *     tl1
     *     var tl2 = new Tlist({
     *         0:'a',
     *         1:'b',
     *         2:'c'
     *     })
     *     tl2
     *     ////
     *     > var tl0 = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
     *     undefined
     *     > tl0
     *     Tlist [
     *       [ 0, 'a' ],
     *       [ 1, 'b' ],
     *       [ 2, 'c' ],
     *       [ 0, 'a' ],
     *       [ 1, 'b' ],
     *       [ 2, 'c' ] ]
     *     > var tl1 = new Tlist(0,'a',1,'b',2,'c',0,'a',1,'b',2,'c')
     *     undefined
     *     > tl1
     *     Tlist [
     *       [ 0, 'a' ],
     *       [ 1, 'b' ],
     *       [ 2, 'c' ],
     *       [ 0, 'a' ],
     *       [ 1, 'b' ],
     *       [ 2, 'c' ] ]
     *     > var tl2 = new Tlist({
     *     ...     0:'a',
     *     ...     1:'b',
     *     ...     2:'c'
     *     ... })
     *     undefined
     *     > tl2
     *     Tlist [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]
     *     >
     *
     *     //function
     *
     *    ////
     *
     *
     *
     * @param {Object|Array} items - even_length_array or dict_object or tuple_array
     * @return {Array} tlist - tuple list
     *
     */
    constructor(...items) {
        super(...constructor_(items))
    }

}




/**
 * isTuple
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *     var tlist = require("tlist")
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var t = ['a',0]
 *     tlist.isTuple(t)
 *     var t = ['a']
 *     tlist.isTuple(t)
 *     var t = ['a',0,'b']
 *     tlist.isTuple(t)
 *     ////
 *     > var t = ['a',0]
 *     undefined
 *     > tlist.isTuple(t)
 *     true
 *     > var t = ['a']
 *     undefined
 *     > tlist.isTuple(t)
 *     false
 *     > var t = ['a',0,'b']
 *     undefined
 *     > tlist.isTuple(t)
 *     false
 *     >
 * @param {Object} obj - object
 * @return {Boolean} rslt - rslt
 */


function isTuple(obj) {
    let rslt = util.isArray(obj) ? (obj.length  === 2):false
    return(rslt)
}

/**
 * isTlist
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *     var tlist = require("tlist")
 *     //prototype
 *
 *     ////
 *
 *     //function
 *     tlist.isTlist(tl)
 *     var tl = [['a',0] ,'b',['a',2]]
 *     tlist.isTlist(tl)
 *     ////
 *     > var tl = [['a',0] ,['b',1],['a',2]]
 *     undefined
 *     > tlist.isTlist(tl)
 *     true
 *     > var tl = [['a',0] ,'b',['a',2]]
 *     undefined
 *     > tlist.isTlist(tl)
 *     false
 *     >
 *
 * @param {Object} obj - object
 * @return {Boolean} rslt - rslt
 */

function isTlist(obj) {
    let rslt = util.isArray(obj) ?
        obj.filter(isTuple).length === obj.length ?
            true:false
        : false
    return(rslt)
}

/**
 * t2d
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     tlist.t2d(['a',1])
 *     ////
 *     > tlist.t2d(['a',1])
 *     { a: 1 }
 *
 * @param {Object} t - tuple
 * @return {Object} d - dict
 */

function t2d(t) {
    return({
        [t[0]]:t[1]
    })
}

/**
 * d2t
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     tlist.d2t({ a: 1 })
 *     ////
 *     > tlist.d2t({ a: 1 })
 *     [ 'a', 1 ]
 *
 * @param {Object} d - dict
 * @return {Array} t - tuple
 */

function d2t(d) {
    return(Object.entries(d)[0])
}

/**
 * kvl2tl
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *      var tlist = require("tlist")
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var kl =[0,1,2,3]
 *     var vl =['a','b','a','b']
 *     tlist.kvl2tl(kl,vl)
 *     ////
 *     > tlist.kvl2tl(kl,vl)
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 3, 'b' ] ]
 *
 * @param {Array} kl - key list
 * @param {Array} vl - value list
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */


function kvl2tl(kl,vl) {
    return(elel.mapiv(kl,(i,v,o)=>([v,o[i]]),[vl]))
}


/**
 * deepcopy
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *      var tlist = require("tlist")
 *      //prototype
 *      var  tl=new Tlist([ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 3, 'b' ] ])
 *      tl.deepcopy()
 *     ////
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 3, 'b' ] ]
 *     tlist.deepcopy(tl)
 *     ////
 *     > tlist.deepcopy(tl)
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 3, 'b' ] ]
 *
 * @return {Array} tl - [t0,t1,...tk...,tn]
 * @return {Array} ntl - new tlist
 */

function deepcopy(tl) {
    let old = tl
    let ntl = JSON.parse(JSON.stringify(tl))
    ntl = elel.decltype(old,tl)
    return(ntl)
}

function _deepcopy() {
    return(deepcopy(this))
}

Object.defineProperty(Tlist.prototype, "deepcopy", {
    value: _deepcopy,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * tl2kvl 
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *      var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *      tl2.kvl()
 *      [ [ '0', '1', '2' ], [ 'a', 'b', 'c' ] ]
 *     ////
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 3, 'b' ] ]
 *     var [kl,vl] = tlist.tl2kvl(tl)
 *     kl
 *     vl
 *     ////
 *     > kl
 *     [ 0, 1, 2, 3 ]
 *     > vl
 *     [ 'a', 'b', 'a', 'b' ]
 *     >
 *
 * @param {Array} tl - tlist
 * @return {Array} kvl - [kl,vl]
 */

function tl2kvl(tl) {
    let kl = tl.map((r)=>(r[0]))
    let vl = tl.map((r)=>(r[1]))
    return([kl,vl])
}

function _kvl() {
    return(tl2kvl(this).map((l)=>(Array.from(l))))
}

Object.defineProperty(Tlist.prototype, "kvl", {
    value: _kvl,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * tl2d
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist(0,'a',1,'b',2,'c')
 *     tl.dict()
 *     ////
 *     { '0': 'a', '1': 'b', '2': 'c' }
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 0, 'b' ], [ 1, 'a' ], [ 1, 'b' ] ]
 *     tlist.tl2d(tl)
 *     ////
 *     > tlist.tl2d(tl)
 *     { '0': 'b', '1': 'b' }
 *
 * @param {Array} tl - tlist
 * @return {Object} d - dict
 */

function tl2d(tl,priority) {
    let d = {}
    let [kl,vl] = tl2kvl(tl)
    for(let i=0;i<kl.length;i++) {
        d[kl[i]] = vl[i]
    }
    return(d)
}

function _dict(priority) {
    return(tl2d(this,priority))
}

Object.defineProperty(Tlist.prototype, "dict", {
    value: _dict,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * d2tl
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var d = { '0': 'b', '1': 'b' }
 *     tlist.d2tl(d)
 *     ////
 *     > tlist.d2tl(d)
 *     [ [ '0', 'b' ], [ '1', 'b' ] ]
 *
 * @param {Object} d - dict
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function d2tl(d) {
    return(Object.entries(d))
}

/**
 * extend
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *      var tl0 = new Tlist([ 0, 'a' ], [ 0, 'b' ])
 *      var tl1 = new Tlist([ 1, 'a' ], [ 1, 'b' ])
 *      tl0.extend(tl1)
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 0, 'b' ], [ 1, 'a' ], [ 1, 'b' ] ]
 *
 *     //function
 *     var tl0 = [ [ 0, 'a' ], [ 0, 'b' ] ]
 *     var tl1 = [ [ 1, 'a' ], [ 1, 'b' ] ]
 *     tlist.extend(tl0,tl1)
 *     ////
 *     > tlist.extend(tl0,tl1)
 *     [ [ 0, 'a' ], [ 0, 'b' ], [ 1, 'a' ], [ 1, 'b' ] ]
 *
 * @param {Array} tl0 - tlist
 * @param {Array} tl1 - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function extend(tl0,tl1) {
    return(tl0.concat(tl1))
}

function _extend(tl) {
    return(extend(this,tl))
}

Object.defineProperty(Tlist.prototype, "extend", {
    value: _extend,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * preextend
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl0 = new Tlist([ 0, 'a' ], [ 0, 'b' ])
 *     var tl1 = new Tlist([ 1, 'a' ], [ 1, 'b' ])
 *     tl0.prextend(tl1)
 *     ////
 *     Tlist [ [ 1, 'a' ], [ 1, 'b' ], [ 0, 'a' ], [ 0, 'b' ] ]
 *
 *     //function
 *     var tl0 = [ [ 0, 'a' ], [ 0, 'b' ] ]
 *     var tl1 = [ [ 1, 'a' ], [ 1, 'b' ] ]
 *     tlist.prextend(tl0,tl1)
 *     ////
 *     > tlist.prextend(tl0,tl1)
 *     [ [ 1, 'a' ], [ 1, 'b' ], [ 0, 'a' ], [ 0, 'b' ] ]
 *
 * @param {Array} tl0 - tlist
 * @param {Array} tl1 - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function prextend(tl0,tl1) {
    return(tl1.concat(tl0))
}

function _prextend(tl) {
    return(prextend(this,tl))
}

Object.defineProperty(Tlist.prototype, "prextend", {
    value: _prextend,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * allIndexesOfK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0,'a' ], [ 1,'b' ],[2,'c'], [ 0,'a' ], [ 1,'b' ],[2,'c'])
 *     tl.allIndexesOfK(0)
 *     tl[0]
 *     tl[3]
 *     ////
 *     > tl.allIndexesOfK(0)
 *     [ 0, 3 ]
 *     > tl[0]
 *     [ 0, 'a' ]
 *     > tl[3]
 *     [ 0, 'a' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.allIndexesOfK(tl,0)
 *     ////
 *     > tlist.allIndexesOfK(tl,0)
 *     [ 0, 3 ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} indexes - indexes
 */

function allIndexesOfK(tl,key) {
    let [kl,vl] = tl2kvl(tl)
    return(elel.allIndexesOf(kl,key))
}

function _allIndexesOfK(key) {
    return(allIndexesOfK(this,key))
}

Object.defineProperty(Tlist.prototype, "allIndexesOfK", {
    value: _allIndexesOfK,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * allIndexesOfV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.allIndexesOfV('b')
 *     tl[1]
 *     tl[4]
 *     ////
 *     > tl.allIndexesOfV('b')
 *     [ 1, 4 ]
 *     > tl[1]
 *     [ 1, 'b' ]
 *     > tl[4]
 *     [ 1, 'b' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.allIndexesOfV(tl,'b')
 *     ////
 *     > tlist.allIndexesOfV(tl,'b')
 *     [ 1, 4 ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} indexes - indexes
 */

function allIndexesOfV(tl,value) {
    let [kl,vl] = tl2kvl(tl)
    return(elel.allIndexesOf(vl,value))
}


function _allIndexesOfV(value) {
    return(allIndexesOfV(this,value))
}

Object.defineProperty(Tlist.prototype, "allIndexesOfV", {
    value: _allIndexesOfV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * allIndexesOfKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.allIndexesOfKV(2,'c')
 *     tl[2]
 *     tl[5]
 *     ////
 *     > tl.allIndexesOfKV(2,'c')
 *     [ 2, 5 ]
 *     > tl[2]
 *     [ 2, 'c' ]
 *     > tl[5]
 *     [ 2, 'c' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.allIndexesOfKV(tl,0,'a')
 *     ////
 *     >tlist.allIndexesOfKV(tl,0,'a')
 *     [0,3]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} indexes - indexes
 */

function allIndexesOfKV(tl,key,value) {
    let [kl,vl] = tl2kvl(tl)
    let indexesK = elel.allIndexesOf(kl,key)
    let indexesV = elel.allIndexesOf(vl,value)
    return(elel.slctvIv(indexesK,(i,v,o)=>(v==o[i]),[indexesV]))
}


function _allIndexesOfKV(key,value) {
    return(allIndexesOfKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "allIndexesOfKV", {
    value: _allIndexesOfKV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * firstIndexOfK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.firstIndexOfK(1)
 *     ////
 *     1
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.firstIndexOfK(tl,0)
 *     ////
 *     > tlist.firstIndexOfK(tl,0)
 *     0
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Number} index - index
 */

function firstIndexOfK(tl,key) {
    return(allIndexesOfK(tl,key)[0])
}

function _firstIndexOfK(key) {
    return(firstIndexOfK(this,key))
}

Object.defineProperty(Tlist.prototype, "firstIndexOfK", {
    value: _firstIndexOfK,
    writable: true,
    enumerable: false,
    configurable: true
})




/**
 * firstIndexOfV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.firstIndexOfV('b')
 *     ////
 *     1
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     firstIndexOfV(tl,'b')
 *     ////
 *     1
 *     
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Number} index - index
 *
 */

function firstIndexOfV(tl,value) {
    return(allIndexesOfV(tl,value)[0])
}


function _firstIndexOfV(value) {
    return(firstIndexOfV(this,value))
}

Object.defineProperty(Tlist.prototype, "firstIndexOfV", {
    value: _firstIndexOfV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * firstIndexOfKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.firstIndexOfKV(2,'c')
 *     ////
 *     2
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.firstIndexOfKV(tl,2,'c')
 *     ////
 *     > tlist.firstIndexOfKV(tl,2,'c')
 *     2
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Number} index - index
 *
 */

function firstIndexOfKV(tl,key,value) {
    return(allIndexesOfKV(tl,key,value)[0])
}

function _firstIndexOfKV(key,value) {
    return(firstIndexOfKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "firstIndexOfKV", {
    value: _firstIndexOfKV,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * lastIndexOfK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.lastIndexOfK(0)
 *     ////
 *     3
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.lastIndexOfK(tl,0)
 *     ////
 *     > tlist.lastIndexOfK(tl,0)
 *     3
 * 
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Number} index - index
 *
 */

function lastIndexOfK(tl,key) {
    return(allIndexesOfK(tl,key).last())
}

function _lastIndexOfK(key) {
    return(lastIndexOfK(this,key))
}

Object.defineProperty(Tlist.prototype, "lastIndexOfK", {
    value: _lastIndexOfK,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * lastIndexOfV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.lastIndexOfV('b')
 *     ////
 *     4
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.lastIndexOfV(tl,'b')
 *     ////
 *     4
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 *
 */

function lastIndexOfV(tl,value) {
    return(allIndexesOfV(tl,value).last())
}

function _lastIndexOfV(value) {
    return(lastIndexOfV(this,value))
}

Object.defineProperty(Tlist.prototype, "lastIndexOfV", {
    value: _lastIndexOfV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * lastIndexOfKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.lastIndexOfKV(2,'c')
 *     ////
 *     5
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.lastIndexOfKV(tl,2,'c')
 *     ////
 *     5
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Number} index - index
 * 
 */

function lastIndexOfKV(tl,key,value) {
    return(allIndexesOfKV(tl,key,value).last())
}

function _lastIndexOfKV(key,value) {
    return(lastIndexOfKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "lastIndexOfKV", {
    value: _lastIndexOfKV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * insert
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     //to avoid name conflict with prototype insert added by elist to Array
 *     //insertOne
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.insertOne('k','v',2) 
 *     ////
 *     > tl.insertOne('k','v',2)
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 'k', 'v' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.insert(tl,'k','v',2)
 *     ////
 *     > tlist.insert(tl,'k','v',2)
 *     [ [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 'k', 'v' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @param {Number} position - index
 * @return {Array} tl - tlist
 */

function insert(tl,key,value,position,inplace=true) {
    //to avoid re trigger constructor, when using customer defined constructor
    tl = elel.insert(tl,[key,value],position,inplace)
    return(tl)
}

function insertOne(tl,key,value,position,inplace=true) {
    return(insert(tl,key,value,position,inplace))
}

function _insert(key,value,position,inplace=true) {
    return(insert(this,key,value,position,inplace))
}

Object.defineProperty(Tlist.prototype, "insert", {
    value: _insert,
    writable: true,
    enumerable: false,
    configurable: true
})


Object.defineProperty(Tlist.prototype, "insertOne", {
    value: _insert,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * append
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.append('k','v')
 *     ////
 *     > tl.append('k','v')
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 'k', 'v' ]]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.append(tl,'k','v')
 *     ////
 *     > tlist.append(tl,'k','v')
 *     [ [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 'k', 'v' ]]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - tlist
 */

function append(tl,key,value,inplace=true) {
    return(insert(tl,key,value,tl.length,inplace))
}

function _append(key,value,inplace=true) {
    return(append(this,key,value,inplace))
}

Object.defineProperty(Tlist.prototype, "append", {
    value: _append,
    writable: true,
    enumerable: false,
    configurable: true
})

/**
 * prepend
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.prepend('k','v')
 *     ////
 *     > tl.prepend('k','v')
 *     Tlist [
 *       ['k', 'v'],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ]]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.prepend(tl,'k','v')
 *     ////
 *     > tlist.prepend(tl,'k','v')
 *     [ 
 *       ['k', 'v'],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ]]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - tlist
 */


function prepend(tl,key,value,inplace=true) {
    return(insert(tl,key,value,0,inplace))
}

function _prepend(key,value,inplace=true) {
    return(prepend(this,key,value,inplace))
}

Object.defineProperty(Tlist.prototype, "prepend", {
    value: _prepend,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * insertTl
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *      var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *      var tl1 = new Tlist(['k','v'],['k','v'])
 *      tl.insertTl(tl1,2)
 *     ////
 *     > tl.insertTl(tl1,2)
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 'k', 'v' ],
 *       [ 'k', 'v' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     var tl1 = [ ['k','v'],['k','v']]
 *     tlist.insertTl(tl,tl1,2)
 *     tl
 *     ////
 *     > tlist.insertTl(tl,tl1,2)
 *     [ [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 'k', 'v' ],
 *       [ 'k', 'v' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     > tl1
 *     [ [ 'k', 'v' ], [ 'k', 'v' ] ]
 *     >
 *     > tl
 *     [ [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 * @param {Array} tl - tlist
 * @param {Array} tl1 - tlist
 * @param {Number} position - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function insertTl(tl,tl1,position,inplace=true) {
    tl = elel.insertArray(tl,tl1,position,inplace)
    return(tl)
}

function _insertTl(tl1,position,inplace=true) {
    return(insertTl(this,tl1,position,inplace))
}

Object.defineProperty(Tlist.prototype, "insertTl", {
    value: _insertTl,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * includesK 
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.includesK(1)
 *     tl.includesK(200)
 *     ////
 *     > tl.includesK(1)
 *     true
 *     > tl.includesK(200)
 *     false
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.includesK(tl,1)
 *     tlist.includesK(tl,200)
 *     ////
 *     > tlist.includesK(tl,1)
 *     true
 *     > tlist.includesK(tl,200)
 *     false
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Boolean} rslt - rslt
 */

function includesK(tl,key) {
    return(allIndexesOfK(tl,key).length>0)
}

function _includesK(key) {
    return(includesK(this,key))
}

Object.defineProperty(Tlist.prototype, "includesK", {
    value: _includesK,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * includesV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.includesV('b')
 *     tl.includesV('e')
 *     ////
 *     >tl.includesV('b')
 *     true
 *     >tl.includesV('e')
 *     false
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.includesV(tl,'b')
 *     tlist.includesV(tl,'e')
 *     ////
 *     > tlist.includesV(tl,'b')
 *     true
 *     > tlist.includesV(tl,'e')
 *     false
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Boolean} rslt - rslt
 */

function includesV(tl,value) {
    return(allIndexesOfV(tl,value).length>0)
}

function _includesV(value) {
    return(includesV(this,value))
}

Object.defineProperty(Tlist.prototype, "includesV", {
    value: _includesV,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * includesKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.includesKV(0,'a')
 *     tl.includesKV(0,'c')
 *     ////
 *     >tl.includesKV(0,'a')
 *     true
 *     >tl.includesKV(0,'c')
 *     false
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.includesKV(tl,0,'a')
 *     tlist.includesKV(tl,0,'c')
 *     ////
 *     > tlist.includesKV(tl,0,'a')
 *     true
 *     > tlist.includesKV(tl,0,'c')
 *     false
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Boolean} rslt - rslt
 *
 */

function includesKV(tl,key,value) {
    return(allIndexesOfKV(tl,key,value).length>0)
}

function _includesKV(key,value) {
    return(includesKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "includesKV", {
    value: _includesKV,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * countK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.countK(1)
 *     ////
 *     2
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.countK(tl,1)
 *     ////
 *     2
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Number} count - count
 *
 */

function countK(tl,key) {
    return(allIndexesOfK(tl,key).length)
}

function _countK(key) {
    return(countK(this,key))
}

Object.defineProperty(Tlist.prototype, "countK", {
    value: _countK,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * countV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.countV('c')
 *     ////
 *     2
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.countV(tl,'c')
 *     ////
 *     > tlist.countV(tl,'c')
 *     2
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Number} count - count
 *
 */

function countV(tl,value) {
    return(allIndexesOfV(tl,value).length)
}

function _countV(value) {
    return(countV(this,value))
}

Object.defineProperty(Tlist.prototype, "countV", {
    value: _countV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * countKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.countKV(2,'c')
 *     ////
 *     2
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.countKV(tl,2,'c')
 *     ////
 *     > tlist.countKV(tl,2,'c')
 *     2
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Number} count - count
 *
 */

function countKV(tl,key,value) {
    return(allIndexesOfKV(tl,key,value).length)
}

function _countKV(key,value) {
    return(countKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "countKV", {
    value: _countKV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * rmK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     var tl1 = tl.rmK(1,1)
 *     tl1
 *     var tl2 = tl.rmK(1,0)
 *     tl2
 *     ////
 *     >tl1
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 2, 'c' ] ]
 *     >tl2
 *     Tlist [ [ 0, 'a' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmK(tl,1,1)
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 *
 */

function rmK(tl,key,which) {
    let indexes = allIndexesOfK(tl,key)
    let index = indexes[which]
    return(tl.seqsNot([index]))
}

function _rmK(key,which) {
    return(rmK(this,key,which))
}

Object.defineProperty(Tlist.prototype, "rmK", {
    value: _rmK,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * rmV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     var tl1 = tl.rmV('a',1)
 *     tl1
 *     var tl2 = tl.rmV('a',0)
 *     tl2
 *     ////
 *     > tl1
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *     > tl2
 *     Tlist [ [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmV(tl,'a',1)
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmV(tl,value,which) {
    let indexes = allIndexesOfV(tl,value)
    let index = indexes[which]
    return(tl.seqsNot([index]))
}

function _rmV(value,which) {
    return(rmV(this,value,which))
}

Object.defineProperty(Tlist.prototype, "rmV", {
    value: _rmV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * rmKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     var tl1 = tl.rmKV(1,'b',1)
 *     tl1
 *     var tl2 = tl.rmKV(1,'b',0)
 *     tl2
 *     ////
 *     >tl1
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 2, 'c' ] ]
 *     >tl2
 *     Tlist [ [ 0, 'a' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmKV(tl,1,'b',1)
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmKV(tl,key,value,which) {
    let indexes = allIndexesOfKV(tl,key,value)
    let index = indexes[which]
    return(tl.seqsNot([index]))
}

function _rmKV(key,value,which) {
    return(rmKV(this,key,value,which))
}

Object.defineProperty(Tlist.prototype, "rmKV", {
    value: _rmKV,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * rmFirstK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmFirstK(1)
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmFirstK(tl,1)
 *     tl
 *     ////
 *     [ [ 0, 'a' ], [ 2, 'c' ], [ 3, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 * 
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmFirstK(tl,key) {
    return(rmK(tl,key,0))
}

function _rmFirstK(key) {
    return(rmFirstK(this,key))
}

Object.defineProperty(Tlist.prototype, "rmFirstK", {
    value: _rmFirstK,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * rmFirstV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmFirstV('b')
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmFirstV(tl,'c')
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 3, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmFirstV(tl,value) {
    return(rmV(tl,value,0))
}

function _rmFirstV(value) {
    return(rmFirstV(this,value))
}

Object.defineProperty(Tlist.prototype, "rmFirstV", {
    value: _rmFirstV,
    writable: true,
    enumerable: false,
    configurable: true
})

/**
 * rmFirstKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmFirstKV(2,'c')
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmFirstKV(tl,2,'c')
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 3, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmFirstKV(tl,key,value) {
    return(rmKV(tl,key,value,0))
}

function _rmFirstKV(key,value) {
    return(rmFirstKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "rmFirstKV", {
    value: _rmFirstKV,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * rmLastK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmLastK(1)
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmLastK(tl,1)
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn
 */

function rmLastK(tl,key) {
    let which = allIndexesOfK(tl,key).length - 1 
    return(rmK(tl,key,which))
}

function _rmLastK(key) {
    return(rmLastK(this,key))
}

Object.defineProperty(Tlist.prototype, "rmLastK", {
    value: _rmLastK,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * rmLastV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmLastV('c')
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ] ]
 *
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmLastV(tl,'c')
 *     tl
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 1, 'b' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmLastV(tl,value) {
    let which = allIndexesOfV(tl,value).length - 1
    return(rmV(tl,value,which))
}

function _rmLastV(value) {
    return(rmLastV(this,value))
}

Object.defineProperty(Tlist.prototype, "rmLastV", {
    value: _rmLastV,
    writable: true,
    enumerable: false,
    configurable: true
})

/**
 * rmLastKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmLastKV(2,'c')
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 1, 'b' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmLastKV(tl,2,'c')
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 1, 'b' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmLastKV(tl,key,value) {
    let which = allIndexesOfKV(tl,key,value).length - 1
    return(rmKV(tl,key,value,which))
}

function _rmLastKV(key,value) {
    return(rmLastKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "rmLastKV", {
    value: _rmLastKV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * rmAllK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmAllK(2)
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 1, 'b' ], [ 0, 'a' ], [ 1, 'b' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmAllK(tl,2)
 *     tl
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 3, 'a' ], [ 1, 'b' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmAllK(tl,key) {
    let indexes = allIndexesOfK(tl,key)
    return(tl.seqsNot(indexes))
}

function _rmAllK(key) {
    return(rmAllK(this,key))
}

Object.defineProperty(Tlist.prototype, "rmAllK", {
    value: _rmAllK,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * rmAllV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmAllV('a')
 *     ////
 *     Tlist [ [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmAllV(tl,'a')
 *     tl
 *     ////
 *     [ [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmAllV(tl,value) {
    let indexes = allIndexesOfV(tl,value)
    return(tl.seqsNot(indexes))
}

function _rmAllV(value) {
    return(rmAllV(this,value))
}

Object.defineProperty(Tlist.prototype, "rmAllV", {
    value: _rmAllV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * rmAllKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.rmAllKV(1,'b')
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 2, 'c' ], [ 0, 'a' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.rmAllKV(tl,1,'b')
 *     ////
 *     [ [ 0, 'a' ], [ 2, 'c' ], [ 3, 'a' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function rmAllKV(tl,key,value) {
    let indexes = allIndexesOfKV(tl,key,value)
    return(tl.seqsNot(indexes))
}

function _rmAllKV(key,value) {
    return(rmAllKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "rmAllKV", {
    value: _rmAllKV,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * getK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 11, 'b' ],[2,'d'])
 *     tl.getK(2,0)
 *     tl.getK(2,1)
 *     ////
 *     > tl.getK(2,0)
 *     [ 2, 'c' ]
 *     > tl.getK(2,1)
 *     [ 2, 'd' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 11, 'b' ],[2,'d'] ]
 *     tlist.getK(tl,2,1)
 *     ////
 *     [ 2, 'd']
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getK(tl,key,which) {
    let indexes = allIndexesOfK(tl,key)
    let index = indexes[which]
    return(tl.seqs([index])[0])
}

function _getK(key,which) {
    return(getK(this,key,which))
}

Object.defineProperty(Tlist.prototype, "getK", {
    value: _getK,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * getV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 11, 'b' ],[2,'d'])
 *     tl.getV('b',0)
 *     tl.getV('b',1)
 *     ////
 *     > tl.getV('b',0)
 *     [ 1, 'b' ]
 *     > tl.getV('b',1)
 *     [ 11, 'b' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 11, 'b' ],[2,'d'] ]
 *     tlist.getV(tl,'b',1)
 *     ////
 *     [ 11, 'b' ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getV(tl,value,which) {
    let indexes = allIndexesOfV(tl,value)
    let index = indexes[which]
    return(tl.seqs([index])[0])
}

function _getV(value,which) {
    return(getV(this,value,which))
}

Object.defineProperty(Tlist.prototype, "getV", {
    value: _getV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * getKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.getKV(tl,1,'b',1)
 *     ////
 *     > tl.getKV(1,'b',0)
 *     [ 1, 'b' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.getKV(tl,1,'b',1)
 *     ////
 *     [ 1, 'b' ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getKV(tl,key,value,which) {
    let indexes = allIndexesOfKV(tl,key,value)
    let index = indexes[which]
    return(tl.seqs([index])[0])
}

function _getKV(key,value,which) {
    return(getKV(this,key,value,which))
}

Object.defineProperty(Tlist.prototype, "getKV", {
    value: _getKV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * getFirstK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getFirstK(2)
 *     ////
 *     [ 2, 'c' ]
 *
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'] ]
 *     tlist.getFirstK(tl,2)
 *     ////
 *     [ 2, 'c']
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getFirstK(tl,key) {
    return(getK(tl,key,0))
}

function _getFirstK(key) {
    return(getFirstK(this,key))
}

Object.defineProperty(Tlist.prototype, "getFirstK", {
    value: _getFirstK,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * getFirstV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getFirstV('a')
 *     ////
 *     [ 0, 'a' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.getFirstV(tl,'a')
 *     ////
 *     [ 0, 'a' ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getFirstV(tl,value) {
    return(getV(tl,value,0))
}

function _getFirstV(value) {
    return(getFirstV(this,value))
}

Object.defineProperty(Tlist.prototype, "getFirstV", {
    value: _getFirstV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * getFirstKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.getFirstKV(0,'a')
 *     ////
 *     [ 0, 'a' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.getFirstKV(tl,0,'a')
 *     ////
 *     [ 0, 'a' ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getFirstKV(tl,key,value) {
    return(getKV(tl,key,value,0))
}

function _getFirstKV(key,value) {
    return(getFirstKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "getFirstKV", {
    value: _getFirstKV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * getLastK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getLastK(2)
 *     ////
 *     [ 2, 'd' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'] ]
 *     tlist.getLastK(tl,2)
 *     ////
 *     [ 2, 'd' ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getLastK(tl,key) {
    let which = allIndexesOfK(tl,key).length - 1
    return(getK(tl,key,which))
}

function _getLastK(key) {
    return(getLastK(this,key))
}

Object.defineProperty(Tlist.prototype, "getLastK", {
    value: _getLastK,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * getLastV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getLastV('a')
 *     ////
 *     [ 3, 'a' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'] ]
 *     tlist.getLastV(tl,'a')
 *     ////
 *     [ 3, 'a' ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getLastV(tl,value) {
    let which = allIndexesOfV(tl,value).length - 1
    return(getV(tl,value,which))
}

function _getLastV(value) {
    return(getLastV(this,value))
}

Object.defineProperty(Tlist.prototype, "getLastV", {
    value: _getLastV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * getLastKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getLastKV(2,'c')
 *     ////
 *     [ 2, 'c']
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.getLastKV(tl,2,'c')
 *     ////
 *     [ 2, 'c' ]
 *
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getLastKV(tl,key,value) {
    let which = allIndexesOfKV(tl,key,value).length - 1
    return(getKV(tl,key,value,which))
}

function _getLastKV(key,value) {
    return(getLastKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "getLastKV", {
    value: _getLastKV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * getAllK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getAllK(2)
 *     ////
 *     Tlist [ [ 2, 'c' ], [ 2, 'd' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'] ]
 *     tlist.getAllK(tl,2)
 *     ////
 *     [ [ 2, 'c' ], [ 2, 'd' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getAllK(tl,key) {
    let indexes = allIndexesOfK(tl,key)
    return(tl.seqs(indexes))
}

function _getAllK(key) {
    return(getAllK(this,key))
}

Object.defineProperty(Tlist.prototype, "getAllK", {
    value: _getAllK,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * getAllV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tl.getAllV('a')
 *     ////
 *     Tlist [ [ 0, 'a' ], [ 3, 'a' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 11, 'b' ],[2,'c'] ]
 *     tlist.getAllV(tl,'a')
 *     ////
 *     [ [ 0, 'a' ], [ 3, 'a' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getAllV(tl,value) {
    let indexes = allIndexesOfV(tl,value)
    return(tl.seqs(indexes))
}

function _getAllV(value) {
    return(getAllV(this,value))
}

Object.defineProperty(Tlist.prototype, "getAllV", {
    value: _getAllV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * getAllKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'d'])
 *     tlist.getAllKV(1,'b')
 *     ////
 *     [ [ 1, 'b' ], [ 1, 'b' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.getAllKV(tl,1,'b')
 *     ////
 *     [ [ 1, 'b' ], [ 1, 'b' ] ]
 *
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function getAllKV(tl,key,value) {
    let indexes = allIndexesOfKV(tl,key,value)
    return(tl.seqs(indexes))
}

function _getAllKV(key,value) {
    return(getAllKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "getAllKV", {
    value: _getAllKV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * set
 *
 * <pre>
 *     this will change the original tlist
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'])
 *     tl.set('k','vv',1)
 *     tl.set('k','vvv',0)
 *     ////
 *     > tl.set('k','vv',1)
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     >
 *     > tl.set('k','vvv',0)
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 'k', 'vvv' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'] ]
 *     tlist.set(tl,'k','vv',1)
 *     tl
 *     ////
 *     > tlist.set(tl,'k','vv',1)
 *     [ [ 0, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     > tl
 *     [ [ 0, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function set(tl,key,value,which) {
    let indexes = allIndexesOfK(tl,key)
    let index = indexes[which]
    tl[index][1] = value
    return(tl)
}

function _set(key,value,which) {
    return(set(this,key,value,which))
}

Object.defineProperty(Tlist.prototype, "set", {
    value: _set,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * setFirst
 *
 * <pre>
 *     this will change the original tlist
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'])
 *     tl.setFirst('k','vv')
 *     ////
 *     > tl.setFirst('k','vv')
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'] ]
 *     tlist.setFirst(tl,'k','vv')
 *     tl
 *     ////
 *     > tlist.setFirst(tl,'k','vv')
 *     [ [ 0, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ] ]
 *     > tl
 *     [ [ 0, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function setFirst(tl,key,value) {
    return(set(tl,key,value,0))
}

function _setFirst(key,value) {
    return(setFirst(this,key,value))
}

Object.defineProperty(Tlist.prototype, "setFirst", {
    value: _setFirst,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * setLast
 *
 * <pre>
 *     this will change the original tlist
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'])
 *     tl.setLast('k','vv')
 *     ////
 *     [ [ 0, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'] ]
 *     tlist.setLast(tl,'k','vv')
 *     tl
 *     ////
 *     > tlist.setLast(tl,'k','vv')
 *     [ [ 0, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     > tl
 *     [ [ 0, 'a' ],
 *       [ 'k', 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @param {Number} which - index
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function setLast(tl,key,value) {
    let lngth = countK(tl,key) 
    return(set(tl,key,value,lngth-1))
}

function _setLast(key,value) {
    return(setLast(this,key,value))
}

Object.defineProperty(Tlist.prototype, "setLast", {
    value: _setLast,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * setAll
 *
 * <pre>
 *     this will change the original tlist
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 'k', 'b' ],[2, 'c'], [ 3, 'a' ], [ 'k', 'b' ],[2,'c'])
 *     tl.setAll('k','vv')
 *     ////
 *     > tl.setAll('k','vv')
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 'k', 'vv' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.setAll(tl,1,'xx')
 *     tl
 *     ////
 *
 *    > tlist.setAll(tl,1,'xx')
 *    [ [ 0, 'a' ],
 *      [ 1, 'xx' ],
 *      [ 2, 'c' ],
 *      [ 3, 'a' ],
 *      [ 1, 'xx' ],
 *      [ 2, 'c' ] ]
 *    >
 *    > tl
 *    [ [ 0, 'a' ],
 *      [ 1, 'xx' ],
 *      [ 2, 'c' ],
 *      [ 3, 'a' ],
 *      [ 1, 'xx' ],
 *      [ 2, 'c' ] ]
 *    >
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function setAll(tl,key,value) {
    let indexes = allIndexesOfK(tl,key)
    for(let i of indexes){
        tl[i][1] = value
    }
    return(tl)
}

function _setAll(key,value) {
    return(setAll(this,key,value))
}

Object.defineProperty(Tlist.prototype, "setAll", {
    value: _setAll,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * tupleEqK
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(k0===k1) then t0===t1
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 *
 */

function tupleEqK(t0,t1) {
    return(t0[0]===t1[0])
}

/**
 * tupleEqV
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(v0 === v1) then t0===t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleEqV(t0,t1) {
    return(t0[1]===t1[1])
}

/**
 * tupleEqKV
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(k0===k1 && v0 === v1) then t0===t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleEqKV(t0,t1)  {
    return(tupleEqK(t0,t1) && tupleEqV(t0,t1))
}

/**
 * tupleEq
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(k0===k1 && v0 === v1) then t0===t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleEq(t0,t1)  {
    return(tupleEqKV(t0,t1))
}

/**
 * tupleLtK
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(k0 < k1) then t0<t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleLtK(t0,t1) {
    return(t0[0]<t1[0])
}

/**
 * tupleLtV
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(v0 < v1) then t0<t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleLtV(t0,t1) {
    return(t0[1]<t1[1])
}

/**
 * tupleGtK
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(k0 > k1) then t0>t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleGtK(t0,t1) {
    return(t0[0]>t1[0])
}

/**
 * tupleGtV
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     if(v0 > v1) then t0>t1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleGtV(t0,t1) {
    return(t0[1]>t1[1])
}

/**
 * tupleCmpK
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     compare k0,k1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleCmpK(t0,t1) {
    if(tupleLtK(t0,t1)){
        return(-1)
    } else if(tupleEqK(t0,t1)) {
        return(0)
    } else {
        return(1)
    }
}

/**
 * tupleCmpV
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     compare v0,v1 
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleCmpV(t0,t1) {
    if(tupleLtV(t0,t1)){
        return(-1)
    } else if(tupleEqV(t0,t1)) {
        return(0)
    } else {
        return(1)
    }
}

/**
 * @funcname@
 *
 * <pre>
 *     t0 = [k0,v0]
 *     t1 = [k1,v1]
 *     first compare k0,k1, then compare v0,v1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *
 *     ////
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleCmpKV(t0,t1) {
    if(tupleLtK(t0,t1)){
        return(-1)
    } else if(tupleEqK(t0,t1)) {
        return(tupleCmpV(t0,t1))
    } else {
        return(1)
    }
}

/**
 * tupleCmpVK
 *
 * <pre>
 *     t0 =[k0,v0]
 *     t1 =[k1,v1]
 *     first compare v0,v1, then compare k0,k1
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     tlist.tupleCmpVK(['a',2],['b',1])
 *     tlist.tupleCmpVK(['a',2],['b',3]
 *     tlist.tupleCmpVK(['a',2],['b',2])
 *     tlist.tupleCmpVK(['a',2],['a',2])
 *     ////
 *
 *
 * @param {Array} t0 - tuple
 * @param {Array} t1 - tuple
 * @return {Boolean} rslt - rslt
 */

function tupleCmpVK(t0,t1) {
    if(tupleLtV(t0,t1)){
        return(-1)
    } else if(tupleEqV(t0,t1)) {
        return(tupleCmpK(t0,t1))
    } else {
        return(1)
    }
}

/**
 * sortk
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.sortk()
 *     tl
 *     ////
 *     > tl.sortk()
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.sortk(tl)
 *     ////
 *    > tlist.sortk(tl)
 *    [ [ 0, 'a' ],
 *      [ 1, 'b' ],
 *      [ 1, 'b' ],
 *      [ 2, 'c' ],
 *      [ 2, 'c' ],
 *      [ 3, 'a' ] ]
 *
 * @param {Array} tl - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function sortk(tl) {
    tl = JSON.parse(JSON.stringify(tl))
    tl.sort(tupleCmpK)
    return(tl)
}

function _sortk() {
    return(sortk(this))
}

Object.defineProperty(Tlist.prototype, "sortk", {
    value: _sortk,
    writable: true,
    enumerable: false,
    configurable: true
})

/**
 * sortv
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.sortv()
 *     tl
 *     ////
 *     > tl.sortv()
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 3, 'a' ],
 *       [ 1, 'b' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 2, 'c' ] ]
 *     >
 *     > tl
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.sortv(tl)
 *     ////
 *    > tlist.sortv(tl)
 *    [ [ 0, 'a' ],
 *      [ 3, 'a' ],
 *      [ 1, 'b' ],
 *      [ 1, 'b' ],
 *      [ 2, 'c' ],
 *      [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function sortv(tl) {
    tl = JSON.parse(JSON.stringify(tl))
    tl.sort(tupleCmpV)
    return(tl)
}

function _sortv() {
    return(sortv(this))
}

Object.defineProperty(Tlist.prototype, "sortv", {
    value: _sortv,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * sortkv
 *
 * <pre>
 *     sort will first compare key, and then compare value
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.sortkv()
 *     tl
 *     ////
 *     > tl.sortkv()
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ] ]
 *     >
 *     > tl
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.sortkv(tl)
 *     ////
 *    > tlist.sortkv(tl)
 *    [ [ 0, 'a' ],
 *      [ 1, 'b' ],
 *      [ 1, 'b' ],
 *      [ 2, 'c' ],
 *      [ 2, 'c' ],
 *      [ 3, 'a' ] ]
 *
 * @param {Array} tl - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function sortkv(tl) {
    tl = JSON.parse(JSON.stringify(tl))
    tl.sort(tupleCmpKV)
    return(tl)
}

function _sortkv() {
    return(sortkv(this))
}

Object.defineProperty(Tlist.prototype, "sortkv", {
    value: _sortkv,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * sortvk
 *
 * <pre>
 *     sort will first compare value, and then compare key
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.sortvk()
 *     tl
 *     ////
 *     > tl.sortvk()
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 3, 'a' ],
 *       [ 1, 'b' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 2, 'c' ] ]
 *     > tl
 *     Tlist [
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 3, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.sortvk(tl)
 *     ////
 *    [ [ 0, 'a' ],
 *      [ 3, 'a' ],
 *      [ 1, 'b' ],
 *      [ 1, 'b' ],
 *      [ 2, 'c' ],
 *      [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function sortvk(tl) {
    tl = JSON.parse(JSON.stringify(tl))
    tl.sort(tupleCmpVK)
    return(tl)
}

function _sortvk() {
    return(sortvk(this))
}

Object.defineProperty(Tlist.prototype, "sortvk", {
    value: _sortvk,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * uniqualizeK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.uniqualizeK(1)
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.uniqualizeK(tl,1)
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function uniqualizeK(tl,key) {
    let ntl = []
    for(let i=0;i<tl.length;i++){
        let t = tl[i]
        let k = t[0]
        let v = t[1]
        if(includesK(ntl,k) && (k===key)) {
            ntl = set(ntl,k,v,0)
        } else {
            ntl.push([k,v])
        }
    }
    return(ntl)
}

function _uniqualizeK(key) {
    return(uniqualizeK(this,key))
}

Object.defineProperty(Tlist.prototype, "uniqualizeK", {
    value: _uniqualizeK,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * uniqualizeAllK
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.uniqualizeAllK()
 *     ////
 *     [[ 0, 'a' ], [ 1, 'b' ],[2, 'c']]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.uniqualizeAllK(tl)
 *     ////
 *     > tlist.uniqualizeAllK(tl)
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ] ]
 *
 * @param {Array} tl - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function uniqualizeAllK(tl) {
    let ntl = []
    for(let i=0;i<tl.length;i++){
        let t = tl[i]
        let k = t[0]
        let v = t[1]
        if(includesK(ntl,k)) {
            ntl = set(ntl,k,v,0)
        } else {
            ntl.push([k,v])
        }
    }
    return(ntl)
}

function _uniqualizeAllK() {
    return(uniqualizeAllK(this))
}

Object.defineProperty(Tlist.prototype, "uniqualizeAllK", {
    value: _uniqualizeAllK,
    writable: true,
    enumerable: false,
    configurable: true
})



/**
 * uniqualizeV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.uniqualizeV('a')
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.uniqualizeV(tl,'a')
 *     ////
 *     > tlist.uniqualizeV(tl,'a')
 *     [ [ 3, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function uniqualizeV(tl,value) {
    let ntl = []
    for(let i=0;i<tl.length;i++){
        let t = tl[i]
        let k = t[0]
        let v = t[1]
        if(includesV(ntl,v) && (v===value)) {
            let i = firstIndexOfV(ntl,v)
            ntl[i] = [k,v]
        } else {
            ntl.push([k,v])
        }
    }
    return(ntl)
}

function _uniqualizeV(value) {
    return(uniqualizeV(this,value))
}

Object.defineProperty(Tlist.prototype, "uniqualizeV", {
    value: _uniqualizeV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * uniqualizeAllV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.uniqualizeAllV()
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.uniqualizeAllV(tl)
 *     ////
 *     > tlist.uniqualizeAllV(tl)
 *     [ [ 3, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function uniqualizeAllV(tl) {
    let ntl = []
    for(let i=0;i<tl.length;i++){
        let t = tl[i]
        let k = t[0]
        let v = t[1]
        if(includesV(ntl,v)) {
            let i = firstIndexOfV(ntl,v)
            ntl[i] = [k,v]
        } else {
            ntl.push([k,v])
        }
    }
    return(ntl)
}

function _uniqualizeAllV() {
    return(uniqualizeAllV(this))
}

Object.defineProperty(Tlist.prototype, "uniqualizeAllV", {
    value: _uniqualizeAllV,
    writable: true,
    enumerable: false,
    configurable: true
})

/**
 * uniqualizeKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.uniqualizeKV(0,'a')
 *     tl
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.uniqualizeKV(tl,1,'b')
 *     ////
 *     > tlist.uniqualizeKV(tl,1,'b')
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 0, 'a' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @param {String|Number} k - key
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function uniqualizeKV(tl,key,value) {
    let ntl = []
    for(let i=0;i<tl.length;i++){
        let t = tl[i]
        let k = t[0]
        let v = t[1]
        if(includesKV(ntl,k,v) && (k === key)  && (v===value)) {
            let i = firstIndexOfKV(ntl,k,v)
            ntl[i] = [k,v]
        } else {
            ntl.push([k,v])
        }
    }
    return(ntl)
}

function _uniqualizeKV(key,value) {
    return(uniqualizeKV(this,key,value))
}

Object.defineProperty(Tlist.prototype, "uniqualizeKV", {
    value: _uniqualizeKV,
    writable: true,
    enumerable: false,
    configurable: true
})


/**
 * uniqualizeAllKV
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl =  new  Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.uniqualizeAllKV()
 *     tl
 *     ////
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.uniqualizeAllKV(tl)
 *     ////
 *     > tlist.uniqualizeAllKV(tl)
 *     [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
 *
 * @param {Array} tl - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */


function uniqualizeAllKV(tl) {
    let ntl = []
    for(let i=0;i<tl.length;i++){
        let t = tl[i]
        let k = t[0]
        let v = t[1]
        if(includesKV(ntl,k,v)) {
            let i = firstIndexOfKV(ntl,k,v)
            ntl[i] = [k,v]
        } else {
            ntl.push([k,v])
        }
    }
    return(ntl)
}

function _uniqualizeAllKV() {
    return(uniqualizeAllKV(tl))
}

Object.defineProperty(Tlist.prototype, "uniqualizeAllKV", {
    value: _uniqualizeAllKV,
    writable: true,
    enumerable: false,
    configurable: true
})




/**
 * l2tl
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *      //prototype
 *
 *     ////
 *
 *     //function
 *     var l = [ 0, 'a', 1, 'b', 2, 'c', 0, 'a', 1, 'b', 2, 'c' ]
 *     tlist.l2tl(l)
 *     ////
 *     > tlist.l2tl(l)
 *     [ [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 * @param {Array} l - list
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */


function l2tl(l) {
    if(l.length % 2 == 1) {
        l = l.slice(0,l.length-1)
    } else {

    }
    if(l.length <2) {
        return([])
    } else {
        let kl = l.evens()
        let vl = l.odds()
        return(kvl2tl(kl,vl))
    }
}

/**
 * tl2l
 *
 * <pre>
 * </pre>
 *
 * @example
 * term
 *
 *     //prototype
 *     var tl = new Tlist([ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'])
 *     tl.list()
 *     ////
 *     [ 0, 'a', 1, 'b', 2, 'c', 0, 'a', 1, 'b', 2, 'c' ]
 *
 *     //function
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.tl2l(tl)
 *     ////
 *     > tlist.tl2l(tl)
 *     [ 0, 'a', 1, 'b', 2, 'c', 0, 'a', 1, 'b', 2, 'c' ]
 *
 * @param {Array} tl - tlist
 * @return {Array} l - list
 */


function tl2l(tl) {
    let [kl,vl] = tl2kvl(tl)
    let l = elel.interleave(kl,vl,1)
    return(l)
}

function _list() {
    return(Array.from(tl2l(tl)))
}

Object.defineProperty(Tlist.prototype, "list", {
    value: _list,
    writable: true,
    enumerable: false,
    configurable: true
})

//////
function dele2tuple(d) {
    return(Object.entries(d)[0])
}

function tuple2dele(t) {
    return({[t[0]]:t[1]})
}

function dl2tl(dl) {
    return(dl.map(dele2tuple))
}

function tl2dl(tl) {
    return(tl.map(tuple2dele))
}
//////

module.exports = {
     Tlist,
     isTuple,
     isTlist,
     t2d,
     d2t,
     kvl2tl,
     tl2kvl,
     tl2d,
     d2tl,
     l2tl,
     tl2l,
     extend,
     prextend,
     allIndexesOfK,
     allIndexesOfV,
     allIndexesOfKV,
     firstIndexOfK,
     firstIndexOfV,
     firstIndexOfKV,
     lastIndexOfK,
     lastIndexOfV,
     lastIndexOfKV,
     insert,
     insertOne,
     append,
     prepend,
     insertTl,
     includesK,
     includesV,
     includesKV,
     countK,
     countV,
     countKV,
     rmK,
     rmV,
     rmKV,
     rmFirstK,
     rmFirstV,
     rmFirstKV,
     rmLastK,
     rmLastV,
     rmLastKV,
     rmAllK,
     rmAllV,
     rmAllKV,
     getK,
     getV,
     getKV,
     getFirstK,
     getFirstV,
     getFirstKV,
     getLastK,
     getLastV,
     getLastKV,
     getAllK,
     getAllV,
     getAllKV,
     set,
     setFirst,
     setLast,
     setAll,
     tupleEqK,
     tupleEqV,
     tupleEqKV,
     tupleEq,
     tupleLtK,
     tupleLtV,
     tupleGtK,
     tupleGtV,
     tupleCmpK,
     tupleCmpV,
     tupleCmpKV,
     tupleCmpVK,
     sortk,
     sortv,
     sortkv,
     sortvk,
     uniqualizeK,
     uniqualizeAllK,
     uniqualizeV,
     uniqualizeAllV,
     uniqualizeKV,
     uniqualizeAllKV,
     ////
     dele2tuple,
     tuple2dele,
     dl2tl,
     tl2dl
}
