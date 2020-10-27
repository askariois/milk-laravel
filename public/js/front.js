/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e, t) {
    var n, r, i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {},
        p = [],
        f = "1.10.1",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function(e, t) { return new x.fn.init(e, t, r) },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function(e, t) { return t.toUpperCase() },
        q = function(e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
        },
        _ = function() { a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q)) };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
                        for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() { return g.call(this) },
        get: function(e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] },
        pushStack: function(e) { var t = x.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t },
        each: function(e, t) { return x.each(this, e, t) },
        ready: function(e) { return x.ready.promise().done(e), this },
        slice: function() { return this.pushStack(g.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) { return this.pushStack(x.map(this, function(t, n) { return e.call(t, n, t) })) },
        end: function() { return this.prevObject || this.constructor(null) },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
            if (null != (o = arguments[l]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) { return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) { e ? x.readyWait++ : x.ready(!0) },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) { return "function" === x.type(e) },
        isArray: Array.isArray || function(e) { return "array" === x.type(e) },
        isWindow: function(e) { return null != e && e == e.window },
        isNumeric: function(e) { return !isNaN(parseFloat(e)) && isFinite(e) },
        type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try { if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (r) { return !1 }
            if (x.support.ownLast)
                for (n in e) return v.call(e, n);
            for (n in e);
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        error: function(e) { throw Error(e) },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        },
        parseJSON: function(n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t) },
        parseXML: function(n) { var r, i; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r },
        noop: function() {},
        globalEval: function(t) { t && x.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) },
        camelCase: function(e) { return e.replace(D, "ms-").replace(L, H) },
        nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) { return null == e ? "" : b.call(e) } : function(e) { return null == e ? "" : (e + "").replace(C, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a)
                for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) { var r, i, o; return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() { return e.apply(n || this, r.concat(g.call(arguments))) }, i.guid = e.guid = e.guid || x.guid++, i) : t },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if ("object" === x.type(r)) { o = !0; for (l in r) x.access(e, n, l, r[l], !0, a, s) } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) { return c.call(x(e), n) })), n))
                for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() { return (new Date).getTime() },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), x.ready.promise = function(t) {
        if (!n)
            if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
            else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
        else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try { r = null == e.frameElement && a.documentElement } catch (i) {}
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try { r.doScroll("left") } catch (e) { return setTimeout(o, 50) }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { c["[object " + t + "]"] = t.toLowerCase() });

    function M(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
        function(e, t) {
            var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
                w = e.document,
                T = 0,
                C = 0,
                N = lt(),
                k = lt(),
                E = lt(),
                S = !1,
                A = function() { return 0 },
                j = typeof t,
                D = 1 << 31,
                L = {}.hasOwnProperty,
                H = [],
                q = H.pop,
                _ = H.push,
                M = H.push,
                O = H.slice,
                F = H.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                W = R.replace("w", "w#"),
                $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
                I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
                z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                X = RegExp("^" + P + "*," + P + "*"),
                U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                V = RegExp(P + "*[+~]"),
                Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
                J = RegExp(I),
                G = RegExp("^" + W + "$"),
                Q = { ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") },
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /^(?:input|select|textarea|button)$/i,
                tt = /^h\d$/i,
                nt = /'|\\/g,
                rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                it = function(e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r) };
            try { M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType } catch (ot) {
                M = {
                    apply: H.length ? function(e, t) { _.apply(e, O.call(t)) } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]);
                        e.length = n - 1
                    }
                }
            }

            function at(e, t, n, i) {
                var o, a, s, l, u, c, d, m, y, x;
                if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (l = t.nodeType) && 9 !== l) return [];
                if (h && !i) {
                    if (o = Z.exec(e))
                        if (s = o[1]) { if (9 === l) { if (a = t.getElementById(s), !a || !a.parentNode) return n; if (a.id === s) return n.push(a), n } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n } else { if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n; if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n }
                    if (r.qsa && (!g || !g.test(e))) {
                        if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                            c = bt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                            while (u--) c[u] = m + xt(c[u]);
                            y = V.test(e) && t.parentNode || t, x = c.join(",")
                        }
                        if (x) try { return M.apply(n, y.querySelectorAll(x)), n } catch (T) {} finally { d || t.removeAttribute("id") }
                    }
                }
                return At(e.replace(z, "$1"), t, n, i)
            }

            function st(e) { return K.test(e + "") }

            function lt() {
                var e = [];

                function t(n, r) { return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r }
                return t
            }

            function ut(e) { return e[b] = !0, e }

            function ct(e) { var t = f.createElement("div"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

            function pt(e, t, n) {
                e = e.split("|");
                var r, i = e.length,
                    a = n ? null : t;
                while (i--)(r = o.attrHandle[e[i]]) && r !== t || (o.attrHandle[e[i]] = a)
            }

            function ft(e, t) { var n = e.getAttributeNode(t); return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null }

            function dt(e, t) { return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }

            function ht(e) { return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t }

            function gt(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function mt(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

            function yt(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

            function vt(e) {
                return ut(function(t) {
                    return t = +t, ut(function(n, r) {
                        var i, o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            s = at.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, r = at.support = {}, p = at.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : w,
                    i = n.parentWindow;
                return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.frameElement && i.attachEvent("onbeforeunload", function() { p() }), r.attributes = ct(function(e) { return e.innerHTML = "<a href='#'></a>", pt("type|href|height|width", dt, "#" === e.firstChild.getAttribute("href")), pt(B, ft, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className") }), r.input = ct(function(e) { return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }), pt("value", ht, r.attributes && r.input), r.getElementsByTagName = ct(function(e) { return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length }), r.getElementsByClassName = ct(function(e) { return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length }), r.getById = ct(function(e) { return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length }), r.getById ? (o.find.ID = function(e, t) { if (typeof t.getElementById !== j && h) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, o.filter.ID = function(e) { var t = e.replace(rt, it); return function(e) { return e.getAttribute("id") === t } }) : (delete o.find.ID, o.filter.ID = function(e) { var t = e.replace(rt, it); return function(e) { var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id"); return n && n.value === t } }), o.find.TAG = r.getElementsByTagName ? function(e, n) { return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, o.find.CLASS = r.getElementsByClassName && function(e, n) { return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t }, m = [], g = [], (r.qsa = st(n.querySelectorAll)) && (ct(function(e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked") }), ct(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (r.matchesSelector = st(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ct(function(e) { r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I) }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = st(d.contains) || d.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, r.sortDetached = ct(function(e) { return 1 & e.compareDocumentPosition(n.createElement("div")) }), A = d.compareDocumentPosition ? function(e, t) { if (e === t) return S = !0, 0; var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t); return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (e === t) return S = !0, 0;
                    if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                    if (o === a) return gt(e, t);
                    r = e;
                    while (r = r.parentNode) s.unshift(r);
                    r = t;
                    while (r = r.parentNode) l.unshift(r);
                    while (s[i] === l[i]) i++;
                    return i ? gt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                }, n) : f
            }, at.matches = function(e, t) { return at(e, null, null, t) }, at.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try { var n = y.call(e, t); if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (i) {}
                return at(t, f, null, [e]).length > 0
            }, at.contains = function(e, t) { return (e.ownerDocument || e) !== f && p(e), v(e, t) }, at.attr = function(e, n) {
                (e.ownerDocument || e) !== f && p(e);
                var i = o.attrHandle[n.toLowerCase()],
                    a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
                return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
            }, at.error = function(e) { throw Error("Syntax error, unrecognized expression: " + e) }, at.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) { while (t = e[o++]) t === e[o] && (i = n.push(o)); while (i--) e.splice(n[i], 1) }
                return e
            }, a = at.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += a(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    for (; t = e[r]; r++) n += a(t);
                return n
            }, o = at.selectors = {
                cacheLength: 50,
                createPseudo: ut,
                match: Q,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e }, PSEUDO: function(e) { var n, r = !e[5] && e[2]; return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = bt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(rt, it).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = N[e + " "]; return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) { return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "") }) },
                    ATTR: function(e, t, n) { return function(r) { var i = at.attr(r, e); return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0 } },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, l) {
                            var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !l && !s;
                            if (m) {
                                if (o) {
                                    while (g) {
                                        p = t;
                                        while (p = p[g])
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                    c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if (1 === p.nodeType && ++f && p === t) { c[e] = [T, d, f]; break }
                                } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
                                else
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function(e, n) {
                            var i, o = r(e, t),
                                a = o.length;
                            while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }) : function(e) { return r(e, 0, n) }) : r
                    }
                },
                pseudos: {
                    not: ut(function(e) {
                        var t = [],
                            n = [],
                            r = l(e.replace(z, "$1"));
                        return r[b] ? ut(function(e, t, n, i) {
                            var o, a = r(e, null, i, []),
                                s = e.length;
                            while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() }
                    }),
                    has: ut(function(e) { return function(t) { return at(e, t).length > 0 } }),
                    contains: ut(function(e) { return function(t) { return (t.textContent || t.innerText || a(t)).indexOf(e) > -1 } }),
                    lang: ut(function(e) {
                        return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                    root: function(e) { return e === d },
                    focus: function(e) { return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: function(e) { return e.disabled === !1 },
                    disabled: function(e) { return e.disabled === !0 },
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) { return !o.pseudos.empty(e) },
                    header: function(e) { return tt.test(e.nodeName) },
                    input: function(e) { return et.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) },
                    first: vt(function() { return [0] }),
                    last: vt(function(e, t) { return [t - 1] }),
                    eq: vt(function(e, t, n) { return [0 > n ? n + t : n] }),
                    even: vt(function(e, t) { var n = 0; for (; t > n; n += 2) e.push(n); return e }),
                    odd: vt(function(e, t) { var n = 1; for (; t > n; n += 2) e.push(n); return e }),
                    lt: vt(function(e, t, n) { var r = 0 > n ? n + t : n; for (; --r >= 0;) e.push(r); return e }),
                    gt: vt(function(e, t, n) { var r = 0 > n ? n + t : n; for (; t > ++r;) e.push(r); return e })
                }
            };
            for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) o.pseudos[n] = mt(n);
            for (n in { submit: !0, reset: !0 }) o.pseudos[n] = yt(n);

            function bt(e, t) {
                var n, r, i, a, s, l, u, c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                s = e, l = [], u = o.preFilter;
                while (s) {
                    (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(z, " ") }), s = s.slice(n.length));
                    for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({ value: n, type: a, matches: r }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
            }

            function xt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) r += e[t].value;
                return r
            }

            function wt(e, t, n) {
                var r = t.dir,
                    o = n && "parentNode" === r,
                    a = C++;
                return t.first ? function(t, n, i) {
                    while (t = t[r])
                        if (1 === t.nodeType || o) return e(t, n, i)
                } : function(t, n, s) {
                    var l, u, c, p = T + " " + a;
                    if (s) {
                        while (t = t[r])
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || o)
                                if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) { if ((l = u[1]) === !0 || l === i) return l === !0 } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
                }
            }

            function Tt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function Ct(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    l = e.length,
                    u = null != t;
                for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
                return a
            }

            function Nt(e, t, n, r, i, o) {
                return r && !r[b] && (r = Nt(r)), i && !i[b] && (i = Nt(i, o)), ut(function(o, a, s, l) {
                    var u, c, p, f = [],
                        d = [],
                        h = a.length,
                        g = o || St(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : Ct(g, f, e, s, l),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, y, s, l), r) { u = Ct(y, d), r(u, [], s, l), c = u.length; while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p)) }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                u = [], c = y.length;
                                while (c--)(p = y[c]) && u.push(m[c] = p);
                                i(null, y = [], u, l)
                            }
                            c = y.length;
                            while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                        }
                    } else y = Ct(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
                })
            }

            function kt(e) {
                var t, n, r, i = e.length,
                    a = o.relative[e[0].type],
                    s = a || o.relative[" "],
                    l = a ? 1 : 0,
                    c = wt(function(e) { return e === t }, s, !0),
                    p = wt(function(e) { return F.call(t, e) > -1 }, s, !0),
                    f = [function(e, n, r) { return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r)) }];
                for (; i > l; l++)
                    if (n = o.relative[e[l].type]) f = [wt(Tt(f), n)];
                    else {
                        if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                            for (r = ++l; i > r; r++)
                                if (o.relative[e[r].type]) break;
                            return Nt(l > 1 && Tt(f), l > 1 && xt(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, r > l && kt(e.slice(l, r)), i > r && kt(e = e.slice(r)), i > r && xt(e))
                        }
                        f.push(n)
                    }
                return Tt(f)
            }

            function Et(e, t) {
                var n = 0,
                    r = t.length > 0,
                    a = e.length > 0,
                    s = function(s, l, c, p, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            C = u,
                            N = s || a && o.find.TAG("*", d && l.parentNode || l),
                            k = T += null == C ? 1 : Math.random() || .1;
                        for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++])
                                    if (m(h, l, c)) { p.push(h); break }
                                w && (T = k, i = ++n)
                            }
                            r && ((h = !m && h) && v--, s && x.push(h))
                        }
                        if (v += b, r && b !== v) {
                            g = 0;
                            while (m = t[g++]) m(x, y, l, c);
                            if (s) {
                                if (v > 0)
                                    while (b--) x[b] || y[b] || (y[b] = q.call(p));
                                y = Ct(y)
                            }
                            M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                        }
                        return w && (T = k, u = C), x
                    };
                return r ? ut(s) : s
            }
            l = at.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = E[e + " "];
                if (!o) {
                    t || (t = bt(e)), n = t.length;
                    while (n--) o = kt(t[n]), o[b] ? r.push(o) : i.push(o);
                    o = E(e, Et(i, r))
                }
                return o
            };

            function St(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) at(e, t[r], n);
                return n
            }

            function At(e, t, n, i) {
                var a, s, u, c, p, f = bt(e);
                if (!i && 1 === f.length) {
                    if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                        if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                        e = e.slice(s.shift().value.length)
                    }
                    a = Q.needsContext.test(e) ? 0 : s.length;
                    while (a--) { if (u = s[a], o.relative[c = u.type]) break; if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) { if (s.splice(a, 1), e = i.length && xt(s), !e) return M.apply(n, i), n; break } }
                }
                return l(e, f)(i, t, !h, n, V.test(e)), n
            }
            o.pseudos.nth = o.pseudos.eq;

            function jt() {}
            jt.prototype = o.filters = o.pseudos, o.setFilters = new jt, r.sortStable = b.split("").sort(A).join("") === b, p(), [0, 0].sort(A), r.detectDuplicates = S, x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
        }(e);
    var O = {};

    function F(e) { var t = O[e] = {}; return x.each(e.match(T) || [], function(e, n) { t[n] = !0 }), t }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [],
            u = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) { r = !1; break }
                n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function i(t) { x.each(t, function(t, n) { var r = x.type(n); "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n) }) })(arguments), n ? o = l.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() { return l && x.each(arguments, function(e, t) { var r; while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--) }), this },
                has: function(e) { return e ? x.inArray(e, l) > -1 : !(!l || !l.length) },
                empty: function() { return l = [], o = 0, this },
                disable: function() { return l = u = r = t, this },
                disabled: function() { return !l },
                lock: function() { return u = t, r || p.disable(), this },
                locked: function() { return !u },
                fireWith: function(e, t) { return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !u || (n ? u.push(t) : c(t)), this },
                fire: function() { return p.fireWith(this, arguments), this },
                fired: function() { return !!i }
            };
        return p
    }, x.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", x.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() { return n },
                    always: function() { return i.done(arguments).fail(arguments), this },
                    then: function() {
                        var e = arguments;
                        return x.Deferred(function(n) {
                            x.each(t, function(t, o) {
                                var a = o[0],
                                    s = x.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) { return null != e ? x.extend(e, r) : r }
                },
                i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = g.call(arguments),
                r = n.length,
                i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(),
                a = function(e, t, n) { return function(r) { t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n) } },
                s, l, u;
            if (r > 1)
                for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try { delete d.test } catch (h) { t.deleteExpando = !1 }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() { t.noCloneEvent = !1 }), d.cloneNode(!0).click());
        for (f in { submit: !0, change: !0, focusin: !0 }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) break;
        return t.ownLast = "0" !== f, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function() { t.boxSizing = 4 === d.offsetWidth }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : { toJSON: x.noop }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if (a[s]) { if (t && (r = n ? a[s] : a[s].data)) { x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length; while (i--) delete r[t[i]]; if (n ? !I(r) : !x.isEmptyObject(r)) return }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null) }
        }
    }
    x.extend({ cache: {}, noData: { applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) { return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e) }, data: function(e, t, n) { return R(e, t, n) }, removeData: function(e, t) { return W(e, t) }, _data: function(e, t, n) { return R(e, t, n, !0) }, _removeData: function(e, t) { return W(e, t, !0) }, acceptData: function(e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1; var t = e.nodeName && x.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), x.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                a = 0,
                s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() { x.data(this, e) }) : arguments.length > 1 ? this.each(function() { x.data(this, e, n) }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) { return this.each(function() { x.removeData(this, e) }) }
    });

    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try { r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r } catch (o) {}
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    x.extend({
        queue: function(e, n, r) { var i; return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function() { x.dequeue(e, t) };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return x._data(e, n) || x._data(e, n, { empty: x.Callbacks("once memory").add(function() { x._removeData(e, t + "queue"), x._removeData(e, n) }) }) }
    }), x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { x.dequeue(this, e) }) },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() { clearTimeout(r) }
            })
        },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, n) {
            var r, i = 1,
                o = x.Deferred(),
                a = this,
                s = this.length,
                l = function() {--i || o.resolveWith(a, [a]) };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = x.support.getSetAttribute,
        K = x.support.input;
    x.fn.extend({
        attr: function(e, t) { return x.access(this, x.attr, e, t, arguments.length > 1) },
        removeAttr: function(e) { return this.each(function() { x.removeAttr(this, e) }) },
        prop: function(e, t) { return x.access(this, x.prop, e, t, arguments.length > 1) },
        removeProp: function(e) { return e = x.propFix[e] || e, this.each(function() { try { this[e] = t, delete this[e] } catch (n) {} }) },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) { x(this).addClass(e.call(this, t, this.className)) });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) { x(this).removeClass(e.call(this, t, this.className)) });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return x.isFunction(e) ? this.each(function(n) { x(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function() {
                if ("string" === n) {
                    var o, a = 0,
                        s = x(this),
                        l = t,
                        u = e.match(T) || [];
                    while (o = u[a++]) l = r ? l : !s.hasClass(o), s[l ? "addClass" : "removeClass"](o)
                } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = x.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) { return null == e ? "" : e + "" })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: { get: function(e) { var t = x.find.attr(e, "value"); return null != t ? t : e.text } },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = x.makeArray(t),
                        a = i.length;
                    while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) { var o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t)) },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(T);
            if (o && 1 === e.nodeType)
                while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: { type: { set: function(e, t) { if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        propFix: { "for": "htmlFor", "class": "className" },
        prop: function(e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] },
        propHooks: { tabIndex: { get: function(e) { var t = x.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1 } } }
    }), X = { set: function(e, t, n) { return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n } }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n],
                a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function(e, n, r) { return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null }
    }), K && Q || (x.attrHooks.value = { set: function(e, n, r) { return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r) } }), Q || (z = { set: function(e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) { var i; return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null }, x.valHooks.button = { get: function(e, n) { var r = e.getAttributeNode(n); return r && r.specified ? r.value : t }, set: z.set }, x.attrHooks.contenteditable = { set: function(e, t, n) { z.set(e, "" === t ? !1 : t, n) } }, x.each(["width", "height"], function(e, n) { x.attrHooks[n] = { set: function(e, r) { return "" === r ? (e.setAttribute(n, "auto"), r) : t } } })), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) { x.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } }), x.support.style || (x.attrHooks.style = { get: function(e) { return e.style.cssText || t }, set: function(e, t) { return e.style.cssText = t + "" } }), x.support.optSelected || (x.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { x.propFix[this.toLowerCase()] = this }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() { x.valHooks[this] = { set: function(e, n) { return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t } }, x.support.checkOn || (x.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() { return !0 }

    function ot() { return !1 }

    function at() { try { return a.activeElement } catch (e) {} }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) { return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments) }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--)
                    if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                        while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                    } else
                        for (d in c) x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a],
                g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try { i[g]() } catch (y) {}
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [],
                l = g.call(arguments),
                u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) { s = x.event.handlers.call(this, e, u), n = 0; while ((o = s[n++]) && !e.isPropagationStopped()) { e.currentTarget = o.elem, a = 0; while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, e), e.result }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                        o.length && s.push({ elem: u, handlers: o })
                    }
            return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s
        },
        fix: function(e) {
            if (e[x.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button,
                    l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== at() && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === at() && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, click: { trigger: function() { return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t }, _default: function(e) { return x.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function(e, n) { return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n) }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() { this.isImmediatePropagationStopped = it, this.stopPropagation() }
    }, x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) { e._submit_bubble = !0 }), x._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0)) },
        teardown: function() { return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t) }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), x.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0) })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0) }), x._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t },
        teardown: function() { return x.event.remove(this, "._change"), !Z.test(this.nodeName) }
    }), x.support.focusinBubbles || x.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = 0,
            r = function(e) { x.event.simulate(t, e.target, x.event.fix(e), !0) };
        x.event.special[t] = { setup: function() { 0 === n++ && a.addEventListener(e, r, !0) }, teardown: function() { 0 === --n && a.removeEventListener(e, r, !0) } }
    }), x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t); for (a in e) this.on(a, n, r, e[a], o); return this }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) { return x().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() { x.event.add(this, e, i, r, n) })
        },
        one: function(e, t, n, r) { return this.on(e, t, n, r, 1) },
        off: function(e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, n, e[o]); return this } return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() { x.event.remove(this, e, r, n) }) },
        trigger: function(e, t) { return this.each(function() { x.event.trigger(e, t, this) }) },
        triggerHandler: function(e, n) { var r = this[0]; return r ? x.event.trigger(e, n, r, !0) : t }
    });
    var st = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = x.expr.match.needsContext,
        ct = { children: !0, contents: !0, next: !0, prev: !0 };
    x.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (x.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = x(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (x.contains(this, n[t])) return !0
            })
        },
        not: function(e) { return this.pushStack(ft(this, e || [], !0)) },
        filter: function(e) { return this.pushStack(ft(this, e || [], !1)) },
        is: function(e) { return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) { n = o.push(n); break }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    });

    function pt(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e }
    x.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return x.dir(e, "parentNode") }, parentsUntil: function(e, t, n) { return x.dir(e, "parentNode", n) }, next: function(e) { return pt(e, "nextSibling") }, prev: function(e) { return pt(e, "previousSibling") }, nextAll: function(e) { return x.dir(e, "nextSibling") }, prevAll: function(e) { return x.dir(e, "previousSibling") }, nextUntil: function(e, t, n) { return x.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return x.dir(e, "previousSibling", n) }, siblings: function(e) { return x.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) { return x.sibling(e.firstChild) }, contents: function(e) { return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes) } }, function(e, t) { x.fn[e] = function(n, r) { var i = x.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i) } }), x.extend({
        filter: function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) { return 1 === e.nodeType })) },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) { var n = []; for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n }
    });

    function ft(e, t, n) {
        if (x.isFunction(t)) return x.grep(e, function(e, r) { return !!t.call(e, r, e) !== n });
        if (t.nodeType) return x.grep(e, function(e) { return e === t !== n });
        if ("string" == typeof t) {
            if (st.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) { return x.inArray(e, t) >= 0 !== n })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        jt = dt(a),
        Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function(e) { return x.access(this, function(e) { return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e)) }, null, e, arguments.length) },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this,
                i = 0;
            for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() { return x.clone(this, e, t) }) },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) { return [e.nextSibling, e.parentNode] }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) { return this.remove(e, !0) },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0,
                c = this.length,
                p = this,
                f = c - 1,
                h = e[0],
                g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });

    function Lt(e, t) { return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

    function Ht(e) { return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e }

    function qt(e) { var t = Et.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function _t(e, t) { var n, r = 0; for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval")) }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = x(e),
                a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ft(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) { Ct.test(e.type) && (e.defaultChecked = e.checked) }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
                else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) { o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u) }
                x.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++])
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) { i = 0; while (o = s[i++]) kt.test(o.type || "") && n.push(o) }
            return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                    if (a.events)
                        for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
        },
        _evalUrl: function(e) { return x.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }
    }), x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) return this.each(function(t) { x(this).wrapAll(e.call(this, t)) });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild; return e }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) { x(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = x.isFunction(e); return this.each(function(n) { x(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function() { return this.parent().each(function() { x.nodeName(this, "body") || x(this).replaceWith(this.childNodes) }).end() }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + w + ")", "i"),
        Gt = { BODY: "block" },
        Qt = { position: "absolute", visibility: "hidden", display: "block" },
        Kt = { letterSpacing: 0, fontWeight: 400 },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) { return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e) }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (x.isArray(n)) { for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o); return a }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() { return rn(this, !0) },
        hide: function() { return rn(this) },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : nn(this)) ? x(this).show(): x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Wt(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": x.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n),
                    u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { u[n] = r } catch (c) {}
            }
        },
        css: function(e, n, r, i) { var o, a, s, l = x.camelCase(n); return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a }
    }), e.getComputedStyle ? (Rt = function(t) { return e.getComputedStyle(t, null) }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function(e) { return e.currentStyle }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });

    function on(e, t, n) { var r = Vt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a,
            n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function(e, n) { x.cssHooks[n] = { get: function(e, r, i) { return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() { return sn(e, n, i) }) : sn(e, n, i) : t }, set: function(e, t, r) { var i = r && Rt(e); return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0) } } }), x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) { return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function() { x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function(e, n) { return n ? x.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t } }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) { x.cssHooks[n] = { get: function(e, r) { return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t } } }) }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display")) }, x.expr.filters.visible = function(e) { return !x.expr.filters.hidden(e) }), x.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({ serialize: function() { return x.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = x.prop(this, "elements"); return e ? x.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e)) }).map(function(e, t) { var n = x(this).val(); return null == n ? null : x.isArray(n) ? x.map(n, function(e) { return { name: t.name, value: e.replace(fn, "\r\n") } }) : { name: t.name, value: n.replace(fn, "\r\n") } }).get() } }), x.param = function(e, n) {
        var r, i = [],
            o = function(e, t) { t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() { o(this.name, this.value) });
        else
            for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function(t, i) { n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== x.type(t)) r(e, t);
        else
            for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { x.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), x.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) }, bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } });
    var mn, yn, vn = x.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = x.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try { yn = o.href } catch (Ln) { yn = a.createElement("a"), yn.href = "", yn = yn.href }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;

        function s(l) { var u; return o[l] = !0, x.each(e[l] || [], function(e, l) { var c = l(n, r, i); return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1) }), u }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) { var r, i, o = x.ajaxSettings.flatOptions || {}; for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]); return r && x.extend(!0, e, r), e }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({ url: e, type: a, dataType: "html", data: n }).done(function(e) { o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e) }).complete(r && function(e, t) { s.each(r, o || [e.responseText, t, e]) }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { x.fn[t] = function(e) { return this.on(t, e) } }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e) },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                h = x.Deferred(),
                g = x.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c) { c = {}; while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2] }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return 2 === b ? a : null },
                    setRequestHeader: function(e, t) { var n = e.toLowerCase(); return b || (e = v[n] = v[n] || e, y[e] = t), this },
                    overrideMimeType: function(e) { return b || (p.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) { var t = e || w; return u && u.abort(t), k(0, t), this }
                };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
            w = "abort";
            for (i in { success: 1, error: 1, complete: 1 }) C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() { C.abort("timeout") }, p.timeout));
                try { b = 1, u.send(y, k) } catch (N) {
                    if (!(2 > b)) throw N;
                    k(-1, N)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) { return x.get(e, t, n, "json") },
        getScript: function(e, n) { return x.get(e, t, n, "script") }
    }), x.each(["get", "post"], function(e, n) { x[n] = function(e, r, i, o) { return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({ url: e, type: n, dataType: o, data: r, success: i }) } });

    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) { u.unshift(s); break }
        if (u[0] in r) a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) { a = s; break }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) { a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1])); break }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try { t = a(t) } catch (p) { return { state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o } }
        }
        return { state: "success", data: t }
    }
    x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) { return x.globalEval(e), e } } }), x.ajaxPrefilter("script", function(e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() { n && n.onload(t, !0) }
            }
        }
    });
    var Fn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Fn.pop() || x.expando + "_" + vn++; return this[e] = !0, e } }), x.ajaxPrefilter("json jsonp", function(n, r, i) { var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data"); return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() { return s || x.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", a = e[o], e[o] = function() { s = arguments }, i.always(function() { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t }), "script") : t });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() { var e; for (e in Pn) Pn[e](t, !0) };

    function In() { try { return new e.XMLHttpRequest } catch (t) {} }

    function zn() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() { return !this.isLocal && In() || zn() } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try { for (s in i) l.setRequestHeader(s, i[s]) } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try { c = l.statusText } catch (f) { c = "" }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) { i || o(-1, d) }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() { r && r(t, !0) }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Yn.exec(t),
                    o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                    a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function Kn() { return setTimeout(function() { Xn = t }), Xn = x.now() }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]),
            o = 0,
            a = i.length;
        for (; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = x.Deferred().always(function() { delete l.elem }),
            l = function() {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for (; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing); return u.tweens.push(r), r },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(u, e, c, u.opts)) return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        },
        prefilter: function(e, t) { t ? Gn.unshift(e) : Gn.push(e) }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this,
            c = {},
            p = e.style,
            f = e.nodeType && nn(e),
            d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() { s.unqueued || l() }), s.unqueued++, u.always(function() { u.always(function() { s.unqueued--, x.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] }));
        for (r in t)
            if (i = t[r], Vn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
                c[r] = d && d[r] || x.style(e, r)
            }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() { x(e).hide() }), u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) x.style(e, t, c[t])
            });
            for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) { return new rr.prototype.init(e, t, n, r, i) }
    x.Tween = rr, rr.prototype = { constructor: rr, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px") }, cur: function() { var e = rr.propHooks[this.prop]; return e && e.get ? e.get(this) : rr.propHooks._default.get(this) }, run: function(e) { var t, n = rr.propHooks[this.prop]; return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function(e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i) }
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
                o = x.speed(t, n, r),
                a = function() {
                    var t = er(this, x.extend({}, e), o);
                    (i || x._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = x.timers,
                    a = x._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = x.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    x.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { x.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), x.speed = function(e, t, n) { var r = e && "object" == typeof e ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t }; return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() { x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue) }, r }, x.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 } }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
        var e, n = x.timers,
            r = 0;
        for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function(e) { e() && x.timers.push(e) && x.fx.start() }, x.fx.interval = 13, x.fx.start = function() { Un || (Un = setInterval(x.fx.tick, x.fx.interval)) }, x.fx.stop = function() { clearInterval(Un), Un = null }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) { return x.grep(x.timers, function(t) { return e === t.elem }).length }), x.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) { x.offset.setOffset(this, e, t) });
        var n, r, o = { top: 0, left: 0 },
            a = this[0],
            s = a && a.ownerDocument;
        if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e),
                o = i.offset(),
                a = x.css(e, "top"),
                s = x.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
                u = {},
                c = {},
                p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = { top: 0, left: 0 },
                    r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var e = this.offsetParent || s; while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent; return e || s }) }
    }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) { return x.access(this, function(e, i, o) { var a = or(e); return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t) }, e, i, arguments.length, null) }
    });

    function or(e) { return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 }
    x.each({ Height: "height", Width: "width" }, function(e, n) {
        x.each({ padding: "inner" + e, content: n, "": "outer" + e }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) { var o; return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s) }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function() { return this.length }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() { return x }))
})(window);
/**
 * Swiper 6.0.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 15, 2020
 */

