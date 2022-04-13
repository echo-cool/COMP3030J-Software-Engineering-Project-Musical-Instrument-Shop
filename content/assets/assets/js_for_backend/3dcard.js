function atvImg() {
    var e = document
        , t = (e.documentElement,
        e.getElementsByTagName("body")[0])
        , a = e.getElementsByTagName("html")[0]
        , r = window
        , n = e.querySelectorAll(".atvImg")
        , l = n.length
        , s = "ontouchstart" in r || navigator.msMaxTouchPoints;
    if (!(l <= 0))
        for (var o = 0; o < l; o++) {
            var i = n[o]
                , d = i.querySelectorAll(".atvImg-layer")
                , c = d.length;
            if (!(c <= 0)) {
                for (; i.firstChild;)
                    i.removeChild(i.firstChild);
                var m = e.createElement("div")
                    , v = e.createElement("div")
                    , f = e.createElement("div")
                    , g = e.createElement("div")
                    , h = [];
                i.id = "atvImg__" + o,
                    m.className = "atvImg-container",
                    v.className = "atvImg-shine",
                    f.className = "atvImg-shadow",
                    g.className = "atvImg-layers";
                for (var u = 0; u < c; u++) {
                    var p = e.createElement("div")
                        , y = d[u].getAttribute("data-img");
                    p.className = "atvImg-rendered-layer",
                        p.setAttribute("data-layer", u),
                        p.style.backgroundImage = "url(" + y + ")",
                        g.appendChild(p),
                        h.push(p)
                }
                m.appendChild(f),
                    m.appendChild(g),
                    m.appendChild(v),
                    i.appendChild(m);
                var E = i.clientWidth || i.offsetWidth || i.scrollWidth;
                i.style.transform = "perspective(" + 3 * E + "px)",
                    s ? (r.preventScroll = !1,
                        function (e, t, a, n) {
                            i.addEventListener("touchmove", function (l) {
                                r.preventScroll && l.preventDefault(),
                                    C(l, !0, e, t, a, n)
                            }),
                                i.addEventListener("touchstart", function (t) {
                                    r.preventScroll = !0,
                                        I(t, e)
                                }),
                                i.addEventListener("touchend", function (l) {
                                    r.preventScroll = !1,
                                        N(l, e, t, a, n)
                                })
                        }(i, h, c, v)) : function (e, t, a, r) {
                        i.addEventListener("mousemove", function (n) {
                            C(n, !1, e, t, a, r)
                        }),
                            i.addEventListener("mouseenter", function (t) {
                                I(t, e)
                            }),
                            i.addEventListener("mouseleave", function (n) {
                                N(n, e, t, a, r)
                            })
                    }(i, h, c, v)
            }
        }

    function C(e, r, n, l, s, o) {
        var i = t.scrollTop || a.scrollTop
            , d = t.scrollLeft
            , c = r ? e.touches[0].pageX : e.pageX
            , m = r ? e.touches[0].pageY : e.pageY
            , v = n.getBoundingClientRect()
            , f = n.clientWidth || n.offsetWidth || n.scrollWidth
            , g = n.clientHeight || n.offsetHeight || n.scrollHeight
            , h = 320 / f
            , u = .52 - (c - v.left - d) / f
            , p = .52 - (m - v.top - i) / g
            , y = m - v.top - i - g / 2
            , E = c - v.left - d - f / 2
            , C = "rotateX(" + .1 * h * (y - p) + "deg) rotateY(" + .07 * h * (u - E) + "deg)"
            , I = 180 * Math.atan2(y, E) / Math.PI - 90;
        I < 0 && (I += 360),
        -1 != n.firstChild.className.indexOf(" over") && (C += " scale3d(1.07,1.07,1.07)"),
            n.firstChild.style.transform = C,
            o.style.background = "linear-gradient(" + I + "deg, rgba(255,255,255," + (m - v.top - i) / g * .4 + ") 0%,rgba(255,255,255,0) 80%)",
            o.style.transform = "translateX(" + u * s - .1 + "px) translateY(" + p * s - .1 + "px)";
        for (var N = s, x = 0; x < s; x++)
            l[x].style.transform = "translateX(" + u * N * (2.5 * x / h) + "px) translateY(" + p * s * (2.5 * x / h) + "px)",
                N--
    }

    function I(e, t) {
        t.firstChild.className += " over"
    }

    function N(e, t, a, r, n) {
        var l = t.firstChild;
        l.className = l.className.replace(" over", ""),
            l.style.transform = "",
            n.style.cssText = "";
        for (var s = 0; s < r; s++)
            a[s].style.transform = ""
    }
}

atvImg();

<div className="welcome-thumb mx-auto wow fadeInDown cover atvImg mx-auto d-block" id="atvImg__0"
     style="transform: perspective(1860px);">
    <div className="atvImg-container" style="">
        <div className="atvImg-shadow"></div>
        <div className="atvImg-layers">
            <div className="atvImg-rendered-layer" data-layer="0"
                 style="background-image: url(&quot;img/bg-img/welcome-img-2.png&quot;);"></div>
            <div className="atvImg-rendered-layer" data-layer="1"
                 style="background-image: url(&quot;img/bg-img/welcome-img.png&quot;);"></div>
        </div>
        <div className="atvImg-shine" style=""></div>
    </div>
</div>