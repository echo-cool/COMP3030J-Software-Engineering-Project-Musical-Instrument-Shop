// /* Minification failed. Returning unminified contents.
// (287,44-45): run-time error JS1195: Expected expression: ?
// (287,68-69): run-time error JS1195: Expected expression: ?
// (287,126-127): run-time error JS1195: Expected expression: ?
// (438,44-45): run-time error JS1195: Expected expression: ?
// (1317,79-80): run-time error JS1003: Expected ':': }
// (1351,43-44): run-time error JS1028: Expected identifier or string: .
// (1351,77-78): run-time error JS1028: Expected identifier or string: .
// (3159,37-38): run-time error JS1195: Expected expression: >
// (3173,10-11): run-time error JS1195: Expected expression: )
// (3176,5-6): run-time error JS1002: Syntax error: }
// (3179,97-98): run-time error JS1004: Expected ';': {
// (4321,1-2): run-time error JS1002: Syntax error: }
// (4323,29-30): run-time error JS1004: Expected ';': {
// (3175,9-31): run-time error JS1018: 'return' statement outside of function: return maxMessageDelay
//  */
// /*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
// !function (e, t) {
//     "use strict";
//     "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
//         if (!e.document) throw new Error("jQuery requires a window with a document");
//         return t(e)
//     } : t(e)
// }("undefined" != typeof window ? window : this, function (e, t) {
//     "use strict";
//     var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, u = n.indexOf, l = {},
//         c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object), h = {}, g = function e(t) {
//             return "function" == typeof t && "number" != typeof t.nodeType
//         }, y = function e(t) {
//             return null != t && t === t.window
//         }, v = {type: !0, src: !0, noModule: !0};
//
//     function m(e, t, n) {
//         var i, o = (t = t || r).createElement("script");
//         if (o.text = e, n) for (i in v) n[i] && (o[i] = n[i]);
//         t.head.appendChild(o).parentNode.removeChild(o)
//     }
//
//     function x(e) {
//         return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
//     }
//
//     var b = "3.3.1", w = function (e, t) {
//         return new w.fn.init(e, t)
//     }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
//     w.fn = w.prototype = {
//         jquery: "3.3.1", constructor: w, length: 0, toArray: function () {
//             return o.call(this)
//         }, get: function (e) {
//             return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
//         }, pushStack: function (e) {
//             var t = w.merge(this.constructor(), e);
//             return t.prevObject = this, t
//         }, each: function (e) {
//             return w.each(this, e)
//         }, map: function (e) {
//             return this.pushStack(w.map(this, function (t, n) {
//                 return e.call(t, n, t)
//             }))
//         }, slice: function () {
//             return this.pushStack(o.apply(this, arguments))
//         }, first: function () {
//             return this.eq(0)
//         }, last: function () {
//             return this.eq(-1)
//         }, eq: function (e) {
//             var t = this.length, n = +e + (e < 0 ? t : 0);
//             return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
//         }, end: function () {
//             return this.prevObject || this.constructor()
//         }, push: s, sort: n.sort, splice: n.splice
//     }, w.extend = w.fn.extend = function () {
//         var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
//         for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
//         return a
//     }, w.extend({
//         expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
//             throw new Error(e)
//         }, noop: function () {
//         }, isPlainObject: function (e) {
//             var t, n;
//             return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
//         }, isEmptyObject: function (e) {
//             var t;
//             for (t in e) return !1;
//             return !0
//         }, globalEval: function (e) {
//             m(e)
//         }, each: function (e, t) {
//             var n, r = 0;
//             if (C(e)) {
//                 for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
//             } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
//             return e
//         }, trim: function (e) {
//             return null == e ? "" : (e + "").replace(T, "")
//         }, makeArray: function (e, t) {
//             var n = t || [];
//             return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
//         }, inArray: function (e, t, n) {
//             return null == t ? -1 : u.call(t, e, n)
//         }, merge: function (e, t) {
//             for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
//             return e.length = i, e
//         }, grep: function (e, t, n) {
//             for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
//             return i
//         }, map: function (e, t, n) {
//             var r, i, o = 0, s = [];
//             if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
//             return a.apply([], s)
//         }, guid: 1, support: h
//     }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
//         l["[object " + t + "]"] = t.toLowerCase()
//     });
//
//     function C(e) {
//         var t = !!e && "length" in e && e.length, n = x(e);
//         return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
//     }
//
//     var E = function (e) {
//         var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0,
//             C = 0, E = ae(), k = ae(), S = ae(), D = function (e, t) {
//                 return e === t && (f = !0), 0
//             }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function (e, t) {
//                 for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
//                 return -1
//             },
//             P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
//             M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
//             I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
//             W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
//             $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
//             F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
//             z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W),
//             U = new RegExp("^" + R + "$"), V = {
//                 ID: new RegExp("^#(" + R + ")"),
//                 CLASS: new RegExp("^\\.(" + R + ")"),
//                 TAG: new RegExp("^(" + R + "|[*])"),
//                 ATTR: new RegExp("^" + I),
//                 PSEUDO: new RegExp("^" + W),
//                 CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
//                 bool: new RegExp("^(?:" + P + ")$", "i"),
//                 needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
//             }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/,
//             J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/,
//             Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function (e, t, n) {
//                 var r = "0x" + t - 65536;
//                 return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
//             }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
//                 return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
//             }, re = function () {
//                 p()
//             }, ie = me(function (e) {
//                 return !0 === e.disabled && ("form" in e || "label" in e)
//             }, {dir: "parentNode", next: "legend"});
//         try {
//             L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
//         } catch (e) {
//             L = {
//                 apply: A.length ? function (e, t) {
//                     q.apply(e, H.call(t))
//                 } : function (e, t) {
//                     var n = e.length, r = 0;
//                     while (e[n++] = t[r++]) ;
//                     e.length = n - 1
//                 }
//             }
//         }
//
//         function oe(e, t, r, i) {
//             var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
//             if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
//             if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
//                 if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
//                     if (9 === T) {
//                         if (!(l = t.getElementById(o))) return r;
//                         if (l.id === o) return r.push(l), r
//                     } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
//                 } else {
//                     if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
//                     if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
//                 }
//                 if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
//                     if (1 !== T) m = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
//                         (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;
//                         while (s--) h[s] = "#" + c + " " + ve(h[s]);
//                         v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
//                     }
//                     if (v) try {
//                         return L.apply(r, m.querySelectorAll(v)), r
//                     } catch (e) {
//                     } finally {
//                         c === b && t.removeAttribute("id")
//                     }
//                 }
//             }
//             return u(e.replace(B, "$1"), t, r, i)
//         }
//
//         function ae() {
//             var e = [];
//
//             function t(n, i) {
//                 return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
//             }
//
//             return t
//         }
//
//         function se(e) {
//             return e[b] = !0, e
//         }
//
//         function ue(e) {
//             var t = d.createElement("fieldset");
//             try {
//                 return !!e(t)
//             } catch (e) {
//                 return !1
//             } finally {
//                 t.parentNode && t.parentNode.removeChild(t), t = null
//             }
//         }
//
//         function le(e, t) {
//             var n = e.split("|"), i = n.length;
//             while (i--) r.attrHandle[n[i]] = t
//         }
//
//         function ce(e, t) {
//             var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
//             if (r) return r;
//             if (n) while (n = n.nextSibling) if (n === t) return -1;
//             return e ? 1 : -1
//         }
//
//         function fe(e) {
//             return function (t) {
//                 return "input" === t.nodeName.toLowerCase() && t.type === e
//             }
//         }
//
//         function pe(e) {
//             return function (t) {
//                 var n = t.nodeName.toLowerCase();
//                 return ("input" === n || "button" === n) && t.type === e
//             }
//         }
//
//         function de(e) {
//             return function (t) {
//                 return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
//             }
//         }
//
//         function he(e) {
//             return se(function (t) {
//                 return t = +t, se(function (n, r) {
//                     var i, o = e([], n.length, t), a = o.length;
//                     while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
//                 })
//             })
//         }
//
//         function ge(e) {
//             return e && "undefined" != typeof e.getElementsByTagName && e
//         }
//
//         n = oe.support = {}, o = oe.isXML = function (e) {
//             var t = e && (e.ownerDocument || e).documentElement;
//             return !!t && "HTML" !== t.nodeName
//         }, p = oe.setDocument = function (e) {
//             var t, i, a = e ? e.ownerDocument || e : w;
//             return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
//                 return e.className = "i", !e.getAttribute("className")
//             }), n.getElementsByTagName = ue(function (e) {
//                 return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
//             }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
//                 return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
//             }), n.getById ? (r.filter.ID = function (e) {
//                 var t = e.replace(Z, ee);
//                 return function (e) {
//                     return e.getAttribute("id") === t
//                 }
//             }, r.find.ID = function (e, t) {
//                 if ("undefined" != typeof t.getElementById && g) {
//                     var n = t.getElementById(e);
//                     return n ? [n] : []
//                 }
//             }) : (r.filter.ID = function (e) {
//                 var t = e.replace(Z, ee);
//                 return function (e) {
//                     var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
//                     return n && n.value === t
//                 }
//             }, r.find.ID = function (e, t) {
//                 if ("undefined" != typeof t.getElementById && g) {
//                     var n, r, i, o = t.getElementById(e);
//                     if (o) {
//                         if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
//                         i = t.getElementsByName(e), r = 0;
//                         while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
//                     }
//                     return []
//                 }
//             }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
//                 return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
//             } : function (e, t) {
//                 var n, r = [], i = 0, o = t.getElementsByTagName(e);
//                 if ("*" === e) {
//                     while (n = o[i++]) 1 === n.nodeType && r.push(n);
//                     return r
//                 }
//                 return o
//             }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
//                 if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
//             }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
//                 h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
//             }), ue(function (e) {
//                 e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
//                 var t = d.createElement("input");
//                 t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
//             })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
//                 n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
//             }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
//                 var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
//                 return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
//             } : function (e, t) {
//                 if (t) while (t = t.parentNode) if (t === e) return !0;
//                 return !1
//             }, D = t ? function (e, t) {
//                 if (e === t) return f = !0, 0;
//                 var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
//                 return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
//             } : function (e, t) {
//                 if (e === t) return f = !0, 0;
//                 var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
//                 if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
//                 if (i === o) return ce(e, t);
//                 n = e;
//                 while (n = n.parentNode) a.unshift(n);
//                 n = t;
//                 while (n = n.parentNode) s.unshift(n);
//                 while (a[r] === s[r]) r++;
//                 return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
//             }, d) : d
//         }, oe.matches = function (e, t) {
//             return oe(e, null, null, t)
//         }, oe.matchesSelector = function (e, t) {
//             if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
//                 var r = m.call(e, t);
//                 if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
//             } catch (e) {
//             }
//             return oe(t, d, null, [e]).length > 0
//         }, oe.contains = function (e, t) {
//             return (e.ownerDocument || e) !== d && p(e), x(e, t)
//         }, oe.attr = function (e, t) {
//             (e.ownerDocument || e) !== d && p(e);
//             var i = r.attrHandle[t.toLowerCase()],
//                 o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
//             return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
//         }, oe.escape = function (e) {
//             return (e + "").replace(te, ne)
//         }, oe.error = function (e) {
//             throw new Error("Syntax error, unrecognized expression: " + e)
//         }, oe.uniqueSort = function (e) {
//             var t, r = [], i = 0, o = 0;
//             if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
//                 while (t = e[o++]) t === e[o] && (i = r.push(o));
//                 while (i--) e.splice(r[i], 1)
//             }
//             return c = null, e
//         }, i = oe.getText = function (e) {
//             var t, n = "", r = 0, o = e.nodeType;
//             if (o) {
//                 if (1 === o || 9 === o || 11 === o) {
//                     if ("string" == typeof e.textContent) return e.textContent;
//                     for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
//                 } else if (3 === o || 4 === o) return e.nodeValue
//             } else while (t = e[r++]) n += i(t);
//             return n
//         }, (r = oe.selectors = {
//             cacheLength: 50,
//             createPseudo: se,
//             match: V,
//             attrHandle: {},
//             find: {},
//             relative: {
//                 ">": {dir: "parentNode", first: !0},
//                 " ": {dir: "parentNode"},
//                 "+": {dir: "previousSibling", first: !0},
//                 "~": {dir: "previousSibling"}
//             },
//             preFilter: {
//                 ATTR: function (e) {
//                     return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
//                 }, CHILD: function (e) {
//                     return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
//                 }, PSEUDO: function (e) {
//                     var t, n = !e[6] && e[2];
//                     return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
//                 }
//             },
//             filter: {
//                 TAG: function (e) {
//                     var t = e.replace(Z, ee).toLowerCase();
//                     return "*" === e ? function () {
//                         return !0
//                     } : function (e) {
//                         return e.nodeName && e.nodeName.toLowerCase() === t
//                     }
//                 }, CLASS: function (e) {
//                     var t = E[e + " "];
//                     return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
//                         return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
//                     })
//                 }, ATTR: function (e, t, n) {
//                     return function (r) {
//                         var i = oe.attr(r, e);
//                         return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
//                     }
//                 }, CHILD: function (e, t, n, r, i) {
//                     var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
//                     return 1 === r && 0 === i ? function (e) {
//                         return !!e.parentNode
//                     } : function (t, n, u) {
//                         var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode,
//                             v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
//                         if (y) {
//                             if (o) {
//                                 while (g) {
//                                     p = t;
//                                     while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
//                                     h = g = "only" === e && !h && "nextSibling"
//                                 }
//                                 return !0
//                             }
//                             if (h = [a ? y.firstChild : y.lastChild], a && m) {
//                                 x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
//                                 while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) {
//                                     c[e] = [T, d, x];
//                                     break
//                                 }
//                             } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
//                             return (x -= i) === r || x % r == 0 && x / r >= 0
//                         }
//                     }
//                 }, PSEUDO: function (e, t) {
//                     var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
//                     return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
//                         var r, o = i(e, t), a = o.length;
//                         while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
//                     }) : function (e) {
//                         return i(e, 0, n)
//                     }) : i
//                 }
//             },
//             pseudos: {
//                 not: se(function (e) {
//                     var t = [], n = [], r = s(e.replace(B, "$1"));
//                     return r[b] ? se(function (e, t, n, i) {
//                         var o, a = r(e, null, i, []), s = e.length;
//                         while (s--) (o = a[s]) && (e[s] = !(t[s] = o))
//                     }) : function (e, i, o) {
//                         return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
//                     }
//                 }), has: se(function (e) {
//                     return function (t) {
//                         return oe(e, t).length > 0
//                     }
//                 }), contains: se(function (e) {
//                     return e = e.replace(Z, ee), function (t) {
//                         return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
//                     }
//                 }), lang: se(function (e) {
//                     return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
//                         var n;
//                         do {
//                             if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
//                         } while ((t = t.parentNode) && 1 === t.nodeType);
//                         return !1
//                     }
//                 }), target: function (t) {
//                     var n = e.location && e.location.hash;
//                     return n && n.slice(1) === t.id
//                 }, root: function (e) {
//                     return e === h
//                 }, focus: function (e) {
//                     return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
//                 }, enabled: de(!1), disabled: de(!0), checked: function (e) {
//                     var t = e.nodeName.toLowerCase();
//                     return "input" === t && !!e.checked || "option" === t && !!e.selected
//                 }, selected: function (e) {
//                     return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
//                 }, empty: function (e) {
//                     for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
//                     return !0
//                 }, parent: function (e) {
//                     return !r.pseudos.empty(e)
//                 }, header: function (e) {
//                     return Y.test(e.nodeName)
//                 }, input: function (e) {
//                     return G.test(e.nodeName)
//                 }, button: function (e) {
//                     var t = e.nodeName.toLowerCase();
//                     return "input" === t && "button" === e.type || "button" === t
//                 }, text: function (e) {
//                     var t;
//                     return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
//                 }, first: he(function () {
//                     return [0]
//                 }), last: he(function (e, t) {
//                     return [t - 1]
//                 }), eq: he(function (e, t, n) {
//                     return [n < 0 ? n + t : n]
//                 }), even: he(function (e, t) {
//                     for (var n = 0; n < t; n += 2) e.push(n);
//                     return e
//                 }), odd: he(function (e, t) {
//                     for (var n = 1; n < t; n += 2) e.push(n);
//                     return e
//                 }), lt: he(function (e, t, n) {
//                     for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
//                     return e
//                 }), gt: he(function (e, t, n) {
//                     for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
//                     return e
//                 })
//             }
//         }).pseudos.nth = r.pseudos.eq;
//         for (t in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) r.pseudos[t] = fe(t);
//         for (t in {submit: !0, reset: !0}) r.pseudos[t] = pe(t);
//
//         function ye() {
//         }
//
//         ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) {
//             var n, i, o, a, s, u, l, c = k[e + " "];
//             if (c) return t ? 0 : c.slice(0);
//             s = e, u = [], l = r.preFilter;
//             while (s) {
//                 n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
//                     value: n,
//                     type: i[0].replace(B, " ")
//                 }), s = s.slice(n.length));
//                 for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
//                     value: n,
//                     type: a,
//                     matches: i
//                 }), s = s.slice(n.length));
//                 if (!n) break
//             }
//             return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
//         };
//
//         function ve(e) {
//             for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
//             return r
//         }
//
//         function me(e, t, n) {
//             var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++;
//             return t.first ? function (t, n, i) {
//                 while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i);
//                 return !1
//             } : function (t, n, u) {
//                 var l, c, f, p = [T, s];
//                 if (u) {
//                     while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0
//                 } else while (t = t[r]) if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
//                     if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
//                     if (c[o] = p, p[2] = e(t, n, u)) return !0
//                 }
//                 return !1
//             }
//         }
//
//         function xe(e) {
//             return e.length > 1 ? function (t, n, r) {
//                 var i = e.length;
//                 while (i--) if (!e[i](t, n, r)) return !1;
//                 return !0
//             } : e[0]
//         }
//
//         function be(e, t, n) {
//             for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
//             return n
//         }
//
//         function we(e, t, n, r, i) {
//             for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
//             return a
//         }
//
//         function Te(e, t, n, r, i, o) {
//             return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
//                 var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []),
//                     y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
//                 if (n && n(y, v, s, u), r) {
//                     l = we(v, d), r(l, [], s, u), c = l.length;
//                     while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
//                 }
//                 if (o) {
//                     if (i || e) {
//                         if (i) {
//                             l = [], c = v.length;
//                             while (c--) (f = v[c]) && l.push(y[c] = f);
//                             i(null, v = [], l, u)
//                         }
//                         c = v.length;
//                         while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
//                     }
//                 } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
//             })
//         }
//
//         function Ce(e) {
//             for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
//                 return e === t
//             }, s, !0), f = me(function (e) {
//                 return O(t, e) > -1
//             }, s, !0), p = [function (e, n, r) {
//                 var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
//                 return t = null, i
//             }]; u < o; u++) if (n = r.relative[e[u].type]) p = [me(xe(p), n)]; else {
//                 if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
//                     for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
//                     return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({value: " " === e[u - 2].type ? "*" : ""})).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
//                 }
//                 p.push(n)
//             }
//             return xe(p)
//         }
//
//         function Ee(e, t) {
//             var n = t.length > 0, i = e.length > 0, o = function (o, a, s, u, c) {
//                 var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c),
//                     E = T += null == w ? 1 : Math.random() || .1, k = C.length;
//                 for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
//                     if (i && f) {
//                         h = 0, a || f.ownerDocument === d || (p(f), s = !g);
//                         while (y = e[h++]) if (y(f, a || d, s)) {
//                             u.push(f);
//                             break
//                         }
//                         c && (T = E)
//                     }
//                     n && ((f = !y && f) && v--, o && x.push(f))
//                 }
//                 if (v += m, n && m !== v) {
//                     h = 0;
//                     while (y = t[h++]) y(x, b, a, s);
//                     if (o) {
//                         if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
//                         b = we(b)
//                     }
//                     L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
//                 }
//                 return c && (T = E, l = w), x
//             };
//             return n ? se(o) : o
//         }
//
//         return s = oe.compile = function (e, t) {
//             var n, r = [], i = [], o = S[e + " "];
//             if (!o) {
//                 t || (t = a(e)), n = t.length;
//                 while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
//                 (o = S(e, Ee(i, r))).selector = e
//             }
//             return o
//         }, u = oe.select = function (e, t, n, i) {
//             var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
//             if (n = n || [], 1 === d.length) {
//                 if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
//                     if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
//                     p && (t = t.parentNode), e = e.slice(u.shift().value.length)
//                 }
//                 o = V.needsContext.test(e) ? 0 : u.length;
//                 while (o--) {
//                     if (l = u[o], r.relative[c = l.type]) break;
//                     if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
//                         if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
//                         break
//                     }
//                 }
//             }
//             return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
//         }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
//             return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
//         }), ue(function (e) {
//             return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
//         }) || le("type|href|height|width", function (e, t, n) {
//             if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
//         }), n.attributes && ue(function (e) {
//             return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
//         }) || le("value", function (e, t, n) {
//             if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
//         }), ue(function (e) {
//             return null == e.getAttribute("disabled")
//         }) || le(P, function (e, t, n) {
//             var r;
//             if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
//         }), oe
//     }(e);
//     w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
//     var k = function (e, t, n) {
//         var r = [], i = void 0 !== n;
//         while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
//             if (i && w(e).is(n)) break;
//             r.push(e)
//         }
//         return r
//     }, S = function (e, t) {
//         for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
//         return n
//     }, D = w.expr.match.needsContext;
//
//     function N(e, t) {
//         return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
//     }
//
//     var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
//
//     function j(e, t, n) {
//         return g(t) ? w.grep(e, function (e, r) {
//             return !!t.call(e, r, e) !== n
//         }) : t.nodeType ? w.grep(e, function (e) {
//             return e === t !== n
//         }) : "string" != typeof t ? w.grep(e, function (e) {
//             return u.call(t, e) > -1 !== n
//         }) : w.filter(t, e, n)
//     }
//
//     w.filter = function (e, t, n) {
//         var r = t[0];
//         return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
//             return 1 === e.nodeType
//         }))
//     }, w.fn.extend({
//         find: function (e) {
//             var t, n, r = this.length, i = this;
//             if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
//                 for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0
//             }));
//             for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
//             return r > 1 ? w.uniqueSort(n) : n
//         }, filter: function (e) {
//             return this.pushStack(j(this, e || [], !1))
//         }, not: function (e) {
//             return this.pushStack(j(this, e || [], !0))
//         }, is: function (e) {
//             return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
//         }
//     });
//     var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
//     (w.fn.init = function (e, t, n) {
//         var i, o;
//         if (!e) return this;
//         if (n = n || q, "string" == typeof e) {
//             if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
//             if (i[1]) {
//                 if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
//                 return this
//             }
//             return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
//         }
//         return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
//     }).prototype = w.fn, q = w(r);
//     var H = /^(?:parents|prev(?:Until|All))/, O = {children: !0, contents: !0, next: !0, prev: !0};
//     w.fn.extend({
//         has: function (e) {
//             var t = w(e, this), n = t.length;
//             return this.filter(function () {
//                 for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0
//             })
//         }, closest: function (e, t) {
//             var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
//             if (!D.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
//                 o.push(n);
//                 break
//             }
//             return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
//         }, index: function (e) {
//             return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
//         }, add: function (e, t) {
//             return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
//         }, addBack: function (e) {
//             return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
//         }
//     });
//
//     function P(e, t) {
//         while ((e = e[t]) && 1 !== e.nodeType) ;
//         return e
//     }
//
//     w.each({
//         parent: function (e) {
//             var t = e.parentNode;
//             return t && 11 !== t.nodeType ? t : null
//         }, parents: function (e) {
//             return k(e, "parentNode")
//         }, parentsUntil: function (e, t, n) {
//             return k(e, "parentNode", n)
//         }, next: function (e) {
//             return P(e, "nextSibling")
//         }, prev: function (e) {
//             return P(e, "previousSibling")
//         }, nextAll: function (e) {
//             return k(e, "nextSibling")
//         }, prevAll: function (e) {
//             return k(e, "previousSibling")
//         }, nextUntil: function (e, t, n) {
//             return k(e, "nextSibling", n)
//         }, prevUntil: function (e, t, n) {
//             return k(e, "previousSibling", n)
//         }, siblings: function (e) {
//             return S((e.parentNode || {}).firstChild, e)
//         }, children: function (e) {
//             return S(e.firstChild)
//         }, contents: function (e) {
//             return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
//         }
//     }, function (e, t) {
//         w.fn[e] = function (n, r) {
//             var i = w.map(this, t, n);
//             return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
//         }
//     });
//     var M = /[^\x20\t\r\n\f]+/g;
//
//     function R(e) {
//         var t = {};
//         return w.each(e.match(M) || [], function (e, n) {
//             t[n] = !0
//         }), t
//     }
//
//     w.Callbacks = function (e) {
//         e = "string" == typeof e ? R(e) : w.extend({}, e);
//         var t, n, r, i, o = [], a = [], s = -1, u = function () {
//             for (i = i || e.once, r = t = !0; a.length; s = -1) {
//                 n = a.shift();
//                 while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
//             }
//             e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
//         }, l = {
//             add: function () {
//                 return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
//                     w.each(n, function (n, r) {
//                         g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
//                     })
//                 }(arguments), n && !t && u()), this
//             }, remove: function () {
//                 return w.each(arguments, function (e, t) {
//                     var n;
//                     while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
//                 }), this
//             }, has: function (e) {
//                 return e ? w.inArray(e, o) > -1 : o.length > 0
//             }, empty: function () {
//                 return o && (o = []), this
//             }, disable: function () {
//                 return i = a = [], o = n = "", this
//             }, disabled: function () {
//                 return !o
//             }, lock: function () {
//                 return i = a = [], n || t || (o = n = ""), this
//             }, locked: function () {
//                 return !!i
//             }, fireWith: function (e, n) {
//                 return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
//             }, fire: function () {
//                 return l.fireWith(this, arguments), this
//             }, fired: function () {
//                 return !!r
//             }
//         };
//         return l
//     };
//
//     function I(e) {
//         return e
//     }
//
//     function W(e) {
//         throw e
//     }
//
//     function $(e, t, n, r) {
//         var i;
//         try {
//             e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
//         } catch (e) {
//             n.apply(void 0, [e])
//         }
//     }
//
//     w.extend({
//         Deferred: function (t) {
//             var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
//                 r = "pending", i = {
//                     state: function () {
//                         return r
//                     }, always: function () {
//                         return o.done(arguments).fail(arguments), this
//                     }, "catch": function (e) {
//                         return i.then(null, e)
//                     }, pipe: function () {
//                         var e = arguments;
//                         return w.Deferred(function (t) {
//                             w.each(n, function (n, r) {
//                                 var i = g(e[r[4]]) && e[r[4]];
//                                 o[r[1]](function () {
//                                     var e = i && i.apply(this, arguments);
//                                     e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
//                                 })
//                             }), e = null
//                         }).promise()
//                     }, then: function (t, r, i) {
//                         var o = 0;
//
//                         function a(t, n, r, i) {
//                             return function () {
//                                 var s = this, u = arguments, l = function () {
//                                     var e, l;
//                                     if (!(t < o)) {
//                                         if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
//                                         l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
//                                     }
//                                 }, c = i ? l : function () {
//                                     try {
//                                         l()
//                                     } catch (e) {
//                                         w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
//                                     }
//                                 };
//                                 t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
//                             }
//                         }
//
//                         return w.Deferred(function (e) {
//                             n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
//                         }).promise()
//                     }, promise: function (e) {
//                         return null != e ? w.extend(e, i) : i
//                     }
//                 }, o = {};
//             return w.each(n, function (e, t) {
//                 var a = t[2], s = t[5];
//                 i[t[1]] = a.add, s && a.add(function () {
//                     r = s
//                 }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
//                     return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
//                 }, o[t[0] + "With"] = a.fireWith
//             }), i.promise(o), t && t.call(o, o), o
//         }, when: function (e) {
//             var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), s = function (e) {
//                 return function (n) {
//                     r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
//                 }
//             };
//             if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
//             while (n--) $(i[n], s(n), a.reject);
//             return a.promise()
//         }
//     });
//     var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
//     w.Deferred.exceptionHook = function (t, n) {
//         e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
//     }, w.readyException = function (t) {
//         e.setTimeout(function () {
//             throw t
//         })
//     };
//     var F = w.Deferred();
//     w.fn.ready = function (e) {
//         return F.then(e)["catch"](function (e) {
//             w.readyException(e)
//         }), this
//     }, w.extend({
//         isReady: !1, readyWait: 1, ready: function (e) {
//             (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
//         }
//     }), w.ready.then = F.then;
//
//     function _() {
//         r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
//     }
//
//     "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
//     var z = function (e, t, n, r, i, o, a) {
//         var s = 0, u = e.length, l = null == n;
//         if ("object" === x(n)) {
//             i = !0;
//             for (s in n) z(e, t, s, n[s], !0, o, a)
//         } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
//             return l.call(w(e), n)
//         })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
//         return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
//     }, X = /^-ms-/, U = /-([a-z])/g;
//
//     function V(e, t) {
//         return t.toUpperCase()
//     }
//
//     function G(e) {
//         return e.replace(X, "ms-").replace(U, V)
//     }
//
//     var Y = function (e) {
//         return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
//     };
//
//     function Q() {
//         this.expando = w.expando + Q.uid++
//     }
//
//     Q.uid = 1, Q.prototype = {
//         cache: function (e) {
//             var t = e[this.expando];
//             return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
//                 value: t,
//                 configurable: !0
//             }))), t
//         }, set: function (e, t, n) {
//             var r, i = this.cache(e);
//             if ("string" == typeof t) i[G(t)] = n; else for (r in t) i[G(r)] = t[r];
//             return i
//         }, get: function (e, t) {
//             return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
//         }, access: function (e, t, n) {
//             return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
//         }, remove: function (e, t) {
//             var n, r = e[this.expando];
//             if (void 0 !== r) {
//                 if (void 0 !== t) {
//                     n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
//                     while (n--) delete r[t[n]]
//                 }
//                 (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
//             }
//         }, hasData: function (e) {
//             var t = e[this.expando];
//             return void 0 !== t && !w.isEmptyObject(t)
//         }
//     };
//     var J = new Q, K = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;
//
//     function te(e) {
//         return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
//     }
//
//     function ne(e, t, n) {
//         var r;
//         if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
//             try {
//                 n = te(n)
//             } catch (e) {
//             }
//             K.set(e, t, n)
//         } else n = void 0;
//         return n
//     }
//
//     w.extend({
//         hasData: function (e) {
//             return K.hasData(e) || J.hasData(e)
//         }, data: function (e, t, n) {
//             return K.access(e, t, n)
//         }, removeData: function (e, t) {
//             K.remove(e, t)
//         }, _data: function (e, t, n) {
//             return J.access(e, t, n)
//         }, _removeData: function (e, t) {
//             J.remove(e, t)
//         }
//     }), w.fn.extend({
//         data: function (e, t) {
//             var n, r, i, o = this[0], a = o && o.attributes;
//             if (void 0 === e) {
//                 if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
//                     n = a.length;
//                     while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
//                     J.set(o, "hasDataAttrs", !0)
//                 }
//                 return i
//             }
//             return "object" == typeof e ? this.each(function () {
//                 K.set(this, e)
//             }) : z(this, function (t) {
//                 var n;
//                 if (o && void 0 === t) {
//                     if (void 0 !== (n = K.get(o, e))) return n;
//                     if (void 0 !== (n = ne(o, e))) return n
//                 } else this.each(function () {
//                     K.set(this, e, t)
//                 })
//             }, null, t, arguments.length > 1, null, !0)
//         }, removeData: function (e) {
//             return this.each(function () {
//                 K.remove(this, e)
//             })
//         }
//     }), w.extend({
//         queue: function (e, t, n) {
//             var r;
//             if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
//         }, dequeue: function (e, t) {
//             t = t || "fx";
//             var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t), a = function () {
//                 w.dequeue(e, t)
//             };
//             "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
//         }, _queueHooks: function (e, t) {
//             var n = t + "queueHooks";
//             return J.get(e, n) || J.access(e, n, {
//                 empty: w.Callbacks("once memory").add(function () {
//                     J.remove(e, [t + "queue", n])
//                 })
//             })
//         }
//     }), w.fn.extend({
//         queue: function (e, t) {
//             var n = 2;
//             return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
//                 var n = w.queue(this, e, t);
//                 w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
//             })
//         }, dequeue: function (e) {
//             return this.each(function () {
//                 w.dequeue(this, e)
//             })
//         }, clearQueue: function (e) {
//             return this.queue(e || "fx", [])
//         }, promise: function (e, t) {
//             var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function () {
//                 --r || i.resolveWith(o, [o])
//             };
//             "string" != typeof e && (t = e, e = void 0), e = e || "fx";
//             while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
//             return s(), i.promise(t)
//         }
//     });
//     var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
//         oe = ["Top", "Right", "Bottom", "Left"], ae = function (e, t) {
//             return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
//         }, se = function (e, t, n, r) {
//             var i, o, a = {};
//             for (o in t) a[o] = e.style[o], e.style[o] = t[o];
//             i = n.apply(e, r || []);
//             for (o in t) e.style[o] = a[o];
//             return i
//         };
//
//     function ue(e, t, n, r) {
//         var i, o, a = 20, s = r ? function () {
//                 return r.cur()
//             } : function () {
//                 return w.css(e, t, "")
//             }, u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
//             c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
//         if (c && c[3] !== l) {
//             u /= 2, l = l || c[3], c = +u || 1;
//             while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
//             c *= 2, w.style(e, t, c + l), n = n || []
//         }
//         return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
//     }
//
//     var le = {};
//
//     function ce(e) {
//         var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
//         return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
//     }
//
//     function fe(e, t) {
//         for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
//         for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
//         return e
//     }
//
//     w.fn.extend({
//         show: function () {
//             return fe(this, !0)
//         }, hide: function () {
//             return fe(this)
//         }, toggle: function (e) {
//             return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
//                 ae(this) ? w(this).show() : w(this).hide()
//             })
//         }
//     });
//     var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i,
//         ge = {
//             option: [1, "<select multiple='multiple'>", "</select>"],
//             thead: [1, "<table>", "</table>"],
//             col: [2, "<table><colgroup>", "</colgroup></table>"],
//             tr: [2, "<table><tbody>", "</tbody></table>"],
//             td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
//             _default: [0, "", ""]
//         };
//     ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
//
//     function ye(e, t) {
//         var n;
//         return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
//     }
//
//     function ve(e, t) {
//         for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
//     }
//
//     var me = /<|&#?\w+;/;
//
//     function xe(e, t, n, r, i) {
//         for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) {
//             a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
//             while (c--) a = a.lastChild;
//             w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
//         } else p.push(t.createTextNode(o));
//         f.textContent = "", d = 0;
//         while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o); else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
//             c = 0;
//             while (o = a[c++]) he.test(o.type || "") && n.push(o)
//         }
//         return f
//     }
//
//     !function () {
//         var e = r.createDocumentFragment().appendChild(r.createElement("div")), t = r.createElement("input");
//         t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
//     }();
//     var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
//         Ce = /^([^.]*)(?:\.(.+)|)/;
//
//     function Ee() {
//         return !0
//     }
//
//     function ke() {
//         return !1
//     }
//
//     function Se() {
//         try {
//             return r.activeElement
//         } catch (e) {
//         }
//     }
//
//     function De(e, t, n, r, i, o) {
//         var a, s;
//         if ("object" == typeof t) {
//             "string" != typeof n && (r = r || n, n = void 0);
//             for (s in t) De(e, s, n, r, t[s], o);
//             return e
//         }
//         if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke; else if (!i) return e;
//         return 1 === o && (a = i, (i = function (e) {
//             return w().off(e), a.apply(this, arguments)
//         }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
//             w.event.add(this, t, i, r, n)
//         })
//     }
//
//     w.event = {
//         global: {}, add: function (e, t, n, r, i) {
//             var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
//             if (y) {
//                 n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
//                     return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
//                 }), l = (t = (t || "").match(M) || [""]).length;
//                 while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
//                     type: d,
//                     origType: g,
//                     data: r,
//                     handler: n,
//                     guid: n.guid,
//                     selector: i,
//                     needsContext: i && w.expr.match.needsContext.test(i),
//                     namespace: h.join(".")
//                 }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
//             }
//         }, remove: function (e, t, n, r, i) {
//             var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
//             if (y && (u = y.events)) {
//                 l = (t = (t || "").match(M) || [""]).length;
//                 while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
//                     f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
//                     while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
//                     a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
//                 } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
//                 w.isEmptyObject(u) && J.remove(e, "handle events")
//             }
//         }, dispatch: function (e) {
//             var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length),
//                 l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
//             for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
//             if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
//                 s = w.event.handlers.call(this, t, l), n = 0;
//                 while ((o = s[n++]) && !t.isPropagationStopped()) {
//                     t.currentTarget = o.elem, r = 0;
//                     while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
//                 }
//                 return c.postDispatch && c.postDispatch.call(this, t), t.result
//             }
//         }, handlers: function (e, t) {
//             var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
//             if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
//                 for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
//                 o.length && s.push({elem: l, handlers: o})
//             }
//             return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
//         }, addProp: function (e, t) {
//             Object.defineProperty(w.Event.prototype, e, {
//                 enumerable: !0, configurable: !0, get: g(t) ? function () {
//                     if (this.originalEvent) return t(this.originalEvent)
//                 } : function () {
//                     if (this.originalEvent) return this.originalEvent[e]
//                 }, set: function (t) {
//                     Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
//                 }
//             })
//         }, fix: function (e) {
//             return e[w.expando] ? e : new w.Event(e)
//         }, special: {
//             load: {noBubble: !0}, focus: {
//                 trigger: function () {
//                     if (this !== Se() && this.focus) return this.focus(), !1
//                 }, delegateType: "focusin"
//             }, blur: {
//                 trigger: function () {
//                     if (this === Se() && this.blur) return this.blur(), !1
//                 }, delegateType: "focusout"
//             }, click: {
//                 trigger: function () {
//                     if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
//                 }, _default: function (e) {
//                     return N(e.target, "a")
//                 }
//             }, beforeunload: {
//                 postDispatch: function (e) {
//                     void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
//                 }
//             }
//         }
//     }, w.removeEvent = function (e, t, n) {
//         e.removeEventListener && e.removeEventListener(t, n)
//     }, w.Event = function (e, t) {
//         if (!(this instanceof w.Event)) return new w.Event(e, t);
//         e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
//     }, w.Event.prototype = {
//         constructor: w.Event,
//         isDefaultPrevented: ke,
//         isPropagationStopped: ke,
//         isImmediatePropagationStopped: ke,
//         isSimulated: !1,
//         preventDefault: function () {
//             var e = this.originalEvent;
//             this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
//         },
//         stopPropagation: function () {
//             var e = this.originalEvent;
//             this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
//         },
//         stopImmediatePropagation: function () {
//             var e = this.originalEvent;
//             this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
//         }
//     }, w.each({
//         altKey: !0,
//         bubbles: !0,
//         cancelable: !0,
//         changedTouches: !0,
//         ctrlKey: !0,
//         detail: !0,
//         eventPhase: !0,
//         metaKey: !0,
//         pageX: !0,
//         pageY: !0,
//         shiftKey: !0,
//         view: !0,
//         "char": !0,
//         charCode: !0,
//         key: !0,
//         keyCode: !0,
//         button: !0,
//         buttons: !0,
//         clientX: !0,
//         clientY: !0,
//         offsetX: !0,
//         offsetY: !0,
//         pointerId: !0,
//         pointerType: !0,
//         screenX: !0,
//         screenY: !0,
//         targetTouches: !0,
//         toElement: !0,
//         touches: !0,
//         which: function (e) {
//             var t = e.button;
//             return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
//         }
//     }, w.event.addProp), w.each({
//         mouseenter: "mouseover",
//         mouseleave: "mouseout",
//         pointerenter: "pointerover",
//         pointerleave: "pointerout"
//     }, function (e, t) {
//         w.event.special[e] = {
//             delegateType: t, bindType: t, handle: function (e) {
//                 var n, r = this, i = e.relatedTarget, o = e.handleObj;
//                 return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
//             }
//         }
//     }), w.fn.extend({
//         on: function (e, t, n, r) {
//             return De(this, e, t, n, r)
//         }, one: function (e, t, n, r) {
//             return De(this, e, t, n, r, 1)
//         }, off: function (e, t, n) {
//             var r, i;
//             if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
//             if ("object" == typeof e) {
//                 for (i in e) this.off(i, t, e[i]);
//                 return this
//             }
//             return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
//                 w.event.remove(this, e, n, t)
//             })
//         }
//     });
//     var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
//         Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i,
//         qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
//
//     function Le(e, t) {
//         return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
//     }
//
//     function He(e) {
//         return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
//     }
//
//     function Oe(e) {
//         return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
//     }
//
//     function Pe(e, t) {
//         var n, r, i, o, a, s, u, l;
//         if (1 === t.nodeType) {
//             if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
//                 delete a.handle, a.events = {};
//                 for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
//             }
//             K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
//         }
//     }
//
//     function Me(e, t) {
//         var n = t.nodeName.toLowerCase();
//         "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
//     }
//
//     function Re(e, t, n, r) {
//         t = a.apply([], t);
//         var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
//         if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
//             var o = e.eq(i);
//             v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
//         });
//         if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
//             for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
//             if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
//         }
//         return e
//     }
//
//     function Ie(e, t, n) {
//         for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
//         return e
//     }
//
//     w.extend({
//         htmlPrefilter: function (e) {
//             return e.replace(Ne, "<$1></$2>")
//         }, clone: function (e, t, n) {
//             var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
//             if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
//             if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]); else Pe(e, s);
//             return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
//         }, cleanData: function (e) {
//             for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
//                 if (t = n[J.expando]) {
//                     if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
//                     n[J.expando] = void 0
//                 }
//                 n[K.expando] && (n[K.expando] = void 0)
//             }
//         }
//     }), w.fn.extend({
//         detach: function (e) {
//             return Ie(this, e, !0)
//         }, remove: function (e) {
//             return Ie(this, e)
//         }, text: function (e) {
//             return z(this, function (e) {
//                 return void 0 === e ? w.text(this) : this.empty().each(function () {
//                     1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
//                 })
//             }, null, e, arguments.length)
//         }, append: function () {
//             return Re(this, arguments, function (e) {
//                 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
//             })
//         }, prepend: function () {
//             return Re(this, arguments, function (e) {
//                 if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
//                     var t = Le(this, e);
//                     t.insertBefore(e, t.firstChild)
//                 }
//             })
//         }, before: function () {
//             return Re(this, arguments, function (e) {
//                 this.parentNode && this.parentNode.insertBefore(e, this)
//             })
//         }, after: function () {
//             return Re(this, arguments, function (e) {
//                 this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
//             })
//         }, empty: function () {
//             for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
//             return this
//         }, clone: function (e, t) {
//             return e = null != e && e, t = null == t ? e : t, this.map(function () {
//                 return w.clone(this, e, t)
//             })
//         }, html: function (e) {
//             return z(this, function (e) {
//                 var t = this[0] || {}, n = 0, r = this.length;
//                 if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
//                 if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
//                     e = w.htmlPrefilter(e);
//                     try {
//                         for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
//                         t = 0
//                     } catch (e) {
//                     }
//                 }
//                 t && this.empty().append(e)
//             }, null, e, arguments.length)
//         }, replaceWith: function () {
//             var e = [];
//             return Re(this, arguments, function (t) {
//                 var n = this.parentNode;
//                 w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
//             }, e)
//         }
//     }), w.each({
//         appendTo: "append",
//         prependTo: "prepend",
//         insertBefore: "before",
//         insertAfter: "after",
//         replaceAll: "replaceWith"
//     }, function (e, t) {
//         w.fn[e] = function (e) {
//             for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
//             return this.pushStack(r)
//         }
//     });
//     var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function (t) {
//         var n = t.ownerDocument.defaultView;
//         return n && n.opener || (n = e), n.getComputedStyle(t)
//     }, Be = new RegExp(oe.join("|"), "i");
//     !function () {
//         function t() {
//             if (c) {
//                 l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
//                 var t = e.getComputedStyle(c);
//                 i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
//             }
//         }
//
//         function n(e) {
//             return Math.round(parseFloat(e))
//         }
//
//         var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
//         c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
//             boxSizingReliable: function () {
//                 return t(), o
//             }, pixelBoxStyles: function () {
//                 return t(), s
//             }, pixelPosition: function () {
//                 return t(), i
//             }, reliableMarginLeft: function () {
//                 return t(), u
//             }, scrollboxSize: function () {
//                 return t(), a
//             }
//         }))
//     }();
//
//     function Fe(e, t, n) {
//         var r, i, o, a, s = e.style;
//         return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
//     }
//
//     function _e(e, t) {
//         return {
//             get: function () {
//                 if (!e()) return (this.get = t).apply(this, arguments);
//                 delete this.get
//             }
//         }
//     }
//
//     var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/,
//         Ue = {position: "absolute", visibility: "hidden", display: "block"},
//         Ve = {letterSpacing: "0", fontWeight: "400"}, Ge = ["Webkit", "Moz", "ms"], Ye = r.createElement("div").style;
//
//     function Qe(e) {
//         if (e in Ye) return e;
//         var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
//         while (n--) if ((e = Ge[n] + t) in Ye) return e
//     }
//
//     function Je(e) {
//         var t = w.cssProps[e];
//         return t || (t = w.cssProps[e] = Qe(e) || e), t
//     }
//
//     function Ke(e, t, n) {
//         var r = ie.exec(t);
//         return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
//     }
//
//     function Ze(e, t, n, r, i, o) {
//         var a = "width" === t ? 1 : 0, s = 0, u = 0;
//         if (n === (r ? "border" : "content")) return 0;
//         for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
//         return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
//     }
//
//     function et(e, t, n) {
//         var r = $e(e), i = Fe(e, t, r), o = "border-box" === w.css(e, "boxSizing", !1, r), a = o;
//         if (We.test(i)) {
//             if (!n) return i;
//             i = "auto"
//         }
//         return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
//     }
//
//     w.extend({
//         cssHooks: {
//             opacity: {
//                 get: function (e, t) {
//                     if (t) {
//                         var n = Fe(e, "opacity");
//                         return "" === n ? "1" : n
//                     }
//                 }
//             }
//         },
//         cssNumber: {
//             animationIterationCount: !0,
//             columnCount: !0,
//             fillOpacity: !0,
//             flexGrow: !0,
//             flexShrink: !0,
//             fontWeight: !0,
//             lineHeight: !0,
//             opacity: !0,
//             order: !0,
//             orphans: !0,
//             widows: !0,
//             zIndex: !0,
//             zoom: !0
//         },
//         cssProps: {},
//         style: function (e, t, n, r) {
//             if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
//                 var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
//                 if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
//                 "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
//             }
//         },
//         css: function (e, t, n, r) {
//             var i, o, a, s = G(t);
//             return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
//         }
//     }), w.each(["height", "width"], function (e, t) {
//         w.cssHooks[t] = {
//             get: function (e, n, r) {
//                 if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
//                     return et(e, t, r)
//                 })
//             }, set: function (e, n, r) {
//                 var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
//                 return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
//             }
//         }
//     }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
//         if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {marginLeft: 0}, function () {
//             return e.getBoundingClientRect().left
//         })) + "px"
//     }), w.each({margin: "", padding: "", border: "Width"}, function (e, t) {
//         w.cssHooks[e + t] = {
//             expand: function (n) {
//                 for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
//                 return i
//             }
//         }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
//     }), w.fn.extend({
//         css: function (e, t) {
//             return z(this, function (e, t, n) {
//                 var r, i, o = {}, a = 0;
//                 if (Array.isArray(t)) {
//                     for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
//                     return o
//                 }
//                 return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
//             }, e, t, arguments.length > 1)
//         }
//     });
//
//     function tt(e, t, n, r, i) {
//         return new tt.prototype.init(e, t, n, r, i)
//     }
//
//     w.Tween = tt, tt.prototype = {
//         constructor: tt, init: function (e, t, n, r, i, o) {
//             this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
//         }, cur: function () {
//             var e = tt.propHooks[this.prop];
//             return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
//         }, run: function (e) {
//             var t, n = tt.propHooks[this.prop];
//             return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
//         }
//     }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
//         _default: {
//             get: function (e) {
//                 var t;
//                 return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
//             }, set: function (e) {
//                 w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
//             }
//         }
//     }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
//         set: function (e) {
//             e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
//         }
//     }, w.easing = {
//         linear: function (e) {
//             return e
//         }, swing: function (e) {
//             return .5 - Math.cos(e * Math.PI) / 2
//         }, _default: "swing"
//     }, w.fx = tt.prototype.init, w.fx.step = {};
//     var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
//
//     function at() {
//         rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
//     }
//
//     function st() {
//         return e.setTimeout(function () {
//             nt = void 0
//         }), nt = Date.now()
//     }
//
//     function ut(e, t) {
//         var n, r = 0, i = {height: e};
//         for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
//         return t && (i.opacity = i.width = e), i
//     }
//
//     function lt(e, t, n) {
//         for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
//     }
//
//     function ct(e, t, n) {
//         var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
//             g = e.nodeType && ae(e), y = J.get(e, "fxshow");
//         n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
//             a.unqueued || s()
//         }), a.unqueued++, p.always(function () {
//             p.always(function () {
//                 a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
//             })
//         }));
//         for (r in t) if (i = t[r], it.test(i)) {
//             if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
//                 if ("show" !== i || !y || void 0 === y[r]) continue;
//                 g = !0
//             }
//             d[r] = y && y[r] || w.style(e, r)
//         }
//         if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
//             f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
//                 h.display = l
//             }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
//                 h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
//             })), u = !1;
//             for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {display: l}), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
//                 g || fe([e]), J.remove(e, "fxshow");
//                 for (r in d) w.style(e, r, d[r])
//             })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
//         }
//     }
//
//     function ft(e, t) {
//         var n, r, i, o, a;
//         for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
//             o = a.expand(o), delete e[r];
//             for (n in o) n in e || (e[n] = o[n], t[n] = i)
//         } else t[r] = i
//     }
//
//     function pt(e, t, n) {
//         var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function () {
//             delete u.elem
//         }), u = function () {
//             if (i) return !1;
//             for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
//             return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
//         }, l = s.promise({
//             elem: e,
//             props: w.extend({}, t),
//             opts: w.extend(!0, {specialEasing: {}, easing: w.easing._default}, n),
//             originalProperties: t,
//             originalOptions: n,
//             startTime: nt || st(),
//             duration: n.duration,
//             tweens: [],
//             createTween: function (t, n) {
//                 var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
//                 return l.tweens.push(r), r
//             },
//             stop: function (t) {
//                 var n = 0, r = t ? l.tweens.length : 0;
//                 if (i) return this;
//                 for (i = !0; n < r; n++) l.tweens[n].run(1);
//                 return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
//             }
//         }), c = l.props;
//         for (ft(c, l.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
//         return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
//             elem: e,
//             anim: l,
//             queue: l.opts.queue
//         })), l
//     }
//
//     w.Animation = w.extend(pt, {
//         tweeners: {
//             "*": [function (e, t) {
//                 var n = this.createTween(e, t);
//                 return ue(n.elem, e, ie.exec(t), n), n
//             }]
//         }, tweener: function (e, t) {
//             g(e) ? (t = e, e = ["*"]) : e = e.match(M);
//             for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
//         }, prefilters: [ct], prefilter: function (e, t) {
//             t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
//         }
//     }), w.speed = function (e, t, n) {
//         var r = e && "object" == typeof e ? w.extend({}, e) : {
//             complete: n || !n && t || g(e) && e,
//             duration: e,
//             easing: n && t || t && !g(t) && t
//         };
//         return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
//             g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
//         }, r
//     }, w.fn.extend({
//         fadeTo: function (e, t, n, r) {
//             return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
//         }, animate: function (e, t, n, r) {
//             var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function () {
//                 var t = pt(this, w.extend({}, e), o);
//                 (i || J.get(this, "finish")) && t.stop(!0)
//             };
//             return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
//         }, stop: function (e, t, n) {
//             var r = function (e) {
//                 var t = e.stop;
//                 delete e.stop, t(n)
//             };
//             return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
//                 var t = !0, i = null != e && e + "queueHooks", o = w.timers, a = J.get(this);
//                 if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
//                 for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
//                 !t && n || w.dequeue(this, e)
//             })
//         }, finish: function (e) {
//             return !1 !== e && (e = e || "fx"), this.each(function () {
//                 var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
//                 for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
//                 for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
//                 delete n.finish
//             })
//         }
//     }), w.each(["toggle", "show", "hide"], function (e, t) {
//         var n = w.fn[t];
//         w.fn[t] = function (e, r, i) {
//             return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
//         }
//     }), w.each({
//         slideDown: ut("show"),
//         slideUp: ut("hide"),
//         slideToggle: ut("toggle"),
//         fadeIn: {opacity: "show"},
//         fadeOut: {opacity: "hide"},
//         fadeToggle: {opacity: "toggle"}
//     }, function (e, t) {
//         w.fn[e] = function (e, n, r) {
//             return this.animate(t, e, n, r)
//         }
//     }), w.timers = [], w.fx.tick = function () {
//         var e, t = 0, n = w.timers;
//         for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
//         n.length || w.fx.stop(), nt = void 0
//     }, w.fx.timer = function (e) {
//         w.timers.push(e), w.fx.start()
//     }, w.fx.interval = 13, w.fx.start = function () {
//         rt || (rt = !0, at())
//     }, w.fx.stop = function () {
//         rt = null
//     }, w.fx.speeds = {slow: 600, fast: 200, _default: 400}, w.fn.delay = function (t, n) {
//         return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
//             var i = e.setTimeout(n, t);
//             r.stop = function () {
//                 e.clearTimeout(i)
//             }
//         })
//     }, function () {
//         var e = r.createElement("input"), t = r.createElement("select").appendChild(r.createElement("option"));
//         e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
//     }();
//     var dt, ht = w.expr.attrHandle;
//     w.fn.extend({
//         attr: function (e, t) {
//             return z(this, w.attr, e, t, arguments.length > 1)
//         }, removeAttr: function (e) {
//             return this.each(function () {
//                 w.removeAttr(this, e)
//             })
//         }
//     }), w.extend({
//         attr: function (e, t, n) {
//             var r, i, o = e.nodeType;
//             if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
//         }, attrHooks: {
//             type: {
//                 set: function (e, t) {
//                     if (!h.radioValue && "radio" === t && N(e, "input")) {
//                         var n = e.value;
//                         return e.setAttribute("type", t), n && (e.value = n), t
//                     }
//                 }
//             }
//         }, removeAttr: function (e, t) {
//             var n, r = 0, i = t && t.match(M);
//             if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
//         }
//     }), dt = {
//         set: function (e, t, n) {
//             return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
//         }
//     }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
//         var n = ht[t] || w.find.attr;
//         ht[t] = function (e, t, r) {
//             var i, o, a = t.toLowerCase();
//             return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
//         }
//     });
//     var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
//     w.fn.extend({
//         prop: function (e, t) {
//             return z(this, w.prop, e, t, arguments.length > 1)
//         }, removeProp: function (e) {
//             return this.each(function () {
//                 delete this[w.propFix[e] || e]
//             })
//         }
//     }), w.extend({
//         prop: function (e, t, n) {
//             var r, i, o = e.nodeType;
//             if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
//         }, propHooks: {
//             tabIndex: {
//                 get: function (e) {
//                     var t = w.find.attr(e, "tabindex");
//                     return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
//                 }
//             }
//         }, propFix: {"for": "htmlFor", "class": "className"}
//     }), h.optSelected || (w.propHooks.selected = {
//         get: function (e) {
//             var t = e.parentNode;
//             return t && t.parentNode && t.parentNode.selectedIndex, null
//         }, set: function (e) {
//             var t = e.parentNode;
//             t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
//         }
//     }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
//         w.propFix[this.toLowerCase()] = this
//     });
//
//     function vt(e) {
//         return (e.match(M) || []).join(" ")
//     }
//
//     function mt(e) {
//         return e.getAttribute && e.getAttribute("class") || ""
//     }
//
//     function xt(e) {
//         return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
//     }
//
//     w.fn.extend({
//         addClass: function (e) {
//             var t, n, r, i, o, a, s, u = 0;
//             if (g(e)) return this.each(function (t) {
//                 w(this).addClass(e.call(this, t, mt(this)))
//             });
//             if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
//                 a = 0;
//                 while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
//                 i !== (s = vt(r)) && n.setAttribute("class", s)
//             }
//             return this
//         }, removeClass: function (e) {
//             var t, n, r, i, o, a, s, u = 0;
//             if (g(e)) return this.each(function (t) {
//                 w(this).removeClass(e.call(this, t, mt(this)))
//             });
//             if (!arguments.length) return this.attr("class", "");
//             if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
//                 a = 0;
//                 while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
//                 i !== (s = vt(r)) && n.setAttribute("class", s)
//             }
//             return this
//         }, toggleClass: function (e, t) {
//             var n = typeof e, r = "string" === n || Array.isArray(e);
//             return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
//                 w(this).toggleClass(e.call(this, n, mt(this), t), t)
//             }) : this.each(function () {
//                 var t, i, o, a;
//                 if (r) {
//                     i = 0, o = w(this), a = xt(e);
//                     while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
//                 } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
//             })
//         }, hasClass: function (e) {
//             var t, n, r = 0;
//             t = " " + e + " ";
//             while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
//             return !1
//         }
//     });
//     var bt = /\r/g;
//     w.fn.extend({
//         val: function (e) {
//             var t, n, r, i = this[0];
//             {
//                 if (arguments.length) return r = g(e), this.each(function (n) {
//                     var i;
//                     1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
//                         return null == e ? "" : e + ""
//                     })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
//                 });
//                 if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
//             }
//         }
//     }), w.extend({
//         valHooks: {
//             option: {
//                 get: function (e) {
//                     var t = w.find.attr(e, "value");
//                     return null != t ? t : vt(w.text(e))
//                 }
//             }, select: {
//                 get: function (e) {
//                     var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
//                         u = a ? o + 1 : i.length;
//                     for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
//                         if (t = w(n).val(), a) return t;
//                         s.push(t)
//                     }
//                     return s
//                 }, set: function (e, t) {
//                     var n, r, i = e.options, o = w.makeArray(t), a = i.length;
//                     while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
//                     return n || (e.selectedIndex = -1), o
//                 }
//             }
//         }
//     }), w.each(["radio", "checkbox"], function () {
//         w.valHooks[this] = {
//             set: function (e, t) {
//                 if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
//             }
//         }, h.checkOn || (w.valHooks[this].get = function (e) {
//             return null === e.getAttribute("value") ? "on" : e.value
//         })
//     }), h.focusin = "onfocusin" in e;
//     var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function (e) {
//         e.stopPropagation()
//     };
//     w.extend(w.event, {
//         trigger: function (t, n, i, o) {
//             var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t,
//                 x = f.call(t, "namespace") ? t.namespace.split(".") : [];
//             if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
//                 if (!o && !d.noBubble && !y(i)) {
//                     for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
//                     u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
//                 }
//                 a = 0;
//                 while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
//                 return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
//             }
//         }, simulate: function (e, t, n) {
//             var r = w.extend(new w.Event, n, {type: e, isSimulated: !0});
//             w.event.trigger(r, null, t)
//         }
//     }), w.fn.extend({
//         trigger: function (e, t) {
//             return this.each(function () {
//                 w.event.trigger(e, t, this)
//             })
//         }, triggerHandler: function (e, t) {
//             var n = this[0];
//             if (n) return w.event.trigger(e, t, n, !0)
//         }
//     }), h.focusin || w.each({focus: "focusin", blur: "focusout"}, function (e, t) {
//         var n = function (e) {
//             w.event.simulate(t, e.target, w.event.fix(e))
//         };
//         w.event.special[t] = {
//             setup: function () {
//                 var r = this.ownerDocument || this, i = J.access(r, t);
//                 i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
//             }, teardown: function () {
//                 var r = this.ownerDocument || this, i = J.access(r, t) - 1;
//                 i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
//             }
//         }
//     });
//     var Ct = e.location, Et = Date.now(), kt = /\?/;
//     w.parseXML = function (t) {
//         var n;
//         if (!t || "string" != typeof t) return null;
//         try {
//             n = (new e.DOMParser).parseFromString(t, "text/xml")
//         } catch (e) {
//             n = void 0
//         }
//         return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
//     };
//     var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i,
//         At = /^(?:input|select|textarea|keygen)/i;
//
//     function jt(e, t, n, r) {
//         var i;
//         if (Array.isArray(t)) w.each(t, function (t, i) {
//             n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
//         }); else if (n || "object" !== x(t)) r(e, t); else for (i in t) jt(e + "[" + i + "]", t[i], n, r)
//     }
//
//     w.param = function (e, t) {
//         var n, r = [], i = function (e, t) {
//             var n = g(t) ? t() : t;
//             r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
//         };
//         if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
//             i(this.name, this.value)
//         }); else for (n in e) jt(n, e[n], t, i);
//         return r.join("&")
//     }, w.fn.extend({
//         serialize: function () {
//             return w.param(this.serializeArray())
//         }, serializeArray: function () {
//             return this.map(function () {
//                 var e = w.prop(this, "elements");
//                 return e ? w.makeArray(e) : this
//             }).filter(function () {
//                 var e = this.type;
//                 return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
//             }).map(function (e, t) {
//                 var n = w(this).val();
//                 return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
//                     return {name: t.name, value: e.replace(Dt, "\r\n")}
//                 }) : {name: t.name, value: n.replace(Dt, "\r\n")}
//             }).get()
//         }
//     });
//     var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
//         Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {},
//         Wt = {}, $t = "*/".concat("*"), Bt = r.createElement("a");
//     Bt.href = Ct.href;
//
//     function Ft(e) {
//         return function (t, n) {
//             "string" != typeof t && (n = t, t = "*");
//             var r, i = 0, o = t.toLowerCase().match(M) || [];
//             if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
//         }
//     }
//
//     function _t(e, t, n, r) {
//         var i = {}, o = e === Wt;
//
//         function a(s) {
//             var u;
//             return i[s] = !0, w.each(e[s] || [], function (e, s) {
//                 var l = s(t, n, r);
//                 return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
//             }), u
//         }
//
//         return a(t.dataTypes[0]) || !i["*"] && a("*")
//     }
//
//     function zt(e, t) {
//         var n, r, i = w.ajaxSettings.flatOptions || {};
//         for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
//         return r && w.extend(!0, e, r), e
//     }
//
//     function Xt(e, t, n) {
//         var r, i, o, a, s = e.contents, u = e.dataTypes;
//         while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
//         if (r) for (i in s) if (s[i] && s[i].test(r)) {
//             u.unshift(i);
//             break
//         }
//         if (u[0] in n) o = u[0]; else {
//             for (i in n) {
//                 if (!u[0] || e.converters[i + " " + u[0]]) {
//                     o = i;
//                     break
//                 }
//                 a || (a = i)
//             }
//             o = o || a
//         }
//         if (o) return o !== u[0] && u.unshift(o), n[o]
//     }
//
//     function Ut(e, t, n, r) {
//         var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
//         if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
//         o = c.shift();
//         while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
//             if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
//                 !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
//                 break
//             }
//             if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
//                 t = a(t)
//             } catch (e) {
//                 return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
//             }
//         }
//         return {state: "success", data: t}
//     }
//
//     w.extend({
//         active: 0,
//         lastModified: {},
//         etag: {},
//         ajaxSettings: {
//             url: Ct.href,
//             type: "GET",
//             isLocal: Pt.test(Ct.protocol),
//             global: !0,
//             processData: !0,
//             async: !0,
//             contentType: "application/x-www-form-urlencoded; charset=UTF-8",
//             accepts: {
//                 "*": $t,
//                 text: "text/plain",
//                 html: "text/html",
//                 xml: "application/xml, text/xml",
//                 json: "application/json, text/javascript"
//             },
//             contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
//             responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
//             converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML},
//             flatOptions: {url: !0, context: !0}
//         },
//         ajaxSetup: function (e, t) {
//             return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
//         },
//         ajaxPrefilter: Ft(It),
//         ajaxTransport: Ft(Wt),
//         ajax: function (t, n) {
//             "object" == typeof t && (n = t, t = void 0), n = n || {};
//             var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h,
//                 y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(),
//                 m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
//                     readyState: 0, getResponseHeader: function (e) {
//                         var t;
//                         if (c) {
//                             if (!s) {
//                                 s = {};
//                                 while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
//                             }
//                             t = s[e.toLowerCase()]
//                         }
//                         return null == t ? null : t
//                     }, getAllResponseHeaders: function () {
//                         return c ? a : null
//                     }, setRequestHeader: function (e, t) {
//                         return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
//                     }, overrideMimeType: function (e) {
//                         return null == c && (h.mimeType = e), this
//                     }, statusCode: function (e) {
//                         var t;
//                         if (e) if (c) E.always(e[E.status]); else for (t in e) x[t] = [x[t], e[t]];
//                         return this
//                     }, abort: function (e) {
//                         var t = e || C;
//                         return i && i.abort(t), k(0, t), this
//                     }
//                 };
//             if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
//                 l = r.createElement("a");
//                 try {
//                     l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
//                 } catch (e) {
//                     h.crossDomain = !0
//                 }
//             }
//             if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
//             (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
//             for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
//             if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
//             if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
//                 if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
//                 h.async && h.timeout > 0 && (u = e.setTimeout(function () {
//                     E.abort("timeout")
//                 }, h.timeout));
//                 try {
//                     c = !1, i.send(b, k)
//                 } catch (e) {
//                     if (c) throw e;
//                     k(-1, e)
//                 }
//             } else k(-1, "No Transport");
//
//             function k(t, n, r, s) {
//                 var l, p, d, b, T, C = n;
//                 c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
//             }
//
//             return E
//         },
//         getJSON: function (e, t, n) {
//             return w.get(e, t, n, "json")
//         },
//         getScript: function (e, t) {
//             return w.get(e, void 0, t, "script")
//         }
//     }), w.each(["get", "post"], function (e, t) {
//         w[t] = function (e, n, r, i) {
//             return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
//                 url: e,
//                 type: t,
//                 dataType: i,
//                 data: n,
//                 success: r
//             }, w.isPlainObject(e) && e))
//         }
//     }), w._evalUrl = function (e) {
//         return w.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
//     }, w.fn.extend({
//         wrapAll: function (e) {
//             var t;
//             return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
//                 var e = this;
//                 while (e.firstElementChild) e = e.firstElementChild;
//                 return e
//             }).append(this)), this
//         }, wrapInner: function (e) {
//             return g(e) ? this.each(function (t) {
//                 w(this).wrapInner(e.call(this, t))
//             }) : this.each(function () {
//                 var t = w(this), n = t.contents();
//                 n.length ? n.wrapAll(e) : t.append(e)
//             })
//         }, wrap: function (e) {
//             var t = g(e);
//             return this.each(function (n) {
//                 w(this).wrapAll(t ? e.call(this, n) : e)
//             })
//         }, unwrap: function (e) {
//             return this.parent(e).not("body").each(function () {
//                 w(this).replaceWith(this.childNodes)
//             }), this
//         }
//     }), w.expr.pseudos.hidden = function (e) {
//         return !w.expr.pseudos.visible(e)
//     }, w.expr.pseudos.visible = function (e) {
//         return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
//     }, w.ajaxSettings.xhr = function () {
//         try {
//             return new e.XMLHttpRequest
//         } catch (e) {
//         }
//     };
//     var Vt = {0: 200, 1223: 204}, Gt = w.ajaxSettings.xhr();
//     h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
//         var n, r;
//         if (h.cors || Gt && !t.crossDomain) return {
//             send: function (i, o) {
//                 var a, s = t.xhr();
//                 if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
//                 t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
//                 for (a in i) s.setRequestHeader(a, i[a]);
//                 n = function (e) {
//                     return function () {
//                         n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
//                     }
//                 }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
//                     4 === s.readyState && e.setTimeout(function () {
//                         n && r()
//                     })
//                 }, n = n("abort");
//                 try {
//                     s.send(t.hasContent && t.data || null)
//                 } catch (e) {
//                     if (n) throw e
//                 }
//             }, abort: function () {
//                 n && n()
//             }
//         }
//     }), w.ajaxPrefilter(function (e) {
//         e.crossDomain && (e.contents.script = !1)
//     }), w.ajaxSetup({
//         accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
//         contents: {script: /\b(?:java|ecma)script\b/},
//         converters: {
//             "text script": function (e) {
//                 return w.globalEval(e), e
//             }
//         }
//     }), w.ajaxPrefilter("script", function (e) {
//         void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
//     }), w.ajaxTransport("script", function (e) {
//         if (e.crossDomain) {
//             var t, n;
//             return {
//                 send: function (i, o) {
//                     t = w("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
//                         t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
//                     }), r.head.appendChild(t[0])
//                 }, abort: function () {
//                     n && n()
//                 }
//             }
//         }
//     });
//     var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/;
//     w.ajaxSetup({
//         jsonp: "callback", jsonpCallback: function () {
//             var e = Yt.pop() || w.expando + "_" + Et++;
//             return this[e] = !0, e
//         }
//     }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
//         var i, o, a,
//             s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
//         if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
//             return a || w.error(i + " was not called"), a[0]
//         }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
//             a = arguments
//         }, r.always(function () {
//             void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
//         }), "script"
//     }), h.createHTMLDocument = function () {
//         var e = r.implementation.createHTMLDocument("").body;
//         return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
//     }(), w.parseHTML = function (e, t, n) {
//         if ("string" != typeof e) return [];
//         "boolean" == typeof t && (n = t, t = !1);
//         var i, o, a;
//         return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
//     }, w.fn.load = function (e, t, n) {
//         var r, i, o, a = this, s = e.indexOf(" ");
//         return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
//             url: e,
//             type: i || "GET",
//             dataType: "html",
//             data: t
//         }).done(function (e) {
//             o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
//         }).always(n && function (e, t) {
//             a.each(function () {
//                 n.apply(this, o || [e.responseText, t, e])
//             })
//         }), this
//     }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
//         w.fn[t] = function (e) {
//             return this.on(t, e)
//         }
//     }), w.expr.pseudos.animated = function (e) {
//         return w.grep(w.timers, function (t) {
//             return e === t.elem
//         }).length
//     }, w.offset = {
//         setOffset: function (e, t, n) {
//             var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {};
//             "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
//         }
//     }, w.fn.extend({
//         offset: function (e) {
//             if (arguments.length) return void 0 === e ? this : this.each(function (t) {
//                 w.offset.setOffset(this, e, t)
//             });
//             var t, n, r = this[0];
//             if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
//                 top: t.top + n.pageYOffset,
//                 left: t.left + n.pageXOffset
//             }) : {top: 0, left: 0}
//         }, position: function () {
//             if (this[0]) {
//                 var e, t, n, r = this[0], i = {top: 0, left: 0};
//                 if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect(); else {
//                     t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
//                     while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
//                     e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
//                 }
//                 return {
//                     top: t.top - i.top - w.css(r, "marginTop", !0),
//                     left: t.left - i.left - w.css(r, "marginLeft", !0)
//                 }
//             }
//         }, offsetParent: function () {
//             return this.map(function () {
//                 var e = this.offsetParent;
//                 while (e && "static" === w.css(e, "position")) e = e.offsetParent;
//                 return e || be
//             })
//         }
//     }), w.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
//         var n = "pageYOffset" === t;
//         w.fn[e] = function (r) {
//             return z(this, function (e, r, i) {
//                 var o;
//                 if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
//                 o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
//             }, e, r, arguments.length)
//         }
//     }), w.each(["top", "left"], function (e, t) {
//         w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
//             if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
//         })
//     }), w.each({Height: "height", Width: "width"}, function (e, t) {
//         w.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
//             w.fn[r] = function (i, o) {
//                 var a = arguments.length && (n || "boolean" != typeof i),
//                     s = n || (!0 === i || !0 === o ? "margin" : "border");
//                 return z(this, function (t, n, i) {
//                     var o;
//                     return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
//                 }, t, a ? i : void 0, a)
//             }
//         })
//     }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
//         w.fn[t] = function (e, n) {
//             return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
//         }
//     }), w.fn.extend({
//         hover: function (e, t) {
//             return this.mouseenter(e).mouseleave(t || e)
//         }
//     }), w.fn.extend({
//         bind: function (e, t, n) {
//             return this.on(e, null, t, n)
//         }, unbind: function (e, t) {
//             return this.off(e, null, t)
//         }, delegate: function (e, t, n, r) {
//             return this.on(t, e, n, r)
//         }, undelegate: function (e, t, n) {
//             return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
//         }
//     }), w.proxy = function (e, t) {
//         var n, r, i;
//         if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
//             return e.apply(t || this, r.concat(o.call(arguments)))
//         }, i.guid = e.guid = e.guid || w.guid++, i
//     }, w.holdReady = function (e) {
//         e ? w.readyWait++ : w.ready(!0)
//     }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
//         var t = w.type(e);
//         return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
//     }, "function" == typeof define && define.amd && define("jquery", [], function () {
//         return w
//     });
//     var Jt = e.jQuery, Kt = e.$;
//     return w.noConflict = function (t) {
//         return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
//     }, t || (e.jQuery = e.$ = w), w
// });
// ;
// /*
//  * sv4everybody.js by Jonathan Neal
//  * v 2.1.9
//  * source: https://github.com/jonathantneal/svg4everybody
//  */
// !function (a, b) {
//     "function" == typeof define && define.amd ? define([], function () {
//         return a.svg4everybody = b()
//     }) : "object" == typeof module && module.exports ? module.exports = b() : a.svg4everybody = b()
// }(this, function () {
//     function a(a, b, c) {
//         if (c) {
//             var d = document.createDocumentFragment(), e = !b.hasAttribute("viewBox") && c.getAttribute("viewBox");
//             e && b.setAttribute("viewBox", e);
//             for (var f = c.cloneNode(!0); f.childNodes.length;) d.appendChild(f.firstChild);
//             a.appendChild(d)
//         }
//     }
//
//     function b(b) {
//         b.onreadystatechange = function () {
//             if (4 === b.readyState) {
//                 var c = b._cachedDocument;
//                 c || (c = b._cachedDocument = document.implementation.createHTMLDocument(""), c.body.innerHTML = b.responseText, b._cachedTarget = {}), b._embeds.splice(0).map(function (d) {
//                     var e = b._cachedTarget[d.id];
//                     e || (e = b._cachedTarget[d.id] = c.getElementById(d.id)), a(d.parent, d.svg, e)
//                 })
//             }
//         }, b.onreadystatechange()
//     }
//
//     function c(c) {
//         function e() {
//             for (var c = 0; c < o.length;) {
//                 var h = o[c], i = h.parentNode, j = d(i), k = h.getAttribute("xlink:href") || h.getAttribute("href");
//                 if (!k && g.attributeName && (k = h.getAttribute(g.attributeName)), j && k) {
//                     if (f) if (!g.validate || g.validate(k, j, h)) {
//                         i.removeChild(h);
//                         var l = k.split("#"), q = l.shift(), r = l.join("#");
//                         if (q.length) {
//                             var s = m[q];
//                             s || (s = m[q] = new XMLHttpRequest, s.open("GET", q), s.send(), s._embeds = []), s._embeds.push({
//                                 parent: i,
//                                 svg: j,
//                                 id: r
//                             }), b(s)
//                         } else a(i, j, document.getElementById(r))
//                     } else ++c, ++p
//                 } else ++c
//             }
//             (!o.length || o.length - p > 0) && n(e, 67)
//         }
//
//         var f, g = Object(c), h = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, i = /\bAppleWebKit\/(\d+)\b/,
//             j = /\bEdge\/12\.(\d+)\b/, k = /\bEdge\/.(\d+)\b/, l = window.top !== window.self;
//         f = "polyfill" in g ? g.polyfill : h.test(navigator.userAgent) || (navigator.userAgent.match(j) || [])[1] < 10547 || (navigator.userAgent.match(i) || [])[1] < 537 || k.test(navigator.userAgent) && l;
//         var m = {}, n = window.requestAnimationFrame || setTimeout, o = document.getElementsByTagName("use"), p = 0;
//         f && e()
//     }
//
//     function d(a) {
//         for (var b = a; "svg" !== b.nodeName.toLowerCase() && (b = b.parentNode);) ;
//         return b
//     }
//
//     return c
// });
// svg4everybody();
// ;
// /*!
//  * ASP.NET SignalR JavaScript Library 2.4.2
//  * http://signalr.net/
//  *
//  * Copyright (c) .NET Foundation. All rights reserved.
//  * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
//  *
//  */
// (function (n, t, i) {
//     function w(t, i) {
//         var u, f;
//         if (n.isArray(t)) {
//             for (u = t.length - 1; u >= 0; u--) f = t[u], n.type(f) === "string" && r.transports[f] || (i.log("Invalid transport: " + f + ", removing it from the transports list."), t.splice(u, 1));
//             t.length === 0 && (i.log("No transports remain within the specified transport array."), t = null)
//         } else if (r.transports[t] || t === "auto") {
//             if (t === "auto" && r._.ieVersion <= 8) return ["longPolling"]
//         } else i.log("Invalid transport: " + t.toString() + "."), t = null;
//         return t
//     }
//
//     function b(n) {
//         return n === "http:" ? 80 : n === "https:" ? 443 : void 0
//     }
//
//     function a(n, t) {
//         return t.match(/:\d+$/) ? t : t + ":" + b(n)
//     }
//
//     function k(t, i) {
//         var u = this, r = [];
//         u.tryBuffer = function (i) {
//             return t.state === n.signalR.connectionState.connecting ? (r.push(i), !0) : !1
//         };
//         u.drain = function () {
//             if (t.state === n.signalR.connectionState.connected) while (r.length > 0) i(r.shift())
//         };
//         u.clear = function () {
//             r = []
//         }
//     }
//
//     var f = {
//         nojQuery: "jQuery was not found. Please ensure jQuery is referenced before the SignalR client JavaScript file.",
//         noTransportOnInit: "No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization.",
//         errorOnNegotiate: "Error during negotiation request.",
//         stoppedWhileLoading: "The connection was stopped during page load.",
//         stoppedWhileNegotiating: "The connection was stopped during the negotiate request.",
//         errorParsingNegotiateResponse: "Error parsing negotiate response.",
//         errorRedirectionExceedsLimit: "Negotiate redirection limit exceeded.",
//         errorDuringStartRequest: "Error during start request. Stopping the connection.",
//         errorFromServer: "Error message received from the server: '{0}'.",
//         stoppedDuringStartRequest: "The connection was stopped during the start request.",
//         errorParsingStartResponse: "Error parsing start response: '{0}'. Stopping the connection.",
//         invalidStartResponse: "Invalid start response: '{0}'. Stopping the connection.",
//         protocolIncompatible: "You are using a version of the client that isn't compatible with the server. Client version {0}, server version {1}.",
//         aspnetCoreSignalrServer: "Detected a connection attempt to an ASP.NET Core SignalR Server. This client only supports connecting to an ASP.NET SignalR Server. See https://aka.ms/signalr-core-differences for details.",
//         sendFailed: "Send failed.",
//         parseFailed: "Failed at parsing response: {0}",
//         longPollFailed: "Long polling request failed.",
//         eventSourceFailedToConnect: "EventSource failed to connect.",
//         eventSourceError: "Error raised by EventSource",
//         webSocketClosed: "WebSocket closed.",
//         pingServerFailedInvalidResponse: "Invalid ping response when pinging server: '{0}'.",
//         pingServerFailed: "Failed to ping server.",
//         pingServerFailedStatusCode: "Failed to ping server.  Server responded with status code {0}, stopping the connection.",
//         pingServerFailedParse: "Failed to parse ping server response, stopping the connection.",
//         noConnectionTransport: "Connection is in an invalid state, there is no transport active.",
//         webSocketsInvalidState: "The Web Socket transport is in an invalid state, transitioning into reconnecting.",
//         reconnectTimeout: "Couldn't reconnect within the configured timeout of {0} ms, disconnecting.",
//         reconnectWindowTimeout: "The client has been inactive since {0} and it has exceeded the inactivity timeout of {1} ms. Stopping the connection.",
//         jsonpNotSupportedWithAccessToken: "The JSONP protocol does not support connections that require a Bearer token to connect, such as the Azure SignalR Service."
//     };
//     if (typeof n != "function") throw new Error(f.nojQuery);
//     var r, h, o = t.document.readyState === "complete", e = n(t), c = "__Negotiate Aborted__", u = {
//         onStart: "onStart",
//         onStarting: "onStarting",
//         onReceived: "onReceived",
//         onError: "onError",
//         onConnectionSlow: "onConnectionSlow",
//         onReconnecting: "onReconnecting",
//         onReconnect: "onReconnect",
//         onStateChanged: "onStateChanged",
//         onDisconnect: "onDisconnect"
//     }, v = function (n, i) {
//         if (i !== !1) {
//             var r;
//             typeof t.console != "undefined" && (r = "[" + (new Date).toTimeString() + "] SignalR: " + n, t.console.debug ? t.console.debug(r) : t.console.log && t.console.log(r))
//         }
//     }, s = function (t, i, r) {
//         return i === t.state ? (t.state = r, n(t).triggerHandler(u.onStateChanged, [{
//             oldState: i,
//             newState: r
//         }]), !0) : !1
//     }, y = function (n) {
//         return n.state === r.connectionState.disconnected
//     }, l = function (n) {
//         return n._.keepAliveData.activated && n.transport.supportsKeepAlive(n)
//     }, p = function (i) {
//         var f, e;
//         i._.configuredStopReconnectingTimeout || (e = function (t) {
//             var i = r._.format(r.resources.reconnectTimeout, t.disconnectTimeout);
//             t.log(i);
//             n(t).triggerHandler(u.onError, [r._.error(i, "TimeoutException")]);
//             t.stop(!1, !1)
//         }, i.reconnecting(function () {
//             var n = this;
//             n.state === r.connectionState.reconnecting && (f = t.setTimeout(function () {
//                 e(n)
//             }, n.disconnectTimeout))
//         }), i.stateChanged(function (n) {
//             n.oldState === r.connectionState.reconnecting && t.clearTimeout(f)
//         }), i._.configuredStopReconnectingTimeout = !0)
//     };
//     if (r = function (n, t, i) {
//         return new r.fn.init(n, t, i)
//     }, r._ = {
//         defaultContentType: "application/x-www-form-urlencoded; charset=UTF-8", ieVersion: function () {
//             var i, n;
//             return t.navigator.appName === "Microsoft Internet Explorer" && (n = /MSIE ([0-9]+\.[0-9]+)/.exec(t.navigator.userAgent), n && (i = t.parseFloat(n[1]))), i
//         }(), error: function (n, t, i) {
//             var r = new Error(n);
//             return r.source = t, typeof i != "undefined" && (r.context = i), r
//         }, transportError: function (n, t, r, u) {
//             var f = this.error(n, r, u);
//             return f.transport = t ? t.name : i, f
//         }, format: function () {
//             for (var t = arguments[0], n = 0; n < arguments.length - 1; n++) t = t.replace("{" + n + "}", arguments[n + 1]);
//             return t
//         }, firefoxMajorVersion: function (n) {
//             var t = n.match(/Firefox\/(\d+)/);
//             return !t || !t.length || t.length < 2 ? 0 : parseInt(t[1], 10)
//         }, configurePingInterval: function (i) {
//             var f = i._.config, e = function (t) {
//                 n(i).triggerHandler(u.onError, [t])
//             };
//             f && !i._.pingIntervalId && f.pingInterval && (i._.pingIntervalId = t.setInterval(function () {
//                 r.transports._logic.pingServer(i).fail(e)
//             }, f.pingInterval))
//         }
//     }, r.events = u, r.resources = f, r.ajaxDefaults = {
//         processData: !0,
//         timeout: null,
//         async: !0,
//         global: !1,
//         cache: !1
//     }, r.changeState = s, r.isDisconnecting = y, r.connectionState = {
//         connecting: 0,
//         connected: 1,
//         reconnecting: 2,
//         disconnected: 4
//     }, r.hub = {
//         start: function () {
//             throw new Error("SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/js'><\/script>.");
//         }
//     }, typeof e.on == "function") e.on("load", function () {
//         o = !0
//     }); else e.load(function () {
//         o = !0
//     });
//     r.fn = r.prototype = {
//         init: function (t, i, r) {
//             var f = n(this);
//             this.url = t;
//             this.qs = i;
//             this.lastError = null;
//             this._ = {
//                 keepAliveData: {},
//                 connectingMessageBuffer: new k(this, function (n) {
//                     f.triggerHandler(u.onReceived, [n])
//                 }),
//                 lastMessageAt: (new Date).getTime(),
//                 lastActiveAt: (new Date).getTime(),
//                 beatInterval: 5e3,
//                 beatHandle: null,
//                 totalTransportConnectTimeout: 0,
//                 redirectQs: null
//             };
//             typeof r == "boolean" && (this.logging = r)
//         },
//         _parseResponse: function (n) {
//             var t = this;
//             return n ? typeof n == "string" ? t.json.parse(n) : n : n
//         },
//         _originalJson: t.JSON,
//         json: t.JSON,
//         isCrossDomain: function (i, r) {
//             var u;
//             return (i = n.trim(i), r = r || t.location, i.indexOf("http") !== 0) ? !1 : (u = t.document.createElement("a"), u.href = i, u.protocol + a(u.protocol, u.host) !== r.protocol + a(r.protocol, r.host))
//         },
//         ajaxDataType: "text",
//         contentType: "application/json; charset=UTF-8",
//         logging: !1,
//         state: r.connectionState.disconnected,
//         clientProtocol: "2.1",
//         supportedProtocols: ["1.5", "2.0", "2.1"],
//         negotiateRedirectSupportedProtocols: ["2.0", "2.1"],
//         reconnectDelay: 2e3,
//         transportConnectTimeout: 0,
//         disconnectTimeout: 3e4,
//         reconnectWindow: 3e4,
//         keepAliveWarnAt: 2 / 3,
//         start: function (i, h) {
//             var a = this, v = {pingInterval: 3e5, waitForPageLoad: !0, transport: "auto", jsonp: !1}, g,
//                 y = a._deferral || n.Deferred(), b = t.document.createElement("a"), nt = function (i, u) {
//                     i.url === u && i.baseUrl || (i.url = u, b.href = i.url, b.protocol && b.protocol !== ":" ? (i.protocol = b.protocol, i.host = b.host) : (i.protocol = t.document.location.protocol, i.host = b.host || t.document.location.host), i.baseUrl = i.protocol + "//" + i.host, i.wsProtocol = i.protocol === "https:" ? "wss://" : "ws://", i.url.indexOf("//") === 0 && (i.url = t.location.protocol + i.url, i.log("Protocol relative URL detected, normalizing it to '" + i.url + "'.")), i.isCrossDomain(i.url) && (i.log("Auto detected cross domain url."), v.transport === "auto" && (v.transport = ["webSockets", "serverSentEvents", "longPolling"]), typeof i.withCredentials == "undefined" && (i.withCredentials = !0), n.support.cors || (i.ajaxDataType = "jsonp", i.log("Using jsonp because this browser doesn't support CORS.")), i.contentType = r._.defaultContentType))
//                 }, d, k;
//             if (a.lastError = null, a._deferral = y, !a.json) throw new Error("SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.");
//             if (n.type(i) === "function" ? h = i : n.type(i) === "object" && (n.extend(v, i), n.type(v.callback) === "function" && (h = v.callback)), v.transport = w(v.transport, a), !v.transport) throw new Error("SignalR: Invalid transport(s) specified, aborting start.");
//             return (a._.config = v, !o && v.waitForPageLoad === !0) ? (a._.deferredStartHandler = function () {
//                 a.start(i, h)
//             }, e.bind("load", a._.deferredStartHandler), y.promise()) : a.state === r.connectionState.connecting ? y.promise() : s(a, r.connectionState.disconnected, r.connectionState.connecting) === !1 ? (y.resolve(a), y.promise()) : (p(a), v.transport === "auto" && v.jsonp === !0 && (v.transport = "longPolling"), a.withCredentials = v.withCredentials, a._originalUrl = a.url, a.ajaxDataType = v.jsonp ? "jsonp" : "text", nt(a, a.url), n(a).bind(u.onStart, function () {
//                 n.type(h) === "function" && h.call(a);
//                 y.resolve(a)
//             }), a._.initHandler = r.transports._logic.initHandler(a), g = function (i, o) {
//                 var c = r._.error(f.noTransportOnInit);
//                 if (o = o || 0, o >= i.length) {
//                     o === 0 ? a.log("No transports supported by the server were selected.") : o === 1 ? a.log("No fallback transports were selected.") : a.log("Fallback transports exhausted.");
//                     n(a).triggerHandler(u.onError, [c]);
//                     y.reject(c);
//                     a.stop();
//                     return
//                 }
//                 if (a.state !== r.connectionState.disconnected) {
//                     var p = i[o], h = r.transports[p], v = function () {
//                         g(i, o + 1)
//                     };
//                     a.transport = h;
//                     try {
//                         a._.initHandler.start(h, function () {
//                             var f = r._.firefoxMajorVersion(t.navigator.userAgent) >= 11, i = !0;
//                             a.log("The start request succeeded. Transitioning to the connected state.");
//                             l(a) && r.transports._logic.monitorKeepAlive(a);
//                             a._.keepAliveData.activated && r.transports._logic.startHeartbeat(a);
//                             r._.configurePingInterval(a);
//                             s(a, r.connectionState.connecting, r.connectionState.connected) || a.log("WARNING! The connection was not in the connecting state.");
//                             a._.connectingMessageBuffer.drain();
//                             n(a).triggerHandler(u.onStart);
//                             e.bind("unload", function () {
//                                 a.log("Window unloading, stopping the connection.");
//                                 a.stop(i)
//                             });
//                             f && e.bind("beforeunload", function () {
//                                 t.setTimeout(function () {
//                                     a.stop(i)
//                                 }, 0)
//                             })
//                         }, v)
//                     } catch (w) {
//                         a.log(h.name + " transport threw '" + w.message + "' when attempting to start.");
//                         v()
//                     }
//                 }
//             }, d = a.url + "/negotiate", k = function (t, i) {
//                 var e = r._.error(f.errorOnNegotiate, t, i._.negotiateRequest);
//                 n(i).triggerHandler(u.onError, e);
//                 y.reject(e);
//                 i.stop()
//             }, n(a).triggerHandler(u.onStarting), d = r.transports._logic.prepareQueryString(a, d), a.log("Negotiating with '" + d + "'."), a._.negotiateRequest = function () {
//                 var t, h = 0, w = 100, i, e, o = [], s = [], l = function (n, t) {
//                     var u = r.transports._logic.prepareQueryString(n, n.url + "/negotiate"), i;
//                     return n.log("Negotiating with '" + u + "'."), i = {
//                         url: u, error: function (t, i) {
//                             i !== c ? k(t, n) : y.reject(r._.error(f.stoppedWhileNegotiating, null, n._.negotiateRequest))
//                         }, success: t
//                     }, n.accessToken && (i.headers = {Authorization: "Bearer " + n.accessToken}), r.transports._logic.ajax(n, i)
//                 }, p = function (c) {
//                     try {
//                         t = a._parseResponse(c)
//                     } catch (d) {
//                         k(r._.error(f.errorParsingNegotiateResponse, d), a);
//                         return
//                     }
//                     if (t.availableTransports) {
//                         e = r._.error(f.aspnetCoreSignalrServer);
//                         n(a).triggerHandler(u.onError, [e]);
//                         y.reject(e);
//                         return
//                     }
//                     if (!t.ProtocolVersion || a.supportedProtocols.indexOf(t.ProtocolVersion) === -1) {
//                         e = r._.error(r._.format(f.protocolIncompatible, a.clientProtocol, t.ProtocolVersion));
//                         n(a).triggerHandler(u.onError, [e]);
//                         y.reject(e);
//                         return
//                     }
//                     if (a.negotiateRedirectSupportedProtocols.indexOf(t.ProtocolVersion) !== -1) {
//                         if (t.Error) {
//                             e = r._.error(r._.format(f.errorFromServer, t.Error));
//                             n(a).triggerHandler(u.onError, [e]);
//                             y.reject(e);
//                             return
//                         }
//                         if (t.RedirectUrl) {
//                             if (h === w) {
//                                 k(r._.error(f.errorRedirectionExceedsLimit), a);
//                                 return
//                             }
//                             v.transport === "auto" && (v.transport = ["webSockets", "serverSentEvents", "longPolling"]);
//                             a.log("Received redirect to: " + t.RedirectUrl);
//                             a.accessToken = t.AccessToken;
//                             var b = t.RedirectUrl.split("?", 2);
//                             if (nt(a, b[0]), a._.redirectQs = b.length === 2 ? b[1] : null, a.ajaxDataType === "jsonp" && a.accessToken) {
//                                 k(r._.error(f.jsonpNotSupportedWithAccessToken), a);
//                                 return
//                             }
//                             h++;
//                             l(a, p);
//                             return
//                         }
//                     }
//                     i = a._.keepAliveData;
//                     a.appRelativeUrl = t.Url;
//                     a.id = t.ConnectionId;
//                     a.token = t.ConnectionToken;
//                     a.webSocketServerUrl = t.WebSocketServerUrl;
//                     a._.pollTimeout = t.ConnectionTimeout * 1e3 + 1e4;
//                     a.disconnectTimeout = t.DisconnectTimeout * 1e3;
//                     a._.totalTransportConnectTimeout = a.transportConnectTimeout + t.TransportConnectTimeout * 1e3;
//                     t.KeepAliveTimeout ? (i.activated = !0, i.timeout = t.KeepAliveTimeout * 1e3, i.timeoutWarning = i.timeout * a.keepAliveWarnAt, a._.beatInterval = (i.timeout - i.timeoutWarning) / 3) : i.activated = !1;
//                     a.reconnectWindow = a.disconnectTimeout + (i.timeout || 0);
//                     n.each(r.transports, function (n) {
//                         if (n.indexOf("_") === 0 || n === "webSockets" && !t.TryWebSockets) return !0;
//                         s.push(n)
//                     });
//                     n.isArray(v.transport) ? n.each(v.transport, function (t, i) {
//                         n.inArray(i, s) >= 0 && o.push(i)
//                     }) : v.transport === "auto" ? o = s : n.inArray(v.transport, s) >= 0 && o.push(v.transport);
//                     g(o)
//                 };
//                 return l(a, p)
//             }(), y.promise())
//         },
//         starting: function (t) {
//             var i = this;
//             return n(i).bind(u.onStarting, function () {
//                 t.call(i)
//             }), i
//         },
//         send: function (n) {
//             var t = this;
//             if (t.state === r.connectionState.disconnected) throw new Error("SignalR: Connection must be started before data can be sent. Call .start() before .send()");
//             if (t.state === r.connectionState.connecting) throw new Error("SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started.");
//             return t.transport.send(t, n), t
//         },
//         received: function (t) {
//             var i = this;
//             return n(i).bind(u.onReceived, function (n, r) {
//                 t.call(i, r)
//             }), i
//         },
//         stateChanged: function (t) {
//             var i = this;
//             return n(i).bind(u.onStateChanged, function (n, r) {
//                 t.call(i, r)
//             }), i
//         },
//         error: function (t) {
//             var i = this;
//             return n(i).bind(u.onError, function (n, r, u) {
//                 i.lastError = r;
//                 t.call(i, r, u)
//             }), i
//         },
//         disconnected: function (t) {
//             var i = this;
//             return n(i).bind(u.onDisconnect, function () {
//                 t.call(i)
//             }), i
//         },
//         connectionSlow: function (t) {
//             var i = this;
//             return n(i).bind(u.onConnectionSlow, function () {
//                 t.call(i)
//             }), i
//         },
//         reconnecting: function (t) {
//             var i = this;
//             return n(i).bind(u.onReconnecting, function () {
//                 t.call(i)
//             }), i
//         },
//         reconnected: function (t) {
//             var i = this;
//             return n(i).bind(u.onReconnect, function () {
//                 t.call(i)
//             }), i
//         },
//         stop: function (i, h) {
//             var a = this, v = a._deferral;
//             if (a._.deferredStartHandler && e.unbind("load", a._.deferredStartHandler), delete a._.config, delete a._.deferredStartHandler, !o && (!a._.config || a._.config.waitForPageLoad === !0)) {
//                 a.log("Stopping connection prior to negotiate.");
//                 v && v.reject(r._.error(f.stoppedWhileLoading));
//                 return
//             }
//             if (a.state !== r.connectionState.disconnected) return a.log("Stopping connection."), t.clearTimeout(a._.beatHandle), t.clearInterval(a._.pingIntervalId), a.transport && (a.transport.stop(a), h !== !1 && a.transport.abort(a, i), l(a) && r.transports._logic.stopMonitoringKeepAlive(a), a.transport = null), a._.negotiateRequest && (a._.negotiateRequest.abort(c), delete a._.negotiateRequest), a._.initHandler && a._.initHandler.stop(), delete a._deferral, delete a.messageId, delete a.groupsToken, delete a.id, delete a._.pingIntervalId, delete a._.lastMessageAt, delete a._.lastActiveAt, a._.connectingMessageBuffer.clear(), n(a).unbind(u.onStart), delete a.accessToken, delete a.protocol, delete a.host, delete a.baseUrl, delete a.wsProtocol, delete a.contentType, a.url = a._originalUrl, a._.redirectQs = null, s(a, a.state, r.connectionState.disconnected), n(a).triggerHandler(u.onDisconnect), a
//         },
//         log: function (n) {
//             v(n, this.logging)
//         }
//     };
//     r.fn.init.prototype = r.fn;
//     r.noConflict = function () {
//         return n.connection === r && (n.connection = h), r
//     };
//     n.connection && (h = n.connection);
//     n.connection = n.signalR = r
// })(window.jQuery, window), function (n, t, i) {
//     function s(n) {
//         n._.keepAliveData.monitoring && l(n);
//         u.markActive(n) && (n._.beatHandle = t.setTimeout(function () {
//             s(n)
//         }, n._.beatInterval))
//     }
//
//     function l(t) {
//         var i = t._.keepAliveData, u;
//         t.state === r.connectionState.connected && (u = (new Date).getTime() - t._.lastMessageAt, u >= i.timeout ? (t.log("Keep alive timed out.  Notifying transport that connection has been lost."), t.transport.lostConnection(t)) : u >= i.timeoutWarning ? i.userNotified || (t.log("Keep alive has been missed, connection may be dead/slow."), n(t).triggerHandler(f.onConnectionSlow), i.userNotified = !0) : i.userNotified = !1)
//     }
//
//     function e(n, t) {
//         var i = n.url + t;
//         return n.transport && (i += "?transport=" + n.transport.name), u.prepareQueryString(n, i)
//     }
//
//     function h(n) {
//         this.connection = n;
//         this.startRequested = !1;
//         this.startCompleted = !1;
//         this.connectionStopped = !1
//     }
//
//     var r = n.signalR, f = n.signalR.events, c = n.signalR.changeState, o = "__Start Aborted__", u;
//     r.transports = {};
//     h.prototype = {
//         start: function (n, r, u) {
//             var f = this, e = f.connection, o = !1;
//             if (f.startRequested || f.connectionStopped) {
//                 e.log("WARNING! " + n.name + " transport cannot be started. Initialization ongoing or completed.");
//                 return
//             }
//             e.log(n.name + " transport starting.");
//             n.start(e, function () {
//                 o || f.initReceived(n, r)
//             }, function (t) {
//                 return o || (o = !0, f.transportFailed(n, t, u)), !f.startCompleted || f.connectionStopped
//             });
//             f.transportTimeoutHandle = t.setTimeout(function () {
//                 o || (o = !0, e.log(n.name + " transport timed out when trying to connect."), f.transportFailed(n, i, u))
//             }, e._.totalTransportConnectTimeout)
//         }, stop: function () {
//             this.connectionStopped = !0;
//             t.clearTimeout(this.transportTimeoutHandle);
//             r.transports._logic.tryAbortStartRequest(this.connection)
//         }, initReceived: function (n, i) {
//             var u = this, f = u.connection;
//             if (u.startRequested) {
//                 f.log("WARNING! The client received multiple init messages.");
//                 return
//             }
//             u.connectionStopped || (u.startRequested = !0, t.clearTimeout(u.transportTimeoutHandle), f.log(n.name + " transport connected. Initiating start request."), r.transports._logic.ajaxStart(f, function () {
//                 u.startCompleted = !0;
//                 i()
//             }))
//         }, transportFailed: function (i, u, e) {
//             var o = this.connection, h = o._deferral, s;
//             this.connectionStopped || (t.clearTimeout(this.transportTimeoutHandle), this.startRequested ? this.startCompleted || (s = r._.error(r.resources.errorDuringStartRequest, u), o.log(i.name + " transport failed during the start request. Stopping the connection."), n(o).triggerHandler(f.onError, [s]), h && h.reject(s), o.stop()) : (i.stop(o), o.log(i.name + " transport failed to connect. Attempting to fall back."), e()))
//         }
//     };
//     u = r.transports._logic = {
//         ajax: function (t, i) {
//             return n.ajax(n.extend(!0, {}, n.signalR.ajaxDefaults, {
//                 type: "GET",
//                 data: {},
//                 xhrFields: {withCredentials: t.withCredentials},
//                 contentType: t.contentType,
//                 dataType: t.ajaxDataType
//             }, i))
//         }, pingServer: function (t) {
//             var e, f, i = n.Deferred();
//             return t.transport ? (e = t.url + "/ping", e = u.addQs(e, t.qs), f = u.ajax(t, {
//                 url: e,
//                 headers: t.accessToken ? {Authorization: "Bearer " + t.accessToken} : {},
//                 success: function (n) {
//                     var u;
//                     try {
//                         u = t._parseResponse(n)
//                     } catch (e) {
//                         i.reject(r._.transportError(r.resources.pingServerFailedParse, t.transport, e, f));
//                         t.stop();
//                         return
//                     }
//                     u.Response === "pong" ? i.resolve() : i.reject(r._.transportError(r._.format(r.resources.pingServerFailedInvalidResponse, n), t.transport, null, f))
//                 },
//                 error: function (n) {
//                     n.status === 401 || n.status === 403 ? (i.reject(r._.transportError(r._.format(r.resources.pingServerFailedStatusCode, n.status), t.transport, n, f)), t.stop()) : i.reject(r._.transportError(r.resources.pingServerFailed, t.transport, n, f))
//                 }
//             })) : i.reject(r._.transportError(r.resources.noConnectionTransport, t.transport)), i.promise()
//         }, prepareQueryString: function (n, i) {
//             var r;
//             return r = u.addQs(i, "clientProtocol=" + n.clientProtocol), r = typeof n._.redirectQs == "string" ? u.addQs(r, n._.redirectQs) : u.addQs(r, n.qs), n.token && (r += "&connectionToken=" + t.encodeURIComponent(n.token)), n.data && (r += "&connectionData=" + t.encodeURIComponent(n.data)), r
//         }, addQs: function (t, i) {
//             var r = t.indexOf("?") !== -1 ? "&" : "?", u;
//             if (!i) return t;
//             if (typeof i == "object") return t + r + n.param(i);
//             if (typeof i == "string") return u = i.charAt(0), (u === "?" || u === "&") && (r = ""), t + r + i;
//             throw new Error("Query string property must be either a string or object.");
//         }, getUrl: function (n, i, r, f, e) {
//             var h = i === "webSockets" ? "" : n.baseUrl, o = h + n.appRelativeUrl, s = "transport=" + i;
//             return !e && n.groupsToken && (s += "&groupsToken=" + t.encodeURIComponent(n.groupsToken)), r ? (o += f ? "/poll" : "/reconnect", !e && n.messageId && (s += "&messageId=" + t.encodeURIComponent(n.messageId))) : o += "/connect", o += "?" + s, o = u.prepareQueryString(n, o), n.transport && n.accessToken && (n.transport.name === "serverSentEvents" || n.transport.name === "webSockets") && (o += "&access_token=" + t.encodeURIComponent(n.accessToken)), e || (o += "&tid=" + Math.floor(Math.random() * 11)), o
//         }, maximizePersistentResponse: function (n) {
//             return {
//                 MessageId: n.C,
//                 Messages: n.M,
//                 Initialized: typeof n.S != "undefined" ? !0 : !1,
//                 ShouldReconnect: typeof n.T != "undefined" ? !0 : !1,
//                 LongPollDelay: n.L,
//                 GroupsToken: n.G,
//                 Error: n.E
//             }
//         }, updateGroups: function (n, t) {
//             t && (n.groupsToken = t)
//         }, stringifySend: function (n, t) {
//             return typeof t == "string" || typeof t == "undefined" || t === null ? t : n.json.stringify(t)
//         }, ajaxSend: function (t, i) {
//             var h = u.stringifySend(t, i), c = e(t, "/send"), o, s = function (t, u) {
//                 n(u).triggerHandler(f.onError, [r._.transportError(r.resources.sendFailed, u.transport, t, o), i])
//             };
//             return o = u.ajax(t, {
//                 url: c,
//                 type: t.ajaxDataType === "jsonp" ? "GET" : "POST",
//                 contentType: r._.defaultContentType,
//                 headers: t.accessToken ? {Authorization: "Bearer " + t.accessToken} : {},
//                 data: {data: h},
//                 success: function (n) {
//                     var i;
//                     if (n) {
//                         try {
//                             i = t._parseResponse(n)
//                         } catch (r) {
//                             s(r, t);
//                             t.stop();
//                             return
//                         }
//                         u.triggerReceived(t, i)
//                     }
//                 },
//                 error: function (n, i) {
//                     i !== "abort" && i !== "parsererror" && s(n, t)
//                 }
//             })
//         }, ajaxAbort: function (n, i) {
//             if (typeof n.transport != "undefined") {
//                 i = typeof i == "undefined" ? !0 : i;
//                 var r = e(n, "/abort"), f = n.accessToken ? {Authorization: "Bearer " + n.accessToken} : {};
//                 t.fetch ? t.fetch(r, {method: "POST", keepalive: !0, headers: f}) : u.ajax(n, {
//                     url: r,
//                     async: i,
//                     timeout: 1e3,
//                     type: "POST",
//                     headers: f,
//                     dataType: "text"
//                 });
//                 n.log("Fired ajax abort async = " + i + ".")
//             }
//         }, ajaxStart: function (t, i) {
//             var h = function (n) {
//                 var i = t._deferral;
//                 i && i.reject(n)
//             }, s = function (i) {
//                 t.log("The start request failed. Stopping the connection.");
//                 n(t).triggerHandler(f.onError, [i]);
//                 h(i);
//                 t.stop()
//             };
//             t._.startRequest = u.ajax(t, {
//                 url: e(t, "/start"),
//                 headers: t.accessToken ? {Authorization: "Bearer " + t.accessToken} : {},
//                 success: function (n, u, f) {
//                     var e;
//                     try {
//                         e = t._parseResponse(n)
//                     } catch (o) {
//                         s(r._.error(r._.format(r.resources.errorParsingStartResponse, n), o, f));
//                         return
//                     }
//                     e.Response === "started" ? i() : s(r._.error(r._.format(r.resources.invalidStartResponse, n), null, f))
//                 },
//                 error: function (n, i, u) {
//                     i !== o ? s(r._.error(r.resources.errorDuringStartRequest, u, n)) : (t.log("The start request aborted because connection.stop() was called."), h(r._.error(r.resources.stoppedDuringStartRequest, null, n)))
//                 }
//             })
//         }, tryAbortStartRequest: function (n) {
//             n._.startRequest && (n._.startRequest.abort(o), delete n._.startRequest)
//         }, tryInitialize: function (n, t, i) {
//             t.Initialized && i ? i() : t.Initialized && n.log("WARNING! The client received an init message after reconnecting.")
//         }, triggerReceived: function (t, i) {
//             t._.connectingMessageBuffer.tryBuffer(i) || n(t).triggerHandler(f.onReceived, [i])
//         }, processMessages: function (t, i, f) {
//             var e;
//             if (i && typeof i.I != "undefined") {
//                 u.triggerReceived(t, i);
//                 return
//             }
//             if (u.markLastMessage(t), i) {
//                 if (e = u.maximizePersistentResponse(i), e.Error) {
//                     t.log("Received an error message from the server: " + i.E);
//                     n(t).triggerHandler(r.events.onError, [r._.error(i.E, "ServerError")]);
//                     t.stop(!1, !1);
//                     return
//                 }
//                 u.updateGroups(t, e.GroupsToken);
//                 e.MessageId && (t.messageId = e.MessageId);
//                 e.Messages && (n.each(e.Messages, function (n, i) {
//                     u.triggerReceived(t, i)
//                 }), u.tryInitialize(t, e, f))
//             }
//         }, monitorKeepAlive: function (t) {
//             var i = t._.keepAliveData;
//             i.monitoring ? t.log("Tried to monitor keep alive but it's already being monitored.") : (i.monitoring = !0, u.markLastMessage(t), t._.keepAliveData.reconnectKeepAliveUpdate = function () {
//                 u.markLastMessage(t)
//             }, n(t).bind(f.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t.log("Now monitoring keep alive with a warning timeout of " + i.timeoutWarning + ", keep alive timeout of " + i.timeout + " and disconnecting timeout of " + t.disconnectTimeout))
//         }, stopMonitoringKeepAlive: function (t) {
//             var i = t._.keepAliveData;
//             i.monitoring && (i.monitoring = !1, n(t).unbind(f.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t._.keepAliveData = {}, t.log("Stopping the monitoring of the keep alive."))
//         }, startHeartbeat: function (n) {
//             n._.lastActiveAt = (new Date).getTime();
//             s(n)
//         }, markLastMessage: function (n) {
//             n._.lastMessageAt = (new Date).getTime();
//             n._.lastActiveAt = n._.lastMessageAt
//         }, markActive: function (n) {
//             return u.verifyLastActive(n) ? (n._.lastActiveAt = (new Date).getTime(), !0) : !1
//         }, isConnectedOrReconnecting: function (n) {
//             return n.state === r.connectionState.connected || n.state === r.connectionState.reconnecting
//         }, ensureReconnectingState: function (t) {
//             return c(t, r.connectionState.connected, r.connectionState.reconnecting) === !0 && n(t).triggerHandler(f.onReconnecting), t.state === r.connectionState.reconnecting
//         }, clearReconnectTimeout: function (n) {
//             n && n._.reconnectTimeout && (t.clearTimeout(n._.reconnectTimeout), delete n._.reconnectTimeout)
//         }, verifyLastActive: function (t) {
//             if (!t._.keepAliveData.activated || (new Date).getTime() - t._.lastActiveAt < t.reconnectWindow) return !0;
//             var i = r._.format(r.resources.reconnectWindowTimeout, new Date(t._.lastActiveAt), t.reconnectWindow);
//             return t.log(i), n(t).triggerHandler(f.onError, [r._.error(i, "TimeoutException")]), t.stop(!1, !1), !1
//         }, reconnect: function (n, i) {
//             var f = r.transports[i];
//             if (u.isConnectedOrReconnecting(n) && !n._.reconnectTimeout) {
//                 if (!u.verifyLastActive(n)) return;
//                 n._.reconnectTimeout = t.setTimeout(function () {
//                     u.verifyLastActive(n) && (f.stop(n), u.ensureReconnectingState(n) && (n.log(i + " reconnecting."), f.start(n)))
//                 }, n.reconnectDelay)
//             }
//         }, handleParseFailure: function (t, i, u, e, o) {
//             var s = r._.transportError(r._.format(r.resources.parseFailed, i), t.transport, u, o);
//             e && e(s) ? t.log("Failed to parse server response while attempting to connect.") : (n(t).triggerHandler(f.onError, [s]), t.stop())
//         }, initHandler: function (n) {
//             return new h(n)
//         }, foreverFrame: {count: 0, connections: {}}
//     }
// }(window.jQuery, window), function (n, t) {
//     var i = n.signalR, u = n.signalR.events, f = n.signalR.changeState, r = i.transports._logic;
//     i.transports.webSockets = {
//         name: "webSockets", supportsKeepAlive: function () {
//             return !0
//         }, send: function (t, f) {
//             var e = r.stringifySend(t, f);
//             try {
//                 t.socket.send(e)
//             } catch (o) {
//                 n(t).triggerHandler(u.onError, [i._.transportError(i.resources.webSocketsInvalidState, t.transport, o, t.socket), f])
//             }
//         }, start: function (e, o, s) {
//             var h, c = !1, l = this, a = !o, v = n(e);
//             if (!t.WebSocket) {
//                 s();
//                 return
//             }
//             e.socket || (h = e.webSocketServerUrl ? e.webSocketServerUrl : e.wsProtocol + e.host, h += r.getUrl(e, this.name, a), e.log("Connecting to websocket endpoint '" + h + "'."), e.socket = new t.WebSocket(h), e.socket.onopen = function () {
//                 c = !0;
//                 e.log("Websocket opened.");
//                 r.clearReconnectTimeout(e);
//                 f(e, i.connectionState.reconnecting, i.connectionState.connected) === !0 && v.triggerHandler(u.onReconnect)
//             }, e.socket.onclose = function (t) {
//                 var r;
//                 this === e.socket && (c && typeof t.wasClean != "undefined" && t.wasClean === !1 ? (r = i._.transportError(i.resources.webSocketClosed, e.transport, t), e.log("Unclean disconnect from websocket: " + (t.reason || "[no reason given]."))) : e.log("Websocket closed."), s && s(r) || (r && n(e).triggerHandler(u.onError, [r]), l.reconnect(e)))
//             }, e.socket.onmessage = function (n) {
//                 var t;
//                 try {
//                     t = e._parseResponse(n.data)
//                 } catch (i) {
//                     r.handleParseFailure(e, n.data, i, s, n);
//                     return
//                 }
//                 t && r.processMessages(e, t, o)
//             })
//         }, reconnect: function (n) {
//             r.reconnect(n, this.name)
//         }, lostConnection: function (n) {
//             this.reconnect(n)
//         }, stop: function (n) {
//             r.clearReconnectTimeout(n);
//             n.socket && (n.log("Closing the Websocket."), n.socket.close(), n.socket = null)
//         }, abort: function (n, t) {
//             r.ajaxAbort(n, t)
//         }
//     }
// }(window.jQuery, window), function (n, t) {
//     var i = n.signalR, u = n.signalR.events, e = n.signalR.changeState, r = i.transports._logic, f = function (n) {
//         t.clearTimeout(n._.reconnectAttemptTimeoutHandle);
//         delete n._.reconnectAttemptTimeoutHandle
//     };
//     i.transports.serverSentEvents = {
//         name: "serverSentEvents", supportsKeepAlive: function () {
//             return !0
//         }, timeOut: 3e3, start: function (o, s, h) {
//             var c = this, l = !1, a = n(o), v = !s, y;
//             if (o.eventSource && (o.log("The connection already has an event source. Stopping it."), o.stop()), !t.EventSource) {
//                 h && (o.log("This browser doesn't support SSE."), h());
//                 return
//             }
//             y = r.getUrl(o, this.name, v);
//             try {
//                 o.log("Attempting to connect to SSE endpoint '" + y + "'.");
//                 o.eventSource = new t.EventSource(y, {withCredentials: o.withCredentials})
//             } catch (p) {
//                 o.log("EventSource failed trying to connect with error " + p.Message + ".");
//                 h ? h() : (a.triggerHandler(u.onError, [i._.transportError(i.resources.eventSourceFailedToConnect, o.transport, p)]), v && c.reconnect(o));
//                 return
//             }
//             v && (o._.reconnectAttemptTimeoutHandle = t.setTimeout(function () {
//                 l === !1 && o.eventSource.readyState !== t.EventSource.OPEN && c.reconnect(o)
//             }, c.timeOut));
//             o.eventSource.addEventListener("open", function () {
//                 o.log("EventSource connected.");
//                 f(o);
//                 r.clearReconnectTimeout(o);
//                 l === !1 && (l = !0, e(o, i.connectionState.reconnecting, i.connectionState.connected) === !0 && a.triggerHandler(u.onReconnect))
//             }, !1);
//             o.eventSource.addEventListener("message", function (n) {
//                 var t;
//                 if (n.data !== "initialized") {
//                     try {
//                         t = o._parseResponse(n.data)
//                     } catch (i) {
//                         r.handleParseFailure(o, n.data, i, h, n);
//                         return
//                     }
//                     r.processMessages(o, t, s)
//                 }
//             }, !1);
//             o.eventSource.addEventListener("error", function (n) {
//                 var r = i._.transportError(i.resources.eventSourceError, o.transport, n);
//                 this === o.eventSource && (h && h(r) || (o.log("EventSource readyState: " + o.eventSource.readyState + "."), n.eventPhase === t.EventSource.CLOSED ? (o.log("EventSource reconnecting due to the server connection ending."), c.reconnect(o)) : (o.log("EventSource error."), a.triggerHandler(u.onError, [r]))))
//             }, !1)
//         }, reconnect: function (n) {
//             r.reconnect(n, this.name)
//         }, lostConnection: function (n) {
//             this.reconnect(n)
//         }, send: function (n, t) {
//             r.ajaxSend(n, t)
//         }, stop: function (n) {
//             f(n);
//             r.clearReconnectTimeout(n);
//             n && n.eventSource && (n.log("EventSource calling close()."), n.eventSource.close(), n.eventSource = null, delete n.eventSource)
//         }, abort: function (n, t) {
//             r.ajaxAbort(n, t)
//         }
//     }
// }(window.jQuery, window), function (n, t) {
//     var r = n.signalR, e = n.signalR.events, o = n.signalR.changeState, i = r.transports._logic, u = function () {
//         var n = t.document.createElement("iframe");
//         return n.setAttribute("style", "position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;"), n
//     }, f = function () {
//         var i = null, f = 1e3, n = 0;
//         return {
//             prevent: function () {
//                 r._.ieVersion <= 8 && (n === 0 && (i = t.setInterval(function () {
//                     var n = u();
//                     t.document.body.appendChild(n);
//                     t.document.body.removeChild(n);
//                     n = null
//                 }, f)), n++)
//             }, cancel: function () {
//                 n === 1 && t.clearInterval(i);
//                 n > 0 && n--
//             }
//         }
//     }();
//     r.transports.foreverFrame = {
//         name: "foreverFrame", supportsKeepAlive: function () {
//             return !0
//         }, iframeClearThreshold: 50, start: function (n, r, e) {
//             if (n.accessToken) {
//                 e && (n.log("Forever Frame does not support connections that require a Bearer token to connect, such as the Azure SignalR Service."), e());
//                 return
//             }
//             var l = this, s = i.foreverFrame.count += 1, h, o = u(), c = function () {
//                 n.log("Forever frame iframe finished loading and is no longer receiving messages.");
//                 e && e() || l.reconnect(n)
//             };
//             if (t.EventSource) {
//                 e && (n.log("Forever Frame is not supported by SignalR on browsers with SSE support."), e());
//                 return
//             }
//             o.setAttribute("data-signalr-connection-id", n.id);
//             f.prevent();
//             h = i.getUrl(n, this.name);
//             h += "&frameId=" + s;
//             t.document.documentElement.appendChild(o);
//             n.log("Binding to iframe's load event.");
//             o.addEventListener ? o.addEventListener("load", c, !1) : o.attachEvent && o.attachEvent("onload", c);
//             o.src = h;
//             i.foreverFrame.connections[s] = n;
//             n.frame = o;
//             n.frameId = s;
//             r && (n.onSuccess = function () {
//                 n.log("Iframe transport started.");
//                 r()
//             })
//         }, reconnect: function (n) {
//             var r = this;
//             i.isConnectedOrReconnecting(n) && i.verifyLastActive(n) && t.setTimeout(function () {
//                 if (i.verifyLastActive(n) && n.frame && i.ensureReconnectingState(n)) {
//                     var u = n.frame, t = i.getUrl(n, r.name, !0) + "&frameId=" + n.frameId;
//                     n.log("Updating iframe src to '" + t + "'.");
//                     u.src = t
//                 }
//             }, n.reconnectDelay)
//         }, lostConnection: function (n) {
//             this.reconnect(n)
//         }, send: function (n, t) {
//             i.ajaxSend(n, t)
//         }, receive: function (t, u) {
//             var f, e, o;
//             if (t.json !== t._originalJson && (u = t._originalJson.stringify(u)), o = t._parseResponse(u), i.processMessages(t, o, t.onSuccess), t.state === n.signalR.connectionState.connected && (t.frameMessageCount = (t.frameMessageCount || 0) + 1, t.frameMessageCount > r.transports.foreverFrame.iframeClearThreshold && (t.frameMessageCount = 0, f = t.frame.contentWindow || t.frame.contentDocument, f && f.document && f.document.body))) for (e = f.document.body; e.firstChild;) e.removeChild(e.firstChild)
//         }, stop: function (n) {
//             var r = null;
//             if (f.cancel(), n.frame) {
//                 if (n.frame.stop) n.frame.stop(); else try {
//                     r = n.frame.contentWindow || n.frame.contentDocument;
//                     r.document && r.document.execCommand && r.document.execCommand("Stop")
//                 } catch (u) {
//                     n.log("Error occurred when stopping foreverFrame transport. Message = " + u.message + ".")
//                 }
//                 n.frame.parentNode === t.document.documentElement && t.document.documentElement.removeChild(n.frame);
//                 delete i.foreverFrame.connections[n.frameId];
//                 n.frame = null;
//                 n.frameId = null;
//                 delete n.frame;
//                 delete n.frameId;
//                 delete n.onSuccess;
//                 delete n.frameMessageCount;
//                 n.log("Stopping forever frame.")
//             }
//         }, abort: function (n, t) {
//             i.ajaxAbort(n, t)
//         }, getConnection: function (n) {
//             return i.foreverFrame.connections[n]
//         }, started: function (t) {
//             o(t, r.connectionState.reconnecting, r.connectionState.connected) === !0 && n(t).triggerHandler(e.onReconnect)
//         }
//     }
// }(window.jQuery, window), function (n, t) {
//     var r = n.signalR, u = n.signalR.events, e = n.signalR.changeState, f = n.signalR.isDisconnecting,
//         i = r.transports._logic;
//     r.transports.longPolling = {
//         name: "longPolling", supportsKeepAlive: function () {
//             return !1
//         }, reconnectDelay: 3e3, start: function (o, s, h) {
//             var a = this, v = function () {
//                 v = n.noop;
//                 o.log("LongPolling connected.");
//                 s ? s() : o.log("WARNING! The client received an init message after reconnecting.")
//             }, y = function (n) {
//                 return h(n) ? (o.log("LongPolling failed to connect."), !0) : !1
//             }, c = o._, l = 0, p = function (i) {
//                 t.clearTimeout(c.reconnectTimeoutId);
//                 c.reconnectTimeoutId = null;
//                 e(i, r.connectionState.reconnecting, r.connectionState.connected) === !0 && (i.log("Raising the reconnect event"), n(i).triggerHandler(u.onReconnect))
//             }, w = 36e5;
//             o.pollXhr && (o.log("Polling xhr requests already exists, aborting."), o.stop());
//             o.messageId = null;
//             c.reconnectTimeoutId = null;
//             c.pollTimeoutId = t.setTimeout(function () {
//                 (function e(s, h) {
//                     var g = s.messageId, nt = g === null, k = !nt, tt = !h, d = i.getUrl(s, a.name, k, tt, !0), b = {};
//                     (s.messageId && (b.messageId = s.messageId), s.groupsToken && (b.groupsToken = s.groupsToken), f(s) !== !0) && (o.log("Opening long polling request to '" + d + "'."), s.pollXhr = i.ajax(o, {
//                         xhrFields: {
//                             onprogress: function () {
//                                 i.markLastMessage(o)
//                             }
//                         },
//                         url: d,
//                         type: "POST",
//                         contentType: r._.defaultContentType,
//                         data: b,
//                         timeout: o._.pollTimeout,
//                         headers: o.accessToken ? {Authorization: "Bearer " + o.accessToken} : {},
//                         success: function (r) {
//                             var h, w = 0, u, a;
//                             o.log("Long poll complete.");
//                             l = 0;
//                             try {
//                                 h = o._parseResponse(r)
//                             } catch (b) {
//                                 i.handleParseFailure(s, r, b, y, s.pollXhr);
//                                 return
//                             }
//                             (c.reconnectTimeoutId !== null && p(s), h && (u = i.maximizePersistentResponse(h)), i.processMessages(s, h, v), u && n.type(u.LongPollDelay) === "number" && (w = u.LongPollDelay), f(s) !== !0) && (a = u && u.ShouldReconnect, !a || i.ensureReconnectingState(s)) && (w > 0 ? c.pollTimeoutId = t.setTimeout(function () {
//                                 e(s, a)
//                             }, w) : e(s, a))
//                         },
//                         error: function (f, h) {
//                             var v = r._.transportError(r.resources.longPollFailed, o.transport, f, s.pollXhr);
//                             if (t.clearTimeout(c.reconnectTimeoutId), c.reconnectTimeoutId = null, h === "abort") {
//                                 o.log("Aborted xhr request.");
//                                 return
//                             }
//                             if (!y(v)) {
//                                 if (l++, o.state !== r.connectionState.reconnecting && (o.log("An error occurred using longPolling. Status = " + h + ".  Response = " + f.responseText + "."), n(s).triggerHandler(u.onError, [v])), (o.state === r.connectionState.connected || o.state === r.connectionState.reconnecting) && !i.verifyLastActive(o)) return;
//                                 if (!i.ensureReconnectingState(s)) return;
//                                 c.pollTimeoutId = t.setTimeout(function () {
//                                     e(s, !0)
//                                 }, a.reconnectDelay)
//                             }
//                         }
//                     }), k && h === !0 && (c.reconnectTimeoutId = t.setTimeout(function () {
//                         p(s)
//                     }, Math.min(1e3 * (Math.pow(2, l) - 1), w))))
//                 })(o)
//             }, 250)
//         }, lostConnection: function (n) {
//             n.pollXhr && n.pollXhr.abort("lostConnection")
//         }, send: function (n, t) {
//             i.ajaxSend(n, t)
//         }, stop: function (n) {
//             t.clearTimeout(n._.pollTimeoutId);
//             t.clearTimeout(n._.reconnectTimeoutId);
//             delete n._.pollTimeoutId;
//             delete n._.reconnectTimeoutId;
//             n.pollXhr && (n.pollXhr.abort(), n.pollXhr = null, delete n.pollXhr)
//         }, abort: function (n, t) {
//             i.ajaxAbort(n, t)
//         }
//     }
// }(window.jQuery, window), function (n) {
//     function r(n) {
//         return n + s
//     }
//
//     function c(n, t, i) {
//         for (var f = n.length, u = [], r = 0; r < f; r += 1) n.hasOwnProperty(r) && (u[r] = t.call(i, n[r], r, n));
//         return u
//     }
//
//     function l(t) {
//         return n.isFunction(t) ? null : n.type(t) === "undefined" ? null : t
//     }
//
//     function u(n) {
//         for (var t in n) if (n.hasOwnProperty(t)) return !0;
//         return !1
//     }
//
//     function f(n, t) {
//         var i = n._.invocationCallbacks, r, f;
//         u(i) && n.log("Clearing hub invocation callbacks with error: " + t + ".");
//         n._.invocationCallbackId = 0;
//         delete n._.invocationCallbacks;
//         n._.invocationCallbacks = {};
//         for (f in i) r = i[f], r.method.call(r.scope, {E: t})
//     }
//
//     function e(t) {
//         return n.isFunction(t) && t.toString().slice(0, 256).indexOf("// Call the client hub method") >= 0
//     }
//
//     function i(n, t) {
//         return new i.fn.init(n, t)
//     }
//
//     function t(i, r) {
//         var u = {qs: null, logging: !1, useDefaultPath: !0};
//         return n.extend(u, r), (!i || u.useDefaultPath) && (i = (i || "") + "/signalr"), new t.fn.init(i, u)
//     }
//
//     var o = 0, s = ".hubProxy", h = n.signalR;
//     i.fn = i.prototype = {
//         init: function (n, t) {
//             this.state = {};
//             this.connection = n;
//             this.hubName = t;
//             this._ = {callbackMap: {}}
//         }, constructor: i, hasSubscriptions: function () {
//             return u(this._.callbackMap)
//         }, on: function (t, i, u) {
//             var c = this, l = c._.callbackMap, v = !u && e(i), f, h, s, a;
//             for (u = u || i, u._signalRGuid || (u._signalRGuid = o++), t = t.toLowerCase(), f = l[t], f || (f = [], l[t] = f), s = 0; s < f.length; s++) (f[s].guid === u._signalRGuid || v && f[s].isFromOldGeneratedHubProxy) && (h = f[s]);
//             return h || (h = {
//                 guid: u._signalRGuid,
//                 eventHandlers: [],
//                 isFromOldGeneratedHubProxy: v
//             }, l[t].push(h)), a = function (n, t) {
//                 i.apply(c, t)
//             }, h.eventHandlers.push(a), n(c).bind(r(t), a), c
//         }, off: function (t, i, u) {
//             var s = this, l = s._.callbackMap, f, a = !u && e(i), h, v, o, c;
//             if (u = u || i, t = t.toLowerCase(), f = l[t], f) if (i) {
//                 for (o = 0; o < f.length; o++) (f[o].guid === u._signalRGuid || a && f[o].isFromOldGeneratedHubProxy) && (v = o, h = f[o]);
//                 if (h) {
//                     for (c = 0; c < h.eventHandlers.length; c++) n(s).unbind(r(t), h.eventHandlers[c]);
//                     f.splice(o, 1);
//                     f.length === 0 && delete l[t]
//                 }
//             } else i || (n(s).unbind(r(t)), delete l[t]);
//             return s
//         }, invoke: function (t) {
//             var i = this, r = i.connection, e = n.makeArray(arguments).slice(1), o = c(e, l),
//                 f = {H: i.hubName, M: t, A: o, I: r._.invocationCallbackId}, u = n.Deferred(), s = function (f) {
//                     var e = i._maximizeHubResponse(f), s, o;
//                     n.extend(i.state, e.State);
//                     e.Progress ? u.notifyWith ? u.notifyWith(i, [e.Progress.Data]) : r._.progressjQueryVersionLogged || (r.log("A hub method invocation progress update was received but the version of jQuery in use (" + n.prototype.jquery + ") does not support progress updates. Upgrade to jQuery 1.7+ to receive progress notifications."), r._.progressjQueryVersionLogged = !0) : e.Error ? (e.StackTrace && r.log(e.Error + "\n" + e.StackTrace + "."), s = e.IsHubException ? "HubException" : "Exception", o = h._.error(e.Error, s), o.data = e.ErrorData, r.log(i.hubName + "." + t + " failed to execute. Error: " + o.message), u.rejectWith(i, [o])) : (r.log("Invoked " + i.hubName + "." + t), u.resolveWith(i, [e.Result]))
//                 };
//             return r._.invocationCallbacks[r._.invocationCallbackId.toString()] = {
//                 scope: i,
//                 method: s
//             }, r._.invocationCallbackId += 1, n.isEmptyObject(i.state) || (f.S = i.state), r.log("Invoking " + i.hubName + "." + t), r.send(f), u.promise()
//         }, _maximizeHubResponse: function (n) {
//             return {
//                 State: n.S,
//                 Result: n.R,
//                 Progress: n.P ? {Id: n.P.I, Data: n.P.D} : null,
//                 Id: n.I,
//                 IsHubException: n.H,
//                 Error: n.E,
//                 StackTrace: n.T,
//                 ErrorData: n.D
//             }
//         }
//     };
//     i.fn.init.prototype = i.fn;
//     t.fn = t.prototype = n.connection();
//     t.fn.init = function (t, i) {
//         var e = {qs: null, logging: !1, useDefaultPath: !0}, u = this;
//         n.extend(e, i);
//         n.signalR.fn.init.call(u, t, e.qs, e.logging);
//         u.proxies = {};
//         u._.invocationCallbackId = 0;
//         u._.invocationCallbacks = {};
//         u.received(function (t) {
//             var f, o, e, i, s, h;
//             t && (typeof t.P != "undefined" ? (e = t.P.I.toString(), i = u._.invocationCallbacks[e], i && i.method.call(i.scope, t)) : typeof t.I != "undefined" ? (e = t.I.toString(), i = u._.invocationCallbacks[e], i && (u._.invocationCallbacks[e] = null, delete u._.invocationCallbacks[e], i.method.call(i.scope, t))) : (f = this._maximizeClientHubInvocation(t), u.log("Triggering client hub event '" + f.Method + "' on hub '" + f.Hub + "'."), s = f.Hub.toLowerCase(), h = f.Method.toLowerCase(), o = this.proxies[s], n.extend(o.state, f.State), n(o).triggerHandler(r(h), [f.Args])))
//         });
//         u.error(function (n, t) {
//             var i, r;
//             t && (i = t.I, r = u._.invocationCallbacks[i], r && (u._.invocationCallbacks[i] = null, delete u._.invocationCallbacks[i], r.method.call(r.scope, {E: n})))
//         });
//         u.reconnecting(function () {
//             u.transport && u.transport.name === "webSockets" && f(u, "Connection started reconnecting before invocation result was received.")
//         });
//         u.disconnected(function () {
//             f(u, "Connection was disconnected before invocation result was received.")
//         })
//     };
//     t.fn._maximizeClientHubInvocation = function (n) {
//         return {Hub: n.H, Method: n.M, Args: n.A, State: n.S}
//     };
//     t.fn._registerSubscribedHubs = function () {
//         var t = this;
//         t._subscribedToHubs || (t._subscribedToHubs = !0, t.starting(function () {
//             var i = [];
//             n.each(t.proxies, function (n) {
//                 this.hasSubscriptions() && (i.push({name: n}), t.log("Client subscribed to hub '" + n + "'."))
//             });
//             i.length === 0 && t.log("No hubs have been subscribed to.  The client will not receive data from hubs.  To fix, declare at least one client side function prior to connection start for each hub you wish to subscribe to.");
//             t.data = t.json.stringify(i)
//         }))
//     };
//     t.fn.createHubProxy = function (n) {
//         n = n.toLowerCase();
//         var t = this.proxies[n];
//         return t || (t = i(this, n), this.proxies[n] = t), this._registerSubscribedHubs(), t
//     };
//     t.fn.init.prototype = t.fn;
//     n.hubConnection = t
// }(window.jQuery, window), function (n) {
//     n.signalR.version = "2.4.2"
// }(window.jQuery);
// ;
// (function ($) {
//     $.ajax({
//         url: "../../signalr/hubs",
//         dataType: "script",
//         async: false
//     });
// }(jQuery));
// ;
// var ATLAS_DEFAULT_LAUNCHER_LOGO = "https://cdn.atlasrtx.com/img/AtlasRTX/atlasrtx-bot-white.svg";
//
// var AtlasChat = {
//     fotoramaAvailable: false,
//
//     //Regular expression used to determine whether there us a URL within text
//     urlRegex: /(@)?(www\.|ftp:\/\/|http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?([a-zA-Z0-9\u00a1-\uffff0-9\-\.\?\,;:\'\/\\\+&amp;%\$#_\=\~\(\)]*)?(?!@)\b(\/)?/g,
//     //Regular expression used to extract a number from the beginning of a string
//     startsWithNumberRegex: /^\d+/g,
//
//     //Converts a UTC date to browser timezone
//     convertToLocalDate: function (UTCDate) {
//
//         var localDate = new Date(UTCDate);
//
//         return localDate.getDate() === (new Date()).getDate() &&
//         localDate.getMonth() === (new Date()).getMonth() &&
//         localDate.getYear() === (new Date()).getYear()
//
//             // if same date, just display time
//             ? localDate.toLocaleString([], {hour: '2-digit', minute: '2-digit'})
//
//             // else display date and time
//             : localDate.toLocaleString([], {
//                 day: 'numeric',
//                 month: 'numeric',
//                 year: 'numeric',
//                 hour: '2-digit',
//                 minute: '2-digit'
//             });
//     },
//
//     addImageMessage: function (message) {
//         var imageHTML = "";
//
//         // image carousel
//         if (!AtlasChat.fotoramaAvailable) {
//             $('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.atlasrtx.com/img/AtlasRTX/wc/fotorama-4.6.4.css">');
//             $.ajax({
//                 url: "https://cdn.atlasrtx.com/img/AtlasRTX/wc/fotorama-4.6.4-alt.min.js",
//                 dataType: 'script',
//                 success: function () {
//                     AtlasChat.fotoramaAvailable = true;
//                 },
//                 async: true
//             });
//         }
//         imageHTML = AtlasChat.createImageCarouselHTML(message);
//
//         //Initializes image carousel after Fotorama has been loaded
//         var interval = setInterval(function () {
//             if (AtlasChat.fotoramaAvailable) {
//                 AtlasChat.initImageCarousel();
//                 clearInterval(interval);
//             }
//         }, 300);
//
//         return imageHTML;
//     },
//
//     createButtonMessageHTML: function (message, messageIsAlreadyJson) {
//         var div1 = document.createElement("div");
//         div1.classList.add("chat_message_wrapper");
//         div1.classList.add("chat_button_wrapper");
//         var div4 = document.createElement("div");
//         div4.classList.add("chat_button_bubble");
//
//         $.each(message, function (i, msg) {
//
//             //WebChat supplies an array of strings representing button JSON,
//             //  and ConversationQueue supplies an array of JSON objects representing buttons
//             var button = messageIsAlreadyJson ? msg : JSON.parse(msg);
//
//             var span2 = document.createElement("span");
//
//             //Remember some data attributes related to CTA processing
//             AtlasChat.setCtaAttributes(button, span2);
//
//             if (button.text) {
//                 // old button format
//                 span2.classList.add("chat_button_suggested_response");
//                 span2.textContent = AtlasChat.decodeMyHtml(button.text);
//                 span2.setAttribute("data-atlas-value", AtlasChat.decodeMyHtml(button.text));
//             } else {
//                 if (button.action === "url") {
//                     span2.classList.add("chat_button_link");
//                     span2.textContent = AtlasChat.decodeMyHtml(button.label);
//                     span2.setAttribute("data-atlas-value", AtlasChat.decodeMyHtml(button.value));
//                 } else if (button.action === "redirect") {
//                     span2.classList.add("chat_button_redirect");
//                     span2.textContent = AtlasChat.decodeMyHtml(button.label);
//                     span2.setAttribute("data-atlas-value", AtlasChat.decodeMyHtml(button.value));
//                 } else if (button.action === "pcg") {
//                     span2.classList.add("chat_button_suggested_response");
//                     span2.textContent = AtlasChat.decodeMyHtml(button.label);
//                     span2.setAttribute("data-atlas-value", AtlasChat.decodeMyHtml(button.value || button.label));
//                 } else {
//                     span2.classList.add("chat_button_suggested_response");
//                     span2.textContent = AtlasChat.decodeMyHtml(button.label);
//                     span2.setAttribute("data-atlas-value", AtlasChat.decodeMyHtml(button.value || button.label));
//                 }
//             }
//             span2.classList.add("chat_primary");
//             div4.appendChild(span2);
//         });
//         div1.appendChild(div4);
//
//         return div1;
//     },
//
//     createEmojiOptions: function (containerSelector, onClickFunction) {
//
//         return {
//             pickerPosition: "top",
//             tonesStyle: "bullet",
//             container: $(containerSelector),
//             standalone: true,
//             shortnames: true,
//             inline: true,
//             buttonTitle: "",
//             autocomplete: false,
//             events: {
//                 emojibtn_click: onClickFunction
//             },
//             filters: {
//                 recent: true, // disable recent
//                 smileys_people: {
//                     icon: 'yum' // change smileys_people filter icon to "cat"
//                 },
//                 animals_nature: {
//                     title: 'Animals' // change animals_nature filter title to "Animals"
//                 },
//                 activity: false,
//                 food_drink: false,
//                 objects: false, // disable objects filter
//                 symbols: false, // disable symbols filter
//                 flags: false // disable flags filter
//             }
//         };
//     },
//
//     //TODO: Remove this at a future date when we are comfortable that it is no longer used with any clients
//     createImageMessageHTML: function (message, messageIsAlreadyJson) {
//         var div1 = document.createElement("div");
//         div1.classList.add("chat_image_wrapper");
//         var div3 = document.createElement("div");
//
//         $.each(message, function (i, msg) {
//
//             //WebChat supplies an array of strings representing image JSON,
//             //  and ConversationQueue supplies an array of JSON objects representing images
//             var image = messageIsAlreadyJson ? msg : JSON.parse(msg);
//
//             var img1 = document.createElement("img");
//             img1.src = image.src;
//             //TODO: Add a new altText field to populate this
//             img1.alt = "";
//             img1.setAttribute("style", "max-width: 100%; " + image.style);
//             if (image.href) {
//                 img1.setAttribute("data-atlas-value", image.href);
//
//                 //Remember some data attributes related to CTA processing
//                 AtlasChat.setCtaAttributes(image, img1);
//
//                 img1.classList.add("chat_image_link");
//             }
//             div3.appendChild(img1);
//         });
//
//         div1.appendChild(div3);
//
//         return div1;
//     },
//
//     createImageCarouselHTML: function (message) {
//
//         var divWrapper = document.createElement("div");
//         divWrapper.classList.add("chat_image_wrapper");
//         var divCarousel = document.createElement("div");
//
//         divCarousel.classList.add("fotorama");
//         divCarousel.classList.add("fotorama-root");
//         divWrapper.appendChild(divCarousel);
//         var imageData = [];
//
//         $.each(message, function (i, image) {
//             // WebChat supplies an array of strings representing image JSON,
//             // ConversationQueue supplies an array of JSON objects representing images
//             image = (typeof image === "object") ? image : JSON.parse(image);
//
//             if (image.type && image.type === 'video') {
//                 if (image.src) {
//                     var aVideo = document.createElement("a");
//
//                     //Set the caption
//                     //FYI: Also set in the image section below
//                     var captionPrefix = (i + 1) + " of " + message.length;
//                     if (image.caption) {
//                         aVideo.setAttribute("data-caption", captionPrefix + ": " + image.caption);
//                     } else {
//                         //Always set a caption as that is how we get the video index
//                         aVideo.setAttribute("data-caption", captionPrefix);
//                     }
//
//                     aVideo.setAttribute("data-video", "true");
//                     //Set the style
//                     //FYI: Also set in the image section below
//                     if (image.style) {
//                         aVideo.setAttribute("style", image.style);
//                     }
//
//                     //Add an image if it is in the href
//                     if (image.href) {
//                         var splashImage = document.createElement("img");
//                         splashImage.setAttribute("src", image.href);
//                         aVideo.appendChild(splashImage);
//                     }
//
//                     //Create the video section
//                     aVideo.setAttribute("href", image.src);
//
//                     divCarousel.appendChild(aVideo);
//                 }
//             } else {
//                 var divSlide = document.createElement("div");
//                 divSlide.setAttribute("data-img", image.src);
//
//                 //FYI: Also set in the video section above
//                 if (image.caption) {
//                     divSlide.setAttribute("data-caption", (i + 1) + " of " + message.length + ": " + image.caption);
//                 }
//
//                 //FYI: Also set in the video section above
//                 if (image.style) {
//                     divSlide.setAttribute("style", image.style);
//                 }
//
//                 //Make the image clickable
//                 if (image.href) {
//                     var a = document.createElement("a");
//                     a.setAttribute("href", image.href);
//                     a.setAttribute("title", "Go to " + image.href);
//                     a.setAttribute("target", "_blank");
//                     //Add atrributes for the click event
//                     a.setAttribute("data-atlas-value", image.href);
//
//                     //Remember some data attributes related to CTA processing
//                     AtlasChat.setCtaAttributes(image, a);
//
//                     a.classList.add("chat_image_carousel");
//
//                     divSlide.appendChild(a);
//                 } else {
//                     var sp = document.createTextNode(" ");
//                     divSlide.appendChild(sp);
//                 }
//                 divCarousel.appendChild(divSlide);
//             }
//             //Add data to the root collection of object data
//             imageData.push({
//                 id: i,
//                 "href": image.href ?? "",
//                 "src": image.src ?? "",
//                 "atlas-type": image.type,
//                 "atlas-value": image.src ?? "",
//                 "atlas-action": image.action === undefined ? "" : image.action,
//                 "atlas-isCta": image.isCta === undefined ? false : image.isCta,
//                 "atlas-messageToSend": image.messageToSend === undefined ? "" : image.messageToSend
//             });
//
//         });
//
//         divCarousel.setAttribute("data-image-data", JSON.stringify(imageData));
//         return divWrapper;
//     },
//
//     initImageCarousel: function () {
//         $('.fotorama:not(.initialized)').fotorama({
//             width: '100%',
//             arrows: true,
//             click: false,
//             fit: 'cover',
//             swipe: true,
//             autoplay: 3000,
//             loop: true,
//             transition: 'crossfade',
//             clicktransition: 'crossfade',
//             allowfullscreen: false,
//             nav: false
//         }).addClass('initialized');
//     },
//
//     createInputFieldMessageHTML: function (message, placeholderText, messageIsAlreadyJson) {
//         var div1 = document.createElement("div");
//         div1.classList.add("chat_message_wrapper");
//         div1.classList.add("chat_button_wrapper");
//         var div4 = document.createElement("div");
//         div4.classList.add("chat_button_bubble");
//         var span0 = document.createElement("div");
//         span0.classList.add("chat_button_suggested_response_field");
//         span0.classList.add("chat_primary");
//
//         var fieldList = [];
//
//         var cancelMessageToSend;
//         var converted = [];
//         $.each(message, function (i, msg) {
//             //WebChat supplies an array of strings representing input field JSON,
//             //  and ConversationQueue supplies an array of JSON objects representing input fields
//             var inputfield = messageIsAlreadyJson ? msg : JSON.parse(msg);
//             converted.push(inputfield);
//             cancelMessageToSend = cancelMessageToSend || inputfield.cancelmessagetosend;
//         });
//
//         $.each(converted, function (i, inputfield) {
//             var div5 = document.createElement("div");
//             div5.setAttribute("style", "padding: 5px; display: grid;");
//             var headerEl = document.createElement("div");
//             headerEl.classList.add("chat_inputfield_header");
//
//             // If we have a label for the input field, display it
//             if (inputfield.instructions) {
//                 var labelEl = document.createElement("span");
//                 labelEl.style.flexGrow = "1";
//                 labelEl.textContent = inputfield.instructions;
//                 headerEl.appendChild(labelEl);
//             }
//
//             // For the first header only, if there is a cancel message add the cancel button
//             if (i === 0 && cancelMessageToSend) {
//                 // Create close SVG
//                 var cancelBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//                 $(cancelBtn).data("atlas-messagetosend", cancelMessageToSend);
//                 var useEl = document.createElementNS("http://www.w3.org/2000/svg", "use");
//                 useEl.setAttributeNS('http://www.w3.org/1999/xlink', 'href', "/images/webchat/icons.svg?v=2#times");
//                 cancelBtn.appendChild(useEl);
//
//                 // Style
//                 cancelBtn.classList.add("chat_inputfield_close");
//                 cancelBtn.classList.add("icon");
//                 cancelBtn.classList.add("icon_close");
//                 cancelBtn.style.margin = 0;
//
//                 // Add to header
//                 headerEl.appendChild(cancelBtn);
//             }
//             var div6 = document.createElement("div");
//             div6.setAttribute("style", "border: 1px solid darkgray; margin-top:5px; padding: 8px 13px 8px 13px; display: inline-flex; justify-content: space-between;");
//
//             var inputid = AtlasChat.getElementIdentifier();
//             var input1 = inputfield.inputtype === "multiline"
//                 ? document.createElement("textarea")
//                 : document.createElement("input");
//
//             input1.id = inputid;
//             input1.classList.add("chat_inputfield_text_box");
//             if (inputfield.label) {
//                 input1.setAttribute("placeholder", inputfield.label);
//             }
//
//             if (inputfield.inputtype === "multiline") {
//                 // Default textarea to 2 lines height-wise
//                 input1.setAttribute("rows", "2");
//                 input1.setAttribute("maxlength", "300");
//
//                 // But grow up to 70px (4 lines) like the chat input field
//                 $(input1).on('keyup', function (e) {
//                     // the following will help the text expand as typing takes place
//                     try {
//                         while ($(this).outerHeight() < 70 && $(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
//                             $(this).height($(this).height() + 1);
//                         }
//                         ;
//                     } catch (ex) {
//                         /* UI only, ignore error */
//                     }
//                 });
//             } else {
//                 input1.type = "text";
//                 if (inputfield.inputtype === "password") {
//                     input1.type = "password";
//                 }
//             }
//
//             var div7 = document.createElement("div");
//             div7.classList.add("chat_footer_close");
//             div7.setAttribute("style", "vertical-align: middle; height: 30px; width: 30px;");
//
//             var ifield = inputfield.field;
//             var iinputType = inputfield.inputtype;
//             var imessagetosend = "";
//             if (inputfield.messagetosend) {
//                 imessagetosend = inputfield.messagetosend;
//             }
//             var iplaceholdertext = inputfield.placeholdertext || "";
//             var span2 = document.createElement("div");
//             span2.classList.add("inputfield_error");
//             span2.setAttribute("style", "background-color:red; display:none;");
//
//             div5.appendChild(headerEl);
//             div6.appendChild(input1);
//             div5.appendChild(div6);
//             div5.appendChild(span2);
//             span0.appendChild(div5);
//
//             fieldList.push({
//                 "id": inputid,
//                 "field": ifield,
//                 "inputtype": iinputType,
//                 "messagetosend": imessagetosend,
//                 "currentplaceholdertext": placeholderText,
//                 "placeholdertext": iplaceholdertext,
//                 "optional": inputfield.optional,
//                 "instructions": inputfield.instructions,
//                 "isCta": inputfield.isCta ?? false
//             });
//         });
//         var span3 = document.createElement("div");
//         span3.classList.add("inputfield_success");
//         span3.setAttribute("style", "width: 32px; margin-top: 6px; margin-left: calc(100% - 38px); display:none;");
//         span3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.26 32"><path fill="currentColor" d="M39.23.34,12.49,27.07,3,17.62a1.14,1.14,0,0,0-1.62,0L.34,18.7a1.14,1.14,0,0,0,0,1.62L11.68,31.66a1.14,1.14,0,0,0,1.62,0L41.93,3a1.16,1.16,0,0,0,0-1.62L40.85.34a1.14,1.14,0,0,0-1.62,0Z"/></svg>';
//
//         var divImg = document.createElement("div");
//         divImg.classList.add("chat_field_submit");
//         divImg.classList.add("chat_primary_bg");
//         divImg.setAttribute("style", "float: right; vertical-align: middle; height: 30px; width: 30px;");
//         var imgS = document.createElement("img");
//         imgS.classList.add("chat_inputfield");
//         imgS.src = "https://cdn.atlasrtx.com/img/AtlasRTX/wc/small_arrow.png";
//         imgS.alt = "Submit Input Form";
//         imgS.setAttribute("style", "height: 22px; margin-left: 5px; margin-top: 3.5px;");
//         imgS.setAttribute("data-atlas-inputfields", JSON.stringify(fieldList));
//
//         span0.appendChild(span3);
//         divImg.appendChild(imgS);
//
//         span0.appendChild(divImg);
//
//         div4.appendChild(span0);
//         div1.appendChild(div4);
//
//         return div1;
//     },
//
//     //Returns a div containing a message from an Atlas user or the Atlas platform
//     createLeftMessageHTML: function (name, message, datestr, avatarurl, delay, hideHeader) {
//         var div1 = document.createElement("div");
//         div1.classList.add("chat_message_wrapper");
//
//         //Start the bubble
//         var div4 = document.createElement("div");
//         div4.classList.add("chat_message_bubble");
//
//         //Render the typing indicator
//         if (delay > 0) {
//             var div5 = document.createElement("div");
//             div5.id = AtlasChat.getElementIdentifier();
//             div5.classList.add("typing-indicator");
//             var div6 = document.createElement("span");
//             div6.classList.add("indicator1");
//             div6.classList.add("chat_primary_bg");
//             var div7 = document.createElement("span");
//             div7.classList.add("indicator2");
//             div7.classList.add("chat_primary_bg");
//             var div8 = document.createElement("span");
//             div8.classList.add("indicator3");
//             div8.classList.add("chat_primary_bg");
//             div5.appendChild(div6);
//             div5.appendChild(div7);
//             div5.appendChild(div8);
//             div4.appendChild(div5);
//         }
//
//         //Render the text
//         var span2 = document.createElement("span");
//         span2.id = AtlasChat.getElementIdentifier();
//         span2.innerHTML = AtlasChat.makeLinksClickable(message);
//         span2.setAttribute("style", "display: none;");
//
//         //Render the header
//         if (!hideHeader) {
//             var div2 = document.createElement("div");
//             div2.classList.add("chat_avatar");
//             div2.classList.add("chat_primary_bg");
//             div2.style.backgroundImage = "url('" + (avatarurl || ATLAS_DEFAULT_LAUNCHER_LOGO) + "')";
//             div2.setAttribute("aria-label", name);
//             // Always add chat_primary_bg in case avatar image has transparent background (webchat)
//             div2.classList.add("chat_primary_bg");
//             var div3 = document.createElement("div");
//             div3.classList.add("chat_user_name");
//             var span1 = document.createElement("span");
//             span1.innerText = name + " | " + datestr;
//             div1.appendChild(div2);
//             div3.appendChild(span1);
//             div1.appendChild(div3);
//         }
//
//         div4.appendChild(span2);
//         div1.appendChild(div4);
//
//         return div1;
//     },
//
//     //Returns a div containing a customer chat message
//     createRightMessageHTML: function (message, useLightClientText) {
//         var div1 = document.createElement("div");
//         div1.classList.add("chat_message_wrapper");
//         div1.classList.add("chat_message_wrapper_right");
//         var div4 = document.createElement("div");
//         div4.classList.add("chat_message_bubble");
//         div4.classList.add("chat_primary_bg");
//         if (useLightClientText !== "False") {
//             div4.classList.add("chat_bubble_right");
//         } else {
//             div4.classList.add("chat_bubble_right_darktext");
//         }
//         var span2 = document.createElement("span");
//         span2.innerHTML = AtlasChat.makeLinksClickable(message);
//
//         div4.appendChild(span2);
//         div1.appendChild(div4);
//
//         return div1;
//     },
//
//     //Returns a <div style="clear:both"></div>
//     createClearDiv: function () {
//         var clear = document.createElement("div");
//         clear.setAttribute("style", "clear:both");
//
//         return clear;
//     },
//
//     decodeMyHtml: function (html) {
//         return $('<div>').html(html).text();
//     },
//
//     //Extracts the base domain from a URL
//     extractDomainFromUrl: function (url) {
//         //Match on only http(s) urls and get the full domain minus www
//         var matches = url.match(/^https?\:\/\/(?:www\.)?([^\/?#]+)(?:[\/?#]|$)/i);
//         var domain = matches && matches[1];  // domain will be null if no match is found
//         return domain;
//     },
//
//     //Extracts a URL from a message text
//     extractUrlFromMessageText: function (messageText) {
//         var match = messageText.match(AtlasChat.urlRegex);
//         if (match && match.length > 0) {
//             return match[0];
//         }
//         return "";
//     },
//
//     //Extracts a number from the beginning of a string
//     extractNumberFromStringStart: function (textToSearch) {
//         var match = textToSearch.match(AtlasChat.startsWithNumberRegex);
//         if (match && match.length > 0) {
//             return match[0];
//         }
//         return null;
//     },
//
//     //Generates a unique identifier by incrementing a static integer
//     _uniqueElementID: 1,
//     getElementIdentifier: function () {
//         var id = "element" + this._uniqueElementID++;
//         return id;
//     },
//
//     getFileUploadUrl: function (feedbackId) {
//         return '../../Controls/ChatAttachmentUploadHandler.ashx?upload=start&fid=' + feedbackId;
//     },
//
//     makeLinksClickable: function (text) {
//         //Replace HTML-encoded text such as &amp;
//         text = AtlasChat.decodeMyHtml(text);
//
//         var processTextLinksResult = AtlasChat.processTextLinks(text);
//         if (processTextLinksResult.foundTextLinks) {
//             return processTextLinksResult.result;
//         } else {
//             //Replace CRLF with hTML <br/>
//             text = text.replace(/(?:\r\n|\r|\n)/g, '<br>');
//
//             //Find URI patterns
//
//             var httpprefix = 'http://';
//             var httpsprefix = 'https://';
//             var ftpprefix = 'ftp://';
//             return text.replace(AtlasChat.urlRegex, function ($0, $1) {
//                 if ($1) {
//                     if ($1.indexOf('@') !== -1) {
//                         return $1 ? $0 : $0;
//                     }
//                 }
//                 if (($0.substr(0, httpprefix.length) !== httpprefix) && ($0.substr(0, ftpprefix.length) !== ftpprefix) && ($0.substr(0, httpsprefix.length) !== httpsprefix)) {
//                     $0 = httpprefix + $0;
//                 }
//                 //Open in new tab
//                 return $1 ? $0 : '<a class="chat-link" target="_blank" href="' + $0 + '">Link</a>';
//             });
//         }
//     },
//
//     //Displays the message text portion of the message HTML created by AtlasChat.createLeftMessageHTML
//     makeMessageTextVisible: function (messageHtml) {
//         var messageText = $(messageHtml).find(".chat_message_bubble > span")[0];
//         messageText.setAttribute("style", "display:inline;");
//     },
//
//     processTextLinks: function (inText) {
//         var returnValue = {foundTextLinks: false, result: null};
//         var textLinksFound = 0;
//
//         //Find each instance of a pair of { that contain stuff inside }
//         returnValue.result = inText.replace(/\{(?:[^{}]|())*\}/g, function (jsonMatch) {
//
//             try {
//                 //See if the {} matches are actually JSON
//                 var textLinkJson = JSON.parse(jsonMatch);
//
//                 //Remember we found a good result
//                 textLinksFound = textLinksFound + 1;
//
//                 var isCta = textLinkJson.isCta === undefined ? false : textLinkJson.isCta;
//                 var messageToSend = textLinkJson.messageToSend === undefined ? "" : textLinkJson.messageToSend;
//
//                 //If we have a successful result, it's JSON, so create a link
//                 return '<a class="chat-link" target="_blank" href="' + textLinkJson.url + '" data-atlas-isCta="' + isCta + '" data-atlas-messageToSend="' + messageToSend + '">Link</a>';
//             } catch (ex) {
//                 //silent
//                 return null;
//             }
//         });
//
//         returnValue.foundTextLinks = textLinksFound > 0;
//         return returnValue;
//     },
//
//     //Scrolls a given HTML element to the bottom
//     scrollToBottom: function (viewportId, animateDelay) {
//         if (!animateDelay) {
//             animateDelay = 1500;
//         }
//
//         var objViewPort = document.getElementById(viewportId);
//         if (objViewPort !== null) {
//             var sHeight = objViewPort.scrollHeight;
//             if (sHeight > 0) {
//                 $('#' + viewportId).stop().animate({scrollTop: sHeight}, animateDelay);
//             }
//         }
//     },
//
//     //Remembers some data attributes related to CTA processing
//     setCtaAttributes: function (sourceJson, destinationHtml) {
//         destinationHtml.setAttribute("data-atlas-action", sourceJson.action === undefined ? "" : sourceJson.action);
//         destinationHtml.setAttribute("data-atlas-isCta", sourceJson.isCta === undefined ? false : sourceJson.isCta);
//         destinationHtml.setAttribute("data-atlas-messageToSend", sourceJson.messageToSend === undefined ? "" : sourceJson.messageToSend);
//     },
//
//     //sends a message from a chat client
//     sendMessage: function (relativePathToApiFolder, onSuccessFunction, onErrorFunction, feedbackID, messageText, latestMessageID) {
//
//         var jsonToSend = JSON.stringify({"eid": feedbackID, "msg": messageText, "latestMessageID": latestMessageID});
//
//         $.ajax({
//             type: "POST", //HTTP method
//             url: relativePathToApiFolder + "api/Engage/SendMessage", //page/method name
//             data: jsonToSend,
//             contentType: "application/json; charset=utf-8",
//             async: true,
//             success: onSuccessFunction,
//             error: onErrorFunction
//         });
//     },
//
//     //Checks file being uploaded against our rules
//     validateUpload: function (uploadFile) {
//         var validationError = null;
//
//         if ((/\.(exe)$/i).test(uploadFile.name)) { //executables
//             validationError = "You can't upload an exe file.";
//         }
//         if (uploadFile.size > 20000000) { // 20mb
//             validationError = "You can't upload a file larger than 20 MB.";
//         }
//
//         return validationError;
//     }
// };
// ;
// var AtlasCookie = {
//
//     //Converts a UTC date to browser timezone
//     convertToLocalDate: function (UTCDate) {
//
//         var localDate = new Date(UTCDate);
//
//         return localDate.getDate() === (new Date()).getDate() &&
//         localDate.getMonth() === (new Date()).getMonth() &&
//         localDate.getYear() === (new Date()).getYear()
//
//             // if same date, just display time
//             ? localDate.toLocaleString([], {hour: '2-digit', minute: '2-digit'})
//
//             // else display date and time
//             : localDate.toLocaleString([], {
//                 day: 'numeric',
//                 month: 'numeric',
//                 year: 'numeric',
//                 hour: '2-digit',
//                 minute: '2-digit'
//             });
//     },
//
//     //Creates and returns a unique GUID
//     getUniqueID: function () {
//         var self = {};
//         var lut = [];
//         for (var i = 0; i < 256; i++) {
//             lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
//         }
//         self.generate = function () {
//             var d0 = Math.random() * 0xffffffff | 0;
//             var d1 = Math.random() * 0xffffffff | 0;
//             var d2 = Math.random() * 0xffffffff | 0;
//             var d3 = Math.random() * 0xffffffff | 0;
//             return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' +
//                 lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' +
//                 lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
//                 lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
//         }
//         return self.generate();
//     },
//
//     getUserCookie: function (userID, tabID) {
//         var userCookie = AtlasCookie.cookieManagement.getItem("atlasuid_" + userID + "_" + tabID);
//         return userCookie !== null ? JSON.parse(userCookie) : {};
//     },
//
//     getUserPageCookie: function (userID, tabID, pageName) {
//         var userCookie = AtlasCookie.getUserCookie(userID, tabID);
//         if (!userCookie[pageName]) {
//             userCookie[pageName] = {};
//         }
//         return userCookie[pageName];
//
//     },
//
//     getVisitorCookie: function () {
//         var visitorCookie = AtlasCookie.cookieManagement.getItem("atlasvid");
//         return visitorCookie !== null ? JSON.parse(visitorCookie) : {};
//     },
//
//     getVisitorID: function () {
//         var visitorID = null;
//         var keyName = 'visitorid';
//         var visitorCookie = AtlasCookie.getVisitorCookie();
//         if (visitorCookie[keyName]) {
//             visitorID = visitorCookie[keyName];
//         } else {
//             visitorID = AtlasCookie.getUniqueID();
//             visitorCookie[keyName] = visitorID;
//             var content = JSON.stringify(visitorCookie);
//             AtlasCookie.setVisitorCookie(content);
//         }
//         return visitorID;
//     },
//
//     setUserCookie: function (userID, tabID, contents) {
//         var atlasuid = "atlasuid_" + userID + "_" + tabID;
//         AtlasCookie.cookieManagement.setItem(atlasuid, contents, Infinity, "/");
//     },
//
//     setUserKeyValuePair: function (userID, tabID, pageName, keyName, value) {
//         var userCookie = AtlasCookie.getUserCookie(userID, tabID);
//         var pageObj = userCookie[pageName];
//         if (!pageObj) {
//             pageObj = {};
//             userCookie[pageName] = pageObj;
//         }
//         pageObj[keyName] = value;
//         var content = JSON.stringify(userCookie);
//         AtlasCookie.setUserCookie(userID, tabID, content);
//     },
//
//     setVisitorCookie: function (content) {
//         AtlasCookie.cookieManagement.setItem("atlasvid", content, Infinity, "/");
//     },
//
//     //Set Customer Cookie Functions
//     //_________________________________________________________
//     setCustomerGUIDCookie: function (guid, aid) {
//         var cc = '{ "customerGUID": "' + guid + '" }';
//         AtlasCookie.cookieManagement.setItem("atlasanon_" + aid.toString(), cc, Infinity, "/");
//     },
//
//     getCustomerGUIDCookie: function (aid) {
//         var cc = AtlasCookie.cookieManagement.getItem("atlasanon_" + aid.toString());
//         if (cc !== null) {
//             return JSON.parse(cc);
//         }
//         return null;
//     },
//
//     getCustGUID: function (aid) {
//         var custGUIDc = AtlasCookie.getCustomerGUIDCookie(aid);
//         if (custGUIDc === null) {
//             custGUID = AtlasCookie.getUniqueID();
//             AtlasCookie.setCustomerGUIDCookie(custGUID, aid);
//         } else {
//             custGUID = custGUIDc.customerGUID;
//         }
//         return custGUID;
//     },
//
//     removeCustomerGUIDCookie: function (aid) {
//         AtlasCookie.cookieManagement.removeItem("atlasanon_" + aid.toString(), "/");
//     },
//
//     setCustomerCookie: function (cid, aid, setIsMinimized, isMinimized, setIsSatisfactionCompleted) {
//         if (cid == null || aid == null) {
//             return;
//         }
//         var cc = AtlasCookie.getCustomerCookie(aid);
//         if (!cc) {
//             cc = {};  //Set a default value for a null cookie
//         }
//         var isMin = isMinimized;
//         if (!setIsMinimized) {
//             if (cc.min != null) {
//                 isMin = cc.min;
//             }
//         }
//         if (setIsSatisfactionCompleted) {
//             cc.isSatisfactionCompleted = true;
//         }
//         cc.customerid = cid;
//         cc.min = isMin;
//         var content = JSON.stringify(cc);
//         AtlasCookie.cookieManagement.setItem("atlascid_" + aid.toString(), content, Infinity, "/");
//     },
//
//     getCustomerCookie: function (aid) {
//         var cc = AtlasCookie.cookieManagement.getItem("atlascid_" + aid.toString());
//         if (cc !== null) {
//             return JSON.parse(cc);
//         }
//         return null;
//     },
//
//     removeCustomerCookie: function (aid) {
//         if (aid !== null) {
//             AtlasCookie.cookieManagement.removeItem("atlascid_" + aid.toString(), "/");
//         }
//     },
//
//     getSegmentationContextCookie: function (authid) {
//         if (authid == null) {
//             return null;
//         }
//         var cookie = AtlasCookie.cookieManagement.getItem("atlasseg_" + authid);
//         if (cookie !== null) {
//             return JSON.parse(cookie);
//         }
//         return null;
//     },
//
//     setSegmentationContextCookie: function (authid, segmentation) {
//         if (authid == null) {
//             return;
//         }
//         // Keep the first cookie until it expires
//         var cookie = AtlasCookie.getSegmentationContextCookie(authid);
//         if (cookie == null) {
//             AtlasCookie.cookieManagement.setItem("atlasseg_" + authid.toString(), JSON.stringify(segmentation), Infinity, "/");
//         }
//     },
//     //_________________________________________________________
//
//     ///Please treat the cookieManagement class/object/thingy a "private" and avoid using outside of this file.
//     cookieManagement: {
//         getItem: function (sKey) {
//             return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
//         },
//         setItem: function (sKey, sValue, vEnd, sPath) {
//             if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
//                 return false;
//             }
//             var sExpires = "";
//             if (vEnd) {
//                 switch (vEnd.constructor) {
//                     case Number:
//                         sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; expires=" + (new Date(vEnd * 1e3 + Date.now())).toUTCString();
//                         break;
//                     case String:
//                         sExpires = "; expires=" + vEnd;
//                         break;
//                     case Date:
//                         sExpires = "; expires=" + vEnd.toUTCString();
//                         break;
//                 }
//             }
//             document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue)
//                 + sExpires + (sPath ? "; path=" + sPath : "") + "; SameSite=None; Secure";
//             return true;
//         },
//         removeItem: function (sKey, sPath) {
//             if (!sKey || !this.hasItem(sKey)) {
//                 return false;
//             }
//             document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
//                 + (sPath ? "; path=" + sPath : "") + "; SameSite=None; Secure";
//             return true;
//         },
//         hasItem: function (sKey) {
//             return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
//         },
//         keys: /* optional method: you can safely remove it! */ function () {
//             var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
//             for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
//                 aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
//             }
//             return aKeys;
//         }
//     }
// };
// ;
// var AtlasWebchatRating = {
//     _signalRServer: null,
//     _chatInputManager: null,
//
//     API: {
//         addSatisfactionRating: function (feedbackID, rating) {
//             //Create a JSON payload to send
//             var payload = JSON.stringify({
//                 feedbackID: feedbackID,
//                 rating: rating
//             });
//
//             // Send to the server
//             try {
//                 AtlasWebchatRating._signalRServer.addSatisfactionRating(payload);
//             } catch (ex) {
//                 console.error("Could not addSatisfactionRating. feedbackID: " + feedbackID + ", rating: " + rating + ", error: " + ex.message)
//             }
//         },
//         addSentimentRating: function (feedbackID, messageID, rating) {
//             //Create a JSON payload to send
//             var payload = JSON.stringify({
//                 feedbackID: feedbackID,
//                 messageID: messageID,
//                 rating: rating
//             });
//
//             // Send to the server
//             try {
//                 AtlasWebchatRating._signalRServer.addSentimentRating(payload);
//             } catch (ex) {
//                 console.error("Could not addSentimentRating. feedbackID: " + feedbackID + ", messageID: " + messageID + ", rating: " + rating + ", error: " + ex.message)
//             }
//         },
//         undoSentimentRating: function (feedbackID, messageID) {
//             //Create a JSON payload to send
//             var payload = JSON.stringify({
//                 feedbackID: feedbackID,
//                 messageID: messageID
//             });
//
//             // Send to the server
//             try {
//                 AtlasWebchatRating._signalRServer.undoSentimentRating(payload);
//             } catch (ex) {
//                 console.error("Could not undoSentimentRating. feedbackID: " + feedbackID + ", messageID: " + messageID + ", error: " + ex.message)
//             }
//         },
//         updateSentimentRating: function (feedbackID, messageID, comments) {
//             //Create a JSON payload to send
//             var payload = JSON.stringify({
//                 feedbackID: feedbackID,
//                 messageID: messageID,
//                 comments: comments
//             });
//
//             // Send to the server
//             try {
//                 AtlasWebchatRating._signalRServer.updateSentimentRating(payload);
//             } catch (ex) {
//                 console.error("Could not updateSentimentRating. feedbackID: " + feedbackID + ", messageID: " + messageID + ", comments: " + comments + ", error: " + ex.message)
//             }
//         },
//     },
//
//     closeRatingContext: function (eventData, hideChatText) {
//         //Hide the comment UI
//         var feedbackContext = document.getElementById("chat_message_rating_context");
//         feedbackContext.classList.remove("show");
//         //Pass along the value to skip setting the focus of the text box
//         AtlasWebchatRating._chatInputManager.applyState({"display": !hideChatText});
//     },
//
//     //add feedback rating HTML for a message after the message bubble
//     initialize: function (signalRServer, chatInputManager) {
//         //Remember dependencies
//         AtlasWebchatRating._signalRServer = signalRServer;
//         AtlasWebchatRating._chatInputManager = chatInputManager;
//     },
//
//     //add feedback rating HTML for a message after the message bubble
//     injectRatingWidget: function ($messageHtml, feedbackID, messageID) {
//         //Remove a possibly visible sentiment rating widget before showing the new message
//         AtlasWebchatRating.removeRatingWidget();
//
//         //Create a rating HTML from template, watching for IE-specific HTML elements that don't have a .content property
//         var templateHtml = document.getElementById("chat_message_rating_widget").innerHTML;
//
//         //Add the rating after the message bubble
//         var $ratingWidgetContainer = $messageHtml.find(".chat_message_bubble").parent();
//         $ratingWidgetContainer.append(templateHtml);
//
//         //Wire up click handlers
//         var eventData = {feedbackID: feedbackID, messageID: messageID};
//         $ratingWidgetContainer.find(".chat_message_rating .chat_message_rating_ask .icon").click(eventData, AtlasWebchatRating.submitSentimentRating);
//         $ratingWidgetContainer.find(".chat_message_rating .chat_message_rating_thanks .undo .chat_link").click(eventData, AtlasWebchatRating.undoSentimentRating);
//         $("#sentiment_close").click(eventData, AtlasWebchatRating.closeRatingContext);
//         $("#imgRatingMessageSubmit").click(eventData, AtlasWebchatRating.submitRatingComments);
//
//         //Show it
//         $ratingWidgetContainer.find(".chat_message_rating").addClass("show");
//     },
//
//     removeRatingWidget: function () {
//         var $textarea = $("#tbRatingMessage");
//
//         //remove event handlers
//         $(".chat_message_rating .chat_message_rating_ask .icon").off("click");
//         $(".chat_message_rating .chat_message_rating_thanks .undo .chat_link").off("click");
//         $("#sentiment_close").off("click");
//         $("#imgRatingMessageSubmit").off("click");
//
//         //reset and remove any ratings from previous messages
//         $(".chat_message_wrapper .chat_message_rating").remove();
//         $textarea.height("auto");
//     },
//
//     submitRatingComments: function (eventData) {
//         AtlasWebchatRating.closeRatingContext(eventData, false);
//
//         // submit comment
//         var comments = document.getElementById("tbRatingMessage").value;
//         if (comments) {
//             var feedbackID = eventData.data.feedbackID;
//             var messageID = eventData.data.messageID;
//             AtlasWebchatRating.API.updateSentimentRating(feedbackID, messageID, comments);
//         }
//     },
//
//     submitSentimentRating: function (eventData) {
//         var feedbackContainer = AtlasWebchatRating.findAncestor(this, 'chat_message_rating');
//         var $feedbackContainer = $(feedbackContainer);
//         var sentimentScore = $(this).data("rating");
//         var feedbackID = eventData.data.feedbackID;
//         var messageID = eventData.data.messageID;
//
//         // submit sentiment
//         AtlasWebchatRating.API.addSentimentRating(feedbackID, messageID, sentimentScore);
//
//         if (sentimentScore) {
//             //positive
//             //Show the Thank you UI
//             $feedbackContainer.find(".chat_message_rating_ask").hide();
//             $feedbackContainer.find(".chat_message_rating_thanks").show();
//             $feedbackContainer.find(".chat_message_rating_thanks_positive").show();
//             $feedbackContainer.find(".chat_message_rating_thanks_negative").hide();
//         } else {
//             // negative
//             // ask for context
//             var feedbackContext = document.getElementById("chat_message_rating_context");
//             feedbackContext.querySelector("textarea").value = "";
//             feedbackContext.classList.add("show");
//             AtlasWebchatRating._chatInputManager.applyState({"display": false});
//             $("#tbRatingMessage").val("").focus();
//
//             //Show the Thank you UI with the negative feedback
//             $feedbackContainer.find(".chat_message_rating_ask").hide();
//             $feedbackContainer.find(".chat_message_rating_thanks").show();
//             $feedbackContainer.find(".chat_message_rating_thanks_positive").hide();
//             $feedbackContainer.find(".chat_message_rating_thanks_negative").show();
//         }
//     },
//
//     undoSentimentRating: function (eventData) {
//         //Hide the sentiment comment UI
//         $(".chat_message_wrapper .chat_message_rating_ask").show();
//         $(".chat_message_wrapper .chat_message_rating_thanks").hide();
//
//         // submit undo operation
//         var feedbackID = eventData.data.feedbackID;
//         var messageID = eventData.data.messageID;
//         AtlasWebchatRating.API.undoSentimentRating(feedbackID, messageID);
//     },
//
//     findAncestor: function (el, cls) {
//         //Using jquery .closest() for IE 11 polyfill as plain javascript .closest() isn't supported by IE.
//         var ancestor = $(el).closest("." + cls);
//         return ancestor.length ? ancestor[0] : null;
//     }
// };
// ;
// var conversationTimedOut = false;
// var welcomeBackMessage = null;
// var anon = 0;
// var startMin = 1;
// var fullscreen = 0;  // 0-100; 0=false otherwise is a percentage of window width
// var isMediaFullScreen = false;
// var customHeight = 0; //CustomHeight
// var customWidth = 0; //CustomWidth
// var custGUID = '';
// var numUnreadMessages = 0;
// var popoutText = '';
// var hasInteracted = false;
// var isRevisit = false;
// var isLoadingComplete = false;
// var parentDomain;
// var parentIP = '';
// var isSecure = false;
// var useEmoji = true;
// var useUpload = true;
// var useDelay = false;
// var useDebug = atlasDebugCookieExists();
//
// var hidePhoneNumber = false;
// var atlasSettings = '';
// var rtxContext = '';
// var calloutHideDelay = 0;
// var hideCallout = false;
// var launcherScale = "Standard";
// var calloutText = '';
// var welcomeMessage = '';
// var welcomeMessageDelay = 0;
//
// var customerID = null;
// var feedbackID = null;
// var accountID = null;
// var locationID = null;
// var programID = null;
// var visitorID = null;
//
// var clientUID = '';
//
// var clientTrackerName = 'AtlasRTXTracker';
// var gaEventCategory = 'AtlasRTXWebchat';
// var clientTrackerID = '';
// var googleTagManagerEnabled = false;
//
// var fullHeight = "100%";
// var fullWidth = "100%";
//
// var sideHeight = "100%";
// var sideWidth = "400px";
//
// var launcherHeight = "128px";
// var launcherWidth = "115px";
//
// var launcherWithPopoutHeight = "128px";
// var launcherWithPopoutWidth = "369px";
//
// var satisfactionHeight = "224px";
// var satisfactionWidth = "300px";
//
// var curHeight = "125px";
// var curWidth = "115px";
//
// var setMobileHeight = false;
// var setMobileWidth = false;
//
// var waitForInput = false;
// var nonInteractionHitOnLoad = true;
// var hasEngaged = false;
// var formDisplay = "";
//
// var ChatInputManager = {
//     _defaultState: {
//         display: false,
//         establishingConnection: true,
//         waitForMessageInput: false,
//         disable: false,
//         defaultMessagePlaceholderText: document.getElementById('tbMessage').getAttribute('placeholder') || '',
//         overrideMessagePlaceholderText: null
//     },
//     _chatState: {},
//
//     applyState: function (state) {
//         // Create a new chat state, overriding any values with the provided new state object (and leaving unprovided values alone)
//         ChatInputManager._chatState = $.extend({}, ChatInputManager._chatState, state);
//         if (ChatInputManager._chatState.display) {
//             ChatInputManager._enableChatInputs();
//             var placeholder = ChatInputManager._getPlaceholderText();
//             document.getElementById('tbMessage').setAttribute('placeholder', placeholder);
//             $(".chat_input").show();
//             $("#discussion_div").removeClass("chat_bottom");
//             var takeFocus = state.display; // Take focus if I have actively been asked to display
//             if (takeFocus) {
//                 $("#tbMessage").focus();
//             }
//         } else {
//             $(".chat_input").hide();
//             $("#discussion_div").addClass("chat_bottom");
//         }
//     },
//
//     clearInputText: function () {
//         $('#tbMessage').val('').blur().focus();
//         updateTextAreaSize($('#tbMessage'));
//     },
//
//     getInputText: function () {
//         // Ignore any leading whitespace
//         return $("#tbMessage").val().replace(/^\s+/, '');
//     },
//
//     getDefaultPlaceholderText: function () {
//         return ChatInputManager._chatState.defaultMessagePlaceholderText;
//     },
//
//     resetState: function () {
//         ChatInputManager._chatState = $.extend({}, ChatInputManager._defaultState);
//     },
//
//     _getPlaceholderText: function () {
//         return ChatInputManager._chatState.establishingConnection
//             ? "Please wait..."
//             : ChatInputManager._chatState.overrideMessagePlaceholderText || ChatInputManager._chatState.defaultMessagePlaceholderText;
//     },
//
//     _enableChatInputs: function () {
//         var enable = !ChatInputManager._chatState.establishingConnection && !ChatInputManager._chatState.waitForMessageInput && !ChatInputManager._chatState.disable;
//         if (enable) {
//             $("#tbMessage").prop("disabled", false);
//             $(".chat_input_icon_group").removeClass("disabled");
//         } else {
//             $("#tbMessage").prop("disabled", true);
//             $(".chat_input_icon_group").addClass("disabled");
//         }
//     }
// }
// ChatInputManager.resetState();
//
// var AtlasPcgManager = {
//     _currentState: {
//         pcgWhenEnabled: 'never',
//         botEnabled: false,
//         showPcgHtml: false,
//         pcgHtml: null,
//         previousText: null,
//     },
//     pcgTimer: null,
//
//     isBotEnabled: function () {
//         return AtlasPcgManager._currentState.pcgWhenEnabled === 'bot';
//     },
//
//     clearTimer: function () {
//         if (AtlasPcgManager.pcgTimer) {
//             clearTimeout(AtlasPcgManager.pcgTimer);
//             AtlasPcgManager.pcgTimer = null;
//         }
//     },
//
//     /**
//      * Triggers loading PCG buttons once a space has been entered
//      * Will continue to check every second to load a new set of buttons
//      * If there are no longer any spaces in the text, then clear the buttons
//      *
//      * NOTE: It is safe to call this during the timer window as it will just do nothing until the timer is cleared
//      * @param {string} text message customer is currently typing
//      */
//     handlePcg: function (text) {
//         // If there is text provided, trim off all extra spaces except one
//         // This is to ensure that a trailing space can be used for word boundary
//         // but multiple spaces are not triggered as different requests
//         if (text) {
//             text = text.replace(/\s+$/, ' ');
//         }
//         if (text !== AtlasPcgManager._currentState.previousText // Ensure the text has changed
//             && !AtlasPcgManager.pcgTimer) { // And that we do not currently have a timer waiting
//
//             // If there is not a sendable message or we haven't received a space, turn off the pcg search
//             if (!text || !text.trim() || !text.includes(' ')) {
//                 AtlasPcgManager.setState({showPcgHtml: false, pcgHtml: null});
//                 AtlasPcgManager.renderPcg();
//             }
//             // Otherwise, show the html if PCG is enabled
//             else if (AtlasPcgManager.shouldHandlePcg()) {
//                 // Create our PCG html with only first 150 characters of the text
//                 var chat = $.connection.signalHubWC;
//                 chat.server.getPCG(JSON.stringify({utterance: text.substring(0, 150), programID: programID}))
//                     .done(function (result) {
//                         var pcgHtml = "";
//                         result.forEach(function (btn) {
//                             pcgHtml = pcgHtml + AtlasChat.createButtonMessageHTML([btn], true).outerHTML; //Pass in each button as an "array" and get the resulting HTML of the div object returned
//                         });
//                         AtlasPcgManager.setState({showPcgHtml: true, pcgHtml});
//
//                         // Start a timer to check new text over time
//                         AtlasPcgManager.startTimer();
//
//                         //Render the updated PCG data
//                         AtlasPcgManager.renderPcg();
//                     });
//             }
//
//             // Capture the text to compare against the next loop
//             AtlasPcgManager.setState({previousText: text});
//         }
//     },
//
//     renderPcg: function () {
//         // We should show the HTML if we are asked to
//         if (AtlasPcgManager._currentState.showPcgHtml && AtlasPcgManager._currentState.pcgHtml) {
//             const container = $("#divPcgContainer");
//             container.html(AtlasPcgManager._currentState.pcgHtml);
//             container.addClass("open");
//         }
//         // Otherwise hide it
//         else {
//             $("#divPcgContainer").removeClass("open");
//         }
//     },
//
//     clearState: function () {
//         AtlasPcgManager.setState({botEnabled: false, showPcgHtml: false, pcgHtml: null, previousText: null});
//         AtlasPcgManager.renderPcg();
//     },
//
//     setState: function (newState) {
//         AtlasPcgManager._currentState = {...AtlasPcgManager._currentState, ...newState};
//     },
//
//     shouldHandlePcg: function () {
//         return AtlasPcgManager._currentState.pcgWhenEnabled === 'always'
//             || (AtlasPcgManager.isBotEnabled() && AtlasPcgManager._currentState.botEnabled);
//     },
//
//     startTimer: function () {
//         // Start a timer to check the input every second
//         AtlasPcgManager.pcgTimer = setTimeout(function () {
//             AtlasPcgManager.clearTimer();
//             // Grab the current text and process pcg for the value
//             // Handler will start the next timer if necessary
//             const text = ChatInputManager.getInputText();
//             AtlasPcgManager.handlePcg(text);
//         }, 1000);
//     }
// };
//
// var AtlasRatingManager = {
//     _currentState: {
//         sentimentWhenEnabled: 'never', //never, always, bot
//         satisfactionWhenEnabled: 'never', //never, always
//         isSatisfactionCompleted: false
//     },
//
//     getSatisfactionIsEnabled: function () {
//         //We should ask for satisfaction if it is always enabled by the preference and it hasn't been completed
//         return AtlasRatingManager._currentState.satisfactionWhenEnabled === 'always' && !AtlasRatingManager._currentState.isSatisfactionCompleted;
//     },
//
//     getSentimentIsEnabled: function (messageShouldShowSentiment) {
//         if (AtlasRatingManager._currentState.sentimentWhenEnabled === 'never')
//             return false;
//         else if (AtlasRatingManager._currentState.sentimentWhenEnabled === 'always')
//             return true;
//         else {
//             return messageShouldShowSentiment;
//         }
//     },
//
//     initRatingEvents: function () {
//         // satisfaction
//         $('#satisfaction_close').on({
//             click: function () {
//                 AtlasRatingManager.markSatisfactionComplete();
//                 showScreen("launcher", true);
//             }
//         });
//
//         $('#chat_satisfaction span.satisfaction_rating[data-rating]').click(function () {
//             var satisfactionRating = $(this).data('rating');
//             $("#starSatisfactionTextMain").hide();
//             $("#starSatisfactionTextSecond").show();
//             $(".satisfaction_rating_container").hide();
//             setTimeout(function () {
//                 showScreen("launcher", true);
//             }, 1500);
//             AtlasRatingManager.markSatisfactionComplete();
//
//             //Send to the server
//             AtlasWebchatRating.API.addSatisfactionRating(feedbackID, satisfactionRating);
//         });
//
//         $("#tbRatingMessage")
//             .on('keyup contextmenu input focus blur',
//                 function () {
//                     //Show or hide the submit button
//                     var $textBox = $(this);
//                     var charLength = $textBox.val().length;
//
//                     if (charLength === 0) {
//                         $('#imgRatingMessageSubmit').hide();
//                     } else {
//                         $('#imgRatingMessageSubmit').show();
//                     }
//
//                     //decrement the character counter
//                     var maxLength = this.maxLength;
//                     $("#chat_message_rating_count").text(maxLength - charLength);
//                 })
//             .on('keypress',
//                 function (e) {
//                     //if the enter key was pressed without the shift key...
//                     if (e.which === 13 && !e.shiftKey) {
//                         $('#imgRatingMessageSubmit').click();
//                         e.preventDefault();
//                         updateTextAreaSize($(this));
//                     }
//                 }
//             );
//     },
//
//     //Used to mark that the customer has completed or closed the satisfaction rating
//     markSatisfactionComplete: function () {
//         AtlasRatingManager._currentState.isSatisfactionCompleted = true;
//         setCustomerCookie(customerID, accountID, true, true, true);
//     },
//
//     //Used to set the current state from the cookie
//     setIsSatisfactionComplete: function (newState) {
//         AtlasRatingManager._currentState.isSatisfactionCompleted = newState;
//     },
//
//     setSatisfactionWhenEnabled: function (newState) {
//         AtlasRatingManager._currentState.satisfactionWhenEnabled = newState;
//     },
//
//     setSentimentWhenEnabled: function (newState) {
//         AtlasRatingManager._currentState.sentimentWhenEnabled = newState;
//     }
// }
//
// var AtlasGa = {
//     trackingID: null, //trackingID || 'UA-87249707-5';
//     tracker: function () {
//         if (AtlasGa.trackingID) {
//             if (typeof _atlasGa !== "function") {
//                 (function (i, s, o, g, r, a, m) {
//                     i['GoogleAnalyticsObject'] = r;
//                     i[r] = i[r] || function () {
//                         (i[r].q = i[r].q || []).push(arguments)
//                     }, i[r].l = 1 * new Date();
//                     a = s.createElement(o),
//                         m = s.getElementsByTagName(o)[0];
//                     a.async = 1;
//                     a.src = g;
//                     m.parentNode.insertBefore(a, m)
//                 })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', '_atlasGa');
//
//                 _atlasGa('create', AtlasGa.trackingID, 'auto');
//             }
//             _atlasGa.apply(null, arguments);
//         }
//     }
// }
//
// var AtlasDraggableFrame = {
//     allowLauncherDrag: false,
//     attachDragDrop: function () {
//         if (AtlasDraggableFrame.allowLauncherDrag) {
//             parent.postMessage({attachDragDrop: 1}, "*");
//         }
//     },
//     detachDragDrop: function () {
//         if (AtlasDraggableFrame.allowLauncherDrag) {
//             parent.postMessage({detachDragDrop: 1}, "*");
//         }
//     }
// }
//
// var AtlasExternalContacts = {
//     addContactType: function (displayInfo) {
//         var template = $($("#externalContactTemplate").html());
//
//         // Add click event and track it
//         template.find("a")
//             .attr("href", displayInfo.link)
//             .attr("target", "_blank") //add a target to ensure the link works for mobile and MAC
//             .click(function () {
//                 LogCustomerEvent("ExternalContactMenu", "LinkClicked", displayInfo.label, displayInfo.action);
//                 return true;
//             });
//
//         // Populate display
//         template.find("svg use").attr("xlink:href", "/images/webchat/icons.svg?v=2#" + displayInfo.icon);
//         template.find(".contact_label").text(displayInfo.label);
//
//         // Add contact to list
//         $(".external_contact_menu").append(template);
//     },
//
//     disableContacts: function () {
//         $(".chat_contact_toggle").hide();
//     },
//
//     getDisplayInfo: function (item) {
//         switch (item.contactType) {
//             case "phone":
//                 return {
//                     link: "tel:" + item.value,
//                     label: item.label || "call",
//                     icon: "phone-alt"
//                 };
//             case "email":
//                 return {
//                     link: "mailto:" + item.value,
//                     label: item.label || "email",
//                     icon: "envelope"
//                 };
//             case "text":
//                 return {
//                     link: "sms:" + item.value,
//                     label: item.label || "text",
//                     icon: "comment-alt"
//                 };
//             default:
//                 return null;
//         }
//     },
//
//     toggleMenu: function () {
//         $(".chat_header_top").toggleClass("open");
//         LogCustomerEvent("ExternalContactMenu", $(".chat_header_top.open").length === 1 ? "MenuOpened" : "MenuClosed");
//     },
//
//     initExternalContacts: function (contacts) {
//         try {
//             // Convert to display information, filter out any that failed to convert, and show a max of 5 items
//             contacts = contacts && contacts.map(AtlasExternalContacts.getDisplayInfo).filter(function (x) {
//                 return x;
//             }).slice(0, 5);
//
//             //Ensure there is at least one external contact to add
//             if (contacts && contacts.length > 0) {
//                 //Clear the previous content
//                 $(".external_contact_menu").html("");
//
//                 //Show and add the list of contacts
//                 $(".chat_contact_toggle").show();
//                 $(".chat_header_name").addClass("clickable");
//                 $(".chat_header_top").addClass("open");
//                 contacts.forEach(AtlasExternalContacts.addContactType);
//
//                 // Only add the click handler if we are enabled
//                 $(document).on('click', '.chat_header_name', function () {
//                     AtlasExternalContacts.toggleMenu();
//                 });
//             } else {
//                 AtlasExternalContacts.disableContacts();
//             }
//         } catch (ex) {
//             AtlasExternalContacts.disableContacts();
//             LogIt("Error in initExternalContacts: " + ex.message);
//         }
//     },
// }
//
// var AtlasSignalR = {
//     inMockMode: false,
//
//     connect: function (signalRHub, signalRServer, connTimeout) {
//         setTimeout(function () {
//             signalRHub.start().done(function () {
//                 //init webchat rating system
//                 AtlasWebchatRating.initialize(signalRServer, ChatInputManager);
//
//                 //Tell the parent page that we're initialized
//                 parent.postMessage({init: 1}, "*");
//             });
//         }, connTimeout);
//     },
//
//     initialize: function (signalRServer) {
//         //init webchat rating system
//         AtlasWebchatRating.initialize(signalRServer, ChatInputManager);
//
//         //Tell the parent page that we're initialized
//         parent.postMessage({init: 1}, "*");
//     },
//
//     mock: function (signalHubWc) {
//         AtlasSignalR.inMockMode = true;
//
//         $.ajax({
//             url: "/scripts/atlasmocksignalr.js",
//             dataType: 'script',
//             success: function () {
//
//                 //Mock the known (or important) server methods
//                 AtlasSignalR.mockServerMethods(signalHubWc);
//
//                 //Complete initialization
//                 AtlasSignalR.initialize(signalHubWc.server);
//             },
//             async: true
//         });
//     },
//
//     setAtlasSettings: function (settings) {
//         if (AtlasSignalR.inMockMode) {
//             AtlasSignalR.initializeAtlasSettings(settings);
//         }
//     }
// }
//
// var AtlasWebchat = {
//     DELAY_FIRST_MESSAGE: 1000,
//     DELAY_SUBSEQUENT_MESSAGES: 1200,
//     DELAY_TYPING_INDICATOR: 1000,
//     DELAY_SHOW_MESSAGE_AFTER_TYPING_INDICATOR: 600,
//     DELAY_SHOW_SENTIMENT_WIDGET: 700,
//
//     defaultTarget: "_blank",
//     splitMessageResponsesByNewLine: false,
//
//     //Determine if the webchat is loaded in a mobile browser
//     isMobile: function () {
//         var userAgentDataIsMobile = window.navigator.userAgentData && window.navigator.userAgentData.mobile;
//         var isMobile = typeof userAgentDataIsMobile === 'boolean'
//             ? userAgentDataIsMobile
//             : navigator.userAgent.toLowerCase().includes("mobi");
//         return isMobile;
//     },
//
//     //Tells the parent page to perform a redirect on the current tab/window
//     postRedirect: function (url) {
//         //Post a message to the parent to do an in-place redirect
//         parent.postMessage({
//             redirect: 1,
//             url: url
//         }, "*");
//     },
//
//     //Determines if a link should open as an in-place redirect in the current window or open in a new window
//     redirectUrl: function (url, myParentDomain, target, isDetectedFullScreen, customerId, accountId) {
//         try {
//             //Determine if the destination URL is the same domain as the current domain
//             var extractedParentDomain = AtlasChat.extractDomainFromUrl(myParentDomain);
//             var urlDomain = AtlasChat.extractDomainFromUrl(url);
//             //If they are valid and are the same, Set the minimized flag so that the webchat is minimized on reload
//             if (extractedParentDomain && urlDomain && extractedParentDomain === urlDomain) {
//                 AtlasWebchat.setMinimizedFlagOnFullscreen(isDetectedFullScreen, customerId, accountId);
//             }
//             //Always open the link in a new tab
//             var win = window.open(url, target);
//             if (win !== null) {
//                 win.focus();
//             }
//
//         } catch (ex) {
//             LogIt("Error in redirectUrl: " + ex.message);
//         }
//     },
//
//     //Notifies Atlas system that a customer performed a click on an image, button, HTML anchor, etc.
//     sendLinkClickToAtlas: function ($htmlElement, url, messageType, signalRServer, connectionID, feedbackID) {
//         //send the message to the server
//         signalRServer.sendLinkClick(JSON.stringify({
//             connectionID: connectionID,
//             feedbackID: feedbackID,
//             url: encodeURI(url),
//             action: $htmlElement.data('atlas-action') || null,
//             isCta: $htmlElement.data('atlas-iscta'),
//             messageType: messageType || null,
//             messageToSend: $htmlElement.data('atlas-messagetosend') || null
//         }));
//     },
//
//     //Notifies Atlas system that a customer has cancelled an input form
//     sendInputCancelClickToAtlas: function ($htmlElement, signalRServer, connectionID, feedbackID) {
//
//         //send the message to the server
//         signalRServer.sendInputCancelClick(JSON.stringify({
//             connectionID: connectionID,
//             feedbackID: feedbackID,
//             messageToSend: $htmlElement.data('atlas-messagetosend')
//         }));
//     },
//
//     setMinimizedFlagOnFullscreen: function (isDetectedFullScreen, customerId, accountId) {
//         //If we are in full screen mode due to display size and the flag to be in fullscreen is off (0), set the minimized flag to true, otherwise false
//         setCustomerCookie(customerId, accountId, true, (isDetectedFullScreen && !startFullScreen()), false);
//     }
// }
//
// function handleMessage(event) {
//     if (event.data.kind) {
//         if (event.data.kind === "init") {
//             var id = '';
//             var s = event.data.payload;
//
//             if (s === undefined) {
//                 disableLoader();
//                 return;
//             }
//             if (s.auth_id !== undefined) {
//                 id = s.auth_id;
//             }
//             if (id == '') {
//                 disableLoader();
//                 return;
//             }
//             if (s.min !== undefined) {
//                 startMin = s.min;
//             }
//
//             if (s.anon !== undefined) {
//                 anon = s.anon;
//             }
//
//             if (s.fullscreen !== undefined) {
//                 fullscreen = s.fullscreen;
//             }
//             atlasSettings = s;
//
//             //Tell [mock] SignalR we now have atlasSettings to use
//             AtlasSignalR.setAtlasSettings(atlasSettings);
//
//             if (s.visitorID !== undefined) {
//                 visitorID = s.visitorID;
//             } else {
//                 visitorID = AtlasCookie.getVisitorID();
//             }
//
//             if (s.height !== undefined) {
//                 if (isNumber(s.height) && s.height >= 50 && s.height <= 100) {
//                     customHeight = s.height;
//                     sideHeight = "calc(" + customHeight + "% - 2px)";
//                     curHeight = sideHeight;
//                 }
//             }
//             if (s.width !== undefined) {
//                 if (isNumber(s.width) && s.width >= 325 && s.width <= 525) {
//                     customWidth = s.width;
//                     sideWidth = customWidth + "px";
//                     curWidth = sideWidth;
//                 }
//             }
//
//             var autoLoad = true;
//             if (s.sec !== undefined) {
//                 if (s.sec == 1) {
//                     if (s.aid !== undefined && s.fid !== undefined && s.cid !== undefined) {
//                         customerID = s.cid;
//                         accountID = s.aid;
//                         feedbackID = s.fid;
//                         autoLoad = true;
//                         setCustomerCookie(customerID, accountID, true, false, false);
//                     }
//                     isSecure = true;
//                 } else {
//                     isSecure = false;
//                 }
//             }
//
//             if (s.emoji !== undefined) {
//                 if (s.emoji == 0) {
//                     useEmoji = false;
//                     $('#emoticon').hide();
//                 }
//             }
//             setEmoji();
//             if (s.upload !== undefined) {
//                 if (s.upload == 0) {
//                     useUpload = false;
//                     $('#img_attach').hide();
//                 }
//             }
//             setFileUpload();
//             if (s.del !== undefined) {
//                 if (s.del == 1) {
//                     useDelay = true;
//                 } else {
//                     useDelay = false;
//                 }
//             }
//
//             if (anon === 1 && !startFullScreen()) {
//                 startMin = 1;
//             }
//             if (startFullScreen()) {
//                 curHeight = fullHeight;
//                 curWidth = fullWidth;
//             }
//
//             if (accountID != null) {
//                 var custc = getCustomerCookie(accountID);
//
//                 if (custc != null) {
//                     customerID = custc.customerid;
//                     isRevisit = true;
//                     setStartMinFromCustomerCookie(custc);
//                 }
//             }
//
//             $('#tbTokenAuth').val(id);
//
//
//             if (s.fn !== undefined) {
//                 $('#tbFirstNameIn').val(decodeURI(s.fn));
//             } else {
//                 autoLoad = false;
//             }
//             if (s.ln !== undefined) {
//                 $('#tbLastNameIn').val(decodeURI(s.ln));
//             } else {
//                 autoLoad = false;
//             }
//             if (s.em !== undefined) {
//                 $('#tbEmailIn').val(decodeURI(s.em));
//             } else {
//                 autoLoad = false;
//             }
//             if (s.pn !== undefined) {
//                 $('#tbPhoneIn').val(decodeURI(s.pn));
//             } else {
//                 autoLoad = false;
//             }
//
//             if (s.customer !== undefined) {
//                 if (s.customer.firstName !== undefined) {
//                     $('#tbFirstNameIn').val(decodeURI(s.customer.firstName));
//                 }
//                 if (s.customer.lastName !== undefined) {
//                     $('#tbLastNameIn').val(decodeURI(s.customer.lastName));
//                 }
//                 if (s.customer.phoneNumber !== undefined) {
//                     $('#tbPhoneIn').val(decodeURI(s.customer.phoneNumber));
//                 }
//                 if (s.customer.email !== undefined) {
//                     $('#tbEmailIn').val(decodeURI(s.customer.email));
//                 }
//                 if (s.customer.clientUID !== undefined) {
//                     clientUID = s.customer.clientUID;
//                 }
//             }
//
//             if (s.rtxContext !== undefined) {
//                 rtxContext = s.rtxContext;
//             }
//
//             if (s.calloutHideDelay) {
//                 calloutHideDelay = s.calloutHideDelay;
//             }
//
//             if (s.hideCallout) {
//                 hideCallout = s.hideCallout;
//             }
//
//             if (s.launcherScale) {
//                 var launcherScaleLower = s.launcherScale.toLowerCase();
//                 launcherScale = launcherScaleLower === "small" ? launcherScaleLower : launcherScale;
//             }
//
//             var chat = $.connection.signalHubWC;
//
//             chat.server.sendLoginSetupTokenJson(JSON.stringify({
//                 locationAuthToken: $('#tbTokenAuth').val(),
//                 parentDomain: parentDomain,
//                 customerID: customerID,
//                 customerGuid: '',
//                 skipPrefs: '0',
//                 parentIP: parentIP,
//                 feedbackID: feedbackID,
//                 atlasSettingsJSON: JSON.stringify(atlasSettings),
//                 clientUID: '',
//                 visitorID: visitorID,
//                 userAgent: navigator.userAgent,
//                 isMobile: AtlasWebchat.isMobile(),
//                 isFullScreen: isMediaFullScreen
//             }));
//         } else if (event.data.kind === "domain") {
//             var s = event.data.payload;
//             if (s !== undefined) {
//                 if (s.u !== undefined) {
//                     parentDomain = s.u;
//                     atlasSettings.parentDomain = parentDomain;
//                 }
//                 if (s.i !== undefined) {
//                     parentIP = s.i;
//                     atlasSettings.parentIP = parentIP;
//                 }
//                 if (s.tu !== undefined && s.tu != '') {
//                     parentDomain = s.tu;
//                     atlasSettings.parentDomain = parentDomain;
//                 }
//             }
//         } else if (event.data.kind === "size") {
//             var s = event.data.payload;
//             if (s !== undefined && s.h !== undefined && s.w !== undefined) {
//                 setParentSize(h, w, "");
//             }
//         } else if (event.data.kind === "adjust") {
//             var s = event.data.payload;
//             if (s !== undefined && s.matches !== undefined) {
//                 adjustToMediaParent(s.matches, false);
//             }
//         } else if (event.data.kind === "adjusth") {
//             var s = event.data.payload;
//             if (s !== undefined && s.matches !== undefined) {
//                 adjustToMediaParent(s.matches, true);
//             }
//         } else if (event.data.kind === "ClearCounter") {
//             ClearCounterOnly();
//         } else if (event.data.kind === "sendLoginSetupGUID") {
//             var s = event.data.payload;
//             if (s !== undefined && s.customerGUID !== undefined) {
//                 custGUID = s.customerGUID;
//                 var chat = $.connection.signalHubWC;
//                 showScreen("establish", s.launcherClicked);
//                 chat.server.sendLoginSetupTokenJson(JSON.stringify({
//                     locationAuthToken: $('#tbTokenAuth').val(),
//                     parentDomain: parentDomain,
//                     customerID: customerID,
//                     customerGuid: custGUID,
//                     skipPrefs: '1',
//                     parentIP: parentIP,
//                     feedbackID: feedbackID,
//                     atlasSettingsJSON: JSON.stringify(atlasSettings),
//                     clientUID: clientUID,
//                     visitorID: visitorID,
//                     userAgent: navigator.userAgent,
//                     isMobile: AtlasWebchat.isMobile(),
//                     isFullScreen: isMediaFullScreen
//                 }));
//                 LogPageEvent("ConversationStarted:Unregistered", calloutText, true, true);
//             }
//         } else if (event.data.kind === "setCustomerGUID") {
//             var s = event.data.payload;
//             if (s !== undefined && s.customerGUID !== undefined) {
//                 custGUID = s.customerGUID;
//             }
//         } else if (event.data.kind === "sendLoginSetupCustomer") {
//             var s = event.data.payload;
//             if (s !== undefined && s.customerid !== undefined && s.customerid !== null) {
//                 customerID = s.customerid;
//                 AtlasRatingManager.setIsSatisfactionComplete(s.sat);
//                 setStartMinFromCustomerCookieBool(s.min);
//                 setCustomerCookie(customerID, s.aid, false, s.min, false);
//
//                 //Don't sent the customer GUID because we don't want to auto-create an engagement until they click the launcher button
//                 var chat = $.connection.signalHubWC;
//                 chat.server.sendLoginSetupTokenJson(JSON.stringify({
//                     locationAuthToken: $('#tbTokenAuth').val(),
//                     parentDomain: parentDomain,
//                     customerID: customerID,
//                     customerGuid: '',
//                     skipPrefs: '1',
//                     parentIP: parentIP,
//                     feedbackID: feedbackID,
//                     atlasSettingsJSON: JSON.stringify(atlasSettings),
//                     clientUID: clientUID,
//                     visitorID: visitorID,
//                     userAgent: navigator.userAgent,
//                     isMobile: AtlasWebchat.isMobile(),
//                     isFullScreen: isMediaFullScreen
//                 }));
//             } else {
//                 showStartScreen(false, true);
//                 if (welcomeMessage !== '' && welcomeMessageDelay !== 0) {
//                     SetStartupMessage(welcomeMessage, welcomeMessageDelay);
//                 }
//
//             }
//         } else if (event.data.kind === "ContextChangeExplicitTrigger") {
//             if (!!event.data.payload && !!feedbackID) {
//                 //Update the rtxContext variable to be the one passed in from the client
//                 rtxContext = event.data.payload;
//                 atlasSettings.rtxContext = rtxContext;
//
//                 //FYI: We do not need to update the segmentation context cookie here since it was just obtained by atlasInit
//
//                 //Send context change event to server
//                 $.connection.signalHubWC.server.contextChangeExplicitTrigger(JSON.stringify({
//                     feedbackID: feedbackID,
//                     parentIP: parentIP,
//                     parentDomain: parentDomain,
//                     rtxContext: rtxContext
//                 }));
//             }
//         }
//     }
// }
//
// function isNumber(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }
//
// function isZipCode(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n) && n.toString().length == 5;
// }
//
// function LogPageView(state) {
//
//     AtlasGa.tracker('set', 'dimension1', parentDomain);
//     if (customerID) {
//         AtlasGa.tracker('set', 'dimension2', String(customerID));
//     } else {
//         AtlasGa.tracker('set', 'dimension2', '');
//     }
//     AtlasGa.tracker('set', 'dimension3', state);
//     if (feedbackID) {
//         AtlasGa.tracker('set', 'dimension4', String(feedbackID));
//     } else {
//         AtlasGa.tracker('set', 'dimension4', '');
//     }
//     if (accountID) {
//         AtlasGa.tracker('set', 'dimension5', String(accountID));
//     }
//     if (locationID) {
//         AtlasGa.tracker('set', 'dimension6', String(locationID));
//     }
//     if (programID) {
//         AtlasGa.tracker('set', 'dimension7', String(programID));
//     }
//     //No longer set the page; allow GA to determine on its own
//     //AtlasGa.tracker('set', 'page', window.location.href);
//     AtlasGa.tracker('set', 'dataSource', parentDomain);
//     if (accountID) {
//         AtlasGa.tracker('set', 'appName', String(accountID));
//     }
//     if (locationID) {
//         AtlasGa.tracker('set', 'appId', String(locationID));
//     }
//     if (programID) {
//         AtlasGa.tracker('set', 'appVersion', String(programID));
//     }
//     AtlasGa.tracker('send', 'pageview');
// }
//
// function LogPageEvent(action, label, logToAtlas, logToClient) {
//     AtlasGa.tracker('set', 'dimension1', parentDomain);
//     if (customerID) {
//         AtlasGa.tracker('set', 'dimension2', String(customerID));
//     } else {
//         AtlasGa.tracker('set', 'dimension2', '');
//     }
//     if (feedbackID) {
//         AtlasGa.tracker('set', 'dimension4', String(feedbackID));
//     } else {
//         AtlasGa.tracker('set', 'dimension4', '');
//     }
//     if (accountID) {
//         AtlasGa.tracker('set', 'dimension5', String(accountID));
//     }
//     if (locationID) {
//         AtlasGa.tracker('set', 'dimension6', String(locationID));
//     }
//     if (programID) {
//         AtlasGa.tracker('set', 'dimension7', String(programID));
//     }
//     AtlasGa.tracker('set', 'dataSource', parentDomain);
//     if (accountID) {
//         AtlasGa.tracker('set', 'appName', String(accountID));
//     }
//     if (locationID) {
//         AtlasGa.tracker('set', 'appId', String(locationID));
//     }
//     if (programID) {
//         AtlasGa.tracker('set', 'appVersion', String(programID));
//     }
//     var nonInteraction = false;
//
//     if (action.toLowerCase().indexOf('chatviewed') > -1) {
//         nonInteraction = nonInteractionHitOnLoad;
//     }
//     if (logToAtlas) {
//         AtlasGa.tracker('send', {
//             hitType: 'event',
//             eventCategory: gaEventCategory,
//             eventAction: action,
//             eventLabel: label,
//             nonInteraction: nonInteraction
//         });
//     }
//
//     if (logToClient) {
//         if (clientTrackerID !== '') {
//             //Send a GA event message to the client via a postmessage in atlasinit.js
//             parent.postMessage({
//                 gaevent: 1,
//                 ctn: clientTrackerName,
//                 ec: gaEventCategory,
//                 a: action,
//                 ni: nonInteraction
//             }, "*");
//         }
//         if (googleTagManagerEnabled) {
//             //Send a GTM Event message to the client via a postmessage in atlasinit.js
//             parent.postMessage({
//                 gtmevent: 1,
//                 ec: gaEventCategory,
//                 a: action
//             }, "*");
//         }
//     }
// }
//
// function LogCustomerEvent(category, action, label, value) {
//     $.connection.signalHubWC.server.logClientEvent(JSON.stringify({
//         customerID: customerID,
//         feedbackID: feedbackID,
//         accountID: accountID,
//         locationID: locationID,
//         programID: programID,
//         type: "webchatclient",
//         category: category,
//         action: action,
//         label: label,
//         value: value,
//         userAgent: navigator.userAgent,
//         isMobile: AtlasWebchat.isMobile(),
//         isFullScreen: isMediaFullScreen
//     }));
// }
//
// //Default sizing values for the webchat
// function setDefaultScreenSize() {
//     var heightValue = "calc(100vh - 2px)";
//     var widthValue = "calc(100vw - 5px)";
//     if (isMediaFullScreen) {
//         heightValue = "100%";
//         widthValue = "100%";
//     }
//     $("#resizable").css("max-width", "");
//     $("#resizable").css("width", widthValue);
//     $("#resizable").css("height", heightValue);
//     $("#resizable").css("min-width", "");
//     $("#resizable").css("margin-top", "");
//     $("#resizable").css("margin-left", "");
//     $("#resizable").css("margin-right", "");
//     $("#resizable").addClass("positionabs");
//     $(".content").removeClass("fullscreen");
// }
//
// //Fullscreen mode sizing values, based on the "fullscreen" parameter, not the media matching
// function setFullscreenSize() {
//     setParentSize(sideHeight, fullWidth, "chat");
//     $("#resizable").css("max-width", fullscreen + "vw");
//     $("#resizable").css("min-width", sideWidth);
//     $("#resizable").css("width", "calc(" + fullscreen + "vw - 3px)");
//     $("#resizable").css("height", "calc(100vh - 2px)");
//     $("#resizable").css("margin-top", "2px");
//     $("#resizable").css("margin-left", "auto");
//     $("#resizable").css("margin-right", "auto");
//     $("#resizable").removeClass("positionabs");
//     $(".content").addClass("fullscreen");
//     showTail(false);
// }
//
// function setParentSize(height, width, form) {
//     formDisplay = form;
//     parent.postMessage({
//         size: 1,
//         height: height,
//         width: width,
//         form: form
//     }, "*");
// }
//
// function setStartMinFromCustomerCookieBool(min) {
//     if (min !== undefined && min != null) {
//         if (min && !startFullScreen()) {
//             startMin = 1;
//         } else {
//             startMin = 0;
//         }
//     }
// }
//
// function setStartMinFromCustomerCookie(customerCookie) {
//     if (customerCookie.min !== undefined && customerCookie.min != null) {
//         setStartMinFromCustomerCookieBool(customerCookie.min);
//     }
// }
//
// function showStartScreen(launcherClicked, logEvent) {
//
//     var clearPopout = true;
//     var isOpen = true;
//     if (startFullScreen()) {
//         $(".content").addClass("fullscreen");
//     }
//     if (anon === 0) {
//         if (customerID === null && feedbackID === null) {
//             if (startMin === 1 && !launcherClicked) {
//                 isOpen = false;
//                 showScreen("launcher", launcherClicked);
//                 clearPopout = false;
//             } else {
//                 showScreen("login", launcherClicked);
//             }
//             maybeEnableLoginButton();
//         } else {
//             if (startMin === 1 && !launcherClicked && !hasInteracted) {
//                 isOpen = false;
//                 showScreen("launcher", launcherClicked);
//             } else {
//                 showScreen("chat", launcherClicked);
//             }
//         }
//     } else {
//         if (customerID === null && feedbackID === null) {
//             if (launcherClicked || startFullScreen()) {
//                 //This was an attempt to get the minimize on reload to work but it broke other things so we are commenting it out.
//                 //startMin = 0;
//                 var gCookie = getCustomerGUIDCookie(accountID);
//                 var cGUID = null;
//                 if (gCookie !== null && gCookie.customerGUID) {
//                     cGUID = gCookie.customerGUID;
//                 }
//                 parent.postMessage({
//                     sendLoginSetupGUID: 1,
//                     aid: accountID,
//                     launcherClicked: launcherClicked,
//                     customerGUID: cGUID
//                 }, "*");
//             } else {
//                 isOpen = false;
//                 showScreen("launcher", launcherClicked);
//                 clearPopout = false;
//             }
//         } else if (conversationTimedOut || (startMin === 1 && !launcherClicked && !hasInteracted && !startFullScreen())) {
//             isOpen = false;
//             showScreen("launcher", launcherClicked);
//         } else {
//             showScreen("chat", launcherClicked);
//         }
//     }
//
//     if (clearPopout && !conversationTimedOut) {
//         ClearPopoutText();
//     }
//
//     if (conversationTimedOut && welcomeBackMessage) {
//         SetPopoutText(welcomeBackMessage, 0, true);
//     }
//
//     if (!launcherClicked && logEvent) { //Only log this if it is from a load and not the launcher click
//         var actionName = "ChatViewed:Open";
//         var labelName = "";
//         if (!isOpen) {
//             actionName = "ChatViewed:Closed";
//             labelName = calloutText;
//         }
//         //Do not log the Viewed event to atlas since we have the page load that keeps track of the number of visitors
//         LogPageEvent(actionName, labelName, false, true);
//     }
// }
//
// function adjustToMediaParent(x, h) {
//     if (x) {
//         // mobile (Width such that we should be in full screen mode)
//         isMediaFullScreen = true;
//         if (h) {
//             setMobileHeight = true;
//             curHeight = fullHeight;
//             curWidth = fullWidth;
//         } else {
//             setMobileWidth = true;
//             curWidth = fullWidth;
//             if (setMobileHeight) {
//                 curHeight = fullHeight;
//             } else {
//                 curHeight = sideHeight;
//             }
//         }
//     } else {
//         if (h) {
//             setMobileHeight = false;
//             curHeight = sideHeight;
//             if (setMobileWidth) {
//                 curWidth = fullWidth;
//             } else {
//                 curWidth = sideWidth;
//             }
//         } else {
//             //If we are not matching on a width or height, we are not in a dynamic full-screen mode
//             isMediaFullScreen = false;
//             setMobileWidth = false;
//             curWidth = sideWidth;
//             if (setMobileHeight) {
//                 curHeight = fullHeight;
//             } else {
//                 curHeight = sideHeight;
//             }
//         }
//     }
//
//     //Set the parent size and potentially the launcher height
//     if (fullscreen > 0 && (!x)) {
//         if ($('#tbScreenState').val() === "launcher" || $('#tbScreenState').val() === "") {
//             setLauncherSize();
//         } else {
//             setFullscreenSize();
//         }
//     } else {
//         //Reset to the default size
//         setDefaultScreenSize();
//         if ($('#tbScreenState').val() === "launcher" || $('#tbScreenState').val() === "") {
//             setLauncherSize();
//         } else {
//             setParentSize(curHeight, curWidth, "chat");
//         }
//     }
//
//     // Mobile and fullscreen should not show a tail or have rounded corners
//     if (setMobileHeight || setMobileWidth || startFullScreen() || fullscreen > 0) {
//         showTail(false);
//         $(".content").addClass("fullscreen");
//     } else {
//         showTail(true);
//         $(".content").removeClass("fullscreen");
//     }
// }
//
// function showTail(show) {
//     if (show) {
//         $('.chat_tail').show();
//     } else {
//         $('.chat_tail').hide();
//     }
// }
//
// function showLoginScreen(doShow) {
//     if (doShow === true) {
//         // display login screen elements
//         if (fullscreen > 0 && !isMediaFullScreen) {
//             setFullscreenSize();
//         } else {
//             setParentSize(curHeight, curWidth, "register");
//         }
//         $(".chat_header_logo").show();
//         $(".login_discussion").show();
//         $(".chat_login").show();
//         $(".chat_div").delay(200).fadeIn();
//
//         setLoginButton(true);
//     } else {
//         // hide login screen elements
//         $(".chat_header_logo").hide();
//         $(".login_discussion").hide();
//         $(".chat_login").hide();
//
//         setLoginButton(false);
//     }
// };
//
// function showChatScreen(doShow) {
//
//     if (doShow === true) {
//         // display chat screen elements
//         if (fullscreen > 0 && !isMediaFullScreen) {
//             setFullscreenSize();
//         } else {
//             setParentSize(curHeight, curWidth, "chat");
//         }
//         $(".chat_header_text").show();
//         ChatInputManager.applyState({display: true, disable: false});
//         $(".chat_discussion_div").show();
//         $(".chat_div").delay(200).fadeIn(function () {
//             ScrollToBottom();
//             // This will cause Fotorama to resize on reopens
//             $('.fotorama').resize();
//         });
//         $("#chatMenu").show();
//         $(".chat_error").hide();
//     } else {
//         // hide chat screen elements
//         $(".chat_header_text").hide();
//         ChatInputManager.applyState({display: false, disable: true});
//         $(".chat_discussion_div").hide();
//         $("#chatMenu").hide();
//     }
// };
//
// function showEstablishScreen(doShow) {
//     if (doShow === true) {
//         if (fullscreen > 0 && !isMediaFullScreen) {
//             setFullscreenSize();
//         } else {
//             setParentSize(curHeight, curWidth, "chat");
//         }
//         $(".chat_header_text").show();
//         ChatInputManager.applyState({display: true, establishingConnection: true});
//         $(".chat_establish_connection").show();
//         $(".chat_div").delay(200).fadeIn(function () {
//             ScrollToBottom();
//         });
//     } else {
//         $(".chat_header_text").hide();
//         ChatInputManager.applyState({display: false, establishingConnection: false});
//         $(".chat_establish_connection").hide();
//     }
// }
//
// function setLauncherSize() {
//     if (popoutText != '') {
//         setParentSize(launcherWithPopoutHeight, launcherWithPopoutWidth, "launcher_callout");
//     } else {
//         setParentSize(launcherHeight, launcherWidth, "launcher");
//     }
// }
//
// function showLauncher(doShow) {
//     if (doShow === true) {
//         // display launcher screen elements
//         setLauncherSize();
//
//         $('#launcher').css("transform", "unset");
//         $(".chat_launcher_container").fadeIn();
//
//     } else {
//         // hide launcher screen elements
//         $(".chat_launcher_container").hide();
//     }
// };
//
// function showSatisfactionScreen(doShow) {
//     if (doShow) {
//         // set iframe size
//         setParentSize(satisfactionHeight, satisfactionWidth, "satisfaction");
//         //show satisfaction
//         $('#chat_satisfaction_container').fadeIn();
//     } else {
//         // hide satisfaction
//         $('#chat_satisfaction_container').hide();
//     }
// };
//
// function showScreen(screenName, isFromCustomerClick) {
//
//     $('#tbScreenState').val(screenName);
//
//     if (screenName !== "launcher") {
//         AtlasDraggableFrame.detachDragDrop();
//     }
//
//     if (screenName === "launcher") {
//         AtlasDraggableFrame.attachDragDrop();
//         $(".chat_div").hide();
//         showEstablishScreen(false);
//         showSatisfactionScreen(false);
//         showLauncher(true);
//         if (isFromCustomerClick) {
//             setCustomerCookie(customerID, accountID, true, true, false);
//         }
//     } else if (screenName === "login") {
//         showLauncher(false);
//         showChatScreen(false);
//         showSatisfactionScreen(false);
//         showLoginScreen(true);
//         if (isFromCustomerClick) {
//             setCustomerCookie(customerID, accountID, true, false, false);
//         }
//     } else if (screenName === "chat") {
//         showLauncher(false);
//         showLoginScreen(false);
//         showEstablishScreen(false);
//         showSatisfactionScreen(false);
//         showChatScreen(true);
//         if (isFromCustomerClick) {
//             setCustomerCookie(customerID, accountID, true, false, false);
//         }
//     } else if (screenName === "establish") {
//         showLauncher(false);
//         showLoginScreen(false);
//         showChatScreen(false);
//         showSatisfactionScreen(false);
//         showEstablishScreen(true);
//         if (isFromCustomerClick) {
//             setCustomerCookie(customerID, accountID, true, false, false);
//         }
//     } else if (screenName === "satisfaction") {
//         $(".chat_div").hide();
//         $("#starSatisfactionTextMain").show();
//         $("#starSatisfactionTextSecond").hide();
//         $(".satisfaction_rating_container").show();
//         showLauncher(false);
//         showChatScreen(false);
//         showLoginScreen(false);
//         showSatisfactionScreen(true);
//         setCustomerCookie(customerID, accountID, true, true, false);
//     }
// }
//
// function startFullScreen() {
//     return fullscreen > 0 && startMin === 0;
// }
//
// function CanEnableLogin() {
//     var firstNameReq = true;
//     var lastNameReq = true;
//     var emailReq = true;
//     var pnReq = true;
//     if ($("#tbFirstNameIn").attr("placeholder").indexOf("*") == -1) {
//         firstNameReq = false;
//     }
//     if ($("#tbLastNameIn").attr("placeholder").indexOf("*") == -1) {
//         lastNameReq = false;
//     }
//     if ($("#tbEmailIn").attr("placeholder").indexOf("*") == -1) {
//         emailReq = false;
//     }
//     if (hidePhoneNumber) {
//         pnReq = false;
//     } else {
//         if ($("#tbPhoneIn").attr("placeholder").indexOf("*") == -1) {
//             pnReq = false;
//         }
//     }
//     if (!emailReq && !pnReq) {
//         if (hidePhoneNumber) {
//             emailReq = true;
//         } else {
//             pnReq = true;
//         }
//     }
//     if ((!$("#tbFirstNameIn").val() && firstNameReq) ||
//         (!$("#tbLastNameIn").val() && lastNameReq) ||
//         (!$("#tbEmailIn").val() && emailReq) ||
//         (!$("#tbPhoneIn").val() && pnReq)) {
//         return false;
//     }
//     return true;
// }
//
// function maybeEnableLoginButton() {
//     var cel = CanEnableLogin();
//     if (cel) {
//         setLoginButton(true);
//     } else {
//         setLoginButton(false);
//     }
// };
//
// function disableLoader() {
//     $(".chat_aside").hide()
// }
//
// function ScrollToBottom() {
//     AtlasChat.scrollToBottom("discussion");
// }
//
// function setLoginButton(isEnabled) {
//     if (isEnabled) {
//         document.getElementById("btnSendLogin").disabled = false;
//     } else {
//         document.getElementById("btnSendLogin").disabled = true;
//     }
// }
//
// function IsMinimized() {
//     //This divChatLauncherContainer checks to see if the launcher is loaded
//     //document.visibilityState checks to see if the chat window is the active window
//     return IsLauncherContainerVisible() || document.visibilityState === 'hidden';
// }
//
// ///Replaces $('#divChatLauncherContainer').is(':visible') to avoid browser HTML element reflows
// function IsLauncherContainerVisible() {
//     var returnValue = false;
//     try {
//         var $launcher = $('#divChatLauncherContainer');
//         returnValue = $launcher.length > 0 && ($launcher[0].offsetWidth > 0 || $launcher[0].offsetHeight > 0);
//     } catch (ex) {
//         console.log("Error in IsLauncherContainerVisible: " + ex.message);
//     }
//
//     return returnValue;
// }
//
// function SetMinimizedCounter() {
//     const islauncherVisible = IsLauncherContainerVisible();
//     const isDocumentHidden = document.visibilityState === 'hidden';
//     if (islauncherVisible || isDocumentHidden) { //If the launcher is visible, we are minimized
//         numUnreadMessages += 1;
//         if (islauncherVisible) {
//             $("#divChatLauncherCounter").text(numUnreadMessages.toString());
//             $("#divChatLauncherCounter").show();
//         }
//         if (isDocumentHidden) {
//             parent.postMessage({
//                 setTitle: 1,
//                 counter: numUnreadMessages.toString()
//             }, "*");
//         }
//     } else {
//         ClearMinimizedCounter();
//     }
// }
//
// function ClearMinimizedCounter() {
//     ClearCounterOnly();
//     parent.postMessage({
//         clearTitle: 1
//     }, "*");
// }
//
// function ClearCounterOnly() {
//     $("#divChatLauncherCounter").hide();
//     numUnreadMessages = 0;
// }
//
// function ToggleChatMenu(forceClose) {
//     var $menu = $("#chatMenu ul");
//     if ($menu.hasClass("show") || forceClose) {
//         $menu.removeClass("show");
//     } else {
//         $menu.addClass("show");
//     }
// }
//
// function SetStartupMessage(newText, delay) {
//     calloutText = newText;
//
//     if (!hasInteracted && feedbackID === null && !startFullScreen()) {
//         setTimeout(function () {
//             SetPopoutText(newText, 0, true);
//         }, delay);
//     }
//
//     //If it is non-zero, cause a delay
//     if (calloutHideDelay !== 0) {
//         //Set a minimum number for displaying based on event timing
//         if (calloutHideDelay < 0.15) {
//             calloutHideDelay = 0.15
//         }
//         var newTimeout = delay + calloutHideDelay * 1000;
//         setTimeout(function () {
//             ClearPopoutText();
//         }, newTimeout);
//     }
// }
//
// function SetPopoutText(newText, delay, alwaysShow) {
//     if (IsMinimized() && (isLoadingComplete || hasInteracted || alwaysShow)) {
//         SetMinimizedCounter();
//         if (IsLauncherContainerVisible()) {  //Only do this if the launcher is visible, not if the window is inactive
//             newText = AtlasChat.decodeMyHtml(newText)
//             if (newText.length > 80) {
//                 newText = newText.substring(0, 80) + '...';
//             }
//             popoutText = newText;
//             if (delay === null) {
//                 delay = 0;
//             }
//
//             setParentSize(launcherWithPopoutHeight, launcherWithPopoutWidth, "launcher_callout");
//
//             //Check if we should hide the callout text
//             if (!hideCallout) {
//                 AtlasDraggableFrame.detachDragDrop();
//                 $("#divChatLauncherPopoutText").text(newText);
//                 setTimeout(function () {
//                     // get width of callout, plus right offset, plus 16 for close x
//                     launcherWithPopoutWidth = $("#divChatLauncherPopoutContainer").width() + parseInt($("#divChatLauncherPopoutContainer").css("right")) + 18 + "px";
//                     // get height of larger between launcher height + 10 for shadow and callout height + 32 position from bottom
//                     launcherWithPopoutHeight = Math.max($("#divChatLauncherContainer").height() + 10, $("#divChatLauncherPopoutContainer").height() + 32) + "px";
//
//                     // Only update parent size for callout if we are still in a callout launcher display
//                     if (formDisplay === "launcher_callout") {
//                         setParentSize(launcherWithPopoutHeight, launcherWithPopoutWidth, "launcher_callout");
//                     }
//                 }, 100);
//
//                 setTimeout(function () {
//                     // Only fade in if we are still in a callout launcher display
//                     if (formDisplay === "launcher_callout") {
//                         $("#divChatLauncherPopoutContainer").fadeIn();
//                     }
//                 }, delay);
//             }
//         }
//     }
// }
//
// function ClearPopoutText() {
//     $("#divChatLauncherPopoutContainer").hide();
//     popoutText = '';
//     $("#divChatLauncherPopoutText").text('');
//     if (IsLauncherContainerVisible()) {
//         setParentSize(launcherHeight, launcherWidth, "launcher");
//         AtlasDraggableFrame.attachDragDrop();
//     }
// }
//
// $(".chat_launcher_popout_close_image").on({
//     click: ClearPopoutText
// });
//
// function setEmoji() {
//     if (useEmoji) {
//         $("#emoticon").prop("src", "https://cdn.atlasrtx.com/img/AtlasRTX/wc/Emoticon.png");
//         $('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.atlasrtx.com/img/AtlasRTX/wc/emojionearea.css">');
//         $.loadScript("https://cdn.atlasrtx.com/img/AtlasRTX/wc/emojionearea.js", function () {
//
//             //Create a handler for the emoji click event
//             var injectEmoji = function (button, event) {
//                 var tbHidden = document.getElementById("tbHidden");
//                 var tbMessage = document.getElementById("tbMessage");
//                 tbMessage.value = tbMessage.value + tbHidden.value;
//             };
//
//             //Configure the emoji plugin
//             $("#tbHidden").emojioneArea(AtlasChat.createEmojiOptions("#emoticonSpan", injectEmoji));
//         });
//     }
// }
//
// jQuery.loadScript = function (url, callback) {
//     jQuery.ajax({
//         url: url,
//         dataType: 'script',
//         success: callback,
//         async: true
//     });
// }
//
// function setFileUpload() {
//     if (useUpload) {
//         $("#img_attach").prop("src", "https://cdn.atlasrtx.com/img/AtlasRTX/wc/Attach.png");
//         $.loadScript("https://cdn.atlasrtx.com/img/AtlasRTX/wc/jquery-ui-1.12.1.min.js", function () {
//             $.loadScript("https://cdn.atlasrtx.com/img/AtlasRTX/wc/jquery.ui.widget.js", function () {
//                 $.loadScript("https://cdn.atlasrtx.com/img/AtlasRTX/wc/jquery.iframe-transport.js", function () {
//                     $.loadScript("https://cdn.atlasrtx.com/img/AtlasRTX/wc/jquery.fileupload.js", function () {
//                         //Stuff to do after someScript has loaded
//                         $('#fileupload').fileupload({
//                             dataType: 'json',
//                             dropZone: $(".chat_input"),
//                             add: function (e, data) {
//                                 //grab and validate the file being uploaded
//                                 var uploadFile = data.files[0];
//                                 var validationError = AtlasChat.validateUpload(uploadFile);
//                                 if (validationError) {
//                                     //file invalid, display message
//                                     $("#chatErrorMessage").text(validationError);
//                                     $(".chat_error").show();
//                                 } else {
//                                     //file valid, upload
//                                     data.url = AtlasChat.getFileUploadUrl(feedbackID);
//                                     data.submit();
//                                 }
//                             },
//                             done: function (e, data) {
//                                 if (data.result.success) {
//                                     var chat = $.connection.signalHubWC;
//
//                                     //Remove a possibly visible sentiment rating widget before sending a customer message
//                                     AtlasWebchatRating.removeRatingWidget();
//
//                                     //send the message to the server
//                                     chat.server.sendChatMessageJSON(JSON.stringify({
//                                         fromUserConnectionID: $('#tbConnID').val(),
//                                         fromCustomerID: $('#tbCustomerID').val(),
//                                         feedbackID: $('#tbFeedbackID').val(),
//                                         messageType: "atlasstate",
//                                         message: JSON.stringify(data.result.atlasState),
//                                         parentDomain: parentDomain,
//                                         parentIP: parentIP,
//                                         atlasSettingsJSON: JSON.stringify(atlasSettings)
//                                     }));
//                                     var fName = "";
//                                     try {
//                                         fName = data.result.atlasState.attachmentList[0].filename
//                                     } catch (e) {
//                                         console.log(e);
//                                     }
//                                     LogPageEvent("MessageSubmitted:FileUploaded", fName, true, true);
//                                 }
//                                 $('#uploadprogress .uploadbar').css(
//                                     'height', '0px'
//                                 );
//                                 $('#uploadprogress .uploadbar').css(
//                                     'width', '0%'
//                                 );
//                             },
//                             success: function (response, status) {
//                                 $('#uploadprogress .uploadbar').css(
//                                     'height', '0px'
//                                 );
//                                 $('#uploadprogress .uploadbar').css(
//                                     'width', '0%'
//                                 );
//                             },
//                             error: function (error) {
//                                 console.log("#fileupload.error", error);
//                                 addErrorMessageClient('Apologies, your file was not uploaded. Please try again.', 'Apologies, your file was not uploaded. Please try again.', 0);
//                                 $('#uploadprogress .uploadbar').css(
//                                     'height', '0px'
//                                 );
//                                 $('#uploadprogress .uploadbar').css(
//                                     'width', '0%'
//                                 );
//                             },
//                             progressall: function (e, data) {
//                                 var progress = parseInt(data.loaded / data.total * 100, 10);
//                                 $('#uploadprogress .uploadbar').css(
//                                     'height', '18px'
//                                 );
//                                 $('#uploadprogress .uploadbar').css(
//                                     'width',
//                                     progress + '%'
//                                 );
//                             }
//                         });
//                     });
//                 });
//             });
//         });
//     }
// }
//
// function addErrorMessageUpload(message, datestr) {
//     var div1 = document.createElement("div");
//     div1.classList.add("chat_message_wrapper");
//     div1.classList.add("chat_button_wrapper");
//     var div4 = document.createElement("div");
//     div4.classList.add("chat_button_bubble");
//
//     var span2 = document.createElement("span");
//     span2.classList.add("chat_button_Upload_Error");
//     span2.textContent = AtlasChat.decodeMyHtml(message);
//     span2.setAttribute("data-atlas-value", AtlasChat.decodeMyHtml(message));
//     span2.setAttribute("style", "border: 2px dashed red;");
//
//     var div3 = document.createElement("div");
//     div3.classList.add("chat_user_name");
//     var span1 = document.createElement("span");
//     span1.textContent = "Not Delivered";
//     span1.setAttribute("style", "color:red; font-weight: bold;");
//
//     var clear = document.createElement("div");
//     clear.setAttribute("style", "clear:both");
//
//     div4.appendChild(span2);
//     div1.appendChild(div4);
//     div3.appendChild(span1);
//     div1.appendChild(div3);
//
//     $('#discussion').append(div1);
//     $('#discussion').append(clear);
//     ScrollToBottom();
// }
//
// function addErrorMessageClient(message, label, messageTypeID) {
//     var div1 = document.createElement("div");
//     div1.classList.add("chat_message_wrapper");
//     div1.classList.add("chat_button_wrapper");
//     var div4 = document.createElement("div");
//     div4.classList.add("chat_button_bubble");
//
//     var span2 = document.createElement("span");
//     span2.classList.add("chat_button_suggested_response");
//     span2.classList.add("chat_primary");
//     span2.textContent = AtlasChat.decodeMyHtml(label);
//
//     span2.setAttribute("data-atlas-value", AtlasChat.decodeMyHtml(message));
//     span2.setAttribute("style", "border: 2px dashed red;");
//
//     var div3 = document.createElement("div");
//     div3.classList.add("chat_user_name");
//     var span1 = document.createElement("span");
//     span1.textContent = "Not Delivered. Check connection and click on message above to resend.";
//     span1.setAttribute("style", "color:red; font-weight: bold;");
//
//     var clear = document.createElement("div");
//     clear.setAttribute("style", "clear:both");
//
//     div4.appendChild(span2);
//     div1.appendChild(div4);
//     div3.appendChild(span1);
//     div1.appendChild(div3);
//
//     $('#discussion').append(div1);
//     $('#discussion').append(clear);
//
//     //Add message type and message type id to the rendered HTML element
//     injectMessageDetails(div1, "button", messageTypeID);
//     ScrollToBottom();
// }
//
// function getParameterByName(name, url) {
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, '\\$&');
//     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
// }
//
// function injectMessageDetails(htmlElement, messageType, id) {
//     var $element = $(htmlElement);
//     $element.data("messageType", messageType);
//     $element.data("messageTypeID", id);
// }
//
// !$(function () {
//     window.addEventListener('message', handleMessage, false);
//     parent.postMessage({domain: 1}, "*");
//
//     //We need to get the 'del' parameter via the query parameters due to the lifecycle of the page and delay in this method instead of waiting for the atlasSettings to be passed through
//     var del = getParameterByName('del');
//     if (del != null && del == 1) {
//         useDelay = true;
//     }
//
//     function adjustToMedia(x) {
//         if (x.matches) { // If media query matches
//             // mobile
//             $("aside").css("width", "unset !important");
//             $("aside").css("height", "unset !important");
//
//         } else {
//             // desktop (not mobile)
//             $("#resizable").css("top", "");
//             $("#resizable").css("left", "");
//         }
//
//         if ($('#tbScreenState').val() === "launcher") {
//             setLauncherSize();
//         } else {
//             setParentSize(curHeight, curWidth, "chat");
//         }
//     }
//
//     var x = window.matchMedia("(max-width: 650px)");
//
//     adjustToMedia(x); // Call listener function at run time
//
//     $('#divChatLauncherPopout').on({
//         click: function () {
//             LogPageEvent("ChatOpened:CalloutClicked", calloutText, true, true)
//             launcherClicked();
//         }
//     })
//
//     $('#divChatLauncher').on({
//         click: function () {
//             LogPageEvent("ChatOpened:LauncherClicked", calloutText, true, true);
//             launcherClicked();
//         }
//     });
//
//     function launcherClicked() {
//         hasInteracted = true;
//
//         if (conversationTimedOut) {
//             conversationTimedOut = false;
//             showScreen("establish", true);
//
//             //Call server to create conversation
//             $.connection.signalHubWC.server.createTimedOutConversation(JSON.stringify({
//                 parentDomain: parentDomain,
//                 customerID: customerID,
//                 parentIP: parentIP,
//                 feedbackID: feedbackID,
//                 atlasSettingsJSON: JSON.stringify(atlasSettings)
//             }));
//         } else {
//             showStartScreen(true, true);
//             ClearMinimizedCounter();
//         }
//     }
//
//     $('#chat_close').on({
//         click: function () {
//             hasInteracted = true;
//             ToggleChatMenu(true);
//             ClearMinimizedCounter();
//             LogPageEvent("ChatClosed:Minimized", "", true, true);
//             //Pass in null for the event and true to skip setting the focus of the input box since we are closing
//             AtlasWebchatRating.closeRatingContext(null, true);
//             if (AtlasRatingManager.getSatisfactionIsEnabled() && hasEngaged) {
//                 // show satisfaction panel
//                 showScreen("satisfaction", true);
//             } else {
//                 //Show Launcher
//                 showScreen("launcher", true);
//             }
//         }
//     });
//
//     $('#chat_clear').on({
//         click: function () {
//             ClearPopoutText();
//             ClearMinimizedCounter();
//             hasInteracted = false;
//             ChatInputManager.resetState();
//             AtlasPcgManager.clearState();
//             //Pass in null for the event and true to skip setting the focus of the input box since we are closing
//             AtlasWebchatRating.closeRatingContext(null, true);
//             $("#tbMessage").val("");
//             $("#tbFirstNameIn").val("");
//             $("#tbLastNameIn").val("");
//             $("#tbEmailIn").val("");
//             $("#tbPhoneIn").val("");
//             removeCustomerGUIDCookie(accountID);
//             removeCustomerCookie(accountID);
//             customerID = null;
//             feedbackID = null;
//             custGUID = "";
//             if (anon === 1) {
//                 //Allow the parent to create a new GUID to use for the new customer
//                 parent.postMessage({
//                     setCustomerGUID: 1,
//                     aid: accountID
//                 }, "*");
//             }
//             //Need to clear the WebChatSession
//             $.connection.signalHubWC.server.sendChatDisconnect();
//             LogPageEvent("ChatClosed:HistoryErased", "", true, true);
//             showScreen("launcher", false);
//         }
//     });
//
//     $("#chatMenu").on({
//         click: function (e) {
//             ToggleChatMenu();
//             e.preventDefault();
//         }
//     });
//
//     $("#resizable").on({
//         mouseup: function (e) {
//             var $menu = $("#chatMenu");
//             // Check to make sure the chat menu and none of it's children have been clicked before hiding
//             if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
//                 ToggleChatMenu(true);
//             }
//         }
//     });
//
//     function processMessageServer(messagetype, message, sendername, datestr, messageid, avatarurl,
//                                   delay, messageTypeID, messageTypeIDToRemove, requestSentiment) {
//
//         LogIt('processMessageServer. MessageType: ' + messagetype +
//             ', Message: ' + message +
//             ', SenderName: ' + sendername +
//             ', Date: ' + datestr +
//             ', MessageId: ' + messageid +
//             ', AvatarUrl: ' + avatarurl +
//             ', delay: ' + delay +
//             ', messageTypeID: ' + messageTypeID +
//             ', messageTypeIDToRemove: ' + messageTypeIDToRemove +
//             ', requestSentiment: ' + requestSentiment
//         );
//
//         //Remove previous messages if we're asked to
//         var removedMessage = removePreviousMessages(messagetype, messageTypeIDToRemove);
//
//         //Bypass animation delay if we just removed a message
//         delay = removedMessage ? 0 : delay;
//
//         // datestr is passed in as UTC, this will convert to browser timezone
//         if (datestr) {
//             datestr = AtlasChat.convertToLocalDate(datestr);
//         }
//
//         removeUnusedMessageInputs();
//
//         var htmlElementRendered;
//         var maxMessageDelay = 0;
//
//         //Render message by type
//         if (messagetype === 'image') {
//             htmlElementRendered = addImageMessageServer(message);
//         } else if (messagetype === 'button') {
//             htmlElementRendered = addButtonMessageServer(message, delay);
//         } else if (messagetype === 'inputfield') {
//             htmlElementRendered = addInputFieldMessageServer(message, delay);
//         } else {
//             var encodedName = $('<div />').text(sendername).html();
//
//             if (AtlasWebchat.splitMessageResponsesByNewLine) {
//                 maxMessageDelay = addMultipleChatMessagesServer(encodedName, message, datestr, avatarurl, delay, requestSentiment, messageid, messagetype, messageTypeID);
//             } else {
//                 htmlElementRendered = addChatMessageServer(encodedName, message, datestr, avatarurl, delay, requestSentiment, messageid, messageTypeID, true, true);
//             }
//         }
//
//         //Add message type and message type id to the rendered HTML element
//         if (htmlElementRendered) {
//             injectMessageDetails(htmlElementRendered, messagetype, messageTypeID);
//         }
//
//         ScrollToBottom();
//
//         //Display callout
//         if (messagetype === 'chat') {
//             if (messageTypeID === 54) {  //conversation context change
//                 SetMinimizedCounter();
//             } else {
//                 SetPopoutText(message, 0, false);
//             }
//         }
//
//         //Update message status
//         if (messageid !== '') {
//             $.connection.signalHubWC.server.updateMessageStatus(messageid);
//         }
//
//         return maxMessageDelay;
//     }
//
//     function addMultipleChatMessagesServer(name, message, datestr, avatarurl, delay,
//                                            requestSentiment, messageID, messagetype, messageTypeID) {
//
//         //Remove a possibly visible sentiment rating widget before showing the new message
//         AtlasWebchatRating.removeRatingWidget();
//
//         //Split the message into multiple
//         var messageList = message.split("\n\n\n");
//         var isFirstMessage = true;
//         var maxMessageDelay;
//
//         //Process each message that isn't an empty string
//         messageList.forEach((m, i) => {
//             m = m.trim();
//             if (m) {
//                 var isLastMessage = i === messageList.length - 1;
//                 maxMessageDelay = messageList.length === 1 || delay === 0
//                     ? delay //Use the original delay supplied if there is just one message or if a non-delay is forced (initial load)
//                     : isFirstMessage
//                         ? AtlasWebchat.DELAY_FIRST_MESSAGE //use a short delay if there are more than one messages
//                         : AtlasWebchat.DELAY_FIRST_MESSAGE + (AtlasWebchat.DELAY_SUBSEQUENT_MESSAGES * i); //calculate a larger delay per message for all subsequent messages
//
//                 addOrDelayChatMessageServer(name, m, datestr, avatarurl, maxMessageDelay, requestSentiment, messageID, messagetype, messageTypeID, isFirstMessage, isLastMessage);
//
//                 isFirstMessage = false;
//             }
//         });
//
//         return maxMessageDelay;
//     }
//
//     function addOrDelayChatMessageServer(name, message, datestr, avatarurl, delay,
//                                          requestSentiment, messageID, messagetype, messageTypeID, isFirstMessage, isLastMessage) {
//
//         //Create a function to run now or delayed
//         var createAndInjectFunct = function (typingIndicatorDelay) {
//             var messageHtml = addChatMessageServer(name, message, datestr, avatarurl, typingIndicatorDelay,
//                 requestSentiment, messageID, messageTypeID, isFirstMessage, isLastMessage);
//
//             //Add message type and message type id to the rendered HTML element
//             injectMessageDetails(messageHtml, messagetype, messageTypeID);
//         };
//
//         if (delay === 0) {
//             createAndInjectFunct(delay);
//         } else {
//             //Render the message bubble in a moment...
//             setTimeout(createAndInjectFunct, delay, AtlasWebchat.DELAY_TYPING_INDICATOR);
//         }
//     }
//
//     function addChatMessageServer(name, message, datestr, avatarurl, delay,
//                                   requestSentiment, messageID, messageTypeID, isFirstMessage, isLastMessage) {
//
//         //Generate the HTML that represents a message
//         var messageHtml = AtlasChat.createLeftMessageHTML(name, message, datestr, avatarurl, delay, !isFirstMessage);
//
//         //Add to the list of messages
//         $('#discussion').append(messageHtml);
//         $('#discussion').append(AtlasChat.createClearDiv());
//
//         //Grab the message text element
//         var $messageHtml = $(messageHtml);
//         var messageText = $messageHtml.find(".chat_message_bubble > span")[0];
//
//         if (delay > 0) {
//             //Grab the typing indicator element
//             var typingIndicator = $messageHtml.find(".typing-indicator")[0];
//
//             //swap the typing indicator and the message text
//             setTimeout(function () {
//                 //Hide the typing indicator
//                 var d5 = document.getElementById(typingIndicator.id);
//                 if (d5 !== null && d5 !== undefined) {
//                     $(d5).remove();
//                 }
//
//                 //Delay showing the message by 600 ms
//                 $(document.getElementById(messageText.id)).show(AtlasWebchat.DELAY_SHOW_MESSAGE_AFTER_TYPING_INDICATOR);
//
//                 //Request sentiment rating if the current message isn't from a user,
//                 //  the preference is configured to ask, and/or the message is configured to ask
//                 if (isLastMessage
//                     && messageTypeID !== 31 //LiveMessageUser
//                     && AtlasRatingManager.getSentimentIsEnabled(requestSentiment)) {
//
//                     setTimeout(function () {
//                         ScrollToBottom();
//                         AtlasWebchatRating.injectRatingWidget($messageHtml, feedbackID, messageID);
//                     }, AtlasWebchat.DELAY_SHOW_SENTIMENT_WIDGET);
//                 }
//             }, delay);
//         } else {
//             //display the message text
//             messageText.setAttribute("style", "display:inline;");
//         }
//         ScrollToBottom();
//
//         return messageHtml;
//     }
//
//     function addButtonMessageServer(message, delay) {
//         //Grab the button and clear divs
//         var buttonHTML = AtlasChat.createButtonMessageHTML(message);
//
//         var placeholder = getInputPlaceholderFromMessageList(message);
//         if (placeholder) {
//             ChatInputManager.applyState({overrideMessagePlaceholderText: placeholder, waitForMessageInput: true});
//         }
//
//         var clearDivHTML = AtlasChat.createClearDiv();
//
//         //Display in the message list
//         if (delay > 0) {
//             setTimeout(function () {
//                 $('#discussion').append(buttonHTML).show(1200);
//                 $('#discussion').append(clearDivHTML).show(1200);
//                 ScrollToBottom();
//             }, delay + 1000);
//         } else {
//             $('#discussion').append(buttonHTML);
//             $('#discussion').append(clearDivHTML);
//             ScrollToBottom();
//         }
//
//         return buttonHTML;
//     }
//
//     function addImageMessageServer(message) {
//         var imageHTML = AtlasChat.addImageMessage(message);
//         $('#discussion').append(imageHTML);
//         ScrollToBottom();
//         return imageHTML;
//     }
//
//     function addInputFieldMessageServer(message, delay) {
//
//         //Calculate the input field HTML
//         var inputFieldHTML = AtlasChat.createInputFieldMessageHTML(message, ChatInputManager.getDefaultPlaceholderText(), false);
//
//         var placeholder = getInputPlaceholderFromMessageList(message);
//         if (placeholder) {
//             ChatInputManager.applyState({waitForMessageInput: true, overrideMessagePlaceholderText: placeholder});
//         }
//
//         //Display in the message list
//         if (delay > 0) {
//             setTimeout(function () {
//                 $('#discussion').append(inputFieldHTML).show(1200);
//                 ScrollToBottom();
//             }, delay + 1000);
//         } else {
//             $('#discussion').append(inputFieldHTML);
//             ScrollToBottom();
//         }
//
//         return inputFieldHTML;
//     }
//
//     // This function matches the logic found at getButtonsFromApiState for placeholder checks
//     function getInputPlaceholderFromMessageList(message) {
//         var placeholdertext;
//         $.each(message, function (i, item) {
//
//             //WebChat supplies an array of strings representing button/input JSON
//             var button = JSON.parse(item);
//
//             if (button.placeholdertext) {
//                 placeholdertext = button.placeholdertext;
//             }
//         });
//         return placeholdertext;
//     }
//
//     function AddMessageClient(messageType, message, datestr, label, messageTypeID) {
//         // We are receiving a client message (on a new load or attachment), so they have engaged
//         hasEngaged = true;
//         if (messageType == 'atlasstate') {
//             var atlasState = JSON.parse(message);
//             if (atlasState.attachmentList) {
//                 atlasState.attachmentList.forEach(function (m) {
//                     addAttachmentMessageClient(m, datestr);
//                 });
//             }
//         } else if (messageType == 'sendError') {
//             addErrorMessageClient(message, label, messageTypeID);
//         } else {
//             removeUnusedMessageInputs();
//             addChatMessageClient(message, datestr);
//         }
//     }
//
//     function addChatMessageClient(message, datestr) {
//         $('#discussion').append(AtlasChat.createRightMessageHTML(message, $('#tbUseLightClientText').val()));
//         $('#discussion').append(AtlasChat.createClearDiv());
//         ScrollToBottom();
//     }
//
//     function addAttachmentMessageClient(message, datestr) {
//         var div1 = document.createElement("div");
//         div1.classList.add("chat_message_wrapper");
//         div1.classList.add("chat_message_wrapper_right");
//         var div4 = document.createElement("div");
//         div4.classList.add("chat_message_bubble");
//         div4.classList.add("chat_primary_bg");
//         if ($('#tbUseLightClientText').val() != "False") {
//             div4.classList.add("chat_bubble_right");
//         } else {
//             div4.classList.add("chat_bubble_right_darktext");
//         }
//         var span2 = document.createElement("span");
//         span2.innerHTML = "File attached: <a class=\"chat-link\" target=\"_blank\" href=\"" + AtlasChat.decodeMyHtml(message.url) + "\">" + AtlasChat.decodeMyHtml(message.filename) + "</a>";
//         var clear = document.createElement("div");
//         clear.setAttribute("style", "clear:both");
//
//         div4.appendChild(span2);
//         div1.appendChild(div4);
//
//         $('#discussion').append(div1);
//         $('#discussion').append(clear);
//         ScrollToBottom();
//     }
//
//     function createSpacer() {
//         var div1 = document.createElement("div");
//         div1.classList.add("chat_discussion_spacer");
//         $('#discussion').append(div1);
//     }
//
//     function removePreviousMessages(messageType, messageTypeIDToRemove) {
//         var removed = false;
//
//         //If we have an id...
//         if (messageTypeIDToRemove) {
//             //...grab all messages in reverse order
//             var messageList = $("#discussion .chat_message_wrapper").get().reverse();
//
//             //remove each matching message until we find a customer message.
//             //Customer messages are found by their lack of messageTypeID
//             $.each(messageList, function (index, element) {
//                 var $element = $(element);
//                 var id = $element.data("messageTypeID");
//                 var type = $element.data("messageType");
//
//                 //If we don't have a messageTypeID it means we found a customer message, so exit
//                 if (!id || !type) {
//                     return false;
//                 } else if (id === messageTypeIDToRemove && type === messageType) {
//                     //remove it
//                     $element.remove();
//                     removed = true;
//                 }
//             });
//         }
//
//         return removed;
//     }
//
//     $('#tbMessage').on({
//         input: function () {
//             var text = $(this).val();
//             if ($(this).attr("preventEnter") == undefined) {
//                 text = text.replace(/[\n]/g, "<br>&#8203;");
//             }
//             measurer.html(text);
//             measurer.width($(this).width());
//             updateTextAreaSize($(this));
//         },
//         focus: function () {
//             initMeasurerFor($(this));
//         },
//         keypress: function (e) {
//             if (e.which === 13) {
//                 if (!e.shiftKey) {
//                     $('#img_submit').click();
//                     e.preventDefault();
//                     updateTextAreaSize($(this));
//                 }
//             }
//         }
//     });
//
//     $('.login_text_box').on({
//         input: function () {
//             maybeEnableLoginButton();
//         },
//         keypress: function (e) {
//             maybeEnableLoginButton();
//         }
//     });
//     $('#btnSendLogin').on({
//         click: function () {
//             // Call the Send method on the hub.
//             var cel = CanEnableLogin();
//             if (cel) {
//                 setLoginButton(false);
//                 chat.server.sendSetupMessageToken($.connection.hub.id, $("#tbFirstNameIn").val(), $("#tbLastNameIn").val(), $("#tbEmailIn").val(), $("#tbPhoneIn").val(), $("#tbTokenAuth").val(), parentDomain, parentIP, JSON.stringify(atlasSettings), clientUID, visitorID);
//                 LogPageEvent("ConversationStarted:RegistrationFormFilled", "", true, true)
//             } else {
//                 alert("All fields are required.");
//             }
//             return false;
//         }
//     });
//
//     LogIt("setting $.connection.hub.logging = " + useDebug);
//     $.connection.hub.logging = useDebug;
//
//     var chat = $.connection.signalHubWC;
//     var tryingToReconnect = false;
//
//     $.connection.hub.stateChanged(function (state) {
//         if (useDebug) {
//             var stateConversion = {0: 'connecting', 1: 'connected', 2: 'reconnecting', 4: 'disconnected'};
//             console.log('wc2: hub.stateChanged, from: ' + stateConversion[state.oldState] +
//                 ' to: ' + stateConversion[state.newState] + ', id=' + $.connection.hub.id);
//         }
//     });
//     $.connection.hub.reconnecting(function () {
//         LogIt("wc2: hub.reconnecting, id=" + $.connection.hub.id);
//         tryingToReconnect = true;
//     });
//     $.connection.hub.reconnected(function () {
//         LogIt("wc2: hub.reconnected, id=" + $.connection.hub.id);
//         tryingToReconnect = false;
//     });
//     $.connection.hub.connectionSlow(function () {
//         LogIt("wc2: hub.connectionSlow, id=" + $.connection.hub.id);
//     });
//     $.connection.hub.disconnected(function () {
//         LogIt("wc2: hub.disconnected, id=" + $.connection.hub.id);
//         if ($.connection.hub.lastError) {
//             LogIt("wc2: hub.disconnected.lastError: " + $.connection.hub.lastError.message);
//         }
//
//         //Reconnect in a few seconds
//         setTimeout(function () {
//             tryingToReconnect = true;
//
//             $.connection.hub.start().done(function () {
//                 LogIt("wc2: hub.disconnected.start, id=" + $.connection.hub.id);
//                 tryingToReconnect = false;
//                 if ($.connection.hub.id !== $('#tbConnID').val()) {
//                     // connection id has changed, let server know that this web chat session has a new connection id
//                     var chat = $.connection.signalHubWC;
//                     chat.server.updateWebchatConnectionID($('#tbWebChatSessionID').val(), $.connection.hub.id);
//                 }
//             });
//         }, 2500);
//     });
//     $.connection.hub.error(function (error) {
//         LogIt('Connection error: ' + error);
//     });
//
//     $.connection.signalHubWC.client.conversationTimedOut = function (welcomeBackText) {
//         LogIt('$.connection.signalHubWC.client.conversationTimedOut. welcomeBackText: ' + welcomeBackText);
//         hasInteracted = false;
//         conversationTimedOut = true;
//         welcomeBackMessage = welcomeBackText;
//     }
//
//     $.connection.signalHubWC.client.conversationTimedOutNewConvo = function (feedbackid) {
//         LogIt('$.connection.signalHubWC.client.conversationTimedOutNewConvo. feedbackid: ' + feedbackid);
//
//         $('#tbFeedbackID').val(feedbackid);
//         feedbackID = feedbackid;
//
//         showStartScreen(true, false);
//         isLoadingComplete = true;
//     };
//
//     $.connection.signalHubWC.client.receiveMessageServerJSON = function (payload) {
//         LogIt('$.connection.signalHubWC.client.receiveMessageServerJSON. payload: ' + payload);
//
//         var payloadJSON = JSON.parse(payload);
//         //Process using JSON values
//         processMessageServer(payloadJSON.messageType, payloadJSON.message, payloadJSON.senderName, payloadJSON.date,
//             payloadJSON.messageID, payloadJSON.avatarUrl, payloadJSON.delay, payloadJSON.messageTypeID,
//             payloadJSON.messageTypeIDToRemove, payloadJSON.requestSentiment);
//     };
//
//     $.connection.signalHubWC.client.receiveMessageServer = function (payload) {
//         LogIt('$.connection.signalHubWC.client.receiveMessageServer. payload: ' + payload);
//
//         var payloadJSON = JSON.parse(payload);
//
//         //Process images first
//         if (payloadJSON.images) {
//             //Reduce the image delay by 100 ms
//             var imageDelay = (payloadJSON.delay > 100) ? payloadJSON.delay - 100 : payloadJSON.delay;
//
//             processMessageServer("image", payloadJSON.images, payloadJSON.senderName, payloadJSON.date,
//                 "", payloadJSON.avatarUrl, imageDelay, payloadJSON.messageTypeID,
//                 payloadJSON.messageTypeIDToRemove, false);
//         }
//
//         //Process message text
//         var maxMessageDelay = processMessageServer("chat", payloadJSON.messageText, payloadJSON.senderName, payloadJSON.date,
//             payloadJSON.messageID, payloadJSON.avatarUrl, payloadJSON.delay, payloadJSON.messageTypeID,
//             payloadJSON.messageTypeIDToRemove, payloadJSON.requestSentiment);
//
//         //Override the delay provided from the server when we are processing HTML elements after multiple messages
//         maxMessageDelay = maxMessageDelay > 0 ? maxMessageDelay + AtlasWebchat.DELAY_SUBSEQUENT_MESSAGES : payloadJSON.delay;
//
//         //Process input fields
//         if (payloadJSON.inputFields) {
//             processMessageServer("inputfield", payloadJSON.inputFields, payloadJSON.senderName, payloadJSON.date,
//                 "", payloadJSON.avatarUrl, maxMessageDelay, payloadJSON.messageTypeID,
//                 payloadJSON.messageTypeIDToRemove, false);
//         }
//
//         //Process buttons
//         if (payloadJSON.buttons) {
//             processMessageServer("button", payloadJSON.buttons, payloadJSON.senderName, payloadJSON.date,
//                 "", payloadJSON.avatarUrl, maxMessageDelay, payloadJSON.buttonMessageType,
//                 payloadJSON.messageTypeIDToRemove, false);
//         }
//
//         // If PCG is driven by the bot, update whether or not this message should trigger PCG
//         if (AtlasPcgManager.isBotEnabled()) {
//             AtlasPcgManager.setState({botEnabled: payloadJSON.requestPcg});
//         }
//     };
//
//     $.connection.signalHubWC.client.receiveMessageClient = function (messagetype, message, datestr) {
//         LogIt('$.connection.signalHubWC.client.receiveMessageClient');
//         var encodedMsg = message;
//
//         AddMessageClient(messagetype, encodedMsg, datestr, encodedMsg, 0);
//         ScrollToBottom();
//     };
//
//     $.connection.signalHubWC.client.receiveConnectionStringSetupMessage = function (connectionid) {
//         LogIt("wc2: hub.client.receiveConnectionStringSetupMessage, id=" + connectionid);
//         tryingToReconnect = false;
//
//         if ($('#tbWebChatSessionID').val()) {
//             // connection id has changed, let server know that this web chat session has a new connection id
//             var chat = $.connection.signalHubWC;
//             chat.server.updateWebchatConnectionID($('#tbWebChatSessionID').val(), connectionid);
//         }
//         $('#tbConnID').val(connectionid);
//     };
//
//     $.connection.signalHubWC.client.receiveWebChatSessionID = function (sessionID) {
//         LogIt('$.connection.signalHubWC.client.receiveWebChatSessionID');
//         $('#tbWebChatSessionID').val(sessionID);
//     };
//
//     $.connection.signalHubWC.client.receiveSetupErrorMessage = function (msg) {
//         LogIt('$.connection.signalHubWC.client.receiveSetupErrorMessage');
//
//         if (anon === 1) {
//             showScreen("launcher", false);
//             setTimeout(function () {
//                 SetPopoutText(msg, 0, true);
//             }, 400);
//         } else {
//             document.querySelector(".chat_error_text").classList.add("show");
//             document.getElementById("lblLogInfo").innerHTML = AtlasChat.decodeMyHtml(msg);
//             setLoginButton(true);
//             showScreen("login", false);
//         }
//     };
//
//     $.connection.signalHubWC.client.receiveLoginSetup = function (loginsetupparams) {
//         LogIt('$.connection.signalHubWC.client.receiveLoginSetup');
//
//         // Store segmentation context for future opens
//         if (atlasSettings.rtxContext && atlasSettings.rtxContext.segmentationContext) {
//             parent.postMessage({
//                 setSegmentationContextCookie: 1,
//                 auth_id: atlasSettings.auth_id,
//                 segmentationContext: atlasSettings.rtxContext.segmentationContext,
//             }, "*");
//         }
//
//         var primaryColor = loginsetupparams.primaryColor;
//         // set Preferences from loginsetupparams
//         if (primaryColor) {
//             var secondaryColor = loginsetupparams.secondaryColor;
//             var useSecondaryColorOnWhite = loginsetupparams.useSecondaryColorOnWhite;
//             var onWhiteColor = useSecondaryColorOnWhite ? secondaryColor : primaryColor;
//
//             $("<style>a:hover, .chat_primary { color: " + onWhiteColor + "}</style>").appendTo("head");
//             $("<style>.chat_primary_bg { background-color: " + primaryColor + "; color: " + secondaryColor + "; }</style>").appendTo("head");
//             $("<style>svg.chat_primary, div.chat_primary > svg { fill: " + primaryColor + "}</style>").appendTo("head");
//             $("<style>.external_contact_menu a:link, .external_contact_menu a:hover, .external_contact_menu a:visited { color: " + secondaryColor + "}</style>").appendTo("head");
//
//             /* Override registered mode border colors */
//             $("<style>.login_text_box:focus, .login_text_box:active { border-color: " + onWhiteColor + "}</style>").appendTo("head");
//
//             /* Override image border to match background color of avatar for transparent images */
//             $("<style>.chat_avatar { border-color: " + primaryColor + "}</style>").appendTo("head");
//
//             /* Override generic chat header */
//             $("<style>.chat_header_top { background: " + primaryColor + "; color: " + secondaryColor + "; }</style>").appendTo("head");
//
//             /* Override generic input form color */
//             $("<style>.chat_button_suggested_response_field.chat_primary { border-color: " + onWhiteColor + "; color: " + onWhiteColor + " }</style > ").appendTo("head");
//             $("<style>.chat_field_submit.chat_primary_bg { background-color: " + onWhiteColor + "; }</style >").appendTo("head");
//
//             /* Override chat buttons */
//             $("<style>.chat_button_link.chat_primary, .chat_button_redirect.chat_primary, .chat_button_suggested_response.chat_primary, .chat_button_suggested_response_field.chat_primary { border-color: " + onWhiteColor + "; color: " + onWhiteColor + " }</style > ").appendTo("head");
//
//             /* Override specific to launcher and satisfaction */
//             if (loginsetupparams.launcherPrimaryColor) {
//                 $("<style>#chat_satisfaction, .chat_launcher_outer.chat_primary_bg { background:" + loginsetupparams.launcherPrimaryColor + "; }</style>").appendTo("head");
//                 $("<style>.chat_launcher_icon_tail.chat_primary > svg { fill:" + loginsetupparams.launcherPrimaryColor + "; }</style>").appendTo("head");
//             }
//
//             if (loginsetupparams.launcherSecondaryColor) {
//                 $("<style>#chat_satisfaction, .chat_launcher_outer.chat_primary_bg { color:" + loginsetupparams.launcherSecondaryColor + " }</style>").appendTo("head");
//             }
//
//             if (loginsetupparams.launcherCounterBackgroundColor) {
//                 $("#divChatLauncherCounter").css("background-color", loginsetupparams.launcherCounterBackgroundColor);
//             }
//
//             /* Specific override header colors */
//             if (loginsetupparams.headerColor) {
//                 $("<style>.chat_header_top { background: " + loginsetupparams.headerColor + "; }</style>").appendTo("head");
//             }
//
//             if (loginsetupparams.headerTextColor) {
//                 $("<style>.chat_header_top { color: " + loginsetupparams.headerTextColor + "; }</style>").appendTo("head");
//             }
//
//             /* Update button colors */
//             if (loginsetupparams.buttonMessageBackgroundColor) {
//                 $("<style>.chat_button_suggested_response.chat_primary, .chat_button_link.chat_primary, .chat_button_redirect.chat_primary { background-color: " + loginsetupparams.buttonMessageBackgroundColor + " }</style>").appendTo("head");
//             }
//
//             var buttonMessageForeground = loginsetupparams.buttonMessageForegroundColor || onWhiteColor;
//             if (buttonMessageForeground) {
//                 $("<style>.chat_button_suggested_response.chat_primary, .chat_button_link.chat_primary, .chat_button_redirect.chat_primary { border-color: " + buttonMessageForeground + "; color: " + buttonMessageForeground + " }</style >").appendTo("head");
//             }
//
//             var headerIconBackgroundColor = loginsetupparams.headerIconBackgroundColor || primaryColor;
//             if (headerIconBackgroundColor) {
//                 $("#chatHeaderIcon").css("background-color", loginsetupparams.headerIconBackgroundColor);
//             }
//
//             var avatarBackgroundColor = loginsetupparams.avatarIconBackgroundColor || primaryColor;
//             if (avatarBackgroundColor) {
//                 /* Remove chat_avatar_backgroundCircle and chat_avatar_user over Apr 14th, 2021 */
//                 $("<style>.chat_avatar.chat_primary_bg, .chat_avatar_backgroundCircle.chat_primary_bg, .chat_avatar_user.chat_primary_bg  { background-color: " + avatarBackgroundColor + " }</style>").appendTo("head");
//                 $("<style>.chat_avatar { border-color: " + avatarBackgroundColor + " }</style>").appendTo("head");
//             }
//
//             /* Set close icon, registered mode start chatting, submit buttons, menu items color */
//             $("<style>.on_white_color { color: " + onWhiteColor + "; }</style >").appendTo("head");
//         }
//
//         if (anon === 0) {
//             if (loginsetupparams.headerLogoURL != '' && loginsetupparams.headerLogoURL != null) {
//                 $("#img_header_logo").prop("src", loginsetupparams.headerLogoURL);
//             } else {
//                 $("#img_header_logo").prop("src", "https://static.atlasrtx.com/public/AtlasRTX/Platform/Logo/atlasrtx-logo-black.svg");
//             }
//         }
//
//         if (loginsetupparams.btnSubmitText != '' && loginsetupparams.btnSubmitText != null) {
//             $(".login_text").text(loginsetupparams.btnSubmitText);
//         }
//
//         if (loginsetupparams.headerText != '' && loginsetupparams.headerText != null) {
//             $(".login_header_salutation_small").text(loginsetupparams.headerText);
//         }
//
//         if (loginsetupparams.headerTitleText != '' && loginsetupparams.headerTitleText != null) {
//             $(".login_header_salutation_big").text(loginsetupparams.headerTitleText);
//         }
//
//         if (loginsetupparams.footerText != '' && loginsetupparams.footerText != null) {
//             $(".footer_text").text('');
//             $(".footer_text").append(loginsetupparams.footerText);
//         }
//         if (loginsetupparams.footerLinkTitle) {
//             $(".footer_link").prop('href', loginsetupparams.footerLink);
//             $(".footer_link").html(loginsetupparams.footerLinkTitle);
//         } else {
//             $(".footer_divider").hide();
//             $(".footer_link").hide();
//         }
//
//         if (loginsetupparams.messagePlaceholderText != '' && loginsetupparams.messagePlaceholderText != null) {
//             ChatInputManager.applyState({defaultMessagePlaceholderText: loginsetupparams.messagePlaceholderText});
//         }
//
//         var hasMessage = false;
//         if (loginsetupparams.welcomeMessage != '' && loginsetupparams.welcomeMessage != null && loginsetupparams.welcomeMessageDelay != '' && loginsetupparams.welcomeMessageDelay != null && loginsetupparams.welcomeMessageDelay != 0) {
//             welcomeMessage = loginsetupparams.welcomeMessage;
//             welcomeMessageDelay = loginsetupparams.welcomeMessageDelay;
//             hasMessage = true;
//         }
//
//         if (loginsetupparams.sentimentWhenEnabled) {
//             AtlasRatingManager.setSentimentWhenEnabled(loginsetupparams.sentimentWhenEnabled);
//         }
//         if (loginsetupparams.satisfactionWhenEnabled) {
//             AtlasRatingManager.setSatisfactionWhenEnabled(loginsetupparams.satisfactionWhenEnabled);
//         }
//         if (loginsetupparams.pcgWhenEnabled) {
//             AtlasPcgManager.setState({pcgWhenEnabled: loginsetupparams.pcgWhenEnabled});
//         }
//
//         AtlasWebchat.splitMessageResponsesByNewLine = loginsetupparams.splitMessageResponsesByNewLine;
//
//         $("#chatHeaderIcon > img").prop("src", loginsetupparams.headerIconURL || ATLAS_DEFAULT_LAUNCHER_LOGO);
//
//         // launcher icon
//         var launcherIconURL = loginsetupparams.launcherIconURL || ATLAS_DEFAULT_LAUNCHER_LOGO;
//         $("<style>.chat_launcher_open_icon_div { background-image: url('" + launcherIconURL + "')}</style>").appendTo("head");
//
//         //set a smaller logo
//         var smallMode = launcherScale === "small";
//         if (smallMode) {
//             $(".chat_launcher, .chat_launcher_popout_container").addClass("launcherScaleSmall");
//             launcherHeight = "88px";
//             launcherWidth = "72px";
//             launcherWithPopoutHeight = "88px";
//         }
//
//         //only set the text if we're not in "small" mode
//         if (!smallMode && loginsetupparams.btnStartText) {
//             $(".chat_launcher_open_text_div").text(loginsetupparams.btnStartText).show();
//         }
//
//         if (loginsetupparams.showHeaderIcon != null) {
//             if (!loginsetupparams.showHeaderIcon) {
//                 $("#chatHeaderIcon").hide();
//             } else {
//                 $("#chatHeaderIcon").show();
//             }
//         }
//
//         if (loginsetupparams.firstNameLabel) {
//             $("#tbFirstNameIn").attr("placeholder", loginsetupparams.firstNameLabel);
//         }
//         if (loginsetupparams.lastNameLabel) {
//             $("#tbLastNameIn").attr("placeholder", loginsetupparams.lastNameLabel);
//         }
//         if (loginsetupparams.emailLabel) {
//             $("#tbEmailIn").attr("placeholder", loginsetupparams.emailLabel);
//         }
//         if (loginsetupparams.phoneNumberLabel) {
//             $("#tbPhoneIn").attr("placeholder", loginsetupparams.phoneNumberLabel);
//         }
//         if (loginsetupparams.eraseHistoryLabel) {
//             $("#chat_clear").text('');
//             $("#chat_clear").append(loginsetupparams.eraseHistoryLabel);
//         }
//         if (loginsetupparams.termsLabel) {
//             $("#termsText2").text('');
//             $("#termsText2").append(loginsetupparams.termsLabel);
//         }
//
//         if (loginsetupparams.hidePhoneNumber != null) {
//             hidePhoneNumber = loginsetupparams.hidePhoneNumber;
//             if (loginsetupparams.hidePhoneNumber) {
//                 $("#tbPhoneIn").hide();
//                 $("#divPhoneLine").hide();
//             } else {
//                 $("#tbPhoneIn").show();
//                 $("#divPhoneLine").show();
//             }
//         }
//
//         //Handle the Setting of External Contacts
//         AtlasExternalContacts.initExternalContacts(loginsetupparams.externalContacts);
//
//         nonInteractionHitOnLoad = loginsetupparams.nonInteractionHitOnLoad;
//
//         if (loginsetupparams.googleAnalyticsClientTrackingID) {
//             clientTrackerID = loginsetupparams.googleAnalyticsClientTrackingID;
//             //Send a message to atlasinit.js via a postmessage to initilize the google analytics instance
//             parent.postMessage({
//                 gainit: 1,
//                 ctid: clientTrackerID,
//                 ctn: clientTrackerName
//             }, "*");
//         }
//
//         if (loginsetupparams.googleTagManagerEnabled) {
//             googleTagManagerEnabled = loginsetupparams.googleTagManagerEnabled;
//         }
//
//         locationID = loginsetupparams.locationID;
//         programID = loginsetupparams.programID;
//
//         var state = 'launcheronly';
//         if (hasMessage) {
//             state = "haspopout";
//         }
//         if (customerID !== null) {
//             state = 'revisit';
//             isRevisit = true;
//         }
//
//         var atlasTrackingID = 'UA-87249707-5';
//         if (loginsetupparams.googleAnalyticsAtlasTrackingID) {
//             atlasTrackingID = loginsetupparams.googleAnalyticsAtlasTrackingID;
//         }
//         AtlasGa.trackingID = atlasTrackingID;
//
//         if (accountID === null) {
//             accountID = loginsetupparams.accountID;
//             //Get the cookie from the Atlas domain in case the visitor used the chatbot prior to using cookies on the parent domain
//             var customerCookie = getCustomerCookie(accountID);
//             var ccid = null;
//             var cmin = true;
//             if (customerCookie !== null && customerCookie.customerid !== undefined) {
//                 ccid = customerCookie.customerid;
//                 cmin = customerCookie.min;
//             }
//
//             //Remember if we allow to drag the launcher
//             AtlasDraggableFrame.allowLauncherDrag = loginsetupparams.allowLauncherDrag;
//
//             //Notify the parent page that we are initializing
//             parent.postMessage({
//                 sendLoginSetupCustomer: 1,
//                 aid: accountID,
//                 cid: ccid,
//                 min: cmin,
//                 allowLauncherDrag: loginsetupparams.allowLauncherDrag
//             }, "*");
//         }
//
//         LogPageView(state);
//     }
//
//     $.connection.signalHubWC.client.showInitialScreen = function (logEvent) {
//         LogIt('$.connection.signalHubWC.client.showInitialScreen');
//         showStartScreen(false, logEvent);
//     }
//
//     $.connection.signalHubWC.client.loadingComplete = function (loadingPayload) {
//         LogIt('$.connection.signalHubWC.client.loadingComplete. launcherClicked: ' + loadingPayload.launcherClicked + ", formDisplay: " + formDisplay);
//         //If this was triggered due to a launcher click. then we want to show the screen but NOT log a "ChatViewed" event since the customer is exlicitely opening the chat to interact.
//         //If we arrive here and the launcher was not clicked, that means that we loaded the webchat without interaction and thus we need to log it
//         showStartScreen(loadingPayload.launcherClicked, !loadingPayload.launcherClicked);
//         isLoadingComplete = true;
//     }
//
//     $.connection.signalHubWC.client.clearConversation = function () {
//         LogIt('$.connection.signalHubWC.client.clearConversation');
//         $('#discussion').text('');
//         createSpacer();
//     }
//
//     $.connection.signalHubWC.client.receiveSetupMessage = function (email, phone, connectionid, feedbackid, customerid, customername, wcSessionID, headerChatbotText, accountid) {
//         LogIt('$.connection.signalHubWC.client.receiveSetupMessage. feedbackid: ' + feedbackid);
//
//         $('#tbConnID').val($.connection.hub.id);
//         $('#tbFeedbackID').val(feedbackid);
//         $('#tbCustomerID').val(customerid);
//         $('#tbWebChatSessionID').val(wcSessionID);
//         $("#spanHeaderText").text('');
//         $("#spanHeaderText").append(headerChatbotText);
//         customerID = customerid;
//         feedbackID = feedbackid;
//         accountID = accountid;
//         var isMin = !(startMin === 0);
//         setCustomerCookie(customerID, accountID, false, isMin, false);
//     };
//
//     if (getParameterByName('mock')) {
//         //Mock signalR
//         AtlasSignalR.mock($.connection.signalHubWC);
//     } else {
//         // Start the connection.
//         var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
//         var connTimeout = isAndroid && useDelay ? 3000 : 0;
//
//         AtlasSignalR.connect($.connection.hub, $.connection.signalHubWC.server, connTimeout);
//     }
//
//     //Wire up events
//     $('#img_submit').on({
//         click: function () {
//             // A message is attempting to send, so they have engaged
//             hasEngaged = true;
//             // Trim before deciding to send a message
//             s = $('#tbMessage').val().trim();
//             if (s) {
//                 if (s.indexOf("#echo ") == 0) {
//                     var sendFailed = false;
//                     var alreadySent = false;
//                     try {
//                         console.log("Calling server.sendTestChatMessage");
//                         chat.server.sendTestChatMessage(s)
//                             .fail(function (error) {
//                                 console.log("sendTestChatMessage fail; error=" + error);
//                                 sendFailed = true;
//                                 AddMessageClient("sendError", s, "", s, 0);
//                                 alreadySent = true;
//                             });
//                         console.log("Called server.sendTestChatMessage");
//                     } catch (ex) {
//                         console.log("Exception sending message", ex);
//                         sendFailed = true;
//                     }
//                     if (!alreadySent && (sendFailed || tryingToReconnect)) {
//                         console.log("send failed");
//                         AddMessageClient("sendError", s, "", s, 0);
//                     }
//                 } else {
//                     var sendFailed = false;
//                     var alreadySent = false;
//                     try {
//                         //Remove a possibly visible sentiment rating widget before sending a customer message
//                         AtlasWebchatRating.removeRatingWidget();
//
//                         //send the message to the server
//                         chat.server.sendChatMessageJSON(JSON.stringify({
//                             fromUserConnectionID: $('#tbConnID').val(),
//                             fromCustomerID: $('#tbCustomerID').val(),
//                             feedbackID: $('#tbFeedbackID').val(),
//                             messageType: "chat",
//                             message: s,
//                             parentDomain: parentDomain,
//                             parentIP: parentIP,
//                             atlasSettingsJSON: JSON.stringify(atlasSettings)
//                         })).fail(function (error) {
//                             console.log("sendChatMessageJSON fail; error=" + error);
//                             sendFailed = true;
//                             AddMessageClient("sendError", s, "", s, 0);
//                             alreadySent = true;
//                         });
//                     } catch (ex) {
//                         console.log("Exception sending message", ex);
//                         sendFailed = true;
//                     }
//                     if (!alreadySent && (sendFailed || tryingToReconnect)) {
//                         console.log("send failed");
//                         AddMessageClient("sendError", s, "", s, 0);
//                     }
//                     LogPageEvent("MessageSubmitted:CustomerInput", "", true, true);
//                 }
//
//                 ChatInputManager.clearInputText();
//             }
//         }
//     });
//
//     $('#tbMessage').on('contextmenu input blur',
//         function () {
//             var val = ChatInputManager.getInputText();
//             // Needs to have a sendable message to show submit button
//             if (val.trim().length === 0) {
//                 $('#img_submit').hide();
//             } else {
//                 $('#img_submit').show();
//             }
//             AtlasPcgManager.handlePcg(val);
//         }
//     );
//
//     $('#img_attach').on({
//         click: function () {
//             $('#fileupload').click();
//         }
//     });
//
//     $('.chat_error').on({
//         click: function () {
//             $(".chat_error").hide();
//         }
//     });
//
//     $(document).on('click', '.chat_button_suggested_response', function () {
//         //Disable the button clicked ASAP to avoid double-clicks that cause twice the responses
//         $(this).prop("disabled", true);
//
//         ChatInputManager.applyState({overrideMessagePlaceholderText: null, waitForMessageInput: false});
//         var s = $(this).data('atlas-value');
//         var action = $(this).data('atlas-action');
//         var messageLabel = $(this).text();
//         var messageTypeID = $(this).parents(".chat_message_wrapper").data("messageTypeID");
//         AtlasPcgManager.clearState();
//
//         //If we are here from a PCG button, clear the input text
//         if (action === "pcg") {
//             ChatInputManager.clearInputText();
//         }
//
//         //Remove a possibly visible sentiment rating widget before sending a customer message
//         AtlasWebchatRating.removeRatingWidget();
//
//         //send the message to the server
//         chat.server.sendChatMessageJSON(JSON.stringify({
//             fromUserConnectionID: $('#tbConnID').val(),
//             fromCustomerID: $('#tbCustomerID').val(),
//             feedbackID: $('#tbFeedbackID').val(),
//             messageType: action === "reload" ? action : "chat",
//             message: s,
//             parentDomain: parentDomain,
//             parentIP: parentIP,
//             atlasSettingsJSON: JSON.stringify(atlasSettings),
//             messageTypeID: messageTypeID,
//             messageLabel: messageLabel
//         })).fail(function (error) {
//             console.log("sendChatMessageJSON fail suggested response; error=" + error);
//             AddMessageClient("sendError", s, "", messageLabel, messageTypeID);
//         });
//         $(this).parent().delay(100).fadeOut();
//         $(this).parent().parent().delay(100).fadeOut();
//
//         LogPageEvent("MessageSubmitted:ButtonClicked", s, true, true);
//     });
//
//     $(document).on('click', '.chat_button_link', function () {
//         var $el = $(this);
//         var url = $el.data('atlas-value');
//         var messageType = $el.closest('.chat_button_wrapper').data('messageType'); //Extract the "message type" (button, image, etc) from an ancestor
//         LogPageEvent("MessageSubmitted:​LinkClicked", url, true, true);
//
//         //send the click notification to the server
//         AtlasWebchat.sendLinkClickToAtlas($el, url, messageType, $.connection.signalHubWC.server, $('#tbConnID').val(), feedbackID);
//
//         //Check the domain of the URL and to see if the minimized cookie should be set
//         AtlasWebchat.redirectUrl(url, parentDomain, AtlasWebchat.defaultTarget, isMediaFullScreen, customerID, accountID);
//     });
//
//     $(document).on('click', '.chat_inputfield_close', function () {
//         var $el = $(this);
//         //Remove a possibly visible sentiment rating widget before sending a customer message
//         AtlasWebchatRating.removeRatingWidget();
//
//         AtlasWebchat.sendInputCancelClickToAtlas($el, $.connection.signalHubWC.server, $('#tbConnID').val(), feedbackID);
//
//         ChatInputManager.applyState({overrideMessagePlaceholderText: null, waitForMessageInput: false});
//         removeUnusedMessageInputs();
//         LogPageEvent("MessageSubmitted:​InputFormCancelled", "", true, true);
//     });
//
//     $(document).on('click', '.fotorama__video-play', function () {
//         try {
//             var $el = $(this);
//             //Get the fotorama root that contains the image data array
//             var $root = $el.closest(".fotorama-root");
//             //Get the image data array
//             var imageData = $root.data("image-data");
//             //Get the caption element that has the index as a string
//             var indexElement = $el.siblings(".fotorama__caption");
//             //Parse the caption for the index number
//             var imageNum = AtlasChat.extractNumberFromStringStart(indexElement.text());
//             if (imageNum) {
//                 //If we found a number then get the video data from the zero-based array
//                 var imageIndex = parseInt(imageNum) - 1;
//                 //Create a HTML element to add attributes so as to be able to use the same logic as other code
//                 const dataDiv = document.createElement("div");
//                 dataDiv.setAttribute("data-atlas-value", imageData[imageIndex]["atlas-value"]);
//                 dataDiv.setAttribute("data-atlas-action", imageData[imageIndex]["atlas-action"]);
//                 dataDiv.setAttribute("data-atlas-isCta", imageData[imageIndex]["atlas-isCta"]);
//                 dataDiv.setAttribute("data-atlas-messageToSend", imageData[imageIndex]["atlas-messageToSend"]);
//                 dataDiv.setAttribute("data-atlas-type", imageData[imageIndex]["atlas-type"]);
//                 imageClickHandler($(dataDiv));
//             }
//         } catch (e) {
//             console.log(e);
//         }
//     });
//
//     $(document).on('click', '.chat_image_carousel, .chat_image_link', function () {
//         return imageClickHandler($(this));
//     });
//
//     function imageClickHandler(element) {
//         var $el = element;
//         var url = $el.data('atlas-value');
//         var messageType = $el.closest('.chat_image_wrapper').data('messageType'); //Extract the "message type" (button, image, etc) from an ancestor
//         var action = $el.data('atlas-action');
//         var type = $el.data('atlas-type');
//
//         //Log the event to GA
//         LogPageEvent("MessageSubmitted:ImageClicked", url, true, true);
//
//         //send the click notification to the server
//         AtlasWebchat.sendLinkClickToAtlas($el, url, messageType, $.connection.signalHubWC.server, $('#tbConnID').val(), feedbackID);
//
//         //Only perform a redirect if not a type of video
//         if (!type || type !== 'video') {
//             // Redirect in same tab
//             if (action && action.toLowerCase() === "redirect") {
//                 //Determine if the window should be minimized
//                 AtlasWebchat.setMinimizedFlagOnFullscreen(isMediaFullScreen, customerID, accountID);
//                 //Tell the parent window to load the new URL
//                 AtlasWebchat.postRedirect(url);
//             }
//             // Redirect in new tab
//             else {
//                 //Check the domain of the URL and to see if the minimized cookie should be set
//                 AtlasWebchat.redirectUrl(url, parentDomain, AtlasWebchat.defaultTarget, isMediaFullScreen, customerID, accountID);
//             }
//         }
//         return false;
//     };
//
//     //Trap and discard a double click event
//     $(document).on('dblclick', '.chat_image_carousel, .chat_image_link', function () {
//         return false;
//     });
//
//     $(document).on('click', '.chat_button_redirect', function () {
//         var $el = $(this);
//         var url = $el.data('atlas-value');
//         var messageType = $el.closest('.chat_button_wrapper').data('messageType'); //Extract the "message type" (button, image, etc) from an ancestor
//         LogPageEvent("MessageSubmitted:​LinkClicked", url, true, true);
//
//         //send the click notification to the server
//         AtlasWebchat.sendLinkClickToAtlas($el, url, messageType, $.connection.signalHubWC.server, $('#tbConnID').val(), feedbackID);
//
//         //Determine if the window should be minimized
//         AtlasWebchat.setMinimizedFlagOnFullscreen(isMediaFullScreen, customerID, accountID);
//
//         //Tell the parent window to load the new URL
//         AtlasWebchat.postRedirect(url);
//     });
//
//     $(document).on('click', '.chat-link', function () {
//         //Obtain the url value from the href and follow the link
//         var $el = $(this);
//         var url = $el.attr('href');
//         LogPageEvent("LinkClicked:​MessageLinkClicked", url, true, true);
//
//         //send the click notification to the server. The message type is irrelevant since a text link is the default link type
//         AtlasWebchat.sendLinkClickToAtlas($el, url, null, $.connection.signalHubWC.server, $('#tbConnID').val(), feedbackID);
//
//         //Check the domain of the URL and to see if the minimized cookie should be set
//         AtlasWebchat.redirectUrl(url, parentDomain, AtlasWebchat.defaultTarget, isMediaFullScreen, customerID, accountID);
//
//         //Return false to prevent the native event from firing
//         return false;
//     });
//
//     $(document).on('click', '.chat_inputfield', function () {
//         var iFields = JSON.parse($(this).attr('data-atlas-inputfields'));
//         var validated = false;
//         var globalValid = true;
//
//         $.each(iFields, function (i, f) {
//             validated = false;
//             var inputid = f.id;
//             var inputtype = f.inputtype;
//             var value = $("#" + inputid).val()
//             f.value = value;
//
//             //...otherwise validate the field contents
//             if (inputtype == "string" || inputtype == "multiline") {
//                 if (value) {
//                     validated = true;
//                 } else {
//                     if (f.optional) {
//                         validated = true;
//                     }
//                 }
//             } else if (inputtype == "email") {
//                 if (value) {
//                     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//                     validated = re.test(String(value).toLowerCase());
//                 } else {
//                     if (f.optional) {
//                         validated = true;
//                     }
//                 }
//             } else if (inputtype == "phone") {
//                 if (value) {
//                     var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
//                     validated = re.test(value);
//                 } else {
//                     if (f.optional) {
//                         validated = true;
//                     }
//                 }
//             } else if (inputtype == "password") {
//                 if (value) {
//                     validated = true;
//                 } else {
//                     if (f.optional) {
//                         validated = true;
//                     }
//                 }
//             } else if (inputtype == "number") {
//                 if (value) {
//                     validated = isNumber(value);
//                 } else {
//                     if (f.optional) {
//                         validated = true;
//                     }
//                 }
//             } else if (inputtype == "zipcode") {
//                 if (value) {
//                     validated = isZipCode(value);
//                 } else {
//                     if (f.optional) {
//                         validated = true;
//                     }
//                 }
//             }
//
//             f.validated = validated;
//             if (!validated) {
//                 $("#" + inputid).parent().siblings('.inputfield_success').hide();
//                 $("#" + inputid).attr("style", "background-color: pink; border: 2px red;");
//                 globalValid = false;
//             } else {
//                 $("#" + inputid).parent().siblings('.inputfield_error').hide();
//                 $("#" + inputid).attr("style", "background-color: white; border: 2px white;");
//             }
//         });
//
//         if (globalValid) {
//             var inputFieldList = [];
//             $.each(iFields, function (i, f) {
//
//                 //Send each field that has a value which will exclude optional non-filled in fields
//                 if (f.value) {
//                     inputFieldList.push({
//                         "fieldname": f.field,
//                         "value": f.value,
//                         "inputtype": f.inputtype,
//                         "messagetosend": f.messagetosend,
//                         "instructions": f.instructions,
//                         "isCta": f.isCta
//                     });
//                 }
//             });
//
//             $(this).parent().siblings('.inputfield_error').hide();
//             var fieldStr = JSON.stringify(inputFieldList);
//
//             //Remove a possibly visible sentiment rating widget before sending a customer message
//             AtlasWebchatRating.removeRatingWidget();
//
//             //send the message to the server
//             chat.server.sendChatMessageJSON(JSON.stringify({
//                 fromUserConnectionID: $('#tbConnID').val(),
//                 fromCustomerID: $('#tbCustomerID').val(),
//                 feedbackID: $('#tbFeedbackID').val(),
//                 messageType: "atlasstate",
//                 message: "{ \"atlasState\": \"1\", \"inputFieldList\": " + fieldStr + " }",
//                 parentDomain: parentDomain,
//                 parentIP: parentIP,
//                 atlasSettingsJSON: JSON.stringify(atlasSettings)
//             })).fail(function (error) {
//                 console.log("sendChatMessageJSON fail inputField; error=" + error);
//             });
//             $(this).parent().siblings('.inputfield_success').show();
//             ChatInputManager.applyState({overrideMessagePlaceholderText: null, waitForMessageInput: false});
//             $(".chat_field_submit").hide();
//             LogPageEvent("MessageSubmitted:​InputFormFilled", "", true, true);
//         }
//     });
//
//     // Only trigger on chat input fields that aren't text areas
//     $(document).on('keypress', '.chat_inputfield_text_box:not(textarea)', function (e) {
//         if (e.which === 13) { //Enter key pressed
//             $(this).closest('.chat_message_wrapper').find('.chat_inputfield:visible').click(); //Trigger submit button click event
//         }
//     });
//     //Wire up webchat rating satisfaction events
//     AtlasRatingManager.initRatingEvents();
// });
//
// function disconnectMyChat() {
//     $.connection.signalHubWC.server.sendChatDisconnect();
// }
//
// if (window.attachEvent) {
//     window.attachEvent('onbeforeunload', disconnectMyChat);
// } else {
//     window.addEventListener('beforeunload', disconnectMyChat, false);
// }
//
// var UUID = (function () {
//     var self = {};
//     var lut = [];
//     for (var i = 0; i < 256; i++) {
//         lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
//     }
//     self.generate = function () {
//         var d0 = Math.random() * 0xffffffff | 0;
//         var d1 = Math.random() * 0xffffffff | 0;
//         var d2 = Math.random() * 0xffffffff | 0;
//         var d3 = Math.random() * 0xffffffff | 0;
//         return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' +
//             lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' +
//             lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
//             lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
//     }
//     return self;
// })();
//
// function supports_local_storage() {
//     try {
//         return 'localStorage' in window && window['localStorage'] !== null;
//     } catch (e) {
//         return false;
//     }
// }
//
// function getCustomerGUIDCookie(aid) {
//     var cc = AtlasCookie.cookieManagement.getItem("atlasanon_" + aid.toString());
//     if (cc !== null) {
//         return JSON.parse(cc);
//     }
//     return null;
// }
//
// function removeCustomerGUIDCookie(aid) {
//     AtlasCookie.cookieManagement.removeItem("atlasanon_" + aid.toString(), "/");
//     parent.postMessage({
//         removeCustomerGUIDCookie: 1,
//         aid: aid.toString()
//     }, "*");
// }
//
// function setCustomerCookie(cid, aid, setIsMinimized, isMinimized, setIsSatisfactionCompleted) {
//     if (cid === null || aid === null) {
//         return;
//     }
//     customerID = cid;
//     AtlasCookie.setCustomerCookie(cid, aid, setIsMinimized, isMinimized, setIsSatisfactionCompleted);
//
//     parent.postMessage({
//         setCustomerCookie: 1,
//         cid: cid,
//         aid: aid.toString(),
//         setIsMinimized: setIsMinimized,
//         isMinimized: isMinimized,
//         setIsSatisfactionCompleted: setIsSatisfactionCompleted
//     }, "*");
// }
//
// function getCustomerCookie(aid) {
//     var cc = AtlasCookie.cookieManagement.getItem("atlascid_" + aid.toString());
//     if (cc !== null) {
//         return JSON.parse(cc);
//     }
//     return null;
// }
//
// function removeCustomerCookie(aid) {
//     if (aid !== null) {
//         AtlasCookie.cookieManagement.removeItem("atlascid_" + aid.toString(), "/");
//         parent.postMessage({
//             removeCustomerCookie: 1,
//             aid: aid.toString()
//         }, "*");
//     }
// }
//
// function atlasDebugCookieExists() {
//     var debugCookie = AtlasCookie.cookieManagement.getItem("atlasDebug");
//     var exists = debugCookie !== null;
//     if (exists) {
//         console.log("debug cookie exists: " + exists);
//     }
//     return exists;
// }
//
// var getQueryParam = function (param) {
//     var found;
//     var splitter = window.location.search.substr(1).split("&");
//     $.each(splitter, function (i, item) {
//         if (param == item.split("=")[0]) {
//             found = item.split("=")[1];
//         }
//     });
//     return found;
// };
//
// function LogIt(message) {
//     if (useDebug) {
//         console.log(message);
//     }
// }
//
// //Expands the chat_input textarea vertically up to a set size (see css for max-height) as the user types.
// var measurer = $('<span>', {style: "display:none;word-break:break-word;visibility:hidden;white-space:pre-wrap;"})
//     .appendTo('#divChatInputArea');
//
// function initMeasurerFor(textarea) {
//     if (!textarea[0].originalOverflowY) {
//         textarea[0].originalOverflowY = textarea.css("overflow-y");
//     }
//     measurer.text(textarea.text())
//         .css("max-width", textarea.css('max-width'))
//         .css('font', textarea.css('font'))
//         .css('overflow-y', textarea.css('overflow-y'))
//         .css("max-height", textarea.css("max-height"))
//         .css("min-height", textarea.css("min-height"))
//         .css("min-width", textarea.css("min-width"))
//         .css("padding", textarea.css("padding"))
//         .css("border", textarea.css("border"))
//         .css("box-sizing", textarea.css("box-sizing"));
// }
//
// function removeUnusedMessageInputs() {
//     var chatButtonBubble = $('#discussion').find('.chat_button_suggested_response, .chat_button_suggested_response_field').parent();
//     if (chatButtonBubble.length) {
//         ChatInputManager.applyState({overrideMessagePlaceholderText: null, waitForMessageInput: false});
//         chatButtonBubble.delay(100).fadeOut();
//         chatButtonBubble.parent().delay(100).fadeOut();
//     }
// }
//
// function updateTextAreaSize(textarea) {
//     var ci_height = $('.chat_input_area').height();
//     textarea.height(measurer.height());
//     ci_height = $('.chat_input_area').height();
// };