(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (global = global || self, global.Swiper = factory());
}(this, (function() {
    'use strict';

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function _extends() {
        _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }

            return target;
        };

        return _extends.apply(this, arguments);
    }

    /**
     * SSR Window 3.0.0-alpha.4
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: May 20, 2020
     */

    /* eslint-disable no-param-reassign */
    function isObject(obj) {
        return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }

    function extend(target, src) {
        if (target === void 0) {
            target = {};
        }

        if (src === void 0) {
            src = {};
        }

        Object.keys(src).forEach(function(key) {
            if (typeof target[key] === 'undefined') target[key] = src[key];
            else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
                extend(target[key], src[key]);
            }
        });
    }

    var ssrDocument = {
        body: {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        activeElement: {
            blur: function blur() {},
            nodeName: ''
        },
        querySelector: function querySelector() {
            return null;
        },
        querySelectorAll: function querySelectorAll() {
            return [];
        },
        getElementById: function getElementById() {
            return null;
        },
        createEvent: function createEvent() {
            return {
                initEvent: function initEvent() {}
            };
        },
        createElement: function createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function setAttribute() {},
                getElementsByTagName: function getElementsByTagName() {
                    return [];
                }
            };
        },
        createElementNS: function createElementNS() {
            return {};
        },
        importNode: function importNode() {
            return null;
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
        }
    };

    function getDocument() {
        var doc = typeof document !== 'undefined' ? document : {};
        extend(doc, ssrDocument);
        return doc;
    }

    var ssrWindow = {
        document: ssrDocument,
        navigator: {
            userAgent: ''
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
        },
        history: {
            replaceState: function replaceState() {},
            pushState: function pushState() {},
            go: function go() {},
            back: function back() {}
        },
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        getComputedStyle: function getComputedStyle() {
            return {
                getPropertyValue: function getPropertyValue() {
                    return '';
                }
            };
        },
        Image: function Image() {},
        Date: function Date() {},
        screen: {},
        setTimeout: function setTimeout() {},
        clearTimeout: function clearTimeout() {},
        matchMedia: function matchMedia() {
            return {};
        },
        requestAnimationFrame: function requestAnimationFrame(callback) {
            if (typeof setTimeout === 'undefined') {
                callback();
                return null;
            }

            return setTimeout(callback, 0);
        },
        cancelAnimationFrame: function cancelAnimationFrame(id) {
            if (typeof setTimeout === 'undefined') {
                return;
            }

            clearTimeout(id);
        }
    };

    function getWindow() {
        var win = typeof window !== 'undefined' ? window : {};
        extend(win, ssrWindow);
        return win;
    }

    /**
     * Dom7 3.0.0-alpha.7
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * https://framework7.io/docs/dom7.html
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: July 14, 2020
     */

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };

        return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct;
        } else {
            _construct = function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a);
                var instance = new Constructor();
                if (Class) _setPrototypeOf(instance, Class.prototype);
                return instance;
            };
        }

        return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;

        _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;

            if (typeof Class !== "function") {
                throw new TypeError("Super expression must either be null or a function");
            }

            if (typeof _cache !== "undefined") {
                if (_cache.has(Class)) return _cache.get(Class);

                _cache.set(Class, Wrapper);
            }

            function Wrapper() {
                return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }

            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            return _setPrototypeOf(Wrapper, Class);
        };

        return _wrapNativeSuper(Class);
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
    }
    /* eslint-disable no-proto */


    function makeReactive(obj) {
        var proto = obj.__proto__;
        Object.defineProperty(obj, '__proto__', {
            get: function get() {
                return proto;
            },
            set: function set(value) {
                proto.__proto__ = value;
            }
        });
    }

    var Dom7 = /*#__PURE__*/ function(_Array) {
        _inheritsLoose(Dom7, _Array);

        function Dom7(items) {
            var _this;

            _this = _Array.call.apply(_Array, [this].concat(items)) || this;
            makeReactive(_assertThisInitialized(_this));
            return _this;
        }

        return Dom7;
    }( /*#__PURE__*/ _wrapNativeSuper(Array));

    function arrayFlat(arr) {
        if (arr === void 0) {
            arr = [];
        }

        var res = [];
        arr.forEach(function(el) {
            if (Array.isArray(el)) {
                res.push.apply(res, arrayFlat(el));
            } else {
                res.push(el);
            }
        });
        return res;
    }

    function arrayFilter(arr, callback) {
        return Array.prototype.filter.call(arr, callback);
    }

    function arrayUnique(arr) {
        var uniqueArray = [];

        for (var i = 0; i < arr.length; i += 1) {
            if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
        }

        return uniqueArray;
    }

    function qsa(selector, context) {
        if (typeof selector !== 'string') {
            return [selector];
        }

        var a = [];
        var res = context.querySelectorAll(selector);

        for (var i = 0; i < res.length; i += 1) {
            a.push(res[i]);
        }

        return a;
    }

    function $(selector, context) {
        var window = getWindow();
        var document = getDocument();
        var arr = [];

        if (!context && selector instanceof Dom7) {
            return selector;
        }

        if (!selector) {
            return new Dom7(arr);
        }

        if (typeof selector === 'string') {
            var html = selector.trim();

            if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                var toCreate = 'div';
                if (html.indexOf('<li') === 0) toCreate = 'ul';
                if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                if (html.indexOf('<tbody') === 0) toCreate = 'table';
                if (html.indexOf('<option') === 0) toCreate = 'select';
                var tempParent = document.createElement(toCreate);
                tempParent.innerHTML = html;

                for (var i = 0; i < tempParent.childNodes.length; i += 1) {
                    arr.push(tempParent.childNodes[i]);
                }
            } else {
                arr = qsa(selector.trim(), context || document);
            } // arr = qsa(selector, document);

        } else if (selector.nodeType || selector === window || selector === document) {
            arr.push(selector);
        } else if (Array.isArray(selector)) {
            if (selector instanceof Dom7) return selector;
            arr = selector;
        }

        return new Dom7(arrayUnique(arr));
    }

    $.fn = Dom7.prototype;

    function addClass() {
        for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
            classes[_key] = arguments[_key];
        }

        var classNames = arrayFlat(classes.map(function(c) {
            return c.split(' ');
        }));
        this.forEach(function(el) {
            var _el$classList;

            (_el$classList = el.classList).add.apply(_el$classList, classNames);
        });
        return this;
    }

    function removeClass() {
        for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            classes[_key2] = arguments[_key2];
        }

        var classNames = arrayFlat(classes.map(function(c) {
            return c.split(' ');
        }));
        this.forEach(function(el) {
            var _el$classList2;

            (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
        });
        return this;
    }

    function toggleClass() {
        for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            classes[_key3] = arguments[_key3];
        }

        var classNames = arrayFlat(classes.map(function(c) {
            return c.split(' ');
        }));
        this.forEach(function(el) {
            classNames.forEach(function(className) {
                el.classList.toggle(className);
            });
        });
    }

    function hasClass() {
        for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            classes[_key4] = arguments[_key4];
        }

        var classNames = arrayFlat(classes.map(function(c) {
            return c.split(' ');
        }));
        return arrayFilter(this, function(el) {
            return classNames.filter(function(className) {
                return el.classList.contains(className);
            }).length > 0;
        }).length > 0;
    }

    function attr(attrs, value) {
        if (arguments.length === 1 && typeof attrs === 'string') {
            // Get attr
            if (this[0]) return this[0].getAttribute(attrs);
            return undefined;
        } // Set attrs


        for (var i = 0; i < this.length; i += 1) {
            if (arguments.length === 2) {
                // String
                this[i].setAttribute(attrs, value);
            } else {
                // Object
                for (var attrName in attrs) {
                    this[i][attrName] = attrs[attrName];
                    this[i].setAttribute(attrName, attrs[attrName]);
                }
            }
        }

        return this;
    }

    function removeAttr(attr) {
        for (var i = 0; i < this.length; i += 1) {
            this[i].removeAttribute(attr);
        }

        return this;
    }

    function transform(transform) {
        for (var i = 0; i < this.length; i += 1) {
            this[i].style.transform = transform;
        }

        return this;
    }

    function transition(duration) {
        for (var i = 0; i < this.length; i += 1) {
            this[i].style.transition = typeof duration !== 'string' ? duration + "ms" : duration;
        }

        return this;
    }

    function on() {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
        }

        var eventType = args[0],
            targetSelector = args[1],
            listener = args[2],
            capture = args[3];

        if (typeof args[1] === 'function') {
            eventType = args[0];
            listener = args[1];
            capture = args[2];
            targetSelector = undefined;
        }

        if (!capture) capture = false;

        function handleLiveEvent(e) {
            var target = e.target;
            if (!target) return;
            var eventData = e.target.dom7EventData || [];

            if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
            }

            if ($(target).is(targetSelector)) listener.apply(target, eventData);
            else {
                var _parents = $(target).parents(); // eslint-disable-line


                for (var k = 0; k < _parents.length; k += 1) {
                    if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
                }
            }
        }

        function handleEvent(e) {
            var eventData = e && e.target ? e.target.dom7EventData || [] : [];

            if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
            }

            listener.apply(this, eventData);
        }

        var events = eventType.split(' ');
        var j;

        for (var i = 0; i < this.length; i += 1) {
            var el = this[i];

            if (!targetSelector) {
                for (j = 0; j < events.length; j += 1) {
                    var event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener: listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                }
            } else {
                // Live events
                for (j = 0; j < events.length; j += 1) {
                    var _event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

                    el.dom7LiveListeners[_event].push({
                        listener: listener,
                        proxyListener: handleLiveEvent
                    });

                    el.addEventListener(_event, handleLiveEvent, capture);
                }
            }
        }

        return this;
    }

    function off() {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
        }

        var eventType = args[0],
            targetSelector = args[1],
            listener = args[2],
            capture = args[3];

        if (typeof args[1] === 'function') {
            eventType = args[0];
            listener = args[1];
            capture = args[2];
            targetSelector = undefined;
        }

        if (!capture) capture = false;
        var events = eventType.split(' ');

        for (var i = 0; i < events.length; i += 1) {
            var event = events[i];

            for (var j = 0; j < this.length; j += 1) {
                var el = this[j];
                var handlers = void 0;

                if (!targetSelector && el.dom7Listeners) {
                    handlers = el.dom7Listeners[event];
                } else if (targetSelector && el.dom7LiveListeners) {
                    handlers = el.dom7LiveListeners[event];
                }

                if (handlers && handlers.length) {
                    for (var k = handlers.length - 1; k >= 0; k -= 1) {
                        var handler = handlers[k];

                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
        }

        return this;
    }

    function trigger() {
        var window = getWindow();

        for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
        }

        var events = args[0].split(' ');
        var eventData = args[1];

        for (var i = 0; i < events.length; i += 1) {
            var event = events[i];

            for (var j = 0; j < this.length; j += 1) {
                var el = this[j];

                if (window.CustomEvent) {
                    var evt = new window.CustomEvent(event, {
                        detail: eventData,
                        bubbles: true,
                        cancelable: true
                    });
                    el.dom7EventData = args.filter(function(data, dataIndex) {
                        return dataIndex > 0;
                    });
                    el.dispatchEvent(evt);
                    el.dom7EventData = [];
                    delete el.dom7EventData;
                }
            }
        }

        return this;
    }

    function transitionEnd(callback) {
        var dom = this;

        function fireCallBack(e) {
            if (e.target !== this) return;
            callback.call(this, e);
            dom.off('transitionend', fireCallBack);
        }

        if (callback) {
            dom.on('transitionend', fireCallBack);
        }

        return this;
    }

    function outerWidth(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                var _styles = this.styles();

                return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
            }

            return this[0].offsetWidth;
        }

        return null;
    }

    function outerHeight(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                var _styles2 = this.styles();

                return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
            }

            return this[0].offsetHeight;
        }

        return null;
    }

    function offset() {
        if (this.length > 0) {
            var window = getWindow();
            var document = getDocument();
            var el = this[0];
            var box = el.getBoundingClientRect();
            var body = document.body;
            var clientTop = el.clientTop || body.clientTop || 0;
            var clientLeft = el.clientLeft || body.clientLeft || 0;
            var scrollTop = el === window ? window.scrollY : el.scrollTop;
            var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
            return {
                top: box.top + scrollTop - clientTop,
                left: box.left + scrollLeft - clientLeft
            };
        }

        return null;
    }

    function styles() {
        var window = getWindow();
        if (this[0]) return window.getComputedStyle(this[0], null);
        return {};
    }

    function css(props, value) {
        var window = getWindow();
        var i;

        if (arguments.length === 1) {
            if (typeof props === 'string') {
                // .css('width')
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                // .css({ width: '100px' })
                for (i = 0; i < this.length; i += 1) {
                    for (var _prop in props) {
                        this[i].style[_prop] = props[_prop];
                    }
                }

                return this;
            }
        }

        if (arguments.length === 2 && typeof props === 'string') {
            // .css('width', '100px')
            for (i = 0; i < this.length; i += 1) {
                this[i].style[props] = value;
            }

            return this;
        }

        return this;
    }

    function each(callback) {
        if (!callback) return this;
        this.forEach(function(el, index) {
            callback.apply(el, [el, index]);
        });
        return this;
    }

    function filter(callback) {
        var result = arrayFilter(this, callback);
        return $(result);
    }

    function html(html) {
        if (typeof html === 'undefined') {
            return this[0] ? this[0].innerHTML : null;
        }

        for (var i = 0; i < this.length; i += 1) {
            this[i].innerHTML = html;
        }

        return this;
    }

    function text(text) {
        if (typeof text === 'undefined') {
            return this[0] ? this[0].textContent.trim() : null;
        }

        for (var i = 0; i < this.length; i += 1) {
            this[i].textContent = text;
        }

        return this;
    }

    function is(selector) {
        var window = getWindow();
        var document = getDocument();
        var el = this[0];
        var compareWith;
        var i;
        if (!el || typeof selector === 'undefined') return false;

        if (typeof selector === 'string') {
            if (el.matches) return el.matches(selector);
            if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
            if (el.msMatchesSelector) return el.msMatchesSelector(selector);
            compareWith = $(selector);

            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) return true;
            }

            return false;
        }

        if (selector === document) {
            return el === document;
        }

        if (selector === window) {
            return el === window;
        }

        if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [selector] : selector;

            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) return true;
            }

            return false;
        }

        return false;
    }

    function index() {
        var child = this[0];
        var i;

        if (child) {
            i = 0; // eslint-disable-next-line

            while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1) i += 1;
            }

            return i;
        }

        return undefined;
    }

    function eq(index) {
        if (typeof index === 'undefined') return this;
        var length = this.length;

        if (index > length - 1) {
            return $([]);
        }

        if (index < 0) {
            var returnIndex = length + index;
            if (returnIndex < 0) return $([]);
            return $([this[returnIndex]]);
        }

        return $([this[index]]);
    }

    function append() {
        var newChild;
        var document = getDocument();

        for (var k = 0; k < arguments.length; k += 1) {
            newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

            for (var i = 0; i < this.length; i += 1) {
                if (typeof newChild === 'string') {
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = newChild;

                    while (tempDiv.firstChild) {
                        this[i].appendChild(tempDiv.firstChild);
                    }
                } else if (newChild instanceof Dom7) {
                    for (var j = 0; j < newChild.length; j += 1) {
                        this[i].appendChild(newChild[j]);
                    }
                } else {
                    this[i].appendChild(newChild);
                }
            }
        }

        return this;
    }

    function prepend(newChild) {
        var document = getDocument();
        var i;
        var j;

        for (i = 0; i < this.length; i += 1) {
            if (typeof newChild === 'string') {
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;

                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                    this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                }
            } else if (newChild instanceof Dom7) {
                for (j = 0; j < newChild.length; j += 1) {
                    this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                }
            } else {
                this[i].insertBefore(newChild, this[i].childNodes[0]);
            }
        }

        return this;
    }

    function next(selector) {
        if (this.length > 0) {
            if (selector) {
                if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
                    return $([this[0].nextElementSibling]);
                }

                return $([]);
            }

            if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
            return $([]);
        }

        return $([]);
    }

    function nextAll(selector) {
        var nextEls = [];
        var el = this[0];
        if (!el) return $([]);

        while (el.nextElementSibling) {
            var _next = el.nextElementSibling; // eslint-disable-line

            if (selector) {
                if ($(_next).is(selector)) nextEls.push(_next);
            } else nextEls.push(_next);

            el = _next;
        }

        return $(nextEls);
    }

    function prev(selector) {
        if (this.length > 0) {
            var el = this[0];

            if (selector) {
                if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
                    return $([el.previousElementSibling]);
                }

                return $([]);
            }

            if (el.previousElementSibling) return $([el.previousElementSibling]);
            return $([]);
        }

        return $([]);
    }

    function prevAll(selector) {
        var prevEls = [];
        var el = this[0];
        if (!el) return $([]);

        while (el.previousElementSibling) {
            var _prev = el.previousElementSibling; // eslint-disable-line

            if (selector) {
                if ($(_prev).is(selector)) prevEls.push(_prev);
            } else prevEls.push(_prev);

            el = _prev;
        }

        return $(prevEls);
    }

    function parent(selector) {
        var parents = []; // eslint-disable-line

        for (var i = 0; i < this.length; i += 1) {
            if (this[i].parentNode !== null) {
                if (selector) {
                    if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                } else {
                    parents.push(this[i].parentNode);
                }
            }
        }

        return $(parents);
    }

    function parents(selector) {
        var parents = []; // eslint-disable-line

        for (var i = 0; i < this.length; i += 1) {
            var _parent = this[i].parentNode; // eslint-disable-line

            while (_parent) {
                if (selector) {
                    if ($(_parent).is(selector)) parents.push(_parent);
                } else {
                    parents.push(_parent);
                }

                _parent = _parent.parentNode;
            }
        }

        return $(parents);
    }

    function closest(selector) {
        var closest = this; // eslint-disable-line

        if (typeof selector === 'undefined') {
            return $([]);
        }

        if (!closest.is(selector)) {
            closest = closest.parents(selector).eq(0);
        }

        return closest;
    }

    function find(selector) {
        var foundElements = [];

        for (var i = 0; i < this.length; i += 1) {
            var found = this[i].querySelectorAll(selector);

            for (var j = 0; j < found.length; j += 1) {
                foundElements.push(found[j]);
            }
        }

        return $(foundElements);
    }

    function children(selector) {
        var children = []; // eslint-disable-line

        for (var i = 0; i < this.length; i += 1) {
            var childNodes = this[i].children;

            for (var j = 0; j < childNodes.length; j += 1) {
                if (!selector || $(childNodes[j]).is(selector)) {
                    children.push(childNodes[j]);
                }
            }
        }

        return $(children);
    }

    function remove() {
        for (var i = 0; i < this.length; i += 1) {
            if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
        }

        return this;
    }

    var Methods = {
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        attr: attr,
        removeAttr: removeAttr,
        transform: transform,
        transition: transition,
        on: on,
        off: off,
        trigger: trigger,
        transitionEnd: transitionEnd,
        outerWidth: outerWidth,
        outerHeight: outerHeight,
        styles: styles,
        offset: offset,
        css: css,
        each: each,
        html: html,
        text: text,
        is: is,
        index: index,
        eq: eq,
        append: append,
        prepend: prepend,
        next: next,
        nextAll: nextAll,
        prev: prev,
        prevAll: prevAll,
        parent: parent,
        parents: parents,
        closest: closest,
        find: find,
        children: children,
        filter: filter,
        remove: remove
    };
    Object.keys(Methods).forEach(function(methodName) {
        $.fn[methodName] = Methods[methodName];
    });

    function deleteProps(obj) {
        var object = obj;
        Object.keys(object).forEach(function(key) {
            try {
                object[key] = null;
            } catch (e) { // no getter for object
            }

            try {
                delete object[key];
            } catch (e) { // something got wrong
            }
        });
    }

    function nextTick(callback, delay) {
        if (delay === void 0) {
            delay = 0;
        }

        return setTimeout(callback, delay);
    }

    function now() {
        return Date.now();
    }

    function getTranslate(el, axis) {
        if (axis === void 0) {
            axis = 'x';
        }

        var window = getWindow();
        var matrix;
        var curTransform;
        var transformMatrix;
        var curStyle = window.getComputedStyle(el, null);

        if (window.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;

            if (curTransform.split(',').length > 6) {
                curTransform = curTransform.split(', ').map(function(a) {
                    return a.replace(',', '.');
                }).join(', ');
            } // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case


            transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
        } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
            matrix = transformMatrix.toString().split(',');
        }

        if (axis === 'x') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
            else curTransform = parseFloat(matrix[4]);
        }

        if (axis === 'y') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
            else curTransform = parseFloat(matrix[5]);
        }

        return curTransform || 0;
    }

    function isObject$1(o) {
        return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    }

    function extend$1() {
        var to = Object(arguments.length <= 0 ? undefined : arguments[0]);

        for (var i = 1; i < arguments.length; i += 1) {
            var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

            if (nextSource !== undefined && nextSource !== null) {
                var keysArray = Object.keys(Object(nextSource));

                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

                    if (desc !== undefined && desc.enumerable) {
                        if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
                            extend$1(to[nextKey], nextSource[nextKey]);
                        } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
                            to[nextKey] = {};
                            extend$1(to[nextKey], nextSource[nextKey]);
                        } else {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
        }

        return to;
    }

    function bindModuleMethods(instance, obj) {
        Object.keys(obj).forEach(function(key) {
            if (isObject$1(obj[key])) {
                Object.keys(obj[key]).forEach(function(subKey) {
                    if (typeof obj[key][subKey] === 'function') {
                        obj[key][subKey] = obj[key][subKey].bind(instance);
                    }
                });
            }

            instance[key] = obj[key];
        });
    }

    var support;

    function calcSupport() {
        var window = getWindow();
        var document = getDocument();
        return {
            touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
            observer: function checkObserver() {
                return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
            }(),
            passiveListener: function checkPassiveListener() {
                var supportsPassive = false;

                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        // eslint-disable-next-line
                        get: function get() {
                            supportsPassive = true;
                        }
                    });
                    window.addEventListener('testPassiveListener', null, opts);
                } catch (e) { // No support
                }

                return supportsPassive;
            }(),
            gestures: function checkGestures() {
                return 'ongesturestart' in window;
            }()
        };
    }

    function getSupport() {
        if (!support) {
            support = calcSupport();
        }

        return support;
    }

    var device;

    function calcDevice(_temp) {
        var _ref = _temp === void 0 ? {} : _temp,
            userAgent = _ref.userAgent;

        var support = getSupport();
        var window = getWindow();
        var platform = window.navigator.platform;
        var ua = userAgent || window.navigator.userAgent;
        var device = {
            ios: false,
            android: false
        };
        var screenWidth = window.screen.width;
        var screenHeight = window.screen.height;
        var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        var windows = platform === 'Win32';
        var macos = platform === 'MacIntel'; // iPadOs 13 fix

        var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768'];

        if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
            ipad = ua.match(/(Version)\/([\d.]+)/);
            if (!ipad) ipad = [0, 1, '13_0_0'];
            macos = false;
        } // Android


        if (android && !windows) {
            device.os = 'android';
            device.android = true;
        }

        if (ipad || iphone || ipod) {
            device.os = 'ios';
            device.ios = true;
        } // Export object


        return device;
    }

    function getDevice(overrides) {
        if (overrides === void 0) {
            overrides = {};
        }

        if (!device) {
            device = calcDevice(overrides);
        }

        return device;
    }

    var browser;

    function calcBrowser() {
        var window = getWindow();

        function isSafari() {
            var ua = window.navigator.userAgent.toLowerCase();
            return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
        }

        return {
            isEdge: !!window.navigator.userAgent.match(/Edge/g),
            isSafari: isSafari(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
        };
    }

    function getBrowser() {
        if (!browser) {
            browser = calcBrowser();
        }

        return browser;
    }

    var modular = {
        useParams: function useParams(instanceParams) {
            var instance = this;
            if (!instance.modules) return;
            Object.keys(instance.modules).forEach(function(moduleName) {
                var module = instance.modules[moduleName]; // Extend params

                if (module.params) {
                    extend$1(instanceParams, module.params);
                }
            });
        },
        useModules: function useModules(modulesParams) {
            if (modulesParams === void 0) {
                modulesParams = {};
            }

            var instance = this;
            if (!instance.modules) return;
            Object.keys(instance.modules).forEach(function(moduleName) {
                var module = instance.modules[moduleName];
                var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

                if (module.on && instance.on) {
                    Object.keys(module.on).forEach(function(moduleEventName) {
                        instance.on(moduleEventName, module.on[moduleEventName]);
                    });
                } // Module create callback


                if (module.create) {
                    module.create.bind(instance)(moduleParams);
                }
            });
        }
    };

    /* eslint-disable no-underscore-dangle */
    var eventsEmitter = {
        on: function on(events, handler, priority) {
            var self = this;
            if (typeof handler !== 'function') return self;
            var method = priority ? 'unshift' : 'push';
            events.split(' ').forEach(function(event) {
                if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                self.eventsListeners[event][method](handler);
            });
            return self;
        },
        once: function once(events, handler, priority) {
            var self = this;
            if (typeof handler !== 'function') return self;

            function onceHandler() {
                self.off(events, onceHandler);

                if (onceHandler.__emitterProxy) {
                    delete onceHandler.__emitterProxy;
                }

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                handler.apply(self, args);
            }

            onceHandler.__emitterProxy = handler;
            return self.on(events, onceHandler, priority);
        },
        onAny: function onAny(handler, priority) {
            var self = this;
            if (typeof handler !== 'function') return self;
            var method = priority ? 'unshift' : 'push';

            if (self.eventsAnyListeners.indexOf(handler) < 0) {
                self.eventsAnyListeners[method](handler);
            }

            return self;
        },
        offAny: function offAny(handler) {
            var self = this;
            if (!self.eventsAnyListeners) return self;
            var index = self.eventsAnyListeners.indexOf(handler);

            if (index >= 0) {
                self.eventsAnyListeners.splice(index, 1);
            }

            return self;
        },
        off: function off(events, handler) {
            var self = this;
            if (!self.eventsListeners) return self;
            events.split(' ').forEach(function(event) {
                if (typeof handler === 'undefined') {
                    self.eventsListeners[event] = [];
                } else if (self.eventsListeners[event]) {
                    self.eventsListeners[event].forEach(function(eventHandler, index) {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                            self.eventsListeners[event].splice(index, 1);
                        }
                    });
                }
            });
            return self;
        },
        emit: function emit() {
            var self = this;
            if (!self.eventsListeners) return self;
            var events;
            var data;
            var context;

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            if (typeof args[0] === 'string' || Array.isArray(args[0])) {
                events = args[0];
                data = args.slice(1, args.length);
                context = self;
            } else {
                events = args[0].events;
                data = args[0].data;
                context = args[0].context || self;
            }

            data.unshift(context);
            var eventsArray = Array.isArray(events) ? events : events.split(' ');
            eventsArray.forEach(function(event) {
                if (self.eventsListeners && self.eventsListeners[event]) {
                    var handlers = [];
                    self.eventsListeners[event].forEach(function(eventHandler) {
                        handlers.push(eventHandler);
                    });
                    handlers.forEach(function(eventHandler) {
                        eventHandler.apply(context, data);
                    });
                }
            });
            return self;
        }
    };

    function updateSize() {
        var swiper = this;
        var width;
        var height;
        var $el = swiper.$el;

        if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
            width = swiper.params.width;
        } else {
            width = $el[0].clientWidth;
        }

        if (typeof swiper.params.height !== 'undefined' && swiper.params.width !== null) {
            height = swiper.params.height;
        } else {
            height = $el[0].clientHeight;
        }

        if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
            return;
        } // Subtract paddings


        width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
        height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
        if (Number.isNaN(width)) width = 0;
        if (Number.isNaN(height)) height = 0;
        extend$1(swiper, {
            width: width,
            height: height,
            size: swiper.isHorizontal() ? width : height
        });
    }

    function updateSlides() {
        var swiper = this;
        var window = getWindow();
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl,
            swiperSize = swiper.size,
            rtl = swiper.rtlTranslate,
            wrongRTL = swiper.wrongRTL;
        var isVirtual = swiper.virtual && params.virtual.enabled;
        var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        var slides = $wrapperEl.children("." + swiper.params.slideClass);
        var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        var snapGrid = [];
        var slidesGrid = [];
        var slidesSizesGrid = [];

        function slidesForMargin(slideEl, slideIndex) {
            if (!params.cssMode) return true;

            if (slideIndex === slides.length - 1) {
                return false;
            }

            return true;
        }

        var offsetBefore = params.slidesOffsetBefore;

        if (typeof offsetBefore === 'function') {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
        }

        var offsetAfter = params.slidesOffsetAfter;

        if (typeof offsetAfter === 'function') {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
        }

        var previousSnapGridLength = swiper.snapGrid.length;
        var previousSlidesGridLength = swiper.snapGrid.length;
        var spaceBetween = params.spaceBetween;
        var slidePosition = -offsetBefore;
        var prevSlideSize = 0;
        var index = 0;

        if (typeof swiperSize === 'undefined') {
            return;
        }

        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
        }

        swiper.virtualSize = -spaceBetween; // reset margins

        if (rtl) slides.css({
            marginLeft: '',
            marginTop: ''
        });
        else slides.css({
            marginRight: '',
            marginBottom: ''
        });
        var slidesNumberEvenToRows;

        if (params.slidesPerColumn > 1) {
            if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
                slidesNumberEvenToRows = slidesLength;
            } else {
                slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
            }

            if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
                slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
            }
        } // Calc slides


        var slideSize;
        var slidesPerColumn = params.slidesPerColumn;
        var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
        var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

        for (var i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            var slide = slides.eq(i);

            if (params.slidesPerColumn > 1) {
                // Set slides order
                var newSlideOrderIndex = void 0;
                var column = void 0;
                var row = void 0;

                if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
                    var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
                    var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
                    var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
                    row = Math.floor(slideIndexInGroup / columnsInGroup);
                    column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
                    newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                    slide.css({
                        '-webkit-box-ordinal-group': newSlideOrderIndex,
                        '-moz-box-ordinal-group': newSlideOrderIndex,
                        '-ms-flex-order': newSlideOrderIndex,
                        '-webkit-order': newSlideOrderIndex,
                        order: newSlideOrderIndex
                    });
                } else if (params.slidesPerColumnFill === 'column') {
                    column = Math.floor(i / slidesPerColumn);
                    row = i - column * slidesPerColumn;

                    if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
                        row += 1;

                        if (row >= slidesPerColumn) {
                            row = 0;
                            column += 1;
                        }
                    }
                } else {
                    row = Math.floor(i / slidesPerRow);
                    column = i - row * slidesPerRow;
                }

                slide.css("margin-" + (swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
            }

            if (slide.css('display') === 'none') continue; // eslint-disable-line

            if (params.slidesPerView === 'auto') {
                var slideStyles = window.getComputedStyle(slide[0], null);
                var currentTransform = slide[0].style.transform;
                var currentWebKitTransform = slide[0].style.webkitTransform;

                if (currentTransform) {
                    slide[0].style.transform = 'none';
                }

                if (currentWebKitTransform) {
                    slide[0].style.webkitTransform = 'none';
                }

                if (params.roundLengths) {
                    slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                } else {
                    // eslint-disable-next-line
                    if (swiper.isHorizontal()) {
                        var width = parseFloat(slideStyles.getPropertyValue('width') || 0);
                        var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left') || 0);
                        var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right') || 0);
                        var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left') || 0);
                        var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right') || 0);
                        var boxSizing = slideStyles.getPropertyValue('box-sizing');

                        if (boxSizing && boxSizing === 'border-box') {
                            slideSize = width + marginLeft + marginRight;
                        } else {
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
                        }
                    } else {
                        var height = parseFloat(slideStyles.getPropertyValue('height') || 0);
                        var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top') || 0);
                        var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom') || 0);
                        var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top') || 0);
                        var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom') || 0);

                        var _boxSizing = slideStyles.getPropertyValue('box-sizing');

                        if (_boxSizing && _boxSizing === 'border-box') {
                            slideSize = height + marginTop + marginBottom;
                        } else {
                            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
                        }
                    }
                }

                if (currentTransform) {
                    slide[0].style.transform = currentTransform;
                }

                if (currentWebKitTransform) {
                    slide[0].style.webkitTransform = currentWebKitTransform;
                }

                if (params.roundLengths) slideSize = Math.floor(slideSize);
            } else {
                slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                if (params.roundLengths) slideSize = Math.floor(slideSize);

                if (slides[i]) {
                    if (swiper.isHorizontal()) {
                        slides[i].style.width = slideSize + "px";
                    } else {
                        slides[i].style.height = slideSize + "px";
                    }
                }
            }

            if (slides[i]) {
                slides[i].swiperSlideSize = slideSize;
            }

            slidesSizesGrid.push(slideSize);

            if (params.centeredSlides) {
                slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
            } else {
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }

            swiper.virtualSize += slideSize + spaceBetween;
            prevSlideSize = slideSize;
            index += 1;
        }

        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        var newSlidesGrid;

        if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
            $wrapperEl.css({
                width: swiper.virtualSize + params.spaceBetween + "px"
            });
        }

        if (params.setWrapperSize) {
            if (swiper.isHorizontal()) $wrapperEl.css({
                width: swiper.virtualSize + params.spaceBetween + "px"
            });
            else $wrapperEl.css({
                height: swiper.virtualSize + params.spaceBetween + "px"
            });
        }

        if (params.slidesPerColumn > 1) {
            swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
            if (swiper.isHorizontal()) $wrapperEl.css({
                width: swiper.virtualSize + params.spaceBetween + "px"
            });
            else $wrapperEl.css({
                height: swiper.virtualSize + params.spaceBetween + "px"
            });

            if (params.centeredSlides) {
                newSlidesGrid = [];

                for (var _i = 0; _i < snapGrid.length; _i += 1) {
                    var slidesGridItem = snapGrid[_i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
                }

                snapGrid = newSlidesGrid;
            }
        } // Remove last grid elements depending on width


        if (!params.centeredSlides) {
            newSlidesGrid = [];

            for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
                var _slidesGridItem = snapGrid[_i2];
                if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

                if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
                    newSlidesGrid.push(_slidesGridItem);
                }
            }

            snapGrid = newSlidesGrid;

            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                snapGrid.push(swiper.virtualSize - swiperSize);
            }
        }

        if (snapGrid.length === 0) snapGrid = [0];

        if (params.spaceBetween !== 0) {
            if (swiper.isHorizontal()) {
                if (rtl) slides.filter(slidesForMargin).css({
                    marginLeft: spaceBetween + "px"
                });
                else slides.filter(slidesForMargin).css({
                    marginRight: spaceBetween + "px"
                });
            } else slides.filter(slidesForMargin).css({
                marginBottom: spaceBetween + "px"
            });
        }

        if (params.centeredSlides && params.centeredSlidesBounds) {
            var allSlidesSize = 0;
            slidesSizesGrid.forEach(function(slideSizeValue) {
                allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
            });
            allSlidesSize -= params.spaceBetween;
            var maxSnap = allSlidesSize - swiperSize;
            snapGrid = snapGrid.map(function(snap) {
                if (snap < 0) return -offsetBefore;
                if (snap > maxSnap) return maxSnap + offsetAfter;
                return snap;
            });
        }

        if (params.centerInsufficientSlides) {
            var _allSlidesSize = 0;
            slidesSizesGrid.forEach(function(slideSizeValue) {
                _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
            });
            _allSlidesSize -= params.spaceBetween;

            if (_allSlidesSize < swiperSize) {
                var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
                snapGrid.forEach(function(snap, snapIndex) {
                    snapGrid[snapIndex] = snap - allSlidesOffset;
                });
                slidesGrid.forEach(function(snap, snapIndex) {
                    slidesGrid[snapIndex] = snap + allSlidesOffset;
                });
            }
        }

        extend$1(swiper, {
            slides: slides,
            snapGrid: snapGrid,
            slidesGrid: slidesGrid,
            slidesSizesGrid: slidesSizesGrid
        });

        if (slidesLength !== previousSlidesLength) {
            swiper.emit('slidesLengthChange');
        }

        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) swiper.checkOverflow();
            swiper.emit('snapGridLengthChange');
        }

        if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit('slidesGridLengthChange');
        }

        if (params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateSlidesOffset();
        }
    }

    function updateAutoHeight(speed) {
        var swiper = this;
        var activeSlides = [];
        var newHeight = 0;
        var i;

        if (typeof speed === 'number') {
            swiper.setTransition(speed);
        } else if (speed === true) {
            swiper.setTransition(swiper.params.speed);
        } // Find slides currently in view


        if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
            if (swiper.params.centeredSlides) {
                swiper.visibleSlides.each(function(slide) {
                    activeSlides.push(slide);
                });
            } else {
                for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                    var index = swiper.activeIndex + i;
                    if (index > swiper.slides.length) break;
                    activeSlides.push(swiper.slides.eq(index)[0]);
                }
            }
        } else {
            activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
        } // Find new height from highest slide in view


        for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== 'undefined') {
                var height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
        } // Update Height


        if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
    }

    function updateSlidesOffset() {
        var swiper = this;
        var slides = swiper.slides;

        for (var i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
    }

    function updateSlidesProgress(translate) {
        if (translate === void 0) {
            translate = this && this.translate || 0;
        }

        var swiper = this;
        var params = swiper.params;
        var slides = swiper.slides,
            rtl = swiper.rtlTranslate;
        if (slides.length === 0) return;
        if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
        var offsetCenter = -translate;
        if (rtl) offsetCenter = translate; // Visible Slides

        slides.removeClass(params.slideVisibleClass);
        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];

        for (var i = 0; i < slides.length; i += 1) {
            var slide = slides[i];
            var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

            if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
                var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
            }

            slide.progress = rtl ? -slideProgress : slideProgress;
        }

        swiper.visibleSlides = $(swiper.visibleSlides);
    }

    function updateProgress(translate) {
        var swiper = this;

        if (typeof translate === 'undefined') {
            var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

            translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
        }

        var params = swiper.params;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        var progress = swiper.progress,
            isBeginning = swiper.isBeginning,
            isEnd = swiper.isEnd;
        var wasBeginning = isBeginning;
        var wasEnd = isEnd;

        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / translatesDiff;
            isBeginning = progress <= 0;
            isEnd = progress >= 1;
        }

        extend$1(swiper, {
            progress: progress,
            isBeginning: isBeginning,
            isEnd: isEnd
        });
        if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

        if (isBeginning && !wasBeginning) {
            swiper.emit('reachBeginning toEdge');
        }

        if (isEnd && !wasEnd) {
            swiper.emit('reachEnd toEdge');
        }

        if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
            swiper.emit('fromEdge');
        }

        swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
        var swiper = this;
        var slides = swiper.slides,
            params = swiper.params,
            $wrapperEl = swiper.$wrapperEl,
            activeIndex = swiper.activeIndex,
            realIndex = swiper.realIndex;
        var isVirtual = swiper.virtual && params.virtual.enabled;
        slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
        var activeSlide;

        if (isVirtual) {
            activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
        } else {
            activeSlide = slides.eq(activeIndex);
        } // Active classes


        activeSlide.addClass(params.slideActiveClass);

        if (params.loop) {
            // Duplicate to all looped slides
            if (activeSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
            } else {
                $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
            }
        } // Next Slide


        var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

        if (params.loop && nextSlide.length === 0) {
            nextSlide = slides.eq(0);
            nextSlide.addClass(params.slideNextClass);
        } // Prev Slide


        var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

        if (params.loop && prevSlide.length === 0) {
            prevSlide = slides.eq(-1);
            prevSlide.addClass(params.slidePrevClass);
        }

        if (params.loop) {
            // Duplicate to all looped slides
            if (nextSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
            } else {
                $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
            }

            if (prevSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
            } else {
                $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
            }
        }

        swiper.emitSlidesClasses();
    }

    function updateActiveIndex(newActiveIndex) {
        var swiper = this;
        var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        var slidesGrid = swiper.slidesGrid,
            snapGrid = swiper.snapGrid,
            params = swiper.params,
            previousIndex = swiper.activeIndex,
            previousRealIndex = swiper.realIndex,
            previousSnapIndex = swiper.snapIndex;
        var activeIndex = newActiveIndex;
        var snapIndex;

        if (typeof activeIndex === 'undefined') {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                        activeIndex = i;
                    } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                        activeIndex = i + 1;
                    }
                } else if (translate >= slidesGrid[i]) {
                    activeIndex = i;
                }
            } // Normalize slideIndex


            if (params.normalizeSlideIndex) {
                if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
            }
        }

        if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate);
        } else {
            var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
            snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
        }

        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

        if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit('snapIndexChange');
            }

            return;
        } // Get real index


        var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
        extend$1(swiper, {
            snapIndex: snapIndex,
            realIndex: realIndex,
            previousIndex: previousIndex,
            activeIndex: activeIndex
        });
        swiper.emit('activeIndexChange');
        swiper.emit('snapIndexChange');

        if (previousRealIndex !== realIndex) {
            swiper.emit('realIndexChange');
        }

        if (swiper.initialized || swiper.params.runCallbacksOnInit) {
            swiper.emit('slideChange');
        }
    }

    function updateClickedSlide(e) {
        var swiper = this;
        var params = swiper.params;
        var slide = $(e.target).closest("." + params.slideClass)[0];
        var slideFound = false;

        if (slide) {
            for (var i = 0; i < swiper.slides.length; i += 1) {
                if (swiper.slides[i] === slide) slideFound = true;
            }
        }

        if (slide && slideFound) {
            swiper.clickedSlide = slide;

            if (swiper.virtual && swiper.params.virtual.enabled) {
                swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
            } else {
                swiper.clickedIndex = $(slide).index();
            }
        } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
        }

        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide();
        }
    }

    var update = {
        updateSize: updateSize,
        updateSlides: updateSlides,
        updateAutoHeight: updateAutoHeight,
        updateSlidesOffset: updateSlidesOffset,
        updateSlidesProgress: updateSlidesProgress,
        updateProgress: updateProgress,
        updateSlidesClasses: updateSlidesClasses,
        updateActiveIndex: updateActiveIndex,
        updateClickedSlide: updateClickedSlide
    };

    function getSwiperTranslate(axis) {
        if (axis === void 0) {
            axis = this.isHorizontal() ? 'x' : 'y';
        }

        var swiper = this;
        var params = swiper.params,
            rtl = swiper.rtlTranslate,
            translate = swiper.translate,
            $wrapperEl = swiper.$wrapperEl;

        if (params.virtualTranslate) {
            return rtl ? -translate : translate;
        }

        if (params.cssMode) {
            return translate;
        }

        var currentTranslate = getTranslate($wrapperEl[0], axis);
        if (rtl) currentTranslate = -currentTranslate;
        return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
        var swiper = this;
        var rtl = swiper.rtlTranslate,
            params = swiper.params,
            $wrapperEl = swiper.$wrapperEl,
            wrapperEl = swiper.wrapperEl,
            progress = swiper.progress;
        var x = 0;
        var y = 0;
        var z = 0;

        if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate;
        } else {
            y = translate;
        }

        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }

        if (params.cssMode) {
            wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
        } else if (!params.virtualTranslate) {
            $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
        }

        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

        var newProgress;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (translate - swiper.minTranslate()) / translatesDiff;
        }

        if (newProgress !== progress) {
            swiper.updateProgress(translate);
        }

        swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
        return -this.snapGrid[0];
    }

    function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
        if (translate === void 0) {
            translate = 0;
        }

        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        if (translateBounds === void 0) {
            translateBounds = true;
        }

        var swiper = this;
        var params = swiper.params,
            wrapperEl = swiper.wrapperEl;

        if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }

        var minTranslate = swiper.minTranslate();
        var maxTranslate = swiper.maxTranslate();
        var newTranslate;
        if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
        else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
        else newTranslate = translate; // Update progress

        swiper.updateProgress(newTranslate);

        if (params.cssMode) {
            var isH = swiper.isHorizontal();

            if (speed === 0) {
                wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
            } else {
                // eslint-disable-next-line
                if (wrapperEl.scrollTo) {
                    var _wrapperEl$scrollTo;

                    wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
                } else {
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
                }
            }

            return true;
        }

        if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(newTranslate);

            if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionEnd');
            }
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(newTranslate);

            if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionStart');
            }

            if (!swiper.animating) {
                swiper.animating = true;

                if (!swiper.onTranslateToWrapperTransitionEnd) {
                    swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;

                        if (runCallbacks) {
                            swiper.emit('transitionEnd');
                        }
                    };
                }

                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
            }
        }

        return true;
    }

    var translate = {
        getTranslate: getSwiperTranslate,
        setTranslate: setTranslate,
        minTranslate: minTranslate,
        maxTranslate: maxTranslate,
        translateTo: translateTo
    };

    function setTransition(duration, byController) {
        var swiper = this;

        if (!swiper.params.cssMode) {
            swiper.$wrapperEl.transition(duration);
        }

        swiper.emit('setTransition', duration, byController);
    }

    function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var activeIndex = swiper.activeIndex,
            params = swiper.params,
            previousIndex = swiper.previousIndex;
        if (params.cssMode) return;

        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }

        var dir = direction;

        if (!dir) {
            if (activeIndex > previousIndex) dir = 'next';
            else if (activeIndex < previousIndex) dir = 'prev';
            else dir = 'reset';
        }

        swiper.emit('transitionStart');

        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionStart');
                return;
            }

            swiper.emit('slideChangeTransitionStart');

            if (dir === 'next') {
                swiper.emit('slideNextTransitionStart');
            } else {
                swiper.emit('slidePrevTransitionStart');
            }
        }
    }

    function transitionEnd$1(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var activeIndex = swiper.activeIndex,
            previousIndex = swiper.previousIndex,
            params = swiper.params;
        swiper.animating = false;
        if (params.cssMode) return;
        swiper.setTransition(0);
        var dir = direction;

        if (!dir) {
            if (activeIndex > previousIndex) dir = 'next';
            else if (activeIndex < previousIndex) dir = 'prev';
            else dir = 'reset';
        }

        swiper.emit('transitionEnd');

        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionEnd');
                return;
            }

            swiper.emit('slideChangeTransitionEnd');

            if (dir === 'next') {
                swiper.emit('slideNextTransitionEnd');
            } else {
                swiper.emit('slidePrevTransitionEnd');
            }
        }
    }

    var transition$1 = {
        setTransition: setTransition,
        transitionStart: transitionStart,
        transitionEnd: transitionEnd$1
    };

    function slideTo(index, speed, runCallbacks, internal) {
        if (index === void 0) {
            index = 0;
        }

        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var slideIndex = index;
        if (slideIndex < 0) slideIndex = 0;
        var params = swiper.params,
            snapGrid = swiper.snapGrid,
            slidesGrid = swiper.slidesGrid,
            previousIndex = swiper.previousIndex,
            activeIndex = swiper.activeIndex,
            rtl = swiper.rtlTranslate,
            wrapperEl = swiper.wrapperEl;

        if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }

        var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
        var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

        if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
            swiper.emit('beforeSlideChangeStart');
        }

        var translate = -snapGrid[snapIndex]; // Update progress

        swiper.updateProgress(translate); // Normalize slideIndex

        if (params.normalizeSlideIndex) {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
                    slideIndex = i;
                }
            }
        } // Directions locks


        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
                return false;
            }

            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                if ((activeIndex || 0) !== slideIndex) return false;
            }
        }

        var direction;
        if (slideIndex > activeIndex) direction = 'next';
        else if (slideIndex < activeIndex) direction = 'prev';
        else direction = 'reset'; // Update Index

        if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
            swiper.updateActiveIndex(slideIndex); // Update Height

            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }

            swiper.updateSlidesClasses();

            if (params.effect !== 'slide') {
                swiper.setTranslate(translate);
            }

            if (direction !== 'reset') {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }

            return false;
        }

        if (params.cssMode) {
            var isH = swiper.isHorizontal();
            var t = -translate;

            if (rtl) {
                t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
            }

            if (speed === 0) {
                wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
            } else {
                // eslint-disable-next-line
                if (wrapperEl.scrollTo) {
                    var _wrapperEl$scrollTo;

                    wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
                } else {
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                }
            }

            return true;
        }

        if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);

            if (!swiper.animating) {
                swiper.animating = true;

                if (!swiper.onSlideToWrapperTransitionEnd) {
                    swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                        swiper.onSlideToWrapperTransitionEnd = null;
                        delete swiper.onSlideToWrapperTransitionEnd;
                        swiper.transitionEnd(runCallbacks, direction);
                    };
                }

                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            }
        }

        return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) {
            index = 0;
        }

        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var newIndex = index;

        if (swiper.params.loop) {
            newIndex += swiper.loopedSlides;
        }

        return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideNext(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var params = swiper.params,
            animating = swiper.animating;
        var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

        if (params.loop) {
            if (animating && params.loopPreventsSlide) return false;
            swiper.loopFix(); // eslint-disable-next-line

            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }

        return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slidePrev(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        var params = swiper.params,
            animating = swiper.animating,
            snapGrid = swiper.snapGrid,
            slidesGrid = swiper.slidesGrid,
            rtlTranslate = swiper.rtlTranslate;

        if (params.loop) {
            if (animating && params.loopPreventsSlide) return false;
            swiper.loopFix(); // eslint-disable-next-line

            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }

        var translate = rtlTranslate ? swiper.translate : -swiper.translate;

        function normalize(val) {
            if (val < 0) return -Math.floor(Math.abs(val));
            return Math.floor(val);
        }

        var normalizedTranslate = normalize(translate);
        var normalizedSnapGrid = snapGrid.map(function(val) {
            return normalize(val);
        });
        var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
        var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

        if (typeof prevSnap === 'undefined' && params.cssMode) {
            snapGrid.forEach(function(snap) {
                if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
            });
        }

        var prevIndex;

        if (typeof prevSnap !== 'undefined') {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        }

        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideReset(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        var swiper = this;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed, runCallbacks, internal, threshold) {
        if (speed === void 0) {
            speed = this.params.speed;
        }

        if (runCallbacks === void 0) {
            runCallbacks = true;
        }

        if (threshold === void 0) {
            threshold = 0.5;
        }

        var swiper = this;
        var index = swiper.activeIndex;
        var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
        var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
        var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

        if (translate >= swiper.snapGrid[snapIndex]) {
            // The current translate is on or after the current snap index, so the choice
            // is between the current index and the one after it.
            var currentSnap = swiper.snapGrid[snapIndex];
            var nextSnap = swiper.snapGrid[snapIndex + 1];

            if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
                index += swiper.params.slidesPerGroup;
            }
        } else {
            // The current translate is before the current snap index, so the choice
            // is between the current index and the one before it.
            var prevSnap = swiper.snapGrid[snapIndex - 1];
            var _currentSnap = swiper.snapGrid[snapIndex];

            if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
                index -= swiper.params.slidesPerGroup;
            }
        }

        index = Math.max(index, 0);
        index = Math.min(index, swiper.slidesGrid.length - 1);
        return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
        var swiper = this;
        var params = swiper.params,
            $wrapperEl = swiper.$wrapperEl;
        var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        var slideToIndex = swiper.clickedIndex;
        var realIndex;

        if (params.loop) {
            if (swiper.animating) return;
            realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

            if (params.centeredSlides) {
                if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
                    nextTick(function() {
                        swiper.slideTo(slideToIndex);
                    });
                } else {
                    swiper.slideTo(slideToIndex);
                }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
                nextTick(function() {
                    swiper.slideTo(slideToIndex);
                });
            } else {
                swiper.slideTo(slideToIndex);
            }
        } else {
            swiper.slideTo(slideToIndex);
        }
    }

    var slide = {
        slideTo: slideTo,
        slideToLoop: slideToLoop,
        slideNext: slideNext,
        slidePrev: slidePrev,
        slideReset: slideReset,
        slideToClosest: slideToClosest,
        slideToClickedSlide: slideToClickedSlide
    };

    function loopCreate() {
        var swiper = this;
        var document = getDocument();
        var params = swiper.params,
            $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
        var slides = $wrapperEl.children("." + params.slideClass);

        if (params.loopFillGroupWithBlank) {
            var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

            if (blankSlidesNum !== params.slidesPerGroup) {
                for (var i = 0; i < blankSlidesNum; i += 1) {
                    var blankNode = $(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
                    $wrapperEl.append(blankNode);
                }

                slides = $wrapperEl.children("." + params.slideClass);
            }
        }

        if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
        swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
        swiper.loopedSlides += params.loopAdditionalSlides;

        if (swiper.loopedSlides > slides.length) {
            swiper.loopedSlides = slides.length;
        }

        var prependSlides = [];
        var appendSlides = [];
        slides.each(function(el, index) {
            var slide = $(el);

            if (index < swiper.loopedSlides) {
                appendSlides.push(el);
            }

            if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
                prependSlides.push(el);
            }

            slide.attr('data-swiper-slide-index', index);
        });

        for (var _i = 0; _i < appendSlides.length; _i += 1) {
            $wrapperEl.append($(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }

        for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
            $wrapperEl.prepend($(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
    }

    function loopFix() {
        var swiper = this;
        swiper.emit('beforeLoopFix');
        var activeIndex = swiper.activeIndex,
            slides = swiper.slides,
            loopedSlides = swiper.loopedSlides,
            allowSlidePrev = swiper.allowSlidePrev,
            allowSlideNext = swiper.allowSlideNext,
            snapGrid = swiper.snapGrid,
            rtl = swiper.rtlTranslate;
        var newIndex;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        var snapTranslate = -snapGrid[activeIndex];
        var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

        if (activeIndex < loopedSlides) {
            newIndex = slides.length - loopedSlides * 3 + activeIndex;
            newIndex += loopedSlides;
            var slideChanged = swiper.slideTo(newIndex, 0, false, true);

            if (slideChanged && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        } else if (activeIndex >= slides.length - loopedSlides) {
            // Fix For Positive Oversliding
            newIndex = -slides.length + activeIndex + loopedSlides;
            newIndex += loopedSlides;

            var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

            if (_slideChanged && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        }

        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        swiper.emit('loopFix');
    }

    function loopDestroy() {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl,
            params = swiper.params,
            slides = swiper.slides;
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
        slides.removeAttr('data-swiper-slide-index');
    }

    var loop = {
        loopCreate: loopCreate,
        loopFix: loopFix,
        loopDestroy: loopDestroy
    };

    function setGrabCursor(moving) {
        var swiper = this;
        if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
        var el = swiper.el;
        el.style.cursor = 'move';
        el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
        el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
        el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor() {
        var swiper = this;

        if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
            return;
        }

        swiper.el.style.cursor = '';
    }

    var grabCursor = {
        setGrabCursor: setGrabCursor,
        unsetGrabCursor: unsetGrabCursor
    };

    function appendSlide(slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl,
            params = swiper.params;

        if (params.loop) {
            swiper.loopDestroy();
        }

        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) $wrapperEl.append(slides[i]);
            }
        } else {
            $wrapperEl.append(slides);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && swiper.support.observer)) {
            swiper.update();
        }
    }

    function prependSlide(slides) {
        var swiper = this;
        var params = swiper.params,
            $wrapperEl = swiper.$wrapperEl,
            activeIndex = swiper.activeIndex;

        if (params.loop) {
            swiper.loopDestroy();
        }

        var newActiveIndex = activeIndex + 1;

        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) $wrapperEl.prepend(slides[i]);
            }

            newActiveIndex = activeIndex + slides.length;
        } else {
            $wrapperEl.prepend(slides);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && swiper.support.observer)) {
            swiper.update();
        }

        swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl,
            params = swiper.params,
            activeIndex = swiper.activeIndex;
        var activeIndexBuffer = activeIndex;

        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children("." + params.slideClass);
        }

        var baseLength = swiper.slides.length;

        if (index <= 0) {
            swiper.prependSlide(slides);
            return;
        }

        if (index >= baseLength) {
            swiper.appendSlide(slides);
            return;
        }

        var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
        var slidesBuffer = [];

        for (var i = baseLength - 1; i >= index; i -= 1) {
            var currentSlide = swiper.slides.eq(i);
            currentSlide.remove();
            slidesBuffer.unshift(currentSlide);
        }

        if (typeof slides === 'object' && 'length' in slides) {
            for (var _i = 0; _i < slides.length; _i += 1) {
                if (slides[_i]) $wrapperEl.append(slides[_i]);
            }

            newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
        } else {
            $wrapperEl.append(slides);
        }

        for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
            $wrapperEl.append(slidesBuffer[_i2]);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && swiper.support.observer)) {
            swiper.update();
        }

        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeSlide(slidesIndexes) {
        var swiper = this;
        var params = swiper.params,
            $wrapperEl = swiper.$wrapperEl,
            activeIndex = swiper.activeIndex;
        var activeIndexBuffer = activeIndex;

        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children("." + params.slideClass);
        }

        var newActiveIndex = activeIndexBuffer;
        var indexToRemove;

        if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
            for (var i = 0; i < slidesIndexes.length; i += 1) {
                indexToRemove = slidesIndexes[i];
                if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            }

            newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            newActiveIndex = Math.max(newActiveIndex, 0);
        }

        if (params.loop) {
            swiper.loopCreate();
        }

        if (!(params.observer && swiper.support.observer)) {
            swiper.update();
        }

        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeAllSlides() {
        var swiper = this;
        var slidesIndexes = [];

        for (var i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i);
        }

        swiper.removeSlide(slidesIndexes);
    }

    var manipulation = {
        appendSlide: appendSlide,
        prependSlide: prependSlide,
        addSlide: addSlide,
        removeSlide: removeSlide,
        removeAllSlides: removeAllSlides
    };

    function onTouchStart(event) {
        var swiper = this;
        var document = getDocument();
        var window = getWindow();
        var data = swiper.touchEventsData;
        var params = swiper.params,
            touches = swiper.touches;

        if (swiper.animating && params.preventInteractionOnTransition) {
            return;
        }

        var e = event;
        if (e.originalEvent) e = e.originalEvent;
        var $targetEl = $(e.target);

        if (params.touchEventsTarget === 'wrapper') {
            if (!$targetEl.closest(swiper.wrapperEl).length) return;
        }

        data.isTouchEvent = e.type === 'touchstart';
        if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
        if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
        if (data.isTouched && data.isMoved) return;

        if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
            swiper.allowClick = true;
            return;
        }

        if (params.swipeHandler) {
            if (!$targetEl.closest(params.swipeHandler)[0]) return;
        }

        touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        var startX = touches.currentX;
        var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

        var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
        var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

        if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.screen.width - edgeSwipeThreshold)) {
            return;
        }

        extend$1(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined
        });
        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = undefined;
        if (params.threshold > 0) data.allowThresholdMove = false;

        if (e.type !== 'touchstart') {
            var preventDefault = true;
            if ($targetEl.is(data.formElements)) preventDefault = false;

            if (document.activeElement && $(document.activeElement).is(data.formElements) && document.activeElement !== $targetEl[0]) {
                document.activeElement.blur();
            }

            var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

            if (params.touchStartForcePreventDefault || shouldPreventDefault) {
                e.preventDefault();
            }
        }

        swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
        var document = getDocument();
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params,
            touches = swiper.touches,
            rtl = swiper.rtlTranslate;
        var e = event;
        if (e.originalEvent) e = e.originalEvent;

        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
                swiper.emit('touchMoveOpposite', e);
            }

            return;
        }

        if (data.isTouchEvent && e.type !== 'touchmove') return;
        var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
        var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
        var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }

        if (!swiper.allowTouchMove) {
            // isMoved = true;
            swiper.allowClick = false;

            if (data.isTouched) {
                extend$1(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY
                });
                data.touchStartTime = now();
            }

            return;
        }

        if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
                // Vertical
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
                return;
            }
        }

        if (data.isTouchEvent && document.activeElement) {
            if (e.target === document.activeElement && $(e.target).is(data.formElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
        }

        if (data.allowTouchCallbacks) {
            swiper.emit('touchMove', e);
        }

        if (e.targetTouches && e.targetTouches.length > 1) return;
        touches.currentX = pageX;
        touches.currentY = pageY;
        var diffX = touches.currentX - touches.startX;
        var diffY = touches.currentY - touches.startY;
        if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

        if (typeof data.isScrolling === 'undefined') {
            var touchAngle;

            if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
                data.isScrolling = false;
            } else {
                // eslint-disable-next-line
                if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
        }

        if (data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }

        if (typeof data.startMoving === 'undefined') {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                data.startMoving = true;
            }
        }

        if (data.isScrolling) {
            data.isTouched = false;
            return;
        }

        if (!data.startMoving) {
            return;
        }

        swiper.allowClick = false;

        if (!params.cssMode && e.cancelable) {
            e.preventDefault();
        }

        if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation();
        }

        if (!data.isMoved) {
            if (params.loop) {
                swiper.loopFix();
            }

            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);

            if (swiper.animating) {
                swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
            }

            data.allowMomentumBounce = false; // Grab Cursor

            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(true);
            }

            swiper.emit('sliderFirstMove', e);
        }

        swiper.emit('sliderMove', e);
        data.isMoved = true;
        var diff = swiper.isHorizontal() ? diffX : diffY;
        touches.diff = diff;
        diff *= params.touchRatio;
        if (rtl) diff = -diff;
        swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
        data.currentTranslate = diff + data.startTranslate;
        var disableParentSwiper = true;
        var resistanceRatio = params.resistanceRatio;

        if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
        }

        if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
        } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
        }

        if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
        } // Directions locks


        if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }

        if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        } // Threshold


        if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
        }

        if (!params.followFinger || params.cssMode) return; // Update active index in free mode

        if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }

        if (params.freeMode) {
            // Velocity
            if (data.velocities.length === 0) {
                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                    time: data.touchStartTime
                });
            }

            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                time: now()
            });
        } // Update progress


        swiper.updateProgress(data.currentTranslate); // Update translate

        swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params,
            touches = swiper.touches,
            rtl = swiper.rtlTranslate,
            $wrapperEl = swiper.$wrapperEl,
            slidesGrid = swiper.slidesGrid,
            snapGrid = swiper.snapGrid;
        var e = event;
        if (e.originalEvent) e = e.originalEvent;

        if (data.allowTouchCallbacks) {
            swiper.emit('touchEnd', e);
        }

        data.allowTouchCallbacks = false;

        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
                swiper.setGrabCursor(false);
            }

            data.isMoved = false;
            data.startMoving = false;
            return;
        } // Return Grab Cursor


        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false);
        } // Time diff


        var touchEndTime = now();
        var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

        if (swiper.allowClick) {
            swiper.updateClickedSlide(e);
            swiper.emit('tap click', e);

            if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
                swiper.emit('doubleTap doubleClick', e);
            }
        }

        data.lastClickTime = now();
        nextTick(function() {
            if (!swiper.destroyed) swiper.allowClick = true;
        });

        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }

        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        var currentPos;

        if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
        } else {
            currentPos = -data.currentTranslate;
        }

        if (params.cssMode) {
            return;
        }

        if (params.freeMode) {
            if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }

            if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) {
                    swiper.slideTo(snapGrid.length - 1);
                } else {
                    swiper.slideTo(swiper.slides.length - 1);
                }

                return;
            }

            if (params.freeModeMomentum) {
                if (data.velocities.length > 1) {
                    var lastMoveEvent = data.velocities.pop();
                    var velocityEvent = data.velocities.pop();
                    var distance = lastMoveEvent.position - velocityEvent.position;
                    var time = lastMoveEvent.time - velocityEvent.time;
                    swiper.velocity = distance / time;
                    swiper.velocity /= 2;

                    if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
                        swiper.velocity = 0;
                    } // this implies that the user stopped moving a finger then released.
                    // There would be no events with distance zero, so the last event is stale.


                    if (time > 150 || now() - lastMoveEvent.time > 300) {
                        swiper.velocity = 0;
                    }
                } else {
                    swiper.velocity = 0;
                }

                swiper.velocity *= params.freeModeMomentumVelocityRatio;
                data.velocities.length = 0;
                var momentumDuration = 1000 * params.freeModeMomentumRatio;
                var momentumDistance = swiper.velocity * momentumDuration;
                var newPosition = swiper.translate + momentumDistance;
                if (rtl) newPosition = -newPosition;
                var doBounce = false;
                var afterBouncePosition;
                var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
                var needsLoopFix;

                if (newPosition < swiper.maxTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                            newPosition = swiper.maxTranslate() - bounceAmount;
                        }

                        afterBouncePosition = swiper.maxTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.maxTranslate();
                    }

                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (newPosition > swiper.minTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition - swiper.minTranslate() > bounceAmount) {
                            newPosition = swiper.minTranslate() + bounceAmount;
                        }

                        afterBouncePosition = swiper.minTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.minTranslate();
                    }

                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (params.freeModeSticky) {
                    var nextSlide;

                    for (var j = 0; j < snapGrid.length; j += 1) {
                        if (snapGrid[j] > -newPosition) {
                            nextSlide = j;
                            break;
                        }
                    }

                    if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                        newPosition = snapGrid[nextSlide];
                    } else {
                        newPosition = snapGrid[nextSlide - 1];
                    }

                    newPosition = -newPosition;
                }

                if (needsLoopFix) {
                    swiper.once('transitionEnd', function() {
                        swiper.loopFix();
                    });
                } // Fix duration


                if (swiper.velocity !== 0) {
                    if (rtl) {
                        momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                    } else {
                        momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                    }

                    if (params.freeModeSticky) {
                        // If freeModeSticky is active and the user ends a swipe with a slow-velocity
                        // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                        // It's easy to see this when simulating touch with mouse events. To fix this,
                        // limit single-slide swipes to the default slide duration. This also has the
                        // nice side effect of matching slide speed if the user stopped moving before
                        // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                        // For faster swipes, also apply limits (albeit higher ones).
                        var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                        var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

                        if (moveDistance < currentSlideSize) {
                            momentumDuration = params.speed;
                        } else if (moveDistance < 2 * currentSlideSize) {
                            momentumDuration = params.speed * 1.5;
                        } else {
                            momentumDuration = params.speed * 2.5;
                        }
                    }
                } else if (params.freeModeSticky) {
                    swiper.slideToClosest();
                    return;
                }

                if (params.freeModeMomentumBounce && doBounce) {
                    swiper.updateProgress(afterBouncePosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(function() {
                        if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                        swiper.emit('momentumBounce');
                        swiper.setTransition(params.speed);
                        setTimeout(function() {
                            swiper.setTranslate(afterBouncePosition);
                            $wrapperEl.transitionEnd(function() {
                                if (!swiper || swiper.destroyed) return;
                                swiper.transitionEnd();
                            });
                        }, 0);
                    });
                } else if (swiper.velocity) {
                    swiper.updateProgress(newPosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);

                    if (!swiper.animating) {
                        swiper.animating = true;
                        $wrapperEl.transitionEnd(function() {
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }
                } else {
                    swiper.updateProgress(newPosition);
                }

                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            } else if (params.freeModeSticky) {
                swiper.slideToClosest();
                return;
            }

            if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }

            return;
        } // Find current slide


        var stopIndex = 0;
        var groupSize = swiper.slidesSizesGrid[0];

        for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
            var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

            if (typeof slidesGrid[i + _increment] !== 'undefined') {
                if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + _increment] - slidesGrid[i];
                }
            } else if (currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        } // Find current slide size


        var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
        var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

        if (timeDiff > params.longSwipesMs) {
            // Long touches
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }

            if (swiper.swipeDirection === 'next') {
                if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
                else swiper.slideTo(stopIndex);
            }

            if (swiper.swipeDirection === 'prev') {
                if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
                else swiper.slideTo(stopIndex);
            }
        } else {
            // Short swipes
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }

            var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

            if (!isNavButtonTarget) {
                if (swiper.swipeDirection === 'next') {
                    swiper.slideTo(stopIndex + increment);
                }

                if (swiper.swipeDirection === 'prev') {
                    swiper.slideTo(stopIndex);
                }
            } else if (e.target === swiper.navigation.nextEl) {
                swiper.slideTo(stopIndex + increment);
            } else {
                swiper.slideTo(stopIndex);
            }
        }
    }

    function onResize() {
        var swiper = this;
        var params = swiper.params,
            el = swiper.el;
        if (el && el.offsetWidth === 0) return; // Breakpoints

        if (params.breakpoints) {
            swiper.setBreakpoint();
        } // Save locks


        var allowSlideNext = swiper.allowSlideNext,
            allowSlidePrev = swiper.allowSlidePrev,
            snapGrid = swiper.snapGrid; // Disable locks on resize

        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateSlidesClasses();

        if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
            swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
            swiper.slideTo(swiper.activeIndex, 0, false, true);
        }

        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
            swiper.autoplay.run();
        } // Return locks after resize


        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;

        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
        }
    }

    function onClick(e) {
        var swiper = this;

        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) e.preventDefault();

            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    }

    function onScroll() {
        var swiper = this;
        var wrapperEl = swiper.wrapperEl,
            rtlTranslate = swiper.rtlTranslate;
        swiper.previousTranslate = swiper.translate;

        if (swiper.isHorizontal()) {
            if (rtlTranslate) {
                swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
            } else {
                swiper.translate = -wrapperEl.scrollLeft;
            }
        } else {
            swiper.translate = -wrapperEl.scrollTop;
        } // eslint-disable-next-line


        if (swiper.translate === -0) swiper.translate = 0;
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        var newProgress;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
        }

        if (newProgress !== swiper.progress) {
            swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
        }

        swiper.emit('setTranslate', swiper.translate, false);
    }

    var dummyEventAttached = false;

    function dummyEventListener() {}

    function attachEvents() {
        var swiper = this;
        var document = getDocument();
        var params = swiper.params,
            touchEvents = swiper.touchEvents,
            el = swiper.el,
            wrapperEl = swiper.wrapperEl,
            device = swiper.device,
            support = swiper.support;
        swiper.onTouchStart = onTouchStart.bind(swiper);
        swiper.onTouchMove = onTouchMove.bind(swiper);
        swiper.onTouchEnd = onTouchEnd.bind(swiper);

        if (params.cssMode) {
            swiper.onScroll = onScroll.bind(swiper);
        }

        swiper.onClick = onClick.bind(swiper);
        var capture = !!params.nested; // Touch Events

        if (!support.touch && support.pointerEvents) {
            el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
            document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
            document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
        } else {
            if (support.touch) {
                var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture: capture
                } : capture);
                el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

                if (touchEvents.cancel) {
                    el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
                }

                if (!dummyEventAttached) {
                    document.addEventListener('touchstart', dummyEventListener);
                    dummyEventAttached = true;
                }
            }

            if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
                el.addEventListener('mousedown', swiper.onTouchStart, false);
                document.addEventListener('mousemove', swiper.onTouchMove, capture);
                document.addEventListener('mouseup', swiper.onTouchEnd, false);
            }
        } // Prevent Links Clicks


        if (params.preventClicks || params.preventClicksPropagation) {
            el.addEventListener('click', swiper.onClick, true);
        }

        if (params.cssMode) {
            wrapperEl.addEventListener('scroll', swiper.onScroll);
        } // Resize handler


        if (params.updateOnWindowResize) {
            swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
        } else {
            swiper.on('observerUpdate', onResize, true);
        }
    }

    function detachEvents() {
        var swiper = this;
        var document = getDocument();
        var params = swiper.params,
            touchEvents = swiper.touchEvents,
            el = swiper.el,
            wrapperEl = swiper.wrapperEl,
            device = swiper.device,
            support = swiper.support;
        var capture = !!params.nested; // Touch Events

        if (!support.touch && support.pointerEvents) {
            el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
            document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
            document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
        } else {
            if (support.touch) {
                var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

                if (touchEvents.cancel) {
                    el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
                }
            }

            if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
                el.removeEventListener('mousedown', swiper.onTouchStart, false);
                document.removeEventListener('mousemove', swiper.onTouchMove, capture);
                document.removeEventListener('mouseup', swiper.onTouchEnd, false);
            }
        } // Prevent Links Clicks


        if (params.preventClicks || params.preventClicksPropagation) {
            el.removeEventListener('click', swiper.onClick, true);
        }

        if (params.cssMode) {
            wrapperEl.removeEventListener('scroll', swiper.onScroll);
        } // Resize handler


        swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
    }

    var events = {
        attachEvents: attachEvents,
        detachEvents: detachEvents
    };

    function setBreakpoint() {
        var swiper = this;
        var activeIndex = swiper.activeIndex,
            initialized = swiper.initialized,
            _swiper$loopedSlides = swiper.loopedSlides,
            loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
            params = swiper.params,
            $el = swiper.$el;
        var breakpoints = params.breakpoints;
        if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

        var breakpoint = swiper.getBreakpoint(breakpoints);

        if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
            var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

            if (breakpointOnlyParams) {
                ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function(param) {
                    var paramValue = breakpointOnlyParams[param];
                    if (typeof paramValue === 'undefined') return;

                    if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
                        breakpointOnlyParams[param] = 'auto';
                    } else if (param === 'slidesPerView') {
                        breakpointOnlyParams[param] = parseFloat(paramValue);
                    } else {
                        breakpointOnlyParams[param] = parseInt(paramValue, 10);
                    }
                });
            }

            var breakpointParams = breakpointOnlyParams || swiper.originalParams;
            var wasMultiRow = params.slidesPerColumn > 1;
            var isMultiRow = breakpointParams.slidesPerColumn > 1;

            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(params.containerModifierClass + "multirow");

                if (breakpointParams.slidesPerColumnFill === 'column') {
                    $el.addClass(params.containerModifierClass + "multirow-column");
                }

                swiper.emitContainerClasses();
            }

            var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

            if (directionChanged && initialized) {
                swiper.changeDirection();
            }

            extend$1(swiper.params, breakpointParams);
            extend$1(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            swiper.currentBreakpoint = breakpoint;

            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }

            swiper.emit('breakpoint', breakpointParams);
        }
    }

    function getBreakpoints(breakpoints) {
        var window = getWindow(); // Get breakpoint for window width

        if (!breakpoints) return undefined;
        var breakpoint = false;
        var points = Object.keys(breakpoints).map(function(point) {
            if (typeof point === 'string' && point.indexOf('@') === 0) {
                var minRatio = parseFloat(point.substr(1));
                var value = window.innerHeight * minRatio;
                return {
                    value: value,
                    point: point
                };
            }

            return {
                value: point,
                point: point
            };
        });
        points.sort(function(a, b) {
            return parseInt(a.value, 10) - parseInt(b.value, 10);
        });

        for (var i = 0; i < points.length; i += 1) {
            var _points$i = points[i],
                point = _points$i.point,
                value = _points$i.value;

            if (value <= window.innerWidth) {
                breakpoint = point;
            }
        }

        return breakpoint || 'max';
    }

    var breakpoints = {
        setBreakpoint: setBreakpoint,
        getBreakpoint: getBreakpoints
    };

    function addClasses() {
        var swiper = this;
        var classNames = swiper.classNames,
            params = swiper.params,
            rtl = swiper.rtl,
            $el = swiper.$el,
            device = swiper.device;
        var suffixes = [];
        suffixes.push('initialized');
        suffixes.push(params.direction);

        if (params.freeMode) {
            suffixes.push('free-mode');
        }

        if (params.autoHeight) {
            suffixes.push('autoheight');
        }

        if (rtl) {
            suffixes.push('rtl');
        }

        if (params.slidesPerColumn > 1) {
            suffixes.push('multirow');

            if (params.slidesPerColumnFill === 'column') {
                suffixes.push('multirow-column');
            }
        }

        if (device.android) {
            suffixes.push('android');
        }

        if (device.ios) {
            suffixes.push('ios');
        }

        if (params.cssMode) {
            suffixes.push('css-mode');
        }

        suffixes.forEach(function(suffix) {
            classNames.push(params.containerModifierClass + suffix);
        });
        $el.addClass(classNames.join(' '));
        swiper.emitContainerClasses();
    }

    function removeClasses() {
        var swiper = this;
        var $el = swiper.$el,
            classNames = swiper.classNames;
        $el.removeClass(classNames.join(' '));
        swiper.emitContainerClasses();
    }

    var classes = {
        addClasses: addClasses,
        removeClasses: removeClasses
    };

    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
        var window = getWindow();
        var image;

        function onReady() {
            if (callback) callback();
        }

        var isPicture = $(imageEl).parent('picture')[0];

        if (!isPicture && (!imageEl.complete || !checkForComplete)) {
            if (src) {
                image = new window.Image();
                image.onload = onReady;
                image.onerror = onReady;

                if (sizes) {
                    image.sizes = sizes;
                }

                if (srcset) {
                    image.srcset = srcset;
                }

                if (src) {
                    image.src = src;
                }
            } else {
                onReady();
            }
        } else {
            // image already loaded...
            onReady();
        }
    }

    function preloadImages() {
        var swiper = this;
        swiper.imagesToLoad = swiper.$el.find('img');

        function onReady() {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
            if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

            if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                if (swiper.params.updateOnImagesReady) swiper.update();
                swiper.emit('imagesReady');
            }
        }

        for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
            var imageEl = swiper.imagesToLoad[i];
            swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
        }
    }

    var images = {
        loadImage: loadImage,
        preloadImages: preloadImages
    };

    function checkOverflow() {
        var swiper = this;
        var params = swiper.params;
        var wasLocked = swiper.isLocked;
        var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

        if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
            swiper.isLocked = lastSlidePosition <= swiper.size;
        } else {
            swiper.isLocked = swiper.snapGrid.length === 1;
        }

        swiper.allowSlideNext = !swiper.isLocked;
        swiper.allowSlidePrev = !swiper.isLocked; // events

        if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

        if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false;
            if (swiper.navigation) swiper.navigation.update();
        }
    }

    var checkOverflow$1 = {
        checkOverflow: checkOverflow
    };

    var defaults = {
        init: true,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        // Overrides
        width: null,
        height: null,
        //
        preventInteractionOnTransition: false,
        // ssr
        userAgent: null,
        url: null,
        // To support iOS's swipe-to-go-back gesture (when being used in-app).
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        // Free mode
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,
        // Autoheight
        autoHeight: false,
        // Set wrapper width
        setWrapperSize: false,
        // Virtual Translate
        virtualTranslate: false,
        // Effects
        effect: 'slide',
        // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
        // Breakpoints
        breakpoints: undefined,
        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        // in px
        slidesOffsetAfter: 0,
        // in px
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        // Disable swiper and hide navigation when container not overflow
        watchOverflow: false,
        // Round length
        roundLengths: false,
        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        // Unique Navigation Elements
        uniqueNavElements: true,
        // Resistance
        resistance: true,
        resistanceRatio: 0.85,
        // Progress
        watchSlidesProgress: false,
        watchSlidesVisibility: false,
        // Cursor
        grabCursor: false,
        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        // Images
        preloadImages: true,
        updateOnImagesReady: true,
        // loop
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: false,
        loopPreventsSlide: true,
        // Swiping/no swiping
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        // '.swipe-handler',
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        // Passive Listeners
        passiveListeners: true,
        // NS
        containerModifierClass: 'swiper-container-',
        // NEW
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        // Callbacks
        runCallbacksOnInit: true,
        // Internals
        _emitClasses: false
    };

    var prototypes = {
        modular: modular,
        eventsEmitter: eventsEmitter,
        update: update,
        translate: translate,
        transition: transition$1,
        slide: slide,
        loop: loop,
        grabCursor: grabCursor,
        manipulation: manipulation,
        events: events,
        breakpoints: breakpoints,
        checkOverflow: checkOverflow$1,
        classes: classes,
        images: images
    };
    var extendedDefaults = {};

    var Swiper = /*#__PURE__*/ function() {
        function Swiper() {
            var el;
            var params;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
                params = args[0];
            } else {
                el = args[0];
                params = args[1];
            }

            if (!params) params = {};
            params = extend$1({}, params);
            if (el && !params.el) params.el = el; // Swiper Instance

            var swiper = this;
            swiper.support = getSupport();
            swiper.device = getDevice({
                userAgent: params.userAgent
            });
            swiper.browser = getBrowser();
            swiper.eventsListeners = {};
            swiper.eventsAnyListeners = [];
            Object.keys(prototypes).forEach(function(prototypeGroup) {
                Object.keys(prototypes[prototypeGroup]).forEach(function(protoMethod) {
                    if (!Swiper.prototype[protoMethod]) {
                        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
                    }
                });
            });

            if (typeof swiper.modules === 'undefined') {
                swiper.modules = {};
            }

            Object.keys(swiper.modules).forEach(function(moduleName) {
                var module = swiper.modules[moduleName];

                if (module.params) {
                    var moduleParamName = Object.keys(module.params)[0];
                    var moduleParams = module.params[moduleParamName];
                    if (typeof moduleParams !== 'object' || moduleParams === null) return;
                    if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

                    if (params[moduleParamName] === true) {
                        params[moduleParamName] = {
                            enabled: true
                        };
                    }

                    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
                        params[moduleParamName].enabled = true;
                    }

                    if (!params[moduleParamName]) params[moduleParamName] = {
                        enabled: false
                    };
                }
            }); // Extend defaults with modules params

            var swiperParams = extend$1({}, defaults);
            swiper.useParams(swiperParams); // Extend defaults with passed params

            swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = extend$1({}, swiper.params);
            swiper.passedParams = extend$1({}, params); // add event listeners

            if (swiper.params && swiper.params.on) {
                Object.keys(swiper.params.on).forEach(function(eventName) {
                    swiper.on(eventName, swiper.params.on[eventName]);
                });
            } // Save Dom lib


            swiper.$ = $; // Find el

            var $el = $(swiper.params.el);
            el = $el[0];

            if (!el) {
                return undefined;
            }

            if ($el.length > 1) {
                var swipers = [];
                $el.each(function(containerEl) {
                    var newParams = extend$1({}, params, {
                        el: containerEl
                    });
                    swipers.push(new Swiper(newParams));
                });
                return swipers;
            }

            el.swiper = swiper; // Find Wrapper

            var $wrapperEl;

            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                $wrapperEl = $(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items

                $wrapperEl.children = function(options) {
                    return $el.children(options);
                };
            } else {
                $wrapperEl = $el.children("." + swiper.params.wrapperClass);
            } // Extend Swiper


            extend$1(swiper, {
                $el: $el,
                el: el,
                $wrapperEl: $wrapperEl,
                wrapperEl: $wrapperEl[0],
                // Classes
                classNames: [],
                // Slides
                slides: $(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                // isDirection
                isHorizontal: function isHorizontal() {
                    return swiper.params.direction === 'horizontal';
                },
                isVertical: function isVertical() {
                    return swiper.params.direction === 'vertical';
                },
                // RTL
                rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
                rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                wrongRTL: $wrapperEl.css('display') === '-webkit-box',
                // Indexes
                activeIndex: 0,
                realIndex: 0,
                //
                isBeginning: true,
                isEnd: false,
                // Props
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                // Locks
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
                // Touch Events
                touchEvents: function touchEvents() {
                    var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
                    var desktop = ['mousedown', 'mousemove', 'mouseup'];

                    if (swiper.support.pointerEvents) {
                        desktop = ['pointerdown', 'pointermove', 'pointerup'];
                    }

                    swiper.touchEventsTouch = {
                        start: touch[0],
                        move: touch[1],
                        end: touch[2],
                        cancel: touch[3]
                    };
                    swiper.touchEventsDesktop = {
                        start: desktop[0],
                        move: desktop[1],
                        end: desktop[2]
                    };
                    return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                }(),
                touchEventsData: {
                    isTouched: undefined,
                    isMoved: undefined,
                    allowTouchCallbacks: undefined,
                    touchStartTime: undefined,
                    isScrolling: undefined,
                    currentTranslate: undefined,
                    startTranslate: undefined,
                    allowThresholdMove: undefined,
                    // Form elements to match
                    formElements: 'input, select, option, textarea, button, video, label',
                    // Last click time
                    lastClickTime: now(),
                    clickTimeout: undefined,
                    // Velocities
                    velocities: [],
                    allowMomentumBounce: undefined,
                    isTouchEvent: undefined,
                    startMoving: undefined
                },
                // Clicks
                allowClick: true,
                // Touches
                allowTouchMove: swiper.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                // Images
                imagesToLoad: [],
                imagesLoaded: 0
            }); // Install Modules

            swiper.useModules();
            swiper.emit('_swiper'); // Init

            if (swiper.params.init) {
                swiper.init();
            } // Return app instance


            return swiper;
        }

        var _proto = Swiper.prototype;

        _proto.emitContainerClasses = function emitContainerClasses() {
            var swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            var classes = swiper.el.className.split(' ').filter(function(className) {
                return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
            });
            swiper.emit('_containerClasses', classes.join(' '));
        };

        _proto.emitSlidesClasses = function emitSlidesClasses() {
            var swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            swiper.slides.each(function(slideEl) {
                var classes = slideEl.className.split(' ').filter(function(className) {
                    return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
                });
                swiper.emit('_slideClass', slideEl, classes.join(' '));
            });
        };

        _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
            var swiper = this;
            var params = swiper.params,
                slides = swiper.slides,
                slidesGrid = swiper.slidesGrid,
                swiperSize = swiper.size,
                activeIndex = swiper.activeIndex;
            var spv = 1;

            if (params.centeredSlides) {
                var slideSize = slides[activeIndex].swiperSlideSize;
                var breakLoop;

                for (var i = activeIndex + 1; i < slides.length; i += 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                }

                for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
                    if (slides[_i] && !breakLoop) {
                        slideSize += slides[_i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                }
            } else {
                for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
                    if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
                        spv += 1;
                    }
                }
            }

            return spv;
        };

        _proto.update = function update() {
            var swiper = this;
            if (!swiper || swiper.destroyed) return;
            var snapGrid = swiper.snapGrid,
                params = swiper.params; // Breakpoints

            if (params.breakpoints) {
                swiper.setBreakpoint();
            }

            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();

            function setTranslate() {
                var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }

            var translated;

            if (swiper.params.freeMode) {
                setTranslate();

                if (swiper.params.autoHeight) {
                    swiper.updateAutoHeight();
                }
            } else {
                if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                    translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                } else {
                    translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                }

                if (!translated) {
                    setTranslate();
                }
            }

            if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
                swiper.checkOverflow();
            }

            swiper.emit('update');
        };

        _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
            if (needUpdate === void 0) {
                needUpdate = true;
            }

            var swiper = this;
            var currentDirection = swiper.params.direction;

            if (!newDirection) {
                // eslint-disable-next-line
                newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
            }

            if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
                return swiper;
            }

            swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
            swiper.emitContainerClasses();
            swiper.params.direction = newDirection;
            swiper.slides.each(function(slideEl) {
                if (newDirection === 'vertical') {
                    slideEl.style.width = '';
                } else {
                    slideEl.style.height = '';
                }
            });
            swiper.emit('changeDirection');
            if (needUpdate) swiper.update();
            return swiper;
        };

        _proto.init = function init() {
            var swiper = this;
            if (swiper.initialized) return;
            swiper.emit('beforeInit'); // Set breakpoint

            if (swiper.params.breakpoints) {
                swiper.setBreakpoint();
            } // Add Classes


            swiper.addClasses(); // Create loop

            if (swiper.params.loop) {
                swiper.loopCreate();
            } // Update size


            swiper.updateSize(); // Update slides

            swiper.updateSlides();

            if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
            } // Set Grab Cursor


            if (swiper.params.grabCursor) {
                swiper.setGrabCursor();
            }

            if (swiper.params.preloadImages) {
                swiper.preloadImages();
            } // Slide To Initial Slide


            if (swiper.params.loop) {
                swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
            } else {
                swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
            } // Attach events


            swiper.attachEvents(); // Init Flag

            swiper.initialized = true; // Emit

            swiper.emit('init');
        };

        _proto.destroy = function destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) {
                deleteInstance = true;
            }

            if (cleanStyles === void 0) {
                cleanStyles = true;
            }

            var swiper = this;
            var params = swiper.params,
                $el = swiper.$el,
                $wrapperEl = swiper.$wrapperEl,
                slides = swiper.slides;

            if (typeof swiper.params === 'undefined' || swiper.destroyed) {
                return null;
            }

            swiper.emit('beforeDestroy'); // Init Flag

            swiper.initialized = false; // Detach events

            swiper.detachEvents(); // Destroy loop

            if (params.loop) {
                swiper.loopDestroy();
            } // Cleanup styles


            if (cleanStyles) {
                swiper.removeClasses();
                $el.removeAttr('style');
                $wrapperEl.removeAttr('style');

                if (slides && slides.length) {
                    slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
                }
            }

            swiper.emit('destroy'); // Detach emitter events

            Object.keys(swiper.eventsListeners).forEach(function(eventName) {
                swiper.off(eventName);
            });

            if (deleteInstance !== false) {
                swiper.$el[0].swiper = null;
                deleteProps(swiper);
            }

            swiper.destroyed = true;
            return null;
        };

        Swiper.extendDefaults = function extendDefaults(newDefaults) {
            extend$1(extendedDefaults, newDefaults);
        };

        Swiper.installModule = function installModule(module) {
            if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
            var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + now();
            Swiper.prototype.modules[name] = module;
        };

        Swiper.use = function use(module) {
            if (Array.isArray(module)) {
                module.forEach(function(m) {
                    return Swiper.installModule(m);
                });
                return Swiper;
            }

            Swiper.installModule(module);
            return Swiper;
        };

        _createClass(Swiper, null, [{
            key: "extendedDefaults",
            get: function get() {
                return extendedDefaults;
            }
        }, {
            key: "defaults",
            get: function get() {
                return defaults;
            }
        }]);

        return Swiper;
    }();

    var Resize = {
        name: 'resize',
        create: function create() {
            var swiper = this;
            extend$1(swiper, {
                resize: {
                    resizeHandler: function resizeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) return;
                        swiper.emit('beforeResize');
                        swiper.emit('resize');
                    },
                    orientationChangeHandler: function orientationChangeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) return;
                        swiper.emit('orientationchange');
                    }
                }
            });
        },
        on: {
            init: function init(swiper) {
                var window = getWindow(); // Emit resize

                window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

                window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            },
            destroy: function destroy(swiper) {
                var window = getWindow();
                window.removeEventListener('resize', swiper.resize.resizeHandler);
                window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            }
        }
    };

    var Observer = {
        attach: function attach(target, options) {
            if (options === void 0) {
                options = {};
            }

            var window = getWindow();
            var swiper = this;
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            var observer = new ObserverFunc(function(mutations) {
                // The observerUpdate event should only be triggered
                // once despite the number of mutations.  Additional
                // triggers are redundant and are very costly
                if (mutations.length === 1) {
                    swiper.emit('observerUpdate', mutations[0]);
                    return;
                }

                var observerUpdate = function observerUpdate() {
                    swiper.emit('observerUpdate', mutations[0]);
                };

                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(observerUpdate);
                } else {
                    window.setTimeout(observerUpdate, 0);
                }
            });
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
            swiper.observer.observers.push(observer);
        },
        init: function init() {
            var swiper = this;
            if (!swiper.support.observer || !swiper.params.observer) return;

            if (swiper.params.observeParents) {
                var containerParents = swiper.$el.parents();

                for (var i = 0; i < containerParents.length; i += 1) {
                    swiper.observer.attach(containerParents[i]);
                }
            } // Observe container


            swiper.observer.attach(swiper.$el[0], {
                childList: swiper.params.observeSlideChildren
            }); // Observe wrapper

            swiper.observer.attach(swiper.$wrapperEl[0], {
                attributes: false
            });
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.observer.observers.forEach(function(observer) {
                observer.disconnect();
            });
            swiper.observer.observers = [];
        }
    };
    var Observer$1 = {
        name: 'observer',
        params: {
            observer: false,
            observeParents: false,
            observeSlideChildren: false
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                observer: _extends(_extends({}, Observer), {}, {
                    observers: []
                })
            });
        },
        on: {
            init: function init(swiper) {
                swiper.observer.init();
            },
            destroy: function destroy(swiper) {
                swiper.observer.destroy();
            }
        }
    };

    var Virtual = {
        update: function update(force) {
            var swiper = this;
            var _swiper$params = swiper.params,
                slidesPerView = _swiper$params.slidesPerView,
                slidesPerGroup = _swiper$params.slidesPerGroup,
                centeredSlides = _swiper$params.centeredSlides;
            var _swiper$params$virtua = swiper.params.virtual,
                addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
                addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
            var _swiper$virtual = swiper.virtual,
                previousFrom = _swiper$virtual.from,
                previousTo = _swiper$virtual.to,
                slides = _swiper$virtual.slides,
                previousSlidesGrid = _swiper$virtual.slidesGrid,
                renderSlide = _swiper$virtual.renderSlide,
                previousOffset = _swiper$virtual.offset;
            swiper.updateActiveIndex();
            var activeIndex = swiper.activeIndex || 0;
            var offsetProp;
            if (swiper.rtlTranslate) offsetProp = 'right';
            else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
            var slidesAfter;
            var slidesBefore;

            if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
            } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
                slidesBefore = slidesPerGroup + addSlidesBefore;
            }

            var from = Math.max((activeIndex || 0) - slidesBefore, 0);
            var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
            var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
            extend$1(swiper.virtual, {
                from: from,
                to: to,
                offset: offset,
                slidesGrid: swiper.slidesGrid
            });

            function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();

                if (swiper.lazy && swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            }

            if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                    swiper.slides.css(offsetProp, offset + "px");
                }

                swiper.updateProgress();
                return;
            }

            if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                    offset: offset,
                    from: from,
                    to: to,
                    slides: function getSlides() {
                        var slidesToRender = [];

                        for (var i = from; i <= to; i += 1) {
                            slidesToRender.push(slides[i]);
                        }

                        return slidesToRender;
                    }()
                });

                if (swiper.params.virtual.renderExternalUpdate) {
                    onRendered();
                }

                return;
            }

            var prependIndexes = [];
            var appendIndexes = [];

            if (force) {
                swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
            } else {
                for (var i = previousFrom; i <= previousTo; i += 1) {
                    if (i < from || i > to) {
                        swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
                    }
                }
            }

            for (var _i = 0; _i < slides.length; _i += 1) {
                if (_i >= from && _i <= to) {
                    if (typeof previousTo === 'undefined' || force) {
                        appendIndexes.push(_i);
                    } else {
                        if (_i > previousTo) appendIndexes.push(_i);
                        if (_i < previousFrom) prependIndexes.push(_i);
                    }
                }
            }

            appendIndexes.forEach(function(index) {
                swiper.$wrapperEl.append(renderSlide(slides[index], index));
            });
            prependIndexes.sort(function(a, b) {
                return b - a;
            }).forEach(function(index) {
                swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
            });
            swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
            onRendered();
        },
        renderSlide: function renderSlide(slide, index) {
            var swiper = this;
            var params = swiper.params.virtual;

            if (params.cache && swiper.virtual.cache[index]) {
                return swiper.virtual.cache[index];
            }

            var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
            if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
            if (params.cache) swiper.virtual.cache[index] = $slideEl;
            return $slideEl;
        },
        appendSlide: function appendSlide(slides) {
            var swiper = this;

            if (typeof slides === 'object' && 'length' in slides) {
                for (var i = 0; i < slides.length; i += 1) {
                    if (slides[i]) swiper.virtual.slides.push(slides[i]);
                }
            } else {
                swiper.virtual.slides.push(slides);
            }

            swiper.virtual.update(true);
        },
        prependSlide: function prependSlide(slides) {
            var swiper = this;
            var activeIndex = swiper.activeIndex;
            var newActiveIndex = activeIndex + 1;
            var numberOfNewSlides = 1;

            if (Array.isArray(slides)) {
                for (var i = 0; i < slides.length; i += 1) {
                    if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
                }

                newActiveIndex = activeIndex + slides.length;
                numberOfNewSlides = slides.length;
            } else {
                swiper.virtual.slides.unshift(slides);
            }

            if (swiper.params.virtual.cache) {
                var cache = swiper.virtual.cache;
                var newCache = {};
                Object.keys(cache).forEach(function(cachedIndex) {
                    var $cachedEl = cache[cachedIndex];
                    var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

                    if (cachedElIndex) {
                        $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
                    }

                    newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
                });
                swiper.virtual.cache = newCache;
            }

            swiper.virtual.update(true);
            swiper.slideTo(newActiveIndex, 0);
        },
        removeSlide: function removeSlide(slidesIndexes) {
            var swiper = this;
            if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
            var activeIndex = swiper.activeIndex;

            if (Array.isArray(slidesIndexes)) {
                for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                    swiper.virtual.slides.splice(slidesIndexes[i], 1);

                    if (swiper.params.virtual.cache) {
                        delete swiper.virtual.cache[slidesIndexes[i]];
                    }

                    if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                    activeIndex = Math.max(activeIndex, 0);
                }
            } else {
                swiper.virtual.slides.splice(slidesIndexes, 1);

                if (swiper.params.virtual.cache) {
                    delete swiper.virtual.cache[slidesIndexes];
                }

                if (slidesIndexes < activeIndex) activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
            }

            swiper.virtual.update(true);
            swiper.slideTo(activeIndex, 0);
        },
        removeAllSlides: function removeAllSlides() {
            var swiper = this;
            swiper.virtual.slides = [];

            if (swiper.params.virtual.cache) {
                swiper.virtual.cache = {};
            }

            swiper.virtual.update(true);
            swiper.slideTo(0, 0);
        }
    };
    var Virtual$1 = {
        name: 'virtual',
        params: {
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: true,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                virtual: _extends(_extends({}, Virtual), {}, {
                    slides: swiper.params.virtual.slides,
                    cache: {}
                })
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (!swiper.params.virtual.enabled) return;
                swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
                var overwriteParams = {
                    watchSlidesProgress: true
                };
                extend$1(swiper.params, overwriteParams);
                extend$1(swiper.originalParams, overwriteParams);

                if (!swiper.params.initialSlide) {
                    swiper.virtual.update();
                }
            },
            setTranslate: function setTranslate(swiper) {
                if (!swiper.params.virtual.enabled) return;
                swiper.virtual.update();
            }
        }
    };

    var Keyboard = {
        handle: function handle(event) {
            var swiper = this;
            var window = getWindow();
            var document = getDocument();
            var rtl = swiper.rtlTranslate;
            var e = event;
            if (e.originalEvent) e = e.originalEvent; // jquery fix

            var kc = e.keyCode || e.charCode;
            var pageUpDown = swiper.params.keyboard.pageUpDown;
            var isPageUp = pageUpDown && kc === 33;
            var isPageDown = pageUpDown && kc === 34;
            var isArrowLeft = kc === 37;
            var isArrowRight = kc === 39;
            var isArrowUp = kc === 38;
            var isArrowDown = kc === 40; // Directions locks

            if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
                return false;
            }

            if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
                return false;
            }

            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return undefined;
            }

            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return undefined;
            }

            if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                var inView = false; // Check that swiper should be inside of visible area of window

                if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
                    return undefined;
                }

                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var swiperOffset = swiper.$el.offset();
                if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + swiper.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + swiper.height],
                    [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]
                ];

                for (var i = 0; i < swiperCoord.length; i += 1) {
                    var point = swiperCoord[i];

                    if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                        inView = true;
                    }
                }

                if (!inView) return undefined;
            }

            if (swiper.isHorizontal()) {
                if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }

                if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
            } else {
                if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }

                if (isPageDown || isArrowDown) swiper.slideNext();
                if (isPageUp || isArrowUp) swiper.slidePrev();
            }

            swiper.emit('keyPress', kc);
            return undefined;
        },
        enable: function enable() {
            var swiper = this;
            var document = getDocument();
            if (swiper.keyboard.enabled) return;
            $(document).on('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = true;
        },
        disable: function disable() {
            var swiper = this;
            var document = getDocument();
            if (!swiper.keyboard.enabled) return;
            $(document).off('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = false;
        }
    };
    var Keyboard$1 = {
        name: 'keyboard',
        params: {
            keyboard: {
                enabled: false,
                onlyInViewport: true,
                pageUpDown: true
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                keyboard: _extends({
                    enabled: false
                }, Keyboard)
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.keyboard.enabled) {
                    swiper.keyboard.enable();
                }
            },
            destroy: function destroy(swiper) {
                if (swiper.keyboard.enabled) {
                    swiper.keyboard.disable();
                }
            }
        }
    };

    function isEventSupported() {
        var document = getDocument();
        var eventName = 'onwheel';
        var isSupported = (eventName in document);

        if (!isSupported) {
            var element = document.createElement('div');
            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
        }

        if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
            // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
            document.implementation.hasFeature('', '') !== true) {
            // This is the only way to test support for the `wheel` event in IE9+.
            isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
        }

        return isSupported;
    }

    var Mousewheel = {
        lastScrollTime: now(),
        lastEventBeforeSnap: undefined,
        recentWheelEvents: [],
        event: function event() {
            var window = getWindow();
            if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
            return isEventSupported() ? 'wheel' : 'mousewheel';
        },
        normalize: function normalize(e) {
            // Reasonable defaults
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;
            var sX = 0;
            var sY = 0; // spinX, spinY

            var pX = 0;
            var pY = 0; // pixelX, pixelY
            // Legacy

            if ('detail' in e) {
                sY = e.detail;
            }

            if ('wheelDelta' in e) {
                sY = -e.wheelDelta / 120;
            }

            if ('wheelDeltaY' in e) {
                sY = -e.wheelDeltaY / 120;
            }

            if ('wheelDeltaX' in e) {
                sX = -e.wheelDeltaX / 120;
            } // side scrolling on FF with DOMMouseScroll


            if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }

            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;

            if ('deltaY' in e) {
                pY = e.deltaY;
            }

            if ('deltaX' in e) {
                pX = e.deltaX;
            }

            if (e.shiftKey && !pX) {
                // if user scrolls with shift he wants horizontal scroll
                pX = pY;
                pY = 0;
            }

            if ((pX || pY) && e.deltaMode) {
                if (e.deltaMode === 1) {
                    // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {
                    // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            } // Fall-back if spin cannot be determined


            if (pX && !sX) {
                sX = pX < 1 ? -1 : 1;
            }

            if (pY && !sY) {
                sY = pY < 1 ? -1 : 1;
            }

            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
            };
        },
        handleMouseEnter: function handleMouseEnter() {
            var swiper = this;
            swiper.mouseEntered = true;
        },
        handleMouseLeave: function handleMouseLeave() {
            var swiper = this;
            swiper.mouseEntered = false;
        },
        handle: function handle(event) {
            var e = event;
            var swiper = this;
            var params = swiper.params.mousewheel;

            if (swiper.params.cssMode) {
                e.preventDefault();
            }

            var target = swiper.$el;

            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarget);
            }

            if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
            if (e.originalEvent) e = e.originalEvent; // jquery fix

            var delta = 0;
            var rtlFactor = swiper.rtlTranslate ? -1 : 1;
            var data = Mousewheel.normalize(e);

            if (params.forceToAxis) {
                if (swiper.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                    else return true;
                } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
                else return true;
            } else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            }

            if (delta === 0) return true;
            if (params.invert) delta = -delta;

            if (!swiper.params.freeMode) {
                // Register the new event in a variable which stores the relevant data
                var newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta),
                    raw: event
                }; // Keep the most recent events

                var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

                if (recentWheelEvents.length >= 2) {
                    recentWheelEvents.shift(); // only store the last N events
                }

                var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
                //   If direction has changed or
                //   if the scroll is quicker than the previous one:
                //     Animate the slider.
                // Else (this is the first time the wheel is moved):
                //     Animate the slider.

                if (prevEvent) {
                    if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
                        swiper.mousewheel.animateSlider(newEvent);
                    }
                } else {
                    swiper.mousewheel.animateSlider(newEvent);
                } // If it's time to release the scroll:
                //   Return now so you don't hit the preventDefault.


                if (swiper.mousewheel.releaseScroll(newEvent)) {
                    return true;
                }
            } else {
                // Freemode or scrollContainer:
                // If we recently snapped after a momentum scroll, then ignore wheel events
                // to give time for the deceleration to finish. Stop ignoring after 500 msecs
                // or if it's a new scroll (larger delta or inverse sign as last event before
                // an end-of-momentum snap).
                var _newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta)
                };
                var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
                var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

                if (!ignoreWheelEvents) {
                    swiper.mousewheel.lastEventBeforeSnap = undefined;

                    if (swiper.params.loop) {
                        swiper.loopFix();
                    }

                    var position = swiper.getTranslate() + delta * params.sensitivity;
                    var wasBeginning = swiper.isBeginning;
                    var wasEnd = swiper.isEnd;
                    if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                    if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                    swiper.setTransition(0);
                    swiper.setTranslate(position);
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();

                    if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
                        swiper.updateSlidesClasses();
                    }

                    if (swiper.params.freeModeSticky) {
                        // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                        // the end of a momentum scroll by storing recent (N=15?) wheel events.
                        // 1. do all N events have decreasing or same (absolute value) delta?
                        // 2. did all N events arrive in the last M (M=500?) msecs?
                        // 3. does the earliest event have an (absolute value) delta that's
                        //    at least P (P=1?) larger than the most recent event's delta?
                        // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                        // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
                        // Snap immediately and ignore remaining wheel events in this scroll.
                        // See comment above for "remaining wheel events in this scroll" determination.
                        // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                        clearTimeout(swiper.mousewheel.timeout);
                        swiper.mousewheel.timeout = undefined;
                        var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;

                        if (_recentWheelEvents.length >= 15) {
                            _recentWheelEvents.shift(); // only store the last N events

                        }

                        var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;

                        var firstEvent = _recentWheelEvents[0];

                        _recentWheelEvents.push(_newEvent);

                        if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
                            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                            _recentWheelEvents.splice(0);
                        } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
                            // We're at the end of the deceleration of a momentum scroll, so there's no need
                            // to wait for more events. Snap ASAP on the next tick.
                            // Also, because there's some remaining momentum we'll bias the snap in the
                            // direction of the ongoing scroll because it's better UX for the scroll to snap
                            // in the same direction as the scroll instead of reversing to snap.  Therefore,
                            // if it's already scrolled more than 20% in the current direction, keep going.
                            var snapToThreshold = delta > 0 ? 0.8 : 0.2;
                            swiper.mousewheel.lastEventBeforeSnap = _newEvent;

                            _recentWheelEvents.splice(0);

                            swiper.mousewheel.timeout = nextTick(function() {
                                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                            }, 0); // no delay; move on next tick
                        }

                        if (!swiper.mousewheel.timeout) {
                            // if we get here, then we haven't detected the end of a momentum scroll, so
                            // we'll consider a scroll "complete" when there haven't been any wheel events
                            // for 500ms.
                            swiper.mousewheel.timeout = nextTick(function() {
                                var snapToThreshold = 0.5;
                                swiper.mousewheel.lastEventBeforeSnap = _newEvent;

                                _recentWheelEvents.splice(0);

                                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                            }, 500);
                        }
                    } // Emit event


                    if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay

                    if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

                    if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
                }
            }

            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        },
        animateSlider: function animateSlider(newEvent) {
            var swiper = this;
            var window = getWindow(); // If the movement is NOT big enough and
            // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
            //   Don't go any further (avoid insignificant scroll movement).

            if (newEvent.delta >= 6 && now() - swiper.mousewheel.lastScrollTime < 60) {
                // Return false as a default
                return true;
            } // If user is scrolling towards the end:
            //   If the slider hasn't hit the latest slide or
            //   if the slider is a loop and
            //   if the slider isn't moving right now:
            //     Go to next slide and
            //     emit a scroll event.
            // Else (the user is scrolling towards the beginning) and
            // if the slider hasn't hit the first slide or
            // if the slider is a loop and
            // if the slider isn't moving right now:
            //   Go to prev slide and
            //   emit a scroll event.


            if (newEvent.direction < 0) {
                if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                    swiper.slideNext();
                    swiper.emit('scroll', newEvent.raw);
                }
            } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                swiper.slidePrev();
                swiper.emit('scroll', newEvent.raw);
            } // If you got here is because an animation has been triggered so store the current time


            swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

            return false;
        },
        releaseScroll: function releaseScroll(newEvent) {
            var swiper = this;
            var params = swiper.params.mousewheel;

            if (newEvent.direction < 0) {
                if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
                    // Return true to animate scroll on edges
                    return true;
                }
            } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
                // Return true to animate scroll on edges
                return true;
            }

            return false;
        },
        enable: function enable() {
            var swiper = this;
            var event = Mousewheel.event();

            if (swiper.params.cssMode) {
                swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
                return true;
            }

            if (!event) return false;
            if (swiper.mousewheel.enabled) return false;
            var target = swiper.$el;

            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarget);
            }

            target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
            target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
            target.on(event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = true;
            return true;
        },
        disable: function disable() {
            var swiper = this;
            var event = Mousewheel.event();

            if (swiper.params.cssMode) {
                swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
                return true;
            }

            if (!event) return false;
            if (!swiper.mousewheel.enabled) return false;
            var target = swiper.$el;

            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarget);
            }

            target.off(event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = false;
            return true;
        }
    };
    var Mousewheel$1 = {
        name: 'mousewheel',
        params: {
            mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarget: 'container'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                mousewheel: {
                    enabled: false,
                    lastScrollTime: now(),
                    lastEventBeforeSnap: undefined,
                    recentWheelEvents: [],
                    enable: Mousewheel.enable,
                    disable: Mousewheel.disable,
                    handle: Mousewheel.handle,
                    handleMouseEnter: Mousewheel.handleMouseEnter,
                    handleMouseLeave: Mousewheel.handleMouseLeave,
                    animateSlider: Mousewheel.animateSlider,
                    releaseScroll: Mousewheel.releaseScroll
                }
            });
        },
        on: {
            init: function init(swiper) {
                if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
                    swiper.mousewheel.disable();
                }

                if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
            },
            destroy: function destroy(swiper) {
                if (swiper.params.cssMode) {
                    swiper.mousewheel.enable();
                }

                if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
            }
        }
    };

    var Navigation = {
        update: function update() {
            // Update Navigation Buttons
            var swiper = this;
            var params = swiper.params.navigation;
            if (swiper.params.loop) return;
            var _swiper$navigation = swiper.navigation,
                $nextEl = _swiper$navigation.$nextEl,
                $prevEl = _swiper$navigation.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    $prevEl.addClass(params.disabledClass);
                } else {
                    $prevEl.removeClass(params.disabledClass);
                }

                $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }

            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    $nextEl.addClass(params.disabledClass);
                } else {
                    $nextEl.removeClass(params.disabledClass);
                }

                $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }
        },
        onPrevClick: function onPrevClick(e) {
            var swiper = this;
            e.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop) return;
            swiper.slidePrev();
        },
        onNextClick: function onNextClick(e) {
            var swiper = this;
            e.preventDefault();
            if (swiper.isEnd && !swiper.params.loop) return;
            swiper.slideNext();
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.navigation;
            if (!(params.nextEl || params.prevEl)) return;
            var $nextEl;
            var $prevEl;

            if (params.nextEl) {
                $nextEl = $(params.nextEl);

                if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
                    $nextEl = swiper.$el.find(params.nextEl);
                }
            }

            if (params.prevEl) {
                $prevEl = $(params.prevEl);

                if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
                    $prevEl = swiper.$el.find(params.prevEl);
                }
            }

            if ($nextEl && $nextEl.length > 0) {
                $nextEl.on('click', swiper.navigation.onNextClick);
            }

            if ($prevEl && $prevEl.length > 0) {
                $prevEl.on('click', swiper.navigation.onPrevClick);
            }

            extend$1(swiper.navigation, {
                $nextEl: $nextEl,
                nextEl: $nextEl && $nextEl[0],
                $prevEl: $prevEl,
                prevEl: $prevEl && $prevEl[0]
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var _swiper$navigation2 = swiper.navigation,
                $nextEl = _swiper$navigation2.$nextEl,
                $prevEl = _swiper$navigation2.$prevEl;

            if ($nextEl && $nextEl.length) {
                $nextEl.off('click', swiper.navigation.onNextClick);
                $nextEl.removeClass(swiper.params.navigation.disabledClass);
            }

            if ($prevEl && $prevEl.length) {
                $prevEl.off('click', swiper.navigation.onPrevClick);
                $prevEl.removeClass(swiper.params.navigation.disabledClass);
            }
        }
    };
    var Navigation$1 = {
        name: 'navigation',
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: false,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                navigation: _extends({}, Navigation)
            });
        },
        on: {
            init: function init(swiper) {
                swiper.navigation.init();
                swiper.navigation.update();
            },
            toEdge: function toEdge(swiper) {
                swiper.navigation.update();
            },
            fromEdge: function fromEdge(swiper) {
                swiper.navigation.update();
            },
            destroy: function destroy(swiper) {
                swiper.navigation.destroy();
            },
            click: function click(swiper, e) {
                var _swiper$navigation3 = swiper.navigation,
                    $nextEl = _swiper$navigation3.$nextEl,
                    $prevEl = _swiper$navigation3.$prevEl;

                if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
                    var isHidden;

                    if ($nextEl) {
                        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
                    } else if ($prevEl) {
                        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    }

                    if (isHidden === true) {
                        swiper.emit('navigationShow');
                    } else {
                        swiper.emit('navigationHide');
                    }

                    if ($nextEl) {
                        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }

                    if ($prevEl) {
                        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }
                }
            }
        }
    };

    var Pagination = {
        update: function update() {
            // Render || Update Pagination bullets/items
            var swiper = this;
            var rtl = swiper.rtl;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            var $el = swiper.pagination.$el; // Current/Total

            var current;
            var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

            if (swiper.params.loop) {
                current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

                if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
                    current -= slidesLength - swiper.loopedSlides * 2;
                }

                if (current > total - 1) current -= total;
                if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
            } else if (typeof swiper.snapIndex !== 'undefined') {
                current = swiper.snapIndex;
            } else {
                current = swiper.activeIndex || 0;
            } // Types


            if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                var bullets = swiper.pagination.bullets;
                var firstIndex;
                var lastIndex;
                var midIndex;

                if (params.dynamicBullets) {
                    swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                    $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

                    if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                        swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

                        if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
                            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
                        } else if (swiper.pagination.dynamicBulletIndex < 0) {
                            swiper.pagination.dynamicBulletIndex = 0;
                        }
                    }

                    firstIndex = current - swiper.pagination.dynamicBulletIndex;
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }

                bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

                if ($el.length > 1) {
                    bullets.each(function(bullet) {
                        var $bullet = $(bullet);
                        var bulletIndex = $bullet.index();

                        if (bulletIndex === current) {
                            $bullet.addClass(params.bulletActiveClass);
                        }

                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                                $bullet.addClass(params.bulletActiveClass + "-main");
                            }

                            if (bulletIndex === firstIndex) {
                                $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                            }

                            if (bulletIndex === lastIndex) {
                                $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                            }
                        }
                    });
                } else {
                    var $bullet = bullets.eq(current);
                    var bulletIndex = $bullet.index();
                    $bullet.addClass(params.bulletActiveClass);

                    if (params.dynamicBullets) {
                        var $firstDisplayedBullet = bullets.eq(firstIndex);
                        var $lastDisplayedBullet = bullets.eq(lastIndex);

                        for (var i = firstIndex; i <= lastIndex; i += 1) {
                            bullets.eq(i).addClass(params.bulletActiveClass + "-main");
                        }

                        if (swiper.params.loop) {
                            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                                for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                                    bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
                                }

                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
                            } else {
                                $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                                $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                            }
                        } else {
                            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                        }
                    }
                }

                if (params.dynamicBullets) {
                    var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
                    var offsetProp = rtl ? 'right' : 'left';
                    bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
                }
            }

            if (params.type === 'fraction') {
                $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
                $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
            }

            if (params.type === 'progressbar') {
                var progressbarDirection;

                if (params.progressbarOpposite) {
                    progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                } else {
                    progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                }

                var scale = (current + 1) / total;
                var scaleX = 1;
                var scaleY = 1;

                if (progressbarDirection === 'horizontal') {
                    scaleX = scale;
                } else {
                    scaleY = scale;
                }

                $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
            }

            if (params.type === 'custom' && params.renderCustom) {
                $el.html(params.renderCustom(swiper, current + 1, total));
                swiper.emit('paginationRender', $el[0]);
            } else {
                swiper.emit('paginationUpdate', $el[0]);
            }

            $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        },
        render: function render() {
            // Render Container
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            var $el = swiper.pagination.$el;
            var paginationHTML = '';

            if (params.type === 'bullets') {
                var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

                for (var i = 0; i < numberOfBullets; i += 1) {
                    if (params.renderBullet) {
                        paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                    } else {
                        paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
                    }
                }

                $el.html(paginationHTML);
                swiper.pagination.bullets = $el.find("." + params.bulletClass);
            }

            if (params.type === 'fraction') {
                if (params.renderFraction) {
                    paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                } else {
                    paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
                }

                $el.html(paginationHTML);
            }

            if (params.type === 'progressbar') {
                if (params.renderProgressbar) {
                    paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                } else {
                    paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
                }

                $el.html(paginationHTML);
            }

            if (params.type !== 'custom') {
                swiper.emit('paginationRender', swiper.pagination.$el[0]);
            }
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el) return;
            var $el = $(params.el);
            if ($el.length === 0) return;

            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
                $el = swiper.$el.find(params.el);
            }

            if (params.type === 'bullets' && params.clickable) {
                $el.addClass(params.clickableClass);
            }

            $el.addClass(params.modifierClass + params.type);

            if (params.type === 'bullets' && params.dynamicBullets) {
                $el.addClass("" + params.modifierClass + params.type + "-dynamic");
                swiper.pagination.dynamicBulletIndex = 0;

                if (params.dynamicMainBullets < 1) {
                    params.dynamicMainBullets = 1;
                }
            }

            if (params.type === 'progressbar' && params.progressbarOpposite) {
                $el.addClass(params.progressbarOppositeClass);
            }

            if (params.clickable) {
                $el.on('click', "." + params.bulletClass, function onClick(e) {
                    e.preventDefault();
                    var index = $(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                });
            }

            extend$1(swiper.pagination, {
                $el: $el,
                el: $el[0]
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
            var $el = swiper.pagination.$el;
            $el.removeClass(params.hiddenClass);
            $el.removeClass(params.modifierClass + params.type);
            if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

            if (params.clickable) {
                $el.off('click', "." + params.bulletClass);
            }
        }
    };
    var Pagination$1 = {
        name: 'pagination',
        params: {
            pagination: {
                el: null,
                bulletElement: 'span',
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: 'bullets',
                // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: function formatFractionCurrent(number) {
                    return number;
                },
                formatFractionTotal: function formatFractionTotal(number) {
                    return number;
                },
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                modifierClass: 'swiper-pagination-',
                // NEW
                currentClass: 'swiper-pagination-current',
                totalClass: 'swiper-pagination-total',
                hiddenClass: 'swiper-pagination-hidden',
                progressbarFillClass: 'swiper-pagination-progressbar-fill',
                progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
                clickableClass: 'swiper-pagination-clickable',
                // NEW
                lockClass: 'swiper-pagination-lock'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                pagination: _extends({
                    dynamicBulletIndex: 0
                }, Pagination)
            });
        },
        on: {
            init: function init(swiper) {
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
            },
            activeIndexChange: function activeIndexChange(swiper) {
                if (swiper.params.loop) {
                    swiper.pagination.update();
                } else if (typeof swiper.snapIndex === 'undefined') {
                    swiper.pagination.update();
                }
            },
            snapIndexChange: function snapIndexChange(swiper) {
                if (!swiper.params.loop) {
                    swiper.pagination.update();
                }
            },
            slidesLengthChange: function slidesLengthChange(swiper) {
                if (swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            snapGridLengthChange: function snapGridLengthChange(swiper) {
                if (!swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            destroy: function destroy(swiper) {
                swiper.pagination.destroy();
            },
            click: function click(swiper, e) {
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
                    var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

                    if (isHidden === true) {
                        swiper.emit('paginationShow');
                    } else {
                        swiper.emit('paginationHide');
                    }

                    swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            }
        }
    };

    var Scrollbar = {
        setTranslate: function setTranslate() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            var scrollbar = swiper.scrollbar,
                rtl = swiper.rtlTranslate,
                progress = swiper.progress;
            var dragSize = scrollbar.dragSize,
                trackSize = scrollbar.trackSize,
                $dragEl = scrollbar.$dragEl,
                $el = scrollbar.$el;
            var params = swiper.params.scrollbar;
            var newSize = dragSize;
            var newPos = (trackSize - dragSize) * progress;

            if (rtl) {
                newPos = -newPos;

                if (newPos > 0) {
                    newSize = dragSize - newPos;
                    newPos = 0;
                } else if (-newPos + dragSize > trackSize) {
                    newSize = trackSize + newPos;
                }
            } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
            } else if (newPos + dragSize > trackSize) {
                newSize = trackSize - newPos;
            }

            if (swiper.isHorizontal()) {
                $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
                $dragEl[0].style.width = newSize + "px";
            } else {
                $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
                $dragEl[0].style.height = newSize + "px";
            }

            if (params.hide) {
                clearTimeout(swiper.scrollbar.timeout);
                $el[0].style.opacity = 1;
                swiper.scrollbar.timeout = setTimeout(function() {
                    $el[0].style.opacity = 0;
                    $el.transition(400);
                }, 1000);
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            swiper.scrollbar.$dragEl.transition(duration);
        },
        updateSize: function updateSize() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            var scrollbar = swiper.scrollbar;
            var $dragEl = scrollbar.$dragEl,
                $el = scrollbar.$el;
            $dragEl[0].style.width = '';
            $dragEl[0].style.height = '';
            var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
            var divider = swiper.size / swiper.virtualSize;
            var moveDivider = divider * (trackSize / swiper.size);
            var dragSize;

            if (swiper.params.scrollbar.dragSize === 'auto') {
                dragSize = trackSize * divider;
            } else {
                dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            }

            if (swiper.isHorizontal()) {
                $dragEl[0].style.width = dragSize + "px";
            } else {
                $dragEl[0].style.height = dragSize + "px";
            }

            if (divider >= 1) {
                $el[0].style.display = 'none';
            } else {
                $el[0].style.display = '';
            }

            if (swiper.params.scrollbar.hide) {
                $el[0].style.opacity = 0;
            }

            extend$1(scrollbar, {
                trackSize: trackSize,
                divider: divider,
                moveDivider: moveDivider,
                dragSize: dragSize
            });
            scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
        },
        getPointerPosition: function getPointerPosition(e) {
            var swiper = this;

            if (swiper.isHorizontal()) {
                return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
            }

            return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
        },
        setDragPosition: function setDragPosition(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar,
                rtl = swiper.rtlTranslate;
            var $el = scrollbar.$el,
                dragSize = scrollbar.dragSize,
                trackSize = scrollbar.trackSize,
                dragStartPos = scrollbar.dragStartPos;
            var positionRatio;
            positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);

            if (rtl) {
                positionRatio = 1 - positionRatio;
            }

            var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        },
        onDragStart: function onDragStart(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar,
                $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el,
                $dragEl = scrollbar.$dragEl;
            swiper.scrollbar.isTouched = true;
            swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
            e.preventDefault();
            e.stopPropagation();
            $wrapperEl.transition(100);
            $dragEl.transition(100);
            scrollbar.setDragPosition(e);
            clearTimeout(swiper.scrollbar.dragTimeout);
            $el.transition(0);

            if (params.hide) {
                $el.css('opacity', 1);
            }

            if (swiper.params.cssMode) {
                swiper.$wrapperEl.css('scroll-snap-type', 'none');
            }

            swiper.emit('scrollbarDragStart', e);
        },
        onDragMove: function onDragMove(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar,
                $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el,
                $dragEl = scrollbar.$dragEl;
            if (!swiper.scrollbar.isTouched) return;
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            scrollbar.setDragPosition(e);
            $wrapperEl.transition(0);
            $el.transition(0);
            $dragEl.transition(0);
            swiper.emit('scrollbarDragMove', e);
        },
        onDragEnd: function onDragEnd(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar,
                $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            if (!swiper.scrollbar.isTouched) return;
            swiper.scrollbar.isTouched = false;

            if (swiper.params.cssMode) {
                swiper.$wrapperEl.css('scroll-snap-type', '');
                $wrapperEl.transition('');
            }

            if (params.hide) {
                clearTimeout(swiper.scrollbar.dragTimeout);
                swiper.scrollbar.dragTimeout = nextTick(function() {
                    $el.css('opacity', 0);
                    $el.transition(400);
                }, 1000);
            }

            swiper.emit('scrollbarDragEnd', e);

            if (params.snapOnRelease) {
                swiper.slideToClosest();
            }
        },
        enableDraggable: function enableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) return;
            var document = getDocument();
            var scrollbar = swiper.scrollbar,
                touchEventsTouch = swiper.touchEventsTouch,
                touchEventsDesktop = swiper.touchEventsDesktop,
                params = swiper.params,
                support = swiper.support;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = support.passiveListener && params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            var passiveListener = support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;

            if (!support.touch) {
                target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
                target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
                target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
            }
        },
        disableDraggable: function disableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) return;
            var document = getDocument();
            var scrollbar = swiper.scrollbar,
                touchEventsTouch = swiper.touchEventsTouch,
                touchEventsDesktop = swiper.touchEventsDesktop,
                params = swiper.params,
                support = swiper.support;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = support.passiveListener && params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            var passiveListener = support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;

            if (!support.touch) {
                target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
                target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
                target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
            }
        },
        init: function init() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) return;
            var scrollbar = swiper.scrollbar,
                $swiperEl = swiper.$el;
            var params = swiper.params.scrollbar;
            var $el = $(params.el);

            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
                $el = $swiperEl.find(params.el);
            }

            var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

            if ($dragEl.length === 0) {
                $dragEl = $("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
                $el.append($dragEl);
            }

            extend$1(scrollbar, {
                $el: $el,
                el: $el[0],
                $dragEl: $dragEl,
                dragEl: $dragEl[0]
            });

            if (params.draggable) {
                scrollbar.enableDraggable();
            }
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.scrollbar.disableDraggable();
        }
    };
    var Scrollbar$1 = {
        name: 'scrollbar',
        params: {
            scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: false,
                draggable: false,
                snapOnRelease: true,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                scrollbar: _extends({
                    isTouched: false,
                    timeout: null,
                    dragTimeout: null
                }, Scrollbar)
            });
        },
        on: {
            init: function init(swiper) {
                swiper.scrollbar.init();
                swiper.scrollbar.updateSize();
                swiper.scrollbar.setTranslate();
            },
            update: function update(swiper) {
                swiper.scrollbar.updateSize();
            },
            resize: function resize(swiper) {
                swiper.scrollbar.updateSize();
            },
            observerUpdate: function observerUpdate(swiper) {
                swiper.scrollbar.updateSize();
            },
            setTranslate: function setTranslate(swiper) {
                swiper.scrollbar.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                swiper.scrollbar.setTransition(duration);
            },
            destroy: function destroy(swiper) {
                swiper.scrollbar.destroy();
            }
        }
    };

    var Parallax = {
        setTransform: function setTransform(el, progress) {
            var swiper = this;
            var rtl = swiper.rtl;
            var $el = $(el);
            var rtlFactor = rtl ? -1 : 1;
            var p = $el.attr('data-swiper-parallax') || '0';
            var x = $el.attr('data-swiper-parallax-x');
            var y = $el.attr('data-swiper-parallax-y');
            var scale = $el.attr('data-swiper-parallax-scale');
            var opacity = $el.attr('data-swiper-parallax-opacity');

            if (x || y) {
                x = x || '0';
                y = y || '0';
            } else if (swiper.isHorizontal()) {
                x = p;
                y = '0';
            } else {
                y = p;
                x = '0';
            }

            if (x.indexOf('%') >= 0) {
                x = parseInt(x, 10) * progress * rtlFactor + "%";
            } else {
                x = x * progress * rtlFactor + "px";
            }

            if (y.indexOf('%') >= 0) {
                y = parseInt(y, 10) * progress + "%";
            } else {
                y = y * progress + "px";
            }

            if (typeof opacity !== 'undefined' && opacity !== null) {
                var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                $el[0].style.opacity = currentOpacity;
            }

            if (typeof scale === 'undefined' || scale === null) {
                $el.transform("translate3d(" + x + ", " + y + ", 0px)");
            } else {
                var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
            }
        },
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el,
                slides = swiper.slides,
                progress = swiper.progress,
                snapGrid = swiper.snapGrid;
            $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(el) {
                swiper.parallax.setTransform(el, progress);
            });
            slides.each(function(slideEl, slideIndex) {
                var slideProgress = slideEl.progress;

                if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                    slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
                }

                slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(el) {
                    swiper.parallax.setTransform(el, slideProgress);
                });
            });
        },
        setTransition: function setTransition(duration) {
            if (duration === void 0) {
                duration = this.params.speed;
            }

            var swiper = this;
            var $el = swiper.$el;
            $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(parallaxEl) {
                var $parallaxEl = $(parallaxEl);
                var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
                if (duration === 0) parallaxDuration = 0;
                $parallaxEl.transition(parallaxDuration);
            });
        }
    };
    var Parallax$1 = {
        name: 'parallax',
        params: {
            parallax: {
                enabled: false
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                parallax: _extends({}, Parallax)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (!swiper.params.parallax.enabled) return;
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            init: function init(swiper) {
                if (!swiper.params.parallax.enabled) return;
                swiper.parallax.setTranslate();
            },
            setTranslate: function setTranslate(swiper) {
                if (!swiper.params.parallax.enabled) return;
                swiper.parallax.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (!swiper.params.parallax.enabled) return;
                swiper.parallax.setTransition(duration);
            }
        }
    };

    var Zoom = {
        // Calc Scale From Multi-touches
        getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) return 1;
            var x1 = e.targetTouches[0].pageX;
            var y1 = e.targetTouches[0].pageY;
            var x2 = e.targetTouches[1].pageX;
            var y2 = e.targetTouches[1].pageY;
            var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            return distance;
        },
        // Events
        onGestureStart: function onGestureStart(e) {
            var swiper = this;
            var support = swiper.support;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            zoom.fakeGestureTouched = false;
            zoom.fakeGestureMoved = false;

            if (!support.gestures) {
                if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
                    return;
                }

                zoom.fakeGestureTouched = true;
                gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
            }

            if (!gesture.$slideEl || !gesture.$slideEl.length) {
                gesture.$slideEl = $(e.target).closest("." + swiper.params.slideClass);
                if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
                gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
                gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

                if (gesture.$imageWrapEl.length === 0) {
                    gesture.$imageEl = undefined;
                    return;
                }
            }

            if (gesture.$imageEl) {
                gesture.$imageEl.transition(0);
            }

            swiper.zoom.isScaling = true;
        },
        onGestureChange: function onGestureChange(e) {
            var swiper = this;
            var support = swiper.support;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;

            if (!support.gestures) {
                if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
                    return;
                }

                zoom.fakeGestureMoved = true;
                gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                if (e.type === 'gesturechange') zoom.onGestureStart(e);
                return;
            }

            if (support.gestures) {
                zoom.scale = e.scale * zoom.currentScale;
            } else {
                zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
            }

            if (zoom.scale > gesture.maxRatio) {
                zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
            }

            if (zoom.scale < params.minRatio) {
                zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
            }

            gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
        },
        onGestureEnd: function onGestureEnd(e) {
            var swiper = this;
            var device = swiper.device;
            var support = swiper.support;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;

            if (!support.gestures) {
                if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
                    return;
                }

                if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
                    return;
                }

                zoom.fakeGestureTouched = false;
                zoom.fakeGestureMoved = false;
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
            zoom.currentScale = zoom.scale;
            zoom.isScaling = false;
            if (zoom.scale === 1) gesture.$slideEl = undefined;
        },
        onTouchStart: function onTouchStart(e) {
            var swiper = this;
            var device = swiper.device;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture,
                image = zoom.image;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            if (image.isTouched) return;
            if (device.android && e.cancelable) e.preventDefault();
            image.isTouched = true;
            image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        },
        onTouchMove: function onTouchMove(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture,
                image = zoom.image,
                velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            swiper.allowClick = false;
            if (!image.isTouched || !gesture.$slideEl) return;

            if (!image.isMoved) {
                image.width = gesture.$imageEl[0].offsetWidth;
                image.height = gesture.$imageEl[0].offsetHeight;
                image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
                image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
                gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                gesture.$imageWrapEl.transition(0);

                if (swiper.rtl) {
                    image.startX = -image.startX;
                    image.startY = -image.startY;
                }
            } // Define if we need image drag


            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

            if (!image.isMoved && !zoom.isScaling) {
                if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                    image.isTouched = false;
                    return;
                }

                if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                    image.isTouched = false;
                    return;
                }
            }

            if (e.cancelable) {
                e.preventDefault();
            }

            e.stopPropagation();
            image.isMoved = true;
            image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
            image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

            if (image.currentX < image.minX) {
                image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
            }

            if (image.currentX > image.maxX) {
                image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
            }

            if (image.currentY < image.minY) {
                image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
            }

            if (image.currentY > image.maxY) {
                image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
            } // Velocity


            if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
            if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
            if (!velocity.prevTime) velocity.prevTime = Date.now();
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();
            gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
        },
        onTouchEnd: function onTouchEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture,
                image = zoom.image,
                velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

            if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
            }

            image.isTouched = false;
            image.isMoved = false;
            var momentumDurationX = 300;
            var momentumDurationY = 300;
            var momentumDistanceX = velocity.x * momentumDurationX;
            var newPositionX = image.currentX + momentumDistanceX;
            var momentumDistanceY = velocity.y * momentumDurationY;
            var newPositionY = image.currentY + momentumDistanceY; // Fix duration

            if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
            if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
            var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
            image.currentX = newPositionX;
            image.currentY = newPositionY; // Define if we need image drag

            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
            gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
        },
        onTransitionEnd: function onTransitionEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;

            if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                if (gesture.$imageEl) {
                    gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
                }

                if (gesture.$imageWrapEl) {
                    gesture.$imageWrapEl.transform('translate3d(0,0,0)');
                }

                zoom.scale = 1;
                zoom.currentScale = 1;
                gesture.$slideEl = undefined;
                gesture.$imageEl = undefined;
                gesture.$imageWrapEl = undefined;
            }
        },
        // Toggle Zoom
        toggle: function toggle(e) {
            var swiper = this;
            var zoom = swiper.zoom;

            if (zoom.scale && zoom.scale !== 1) {
                // Zoom Out
                zoom.out();
            } else {
                // Zoom In
                zoom.in(e);
            }
        },
        in: function _in(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture,
                image = zoom.image;

            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                    gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
                } else {
                    gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                }

                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
                gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            gesture.$slideEl.addClass("" + params.zoomedSlideClass);
            var touchX;
            var touchY;
            var offsetX;
            var offsetY;
            var diffX;
            var diffY;
            var translateX;
            var translateY;
            var imageWidth;
            var imageHeight;
            var scaledWidth;
            var scaledHeight;
            var translateMinX;
            var translateMinY;
            var translateMaxX;
            var translateMaxY;
            var slideWidth;
            var slideHeight;

            if (typeof image.touchesStart.x === 'undefined' && e) {
                touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
            } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
            }

            zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

            if (e) {
                slideWidth = gesture.$slideEl[0].offsetWidth;
                slideHeight = gesture.$slideEl[0].offsetHeight;
                offsetX = gesture.$slideEl.offset().left;
                offsetY = gesture.$slideEl.offset().top;
                diffX = offsetX + slideWidth / 2 - touchX;
                diffY = offsetY + slideHeight / 2 - touchY;
                imageWidth = gesture.$imageEl[0].offsetWidth;
                imageHeight = gesture.$imageEl[0].offsetHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;
                translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;
                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;

                if (translateX < translateMinX) {
                    translateX = translateMinX;
                }

                if (translateX > translateMaxX) {
                    translateX = translateMaxX;
                }

                if (translateY < translateMinY) {
                    translateY = translateMinY;
                }

                if (translateY > translateMaxY) {
                    translateY = translateMaxY;
                }
            } else {
                translateX = 0;
                translateY = 0;
            }

            gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
            gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
        },
        out: function out() {
            var swiper = this;
            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;

            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                    gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
                } else {
                    gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                }

                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
                gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            zoom.scale = 1;
            zoom.currentScale = 1;
            gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
            gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
            gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
            gesture.$slideEl = undefined;
        },
        toggleGestures: function toggleGestures(method) {
            var swiper = this;
            var zoom = swiper.zoom;
            var selector = zoom.slideSelector,
                passive = zoom.passiveListener;
            swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
            swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
            swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
        },
        enableGestures: function enableGestures() {
            if (this.zoom.gesturesEnabled) return;
            this.zoom.gesturesEnabled = true;
            this.zoom.toggleGestures('on');
        },
        disableGestures: function disableGestures() {
            if (!this.zoom.gesturesEnabled) return;
            this.zoom.gesturesEnabled = false;
            this.zoom.toggleGestures('off');
        },
        // Attach/Detach Events
        enable: function enable() {
            var swiper = this;
            var support = swiper.support;
            var zoom = swiper.zoom;
            if (zoom.enabled) return;
            zoom.enabled = true;
            var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            var activeListenerWithCapture = support.passiveListener ? {
                passive: false,
                capture: true
            } : true;
            var slideSelector = "." + swiper.params.slideClass;
            swiper.zoom.passiveListener = passiveListener;
            swiper.zoom.slideSelector = slideSelector; // Scale image

            if (support.gestures) {
                swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
                swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

                if (swiper.touchEvents.cancel) {
                    swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
                }
            } // Move image


            swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
        },
        disable: function disable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (!zoom.enabled) return;
            var support = swiper.support;
            swiper.zoom.enabled = false;
            var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            var activeListenerWithCapture = support.passiveListener ? {
                passive: false,
                capture: true
            } : true;
            var slideSelector = "." + swiper.params.slideClass; // Scale image

            if (support.gestures) {
                swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
                swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

                if (swiper.touchEvents.cancel) {
                    swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
                }
            } // Move image


            swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
        }
    };
    var Zoom$1 = {
        name: 'zoom',
        params: {
            zoom: {
                enabled: false,
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                zoom: _extends({
                    enabled: false,
                    scale: 1,
                    currentScale: 1,
                    isScaling: false,
                    gesture: {
                        $slideEl: undefined,
                        slideWidth: undefined,
                        slideHeight: undefined,
                        $imageEl: undefined,
                        $imageWrapEl: undefined,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: undefined,
                        isMoved: undefined,
                        currentX: undefined,
                        currentY: undefined,
                        minX: undefined,
                        minY: undefined,
                        maxX: undefined,
                        maxY: undefined,
                        width: undefined,
                        height: undefined,
                        startX: undefined,
                        startY: undefined,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: undefined,
                        y: undefined,
                        prevPositionX: undefined,
                        prevPositionY: undefined,
                        prevTime: undefined
                    }
                }, Zoom)
            });
            var scale = 1;
            Object.defineProperty(swiper.zoom, 'scale', {
                get: function get() {
                    return scale;
                },
                set: function set(value) {
                    if (scale !== value) {
                        var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
                        var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
                        swiper.emit('zoomChange', value, imageEl, slideEl);
                    }

                    scale = value;
                }
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.zoom.enabled) {
                    swiper.zoom.enable();
                }
            },
            destroy: function destroy(swiper) {
                swiper.zoom.disable();
            },
            touchStart: function touchStart(swiper, e) {
                if (!swiper.zoom.enabled) return;
                swiper.zoom.onTouchStart(e);
            },
            touchEnd: function touchEnd(swiper, e) {
                if (!swiper.zoom.enabled) return;
                swiper.zoom.onTouchEnd(e);
            },
            doubleTap: function doubleTap(swiper, e) {
                if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                    swiper.zoom.toggle(e);
                }
            },
            transitionEnd: function transitionEnd(swiper) {
                if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                    swiper.zoom.onTransitionEnd();
                }
            },
            slideChange: function slideChange(swiper) {
                if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
                    swiper.zoom.onTransitionEnd();
                }
            }
        }
    };

    var Lazy = {
        loadInSlide: function loadInSlide(index, loadInDuplicate) {
            if (loadInDuplicate === void 0) {
                loadInDuplicate = true;
            }

            var swiper = this;
            var params = swiper.params.lazy;
            if (typeof index === 'undefined') return;
            if (swiper.slides.length === 0) return;
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
            var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

            if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
                $images.push($slideEl[0]);
            }

            if ($images.length === 0) return;
            $images.each(function(imageEl) {
                var $imageEl = $(imageEl);
                $imageEl.addClass(params.loadingClass);
                var background = $imageEl.attr('data-background');
                var src = $imageEl.attr('data-src');
                var srcset = $imageEl.attr('data-srcset');
                var sizes = $imageEl.attr('data-sizes');
                var $pictureEl = $imageEl.parent('picture');
                swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function() {
                    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

                    if (background) {
                        $imageEl.css('background-image', "url(\"" + background + "\")");
                        $imageEl.removeAttr('data-background');
                    } else {
                        if (srcset) {
                            $imageEl.attr('srcset', srcset);
                            $imageEl.removeAttr('data-srcset');
                        }

                        if (sizes) {
                            $imageEl.attr('sizes', sizes);
                            $imageEl.removeAttr('data-sizes');
                        }

                        if ($pictureEl.length) {
                            $pictureEl.children('source').each(function(sourceEl) {
                                var $source = $(sourceEl);

                                if ($source.attr('data-srcset')) {
                                    $source.attr('srcset', $source.attr('data-srcset'));
                                    $source.removeAttr('data-srcset');
                                }
                            });
                        }

                        if (src) {
                            $imageEl.attr('src', src);
                            $imageEl.removeAttr('data-src');
                        }
                    }

                    $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                    $slideEl.find("." + params.preloaderClass).remove();

                    if (swiper.params.loop && loadInDuplicate) {
                        var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

                        if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                            var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
                            swiper.lazy.loadInSlide(originalSlide.index(), false);
                        } else {
                            var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
                            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
                        }
                    }

                    swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

                    if (swiper.params.autoHeight) {
                        swiper.updateAutoHeight();
                    }
                });
                swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
            });
        },
        load: function load() {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl,
                swiperParams = swiper.params,
                slides = swiper.slides,
                activeIndex = swiper.activeIndex;
            var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
            var params = swiperParams.lazy;
            var slidesPerView = swiperParams.slidesPerView;

            if (slidesPerView === 'auto') {
                slidesPerView = 0;
            }

            function slideExist(index) {
                if (isVirtual) {
                    if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
                        return true;
                    }
                } else if (slides[index]) return true;

                return false;
            }

            function slideIndex(slideEl) {
                if (isVirtual) {
                    return $(slideEl).attr('data-swiper-slide-index');
                }

                return $(slideEl).index();
            }

            if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

            if (swiper.params.watchSlidesVisibility) {
                $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function(slideEl) {
                    var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
                    swiper.lazy.loadInSlide(index);
                });
            } else if (slidesPerView > 1) {
                for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
                    if (slideExist(i)) swiper.lazy.loadInSlide(i);
                }
            } else {
                swiper.lazy.loadInSlide(activeIndex);
            }

            if (params.loadPrevNext) {
                if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                    var amount = params.loadPrevNextAmount;
                    var spv = slidesPerView;
                    var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                    var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

                    for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
                        if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
                    } // Prev Slides


                    for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
                        if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
                    }
                } else {
                    var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
                    if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
                    var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
                    if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
                }
            }
        }
    };
    var Lazy$1 = {
        name: 'lazy',
        params: {
            lazy: {
                enabled: false,
                loadPrevNext: false,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: false,
                elementClass: 'swiper-lazy',
                loadingClass: 'swiper-lazy-loading',
                loadedClass: 'swiper-lazy-loaded',
                preloaderClass: 'swiper-lazy-preloader'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                lazy: _extends({
                    initialImageLoaded: false
                }, Lazy)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
                    swiper.params.preloadImages = false;
                }
            },
            init: function init(swiper) {
                if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
                    swiper.lazy.load();
                }
            },
            scroll: function scroll(swiper) {
                if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
                    swiper.lazy.load();
                }
            },
            resize: function resize(swiper) {
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            scrollbarDragMove: function scrollbarDragMove(swiper) {
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            transitionStart: function transitionStart(swiper) {
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
                        swiper.lazy.load();
                    }
                }
            },
            transitionEnd: function transitionEnd(swiper) {
                if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                    swiper.lazy.load();
                }
            },
            slideChange: function slideChange(swiper) {
                if (swiper.params.lazy.enabled && swiper.params.cssMode) {
                    swiper.lazy.load();
                }
            }
        }
    };

    var Controller = {
        LinearSpline: function LinearSpline(x, y) {
            var binarySearch = function search() {
                var maxIndex;
                var minIndex;
                var guess;
                return function(array, val) {
                    minIndex = -1;
                    maxIndex = array.length;

                    while (maxIndex - minIndex > 1) {
                        guess = maxIndex + minIndex >> 1;

                        if (array[guess] <= val) {
                            minIndex = guess;
                        } else {
                            maxIndex = guess;
                        }
                    }

                    return maxIndex;
                };
            }();

            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.

            var i1;
            var i3;

            this.interpolate = function interpolate(x2) {
                if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
                // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

                return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
            };

            return this;
        },
        // xxx: for now i will just save one spline function to to
        getInterpolateFunction: function getInterpolateFunction(c) {
            var swiper = this;

            if (!swiper.controller.spline) {
                swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
            }
        },
        setTranslate: function setTranslate(_setTranslate, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var multiplier;
            var controlledTranslate;
            var Swiper = swiper.constructor;

            function setControlledTranslate(c) {
                // this will create an Interpolate function based on the snapGrids
                // x is the Grid of the scrolled scroller and y will be the controlled scroller
                // it makes sense to create this only once and recall it for the interpolation
                // the function does a lot of value caching for performance
                var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

                if (swiper.params.controller.by === 'slide') {
                    swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                    // but it did not work out

                    controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }

                if (!controlledTranslate || swiper.params.controller.by === 'container') {
                    multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                    controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                }

                if (swiper.params.controller.inverse) {
                    controlledTranslate = c.maxTranslate() - controlledTranslate;
                }

                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
            }

            if (Array.isArray(controlled)) {
                for (var i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTranslate(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTranslate(controlled);
            }
        },
        setTransition: function setTransition(duration, byController) {
            var swiper = this;
            var Swiper = swiper.constructor;
            var controlled = swiper.controller.control;
            var i;

            function setControlledTransition(c) {
                c.setTransition(duration, swiper);

                if (duration !== 0) {
                    c.transitionStart();

                    if (c.params.autoHeight) {
                        nextTick(function() {
                            c.updateAutoHeight();
                        });
                    }

                    c.$wrapperEl.transitionEnd(function() {
                        if (!controlled) return;

                        if (c.params.loop && swiper.params.controller.by === 'slide') {
                            c.loopFix();
                        }

                        c.transitionEnd();
                    });
                }
            }

            if (Array.isArray(controlled)) {
                for (i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTransition(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTransition(controlled);
            }
        }
    };
    var Controller$1 = {
        name: 'controller',
        params: {
            controller: {
                control: undefined,
                inverse: false,
                by: 'slide' // or 'container'

            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                controller: _extends({
                    control: swiper.params.controller.control
                }, Controller)
            });
        },
        on: {
            update: function update(swiper) {
                if (!swiper.controller.control) return;

                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            resize: function resize(swiper) {
                if (!swiper.controller.control) return;

                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            observerUpdate: function observerUpdate(swiper) {
                if (!swiper.controller.control) return;

                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            setTranslate: function setTranslate(swiper, translate, byController) {
                if (!swiper.controller.control) return;
                swiper.controller.setTranslate(translate, byController);
            },
            setTransition: function setTransition(swiper, duration, byController) {
                if (!swiper.controller.control) return;
                swiper.controller.setTransition(duration, byController);
            }
        }
    };

    var A11y = {
        makeElFocusable: function makeElFocusable($el) {
            $el.attr('tabIndex', '0');
            return $el;
        },
        makeElNotFocusable: function makeElNotFocusable($el) {
            $el.attr('tabIndex', '-1');
            return $el;
        },
        addElRole: function addElRole($el, role) {
            $el.attr('role', role);
            return $el;
        },
        addElLabel: function addElLabel($el, label) {
            $el.attr('aria-label', label);
            return $el;
        },
        disableEl: function disableEl($el) {
            $el.attr('aria-disabled', true);
            return $el;
        },
        enableEl: function enableEl($el) {
            $el.attr('aria-disabled', false);
            return $el;
        },
        onEnterKey: function onEnterKey(e) {
            var swiper = this;
            var params = swiper.params.a11y;
            if (e.keyCode !== 13) return;
            var $targetEl = $(e.target);

            if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                    swiper.slideNext();
                }

                if (swiper.isEnd) {
                    swiper.a11y.notify(params.lastSlideMessage);
                } else {
                    swiper.a11y.notify(params.nextSlideMessage);
                }
            }

            if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                    swiper.slidePrev();
                }

                if (swiper.isBeginning) {
                    swiper.a11y.notify(params.firstSlideMessage);
                } else {
                    swiper.a11y.notify(params.prevSlideMessage);
                }
            }

            if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass)) {
                $targetEl[0].click();
            }
        },
        notify: function notify(message) {
            var swiper = this;
            var notification = swiper.a11y.liveRegion;
            if (notification.length === 0) return;
            notification.html('');
            notification.html(message);
        },
        updateNavigation: function updateNavigation() {
            var swiper = this;
            if (swiper.params.loop || !swiper.navigation) return;
            var _swiper$navigation = swiper.navigation,
                $nextEl = _swiper$navigation.$nextEl,
                $prevEl = _swiper$navigation.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    swiper.a11y.disableEl($prevEl);
                    swiper.a11y.makeElNotFocusable($prevEl);
                } else {
                    swiper.a11y.enableEl($prevEl);
                    swiper.a11y.makeElFocusable($prevEl);
                }
            }

            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    swiper.a11y.disableEl($nextEl);
                    swiper.a11y.makeElNotFocusable($nextEl);
                } else {
                    swiper.a11y.enableEl($nextEl);
                    swiper.a11y.makeElFocusable($nextEl);
                }
            }
        },
        updatePagination: function updatePagination() {
            var swiper = this;
            var params = swiper.params.a11y;

            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.bullets.each(function(bulletEl) {
                    var $bulletEl = $(bulletEl);
                    swiper.a11y.makeElFocusable($bulletEl);
                    swiper.a11y.addElRole($bulletEl, 'button');
                    swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                });
            }
        },
        init: function init() {
            var swiper = this;
            swiper.$el.append(swiper.a11y.liveRegion); // Navigation

            var params = swiper.params.a11y;
            var $nextEl;
            var $prevEl;

            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }

            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }

            if ($nextEl) {
                swiper.a11y.makeElFocusable($nextEl);
                swiper.a11y.addElRole($nextEl, 'button');
                swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
                $nextEl.on('keydown', swiper.a11y.onEnterKey);
            }

            if ($prevEl) {
                swiper.a11y.makeElFocusable($prevEl);
                swiper.a11y.addElRole($prevEl, 'button');
                swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
                $prevEl.on('keydown', swiper.a11y.onEnterKey);
            } // Pagination


            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
            var $nextEl;
            var $prevEl;

            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }

            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }

            if ($nextEl) {
                $nextEl.off('keydown', swiper.a11y.onEnterKey);
            }

            if ($prevEl) {
                $prevEl.off('keydown', swiper.a11y.onEnterKey);
            } // Pagination


            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
            }
        }
    };
    var A11y$1 = {
        name: 'a11y',
        params: {
            a11y: {
                enabled: true,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                a11y: _extends(_extends({}, A11y), {}, {
                    liveRegion: $("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
                })
            });
        },
        on: {
            init: function init(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.init();
                swiper.a11y.updateNavigation();
            },
            toEdge: function toEdge(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.updateNavigation();
            },
            fromEdge: function fromEdge(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.updateNavigation();
            },
            paginationUpdate: function paginationUpdate(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.updatePagination();
            },
            destroy: function destroy(swiper) {
                if (!swiper.params.a11y.enabled) return;
                swiper.a11y.destroy();
            }
        }
    };

    var History = {
        init: function init() {
            var swiper = this;
            var window = getWindow();
            if (!swiper.params.history) return;

            if (!window.history || !window.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
            }

            var history = swiper.history;
            history.initialized = true;
            history.paths = History.getPathValues(swiper.params.url);
            if (!history.paths.key && !history.paths.value) return;
            history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

            if (!swiper.params.history.replaceState) {
                window.addEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            var window = getWindow();

            if (!swiper.params.history.replaceState) {
                window.removeEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        setHistoryPopState: function setHistoryPopState() {
            var swiper = this;
            swiper.history.paths = History.getPathValues(swiper.params.url);
            swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
        },
        getPathValues: function getPathValues(urlOverride) {
            var window = getWindow();
            var location;

            if (urlOverride) {
                location = new URL(urlOverride);
            } else {
                location = window.location;
            }

            var pathArray = location.pathname.slice(1).split('/').filter(function(part) {
                return part !== '';
            });
            var total = pathArray.length;
            var key = pathArray[total - 2];
            var value = pathArray[total - 1];
            return {
                key: key,
                value: value
            };
        },
        setHistory: function setHistory(key, index) {
            var swiper = this;
            var window = getWindow();
            if (!swiper.history.initialized || !swiper.params.history.enabled) return;
            var location;

            if (swiper.params.url) {
                location = new URL(swiper.params.url);
            } else {
                location = window.location;
            }

            var slide = swiper.slides.eq(index);
            var value = History.slugify(slide.attr('data-history'));

            if (!location.pathname.includes(key)) {
                value = key + "/" + value;
            }

            var currentState = window.history.state;

            if (currentState && currentState.value === value) {
                return;
            }

            if (swiper.params.history.replaceState) {
                window.history.replaceState({
                    value: value
                }, null, value);
            } else {
                window.history.pushState({
                    value: value
                }, null, value);
            }
        },
        slugify: function slugify(text) {
            return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
        },
        scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
            var swiper = this;

            if (value) {
                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHistory = History.slugify(slide.attr('data-history'));

                    if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, runCallbacks);
                    }
                }
            } else {
                swiper.slideTo(0, speed, runCallbacks);
            }
        }
    };
    var History$1 = {
        name: 'history',
        params: {
            history: {
                enabled: false,
                replaceState: false,
                key: 'slides'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                history: _extends({}, History)
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.history.enabled) {
                    swiper.history.init();
                }
            },
            destroy: function destroy(swiper) {
                if (swiper.params.history.enabled) {
                    swiper.history.destroy();
                }
            },
            transitionEnd: function transitionEnd(swiper) {
                if (swiper.history.initialized) {
                    swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            },
            slideChange: function slideChange(swiper) {
                if (swiper.history.initialized && swiper.params.cssMode) {
                    swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            }
        }
    };

    var HashNavigation = {
        onHashCange: function onHashCange() {
            var swiper = this;
            var document = getDocument();
            swiper.emit('hashChange');
            var newHash = document.location.hash.replace('#', '');
            var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

            if (newHash !== activeSlideHash) {
                var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
                if (typeof newIndex === 'undefined') return;
                swiper.slideTo(newIndex);
            }
        },
        setHash: function setHash() {
            var swiper = this;
            var window = getWindow();
            var document = getDocument();
            if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

            if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
                window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || '');
                swiper.emit('hashSet');
            } else {
                var slide = swiper.slides.eq(swiper.activeIndex);
                var hash = slide.attr('data-hash') || slide.attr('data-history');
                document.location.hash = hash || '';
                swiper.emit('hashSet');
            }
        },
        init: function init() {
            var swiper = this;
            var document = getDocument();
            var window = getWindow();
            if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
            swiper.hashNavigation.initialized = true;
            var hash = document.location.hash.replace('#', '');

            if (hash) {
                var speed = 0;

                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHash = slide.attr('data-hash') || slide.attr('data-history');

                    if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                    }
                }
            }

            if (swiper.params.hashNavigation.watchState) {
                $(window).on('hashchange', swiper.hashNavigation.onHashCange);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            var window = getWindow();

            if (swiper.params.hashNavigation.watchState) {
                $(window).off('hashchange', swiper.hashNavigation.onHashCange);
            }
        }
    };
    var HashNavigation$1 = {
        name: 'hash-navigation',
        params: {
            hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                hashNavigation: _extends({
                    initialized: false
                }, HashNavigation)
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.init();
                }
            },
            destroy: function destroy(swiper) {
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.destroy();
                }
            },
            transitionEnd: function transitionEnd(swiper) {
                if (swiper.hashNavigation.initialized) {
                    swiper.hashNavigation.setHash();
                }
            },
            slideChange: function slideChange(swiper) {
                if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
                    swiper.hashNavigation.setHash();
                }
            }
        }
    };

    var Autoplay = {
        run: function run() {
            var swiper = this;
            var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
            var delay = swiper.params.autoplay.delay;

            if ($activeSlideEl.attr('data-swiper-autoplay')) {
                delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
            }

            clearTimeout(swiper.autoplay.timeout);
            swiper.autoplay.timeout = nextTick(function() {
                if (swiper.params.autoplay.reverseDirection) {
                    if (swiper.params.loop) {
                        swiper.loopFix();
                        swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.isBeginning) {
                        swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else {
                        swiper.autoplay.stop();
                    }
                } else if (swiper.params.loop) {
                    swiper.loopFix();
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.isEnd) {
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(0, swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else {
                    swiper.autoplay.stop();
                }

                if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();
            }, delay);
        },
        start: function start() {
            var swiper = this;
            if (typeof swiper.autoplay.timeout !== 'undefined') return false;
            if (swiper.autoplay.running) return false;
            swiper.autoplay.running = true;
            swiper.emit('autoplayStart');
            swiper.autoplay.run();
            return true;
        },
        stop: function stop() {
            var swiper = this;
            if (!swiper.autoplay.running) return false;
            if (typeof swiper.autoplay.timeout === 'undefined') return false;

            if (swiper.autoplay.timeout) {
                clearTimeout(swiper.autoplay.timeout);
                swiper.autoplay.timeout = undefined;
            }

            swiper.autoplay.running = false;
            swiper.emit('autoplayStop');
            return true;
        },
        pause: function pause(speed) {
            var swiper = this;
            if (!swiper.autoplay.running) return;
            if (swiper.autoplay.paused) return;
            if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
            swiper.autoplay.paused = true;

            if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                swiper.autoplay.paused = false;
                swiper.autoplay.run();
            } else {
                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            }
        },
        onVisibilityChange: function onVisibilityChange() {
            var swiper = this;
            var document = getDocument();

            if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
                swiper.autoplay.pause();
            }

            if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
                swiper.autoplay.run();
                swiper.autoplay.paused = false;
            }
        },
        onTransitionEnd: function onTransitionEnd(e) {
            var swiper = this;
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
            if (e.target !== swiper.$wrapperEl[0]) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;

            if (!swiper.autoplay.running) {
                swiper.autoplay.stop();
            } else {
                swiper.autoplay.run();
            }
        }
    };
    var Autoplay$1 = {
        name: 'autoplay',
        params: {
            autoplay: {
                enabled: false,
                delay: 3000,
                waitForTransition: true,
                disableOnInteraction: true,
                stopOnLastSlide: false,
                reverseDirection: false
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                autoplay: _extends(_extends({}, Autoplay), {}, {
                    running: false,
                    paused: false
                })
            });
        },
        on: {
            init: function init(swiper) {
                if (swiper.params.autoplay.enabled) {
                    swiper.autoplay.start();
                    var document = getDocument();
                    document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
                }
            },
            beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
                if (swiper.autoplay.running) {
                    if (internal || !swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.pause(speed);
                    } else {
                        swiper.autoplay.stop();
                    }
                }
            },
            sliderFirstMove: function sliderFirstMove(swiper) {
                if (swiper.autoplay.running) {
                    if (swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.stop();
                    } else {
                        swiper.autoplay.pause();
                    }
                }
            },
            touchEnd: function touchEnd(swiper) {
                if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
                    swiper.autoplay.run();
                }
            },
            destroy: function destroy(swiper) {
                if (swiper.autoplay.running) {
                    swiper.autoplay.stop();
                }

                var document = getDocument();
                document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
            }
        }
    };

    var Fade = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;

            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = swiper.slides.eq(i);
                var offset = $slideEl[0].swiperSlideOffset;
                var tx = -offset;
                if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                var ty = 0;

                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                }

                var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                $slideEl.css({
                    opacity: slideOpacity
                }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides,
                $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration);

            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.transitionEnd(function() {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return;
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        }
    };
    var EffectFade = {
        name: 'effect-fade',
        params: {
            fadeEffect: {
                crossFade: false
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                fadeEffect: _extends({}, Fade)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.effect !== 'fade') return;
                swiper.classNames.push(swiper.params.containerModifierClass + "fade");
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true
                };
                extend$1(swiper.params, overwriteParams);
                extend$1(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate(swiper) {
                if (swiper.params.effect !== 'fade') return;
                swiper.fadeEffect.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (swiper.params.effect !== 'fade') return;
                swiper.fadeEffect.setTransition(duration);
            }
        }
    };

    var Cube = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el,
                $wrapperEl = swiper.$wrapperEl,
                slides = swiper.slides,
                swiperWidth = swiper.width,
                swiperHeight = swiper.height,
                rtl = swiper.rtlTranslate,
                swiperSize = swiper.size,
                browser = swiper.browser;
            var params = swiper.params.cubeEffect;
            var isHorizontal = swiper.isHorizontal();
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var wrapperRotate = 0;
            var $cubeShadowEl;

            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $wrapperEl.append($cubeShadowEl);
                    }

                    $cubeShadowEl.css({
                        height: swiperWidth + "px"
                    });
                } else {
                    $cubeShadowEl = $el.find('.swiper-cube-shadow');

                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $el.append($cubeShadowEl);
                    }
                }
            }

            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideIndex = i;

                if (isVirtual) {
                    slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                }

                var slideAngle = slideIndex * 90;
                var round = Math.floor(slideAngle / 360);

                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }

                var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                var tx = 0;
                var ty = 0;
                var tz = 0;

                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + round * 4 * swiperSize;
                    tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = 3 * swiperSize + swiperSize * 4 * round;
                }

                if (rtl) {
                    tx = -tx;
                }

                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }

                var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

                if (progress <= 1 && progress > -1) {
                    wrapperRotate = slideIndex * 90 + progress * 90;
                    if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                }

                $slideEl.transform(transform);

                if (params.slideShadows) {
                    // Set shadows
                    var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if (shadowBefore.length === 0) {
                        shadowBefore = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                        $slideEl.append(shadowBefore);
                    }

                    if (shadowAfter.length === 0) {
                        shadowAfter = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                        $slideEl.append(shadowAfter);
                    }

                    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                }
            }

            $wrapperEl.css({
                '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
            });

            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
                } else {
                    var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                    var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                    var scale1 = params.shadowScale;
                    var scale2 = params.shadowScale / multiplier;
                    var offset = params.shadowOffset;
                    $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
                }
            }

            var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
            $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var $el = swiper.$el,
                slides = swiper.slides;
            slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                $el.find('.swiper-cube-shadow').transition(duration);
            }
        }
    };
    var EffectCube = {
        name: 'effect-cube',
        params: {
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                cubeEffect: _extends({}, Cube)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.effect !== 'cube') return;
                swiper.classNames.push(swiper.params.containerModifierClass + "cube");
                swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: false,
                    virtualTranslate: true
                };
                extend$1(swiper.params, overwriteParams);
                extend$1(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate(swiper) {
                if (swiper.params.effect !== 'cube') return;
                swiper.cubeEffect.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (swiper.params.effect !== 'cube') return;
                swiper.cubeEffect.setTransition(duration);
            }
        }
    };

    var Flip = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides,
                rtl = swiper.rtlTranslate;

            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var progress = $slideEl[0].progress;

                if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                }

                var offset = $slideEl[0].swiperSlideOffset;
                var rotate = -180 * progress;
                var rotateY = rotate;
                var rotateX = 0;
                var tx = -offset;
                var ty = 0;

                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                } else if (rtl) {
                    rotateY = -rotateY;
                }

                $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

                if (swiper.params.flipEffect.slideShadows) {
                    // Set shadows
                    var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if (shadowBefore.length === 0) {
                        shadowBefore = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
                        $slideEl.append(shadowBefore);
                    }

                    if (shadowAfter.length === 0) {
                        shadowAfter = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
                        $slideEl.append(shadowAfter);
                    }

                    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                }

                $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides,
                activeIndex = swiper.activeIndex,
                $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false; // eslint-disable-next-line

                slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        }
    };
    var EffectFlip = {
        name: 'effect-flip',
        params: {
            flipEffect: {
                slideShadows: true,
                limitRotation: true
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                flipEffect: _extends({}, Flip)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.effect !== 'flip') return;
                swiper.classNames.push(swiper.params.containerModifierClass + "flip");
                swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true
                };
                extend$1(swiper.params, overwriteParams);
                extend$1(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate(swiper) {
                if (swiper.params.effect !== 'flip') return;
                swiper.flipEffect.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (swiper.params.effect !== 'flip') return;
                swiper.flipEffect.setTransition(duration);
            }
        }
    };

    var Coverflow = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var swiperWidth = swiper.width,
                swiperHeight = swiper.height,
                slides = swiper.slides,
                slidesSizesGrid = swiper.slidesSizesGrid;
            var params = swiper.params.coverflowEffect;
            var isHorizontal = swiper.isHorizontal();
            var transform = swiper.translate;
            var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
            var rotate = isHorizontal ? params.rotate : -params.rotate;
            var translate = params.depth; // Each slide offset from center

            for (var i = 0, length = slides.length; i < length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideSize = slidesSizesGrid[i];
                var slideOffset = $slideEl[0].swiperSlideOffset;
                var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
                var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

                var translateZ = -translate * Math.abs(offsetMultiplier);
                var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

                if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
                    stretch = parseFloat(params.stretch) / 100 * slideSize;
                }

                var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

                if (Math.abs(translateX) < 0.001) translateX = 0;
                if (Math.abs(translateY) < 0.001) translateY = 0;
                if (Math.abs(translateZ) < 0.001) translateZ = 0;
                if (Math.abs(rotateY) < 0.001) rotateY = 0;
                if (Math.abs(rotateX) < 0.001) rotateX = 0;
                if (Math.abs(scale) < 0.001) scale = 0;
                var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
                $slideEl.transform(slideTransform);
                $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

                if (params.slideShadows) {
                    // Set shadows
                    var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                    if ($shadowBeforeEl.length === 0) {
                        $shadowBeforeEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                        $slideEl.append($shadowBeforeEl);
                    }

                    if ($shadowAfterEl.length === 0) {
                        $shadowAfterEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                        $slideEl.append($shadowAfterEl);
                    }

                    if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                }
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        }
    };
    var EffectCoverflow = {
        name: 'effect-coverflow',
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: true
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                coverflowEffect: _extends({}, Coverflow)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                if (swiper.params.effect !== 'coverflow') return;
                swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
                swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            setTranslate: function setTranslate(swiper) {
                if (swiper.params.effect !== 'coverflow') return;
                swiper.coverflowEffect.setTranslate();
            },
            setTransition: function setTransition(swiper, duration) {
                if (swiper.params.effect !== 'coverflow') return;
                swiper.coverflowEffect.setTransition(duration);
            }
        }
    };

    var Thumbs = {
        init: function init() {
            var swiper = this;
            var thumbsParams = swiper.params.thumbs;
            if (swiper.thumbs.initialized) return false;
            swiper.thumbs.initialized = true;
            var SwiperClass = swiper.constructor;

            if (thumbsParams.swiper instanceof SwiperClass) {
                swiper.thumbs.swiper = thumbsParams.swiper;
                extend$1(swiper.thumbs.swiper.originalParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                extend$1(swiper.thumbs.swiper.params, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
            } else if (isObject$1(thumbsParams.swiper)) {
                swiper.thumbs.swiper = new SwiperClass(extend$1({}, thumbsParams.swiper, {
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                }));
                swiper.thumbs.swiperCreated = true;
            }

            swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
            swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
            return true;
        },
        onThumbClick: function onThumbClick() {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) return;
            var clickedIndex = thumbsSwiper.clickedIndex;
            var clickedSlide = thumbsSwiper.clickedSlide;
            if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
            if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
            var slideToIndex;

            if (thumbsSwiper.params.loop) {
                slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
            } else {
                slideToIndex = clickedIndex;
            }

            if (swiper.params.loop) {
                var currentIndex = swiper.activeIndex;

                if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                    swiper.loopFix(); // eslint-disable-next-line

                    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                    currentIndex = swiper.activeIndex;
                }

                var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
                var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
                if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
                else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
                else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
                else slideToIndex = prevIndex;
            }

            swiper.slideTo(slideToIndex);
        },
        update: function update(initial) {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) return;
            var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
            var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
            var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

            if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                var currentThumbsIndex = thumbsSwiper.activeIndex;
                var newThumbsIndex;
                var direction;

                if (thumbsSwiper.params.loop) {
                    if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                        thumbsSwiper.loopFix(); // eslint-disable-next-line

                        thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                        currentThumbsIndex = thumbsSwiper.activeIndex;
                    } // Find actual thumbs index to slide to


                    var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
                    var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
                    if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
                    else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
                    else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;
                    else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
                    else newThumbsIndex = prevThumbsIndex;
                    direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
                } else {
                    newThumbsIndex = swiper.realIndex;
                    direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
                }

                if (useOffset) {
                    newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
                }

                if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                    if (thumbsSwiper.params.centeredSlides) {
                        if (newThumbsIndex > currentThumbsIndex) {
                            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                        } else {
                            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                        }
                    } else if (newThumbsIndex > currentThumbsIndex) {
                        newThumbsIndex = newThumbsIndex - slidesPerView + 1;
                    }

                    thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                }
            } // Activate thumbs


            var thumbsToActivate = 1;
            var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

            if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
                thumbsToActivate = swiper.params.slidesPerView;
            }

            if (!swiper.params.thumbs.multipleActiveThumbs) {
                thumbsToActivate = 1;
            }

            thumbsToActivate = Math.floor(thumbsToActivate);
            thumbsSwiper.slides.removeClass(thumbActiveClass);

            if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
                for (var i = 0; i < thumbsToActivate; i += 1) {
                    thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
                }
            } else {
                for (var _i = 0; _i < thumbsToActivate; _i += 1) {
                    thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
                }
            }
        }
    };
    var Thumbs$1 = {
        name: 'thumbs',
        params: {
            thumbs: {
                swiper: null,
                multipleActiveThumbs: true,
                autoScrollOffset: 0,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-container-thumbs'
            }
        },
        create: function create() {
            var swiper = this;
            bindModuleMethods(swiper, {
                thumbs: _extends({
                    swiper: null,
                    initialized: false
                }, Thumbs)
            });
        },
        on: {
            beforeInit: function beforeInit(swiper) {
                var thumbs = swiper.params.thumbs;
                if (!thumbs || !thumbs.swiper) return;
                swiper.thumbs.init();
                swiper.thumbs.update(true);
            },
            slideChange: function slideChange(swiper) {
                if (!swiper.thumbs.swiper) return;
                swiper.thumbs.update();
            },
            update: function update(swiper) {
                if (!swiper.thumbs.swiper) return;
                swiper.thumbs.update();
            },
            resize: function resize(swiper) {
                if (!swiper.thumbs.swiper) return;
                swiper.thumbs.update();
            },
            observerUpdate: function observerUpdate(swiper) {
                if (!swiper.thumbs.swiper) return;
                swiper.thumbs.update();
            },
            setTransition: function setTransition(swiper, duration) {
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                thumbsSwiper.setTransition(duration);
            },
            beforeDestroy: function beforeDestroy(swiper) {
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;

                if (swiper.thumbs.swiperCreated && thumbsSwiper) {
                    thumbsSwiper.destroy();
                }
            }
        }
    };

    // Swiper Class
    var components = [Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y$1, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];
    Swiper.use(components);

    return Swiper;

})));
//# sourceMappingURL=swiper-bundle.js.map
$(document).ready(function() {
    $(".dropdown, .btn-group").hover(function() {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
});

// Мобильное меню
$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.header_menu').toggleClass('active_menu');
    });
});

