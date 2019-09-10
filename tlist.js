const elel = require("elist")

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
 * tl2kvl
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

/**
 * tl2d
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
 *
 *     ////
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


/**
 * preextend
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

/**
 * allIndexesOfK
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

/**
 * allIndexesOfV
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

/**
 * allIndexesOfKV
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

/**
 * firstIndexOfK
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

/**
 * firstIndexOfV
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
 *
 *     ////
 *     
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Number} index - index
 *
 */

function firstIndexOfV(tl,value) {
    return(allIndexesOfV(tl,value)[0])
}

/**
 * firstIndexOfKV
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

/**
 * lastIndexOfK
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

/**
 * lastIndexOfV
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
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.lastIndexOfV(tl,'b')
 *     //function
 *     4
 *     ////
 *
 * @param {Array} tl - tlist
 * @param {String|Number} v - value
 * @return {Array} tl - [t0,t1,...tk...,tn]
 *
 */

function lastIndexOfV(tl,value) {
    return(allIndexesOfV(tl,value).last())
}

/**
 * lastIndexOfKV
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

/**
 * insert
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
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     tlist.insert(tl,2,'k','v')
 *     ////
 *     > tlist.insert(tl,2,'k','v')
 *     [ [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 'k', 'v' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *
 *     @param {Array} tl - tlist
 *     @param {Number} position - index
 *     @param {String|Number} k - key
 *     @param {String|Number} v - value
 */

function insert(tl,position,key,value) {
    tl.insert([key,value],position)
    return(tl)
}

/**
 * insertTl
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
 *     var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 0, 'a' ], [ 1, 'b' ],[2,'c'] ]
 *     var tl1 = [ ['k','v'],['k','v']]
 *     tlist.insertTl(tl,2,tl1)
 *     tl
 *     ////
 *     > tlist.insertTl(tl,2,tl1)
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
 *       [ 'k', 'v' ],
 *       [ 'k', 'v' ],
 *       [ 2, 'c' ],
 *       [ 0, 'a' ],
 *       [ 1, 'b' ],
 *       [ 2, 'c' ] ]
 *     >
 *
 * @param {Array} tl - tlist
 * @param {Number} position - index
 * @param {Array} tl1 - tlist
 * @return {Array} tl - [t0,t1,...tk...,tn]
 */

function insertTl(tl,position,tl1) {
    tl.insertArray(tl1,position)
    return(tl)
}

/**
 * includesK 
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

/**
 * includesV
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

/**
 * includesKV
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

/**
 * countK
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

/**
 * countV
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

/**
 * countKV
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

/**
 * rmK
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

/**
 * rmV
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

/**
 * rmKV
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

/**
 * rmFirstK
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

/**
 * rmFirstV
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

/**
 * rmFirstKV
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

/**
 * rmLastK
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

/**
 * rmLastV
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

/**
 * rmLastKV
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

/**
 * rmAllK
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

/**
 * rmAllV
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

/**
 * rmAllKV
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

/**
 * getK
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

/**
 * getV
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

/**
 * getKV
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

/**
 * getFirstK
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

/**
 * getFirstV
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
    return(getV(tl,value,0)[0])
}

/**
 * getFirstKV
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
    return(getKV(tl,key,value,0)[0])
}

/**
 * getLastK
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
    return(getK(tl,key,which)[0])
}

/**
 * getLastV
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
    return(getV(tl,value,which)[0])
}

/**
 * getLastKV
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
    return(getKV(tl,key,value,which)[0])
}

/**
 * getAllK
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

/**
 * getAllV
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

/**
 * getAllKV
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

/**
 * set
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

/**
 * setAll
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
 *      //prototype
 *
 *     ////
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
    tl.sort(tupleCmpK)
    return(tl)
}

/**
 * sortv
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
    tl.sort(tupleCmpV)
    return(tl)
}

/**
 * sortkv
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
    tl.sort(tupleCmpKV)
    return(tl)
}

/**
 * sortvk
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
    tl.sort(tupleCmpVK)
    return(tl)
}

/**
 * uniqualizeK
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

/**
 * uniqualizeAllK
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

/**
 * uniqualizeV
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

/**
 * uniqualizeAllV
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

/**
 * uniqualizeKV
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

/**
 * uniqualizeAllKV
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



class Tlist  extends Array {
    constructor(...items) {
        super(items);
    }
    
}


module.exports = {
     isTuple,
     isTlist,
     t2d,
     d2t,
     kvl2tl,
     tl2kvl,
     tl2d,
     d2tl,
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
     uniqualizeAllKV
}