$(document).ready(function() {
    $('.header_menu a').click(function() {
        $('.header_burger,.header_menu').toggleClass('active_menu');
    });
});
// Мобильное меню


// Главная страница
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            freeMode: false,
            centerSlides: true,
            navigation: {
                nextEl: '.swiper-button-next-q',
                prevEl: '.swiper-button-prev-q',
            },
        },
        576: {
            spaceBetween: 10,
            slidesPerView: 6,
        }
    }
});

var galleryContent = new Swiper('.content-s', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next-c',
        prevEl: '.swiper-button-prev-c',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});
// Главная страница


// Отдельная страница
var galleryThumbs = new Swiper('.gallery-single-thumbs', {
    spaceBetween: 20,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            freeMode: false,
            centerSlides: true,
        },
        576: {
            spaceBetween: 20
        }
    }
});
var galleryTop = new Swiper('.gallery-single-top', {
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

var SingleAll = new Swiper('.single_all', {
    slidesPerView: 6,
    spaceBetween: 20,

    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            freeMode: false,
            centerSlides: true,
            navigation: {
                nextEl: '.swiper-button-next-q',
                prevEl: '.swiper-button-prev-q',
            },
        },
        576: {
            spaceBetween: 10,
            slidesPerView: 6,
        }
    }
});
// Отдельная страница
$(document).ready(function() {
    $('#pingForm').validate({
        ignore: "#calc-form-image",
        rules: {
            email: "required",
            phone: "required",
        },
        errorElement: "span",
        messages: {
            email: "Пожалуйста введите ваш email или телефон",
            phone: "Пожалуйста введите ваш номер телефон",
        },
        submitHandler: function(form) {
            //var dataparam = $('#pingForm').serialize();
            var dataparam = new FormData(form);
            $.ajax({
                type: 'POST',
                url: '/public/send.php',
                enctype: 'multipart/form-data',
                //datatype: 'json',
                processData: false,
                contentType: false,
                cache: false,
                data: dataparam,
                beforeSend: function() {
                    $('#contact_result').html('<div class="contact_result"><p>Отправляю...</p></div>');
                },
                success: function(data) {
                    if (data == 'success') {
                        $('#contact_result').text('<div class="contact_result"><p>Ваше сообщение отправлено</p></div>');
                    } else {
                        $('.no-config').show();
                        $('#pingForm').find('input', '#contact_text').val('');
                        $('#contact_result').html('<div class="contact_result"><p>Ваше сообщение отправлено</p></div>');
                    }

                },
                complete: function(jqXHR, textStatus) {}

            });
        }
    });

});