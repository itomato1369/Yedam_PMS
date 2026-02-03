/**
@license

DHTMLX Kanban v.1.7.1 

This software is covered by DHTMLX Evaluation License and purposed only for evaluation.
Contact sales@dhtmlx.com to get Commercial or Enterprise license.
Usage without proper license is prohibited.

(c) XB Software.

**/
const Ve = Symbol(), Ua = !1;
var Sr = Array.isArray, Ir = Array.from, oo = Object.defineProperty, mt = Object.getOwnPropertyDescriptor, Ya = Object.getOwnPropertyDescriptors, so = Object.prototype, lo = Array.prototype, Cn = Object.getPrototypeOf;
function Ut(n) {
  return typeof n == "function";
}
const Ce = () => {
};
function co(n) {
  return n();
}
function ir(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
const gt = 2, Ka = 4, cn = 8, zn = 16, it = 32, dn = 64, zt = 128, En = 256, Qe = 512, Ot = 1024, Bn = 2048, ct = 4096, un = 8192, Va = 16384, Wt = 32768, uo = 65536, Ga = 1 << 18, Wa = 1 << 19, St = Symbol("$state"), vo = Symbol("");
function ja(n) {
  return n === this.v;
}
function Nn(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function Cr(n) {
  return !Nn(n, this.v);
}
function fo(n) {
  throw new Error("effect_in_teardown");
}
function ho() {
  throw new Error("effect_in_unowned_derived");
}
function mo(n) {
  throw new Error("effect_orphan");
}
function go() {
  throw new Error("effect_update_depth_exceeded");
}
function _o(n) {
  throw new Error("props_invalid_value");
}
function wo() {
  throw new Error("state_descriptors_fixed");
}
function xo() {
  throw new Error("state_prototype_fixed");
}
function yo() {
  throw new Error("state_unsafe_local_read");
}
function bo() {
  throw new Error("state_unsafe_mutation");
}
function Ze(n) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: ja,
    version: 0
  };
}
function ae(n) {
  return /* @__PURE__ */ po(Ze(n));
}
// @__NO_SIDE_EFFECTS__
function Er(n, e = !1) {
  const t = Ze(n);
  return e || (t.equals = Cr), Me !== null && Me.l !== null && (Me.l.s ??= []).push(t), t;
}
// @__NO_SIDE_EFFECTS__
function po(n) {
  return Ee !== null && Ee.f & gt && (dt === null ? Do([n]) : dt.push(n)), n;
}
function B(n, e) {
  return Ee !== null && Un() && Ee.f & (gt | zn) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (dt === null || !dt.includes(n)) && bo(), or(n, e);
}
function or(n, e) {
  return n.equals(e) || (n.v = e, n.version = ui(), Ja(n, Ot), Un() && xe !== null && xe.f & Qe && !(xe.f & it) && (Ne !== null && Ne.includes(n) ? (ft(xe, Ot), Kn(xe)) : It === null ? Mo([n]) : It.push(n))), e;
}
function Ja(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var r = Un(), a = t.length, i = 0; i < a; i++) {
      var s = t[i], l = s.f;
      l & Ot || !r && s === xe || (ft(s, e), l & (Qe | zt) && (l & gt ? Ja(
        /** @type {Derived} */
        s,
        Bn
      ) : Kn(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function z(n) {
  var e = gt | Ot;
  xe === null ? e |= zt : xe.f |= Wa;
  const t = {
    children: null,
    ctx: Me,
    deps: null,
    equals: ja,
    f: e,
    fn: n,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: xe
  };
  if (Ee !== null && Ee.f & gt) {
    var r = (
      /** @type {Derived} */
      Ee
    );
    (r.children ??= []).push(t);
  }
  return t;
}
// @__NO_SIDE_EFFECTS__
function Za(n) {
  const e = /* @__PURE__ */ z(n);
  return e.equals = Cr, e;
}
function Qa(n) {
  var e = n.children;
  if (e !== null) {
    n.children = null;
    for (var t = 0; t < e.length; t += 1) {
      var r = e[t];
      r.f & gt ? Dr(
        /** @type {Derived} */
        r
      ) : yt(
        /** @type {Effect} */
        r
      );
    }
  }
}
function Xa(n) {
  var e, t = xe;
  $e(n.parent);
  try {
    Qa(n), e = vi(n);
  } finally {
    $e(t);
  }
  return e;
}
function $a(n) {
  var e = Xa(n), t = (Yt || n.f & zt) && n.deps !== null ? Bn : Qe;
  ft(n, t), n.equals(e) || (n.v = e, n.version = ui());
}
function Dr(n) {
  Qa(n), on(n, 0), ft(n, un), n.v = n.children = n.deps = n.ctx = n.reactions = null;
}
function ei(n) {
  xe === null && Ee === null && mo(), Ee !== null && Ee.f & zt && ho(), Pr && fo();
}
function ko(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function jt(n, e, t, r = !0) {
  var a = (n & dn) !== 0, i = xe, s = {
    ctx: Me,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: n | Ot,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: a ? null : i,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (t) {
    var l = Kt;
    try {
      ra(!0), Yn(s), s.f |= Va;
    } catch (v) {
      throw yt(s), v;
    } finally {
      ra(l);
    }
  } else e !== null && Kn(s);
  var d = t && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & Wa) === 0;
  if (!d && !a && r && (i !== null && ko(s, i), Ee !== null && Ee.f & gt)) {
    var c = (
      /** @type {Derived} */
      Ee
    );
    (c.children ??= []).push(s);
  }
  return s;
}
function Mr(n) {
  const e = jt(cn, null, !1);
  return ft(e, Qe), e.teardown = n, e;
}
function at(n) {
  ei();
  var e = xe !== null && (xe.f & it) !== 0 && Me !== null && !Me.m;
  if (e) {
    var t = (
      /** @type {ComponentContext} */
      Me
    );
    (t.e ??= []).push({
      fn: n,
      effect: xe,
      reaction: Ee
    });
  } else {
    var r = xt(n);
    return r;
  }
}
function ti(n) {
  return ei(), Hn(n);
}
function So(n) {
  const e = jt(dn, n, !0);
  return () => {
    yt(e);
  };
}
function xt(n) {
  return jt(Ka, n, !1);
}
function Hn(n) {
  return jt(cn, n, !0);
}
function F(n) {
  return Dt(n);
}
function Dt(n, e = 0) {
  return jt(cn | zn | e, n, !0);
}
function _t(n, e = !0) {
  return jt(cn | it, n, !0, e);
}
function ni(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Pr, r = Ee;
    aa(!0), vt(null);
    try {
      e.call(null);
    } finally {
      aa(t), vt(r);
    }
  }
}
function ri(n) {
  var e = n.deriveds;
  if (e !== null) {
    n.deriveds = null;
    for (var t = 0; t < e.length; t += 1)
      Dr(e[t]);
  }
}
function ai(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    var r = t.next;
    yt(t, e), t = r;
  }
}
function Io(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & it || yt(e), e = t;
  }
}
function yt(n, e = !0) {
  var t = !1;
  if ((e || n.f & Ga) && n.nodes_start !== null) {
    for (var r = n.nodes_start, a = n.nodes_end; r !== null; ) {
      var i = r === a ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Vn(r)
      );
      r.remove(), r = i;
    }
    t = !0;
  }
  ai(n, e && !t), ri(n), on(n, 0), ft(n, un);
  var s = n.transitions;
  if (s !== null)
    for (const d of s)
      d.stop();
  ni(n);
  var l = n.parent;
  l !== null && l.first !== null && ii(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.parent = n.fn = n.nodes_start = n.nodes_end = null;
}
function ii(n) {
  var e = n.parent, t = n.prev, r = n.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === n && (e.first = r), e.last === n && (e.last = t));
}
function rn(n, e) {
  var t = [];
  Ar(n, t, !0), oi(t, () => {
    yt(n), e && e();
  });
}
function oi(n, e) {
  var t = n.length;
  if (t > 0) {
    var r = () => --t || e();
    for (var a of n)
      a.out(r);
  } else
    e();
}
function Ar(n, e, t) {
  if (!(n.f & ct)) {
    if (n.f ^= ct, n.transitions !== null)
      for (const s of n.transitions)
        (s.is_global || t) && e.push(s);
    for (var r = n.first; r !== null; ) {
      var a = r.next, i = (r.f & Wt) !== 0 || (r.f & it) !== 0;
      Ar(r, e, i ? t : !1), r = a;
    }
  }
}
function Dn(n) {
  si(n, !0);
}
function si(n, e) {
  if (n.f & ct) {
    vn(n) && Yn(n), n.f ^= ct;
    for (var t = n.first; t !== null; ) {
      var r = t.next, a = (t.f & Wt) !== 0 || (t.f & it) !== 0;
      si(t, a ? e : !1), t = r;
    }
    if (n.transitions !== null)
      for (const i of n.transitions)
        (i.is_global || e) && i.in();
  }
}
let Mn = !1, sr = [];
function li() {
  Mn = !1;
  const n = sr.slice();
  sr = [], ir(n);
}
function qn(n) {
  Mn || (Mn = !0, queueMicrotask(li)), sr.push(n);
}
function Co() {
  Mn && li();
}
function Tr(n) {
  throw new Error("lifecycle_outside_component");
}
const ci = 0, Eo = 1;
let bn = ci, an = !1, Kt = !1, Pr = !1;
function ra(n) {
  Kt = n;
}
function aa(n) {
  Pr = n;
}
let Rt = [], Vt = 0;
let Ee = null;
function vt(n) {
  Ee = n;
}
let xe = null;
function $e(n) {
  xe = n;
}
let dt = null;
function Do(n) {
  dt = n;
}
let Ne = null, Je = 0, It = null;
function Mo(n) {
  It = n;
}
let di = 0, Yt = !1, Me = null;
function ui() {
  return ++di;
}
function Un() {
  return Me !== null && Me.l === null;
}
function vn(n) {
  var e = n.f;
  if (e & Ot)
    return !0;
  if (e & Bn) {
    var t = n.deps, r = (e & zt) !== 0;
    if (t !== null) {
      var a;
      if (e & En) {
        for (a = 0; a < t.length; a++)
          (t[a].reactions ??= []).push(n);
        n.f ^= En;
      }
      for (a = 0; a < t.length; a++) {
        var i = t[a];
        if (vn(
          /** @type {Derived} */
          i
        ) && $a(
          /** @type {Derived} */
          i
        ), r && xe !== null && !Yt && !i?.reactions?.includes(n) && (i.reactions ??= []).push(n), i.version > n.version)
          return !0;
      }
    }
    r || ft(n, Qe);
  }
  return !1;
}
function Ao(n, e, t) {
  throw n;
}
function vi(n) {
  var e = Ne, t = Je, r = It, a = Ee, i = Yt, s = dt, l = Me, d = n.f;
  Ne = /** @type {null | Value[]} */
  null, Je = 0, It = null, Ee = d & (it | dn) ? null : n, Yt = !Kt && (d & zt) !== 0, dt = null, Me = n.ctx;
  try {
    var c = (
      /** @type {Function} */
      (0, n.fn)()
    ), v = n.deps;
    if (Ne !== null) {
      var u;
      if (on(n, Je), v !== null && Je > 0)
        for (v.length = Je + Ne.length, u = 0; u < Ne.length; u++)
          v[Je + u] = Ne[u];
      else
        n.deps = v = Ne;
      if (!Yt)
        for (u = Je; u < v.length; u++)
          (v[u].reactions ??= []).push(n);
    } else v !== null && Je < v.length && (on(n, Je), v.length = Je);
    return c;
  } finally {
    Ne = e, Je = t, It = r, Ee = a, Yt = i, dt = s, Me = l;
  }
}
function To(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = t.indexOf(n);
    if (r !== -1) {
      var a = t.length - 1;
      a === 0 ? t = e.reactions = null : (t[r] = t[a], t.pop());
    }
  }
  t === null && e.f & gt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ne === null || !Ne.includes(e)) && (ft(e, Bn), e.f & (zt | En) || (e.f ^= En), on(
    /** @type {Derived} **/
    e,
    0
  ));
}
function on(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var r = e; r < t.length; r++)
      To(n, t[r]);
}
function Yn(n) {
  var e = n.f;
  if (!(e & un)) {
    ft(n, Qe);
    var t = xe;
    xe = n;
    try {
      e & zn ? Io(n) : ai(n), ri(n), ni(n);
      var r = vi(n);
      n.teardown = typeof r == "function" ? r : null, n.version = di;
    } catch (a) {
      Ao(
        /** @type {Error} */
        a
      );
    } finally {
      xe = t;
    }
  }
}
function fi() {
  Vt > 1e3 && (Vt = 0, go()), Vt++;
}
function hi(n) {
  var e = n.length;
  if (e !== 0) {
    fi();
    var t = Kt;
    Kt = !0;
    try {
      for (var r = 0; r < e; r++) {
        var a = n[r];
        a.f & Qe || (a.f ^= Qe);
        var i = [];
        mi(a, i), Po(i);
      }
    } finally {
      Kt = t;
    }
  }
}
function Po(n) {
  var e = n.length;
  if (e !== 0)
    for (var t = 0; t < e; t++) {
      var r = n[t];
      !(r.f & (un | ct)) && vn(r) && (Yn(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? ii(r) : r.fn = null));
    }
}
function Ro() {
  if (an = !1, Vt > 1001)
    return;
  const n = Rt;
  Rt = [], hi(n), an || (Vt = 0);
}
function Kn(n) {
  bn === ci && (an || (an = !0, queueMicrotask(Ro)));
  for (var e = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (t & (dn | it)) {
      if (!(t & Qe)) return;
      e.f ^= Qe;
    }
  }
  Rt.push(e);
}
function mi(n, e) {
  var t = n.first, r = [];
  e: for (; t !== null; ) {
    var a = t.f, i = (a & it) !== 0, s = i && (a & Qe) !== 0;
    if (!s && !(a & ct))
      if (a & cn) {
        i ? t.f ^= Qe : vn(t) && Yn(t);
        var l = t.first;
        if (l !== null) {
          t = l;
          continue;
        }
      } else a & Ka && r.push(t);
    var d = t.next;
    if (d === null) {
      let u = t.parent;
      for (; u !== null; ) {
        if (n === u)
          break e;
        var c = u.next;
        if (c !== null) {
          t = c;
          continue e;
        }
        u = u.parent;
      }
    }
    t = d;
  }
  for (var v = 0; v < r.length; v++)
    l = r[v], e.push(l), mi(l, e);
}
function gi(n) {
  var e = bn, t = Rt;
  try {
    fi();
    const a = [];
    bn = Eo, Rt = a, an = !1, hi(t);
    var r = n?.();
    return Co(), (Rt.length > 0 || a.length > 0) && gi(), Vt = 0, r;
  } finally {
    bn = e, Rt = t;
  }
}
async function Lt() {
  await Promise.resolve(), gi();
}
function o(n) {
  var e = n.f, t = (e & gt) !== 0;
  if (t && e & un) {
    var r = Xa(
      /** @type {Derived} */
      n
    );
    return Dr(
      /** @type {Derived} */
      n
    ), r;
  }
  if (Ee !== null) {
    dt !== null && dt.includes(n) && yo();
    var a = Ee.deps;
    Ne === null && a !== null && a[Je] === n ? Je++ : Ne === null ? Ne = [n] : Ne.push(n), It !== null && xe !== null && xe.f & Qe && !(xe.f & it) && It.includes(n) && (ft(xe, Ot), Kn(xe));
  } else if (t && /** @type {Derived} */
  n.deps === null) {
    var i = (
      /** @type {Derived} */
      n
    ), s = i.parent;
    s !== null && !s.deriveds?.includes(i) && (s.deriveds ??= []).push(i);
  }
  return t && (i = /** @type {Derived} */
  n, vn(i) && $a(i)), n.v;
}
function Xe(n) {
  return n && o(n);
}
function pe(n) {
  const e = Ee;
  try {
    return Ee = null, n();
  } finally {
    Ee = e;
  }
}
const Lo = -3585;
function ft(n, e) {
  n.f = n.f & Lo | e;
}
function me(n) {
  return (
    /** @type {T} */
    _i().get(n)
  );
}
function wt(n, e) {
  return _i().set(n, e), e;
}
function _i(n) {
  return Me === null && Tr(), Me.c ??= new Map(Fo(Me) || void 0);
}
function Fo(n) {
  let e = n.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
function ne(n, e = !1, t) {
  Me = {
    p: Me,
    c: null,
    e: null,
    m: !1,
    s: n,
    x: null,
    l: null
  }, e || (Me.l = {
    s: null,
    u: null,
    r1: [],
    r2: Ze(!1)
  });
}
function re(n) {
  const e = Me;
  if (e !== null) {
    n !== void 0 && (e.x = n);
    const s = e.e;
    if (s !== null) {
      var t = xe, r = Ee;
      e.e = null;
      try {
        for (var a = 0; a < s.length; a++) {
          var i = s[a];
          $e(i.effect), vt(i.reaction), xt(i.fn);
        }
      } finally {
        $e(t), vt(r);
      }
    }
    Me = e.p, e.m = !0;
  }
  return n || /** @type {T} */
  {};
}
function wi(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (St in n)
      lr(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && St in t && lr(t);
      }
  }
}
function lr(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let r in n)
      try {
        lr(n[r], e);
      } catch {
      }
    const t = Cn(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const r = Ya(t);
      for (let a in r) {
        const i = r[a].get;
        if (i)
          try {
            i.call(n);
          } catch {
          }
      }
    }
  }
}
function Q(n, e = null, t) {
  if (typeof n != "object" || n === null || St in n)
    return n;
  const r = Cn(n);
  if (r !== so && r !== lo)
    return n;
  var a = /* @__PURE__ */ new Map(), i = Sr(n), s = Ze(0);
  i && a.set("length", Ze(
    /** @type {any[]} */
    n.length
  ));
  var l;
  return new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(d, c, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && wo();
        var u = a.get(c);
        return u === void 0 ? (u = Ze(v.value), a.set(c, u)) : B(u, Q(v.value, l)), !0;
      },
      deleteProperty(d, c) {
        var v = a.get(c);
        if (v === void 0)
          c in d && a.set(c, Ze(Ve));
        else {
          if (i && typeof c == "string") {
            var u = (
              /** @type {Source<number>} */
              a.get("length")
            ), h = Number(c);
            Number.isInteger(h) && h < u.v && B(u, h);
          }
          B(v, Ve), ia(s);
        }
        return !0;
      },
      get(d, c, v) {
        if (c === St)
          return n;
        var u = a.get(c), h = c in d;
        if (u === void 0 && (!h || mt(d, c)?.writable) && (u = Ze(Q(h ? d[c] : Ve, l)), a.set(c, u)), u !== void 0) {
          var _ = o(u);
          return _ === Ve ? void 0 : _;
        }
        return Reflect.get(d, c, v);
      },
      getOwnPropertyDescriptor(d, c) {
        var v = Reflect.getOwnPropertyDescriptor(d, c);
        if (v && "value" in v) {
          var u = a.get(c);
          u && (v.value = o(u));
        } else if (v === void 0) {
          var h = a.get(c), _ = h?.v;
          if (h !== void 0 && _ !== Ve)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return v;
      },
      has(d, c) {
        if (c === St)
          return !0;
        var v = a.get(c), u = v !== void 0 && v.v !== Ve || Reflect.has(d, c);
        if (v !== void 0 || xe !== null && (!u || mt(d, c)?.writable)) {
          v === void 0 && (v = Ze(u ? Q(d[c], l) : Ve), a.set(c, v));
          var h = o(v);
          if (h === Ve)
            return !1;
        }
        return u;
      },
      set(d, c, v, u) {
        var h = a.get(c), _ = c in d;
        if (i && c === "length")
          for (var f = v; f < /** @type {Source<number>} */
          h.v; f += 1) {
            var m = a.get(f + "");
            m !== void 0 ? B(m, Ve) : f in d && (m = Ze(Ve), a.set(f + "", m));
          }
        h === void 0 ? (!_ || mt(d, c)?.writable) && (h = Ze(void 0), B(h, Q(v, l)), a.set(c, h)) : (_ = h.v !== Ve, B(h, Q(v, l)));
        var w = Reflect.getOwnPropertyDescriptor(d, c);
        if (w?.set && w.set.call(u, v), !_) {
          if (i && typeof c == "string") {
            var k = (
              /** @type {Source<number>} */
              a.get("length")
            ), b = Number(c);
            Number.isInteger(b) && b >= k.v && B(k, b + 1);
          }
          ia(s);
        }
        return !0;
      },
      ownKeys(d) {
        o(s);
        var c = Reflect.ownKeys(d).filter((h) => {
          var _ = a.get(h);
          return _ === void 0 || _.v !== Ve;
        });
        for (var [v, u] of a)
          u.v !== Ve && !(v in d) && c.push(v);
        return c;
      },
      setPrototypeOf() {
        xo();
      }
    }
  );
}
function ia(n, e = 1) {
  B(n, n.v + e);
}
function oa(n) {
  return n !== null && typeof n == "object" && St in n ? n[St] : n;
}
function Oo(n, e) {
  return Object.is(oa(n), oa(e));
}
var An, xi, yi;
function zo() {
  if (An === void 0) {
    An = window;
    var n = Element.prototype, e = Node.prototype;
    xi = mt(e, "firstChild").get, yi = mt(e, "nextSibling").get, n.__click = void 0, n.__className = "", n.__attributes = null, n.__styles = null, n.__e = void 0, Text.prototype.__t = void 0;
  }
}
function fn(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function sn(n) {
  return xi.call(n);
}
// @__NO_SIDE_EFFECTS__
function Vn(n) {
  return yi.call(n);
}
function E(n, e) {
  return /* @__PURE__ */ sn(n);
}
function G(n, e) {
  {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ sn(
        /** @type {Node} */
        n
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Vn(t) : t;
  }
}
function U(n, e = 1, t = !1) {
  let r = n;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Vn(r);
  return r;
}
function Bo(n) {
  n.textContent = "";
}
let bi = !1;
const pi = /* @__PURE__ */ new Set(), cr = /* @__PURE__ */ new Set();
function No(n, e, t, r) {
  function a(i) {
    if (r.capture || $t.call(e, i), !i.cancelBubble) {
      var s = Ee, l = xe;
      vt(null), $e(null);
      try {
        return t.call(this, i);
      } finally {
        vt(s), $e(l);
      }
    }
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? qn(() => {
    e.addEventListener(n, a, r);
  }) : e.addEventListener(n, a, r), a;
}
function He(n, e, t, r, a) {
  var i = { capture: r, passive: a }, s = No(n, e, t, i);
  (e === document.body || e === window || e === document) && Mr(() => {
    e.removeEventListener(n, s, i);
  });
}
function ge(n) {
  for (var e = 0; e < n.length; e++)
    pi.add(n[e]);
  for (var t of cr)
    t(n);
}
function $t(n) {
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = n.type, a = n.composedPath?.() || [], i = (
    /** @type {null | Element} */
    a[0] || n.target
  ), s = 0, l = n.__root;
  if (l) {
    var d = a.indexOf(l);
    if (d !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n.__root = e;
      return;
    }
    var c = a.indexOf(e);
    if (c === -1)
      return;
    d <= c && (s = d);
  }
  if (i = /** @type {Element} */
  a[s] || n.target, i !== e) {
    oo(n, "currentTarget", {
      configurable: !0,
      get() {
        return i || t;
      }
    });
    var v = Ee, u = xe;
    vt(null), $e(null);
    try {
      for (var h, _ = []; i !== null; ) {
        var f = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var m = i["__" + r];
          if (m !== void 0 && !/** @type {any} */
          i.disabled)
            if (Sr(m)) {
              var [w, ...k] = m;
              w.apply(i, [n, ...k]);
            } else
              m.call(i, n);
        } catch (b) {
          h ? _.push(b) : h = b;
        }
        if (n.cancelBubble || f === e || f === null)
          break;
        i = f;
      }
      if (h) {
        for (let b of _)
          queueMicrotask(() => {
            throw b;
          });
        throw h;
      }
    } finally {
      n.__root = e, delete n.currentTarget, vt(v), $e(u);
    }
  }
}
function Rr(n) {
  var e;
  e = document.head.appendChild(fn());
  try {
    Dt(() => n(e), Ga);
  } finally {
  }
}
function ki(n) {
  var e = document.createElement("template");
  return e.innerHTML = n, e.content;
}
function ln(n, e) {
  var t = (
    /** @type {Effect} */
    xe
  );
  t.nodes_start === null && (t.nodes_start = n, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function C(n, e) {
  var t = (e & 1) !== 0, r = (e & 2) !== 0, a, i = !n.startsWith("<!>");
  return () => {
    a === void 0 && (a = ki(i ? n : "<!>" + n), t || (a = /** @type {Node} */
    /* @__PURE__ */ sn(a)));
    var s = (
      /** @type {TemplateNode} */
      r ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (t) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ sn(s)
      ), d = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      ln(l, d);
    } else
      ln(s, s);
    return s;
  };
}
function ke(n = "") {
  {
    var e = fn(n + "");
    return ln(e, e), e;
  }
}
function $() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = fn();
  return n.append(e, t), ln(e, t), n;
}
function g(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
const Ho = ["touchstart", "touchmove"];
function qo(n) {
  return Ho.includes(n);
}
let dr = !0;
function ee(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ??= n.nodeValue) && (n.__t = t, n.nodeValue = t == null ? "" : t + "");
}
function Tn(n, e) {
  return Uo(n, e);
}
const Nt = /* @__PURE__ */ new Map();
function Uo(n, { target: e, anchor: t, props: r = {}, events: a, context: i, intro: s = !0 }) {
  zo();
  var l = /* @__PURE__ */ new Set(), d = (u) => {
    for (var h = 0; h < u.length; h++) {
      var _ = u[h];
      if (!l.has(_)) {
        l.add(_);
        var f = qo(_);
        e.addEventListener(_, $t, { passive: f });
        var m = Nt.get(_);
        m === void 0 ? (document.addEventListener(_, $t, { passive: f }), Nt.set(_, 1)) : Nt.set(_, m + 1);
      }
    }
  };
  d(Ir(pi)), cr.add(d);
  var c = void 0, v = So(() => {
    var u = t ?? e.appendChild(fn());
    return _t(() => {
      if (i) {
        ne({});
        var h = (
          /** @type {ComponentContext} */
          Me
        );
        h.c = i;
      }
      a && (r.$$events = a), dr = s, c = n(u, r) || {}, dr = !0, i && re();
    }), () => {
      for (var h of l) {
        e.removeEventListener(h, $t);
        var _ = (
          /** @type {number} */
          Nt.get(h)
        );
        --_ === 0 ? (document.removeEventListener(h, $t), Nt.delete(h)) : Nt.set(h, _);
      }
      cr.delete(d), ur.delete(c), u !== t && u.parentNode?.removeChild(u);
    };
  });
  return ur.set(c, v), c;
}
let ur = /* @__PURE__ */ new WeakMap();
function Lr(n) {
  const e = ur.get(n);
  e && e();
}
function R(n, e, t, r = null, a = !1) {
  var i = n, s = null, l = null, d = null, c = a ? Wt : 0;
  Dt(() => {
    d !== (d = !!e()) && (d ? (s ? Dn(s) : s = _t(() => t(i)), l && rn(l, () => {
      l = null;
    })) : (l ? Dn(l) : r && (l = _t(() => r(i))), s && rn(s, () => {
      s = null;
    })));
  }, c);
}
function Si(n, e, t) {
  var r = n, a = Ve, i;
  Dt(() => {
    Nn(a, a = e()) && (i && rn(i), i = _t(() => t(r)));
  });
}
let Xn = null;
function ot(n, e) {
  return e;
}
function Yo(n, e, t, r) {
  for (var a = [], i = e.length, s = 0; s < i; s++)
    Ar(e[s].e, a, !0);
  var l = i > 0 && a.length === 0 && t !== null;
  if (l) {
    var d = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    Bo(d), d.append(
      /** @type {Element} */
      t
    ), r.clear(), pt(n, e[0].prev, e[i - 1].next);
  }
  oi(a, () => {
    for (var c = 0; c < i; c++) {
      var v = e[c];
      l || (r.delete(v.k), pt(n, v.prev, v.next)), yt(v.e, !l);
    }
  });
}
function Se(n, e, t, r, a, i = null) {
  var s = n, l = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, d = (e & 4) !== 0;
  if (d) {
    var c = (
      /** @type {Element} */
      n
    );
    s = c.appendChild(fn());
  }
  var v = null, u = !1;
  Dt(() => {
    var h = t(), _ = Sr(h) ? h : h == null ? [] : Ir(h), f = _.length;
    if (!(u && f === 0)) {
      u = f === 0;
      {
        var m = (
          /** @type {Effect} */
          Ee
        );
        Ko(_, l, s, a, e, (m.f & ct) !== 0, r);
      }
      i !== null && (f === 0 ? v ? Dn(v) : v = _t(() => i(s)) : v !== null && rn(v, () => {
        v = null;
      })), t();
    }
  });
}
function Ko(n, e, t, r, a, i, s) {
  var l = (a & 8) !== 0, d = (a & 3) !== 0, c = n.length, v = e.items, u = e.first, h = u, _, f = null, m, w = [], k = [], b, y, x, I;
  if (l)
    for (I = 0; I < c; I += 1)
      b = n[I], y = s(b, I), x = v.get(y), x !== void 0 && (x.a?.measure(), (m ??= /* @__PURE__ */ new Set()).add(x));
  for (I = 0; I < c; I += 1) {
    if (b = n[I], y = s(b, I), x = v.get(y), x === void 0) {
      var p = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : t;
      f = Go(
        p,
        e,
        f,
        f === null ? e.first : f.next,
        b,
        y,
        I,
        r,
        a
      ), v.set(y, f), w = [], k = [], h = f.next;
      continue;
    }
    if (d && Vo(x, b, I, a), x.e.f & ct && (Dn(x.e), l && (x.a?.unfix(), (m ??= /* @__PURE__ */ new Set()).delete(x))), x !== h) {
      if (_ !== void 0 && _.has(x)) {
        if (w.length < k.length) {
          var P = k[0], A;
          f = P.prev;
          var N = w[0], V = w[w.length - 1];
          for (A = 0; A < w.length; A += 1)
            sa(w[A], P, t);
          for (A = 0; A < k.length; A += 1)
            _.delete(k[A]);
          pt(e, N.prev, V.next), pt(e, f, N), pt(e, V, P), h = P, f = V, I -= 1, w = [], k = [];
        } else
          _.delete(x), sa(x, h, t), pt(e, x.prev, x.next), pt(e, x, f === null ? e.first : f.next), pt(e, f, x), f = x;
        continue;
      }
      for (w = [], k = []; h !== null && h.k !== y; )
        (i || !(h.e.f & ct)) && (_ ??= /* @__PURE__ */ new Set()).add(h), k.push(h), h = h.next;
      if (h === null)
        continue;
      x = h;
    }
    w.push(x), f = x, h = x.next;
  }
  if (h !== null || _ !== void 0) {
    for (var W = _ === void 0 ? [] : Ir(_); h !== null; )
      (i || !(h.e.f & ct)) && W.push(h), h = h.next;
    var J = W.length;
    if (J > 0) {
      var L = a & 4 && c === 0 ? t : null;
      if (l) {
        for (I = 0; I < J; I += 1)
          W[I].a?.measure();
        for (I = 0; I < J; I += 1)
          W[I].a?.fix();
      }
      Yo(e, W, L, v);
    }
  }
  l && qn(() => {
    if (m !== void 0)
      for (x of m)
        x.a?.apply();
  }), xe.first = e.first && e.first.e, xe.last = f && f.e;
}
function Vo(n, e, t, r) {
  r & 1 && or(n.v, e), r & 2 ? or(
    /** @type {Value<number>} */
    n.i,
    t
  ) : n.i = t;
}
function Go(n, e, t, r, a, i, s, l, d) {
  var c = Xn;
  try {
    var v = (d & 1) !== 0, u = (d & 16) === 0, h = v ? u ? /* @__PURE__ */ Er(a) : Ze(a) : a, _ = d & 2 ? Ze(s) : s, f = {
      i: _,
      v: h,
      k: i,
      a: null,
      // @ts-expect-error
      e: null,
      prev: t,
      next: r
    };
    return Xn = f, f.e = _t(() => l(n, h, _), bi), f.e.prev = t && t.e, f.e.next = r && r.e, t === null ? e.first = f : (t.next = f, t.e.next = f.e), r !== null && (r.prev = f, r.e.prev = f.e), f;
  } finally {
    Xn = c;
  }
}
function sa(n, e, t) {
  for (var r = n.next ? (
    /** @type {TemplateNode} */
    n.next.e.nodes_start
  ) : t, a = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : t, i = (
    /** @type {TemplateNode} */
    n.e.nodes_start
  ); i !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Vn(i)
    );
    a.before(i), i = s;
  }
}
function pt(n, e, t) {
  e === null ? n.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function Gn(n, e, t, r, a) {
  var i = n, s = "", l;
  Dt(() => {
    s !== (s = e() ?? "") && (l !== void 0 && (yt(l), l = void 0), s !== "" && (l = _t(() => {
      var d = s + "", c = ki(d);
      ln(
        /** @type {TemplateNode} */
        /* @__PURE__ */ sn(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), i.before(c);
    })));
  });
}
function Ie(n, e, ...t) {
  var r = n, a = Ce, i;
  Dt(() => {
    a !== (a = e()) && (i && (yt(i), i = null), i = _t(() => (
      /** @type {SnippetFn} */
      a(r, ...t)
    )));
  }, Wt);
}
function Et(n, e, t) {
  var r = n, a, i;
  Dt(() => {
    a !== (a = e()) && (i && (rn(i), i = null), a && (i = _t(() => t(r, a))));
  }, Wt);
}
function ze(n, e, t) {
  xt(() => {
    var r = pe(() => e(n, t?.()) || {});
    if (t && r?.update) {
      var a = !1, i = (
        /** @type {any} */
        {}
      );
      Hn(() => {
        var s = t();
        wi(s), a && Nn(i, s) && (i = s, r.update(s));
      }), a = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
let la = !1;
function Wo() {
  la || (la = !0, document.addEventListener(
    "reset",
    (n) => {
      Promise.resolve().then(() => {
        if (!n.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            n.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Bt(n, e) {
  var t = n.__attributes ??= {};
  t.value === (t.value = e) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  n.value === e && (e !== 0 || n.nodeName !== "PROGRESS") || (n.value = e);
}
function jo(n, e) {
  var t = n.__attributes ??= {};
  t.checked !== (t.checked = e) && (n.checked = e);
}
function Z(n, e, t, r) {
  var a = n.__attributes ??= {};
  a[e] !== (a[e] = t) && (e === "style" && "__styles" in n && (n.__styles = {}), e === "loading" && (n[vo] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && Jo(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
var ca = /* @__PURE__ */ new Map();
function Jo(n) {
  var e = ca.get(n.nodeName);
  if (e) return e;
  ca.set(n.nodeName, e = []);
  for (var t, r = Cn(n), a = Element.prototype; a !== r; ) {
    t = Ya(r);
    for (var i in t)
      t[i].set && e.push(i);
    r = Cn(r);
  }
  return e;
}
function we(n, e) {
  var t = n.__className, r = Zo(e);
  (t !== r || bi) && (e == null ? n.removeAttribute("class") : n.className = r, n.__className = r);
}
function Zo(n) {
  return n ?? "";
}
function he(n, e, t) {
  if (t) {
    if (n.classList.contains(e)) return;
    n.classList.add(e);
  } else {
    if (!n.classList.contains(e)) return;
    n.classList.remove(e);
  }
}
const Qo = () => performance.now(), kt = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => Qo(),
  tasks: /* @__PURE__ */ new Set()
};
function Ii(n) {
  kt.tasks.forEach((e) => {
    e.c(n) || (kt.tasks.delete(e), e.f());
  }), kt.tasks.size !== 0 && kt.tick(Ii);
}
function Xo(n) {
  let e;
  return kt.tasks.size === 0 && kt.tick(Ii), {
    promise: new Promise((t) => {
      kt.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      kt.tasks.delete(e);
    }
  };
}
function _n(n, e) {
  n.dispatchEvent(new CustomEvent(e));
}
function $o(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function da(n) {
  const e = {}, t = n.split(";");
  for (const r of t) {
    const [a, i] = r.split(":");
    if (!a || i === void 0) break;
    const s = $o(a.trim());
    e[s] = i.trim();
  }
  return e;
}
const es = (n) => n;
function Fr(n, e, t, r) {
  var a = (n & 4) !== 0, i = "both", s, l = e.inert, d, c;
  function v() {
    var m = Ee, w = xe;
    vt(null), $e(null);
    try {
      return s ??= t()(e, r?.() ?? /** @type {P} */
      {}, {
        direction: i
      });
    } finally {
      vt(m), $e(w);
    }
  }
  var u = {
    is_global: a,
    in() {
      e.inert = l, _n(e, "introstart"), d = vr(e, v(), c, 1, () => {
        _n(e, "introend"), d?.abort(), d = s = void 0;
      });
    },
    out(m) {
      e.inert = !0, _n(e, "outrostart"), c = vr(e, v(), d, 0, () => {
        _n(e, "outroend"), m?.();
      });
    },
    stop: () => {
      d?.abort(), c?.abort();
    }
  }, h = (
    /** @type {Effect} */
    xe
  );
  if ((h.transitions ??= []).push(u), dr) {
    var _ = a;
    if (!_) {
      for (var f = (
        /** @type {Effect | null} */
        h.parent
      ); f && f.f & Wt; )
        for (; (f = f.parent) && !(f.f & zn); )
          ;
      _ = !f || (f.f & Va) !== 0;
    }
    _ && xt(() => {
      pe(() => u.in());
    });
  }
}
function vr(n, e, t, r, a) {
  var i = r === 1;
  if (Ut(e)) {
    var s, l = !1;
    return qn(() => {
      if (!l) {
        var w = e({ direction: i ? "in" : "out" });
        s = vr(n, w, t, r, a);
      }
    }), {
      abort: () => {
        l = !0, s?.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (t?.deactivate(), !e?.duration)
    return a(), {
      abort: Ce,
      deactivate: Ce,
      reset: Ce,
      t: () => r
    };
  const { delay: d = 0, css: c, tick: v, easing: u = es } = e;
  var h = [];
  if (i && t === void 0 && (v && v(0, 1), c)) {
    var _ = da(c(0, 1));
    h.push(_, _);
  }
  var f = () => 1 - r, m = n.animate(h, { duration: d });
  return m.onfinish = () => {
    var w = t?.t() ?? 1 - r;
    t?.abort();
    var k = r - w, b = (
      /** @type {number} */
      e.duration * Math.abs(k)
    ), y = [];
    if (b > 0) {
      if (c)
        for (var x = Math.ceil(b / 16.666666666666668), I = 0; I <= x; I += 1) {
          var p = w + k * u(I / x), P = c(p, 1 - p);
          y.push(da(P));
        }
      f = () => {
        var A = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          m.currentTime
        );
        return w + k * u(A / b);
      }, v && Xo(() => {
        if (m.playState !== "running") return !1;
        var A = f();
        return v(A, 1 - A), !0;
      });
    }
    m = n.animate(y, { duration: b, fill: "forwards" }), m.onfinish = () => {
      f = () => r, v?.(r, 1 - r), a();
    };
  }, {
    abort: () => {
      m && (m.cancel(), m.effect = null, m.onfinish = Ce);
    },
    deactivate: () => {
      a = Ce;
    },
    reset: () => {
      r === 0 && v?.(1, 0);
    },
    t: () => f()
  };
}
function Ci(n, e, t, r = t) {
  n.addEventListener(e, t);
  const a = n.__on_r;
  a ? n.__on_r = () => {
    a(), r();
  } : n.__on_r = r, Wo();
}
function tn(n, e, t = e) {
  var r = Un();
  Ci(n, "input", () => {
    var a = ua(n) ? va(n.value) : n.value;
    t(a), r && a !== (a = e()) && (n.value = a ?? "");
  }), Hn(() => {
    var a = e();
    ua(n) && a === va(n.value) || n.type === "date" && !a && !n.value || a !== n.value && (n.value = a ?? "");
  });
}
function ua(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function va(n) {
  return n === "" ? null : +n;
}
function fa(n, e, t) {
  var r = mt(n, e);
  r && r.set && (n[e] = t, Mr(() => {
    n[e] = null;
  }));
}
function Ei(n, e, t) {
  if (n.multiple)
    return rs(n, e);
  for (var r of n.options) {
    var a = nn(r);
    if (Oo(a, e)) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function ts(n, e) {
  xt(() => {
    var t = new MutationObserver(() => {
      var r = n.__value;
      Ei(n, r);
    });
    return t.observe(n, {
      // Listen to option element changes
      childList: !0,
      subtree: !0,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: !0,
      attributeFilter: ["value"]
    }), () => {
      t.disconnect();
    };
  });
}
function ns(n, e, t = e) {
  var r = !0;
  Ci(n, "change", () => {
    var a;
    if (n.multiple)
      a = [].map.call(n.querySelectorAll(":checked"), nn);
    else {
      var i = n.querySelector(":checked");
      a = i && nn(i);
    }
    t(a);
  }), xt(() => {
    var a = e();
    if (Ei(n, a, r), r && a === void 0) {
      var i = n.querySelector(":checked");
      i !== null && (a = nn(i), t(a));
    }
    n.__value = a, r = !1;
  }), ts(n);
}
function rs(n, e) {
  for (var t of n.options)
    t.selected = ~e.indexOf(nn(t));
}
function nn(n) {
  return "__value" in n ? n.__value : n.value;
}
class Or {
  /** */
  #e = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #t;
  /** @type {ResizeObserverOptions} */
  #n;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(e) {
    this.#n = e;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(e, t) {
    var r = this.#e.get(e) || /* @__PURE__ */ new Set();
    return r.add(t), this.#e.set(e, r), this.#r().observe(e, this.#n), () => {
      var a = this.#e.get(e);
      a.delete(t), a.size === 0 && (this.#e.delete(e), this.#t.unobserve(e));
    };
  }
  #r() {
    return this.#t ?? (this.#t = new ResizeObserver(
      /** @param {any} entries */
      (e) => {
        for (var t of e) {
          Or.entries.set(t.target, t);
          for (var r of this.#e.get(t.target) || [])
            r(t);
        }
      }
    ));
  }
}
var as = /* @__PURE__ */ new Or({
  box: "border-box"
});
function is(n, e, t) {
  var r = as.observe(n, () => t(n[e]));
  xt(() => (pe(() => t(n[e])), r));
}
function ha(n, e) {
  return n === e || n?.[St] === e;
}
function Te(n = {}, e, t, r) {
  return xt(() => {
    var a, i;
    return Hn(() => {
      a = i, i = [], pe(() => {
        n !== t(...i) && (e(n, ...i), a && ha(t(...a), n) && e(null, ...a));
      });
    }), () => {
      qn(() => {
        i && ha(t(...i), n) && e(null, ...i);
      });
    };
  }), n;
}
function Di(n = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    Me
  ), t = e.l.u;
  if (!t) return;
  let r = () => wi(e.s);
  if (n) {
    let a = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ z(() => {
      let l = !1;
      const d = e.s;
      for (const c in d)
        d[c] !== i[c] && (i[c] = d[c], l = !0);
      return l && a++, a;
    });
    r = () => o(s);
  }
  t.b.length && ti(() => {
    ma(e, r), ir(t.b);
  }), at(() => {
    const a = pe(() => t.m.map(co));
    return () => {
      for (const i of a)
        typeof i == "function" && i();
    };
  }), t.a.length && at(() => {
    ma(e, r), ir(t.a);
  });
}
function ma(n, e) {
  if (n.l.s)
    for (const t of n.l.s) o(t);
  e();
}
function ht(n) {
  Me === null && Tr(), Me.l !== null ? os(Me).m.push(n) : at(() => {
    const e = pe(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function zr(n) {
  Me === null && Tr(), ht(() => () => pe(n));
}
function os(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function ss(n, e, t) {
  if (n == null)
    return e(void 0), Ce;
  const r = pe(
    () => n.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
let en = !1;
function ce(n, e, t) {
  const r = t[e] ??= {
    store: null,
    source: /* @__PURE__ */ Er(void 0),
    unsubscribe: Ce
  };
  if (r.store !== n)
    if (r.unsubscribe(), r.store = n ?? null, n == null)
      r.source.v = void 0, r.unsubscribe = Ce;
    else {
      var a = !0;
      r.unsubscribe = ss(n, (i) => {
        a ? r.source.v = i : B(r.source, i);
      }), a = !1;
    }
  return o(r.source);
}
function ls(n, e) {
  return n.set(e), e;
}
function Fe() {
  const n = {};
  return Mr(() => {
    for (var e in n)
      n[e].unsubscribe();
  }), n;
}
function rt(n, e, t) {
  return n.set(t), e;
}
function cs() {
  en = !0;
}
function ds(n) {
  var e = en;
  try {
    return en = !1, [n(), en];
  } finally {
    en = e;
  }
}
const us = {
  get(n, e) {
    if (!n.exclude.includes(e))
      return n.props[e];
  },
  set(n, e) {
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    if (!n.exclude.includes(e) && e in n.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: n.props[e]
      };
  },
  has(n, e) {
    return n.exclude.includes(e) ? !1 : e in n.props;
  },
  ownKeys(n) {
    return Reflect.ownKeys(n.props).filter((e) => !n.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function hn(n, e, t) {
  return new Proxy(
    { props: n, exclude: e },
    us
  );
}
const vs = {
  get(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Ut(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(n, e, t) {
    let r = n.props.length;
    for (; r--; ) {
      let a = n.props[r];
      Ut(a) && (a = a());
      const i = mt(a, e);
      if (i && i.set)
        return i.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Ut(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const a = mt(r, e);
        return a && !a.configurable && (a.configurable = !0), a;
      }
    }
  },
  has(n, e) {
    for (let t of n.props)
      if (Ut(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(n) {
    const e = [];
    for (let t of n.props) {
      Ut(t) && (t = t());
      for (const r in t)
        e.includes(r) || e.push(r);
    }
    return e;
  }
};
function We(...n) {
  return new Proxy({ props: n }, vs);
}
function ga(n) {
  for (var e = xe, t = xe; e !== null && !(e.f & (it | dn)); )
    e = e.parent;
  try {
    return $e(e), n();
  } finally {
    $e(t);
  }
}
function S(n, e, t, r) {
  var a = (t & 1) !== 0, i = (t & 2) !== 0, s = (t & 8) !== 0, l = (t & 16) !== 0, d = !1, c;
  s ? [c, d] = ds(() => (
    /** @type {V} */
    n[e]
  )) : c = /** @type {V} */
  n[e];
  var v = mt(n, e)?.set, u = (
    /** @type {V} */
    r
  ), h = !0, _ = !1, f = () => (_ = !0, h && (h = !1, l ? u = pe(
    /** @type {() => V} */
    r
  ) : u = /** @type {V} */
  r), u);
  c === void 0 && r !== void 0 && (v && i && _o(), c = f(), v && v(c));
  var m;
  if (i)
    m = () => {
      var p = (
        /** @type {V} */
        n[e]
      );
      return p === void 0 ? f() : (h = !0, _ = !1, p);
    };
  else {
    var w = ga(
      () => (a ? z : Za)(() => (
        /** @type {V} */
        n[e]
      ))
    );
    w.f |= uo, m = () => {
      var p = o(w);
      return p !== void 0 && (u = /** @type {V} */
      void 0), p === void 0 ? u : p;
    };
  }
  if (!(t & 4))
    return m;
  if (v) {
    var k = n.$$legacy;
    return function(p, P) {
      return arguments.length > 0 ? ((!i || !P || k || d) && v(P ? m() : p), p) : m();
    };
  }
  var b = !1, y = !1, x = /* @__PURE__ */ Er(c), I = ga(
    () => /* @__PURE__ */ z(() => {
      var p = m(), P = o(x);
      return b ? (b = !1, y = !0, P) : (y = !1, x.v = p);
    })
  );
  return a || (I.equals = Cr), function(p, P) {
    if (arguments.length > 0) {
      const A = P ? o(I) : i && s ? Q(p) : p;
      return I.equals(A) || (b = !0, B(x, A), _ && u !== void 0 && (u = A), pe(() => o(I))), p;
    }
    return o(I);
  };
}
const fs = "5";
typeof window < "u" && (window.__svelte ||= { v: /* @__PURE__ */ new Set() }).v.add(fs);
const Wn = {
  kanban: {
    Save: "Save",
    Close: "Close",
    Delete: "Delete",
    Description: "Description",
    Type: "Type",
    "Start date": "Start date",
    "End date": "End date",
    Files: "Files",
    B: "B",
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
    PB: "PB",
    EB: "EB",
    "Make cover": "Make cover",
    "Remove cover": "Remove cover",
    Comments: "Comments",
    Links: "Links",
    Result: "Result",
    "No results": "No results",
    Search: "Search",
    "Search in": "Search in",
    "Add new row": "Add new row",
    "Add new column": "Add new column",
    "Add new card...": "Add new card...",
    "Add new card": "Add new card",
    "Edit card": "Edit card",
    Edit: "Edit",
    Everywhere: "Everywhere",
    Label: "Label",
    Status: "Status",
    Color: "Color",
    Date: "Date",
    Priority: "Priority",
    Progress: "Progress",
    Users: "Users",
    Untitled: "Untitled",
    Rename: "Rename",
    "Move up": "Move up",
    "Move down": "Move down",
    "Move left": "Move left",
    "Move right": "Move right",
    Sort: "Sort",
    "Label (a-z)": "Label (a-z)",
    "Label (z-a)": "Label (z-a)",
    "Description (a-z)": "Description (a-z)",
    "Description (z-a)": "Description (z-a)",
    "Add link": "Add link",
    Duplicate: "Duplicate",
    "Duplicate of": "Duplicate of",
    "Relates to": "Relates to",
    "Depends on": "Depends on",
    "Is required for": "Is required for",
    Duplicates: "Duplicates",
    "Is duplicated by": "Is duplicated by",
    "Is parent for": "Is parent for",
    "Is subtask of": "Is subtask of",
    Cancel: "Cancel",
    "Link task": "Link task",
    "Select a relation": "Select a relation",
    "Select a task": "Select a task",
    Send: "Send",
    "Add a comment...": "Add a comment...",
    "Would you like to delete this comment?": "Would you like to delete this comment?",
    "No comments yet": "No comments yet",
    "Would you like to delete this card?": "Would you like to delete this card?"
  }
}, hs = {
  kanban: {
    Save: "Speichern",
    Close: "Schließen",
    Delete: "Löschen",
    Description: "Beschreibung",
    Type: "Typ",
    "Start date": "Startdatum",
    "End date": "Enddatum",
    Files: "Dateien",
    B: "B",
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
    PB: "PB",
    EB: "EB",
    "Make cover": "Als Cover festlegen",
    "Remove cover": "Cover entfernen",
    Comments: "Kommentare",
    Links: "Links",
    Result: "Ergebnis",
    "No results": "Keine Ergebnisse",
    Search: "Suchen",
    "Search in": "Suchen in",
    "Add new row": "Zeile hinzufügen",
    "Add new column": "Spalte hinzufügen",
    "Add new card...": "Karte hinzufügen...",
    "Add new card": "Karte hinzufügen",
    "Edit card": "Karte bearbeiten",
    Edit: "Bearbeiten",
    Everywhere: "Überall",
    Label: "Label",
    Status: "Status",
    Color: "Farbe",
    Date: "Datum",
    Priority: "Priorität",
    Progress: "Fortschritt",
    Users: "Benutzer",
    Untitled: "Unbenannt",
    Rename: "Umbenennen",
    "Move up": "Nach oben verschieben",
    "Move down": "Nach unten verschieben",
    "Move left": "Nach links verschieben",
    "Move right": "Nach rechts verschieben",
    Sort: "Sortieren",
    "Label (a-z)": "Label (A-Z)",
    "Label (z-a)": "Label (Z-A)",
    "Description (a-z)": "Beschreibung (A-Z)",
    "Description (z-a)": "Beschreibung (Z-A)",
    "Would you like to delete this comment?": "Diesen Kommentar wirklich löschen?",
    "Add link": "Link hinzufügen",
    Duplicate: "Duplizieren",
    "Duplicate of": "Duplikat von",
    "Relates to": "Verknüpft mit",
    "Depends on": "Hängt ab von",
    "Is required for": "Voraussetzung für",
    Duplicates: "Duplikate",
    "Is duplicated by": "Wird dupliziert von",
    "Is parent for": "Übergeordnete Aufgabe von",
    "Is subtask of": "Unteraufgabe von",
    Cancel: "Abbrechen",
    "Link task": "Aufgabe verknüpfen",
    "Select a relation": "Beziehung auswählen",
    "Select a task": "Aufgabe auswählen",
    Send: "Senden",
    "Add a comment...": "Kommentar hinzufügen...",
    "No comments yet": "Noch keine Kommentare",
    "Would you like to delete this card?": "Diese Karte wirklich löschen?"
  }
}, ms = {
  kanban: {
    Save: "保存",
    Close: "关闭",
    Delete: "删除",
    Description: "描述",
    Type: "类型",
    "Start date": "开始日期",
    "End date": "结束日期",
    Files: "文件",
    B: "B",
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
    PB: "PB",
    EB: "EB",
    "Make cover": "设为封面",
    "Remove cover": "移除封面",
    Comments: "评论",
    Links: "链接",
    Result: "结果",
    "No results": "无结果",
    Search: "搜索",
    "Search in": "搜索位置",
    "Add new row": "添加行",
    "Add new column": "添加列",
    "Add new card...": "添加卡片...",
    "Add new card": "添加卡片",
    "Edit card": "编辑卡片",
    Edit: "编辑",
    Everywhere: "全部",
    Label: "标签",
    Status: "状态",
    Color: "颜色",
    Date: "日期",
    Priority: "优先级",
    Progress: "进度",
    Users: "用户",
    Untitled: "未命名",
    Rename: "重命名",
    "Move up": "上移",
    "Move down": "下移",
    "Move left": "左移",
    "Move right": "右移",
    Sort: "排序",
    "Label (a-z)": "标签 (A-Z)",
    "Label (z-a)": "标签 (Z-A)",
    "Description (a-z)": "描述 (A-Z)",
    "Description (z-a)": "描述 (Z-A)",
    "Would you like to delete this comment?": "确定删除此评论吗？",
    "Add link": "添加链接",
    Duplicate: "复制",
    "Duplicate of": "副本",
    "Relates to": "关联到",
    "Depends on": "依赖于",
    "Is required for": "是…的前置任务",
    Duplicates: "重复",
    "Is duplicated by": "被重复",
    "Is parent for": "父任务",
    "Is subtask of": "子任务",
    Cancel: "取消",
    "Link task": "关联任务",
    "Select a relation": "选择关系",
    "Select a task": "选择任务",
    Send: "发送",
    "Add a comment...": "添加评论...",
    "No comments yet": "暂无评论",
    "Would you like to delete this card?": "确定删除此卡片吗？"
  }
}, gs = {
  kanban: {
    Save: "Guardar",
    Close: "Cerrar",
    Delete: "Eliminar",
    Description: "Descripción",
    Type: "Tipo",
    "Start date": "Fecha de inicio",
    "End date": "Fecha de finalización",
    Files: "Archivos",
    B: "B",
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
    PB: "PB",
    EB: "EB",
    "Make cover": "Establecer como portada",
    "Remove cover": "Quitar portada",
    Comments: "Comentarios",
    Links: "Enlaces",
    Result: "Resultado",
    "No results": "Sin resultados",
    Search: "Buscar",
    "Search in": "Buscar en",
    "Add new row": "Añadir fila",
    "Add new column": "Añadir columna",
    "Add new card...": "Añadir tarjeta...",
    "Add new card": "Añadir tarjeta",
    "Edit card": "Editar tarjeta",
    Edit: "Editar",
    Everywhere: "En todas partes",
    Label: "Etiqueta",
    Status: "Estado",
    Color: "Color",
    Date: "Fecha",
    Priority: "Prioridad",
    Progress: "Progreso",
    Users: "Usuarios",
    Untitled: "Sin título",
    Rename: "Renombrar",
    "Move up": "Mover arriba",
    "Move down": "Mover abajo",
    "Move left": "Mover a la izquierda",
    "Move right": "Mover a la derecha",
    Sort: "Ordenar",
    "Label (a-z)": "Etiqueta (A-Z)",
    "Label (z-a)": "Etiqueta (Z-A)",
    "Description (a-z)": "Descripción (A-Z)",
    "Description (z-a)": "Descripción (Z-A)",
    "Would you like to delete this comment?": "¿Quieres eliminar este comentario?",
    "Add link": "Añadir enlace",
    Duplicate: "Duplicar",
    "Duplicate of": "Duplicado de",
    "Relates to": "Relacionado con",
    "Depends on": "Depende de",
    "Is required for": "Es requisito para",
    Duplicates: "Duplicados",
    "Is duplicated by": "Está duplicado por",
    "Is parent for": "Tarea principal de",
    "Is subtask of": "Subtarea de",
    Cancel: "Cancelar",
    "Link task": "Vincular tarea",
    "Select a relation": "Seleccionar relación",
    "Select a task": "Seleccionar tarea",
    Send: "Enviar",
    "Add a comment...": "Añadir comentario...",
    "No comments yet": "Aún no hay comentarios",
    "Would you like to delete this card?": "¿Quieres eliminar esta tarjeta?"
  }
}, _s = {
  kanban: {
    Save: "Enregistrer",
    Close: "Fermer",
    Delete: "Supprimer",
    Description: "Description",
    Type: "Type",
    "Start date": "Date de début",
    "End date": "Date de fin",
    Files: "Fichiers",
    B: "o",
    KB: "Ko",
    MB: "Mo",
    GB: "Go",
    TB: "To",
    PB: "Po",
    EB: "Eo",
    "Make cover": "Définir comme couverture",
    "Remove cover": "Retirer la couverture",
    Comments: "Commentaires",
    Links: "Liens",
    Result: "Résultat",
    "No results": "Aucun résultat",
    Search: "Rechercher",
    "Search in": "Rechercher dans",
    "Add new row": "Ajouter une ligne",
    "Add new column": "Ajouter une colonne",
    "Add new card...": "Ajouter une carte...",
    "Add new card": "Ajouter une carte",
    "Edit card": "Modifier la carte",
    Edit: "Modifier",
    Everywhere: "Partout",
    Label: "Étiquette",
    Status: "Statut",
    Color: "Couleur",
    Date: "Date",
    Priority: "Priorité",
    Progress: "Avancement",
    Users: "Utilisateurs",
    Untitled: "Sans titre",
    Rename: "Renommer",
    "Move up": "Déplacer vers le haut",
    "Move down": "Déplacer vers le bas",
    "Move left": "Déplacer vers la gauche",
    "Move right": "Déplacer vers la droite",
    Sort: "Trier",
    "Label (a-z)": "Étiquette (A-Z)",
    "Label (z-a)": "Étiquette (Z-A)",
    "Description (a-z)": "Description (A-Z)",
    "Description (z-a)": "Description (Z-A)",
    "Would you like to delete this comment?": "Voulez-vous vraiment supprimer ce commentaire ?",
    "Add link": "Ajouter un lien",
    Duplicate: "Dupliquer",
    "Duplicate of": "Copie de",
    "Relates to": "Lié à",
    "Depends on": "Dépend de",
    "Is required for": "Nécessaire pour",
    Duplicates: "Doublons",
    "Is duplicated by": "Dupliqué par",
    "Is parent for": "Tâche parente de",
    "Is subtask of": "Sous-tâche de",
    Cancel: "Annuler",
    "Link task": "Lier une tâche",
    "Select a relation": "Sélectionner une relation",
    "Select a task": "Sélectionner une tâche",
    Send: "Envoyer",
    "Add a comment...": "Ajouter un commentaire...",
    "No comments yet": "Aucun commentaire pour l’instant",
    "Would you like to delete this card?": "Voulez-vous vraiment supprimer cette carte ?"
  }
}, ws = {
  kanban: {
    Save: "Salva",
    Close: "Chiudi",
    Delete: "Elimina",
    Description: "Descrizione",
    Type: "Tipo",
    "Start date": "Data di inizio",
    "End date": "Data di fine",
    Files: "File",
    B: "B",
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
    PB: "PB",
    EB: "EB",
    "Make cover": "Imposta come copertina",
    "Remove cover": "Rimuovi copertina",
    Comments: "Commenti",
    Links: "Collegamenti",
    Result: "Risultato",
    "No results": "Nessun risultato",
    Search: "Cerca",
    "Search in": "Cerca in",
    "Add new row": "Aggiungi riga",
    "Add new column": "Aggiungi colonna",
    "Add new card...": "Aggiungi scheda...",
    "Add new card": "Aggiungi scheda",
    "Edit card": "Modifica scheda",
    Edit: "Modifica",
    Everywhere: "Ovunque",
    Label: "Etichetta",
    Status: "Stato",
    Color: "Colore",
    Date: "Data",
    Priority: "Priorità",
    Progress: "Avanzamento",
    Users: "Utenti",
    Untitled: "Senza titolo",
    Rename: "Rinomina",
    "Move up": "Sposta in alto",
    "Move down": "Sposta in basso",
    "Move left": "Sposta a sinistra",
    "Move right": "Sposta a destra",
    Sort: "Ordina",
    "Label (a-z)": "Etichetta (A-Z)",
    "Label (z-a)": "Etichetta (Z-A)",
    "Description (a-z)": "Descrizione (A-Z)",
    "Description (z-a)": "Descrizione (Z-A)",
    "Would you like to delete this comment?": "Vuoi davvero eliminare questo commento?",
    "Add link": "Aggiungi collegamento",
    Duplicate: "Duplica",
    "Duplicate of": "Duplicato di",
    "Relates to": "Collegato a",
    "Depends on": "Dipende da",
    "Is required for": "Necessario per",
    Duplicates: "Duplicati",
    "Is duplicated by": "Duplicato da",
    "Is parent for": "Attività principale di",
    "Is subtask of": "Sottoattività di",
    Cancel: "Annulla",
    "Link task": "Collega attività",
    "Select a relation": "Seleziona relazione",
    "Select a task": "Seleziona attività",
    Send: "Invia",
    "Add a comment...": "Aggiungi commento...",
    "No comments yet": "Nessun commento",
    "Would you like to delete this card?": "Vuoi davvero eliminare questa scheda?"
  }
}, xs = {
  kanban: {
    Save: "保存",
    Close: "閉じる",
    Delete: "削除",
    Description: "説明",
    Type: "タイプ",
    "Start date": "開始日",
    "End date": "終了日",
    Files: "ファイル",
    B: "B",
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
    PB: "PB",
    EB: "EB",
    "Make cover": "カバーに設定",
    "Remove cover": "カバーを削除",
    Comments: "コメント",
    Links: "リンク",
    Result: "結果",
    "No results": "結果がありません",
    Search: "検索",
    "Search in": "検索対象",
    "Add new row": "行を追加",
    "Add new column": "列を追加",
    "Add new card...": "カードを追加...",
    "Add new card": "カードを追加",
    "Edit card": "カードを編集",
    Edit: "編集",
    Everywhere: "すべて",
    Label: "ラベル",
    Status: "ステータス",
    Color: "色",
    Date: "日付",
    Priority: "優先度",
    Progress: "進捗",
    Users: "ユーザー",
    Untitled: "無題",
    Rename: "名前を変更",
    "Move up": "上に移動",
    "Move down": "下に移動",
    "Move left": "左に移動",
    "Move right": "右に移動",
    Sort: "並べ替え",
    "Label (a-z)": "ラベル (A-Z)",
    "Label (z-a)": "ラベル (Z-A)",
    "Description (a-z)": "説明 (A-Z)",
    "Description (z-a)": "説明 (Z-A)",
    "Would you like to delete this comment?": "このコメントを削除しますか？",
    "Add link": "リンクを追加",
    Duplicate: "複製",
    "Duplicate of": "複製元",
    "Relates to": "関連",
    "Depends on": "依存先",
    "Is required for": "に必要",
    Duplicates: "重複",
    "Is duplicated by": "によって複製",
    "Is parent for": "親タスク",
    "Is subtask of": "のサブタスク",
    Cancel: "キャンセル",
    "Link task": "タスクをリンク",
    "Select a relation": "関連を選択",
    "Select a task": "タスクを選択",
    Send: "送信",
    "Add a comment...": "コメントを追加...",
    "No comments yet": "まだコメントがありません",
    "Would you like to delete this card?": "このカードを削除しますか？"
  }
}, ys = {
  kanban: {
    Save: "Salvar",
    Close: "Fechar",
    Delete: "Excluir",
    Description: "Descrição",
    Type: "Tipo",
    "Start date": "Data de início",
    "End date": "Data de término",
    Files: "Arquivos",
    B: "B",
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
    PB: "PB",
    EB: "EB",
    "Make cover": "Definir como capa",
    "Remove cover": "Remover capa",
    Comments: "Comentários",
    Links: "Links",
    Result: "Resultado",
    "No results": "Nenhum resultado",
    Search: "Pesquisar",
    "Search in": "Pesquisar em",
    "Add new row": "Adicionar nova linha",
    "Add new column": "Adicionar nova coluna",
    "Add new card...": "Adicionar novo cartão...",
    "Add new card": "Adicionar novo cartão",
    "Edit card": "Editar cartão",
    Edit: "Editar",
    Everywhere: "Em todos os lugares",
    Label: "Etiqueta",
    Status: "Status",
    Color: "Cor",
    Date: "Data",
    Priority: "Prioridade",
    Progress: "Progresso",
    Users: "Usuários",
    Untitled: "Sem título",
    Rename: "Renomear",
    "Move up": "Mover para cima",
    "Move down": "Mover para baixo",
    "Move left": "Mover para a esquerda",
    "Move right": "Mover para a direita",
    Sort: "Ordenar",
    "Label (a-z)": "Etiqueta (A-Z)",
    "Label (z-a)": "Etiqueta (Z-A)",
    "Description (a-z)": "Descrição (A-Z)",
    "Description (z-a)": "Descrição (Z-A)",
    "Would you like to delete this comment?": "Deseja excluir este comentário?",
    "Add link": "Adicionar link",
    Duplicate: "Duplicar",
    "Duplicate of": "Duplicado de",
    "Relates to": "Relacionado a",
    "Depends on": "Depende de",
    "Is required for": "É necessário para",
    Duplicates: "Duplicados",
    "Is duplicated by": "É duplicado por",
    "Is parent for": "É pai de",
    "Is subtask of": "É subtarefa de",
    Cancel: "Cancelar",
    "Link task": "Vincular tarefa",
    "Select a relation": "Selecione uma relação",
    "Select a task": "Selecione uma tarefa",
    Send: "Enviar",
    "Add a comment...": "Adicionar comentário...",
    "No comments yet": "Nenhum comentário ainda",
    "Would you like to delete this card?": "Deseja excluir este cartão?"
  }
}, bs = {
  kanban: {
    Save: "Сохранить",
    Close: "Закрыть",
    Delete: "Удалить",
    Description: "Описание",
    Type: "Тип",
    "Start date": "Дата начала",
    "End date": "Дата окончания",
    Files: "Файлы",
    B: "Б",
    KB: "КБ",
    MB: "МБ",
    GB: "ГБ",
    TB: "ТБ",
    PB: "ПБ",
    EB: "ЭБ",
    "Make cover": "Сделать обложкой",
    "Remove cover": "Убрать обложку",
    Comments: "Комментарии",
    Links: "Ссылки",
    Result: "Результат",
    "No results": "Нет результатов",
    Search: "Поиск",
    "Search in": "Искать в",
    "Add new row": "Добавить ряд",
    "Add new column": "Добавить колонку",
    "Add new card...": "Добавить карточку...",
    "Add new card": "Добавить карточку",
    "Edit card": "Редактировать карточку",
    Edit: "Редактировать",
    Everywhere: "Везде",
    Label: "Название",
    Status: "Статус",
    Color: "Цвет",
    Date: "Дата",
    Priority: "Приоритет",
    Progress: "Прогресс",
    Users: "Пользователи",
    Untitled: "Без названия",
    Rename: "Переименовать",
    "Move up": "Переместить вверх",
    "Move down": "Переместить вниз",
    "Move left": "Переместить влево",
    "Move right": "Переместить вправо",
    Sort: "Сортировать",
    "Label (a-z)": "Название (а-я)",
    "Label (z-a)": "Название (я-а)",
    "Description (a-z)": "Описание (а-я)",
    "Description (z-a)": "Описание (я-а)",
    "Would you like to delete this comment?": "Удалить этот комментарий?",
    "Add link": "Добавить ссылку",
    Duplicate: "Дублировать",
    "Duplicate of": "Дубликат",
    "Relates to": "Связано с",
    "Depends on": "Зависит от",
    "Is required for": "Необходимо для",
    Duplicates: "Дублирует",
    "Is duplicated by": "Дублируется",
    "Is parent for": "Родитель для",
    "Is subtask of": "Подзадача для",
    Cancel: "Отмена",
    "Link task": "Связать задачу",
    "Select a relation": "Выберите связь",
    "Select a task": "Выберите задачу",
    Send: "Отправить",
    "Add a comment...": "Добавить комментарий...",
    "No comments yet": "Комментариев пока нет",
    "Would you like to delete this card?": "Удалить эту задачу?"
  }
}, ps = "en-US", ks = {
  monthFull: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  dayFull: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  hours: "Hours",
  minutes: "Minutes",
  done: "Done",
  clear: "Clear",
  today: "Today",
  am: ["am", "AM"],
  pm: ["pm", "PM"],
  weekStart: 7,
  clockFormat: 24
}, Ss = {
  ok: "OK",
  cancel: "Cancel",
  select: "Select",
  "No data": "No data",
  "Rows per page": "Rows per page",
  "Total pages": "Total pages"
}, Is = {
  timeFormat: "%H:%i",
  dateFormat: "%m/%d/%Y",
  monthYearFormat: "%F %Y",
  yearFormat: "%Y"
}, jn = {
  core: Ss,
  calendar: ks,
  formats: Is,
  lang: ps
}, Cs = "zh-CN", Es = {
  monthFull: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ],
  monthShort: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ],
  dayFull: [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ],
  dayShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  hours: "小时",
  minutes: "分钟",
  done: "完成",
  clear: "清除",
  today: "今天",
  am: ["", ""],
  pm: ["", ""],
  weekStart: 7,
  clockFormat: 24
}, Ds = {
  ok: "确定",
  cancel: "取消",
  select: "选择",
  "No data": "没有数据",
  "Rows per page": "每页行数",
  "Total pages": "总页数"
}, Ms = {
  timeFormat: "%H:%i",
  dateFormat: "%Y-%m-%d",
  monthYearFormat: "%F %Y",
  yearFormat: "%Y"
}, As = {
  core: Ds,
  calendar: Es,
  formats: Ms,
  lang: Cs
}, Ts = "de-DE", Ps = {
  monthFull: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ],
  monthShort: [
    "Jan",
    "Feb",
    "Mrz",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez"
  ],
  dayFull: [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ],
  dayShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  hours: "Stunden",
  minutes: "Minuten",
  done: "Fertig",
  clear: "Entfernen",
  today: "Heute",
  weekStart: 1,
  clockFormat: 24
}, Rs = {
  ok: "OK",
  cancel: "Abbrechen",
  select: "Auswählen",
  "No data": "Keine Daten",
  "Rows per page": "Zeilen pro Seite",
  "Total pages": "Gesamtseiten"
}, Ls = {
  timeFormat: "%H:%i",
  dateFormat: "%d.%m.%Y",
  monthYearFormat: "%F %Y",
  yearFormat: "%Y"
}, Fs = {
  core: Rs,
  calendar: Ps,
  formats: Ls,
  lang: Ts
}, Os = "es-ES", zs = {
  monthFull: [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ],
  monthShort: [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic"
  ],
  dayFull: [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado"
  ],
  dayShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  hours: "Horas",
  minutes: "Minutos",
  done: "Listo",
  clear: "Reinicio",
  today: "Hoy",
  weekStart: 1,
  clockFormat: 24
}, Bs = {
  ok: "OK",
  cancel: "Cancelar",
  select: "Seleccionar",
  "No data": "Sin datos",
  "Rows per page": "Filas por página",
  "Total pages": "Total de páginas"
}, Ns = {
  timeFormat: "%H:%i",
  dateFormat: "%d/%m/%Y",
  monthYearFormat: "%F %Y",
  yearFormat: "%Y"
}, Hs = {
  core: Bs,
  calendar: zs,
  formats: Ns,
  lang: Os
}, qs = "fr-FR", Us = {
  monthFull: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ],
  monthShort: [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Aôu",
    "Sep",
    "Oct",
    "Nov",
    "Déc"
  ],
  dayFull: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ],
  dayShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
  hours: "Heures",
  minutes: "Minutes",
  done: "Fini",
  clear: "Effacer",
  today: "Aujourd'hui",
  weekStart: 1,
  clockFormat: 24
}, Ys = {
  ok: "OK",
  cancel: "Annuler",
  select: "Sélectionner",
  "No data": "Pas de données",
  "Rows per page": "Lignes par page",
  "Total pages": "Nombre total de pages"
}, Ks = {
  timeFormat: "%H:%i",
  dateFormat: "%d/%m/%Y",
  monthYearFormat: "%F %Y",
  yearFormat: "%Y"
}, Vs = {
  core: Ys,
  calendar: Us,
  formats: Ks,
  lang: qs
}, Gs = "it-IT", Ws = {
  monthFull: [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre"
  ],
  monthShort: [
    "gen",
    "feb",
    "mar",
    "apr",
    "mag",
    "giu",
    "lug",
    "ago",
    "set",
    "ott",
    "nov",
    "dic"
  ],
  dayFull: [
    "domenica",
    "lunedì",
    "martedì",
    "mercoledì",
    "giovedì",
    "venerdì",
    "sabato"
  ],
  dayShort: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  hours: "Orario",
  minutes: "Minuti",
  done: "Pronto",
  clear: "Pulisci",
  today: "Oggi",
  weekStart: 1,
  clockFormat: 24
}, js = {
  ok: "OK",
  cancel: "Annullare",
  select: "Seleziona",
  "No data": "Nessun dato",
  "Rows per page": "Righe per pagina",
  "Total pages": "Pagine totali"
}, Js = {
  timeFormat: "%H:%i",
  dateFormat: "%d/%m/%Y",
  monthYearFormat: "%F %Y",
  yearFormat: "%Y"
}, Zs = {
  core: js,
  calendar: Ws,
  formats: Js,
  lang: Gs
}, Qs = "ja-JP", Xs = {
  monthFull: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  monthShort: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  dayFull: [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日"
  ],
  dayShort: ["日", "月", "火", "水", "木", "金", "土"],
  hours: "営業時間",
  minutes: "分",
  done: "レディー",
  clear: "削除する",
  today: "今日",
  weekStart: 1,
  clockFormat: 24
}, $s = {
  ok: "OK",
  cancel: "取り消す",
  select: "選択",
  "No data": "データが見つかりませんでした",
  "Rows per page": "1ページあたりの行数",
  "Total pages": "総ページ数"
}, el = {
  timeFormat: "%H:%i",
  dateFormat: "%Y年%m月%d日",
  monthYearFormat: "%m月%Y年",
  yearFormat: "%Y年"
}, tl = {
  core: $s,
  calendar: Xs,
  formats: el,
  lang: Qs
}, nl = "pt-PT", rl = {
  monthFull: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ],
  monthShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
  ],
  dayFull: [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
  ],
  dayShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  hours: "Horas",
  minutes: "Minutos",
  done: "Feito",
  clear: "Limpar",
  today: "Hoje",
  weekStart: 1,
  clockFormat: 24
}, al = {
  ok: "OK",
  cancel: "Cancelar",
  select: "Selecionar",
  "No data": "Sem dados",
  "Rows per page": "Linhas por página",
  "Total pages": "Total de páginas"
}, il = {
  timeFormat: "%H:%i",
  dateFormat: "%d/%m/%Y",
  monthYearFormat: "%F %Y",
  yearFormat: "%Y"
}, ol = {
  core: al,
  calendar: rl,
  formats: il,
  lang: nl
}, sl = "ru-RU", ll = {
  monthFull: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Maй",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Oктябрь",
    "Ноябрь",
    "Декабрь"
  ],
  monthShort: [
    "Янв",
    "Фев",
    "Maр",
    "Aпр",
    "Maй",
    "Июн",
    "Июл",
    "Aвг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек"
  ],
  dayFull: [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
  ],
  dayShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  hours: "Часы",
  minutes: "Минуты",
  done: "Гoтовo",
  clear: "Очистить",
  today: "Сегодня",
  weekStart: 1,
  clockFormat: 24
}, cl = {
  ok: "OK",
  cancel: "Отмена",
  select: "Выбрать",
  "No data": "Нет данных",
  "Rows per page": "Строк на странице",
  "Total pages": "Всего страниц"
}, dl = {
  timeFormat: "%H:%i",
  dateFormat: "%d.%m.%Y",
  monthYearFormat: "%F %Y",
  yearFormat: "%Y"
}, ul = {
  core: cl,
  calendar: ll,
  formats: dl,
  lang: sl
};
let Mi = (/* @__PURE__ */ new Date()).valueOf();
const vl = () => Mi++;
function Br() {
  return "temp://" + Mi++;
}
class fl {
  constructor(e) {
    this._nextHandler = null, this._dispatch = e, this.exec = this.exec.bind(this);
  }
  async exec(e, t) {
    return this._dispatch(e, t), this._nextHandler && await this._nextHandler.exec(e, t), t;
  }
  setNext(e) {
    return this._nextHandler = e;
  }
}
function Nr(n, e = "data-id") {
  let t = n;
  for (!t.tagName && n.target && (t = n.target); t; ) {
    if (t.getAttribute && t.getAttribute(e))
      return t;
    t = t.parentNode;
  }
  return null;
}
function hl(n, e = "data-id") {
  const t = Nr(n, e);
  return t ? Hr(t.getAttribute(e)) : null;
}
function Hr(n) {
  if (typeof n == "string") {
    const e = n * 1;
    if (!isNaN(e)) return e;
  }
  return n;
}
function ml() {
  return {
    detect: () => !0,
    addEvent: function(n, e, t) {
      return n.addEventListener(e, t), () => n.removeEventListener(e, t);
    },
    addGlobalEvent: function(n, e) {
      return document.addEventListener(n, e), () => document.removeEventListener(n, e);
    },
    getTopNode: function() {
      return window.document.body;
    }
  };
}
const ut = ml();
function Ai(n) {
  Object.assign(ut, n);
}
function _a(n, e, t) {
  function r(a) {
    const i = Nr(a);
    if (!i) return;
    const s = Hr(i.dataset.id);
    if (typeof e == "function") return e(s, a);
    let l, d = a.target;
    for (; d != i; ) {
      if (l = d.dataset ? d.dataset.action : null, l && e[l]) {
        e[l](s, a);
        return;
      }
      d = d.parentNode;
    }
    e[t] && e[t](s, a);
  }
  ut.addEvent(n, t, r);
}
function mn(n, e) {
  _a(n, e, "click"), e.dblclick && _a(n, e.dblclick, "dblclick");
}
function gl(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    if (n[t] === e) {
      n.splice(t, 1);
      break;
    }
}
let Ti = /* @__PURE__ */ new Date(), Pn = !1, wn = [];
const Ft = [], wa = (n) => {
  if (Pn) {
    Pn = !1;
    return;
  }
  for (let e = Ft.length - 1; e >= 0; e--) {
    const { node: t, date: r, props: a } = Ft[e];
    if (!(r > Ti) && !t.contains(n.target) && t !== n.target && (a.callback && a.callback(n), a.modal || n.defaultPrevented))
      break;
  }
}, _l = (n) => {
  Ti = /* @__PURE__ */ new Date(), Pn = !0;
  for (let e = Ft.length - 1; e >= 0; e--) {
    const { node: t } = Ft[e];
    if (!t.contains(n.target) && t !== n.target) {
      Pn = !1;
      break;
    }
  }
};
function Pi(n, e) {
  wn.length || (wn = [
    ut.addGlobalEvent("click", wa, n),
    ut.addGlobalEvent("contextmenu", wa, n),
    ut.addGlobalEvent("mousedown", _l, n)
  ]), typeof e != "object" && (e = { callback: e });
  const t = { node: n, date: /* @__PURE__ */ new Date(), props: e };
  return Ft.push(t), {
    destroy() {
      gl(Ft, t), Ft.length || (wn.forEach((r) => r()), wn = []);
    }
  };
}
const wl = (n) => n.indexOf("bottom") !== -1, xl = (n) => n.indexOf("left") !== -1, xa = (n) => n.indexOf("right") !== -1, yl = (n) => n.indexOf("top") !== -1, ya = (n) => n.indexOf("fit") !== -1, ba = (n) => n.indexOf("overlap") !== -1, bl = (n) => n.indexOf("center") !== -1;
function pl(n, e) {
  let t = 0;
  const r = ut.getTopNode(n);
  for (; n && n !== r; ) {
    const a = getComputedStyle(n).position;
    if ((a === "absolute" || a === "relative" || a === "fixed") && (t = parseInt(getComputedStyle(n).zIndex) || 0), n = n.parentNode, n === e) break;
  }
  return t;
}
let Ke, bt, Xt, st;
function kl(n, e, t = "bottom", r = 0, a = 0) {
  if (!n) return null;
  Ke = r, bt = a, Xt = "auto";
  let i = 0, s = 0;
  const l = Sl(n), d = ba(t) ? ut.getTopNode(n) : l;
  if (!l) return null;
  const c = l.getBoundingClientRect(), v = n.getBoundingClientRect(), u = d.getBoundingClientRect();
  if (e) {
    const f = pl(e, l);
    i = Math.max(f + 1, 20);
  }
  if (e) {
    if (st = e.getBoundingClientRect(), ya(t) && (Xt = st.width + "px"), t !== "point")
      if (bl(t))
        ya(t) ? Ke = 0 : (Ke = u.width / 2, s = 1), bt = (u.height - v.height) / 2;
      else {
        const f = ba(t) ? 0 : 1;
        Ke = xa(t) ? st.right + f : st.left - f, bt = wl(t) ? st.bottom + 1 : st.top;
      }
  } else st = { left: r, right: r, top: a, bottom: a };
  xl(t) && (Ke = st.left, s = 2), yl(t) && (bt = st.top - v.height);
  const h = bt + v.height - u.bottom;
  return h > 0 && (bt -= h), Ke + v.width - u.right > 0 && (xa(t) ? s = 2 : Ke = u.right - v.width), s && (Ke = Math.round(Ke - v.width * s / 2)), Ke < 0 && (t !== "left" ? Ke = 0 : Ke = st.right), Ke += d.scrollLeft - c.left, bt += d.scrollTop - c.top, Xt = Xt || "auto", { x: Ke, y: bt, z: i, width: Xt };
}
function Sl(n) {
  const e = ut.getTopNode(n);
  for (n && (n = n.parentElement); n; ) {
    const t = getComputedStyle(n).position;
    if (n === e || t === "relative" || t === "absolute" || t === "fixed")
      return n;
    n = n.parentNode;
  }
  return null;
}
let pa = (/* @__PURE__ */ new Date()).valueOf();
function qe() {
  return pa += 1, pa;
}
function Ge(n) {
  return n < 10 ? "0" + n : n.toString();
}
function Il(n) {
  const e = Ge(n);
  return e.length == 2 ? "0" + e : e;
}
function Ri(n) {
  const e = Math.floor(n / 11) * 11;
  return {
    start: e,
    end: e + 11
  };
}
function Cl(n) {
  let e = n.getDay();
  e === 0 && (e = 7);
  const t = new Date(n.valueOf());
  t.setDate(n.getDate() + (4 - e));
  const r = t.getFullYear(), a = Math.floor(
    (t.getTime() - new Date(r, 0, 1).getTime()) / 864e5
  );
  return 1 + Math.floor(a / 7);
}
const ka = ["", ""];
function El(n, e, t) {
  switch (n) {
    case "%d":
      return Ge(e.getDate());
    case "%m":
      return Ge(e.getMonth() + 1);
    case "%j":
      return e.getDate();
    case "%n":
      return e.getMonth() + 1;
    case "%y":
      return Ge(e.getFullYear() % 100);
    case "%Y":
      return e.getFullYear();
    case "%D":
      return t.dayShort[e.getDay()];
    case "%l":
      return t.dayFull[e.getDay()];
    case "%M":
      return t.monthShort[e.getMonth()];
    case "%F":
      return t.monthFull[e.getMonth()];
    case "%h":
      return Ge((e.getHours() + 11) % 12 + 1);
    case "%g":
      return (e.getHours() + 11) % 12 + 1;
    case "%G":
      return e.getHours();
    case "%H":
      return Ge(e.getHours());
    case "%i":
      return Ge(e.getMinutes());
    case "%a":
      return ((e.getHours() > 11 ? t.pm : t.am) || ka)[0];
    case "%A":
      return ((e.getHours() > 11 ? t.pm : t.am) || ka)[1];
    case "%s":
      return Ge(e.getSeconds());
    case "%S":
      return Il(e.getMilliseconds());
    case "%W":
      return Ge(Cl(e));
    case "%c": {
      let r = e.getFullYear() + "";
      return r += "-" + Ge(e.getMonth() + 1), r += "-" + Ge(e.getDate()), r += "T", r += Ge(e.getHours()), r += ":" + Ge(e.getMinutes()), r += ":" + Ge(e.getSeconds()), r;
    }
    default:
      return n;
  }
}
const Dl = /%[a-zA-Z]/g;
function Ct(n, e) {
  return typeof n == "function" ? n : function(t) {
    return t ? (t.getMonth || (t = new Date(t)), n.replace(
      Dl,
      (r) => El(r, t, e)
    )) : "";
  };
}
function Sa(n) {
  return n && typeof n == "object" && !Array.isArray(n);
}
function fr(n, e) {
  for (const t in e) {
    const r = e[t];
    Sa(n[t]) && Sa(r) ? n[t] = fr(
      { ...n[t] },
      e[t]
    ) : n[t] = e[t];
  }
  return n;
}
function Jt(n) {
  return {
    getGroup(e) {
      const t = n[e];
      return (r) => t && t[r] || r;
    },
    getRaw() {
      return n;
    },
    extend(e, t) {
      if (!e) return this;
      let r;
      return t ? r = fr({ ...e }, n) : r = fr({ ...n }, e), Jt(r);
    }
  };
}
const qr = {
  detect() {
    return typeof window > "u" ? !1 : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      !!window.Sfdc || // eslint-disable-next-line @typescript-eslint/no-explicit-any
      !!window.$A || // eslint-disable-next-line @typescript-eslint/no-explicit-any
      !!window.Aura || "$shadowResolver$" in document.body
    );
  },
  addGlobalEvent: function(n, e, t) {
    const r = qr.getTopNode(t);
    return r.addEventListener(n, e), () => r.removeEventListener(n, e);
  },
  getTopNode: function(n) {
    return n.closest('[data-wx-root="true"]');
  }
};
var Ml = (n, e, t) => e.onchange && e.onchange({ value: t(), input: !0 }), Al = (n, e, t) => e.onchange && e.onchange({ value: t() }), Tl = /* @__PURE__ */ C('<textarea class="wx-textarea svelte-1eba9c5"></textarea>');
function hr(n, e) {
  ne(e, !0);
  let t = S(e, "value", 15, ""), r = S(e, "id", 19, qe), a = S(e, "placeholder", 3, ""), i = S(e, "title", 3, ""), s = S(e, "disabled", 3, !1), l = S(e, "error", 3, !1), d = S(e, "readonly", 3, !1);
  var c = Tl();
  c.__input = [Ml, e, t], c.__change = [Al, e, t], F(() => {
    Z(c, "id", r()), c.disabled = s(), Z(c, "placeholder", a()), c.readOnly = d(), Z(c, "title", i()), he(c, "wx-error", l());
  }), tn(c, t), g(n, c), re();
}
ge(["input", "change"]);
const Pl = (n, e) => {
  e.onclick && e.onclick(n);
};
var Rl = /* @__PURE__ */ C("<i></i>"), Ll = /* @__PURE__ */ C("<button><!> <!></button>");
function Re(n, e) {
  ne(e, !0);
  let t = S(e, "type", 3, ""), r = S(e, "css", 3, ""), a = S(e, "icon", 3, ""), i = S(e, "disabled", 3, !1), s = S(e, "title", 3, ""), l = S(e, "text", 3, ""), d = /* @__PURE__ */ z(() => {
    let h = t() ? t().split(" ").filter((_) => _ !== "").map((_) => "wx-" + _).join(" ") : "";
    return r() + (r() ? " " : "") + h;
  });
  var c = Ll();
  c.__click = [Pl, e];
  var v = E(c);
  R(v, a, (h) => {
    var _ = Rl();
    F(() => we(_, `${a() ?? ""} svelte-1p0p9h7`)), g(h, _);
  });
  var u = U(v, 2);
  R(
    u,
    () => e.children,
    (h) => {
      var _ = $(), f = G(_);
      Ie(f, () => e.children), g(h, _);
    },
    (h) => {
      var _ = ke();
      F(() => ee(_, l())), g(h, _);
    }
  ), F(() => {
    Z(c, "title", s()), we(c, `${`wx-button ${o(d)}` ?? ""} svelte-1p0p9h7`), c.disabled = i(), he(c, "wx-icon", a() && !e.children);
  }), g(n, c), re();
}
ge(["click"]);
function Fl({ target: n }, e, t, r) {
  e(n.checked), t.onchange && t.onchange({
    value: e(),
    inputValue: r()
  });
}
var Ol = /* @__PURE__ */ C('<span class="svelte-101cewd"> </span>'), zl = /* @__PURE__ */ C('<div class="wx-checkbox svelte-101cewd"><input type="checkbox" class="svelte-101cewd"> <label class="svelte-101cewd"><span class="svelte-101cewd"></span> <!></label></div>');
function Bl(n, e) {
  ne(e, !0);
  let t = S(e, "id", 19, qe), r = S(e, "label", 3, ""), a = S(e, "inputValue", 3, ""), i = S(e, "value", 15, !1), s = S(e, "style", 3, ""), l = S(e, "disabled", 3, !1);
  var d = zl(), c = E(d);
  c.__change = [Fl, i, e, a];
  var v = U(c, 2), u = U(E(v), 2);
  R(u, r, (h) => {
    var _ = Ol(), f = E(_);
    F(() => ee(f, r())), g(h, _);
  }), F(() => {
    Z(d, "style", s()), Z(c, "id", t()), c.disabled = l(), jo(c, i()), Bt(c, a()), Z(v, "for", t());
  }), g(n, d), re();
}
ge(["change"]);
var Nl = /* @__PURE__ */ C("<div><!></div>");
function Mt(n, e) {
  ne(e, !0);
  let t = S(e, "position", 7, "bottom"), r = S(e, "align", 7, "start"), a = S(e, "autoFit", 3, !0), i = S(e, "oncancel", 3, null), s = S(e, "width", 3, "100%"), l;
  at(() => {
    if (a()) {
      const u = l.getBoundingClientRect(), h = ut.getTopNode(l).getBoundingClientRect();
      return u.right >= h.right && r("end"), u.bottom >= h.bottom && t("top"), `${t()}-${r()}`;
    }
  });
  function d(u) {
    i() && i()(u);
  }
  var c = Nl(), v = E(c);
  Ie(v, () => e.children ?? Ce), ze(c, (u, h) => Pi(u, h), () => d), Te(c, (u) => l = u, () => l), F(() => {
    we(c, `wx-dropdown ${`wx-${t()}-${r()}` ?? ""} svelte-1jzzq2v`), Z(c, "style", `width:${s() ?? ""}`);
  }), g(n, c), re();
}
function Hl(n, e, t) {
  n.stopPropagation(), e(""), t.onchange && t.onchange({ value: e() });
}
function ql(n, e, t) {
  if (e()) return !1;
  B(t, !0);
}
var Ul = /* @__PURE__ */ C('<i class="wx-clear wxi-close svelte-t9vgru"></i>'), Yl = /* @__PURE__ */ C('<div class="wx-color wx-selected svelte-t9vgru"></div>'), Kl = /* @__PURE__ */ C('<div class="wx-empty wx-selected svelte-t9vgru"></div>'), Vl = (n, e) => e(n, ""), Gl = (n, e, t) => e(n, o(t)), Wl = /* @__PURE__ */ C('<div class="wx-color svelte-t9vgru"></div>'), jl = /* @__PURE__ */ C('<div class="wx-colors svelte-t9vgru"><div class="wx-empty svelte-t9vgru"></div> <!></div>'), Jl = /* @__PURE__ */ C('<div class="wx-colorselect svelte-t9vgru"><input readonly="" class="svelte-t9vgru"> <!> <!> <!></div>');
function Zl(n, e) {
  ne(e, !0);
  let r = S(e, "colors", 3, [
    "#00a037",
    "#37a9ef",
    "#f5a623",
    "#ff4c3b",
    "#a0a0a0",
    "#000000",
    "#ffffff"
  ]), a = S(e, "value", 15, ""), i = S(e, "id", 19, qe), s = S(e, "clear", 3, !1), l = S(e, "placeholder", 3, ""), d = S(e, "title", 3, ""), c = S(e, "disabled", 3, !1), v = S(e, "error", 3, !1), u = ae(!1);
  function h(b, y) {
    b.stopPropagation(), a(y), B(u, !1), e.onchange && e.onchange({ value: a() });
  }
  var _ = Jl();
  _.__click = [ql, c, u];
  var f = E(_), m = U(f, 2);
  R(m, () => s() && a() && !c(), (b) => {
    var y = Ul();
    y.__click = [Hl, a, e], g(b, y);
  });
  var w = U(m, 2);
  R(
    w,
    a,
    (b) => {
      var y = Yl();
      F(() => Z(y, "style", `background-color: ${a() || "#00a037"}`)), g(b, y);
    },
    (b) => {
      var y = Kl();
      g(b, y);
    }
  );
  var k = U(w, 2);
  R(k, () => o(u), (b) => {
    Mt(b, {
      oncancel: () => B(u, !1),
      children: (y, x) => {
        var I = jl(), p = E(I);
        p.__click = [Vl, h];
        var P = U(p, 2);
        Se(P, 17, r, ot, (A, N) => {
          var V = Wl();
          V.__click = [Gl, h, N], F(() => Z(V, "style", `background-color: ${o(N) ?? ""}`)), g(A, V);
        }), g(y, I);
      },
      $$slots: { default: !0 }
    });
  }), F(() => {
    Z(f, "title", d()), Bt(f, a()), Z(f, "id", i()), Z(f, "placeholder", l()), f.disabled = c(), he(f, "wx-error", v()), he(f, "wx-focus", o(u));
  }), g(n, _), re();
}
ge(["click"]);
const Ql = "en-US", Xl = {
  monthFull: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  dayFull: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  hours: "Hours",
  minutes: "Minutes",
  done: "Done",
  clear: "Clear",
  today: "Today",
  am: ["am", "AM"],
  pm: ["pm", "PM"],
  weekStart: 0,
  clockFormat: 24
}, $l = {
  ok: "OK",
  cancel: "Cancel",
  select: "Select",
  "No data": "No data",
  "Rows per page": "Rows per page",
  "Total pages": "Total pages"
}, ec = {
  timeFormat: "%H:%i",
  dateFormat: "%m/%d/%Y",
  monthYearFormat: "%F %Y",
  yearFormat: "%Y"
}, tc = {
  core: $l,
  calendar: Xl,
  formats: ec,
  lang: Ql
};
function At(n, e) {
  ne(e, !0);
  let t = S(e, "words", 3, null), r = S(e, "optional", 3, !1), a = me("wx-i18n");
  a || (a = Jt(tc)), a = a.extend(t(), r()), wt("wx-i18n", a);
  var i = $(), s = G(i);
  Ie(s, () => e.children ?? Ce), g(n, i), re();
}
ge(["keydown", "change"]);
ge(["click"]);
function nc() {
  let n = null, e = !1, t, r, a, i;
  const s = (h, _, f, m) => {
    t = h, r = _, a = f, i = m;
  }, l = (h) => {
    n = h, e = n !== null, a(n);
  }, d = (h, _) => {
    const f = h === null ? null : Math.max(0, Math.min(n + h, r.length - 1));
    f !== n && (l(f), t ? c(f, _) : requestAnimationFrame(() => c(f, _)));
  }, c = (h, _) => {
    if (h !== null && t) {
      const f = t.querySelectorAll(".wx-list > .wx-item")[h];
      f && (f.scrollIntoView({ block: "nearest" }), _ && _.preventDefault());
    }
  };
  return { move: (h) => {
    const _ = hl(h), f = r.findIndex((m) => m.id == _);
    f !== n && l(f);
  }, keydown: (h, _) => {
    switch (h.code) {
      case "Enter":
        e ? i() : l(0);
        break;
      case "Space":
        e || l(0);
        break;
      case "Escape":
        a(n = null);
        break;
      case "Tab":
        a(n = null);
        break;
      case "ArrowDown":
        d(e ? 1 : _ || 0, h);
        break;
      case "ArrowUp":
        d(e ? -1 : _ || 0, h);
        break;
    }
  }, init: s, navigate: d };
}
var rc = /* @__PURE__ */ C('<div class="wx-item svelte-fl05h9"><!></div>'), ac = /* @__PURE__ */ C('<div class="wx-no-data svelte-fl05h9"> </div>'), ic = /* @__PURE__ */ C('<div class="wx-list svelte-fl05h9"><!></div>');
function oc(n, e) {
  ne(e, !0);
  let t = S(e, "items", 19, () => []), r = ae(void 0), a = ae(null);
  const i = me("wx-i18n").getGroup("core"), { move: s, keydown: l, init: d, navigate: c } = nc(), v = (_) => {
    _ && _.stopPropagation(), e.onselect && e.onselect({ id: t()[o(a)]?.id });
  };
  at(() => {
    d(o(r), t(), (_) => B(a, Q(_)), v);
  }), ht(() => {
    e.onready && e.onready({ navigate: c, keydown: l, move: s });
  });
  var u = $(), h = G(u);
  R(h, () => o(a) !== null, (_) => {
    Mt(_, {
      oncancel: () => c(null),
      children: (f, m) => {
        var w = ic();
        w.__click = v, w.__mousemove = s;
        var k = E(w);
        R(
          k,
          () => t().length,
          (b) => {
            var y = $(), x = G(y);
            Se(x, 19, t, (I) => I.id, (I, p, P) => {
              var A = rc(), N = E(A);
              R(
                N,
                () => e.children,
                (V) => {
                  var W = $(), J = G(W);
                  Ie(J, () => e.children, () => ({ option: o(p) })), g(V, W);
                },
                (V) => {
                  var W = ke();
                  F(() => ee(W, o(p).label)), g(V, W);
                }
              ), F(() => {
                Z(A, "data-id", o(p).id), he(A, "wx-focus", o(P) === o(a));
              }), g(I, A);
            }), g(b, y);
          },
          (b) => {
            var y = ac(), x = E(y);
            F(() => ee(x, i("No data"))), g(b, y);
          }
        ), Te(w, (b) => B(r, b), () => o(r)), g(f, w);
      },
      $$slots: { default: !0 }
    });
  }), g(n, u), re();
}
ge(["click", "mousemove"]);
function Li(n, e) {
  let t = /* @__PURE__ */ hn(e, ["$$slots", "$$events", "$$legacy"]);
  At(n, {
    children: (r, a) => {
      oc(r, We(() => t));
    },
    $$slots: { default: !0 }
  });
}
var sc = /* @__PURE__ */ C('<i class="wx-icon wxi-close svelte-1vqfa1a"></i>'), lc = /* @__PURE__ */ C('<i class="wx-icon wxi-angle-down svelte-1vqfa1a"></i>'), cc = /* @__PURE__ */ C('<div class="wx-combo svelte-1vqfa1a"><input class="svelte-1vqfa1a"> <!> <!></div>');
function mr(n, e) {
  ne(e, !0);
  let t = S(e, "value", 15, ""), r = S(e, "id", 19, qe), a = S(e, "options", 19, () => []), i = S(e, "textOptions", 3, null), s = S(e, "textField", 3, "label"), l = S(e, "placeholder", 3, ""), d = S(e, "title", 3, ""), c = S(e, "disabled", 3, !1), v = S(e, "error", 3, !1), u = S(e, "clear", 3, !1), h = ae(!1), _ = ae(""), f = /* @__PURE__ */ z(() => {
    if (o(h)) return o(_);
    if (t() || t() === 0) {
      const T = (i() || a()).find((O) => O.id === t());
      if (T) return T[s()];
    }
    return "";
  }), m = /* @__PURE__ */ z(() => !o(f) || !o(h) ? a() : a().filter((T) => T[s()].toLowerCase().includes(o(f).toLowerCase()))), w, k;
  function b(T) {
    w = T.navigate, k = T.keydown;
  }
  const y = () => o(m).findIndex((T) => T.id === t()), x = () => w(y()), I = (T) => k(T, y());
  function p({ id: T }) {
    A(T, !0);
  }
  function P(T) {
    if (!a().length) return;
    if (T === "" && u()) {
      N();
      return;
    }
    let O = a().find((j) => j[s()] === T);
    O || (O = a().find((j) => j[s()].toLowerCase().includes(T.toLowerCase())));
    const K = O ? O.id : t() || a()[0].id;
    A(K, !1);
  }
  function A(T, O) {
    if (T || T === 0) {
      let K = a().find((j) => j.id === T);
      B(h, !1), O && w(null), K && t() !== K.id && (t(K.id), e.onchange && e.onchange({ value: t() }));
    }
    !J && O && W.focus();
  }
  function N(T) {
    T && T.stopPropagation(), t(""), B(h, !1), e.onchange && e.onchange({ value: t() });
  }
  function V() {
    B(_, Q(W.value)), B(h, !0), o(m).length ? w(0) : w(null);
  }
  let W, J;
  function L() {
    J = !0;
  }
  function D() {
    J = !1, setTimeout(
      () => {
        J || P(o(f));
      },
      200
    );
  }
  var M = cc();
  M.__click = x, M.__keydown = I;
  var q = E(M);
  q.__input = V, Te(q, (T) => W = T, () => W);
  var Y = U(q, 2);
  R(
    Y,
    () => u() && !c() && t(),
    (T) => {
      var O = sc();
      O.__click = N, g(T, O);
    },
    (T) => {
      var O = lc();
      g(T, O);
    }
  );
  var H = U(Y, 2);
  R(H, () => !c(), (T) => {
    Li(T, {
      get items() {
        return o(m);
      },
      onready: b,
      onselect: p,
      children: (K, j) => {
        let te = () => j?.().option;
        var ie = $(), ve = G(ie);
        R(
          ve,
          () => e.children,
          (X) => {
            var oe = $(), se = G(oe);
            Ie(se, () => e.children, () => ({ option: te() })), g(X, oe);
          },
          (X) => {
            var oe = ke();
            F(() => ee(oe, te()[s()])), g(X, oe);
          }
        ), g(K, ie);
      },
      $$slots: { default: !0 }
    });
  }), F(() => {
    Z(M, "title", d()), Z(q, "id", r()), Bt(q, o(f)), q.disabled = c(), Z(q, "placeholder", l()), he(q, "wx-error", v());
  }), He("focus", q, L), He("blur", q, D), g(n, M), re();
}
ge(["click", "keydown", "input"]);
const $n = (n, e, t) => e.onchange && e.onchange({ value: t(), input: !0 }), er = (n, e, t) => e.onchange && e.onchange({ value: t() });
function dc(n, e, t) {
  n.stopPropagation(), e(""), t.onchange && t.onchange({ value: e() });
}
var uc = /* @__PURE__ */ C('<input type="password" class="svelte-9z0rem">'), vc = /* @__PURE__ */ C('<input type="number" class="svelte-9z0rem">'), fc = /* @__PURE__ */ C('<input class="svelte-9z0rem">'), hc = /* @__PURE__ */ C("<i></i>"), mc = /* @__PURE__ */ C('<i class="wx-icon wxi-close svelte-9z0rem"></i> <!>', 1), gc = /* @__PURE__ */ C("<i></i>"), _c = /* @__PURE__ */ C("<div><!> <!></div>");
function Jn(n, e) {
  ne(e, !0);
  let t = S(e, "value", 15, ""), r = S(e, "id", 19, qe), a = S(e, "readonly", 3, !1), i = S(e, "focus", 3, !1), s = S(e, "select", 3, !1), l = S(e, "type", 3, "text"), d = S(e, "placeholder", 3, ""), c = S(e, "disabled", 3, !1), v = S(e, "error", 3, !1), u = S(e, "inputStyle", 3, ""), h = S(e, "title", 3, ""), _ = S(e, "css", 3, ""), f = S(e, "clear", 3, !1), m = /* @__PURE__ */ z(() => e.icon && _().indexOf("wx-icon-left") === -1 ? "wx-icon-right " + _() : _()), w = /* @__PURE__ */ z(() => e.icon && _().indexOf("wx-icon-left") !== -1), k;
  ht(() => {
    setTimeout(
      () => {
        i() && k && k.focus(), s() && k && k.select();
      },
      1
    );
  });
  var b = _c(), y = E(b);
  R(
    y,
    () => l() == "password",
    (I) => {
      var p = uc();
      p.__input = [$n, e, t], p.__change = [er, e, t], Te(p, (P) => k = P, () => k), F(() => {
        Z(p, "id", r()), p.readOnly = a(), p.disabled = c(), Z(p, "placeholder", d()), Z(p, "style", u()), Z(p, "title", h());
      }), tn(p, t), g(I, p);
    },
    (I) => {
      var p = $(), P = G(p);
      R(
        P,
        () => l() == "number",
        (A) => {
          var N = vc();
          N.__input = [$n, e, t], N.__change = [er, e, t], Te(N, (V) => k = V, () => k), F(() => {
            Z(N, "id", r()), N.readOnly = a(), N.disabled = c(), Z(N, "placeholder", d()), Z(N, "style", u()), Z(N, "title", h());
          }), tn(N, t), g(A, N);
        },
        (A) => {
          var N = fc();
          N.__input = [$n, e, t], N.__change = [er, e, t], Te(N, (V) => k = V, () => k), F(() => {
            Z(N, "id", r()), N.readOnly = a(), N.disabled = c(), Z(N, "placeholder", d()), Z(N, "title", h()), Z(N, "style", u());
          }), tn(N, t), g(A, N);
        },
        !0
      ), g(I, p);
    }
  );
  var x = U(y, 2);
  R(
    x,
    () => f() && !c() && t(),
    (I) => {
      var p = mc(), P = G(p);
      P.__click = [dc, t, e];
      var A = U(P, 2);
      R(A, () => o(w), (N) => {
        var V = hc();
        F(() => we(V, `wx-icon ${e.icon ?? ""} svelte-9z0rem`)), g(N, V);
      }), g(I, p);
    },
    (I) => {
      var p = $(), P = G(p);
      R(
        P,
        () => e.icon,
        (A) => {
          var N = gc();
          F(() => we(N, `wx-icon ${e.icon ?? ""} svelte-9z0rem`)), g(A, N);
        },
        null,
        !0
      ), g(I, p);
    }
  ), F(() => {
    we(b, `wx-text ${o(m) ?? ""} svelte-9z0rem`), he(b, "wx-error", v()), he(b, "wx-disabled", c()), he(b, "wx-clear", f());
  }), g(n, b), re();
}
ge(["input", "change", "click"]);
function wc(n, e) {
  e.onshift && e.onshift({ diff: 0, type: e.type });
}
var xc = (n, e) => e.onshift && e.onshift({ diff: -1, type: e.type }), yc = /* @__PURE__ */ C('<i class="wx-pager wxi-angle-left svelte-wurt7c"></i>'), bc = /* @__PURE__ */ C('<span class="wx-spacer svelte-wurt7c"></span>'), pc = (n, e) => e.onshift && e.onshift({ diff: 1, type: e.type }), kc = /* @__PURE__ */ C('<i class="wx-pager wxi-angle-right svelte-wurt7c"></i>'), Sc = /* @__PURE__ */ C('<span class="wx-spacer svelte-wurt7c"></span>'), Ic = /* @__PURE__ */ C('<div class="wx-header svelte-wurt7c"><!>  <span class="wx-label svelte-wurt7c"> </span> <!></div>');
function Cc(n, e) {
  ne(e, !0);
  const { calendar: t, formats: r } = me("wx-i18n").getRaw(), a = /* @__PURE__ */ z(() => e.date.getFullYear()), i = /* @__PURE__ */ z(() => {
    switch (e.type) {
      case "month":
        return Ct(r.monthYearFormat, t)(e.date);
      case "year":
        return Ct(r.yearFormat, t)(e.date);
      case "duodecade": {
        const { start: u, end: h } = Ri(o(a)), _ = Ct(r.yearFormat, t);
        return `${_(new Date(u, 0, 1))} - ${_(new Date(h, 11, 31))}`;
      }
    }
  });
  var s = Ic(), l = E(s);
  R(
    l,
    () => e.part != "right",
    (u) => {
      var h = yc();
      h.__click = [xc, e], g(u, h);
    },
    (u) => {
      var h = bc();
      g(u, h);
    }
  );
  var d = U(l, 2);
  d.__click = [wc, e];
  var c = E(d), v = U(d, 2);
  R(
    v,
    () => e.part != "left",
    (u) => {
      var h = kc();
      h.__click = [pc, e], g(u, h);
    },
    (u) => {
      var h = Sc();
      g(u, h);
    }
  ), F(() => ee(c, o(i))), g(n, s), re();
}
ge(["click"]);
var Ec = /* @__PURE__ */ C('<button class="svelte-1f88uh6"><!></button>');
function Ur(n, e) {
  ne(e, !0);
  var t = Ec();
  t.__click = function(...a) {
    e.onclick?.apply(this, a);
  };
  var r = E(t);
  Ie(r, () => e.children ?? Ce), g(n, t), re();
}
ge(["click"]);
var Dc = /* @__PURE__ */ C('<div class="wx-weekday svelte-nq9zbf"> </div>'), Mc = /* @__PURE__ */ C("<div> </div>"), Ac = /* @__PURE__ */ C('<div><div class="wx-weekdays svelte-nq9zbf"></div> <div class="wx-days svelte-nq9zbf"></div></div>');
function Tc(n, e) {
  ne(e, !0);
  let t = S(e, "part", 3, ""), r = S(e, "markers", 3, null);
  const a = me("wx-i18n").getRaw().calendar, i = (a.weekStart || 7) % 7, s = a.dayShort.slice(i).concat(a.dayShort.slice(0, i)), l = (y, x, I) => new Date(y.getFullYear(), y.getMonth() + (x || 0), y.getDate() + (I || 0));
  let d = t() !== "normal";
  function c(y) {
    const x = y.getDay();
    return x === 0 || x === 6;
  }
  function v() {
    const y = l(e.current, 0, 1 - e.current.getDate());
    return y.setDate(y.getDate() - (y.getDay() - (i - 7)) % 7), y;
  }
  function u() {
    const y = l(e.current, 1, -e.current.getDate());
    return y.setDate(y.getDate() + (6 - y.getDay() + i) % 7), y;
  }
  const h = { click: _ };
  function _(y, x) {
    x.stopPropagation(), e.onchange && e.onchange(new Date(new Date(y))), e.oncancel && e.oncancel();
  }
  const f = /* @__PURE__ */ z(() => t() == "normal" ? [
    e.value ? l(e.value).valueOf() : 0
  ] : e.value ? [
    e.value.start ? l(e.value.start).valueOf() : 0,
    e.value.end ? l(e.value.end).valueOf() : 0
  ] : [0, 0]), m = /* @__PURE__ */ z(() => {
    const y = v(), x = u(), I = e.current.getMonth();
    let p = [];
    for (let P = y; P <= x; P.setDate(P.getDate() + 1)) {
      const A = {
        day: P.getDate(),
        in: P.getMonth() === I,
        date: P.valueOf()
      };
      let N = "";
      if (N += A.in ? "" : " wx-inactive", N += o(f).indexOf(A.date) > -1 ? " wx-selected" : "", d) {
        const V = A.date == o(f)[0], W = A.date == o(f)[1];
        V && !W ? N += " wx-left" : W && !V && (N += " wx-right"), A.date > o(f)[0] && A.date < o(f)[1] && (N += " wx-inrange");
      }
      if (N += c(P) ? " wx-weekend" : "", r()) {
        const V = r()(P);
        V && (N += " " + V);
      }
      p.push({ ...A, css: N });
    }
    return p;
  });
  var w = Ac(), k = E(w);
  Se(k, 21, () => s, ot, (y, x) => {
    var I = Dc(), p = E(I);
    F(() => ee(p, o(x))), g(y, I);
  });
  var b = U(k, 2);
  Se(b, 21, () => o(m), (y) => y.date, (y, x) => {
    var I = Mc(), p = E(I);
    F(() => {
      we(I, `wx-day ${o(x).css ?? ""} svelte-nq9zbf`), Z(I, "data-id", o(x).date), he(I, "wx-out", !o(x).in), ee(p, o(x).day);
    }), g(y, I);
  }), ze(b, (y, x) => mn(y, x), () => h), g(n, w), re();
}
var Pc = /* @__PURE__ */ C('<div class="wx-month svelte-1mekhda"> </div>'), Rc = /* @__PURE__ */ C('<div class="wx-months svelte-1mekhda"></div> <div class="wx-buttons svelte-1mekhda"><!></div>', 1);
function Lc(n, e) {
  ne(e, !0);
  let t = S(e, "value", 15), r = S(e, "current", 15);
  const a = me("wx-i18n").getRaw().calendar, i = a.monthShort, s = /* @__PURE__ */ z(() => r().getMonth()), l = { click: d };
  function d(f, m) {
    (f || f === 0) && (m.stopPropagation(), r().setMonth(f), r(new Date(r())), e.onshift && e.onshift({})), e.part === "normal" && t(new Date(r())), e.oncancel && e.oncancel();
  }
  function c() {
    const f = new Date(Fi(t(), e.part) || r());
    f.setMonth(r().getMonth()), f.setFullYear(r().getFullYear()), e.onchange && e.onchange(f);
  }
  var v = Rc(), u = G(v);
  Se(u, 21, () => i, ot, (f, m, w) => {
    var k = Pc();
    Z(k, "data-id", w);
    var b = E(k);
    F(() => {
      he(k, "wx-current", o(s) === w), ee(b, o(m));
    }), g(f, k);
  }), ze(u, (f, m) => mn(f, m), () => l);
  var h = U(u, 2), _ = E(h);
  Ur(_, {
    onclick: c,
    children: (f, m) => {
      var w = ke();
      F(() => ee(w, a.done)), g(f, w);
    },
    $$slots: { default: !0 }
  }), g(n, v), re();
}
var Fc = /* @__PURE__ */ C('<div class="wx-year svelte-uftkmf"> </div>'), Oc = /* @__PURE__ */ C('<div class="wx-years svelte-uftkmf"></div> <div class="wx-buttons svelte-uftkmf"><!></div>', 1);
function zc(n, e) {
  ne(e, !0);
  const t = me("wx-i18n").getRaw().calendar;
  let r = S(e, "value", 15), a = S(e, "current", 15);
  const i = /* @__PURE__ */ z(() => a().getFullYear()), s = /* @__PURE__ */ z(() => {
    const { start: f, end: m } = Ri(o(i)), w = [];
    for (let k = f; k <= m; k += 1)
      w.push(k);
    return w;
  }), l = { click: d };
  function d(f, m) {
    f && (m.stopPropagation(), a().setFullYear(f), a(new Date(a())), e.onshift && e.onshift({})), e.part === "normal" && r(new Date(a())), e.oncancel && e.oncancel();
  }
  function c() {
    const f = new Date(Fi(r(), e.part) || a());
    f.setFullYear(a().getFullYear()), e.onchange && e.onchange(f);
  }
  var v = Oc(), u = G(v);
  Se(u, 21, () => o(s), ot, (f, m, w) => {
    var k = Fc(), b = E(k);
    F(() => {
      Z(k, "data-id", o(m)), he(k, "wx-current", o(i) == o(m)), he(k, "wx-prev-decade", w === 0), he(k, "wx-next-decade", w === 11), ee(b, o(m));
    }), g(f, k);
  }), ze(u, (f, m) => mn(f, m), () => l);
  var h = U(u, 2), _ = E(h);
  Ur(_, {
    onclick: c,
    children: (f, m) => {
      var w = ke();
      F(() => ee(w, t.done)), g(f, w);
    },
    $$slots: { default: !0 }
  }), g(n, v), re();
}
const Ia = {
  month: {
    component: Tc,
    next: Nc,
    prev: Bc
  },
  year: {
    component: Lc,
    next: qc,
    prev: Hc
  },
  duodecade: {
    component: zc,
    next: Yc,
    prev: Uc
  }
};
function Bc(n) {
  return n = new Date(n), n.setMonth(n.getMonth() - 1), n;
}
function Nc(n) {
  return n = new Date(n), n.setMonth(n.getMonth() + 1), n;
}
function Hc(n) {
  return n = new Date(n), n.setFullYear(n.getFullYear() - 1), n;
}
function qc(n) {
  return n = new Date(n), n.setFullYear(n.getFullYear() + 1), n;
}
function Uc(n) {
  return n = new Date(n), n.setFullYear(n.getFullYear() - 10), n;
}
function Yc(n) {
  return n = new Date(n), n.setFullYear(n.getFullYear() + 10), n;
}
function Fi(n, e) {
  let t;
  if (e === "normal") t = n;
  else {
    const { start: r, end: a } = n;
    e === "left" ? t = r : e == "right" ? t = a : t = r && a;
  }
  return t;
}
var Kc = /* @__PURE__ */ C('<div class="wx-button-item svelte-avh7y"><!></div>'), Vc = /* @__PURE__ */ C('<div class="wx-buttons svelte-avh7y"></div>'), Gc = /* @__PURE__ */ C('<div><div class="wx-wrap svelte-avh7y"><!> <div><!> <!></div></div></div>');
function pn(n, e) {
  ne(e, !0);
  const t = me("wx-i18n").getGroup("calendar");
  let r = S(e, "current", 15), a = S(e, "part", 3, "normal"), i = S(e, "markers", 3, null), s = S(e, "buttons", 19, () => ["clear", "today"]), l = ae("month"), d = /* @__PURE__ */ z(() => Array.isArray(s()) ? s() : s() ? ["clear", "today"] : []);
  function c(I, p) {
    I.preventDefault(), e.onchange && e.onchange({ value: p });
  }
  function v() {
    o(l) === "duodecade" ? B(l, "year") : o(l) === "year" && B(l, "month");
  }
  function u(I) {
    const { diff: p } = I;
    if (p === 0) {
      o(l) === "month" ? B(l, "year") : o(l) === "year" && B(l, "duodecade");
      return;
    }
    if (p) {
      const P = Ia[o(l)];
      r(p > 0 ? P.next(r()) : P.prev(r()));
    }
    e.onshift && e.onshift();
  }
  function h(I) {
    B(l, "month"), e.onchange && e.onchange({ select: !0, value: I });
  }
  function _(I) {
    if (I === "done") return -1;
    if (I === "clear") return null;
    if (I === "today") return /* @__PURE__ */ new Date();
  }
  const f = /* @__PURE__ */ z(() => Ia[o(l)].component);
  var m = Gc(), w = E(m), k = E(w);
  Cc(k, {
    get date() {
      return r();
    },
    get part() {
      return a();
    },
    get type() {
      return o(l);
    },
    onshift: u
  });
  var b = U(k, 2), y = E(b);
  Et(y, () => o(f), (I, p) => {
    p(I, {
      get value() {
        return e.value;
      },
      get current() {
        return r();
      },
      set current(P) {
        r(P);
      },
      get part() {
        return a();
      },
      get markers() {
        return i();
      },
      onchange: h,
      oncancel: v,
      onshift: u
    });
  });
  var x = U(y, 2);
  R(x, () => o(l) === "month" && o(d).length > 0, (I) => {
    var p = Vc();
    Se(p, 21, () => o(d), ot, (P, A) => {
      var N = Kc(), V = E(N);
      Ur(V, {
        onclick: (W) => c(W, _(o(A))),
        children: (W, J) => {
          var L = ke();
          F(() => ee(L, t(o(A)))), g(W, L);
        },
        $$slots: { default: !0 }
      }), g(P, N);
    }), g(I, p);
  }), F(() => we(m, `wx-calendar ${(a() !== "normal" && a() !== "both" ? "wx-part" : "") ?? ""} svelte-avh7y`)), g(n, m), re();
}
function Wc(n, e) {
  ne(e, !0);
  let t = S(e, "value", 15), r = S(e, "current", 15), a = S(e, "markers", 3, null), i = S(e, "buttons", 19, () => ["clear", "today"]);
  function s(d) {
    (!r() || d) && r(t() ? new Date(t()) : /* @__PURE__ */ new Date()), r().setDate(1);
  }
  s(t());
  function l(d) {
    const c = d.value;
    c ? (t(new Date(c)), s(!0)) : t(null), e.onchange && e.onchange({ value: t() });
  }
  At(n, {
    children: (d, c) => {
      pn(d, {
        get value() {
          return t();
        },
        get current() {
          return r();
        },
        set current(v) {
          r(v);
        },
        get markers() {
          return a();
        },
        get buttons() {
          return i();
        },
        onchange: l
      });
    },
    $$slots: { default: !0 }
  }), re();
}
var jc = (n, e) => B(e, !0), Jc = /* @__PURE__ */ C('<div class="wx-datepicker svelte-1k3rk87"><!> <!></div>');
function Zc(n, e) {
  ne(e, !0);
  let t = S(e, "value", 15), r = S(e, "id", 19, qe), a = S(e, "disabled", 3, !1), i = S(e, "error", 3, !1), s = S(e, "width", 3, "unset"), l = S(e, "align", 3, "start"), d = S(e, "placeholder", 3, ""), c = S(e, "format", 3, ""), v = S(e, "buttons", 19, () => ["clear", "today"]), u = S(e, "css", 3, ""), h = S(e, "title", 3, ""), _ = S(e, "editable", 3, !1), f = S(e, "clear", 3, !1);
  const { calendar: m, formats: w } = me("wx-i18n").getRaw(), k = c() || w.dateFormat;
  let b = typeof k == "function" ? k : Ct(k, m), y = ae(void 0);
  function x() {
    B(y, !1);
  }
  function I(J) {
    const L = J === t() || J && t() && J.valueOf() === t().valueOf() || !J && !t();
    t(J), L || e.onchange && e.onchange({ value: t() }), setTimeout(x, 1);
  }
  const p = /* @__PURE__ */ z(() => t() ? b(t()) : "");
  function P({ value: J, input: L }) {
    if (!_() && !f() || L) return;
    let D = typeof _() == "function" ? _()(J) : J ? new Date(J) : null;
    D = isNaN(D) ? t() || null : D || null, I(D);
  }
  var A = Jc();
  He("scroll", An, x), A.__click = [jc, y];
  var N = E(A), V = /* @__PURE__ */ z(() => !_());
  Jn(N, {
    get css() {
      return u();
    },
    get title() {
      return h();
    },
    get value() {
      return o(p);
    },
    get id() {
      return r();
    },
    get readonly() {
      return o(V);
    },
    get disabled() {
      return a();
    },
    get error() {
      return i();
    },
    get placeholder() {
      return d();
    },
    oninput: x,
    onchange: P,
    icon: "wxi-calendar",
    inputStyle: "cursor: pointer; width: 100%; padding-right: calc(var(--wx-input-icon-size) + var(--wx-input-icon-indent) * 2);",
    get clear() {
      return f();
    }
  });
  var W = U(N, 2);
  R(W, () => o(y) && !a(), (J) => {
    var L = /* @__PURE__ */ z(() => !!l());
    Mt(J, {
      oncancel: x,
      get width() {
        return s();
      },
      get align() {
        return l();
      },
      get autoFit() {
        return o(L);
      },
      children: (D, M) => {
        Wc(D, {
          get buttons() {
            return v();
          },
          get value() {
            return t();
          },
          onchange: (q) => I(q.value)
        });
      },
      $$slots: { default: !0 }
    });
  }), g(n, A), re();
}
ge(["click"]);
function Qc(n, e) {
  let t = S(e, "value", 15), r = /* @__PURE__ */ hn(e, ["$$slots", "$$events", "$$legacy", "value"]);
  At(n, {
    children: (a, i) => {
      Zc(a, We(
        {
          get value() {
            return t();
          },
          set value(s) {
            t(s);
          }
        },
        () => r
      ));
    },
    $$slots: { default: !0 }
  });
}
var Xc = /* @__PURE__ */ C('<div class="wx-rangecalendar svelte-wlbsu6"><div class="wx-half svelte-wlbsu6"><!></div> <div class="wx-half svelte-wlbsu6"><!></div></div>');
function $c(n, e) {
  ne(e, !0);
  let t = S(e, "start", 15), r = S(e, "end", 15), a = S(e, "months", 3, 2), i = S(e, "markers", 3, null), s = S(e, "buttons", 19, () => ["clear", "today"]);
  function l(m, w, k) {
    const b = new Date(m);
    return b.setMonth(b.getMonth() + w), b;
  }
  let d = ae(void 0), c = ae(void 0);
  ti(() => {
    t(), e.current, pe(() => {
      o(d) || v(t() ? new Date(t()) : e.current || /* @__PURE__ */ new Date());
    });
  });
  function v(m) {
    B(d, Q(m)), o(d).setDate(1), o(d) && B(c, Q(l(o(d), 1)));
  }
  function u(m) {
    B(c, Q(m)), o(c).setDate(1), o(c) && B(d, Q(l(o(c), -1)));
  }
  function h(m) {
    f(m), t() && v(new Date(t()));
  }
  function _(m) {
    f(m), r() && u(new Date(r()));
  }
  function f(m) {
    const w = m.value, k = w === -1;
    k || (m.select ? !t() || r() ? (t(w), r(null)) : t() > w ? (r(t()), t(w)) : r(w) : w ? (t(new Date(w)), r(new Date(w))) : t(r(null))), (k || !s().includes("done")) && e.onchange && e.onchange({ start: t(), end: r() });
  }
  At(n, {
    children: (m, w) => {
      var k = $(), b = G(k);
      R(
        b,
        () => a() == 1,
        (y) => {
          var x = /* @__PURE__ */ z(() => ({ start: t(), end: r() }));
          pn(y, {
            get value() {
              return o(x);
            },
            get current() {
              return o(d);
            },
            set current(I) {
              B(d, Q(I));
            },
            get markers() {
              return i();
            },
            get buttons() {
              return s();
            },
            part: "both",
            onchange: h
          });
        },
        (y) => {
          var x = Xc(), I = E(x), p = E(I), P = /* @__PURE__ */ z(() => ({ start: t(), end: r() }));
          pn(p, {
            get value() {
              return o(P);
            },
            get current() {
              return o(d);
            },
            set current(W) {
              B(d, Q(W));
            },
            get markers() {
              return i();
            },
            buttons: !1,
            part: "left",
            onshift: () => v(o(d)),
            onchange: h
          });
          var A = U(I, 2), N = E(A), V = /* @__PURE__ */ z(() => ({ start: t(), end: r() }));
          pn(N, {
            get value() {
              return o(V);
            },
            get current() {
              return o(c);
            },
            set current(W) {
              B(c, Q(W));
            },
            get markers() {
              return i();
            },
            get buttons() {
              return s();
            },
            part: "right",
            onshift: () => u(o(c)),
            onchange: _
          }), g(y, x);
        }
      ), g(m, k);
    },
    $$slots: { default: !0 }
  }), re();
}
ge(["click"]);
var ed = /* @__PURE__ */ C('<i role="img"><!></i>'), td = /* @__PURE__ */ C("<i></i>");
function De(n, e) {
  ne(e, !0);
  let t = S(e, "css", 3, ""), r = S(e, "title", 3, "");
  var a = $(), i = G(a);
  R(
    i,
    () => e.children,
    (s) => {
      var l = ed();
      l.__click = function(...c) {
        e.onclick?.apply(this, c);
      };
      var d = E(l);
      Ie(d, () => e.children), F(() => {
        Z(l, "title", r()), we(l, `wx-icon ${t() ?? ""} svelte-12ezr0r`);
      }), g(s, l);
    },
    (s) => {
      var l = td();
      l.__click = function(...d) {
        e.onclick?.apply(this, d);
      }, F(() => {
        Z(l, "title", r()), we(l, `wx-icon ${t() ?? ""} svelte-12ezr0r`);
      }), g(s, l);
    }
  ), g(n, a), re();
}
ge(["click"]);
var nd = (n, e, t) => e(o(t).id, n), rd = /* @__PURE__ */ C('<i class="wx-icon wxi-close svelte-1xr1yzt"></i>'), ad = /* @__PURE__ */ C('<div class="wx-tag svelte-1xr1yzt"><!> <!></div>'), id = /* @__PURE__ */ C("<!> <!>", 1), od = /* @__PURE__ */ C('<div class="wx-multicombo svelte-1xr1yzt"><div class="wx-wrapper svelte-1xr1yzt"><div class="wx-tags svelte-1xr1yzt"></div> <div class="wx-select svelte-1xr1yzt"><input type="text" class="svelte-1xr1yzt"> <i class="wx-icon wxi-angle-down svelte-1xr1yzt"></i></div></div> <!></div>');
function sd(n, e) {
  ne(e, !0);
  let t = S(e, "id", 19, qe), r = S(e, "value", 31, () => Q([])), a = S(e, "options", 19, () => []), i = S(e, "textOptions", 3, null), s = S(e, "textField", 3, "label"), l = S(e, "placeholder", 3, ""), d = S(e, "title", 3, ""), c = S(e, "disabled", 3, !1), v = S(e, "error", 3, !1), u = S(e, "checkboxes", 3, !1), h = ae(""), _ = /* @__PURE__ */ z(() => r() ? (i() || a()).filter((M) => r().includes(M.id)) : []), f = /* @__PURE__ */ z(() => {
    const M = a();
    return o(h) ? M.filter((q) => q[s()].toLowerCase().includes(o(h).toLowerCase())) : M;
  }), m = ae(!1), w = ae(void 0), k = null, b = null;
  function y(M) {
    k = M.navigate, b = M.keydown;
  }
  function x() {
    o(f).length ? k(0) : k(null);
  }
  function I(M) {
    const { id: q } = M;
    if (q) {
      let Y;
      r() ? r().includes(q) ? Y = r().filter((H) => H !== q) : Y = [...r(), q] : Y = [q], r(Y), e.onchange && e.onchange({ value: r() }), o(w).focus();
    }
  }
  function p(M, q) {
    q && q.stopPropagation(), r(r().filter((Y) => Y !== M)), e.onchange && e.onchange({ value: r() });
  }
  const P = () => r() && r().length ? o(f).findIndex((M) => M.id === r()[0]) : 0;
  function A() {
    c() || (o(w).focus(), k(P()));
  }
  var N = od();
  N.__click = A, N.__keydown = (M) => b(M, P());
  var V = E(N), W = E(V);
  Se(W, 21, () => o(_), (M) => M.id, (M, q) => {
    var Y = ad(), H = E(Y);
    R(
      H,
      () => e.children,
      (O) => {
        var K = $(), j = G(K);
        Ie(j, () => e.children, () => ({ option: o(q) })), g(O, K);
      },
      (O) => {
        var K = ke();
        F(() => ee(K, o(q)[s()])), g(O, K);
      }
    );
    var T = U(H, 2);
    R(T, () => !c(), (O) => {
      var K = rd();
      K.__click = [nd, p, q], g(O, K);
    }), g(M, Y);
  });
  var J = U(W, 2), L = E(J);
  L.__input = x, Te(L, (M) => B(w, M), () => o(w));
  var D = U(V, 2);
  R(D, () => !c(), (M) => {
    Li(M, {
      get items() {
        return o(f);
      },
      onready: y,
      onselect: I,
      children: (Y, H) => {
        let T = () => H?.().option;
        var O = id(), K = G(O);
        R(K, u, (te) => {
          var ie = /* @__PURE__ */ z(() => r() && r().includes(T().id));
          Bl(te, {
            style: "margin-right: 8px; pointer-events: none;",
            get name() {
              return T().id;
            },
            get value() {
              return o(ie);
            }
          });
        });
        var j = U(K, 2);
        R(
          j,
          () => e.children,
          (te) => {
            e.children(te, () => ({ option: T() }));
          },
          (te) => {
            var ie = ke();
            F(() => ee(ie, T()[s()])), g(te, ie);
          }
        ), g(Y, O);
      },
      $$slots: { default: !0 }
    });
  }), F(() => {
    Z(N, "title", d()), he(N, "wx-error", v()), he(N, "wx-disabled", c()), he(N, "wx-not-empty", o(_).length), he(N, "wx-focus", o(m) && !c()), Z(L, "id", t()), Z(L, "placeholder", l()), L.disabled = c();
  }), He("focus", L, () => B(m, !0)), He("blur", L, () => B(m, !1)), tn(L, () => o(h), (M) => B(h, M)), g(n, N), re();
}
ge(["click", "keydown", "input"]);
ge(["input", "click"]);
ge(["change"]);
ge(["click", "keydown"]);
ge(["click"]);
function ld(n, e, t) {
  e(""), t.onchange && t.onchange({ value: e() });
}
function cd(n, e, t) {
  e.onchange && e.onchange({ value: t() });
}
var dd = /* @__PURE__ */ C('<option class="svelte-7lms0u"> </option>'), ud = /* @__PURE__ */ C('<div class="wx-placeholder svelte-7lms0u"> </div>'), vd = /* @__PURE__ */ C('<i class="wx-icon wxi-close svelte-7lms0u"></i>'), fd = /* @__PURE__ */ C('<i class="wx-icon wxi-angle-down svelte-7lms0u"></i>'), hd = /* @__PURE__ */ C('<div class="wx-select svelte-7lms0u"><select class="svelte-7lms0u"></select> <!> <!></div>');
function Oi(n, e) {
  ne(e, !0);
  let t = S(e, "value", 15, ""), r = S(e, "options", 19, () => []), a = S(e, "placeholder", 3, ""), i = S(e, "title", 3, ""), s = S(e, "disabled", 3, !1), l = S(e, "error", 3, !1), d = S(e, "textField", 3, "label"), c = S(e, "clear", 3, !1), v = S(e, "id", 19, qe);
  var u = hd(), h = E(u);
  h.__change = [cd, e, t], Se(h, 21, r, (m) => m.id, (m, w) => {
    var k = dd(), b = {}, y = E(k);
    F(() => {
      b !== (b = o(w).id) && (k.value = (k.__value = o(w).id) == null ? "" : o(w).id), ee(y, o(w)[d()]);
    }), g(m, k);
  });
  var _ = U(h, 2);
  R(_, () => !t() && t() !== 0, (m) => {
    var w = ud(), k = E(w);
    F(() => ee(k, a())), g(m, w);
  });
  var f = U(_, 2);
  R(
    f,
    () => c() && !s() && t(),
    (m) => {
      var w = vd();
      w.__click = [ld, t, e], g(m, w);
    },
    (m) => {
      var w = fd();
      g(m, w);
    }
  ), F(() => {
    Z(h, "id", v()), h.disabled = s(), Z(h, "title", i()), he(h, "wx-error", l());
  }), ns(h, t), g(n, u), re();
}
ge(["change", "click"]);
function md({ target: n }, e, t) {
  e(n.value * 1), t.onchange && t.onchange({ value: e() });
}
var gd = /* @__PURE__ */ C('<label class="svelte-vxce8u"> </label>'), _d = /* @__PURE__ */ C('<div class="wx-slider svelte-vxce8u"><!> <div class="svelte-vxce8u"><input type="range" class="svelte-vxce8u"></div></div>');
function wd(n, e) {
  ne(e, !0);
  let t = S(e, "id", 19, qe), r = S(e, "label", 3, ""), a = S(e, "width", 3, ""), i = S(e, "min", 3, 0), s = S(e, "max", 3, 100), l = S(e, "value", 15, 0), d = S(e, "step", 3, 1), c = S(e, "title", 3, ""), v = S(e, "disabled", 3, !1), u = /* @__PURE__ */ z(() => () => v() ? "" : `background: linear-gradient(90deg, var(--wx-slider-primary) 0% ${o(h)}, var(--wx-slider-background) ${o(h)} 100%);`), h = /* @__PURE__ */ z(() => (l() - i()) / (s() - i()) * 100 + "%"), _ = l();
  function f({ target: x }) {
    l(x.value || 0), _ !== l() && (e.onchange && e.onchange({ value: l(), previous: _, input: !0 }), _ = l());
  }
  var m = _d(), w = E(m);
  R(w, r, (x) => {
    var I = gd(), p = E(I);
    F(() => {
      Z(I, "for", t()), ee(p, r());
    }), g(x, I);
  });
  var k = U(w, 2), b = E(k);
  b.__input = f, b.__change = [md, l, e];
  const y = /* @__PURE__ */ z(() => o(u)());
  F(() => {
    Z(m, "style", a() ? `width: ${a()}` : ""), Z(m, "title", c()), Z(b, "id", t()), Z(b, "min", i()), Z(b, "max", s()), Z(b, "step", d()), b.disabled = v(), Bt(b, l()), Z(b, "style", o(y));
  }), g(n, m), re();
}
ge(["input", "change"]);
ge(["change"]);
ge(["click"]);
ge(["click", "input"]);
const xd = (n) => n;
function Yr(n, { delay: e = 0, duration: t = 400, easing: r = xd } = {}) {
  const a = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: r,
    css: (i) => `opacity: ${i * a}`
  };
}
function yd(n, e) {
  e().remove && e().remove();
}
var bd = /* @__PURE__ */ C('<div role="status" aria-live="polite"><div class="wx-text svelte-764ko7"> </div> <div class="wx-button svelte-764ko7"><i class="wxi-close svelte-764ko7"></i></div></div>');
function pd(n, e) {
  ne(e, !0);
  let t = S(e, "notice", 19, () => ({}));
  var r = bd(), a = E(r), i = E(a), s = U(a, 2), l = E(s);
  l.__click = [yd, t], F(() => {
    we(r, `wx-notice wx-${(t().type ? t().type : "") ?? ""} svelte-764ko7`), ee(i, t().text);
  }), Fr(3, r, () => Yr), g(n, r), re();
}
ge(["click"]);
var kd = /* @__PURE__ */ C('<div class="wx-notices svelte-ervf1h"></div>');
function Sd(n, e) {
  let t = S(e, "data", 19, () => []);
  var r = kd();
  Se(r, 21, t, (a) => a.id, (a, i) => {
    pd(a, {
      get notice() {
        return o(i);
      }
    });
  }), g(n, r);
}
function Id(n, e) {
  switch (n.code) {
    case "Enter": {
      const t = n.target.tagName;
      if (t === "TEXTAREA" || t === "BUTTON") return;
      e.onconfirm && e.onconfirm({ ev: n });
      break;
    }
    case "Escape":
      e.oncancel && e.oncancel({ ev: n });
      break;
  }
}
var Cd = /* @__PURE__ */ C('<div class="wx-header svelte-at32q2"> </div>'), Ed = /* @__PURE__ */ C('<div class="wx-button svelte-at32q2"><!></div>'), Dd = /* @__PURE__ */ C('<div class="wx-buttons svelte-at32q2"></div>'), Md = /* @__PURE__ */ C('<div class="wx-modal svelte-at32q2" tabindex="0"><div class="wx-window svelte-at32q2"><!> <div><!></div> <!></div></div>');
function Ad(n, e) {
  ne(e, !0);
  const t = me("wx-i18n").getGroup("core"), r = S(e, "title", 3, ""), a = S(e, "buttons", 19, () => ["cancel", "ok"]);
  function i(_, f) {
    const m = { ev: _, button: f };
    f === "cancel" ? e.oncancel && e.oncancel(m) : e.onconfirm && e.onconfirm(m);
  }
  let s;
  ht(() => {
    s.focus();
  });
  var l = Md();
  l.__keydown = [Id, e];
  var d = E(l), c = E(d);
  R(
    c,
    () => e.header,
    (_) => {
      var f = $(), m = G(f);
      Ie(m, () => e.header), g(_, f);
    },
    (_) => {
      var f = $(), m = G(f);
      R(
        m,
        r,
        (w) => {
          var k = Cd(), b = E(k);
          F(() => ee(b, r())), g(w, k);
        },
        null,
        !0
      ), g(_, f);
    }
  );
  var v = U(c, 2), u = E(v);
  Ie(u, () => e.children);
  var h = U(v, 2);
  R(
    h,
    () => e.footer,
    (_) => {
      var f = $(), m = G(f);
      Ie(m, () => e.footer), g(_, f);
    },
    (_) => {
      var f = Dd();
      Se(f, 21, a, ot, (m, w) => {
        var k = Ed(), b = E(k), y = /* @__PURE__ */ z(() => `block ${o(w) === "ok" ? "primary" : "secondary"}`);
        Re(b, {
          get type() {
            return o(y);
          },
          onclick: (x) => i(x, o(w)),
          children: (x, I) => {
            var p = ke();
            F(() => ee(p, t(o(w)))), g(x, p);
          },
          $$slots: { default: !0 }
        }), g(m, k);
      }), g(_, f);
    }
  ), Te(l, (_) => s = _, () => s), Fr(3, l, () => Yr, () => ({ duration: 100 })), g(n, l), re();
}
ge(["keydown"]);
function Td(n, e) {
  let t = /* @__PURE__ */ hn(e, ["$$slots", "$$events", "$$legacy"]);
  At(n, {
    children: (r, a) => {
      Ad(r, We(() => t));
    },
    $$slots: { default: !0 }
  });
}
var Pd = /* @__PURE__ */ C("<!> <!> <!>", 1);
function Rd(n, e) {
  ne(e, !0);
  let t = ae(null);
  function r(v) {
    return B(t, Q({ ...v })), new Promise((u, h) => {
      o(t).resolve = (_) => {
        B(t, null), u(_);
      }, o(t).reject = (_) => {
        B(t, null), h(_);
      };
    });
  }
  let a = ae(Q([]));
  function i(v) {
    v = { ...v }, v.id = v.id || qe(), v.remove = () => B(a, Q(o(a).filter((u) => u.id !== v.id))), v.expire != -1 && setTimeout(v.remove, v.expire || 5100), B(a, Q([...o(a), v]));
  }
  wt("wx-helpers", { showNotice: i, showModal: r });
  var s = Pd(), l = G(s);
  Ie(l, () => e.children ?? Ce);
  var d = U(l, 2);
  R(d, () => o(t), (v) => {
    Td(v, {
      get title() {
        return o(t).title;
      },
      get buttons() {
        return o(t).buttons;
      },
      get onconfirm() {
        return o(t).resolve;
      },
      get oncancel() {
        return o(t).reject;
      },
      children: (u, h) => {
        var _ = ke();
        F(() => ee(_, o(t).message)), g(u, _);
      },
      $$slots: { default: !0 }
    });
  });
  var c = U(d, 2);
  Sd(c, {
    get data() {
      return o(a);
    }
  }), g(n, s), re();
}
var Ld = /* @__PURE__ */ C('<label class="svelte-eqvtjk"> </label>'), Fd = /* @__PURE__ */ C("<div><!> <div><!></div></div>");
function je(n, e) {
  ne(e, !0);
  let t = S(e, "label", 3, ""), r = S(e, "position", 3, ""), a = S(e, "width", 3, ""), i = S(e, "error", 3, !1), s = S(e, "type", 3, ""), l = S(e, "required", 3, !1), d = qe();
  var c = Fd(), v = E(c);
  R(v, t, (_) => {
    var f = Ld();
    Z(f, "for", d);
    var m = E(f);
    F(() => ee(m, t())), g(_, f);
  });
  var u = U(v, 2), h = E(u);
  Ie(h, () => e.children ?? Ce, () => ({ id: d })), F(() => {
    we(c, `wx-field wx-${r() ?? ""} svelte-eqvtjk`), Z(c, "style", a() ? `width: ${a()}` : ""), he(c, "wx-error", i()), he(c, "wx-required", l()), we(u, `wx-field-control wx-${s() ?? ""} svelte-eqvtjk`);
  }), g(n, c), re();
}
ge(["click"]);
var Od = /* @__PURE__ */ C('<div class="wx-modal svelte-1ki3q24"><div class="wx-window svelte-1ki3q24"><!></div></div>');
function zd(n, e) {
  ne(e, !0);
  var t = Od(), r = E(t), a = E(r);
  Ie(a, () => e.children ?? Ce), Fr(3, t, () => Yr, () => ({ duration: 100 })), g(n, t), re();
}
var Bd = /* @__PURE__ */ C('<div class="wx-portal svelte-1dixdmq"><div><!></div></div>');
function Kr(n, e) {
  ne(e, !0);
  let t = null, r = S(e, "theme", 15, ""), a = [];
  const i = (v) => {
    a && a.push(v);
  };
  r() === "" && r(me("wx-theme"));
  function s(v) {
    const u = ut.getTopNode(v);
    for (; v !== u && !v.getAttribute("data-wx-portal-root"); )
      v = v.parentNode;
    return v;
  }
  ht(() => {
    (e.target || s(t)).appendChild(t), a && a.forEach((u) => u());
  }), zr(() => {
    t && t.parentNode && t.parentNode.removeChild(t);
  });
  var l = Bd(), d = E(l), c = E(d);
  return Ie(c, () => e.children ?? Ce, () => ({ mount: i })), Te(d, (v) => t = v, () => t), F(() => we(d, `wx-${r() ?? ""}-theme svelte-1dixdmq`)), g(n, l), re({ mount: i });
}
function Nd(n) {
  var e = $(), t = G(e);
  Gn(
    t,
    () => `<style>
@font-face {
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
src: local(''),
    url('https://cdn.svar.dev/fonts/roboto/regular.woff2') format('woff2'),
    url('https://cdn.svar.dev/fonts/roboto/regular.woff') format('woff');
}
@font-face {
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
src: local(''),
    url('https://cdn.svar.dev/fonts/roboto/500.woff2') format('woff2'),
    url('https://cdn.svar.dev/fonts/roboto/500.woff') format('woff');
}
</style>`
  ), g(n, e);
}
var Hd = /* @__PURE__ */ C('<link rel="preconnect" href="https://cdn.svar.dev" crossorigin=""> <!> <link rel="stylesheet" href="https://cdn.svar.dev/fonts/wxi/wx-icons.css">', 1), qd = /* @__PURE__ */ C('<div class="wx-material-theme" style="height:100%"><!></div>');
function Ca(n, e) {
  ne(e, !0);
  let t = S(e, "fonts", 3, !0);
  wt("wx-theme", "material");
  var r = $();
  Rr((i) => {
    var s = $(), l = G(s);
    R(l, t, (d) => {
      var c = Hd(), v = U(G(c), 2);
      Nd(v), g(d, c);
    }), g(i, s);
  });
  var a = G(r);
  R(a, () => e.children, (i) => {
    var s = qd(), l = E(s);
    Ie(l, () => e.children), g(i, s);
  }), g(n, r), re();
}
function zi(n) {
  var e = $(), t = G(e);
  Gn(
    t,
    () => `<style>
@font-face {
font-family: 'Open Sans';
font-style: normal;
font-weight: 500;
src: local(''),
      url('https://cdn.svar.dev/fonts/open-sans/500.woff2') format('woff2'),
      url('https://cdn.svar.dev/fonts/open-sans/500.woff') format('woff');
}
@font-face {
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
src: local(''),
      url('https://cdn.svar.dev/fonts/open-sans/regular.woff2') format('woff2'),
      url('https://cdn.svar.dev/fonts/open-sans/regular.woff') format('woff');
}
@font-face {
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
src: local(''),
      url('https://cdn.svar.dev/fonts/open-sans/600.woff2') format('woff2'),
      url('https://cdn.svar.dev/fonts/open-sans/600.woff') format('woff');
}
@font-face {
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
src: local(''),
      url('https://cdn.svar.dev/fonts/open-sans/700.woff2') format('woff2'),
      url('https://cdn.svar.dev/fonts/open-sans/700.woff') format('woff');
}
  </style>`
  ), g(n, e);
}
var Ud = /* @__PURE__ */ C('<link rel="preconnect" href="https://cdn.svar.dev" crossorigin=""> <!> <link rel="stylesheet" href="https://cdn.svar.dev/fonts/wxi/wx-icons.css">', 1), Yd = /* @__PURE__ */ C('<div class="wx-willow-theme" style="height:100%"><!></div>');
function Ea(n, e) {
  ne(e, !0);
  let t = S(e, "fonts", 3, !0);
  wt("wx-theme", "willow");
  var r = $();
  Rr((i) => {
    var s = $(), l = G(s);
    R(l, t, (d) => {
      var c = Ud(), v = U(G(c), 2);
      zi(v), g(d, c);
    }), g(i, s);
  });
  var a = G(r);
  R(a, () => e.children, (i) => {
    var s = Yd(), l = E(s);
    Ie(l, () => e.children), g(i, s);
  }), g(n, r), re();
}
var Kd = /* @__PURE__ */ C('<link rel="preconnect" href="https://cdn.svar.dev" crossorigin=""> <!> <link rel="stylesheet" href="https://cdn.svar.dev/fonts/wxi/wx-icons.css">', 1), Vd = /* @__PURE__ */ C('<div class="wx-willow-dark-theme" style="height:100%"><!></div>');
function Da(n, e) {
  ne(e, !0);
  let t = S(e, "fonts", 3, !0);
  wt("wx-theme", "willow-dark");
  var r = $();
  Rr((i) => {
    var s = $(), l = G(s);
    R(l, t, (d) => {
      var c = Kd(), v = U(G(c), 2);
      zi(v), g(d, c);
    }), g(i, s);
  });
  var a = G(r);
  R(a, () => e.children, (i) => {
    var s = Vd(), l = E(s);
    Ie(l, () => e.children), g(i, s);
  }), g(n, r), re();
}
var Gd = Array.isArray, Wd = Object.defineProperty;
const tr = () => {
};
function jd(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
let gr = !1, _r = [];
function Jd() {
  gr = !1;
  const n = _r.slice();
  _r = [], jd(n);
}
function Zd(n) {
  gr || (gr = !0, queueMicrotask(Jd)), _r.push(n);
}
function Qd(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function Xd(n) {
  try {
    return n();
  } finally {
  }
}
function $d(n, e, t, r) {
  function a(i) {
    if (r.capture || tu.call(e, i), !i.cancelBubble)
      return Xd(() => t.call(this, i));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Zd(() => {
    e.addEventListener(n, a, r);
  }) : e.addEventListener(n, a, r), a;
}
function eu(n, e, t, r = {}) {
  var a = $d(e, n, t, r);
  return () => {
    n.removeEventListener(e, a, r);
  };
}
function tu(n) {
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = n.type, a = n.composedPath?.() || [], i = (
    /** @type {null | Element} */
    a[0] || n.target
  ), s = 0, l = n.__root;
  if (l) {
    var d = a.indexOf(l);
    if (d !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n.__root = e;
      return;
    }
    var c = a.indexOf(e);
    if (c === -1)
      return;
    d <= c && (s = d);
  }
  if (i = /** @type {Element} */
  a[s] || n.target, i !== e) {
    Wd(n, "currentTarget", {
      configurable: !0,
      get() {
        return i || t;
      }
    });
    try {
      for (var v, u = []; i !== null; ) {
        var h = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var _ = i["__" + r];
          if (_ !== void 0 && !/** @type {any} */
          i.disabled)
            if (Gd(_)) {
              var [f, ...m] = _;
              f.apply(i, [n, ...m]);
            } else
              _.call(i, n);
        } catch (w) {
          v ? u.push(w) : v = w;
        }
        if (n.cancelBubble || h === e || h === null)
          break;
        i = h;
      }
      if (v) {
        for (let w of u)
          queueMicrotask(() => {
            throw w;
          });
        throw v;
      }
    } finally {
      n.__root = e, delete n.currentTarget;
    }
  }
}
const Ht = [];
function nu(n, e = tr) {
  let t = null;
  const r = /* @__PURE__ */ new Set();
  function a(l) {
    if (Qd(n, l) && (n = l, t)) {
      const d = !Ht.length;
      for (const c of r)
        c[1](), Ht.push(c, n);
      if (d) {
        for (let c = 0; c < Ht.length; c += 2)
          Ht[c][0](Ht[c + 1]);
        Ht.length = 0;
      }
    }
  }
  function i(l) {
    a(l(
      /** @type {T} */
      n
    ));
  }
  function s(l, d = tr) {
    const c = [l, d];
    return r.add(c), r.size === 1 && (t = e(a, i) || tr), l(
      /** @type {T} */
      n
    ), () => {
      r.delete(c), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: a, update: i, subscribe: s };
}
(/* @__PURE__ */ new Date()).valueOf();
function ru(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length) return !1;
  for (const t in e) {
    const r = n[t], a = e[t];
    if (!Rn(r, a)) return !1;
  }
  return !0;
}
function Rn(n, e) {
  if (typeof n == "number" || typeof n == "string" || typeof n == "boolean" || n === null) return n === e;
  if (typeof n != typeof e || (n === null || e === null) && n !== e || n instanceof Date && e instanceof Date && n.getTime() !== e.getTime())
    return !1;
  if (typeof n == "object")
    if (Array.isArray(n) && Array.isArray(e)) {
      if (n.length !== e.length) return !1;
      for (let r = n.length - 1; r >= 0; r--)
        if (!Rn(n[r], e[r])) return !1;
      return !0;
    } else
      return ru(n, e);
  return n === e;
}
function wr(n) {
  if (typeof n != "object" || n === null) return n;
  if (n instanceof Date) return new Date(n);
  if (n instanceof Array) return n.map(wr);
  const e = {};
  for (const t in n)
    e[t] = wr(n[t]);
  return e;
}
function xn(n, e) {
  return e ? wr(n) : { ...n };
}
function au(n, e, t) {
  const r = t && t.deepCopy;
  let a = !1, i = null;
  const s = nu(n), { set: l } = s;
  let d = xn(n, r);
  return s.set = function(c) {
    Rn(d, c) || (d = xn(c, r), l(c));
  }, s.update = function(c) {
    const v = c(xn(d, r));
    Rn(d, v) || (d = xn(v, r), l(v));
  }, s.reset = function(c) {
    a = !1, d = {}, s.set(c);
  }, s.subscribe((c) => {
    a ? c && (!t || !t.debounce ? e(c) : (clearTimeout(i), i = setTimeout(() => e(c), t.debounce))) : a = !0;
  }), s;
}
const iu = {
  addEvent: eu
};
Ai(iu);
const qt = [];
function Vr(n, e = Ce) {
  let t = null;
  const r = /* @__PURE__ */ new Set();
  function a(l) {
    if (Nn(n, l) && (n = l, t)) {
      const d = !qt.length;
      for (const c of r)
        c[1](), qt.push(c, n);
      if (d) {
        for (let c = 0; c < qt.length; c += 2)
          qt[c][0](qt[c + 1]);
        qt.length = 0;
      }
    }
  }
  function i(l) {
    a(l(
      /** @type {T} */
      n
    ));
  }
  function s(l, d = Ce) {
    const c = [l, d];
    return r.add(c), r.size === 1 && (t = e(a, i) || Ce), l(
      /** @type {T} */
      n
    ), () => {
      r.delete(c), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: a, update: i, subscribe: s };
}
let Bi = (/* @__PURE__ */ new Date()).valueOf();
const Gr = () => Bi++;
function Zt() {
  return "temp://" + Bi++;
}
const Ni = 2;
class ou {
  constructor(e) {
    e && (this._writable = e.writable, this._async = e.async), this._values = {}, this._state = {};
  }
  setState(e, t = 0) {
    const r = {};
    return this._wrapProperties(e, this._state, this._values, "", r, t), r;
  }
  getState() {
    return this._values;
  }
  getReactive() {
    return this._state;
  }
  _wrapProperties(e, t, r, a, i, s) {
    for (const l in e) {
      const d = t[l], c = r[l], v = e[l];
      if (d && (c === v && typeof v != "object" || v instanceof Date && c instanceof Date && c.getTime() === v.getTime())) continue;
      const u = a + (a ? "." : "") + l;
      d ? (d.__parse(v, u, i, s) && (r[l] = v), s & Ni ? i[u] = d.__trigger : d.__trigger()) : (v && v.__reactive ? t[l] = this._wrapNested(v, v, u, i) : t[l] = this._wrapWritable(v), r[l] = v), i[u] = i[u] || null;
    }
  }
  _wrapNested(e, t, r, a) {
    const i = this._wrapWritable(e);
    return this._wrapProperties(e, i, t, r, a, 0), i.__parse = (s, l, d, c) => (this._wrapProperties(s, i, t, l, d, c), !1), i;
  }
  _wrapWritable(e) {
    const t = [], r = function() {
      for (let a = 0; a < t.length; a++) t[a](e);
    };
    return { subscribe: (a) => (t.push(a), this._async ? setTimeout(a, 1, e) : a(e), () => {
      const i = t.indexOf(a);
      i >= 0 && t.splice(i, 1);
    }), __trigger: () => {
      t.length && (this._async ? setTimeout(r, 1) : r());
    }, __parse: function(a) {
      return e = a, !0;
    } };
  }
}
class su {
  constructor(e, t, r, a) {
    typeof e == "function" ? this._setter = e : this._setter = e.setState.bind(e), this._routes = t, this._parsers = r, this._prev = {}, this._triggers = /* @__PURE__ */ new Map(), this._sources = /* @__PURE__ */ new Map(), this._routes.forEach((i) => {
      i.in.forEach((s) => {
        const l = this._triggers.get(s) || [];
        l.push(i), this._triggers.set(s, l);
      }), i.out.forEach((s) => {
        const l = this._sources.get(s) || {};
        i.in.forEach((d) => l[d] = !0), this._sources.set(s, l);
      });
    }), this._routes.forEach((i) => {
      i.length = Math.max(...i.in.map((s) => Hi(s, this._sources, 1)));
    }), this._bus = a;
  }
  init(e) {
    const t = {};
    for (const r in e) if (this._prev[r] !== e[r]) {
      const a = this._parsers[r];
      t[r] = a ? a(e[r]) : e[r];
    }
    this._prev = this._prev ? { ...this._prev, ...e } : { ...e }, this.setState(t), this._bus && this._bus.exec("init-state", t);
  }
  setStateAsync(e) {
    const t = this._setter(e, Ni);
    return this._async ? Object.assign(this._async.signals, t) : this._async = { signals: t, timer: setTimeout(this._applyState.bind(this), 1) }, t;
  }
  _applyState() {
    const e = this._async;
    if (e) {
      this._async = null, this._triggerUpdates(e.signals, []);
      for (const t in e.signals) {
        const r = e.signals[t];
        r && r();
      }
    }
  }
  setState(e, t = []) {
    const r = this._setter(e);
    return this._triggerUpdates(r, t), r;
  }
  _triggerUpdates(e, t) {
    const r = Object.keys(e), a = !t.length;
    t = t || [];
    for (let i = 0; i < r.length; i++) {
      const s = r[i], l = this._triggers.get(s);
      l && l.forEach((d) => {
        t.indexOf(d) == -1 && t.push(d);
      });
    }
    a && this._execNext(t);
  }
  _execNext(e) {
    for (; e.length; ) {
      e.sort((r, a) => r.length < a.length ? 1 : -1);
      const t = e[e.length - 1];
      e.splice(e.length - 1), t.exec(e);
    }
  }
}
function Hi(n, e, t) {
  const r = e.get(n);
  if (!r) return t;
  const a = Object.keys(r).map((i) => Hi(i, e, t + 1));
  return Math.max(...a);
}
class Ma {
  constructor() {
    this._nextHandler = null, this._handlers = {}, this._tag = /* @__PURE__ */ new WeakMap(), this.exec = this.exec.bind(this);
  }
  on(e, t, r) {
    let a = this._handlers[e];
    a ? r && r.intercept ? a.unshift(t) : a.push(t) : a = this._handlers[e] = [t], r && r.tag && this._tag.set(t, r.tag);
  }
  intercept(e, t, r) {
    this.on(e, t, { ...r, intercept: !0 });
  }
  detach(e) {
    for (const t in this._handlers) {
      const r = this._handlers[t];
      for (let a = r.length - 1; a >= 0; a--) this._tag.get(r[a]) === e && r.splice(a, 1);
    }
  }
  async exec(e, t) {
    const r = this._handlers[e];
    if (r) for (let a = 0; a < r.length; a++) {
      const i = r[a](t);
      if (i === !1 || i && i.then && await i === !1) return;
    }
    return this._nextHandler && await this._nextHandler.exec(e, t), t;
  }
  setNext(e) {
    return this._nextHandler = e;
  }
}
let xr;
function lu() {
  if (typeof window > "u") return !0;
  const n = window.location.hostname, e = ["c3Zhci5kZXY=", "cmVhY3Qtd2lkZ2V0cy5jb20=", "c3ZlbHRlLXdpZGdldHMuY29t", "dnVlLXdpZGdldHMuY29t", "YW5ndWxhci13aWRnZXRzLmNvbQ==", "ZGh0bWx4LmNvbQ==", "ZGh0bWx4Y29kZS5jb20=", "d2ViaXhjb2RlLmNvbQ==", "d2ViaXguaW8=", "cmVwbC5jbw==", "Y3NiLmFwcA==", "cmVwbGl0LmRldg=="];
  for (let t = 0; t < e.length; t++) {
    const r = window.atob(e[t]);
    if (r === n || n.endsWith("." + r)) return !0;
  }
  return !1;
}
xr = lu(), xr = !0;
function qi() {
  return xr;
}
function Ui() {
  return (/* @__PURE__ */ new Date()).valueOf() > Math.imul(0x0069A3B6, 1) * 256e3;
}
function cu(n) {
  qi() || setTimeout(function() {
    if (typeof window < "u" && Ui()) {
      const e = window.atob("IFlvdXIgdHJpYWwgaGFzIGV4cGlyZWQuIFBsZWFzZSBwdXJjaGFzZSB0aGUgY29tbWVyY2lhbCBsaWNlbnNlIGZvciB0aGUgS2FuYmFuIHdpZGdldCBhdCBodHRwczovL2RodG1seC5jb20="), { columns: t } = n.getState();
      t.forEach((r) => r.label += e), n.setState({ columns: t });
    }
  }, 36e3);
}
const du = [{ id: 1, color: "#FE6158", label: "High" }, { id: 2, color: "#F1B941", label: "Medium" }, { id: 3, color: "#77D257", label: "Low" }], uu = ["#33B0B4", "#0096FA", "#F1B941"], kn = { label: { show: !0 }, description: { show: !1 }, progress: { show: !1 }, start_date: { show: !1 }, end_date: { show: !1 }, users: { show: !1 }, priority: { show: !1, values: du }, color: { show: !1, values: uu }, cover: { show: !1 }, attached: { show: !1 }, menu: { show: !0 } }, Yi = [{ key: "label", type: "text", label: "Label" }, { key: "description", type: "textarea", label: "Description" }, { type: "combo", label: "Priority", key: "priority", config: { clear: !0 } }, { type: "color", label: "Color", key: "color", config: { clear: !0 } }, { type: "progress", key: "progress", label: "Progress" }, { type: "date", key: "start_date", label: "Start date" }, { type: "date", key: "end_date", label: "End date" }, { type: "multiselect", key: "users", label: "Users" }], Wr = { debounce: 100, autoSave: !0, placement: "sidebar" }, Ye = { kanban: "wx-kanban", toolbar: "wx-kanban-toolbar", editor: "wx-kanban-editor", content: "wx-kanban-content", scrollableContent: "wx-kanban-scrollable-content", search: "wx-kanban-search", vote: "wx-vote-card-button" }, vu = () => [{ by: "label", dir: "asc", text: "Label (a-z)", id: 7 }, { by: "label", dir: "desc", text: "Label (z-a)", id: 8 }, { by: "description", dir: "asc", text: "Description (a-z)", id: 9 }, { by: "description", dir: "desc", text: "Description (z-a)", id: 10 }], fu = (n) => {
  const { readonly: e } = n, t = [{ id: "duplicate-card", icon: "wxi-content-copy", text: "Duplicate" }, { id: "delete-card", icon: "wxi-delete-outline", text: "Delete" }];
  return !e?.select && e?.edit ? [{ id: "set-edit", icon: "wxi-edit-outline", text: "Edit" }, ...t] : t;
}, hu = ({ columns: n, columnIndex: e }) => [{ id: "add-card", icon: "wxi-plus", text: "Add new card" }, { id: "set-edit", icon: "wxi-edit-outline", text: "Rename" }, { id: "move-column:left", icon: "wxi-arrow-left", text: "Move left", disabled: e <= 0 }, { id: "move-column:right", icon: "wxi-arrow-right", text: "Move right", disabled: e >= n.length - 1 }, { id: "delete-column", icon: "wxi-delete-outline", text: "Delete" }], mu = ({ rows: n, rowIndex: e }) => [{ id: "set-edit", icon: "wxi-edit-outline", text: "Rename" }, { id: "move-row:up", icon: "wxi-arrow-up", text: "Move up", disabled: e <= 0 }, { id: "move-row:down", icon: "wxi-arrow-down", text: "Move down", disabled: e >= n.length - 1 }, { id: "delete-row", icon: "wxi-delete-outline", text: "Delete" }];
function le(n, e) {
  return !n || !e ? !1 : n == e;
}
function Ki(n, e) {
  return !!n?.find((t) => le(t, e));
}
function gu(n) {
  return Object.keys(n._cardsMap).reduce((e, t) => e.concat(n._cardsMap[t]), []);
}
function Oe(n, e) {
  return `${n}` + (e ? `:${e}` : "");
}
function Vi(n) {
  return n.split(/(?<!temp):(?!\/\/)/);
}
function Ln(n, e, t) {
  return t ? n[e] + ":" + n[t] : n[e];
}
function _u(n, e, t = { shift: 20 }) {
  let r = null;
  function a() {
    if (e) {
      const i = e.getBoundingClientRect(), s = { x: e.scrollLeft, y: e.scrollTop }, { shift: l } = t;
      n.clientX > i.width + i.left - l && e.scrollTo(s.x + l, s.y), n.clientX < i.left + l && e.scrollTo(s.x - l, s.y), n.clientY > i.height + i.top - l && e.scrollTo(s.x, s.y + l), n.clientY < i.top + l && e.scrollTo(s.x, s.y - l), r = setTimeout(() => {
        a();
      }, 100);
    }
  }
  return a(), () => {
    r && clearTimeout(r);
  };
}
function nr(n) {
  const { shape: e, defaultMenuItems: t, readonly: r } = n, a = { ...e };
  if (a.menu === !1) return { menu: { show: !1, items: () => !1 } };
  if (a.menu ||= {}, a.menu === !0 && (a.menu = { show: !0 }), typeof a.menu == "object") {
    const i = { ...a.menu };
    if (Array.isArray(i.items)) {
      const l = [...i.items];
      i.items = () => l;
    }
    const s = i.items || t;
    i.items = (l) => {
      let d = s({ ...l, readonly: r });
      return d && (d = Gi(d)), d;
    }, i.show ??= !0, a.menu = i;
  }
  return a;
}
function Gi(n) {
  return n.map((e) => {
    const t = { ...e };
    return t.data && (t.data = Gi(t.data)), t;
  });
}
function gn(n, e) {
  const { cards: t, columnKey: r, sort: a } = n;
  if (!a) return t;
  const i = t.reduce((l, d) => (l[d[r]] = l[d[r]] || [], l[d[r]].push(d), l), {}), s = (l, d) => `${typeof d == "function" ? d(l) : l[d]}`;
  return Object.keys(i).forEach((l) => {
    let d;
    "columns" in a ? d = a.columns[l] || {} : d = a, d.by && (e = e || ((c) => {
      const { dir: v } = c, u = c.by;
      return (h, _) => {
        const f = s(h, u), m = s(_, u);
        return v === "desc" ? m.localeCompare(f, void 0, { numeric: !0 }) : f.localeCompare(m, void 0, { numeric: !0 });
      };
    }), i[l].sort(e(d)));
  }), Object.values(i).flat();
}
function wu(n, e) {
  return (n || Yi.filter((t) => e[t.key]?.show)).map((t) => {
    const r = e[t.key];
    return r && typeof t.key == "string" && (r.values && !t.values && (t.values = r.values), t.config && (r.config = t.config)), (t.type === "comments" || t.key === "users" && (t.type === "multiselect" || t.type === "combo")) && t.values && t.values.forEach(Wi), t.id = t.id || Gr(), t;
  });
}
let xu = 0;
function yu(n) {
  return n.users?.values && n.users.values.forEach(Wi), n;
}
function Wi(n) {
  if (!n.id) throw "Please provide user IDs";
  return !n.avatar && !n.avatarColor && (n.avatarColor = ["#00D19A", "#2F77E3", "#FFC975"][Math.floor(xu++ % 3)]), n;
}
function ji(n, e) {
  const { id: t, before: r, columnId: a, rowId: i } = e, s = n.getState(), { _areasMeta: l, cards: d, _cardsMap: c, columns: v, columnKey: u, rowKey: h, sort: _ } = s, f = d.findIndex((I) => le(I.id, t));
  if (f < 0 || !c[Oe(a, i)] || le(t, r)) return;
  const m = d[f];
  if (typeof v.find((I) => le(I.id, a)).limit == "object") {
    const I = Oe(a, i), p = I === Ln(m, u, h);
    if (l[I].noFreeSpace && !p) return;
  } else {
    const I = le(a, m[u]);
    if (l[a].noFreeSpace && !I) return;
  }
  const w = d.splice(f, 1)[0], k = { ...w }, b = c[Ln(k, u, h)] || [], y = b.findIndex((I) => le(I.id, t)) || 0, x = b[y + 1] || {};
  if (w[u] = a, h && i && (w[h] = i), !r) d.push(w);
  else {
    const I = d.findIndex((p) => le(p.id, r));
    d.splice(I, 0, w);
  }
  return n.setState({ cards: _ ? gn({ ...s, cards: d }, n.sortRule) : d }), () => {
    const I = k[u], p = h && k[h];
    n.in.exec("move-card", { id: t, before: x.id, columnId: I, rowId: p, $meta: { skipHistory: !0 } });
  };
}
function bu(n, e) {
  const t = e.card || {}, r = e.id || t.id || Zt(), a = n.getState(), { columnKey: i, rowKey: s, _areasMeta: l, cards: d, columns: c, rows: v, sort: u } = a, h = e.rowId || s && t[s] || v[0].id;
  h && !e.rowId && (e.rowId = h);
  const _ = e.columnId || t[i] || c[0].id;
  if (typeof c.find((m) => le(m.id, _)).limit == "object") {
    if (l[Oe(_, h)].noFreeSpace) return !1;
  } else if (l[_].noFreeSpace) return !1;
  const f = { [i]: _, id: r, ...t };
  return s && (f[s] = h), d.push(f), n.setState({ cards: u ? gn({ ...a, cards: d }, n.sortRule) : d }), e.before && ji(n, { ...e, id: r }), e.select !== !1 && n.in.exec("select-card", { id: r }), e.card = f, e.id = r, () => {
    n.in.exec("delete-card", { id: r, $meta: { skipHistory: !0 } });
  };
}
function pu(n, { id: e, card: t, replace: r }) {
  const a = n.getState();
  let i, s = a.cards.map((l) => le(l.id, e) ? (i = { ...l }, r ? { id: e, ...t } : { ...l, ...t }) : l);
  return a.sort && (s = gn({ ...a, cards: s }, n.sortRule)), n.setState({ cards: s }), () => {
    n.in.exec("update-card", { id: e, card: i, replace: !0, $meta: { skipHistory: !0 } });
  };
}
function ku(n, { id: e, card: t, select: r }) {
  const { cards: a, columnKey: i } = n.getState(), s = a.find((l) => le(l.id, e));
  if (s) {
    const l = { ...s, id: Zt(), ...t || {} };
    n.in.exec("add-card", { columnId: l[i], before: e, card: l, select: r });
  }
}
function Su(n, { id: e }) {
  const t = n.getState();
  t.selected?.includes(e) && n.in.exec("unselect-card", { id: e });
  const r = t.cards.findIndex((l) => le(l.id, e)), a = t.cards[r], i = t.cards[r + 1]?.id, s = t.cards.filter((l) => !le(l.id, e));
  return n.setState({ cards: s }), () => {
    n.in.exec("add-card", { columnId: a[t.columnKey], before: i, card: a, $meta: { skipHistory: !0, restore: e } });
  };
}
function Ji(n, { id: e, before: t }) {
  const { columns: r } = n.getState(), a = r.findIndex((l) => le(l.id, e)), i = r[a + 1]?.id, s = r.splice(a, 1)[0];
  if (t) {
    const l = r.findIndex((d) => le(d.id, t));
    r.splice(l, 0, s);
  } else r.push(s);
  return n.setState({ columns: r }), () => {
    n.in.exec("move-column", { id: e, before: i, $meta: { skipHistory: !0 } });
  };
}
function Iu(n, e) {
  const t = e.id || e.column?.id || Zt(), r = n.getState().columns, a = { id: t, label: "Untitled", ...e.column || {} };
  return r.push(a), n.setState({ columns: r }), e.before && Ji(n, { ...e, id: t }), n.in.exec("scroll", { to: "column", id: t }), e.id = t, e.column = a, () => {
    n.in.exec("delete-column", { id: t, $meta: { skipHistory: !0 } });
  };
}
function Cu(n, e) {
  const t = n.getState();
  let r;
  const a = e.id || e.column?.id, i = t.columns.map((s) => le(s.id, a) ? (r = { ...s }, e.replace ? { id: a, ...e.column } : { ...s, ...e.column }) : s);
  return n.setState({ columns: i }), () => {
    n.in.exec("update-column", { column: r, replace: !0, $meta: { skipHistory: !0 } });
  };
}
function Eu(n, { id: e }) {
  if (e) {
    const t = n.getState(), r = t.columns.findIndex((l) => le(l.id, e)), a = t.columns[r], i = t.columns[r + 1]?.id, s = t.columns.filter((l) => !le(l.id, e));
    return n.setState({ columns: s }), () => {
      n.in.exec("add-column", { column: a, before: i, $meta: { skipHistory: !0, restore: e } });
    };
  }
}
function Zi(n, { id: e, before: t }) {
  const { rows: r, rowKey: a } = n.getState();
  if (!a) return;
  const i = r.findIndex((d) => le(d.id, e)), s = r[i + 1]?.id, l = r.splice(i, 1)[0];
  if (t) {
    const d = r.findIndex((c) => le(c.id, t));
    r.splice(d, 0, l);
  } else r.push(l);
  return n.setState({ rows: r }), () => {
    n.in.exec("move-row", { id: e, before: s, $meta: { skipHistory: !0 } });
  };
}
function Du(n, e) {
  const t = n.getState(), r = t.rows, a = e.id || e.row?.id || Zt(), i = { id: a, label: "Untitled", collapsed: !1, ...e.row || {} };
  r.push(i);
  let s = t.rowKey;
  return s || (s = "rowKey", r[0] = { id: "default", label: "Untitled" }, t.cards.map((l) => {
    l[s] = "default";
  })), n.setState({ rows: r, rowKey: s }), e.before && Zi(n, { id: a, before: e.before }), n.in.exec("scroll", { to: "row", id: a }), e.id = a, e.row = i, () => {
    n.in.exec("delete-row", { id: a, $meta: { skipHistory: !0 } });
  };
}
function Mu(n, e) {
  const t = n.getState();
  let r;
  const a = e.id || e.row?.id, i = t.rows.map((s) => le(s.id, a) ? (r = { ...s }, e.replace ? { id: a, ...e.row } : { ...s, ...e.row }) : s);
  return n.setState({ rows: i }), () => {
    n.in.exec("update-row", { row: r, replace: !0, $meta: { skipHistory: !0 } });
  };
}
function Au(n, { id: e }) {
  if (e) {
    const t = n.getState(), { rows: r } = t, a = r.findIndex((l) => le(l.id, e)), i = r[a], s = r[a + 1]?.id;
    return r.splice(a, 1), n.setState({ rows: r }), () => {
      n.in.exec("add-row", { row: i, before: s, $meta: { skipHistory: !0, restore: e } });
    };
  }
}
function Tu(n, e) {
  const { source: t } = e, { _cardsMeta: r } = n.getState();
  [...t].forEach((a) => {
    const i = r[a] || {};
    i.dragging = !0, r[a] = i;
  }), n.setState({ _cardsMeta: r });
}
function Pu(n, e) {
  const { rowId: t, columnId: r } = e;
  if (!r) return;
  const { _areasMeta: a, cards: i, columns: s, rowKey: l } = n.getState(), d = i.find((h) => le(h.id, e.source[e.source.length - 1])), c = Oe(r, t), v = s.find((h) => le(h.id, r));
  let u;
  typeof v.limit == "object" ? u = !a[c].noFreeSpace || le(c, Oe(d.column, d[l])) : u = !a[r].noFreeSpace || le(r, d.column), e.dragAllowed = u;
}
function Ru(n, { id: e, columnId: t, rowId: r, before: a, source: i }) {
  if (!t) return;
  const s = { _areasMeta: {} }, { _areasMeta: l, _cardsMeta: d } = n.getState(), c = Oe(t, r);
  if (c && e) {
    const u = l[c], { columnId: h, rowId: _ } = u;
    if (i.length > 1) {
      const f = Gr();
      i.forEach((m) => {
        n.in.exec("move-card", { id: m, columnId: h, rowId: _, before: a, $meta: { batch: f } });
        const w = d[m];
        w && (w.dragging = !1);
      });
    } else {
      n.in.exec("move-card", { id: e, columnId: h, rowId: _, before: a });
      const f = d[e];
      f && (f.dragging = !1);
    }
  }
  s._cardsMeta = d;
  const v = n.getState()._areasMeta;
  Object.keys(v).forEach((u) => {
    s._areasMeta[u] = { ...v[u], height: null };
  }), n.setState(s);
}
function Lu(n, { id: e, groupMode: t, eventSource: r }) {
  const { selected: a, search: i } = n.getState();
  if (e) {
    let s = null;
    if (t) if (s = a ? [...a] : [], s.includes(e)) {
      n.in.exec("unselect-card", { id: e });
      return;
    } else s.push(e);
    else s = [e];
    i && n.in.exec("set-search", { value: null }), n.setState({ selected: s }), s.length > 1 || r === "dnd" ? n.in.exec("set-edit", null) : n.in.exec("set-edit", { cardId: e, eventSource: "select-card" });
  }
}
function Fu(n, { id: e }) {
  const t = n.getState().selected;
  if (t) {
    if (n.in.exec("set-edit", null), !e) {
      n.setState({ selected: null });
      return;
    }
    const r = t.filter((a) => !le(a, e));
    n.setState({ selected: r });
  }
}
function rr(n, e) {
  return `${n}`.toLowerCase().includes(`${e}`.toLowerCase());
}
function Ou(n, e, t) {
  return t ? rr(n[t] || "", e) : rr(n.label || "", e) || rr(n.description || "", e);
}
function zu(n, { value: e, by: t, searchRule: r }) {
  const a = n.getState(), i = e?.trim(), s = a._cardsMeta;
  let l = { value: e, by: t };
  i ? gu(a).map((d) => {
    const c = s[d.id] = s[d.id] || {};
    (r || Ou)(d, i, t) ? (c.found = !0, c.dimmed = !1) : (c.found = !1, c.dimmed = !0);
  }) : (Object.keys(s).forEach((d) => {
    const c = s[d];
    c && (delete c.dimmed, delete c.found);
  }), typeof t > "u" && (l = null)), n.setState({ _cardsMeta: s, search: l });
}
function Bu(n, e) {
  n.setState({ _scroll: e });
}
function Nu(n, e) {
  if (!e) {
    n.setState({ sort: null });
    return;
  }
  const t = n.getState(), r = e.columnId, a = e.by || "label", i = e.dir || "asc", s = e.preserve || !1;
  let l = t.sort || {};
  r ? ("column" in l || (l = { columns: {} }), l.columns[r] = { by: a, dir: i, preserve: s }) : l = { dir: i, by: a, preserve: s };
  const d = gn({ ...t, sort: l }, n.sortRule);
  s ? n.setState({ sort: l, cards: d }) : n.setState({ cards: d });
}
function Hu(n, e) {
  n.setState({ _edit: e });
}
function qu(n, { id: e, cardId: t, comment: r }) {
  if (t) {
    const a = n.getState(), i = a.currentUser, s = e || r.id || Zt(), l = t || r.cardId;
    if (!l || !i && !r.userId) return;
    const d = a.cards.map((c) => le(c.id, l) ? { ...c, comments: [...c.comments || [], { userId: i, ...r, id: s, cardId: l, date: r.date || /* @__PURE__ */ new Date() }] } : c);
    return n.setState({ cards: d }), () => {
      n.in.exec("delete-comment", { id: s, cardId: l, $meta: { skipHistory: !0 } });
    };
  }
}
function Uu(n, { cardId: e, id: t, comment: r }) {
  if (e) {
    const a = n.getState(), i = t || r.id, s = e || r.cardId;
    if (!i || !s) return;
    let l = {};
    const d = a.cards.map((c) => le(c.id, s) ? { ...c, comments: (c.comments || []).map((v) => le(v.id, i) ? (l = { ...v }, { ...v, ...r }) : v) } : c);
    return n.setState({ cards: d }), () => {
      n.in.exec("update-comment", { id: i, cardId: s, comment: l, $meta: { skipHistory: !0 } });
    };
  }
}
function Yu(n, { cardId: e, id: t }) {
  if (e) {
    const r = n.getState();
    if (!t || !e) return;
    let a = {};
    const i = r.cards.map((s) => le(s.id, e) ? { ...s, comments: (s.comments || []).filter((l) => le(l.id, t) ? (a = { ...l }, !1) : !0) } : s);
    return n.setState({ cards: i }), () => {
      n.in.exec("add-comment", { id: t, cardId: e, comment: a, $meta: { skipHistory: !0 } });
    };
  }
}
function Ku(n, e) {
  const t = n.getState().links, r = e.id || e.link.id || Zt();
  if (t.find((i) => le(r, i.id))) return;
  const a = { ...e.link, id: r };
  return t.push(a), n.setState({ links: t }), e.link = a, e.id = r, () => {
    n.in.exec("delete-link", { id: r, $meta: { skipHistory: !0 } });
  };
}
function Vu(n, { id: e }) {
  if (e) {
    const t = n.getState(), r = t.links.find((i) => le(i.id, e)), a = t.links.filter((i) => !le(i.id, e));
    return n.setState({ links: a }), () => {
      n.in.exec("add-link", { id: e, link: r, $meta: { skipHistory: !0, restore: e } });
    };
  }
}
function Gu(n, { cardId: e, userId: t }) {
  const r = n.getState(), { currentUser: a } = r;
  if (!e || !a && !t) return;
  const i = r.cards.map((s) => le(s.id, e) ? { ...s, votes: [...s.votes || [], t || a] } : s);
  n.setState({ cards: i });
}
function Wu(n, { cardId: e, userId: t }) {
  const r = n.getState(), { currentUser: a } = r;
  if (!e || !a && !t) return;
  const i = r.cards.map((s) => le(s.id, e) ? { ...s, votes: (s.votes || []).filter((l) => !le(l, t || a)) } : s);
  n.setState({ cards: i });
}
class ju extends ou {
  in;
  out;
  sortRule;
  config;
  _router;
  constructor(e, t) {
    super({ writable: e, async: !1 }), cu(this), this.in = new Ma(), this.out = new Ma(), this.in.setNext(this.out), this.config = { history: !0, ...t || {} }, this._router = new su(super.setState.bind(this), [{ in: ["cards", "rows", "columns", "columnKey", "rowKey"], out: ["_areasMeta", "_cardsMap"], exec: (a) => {
      const i = this.getState(), { rows: s, columns: l, columnKey: d, rowKey: c, cards: v } = i, u = {}, h = {};
      if (!d) return { _cardsMap: h, _areasMeta: u };
      v.map((_) => {
        const f = Ln(_, d, c);
        h[f] = h[f] || [], h[f]?.push(_);
      }), l.map((_) => {
        h[_.id] = h[_.id] || [], c && s.map((f) => {
          const m = Oe(_.id, f.id);
          u[m] = { columnId: _.id, rowId: f.id, column: _, row: f, cardsCount: 0 }, h[m] = h[m] || [], h[_.id] = h[_.id]?.concat(h[m] || []);
        }), u[_.id] = { columnId: _.id, column: _, cardsCount: 0 };
      }), this._computeLimits({ _areasMeta: u, _cardsMap: h }), this.setState({ _areasMeta: u, _cardsMap: h }, a);
    } }, { in: ["renderType", "scrollType"], out: ["_layout"], exec: (a) => {
      const { renderType: i, scrollType: s } = this.getState(), l = `${s}:${i}`;
      this.setState({ _layout: l }, a);
    } }], {}), this._initStructure();
    const r = this._getHandlers();
    this._setHandlers(r);
  }
  setState(e, t) {
    return this._router.setState(e, t);
  }
  init(e) {
    const { cards: t = [], links: r = [], columns: a = [], rows: i, columnKey: s = "column", rowKey: l = "", sort: d = null, readonly: c = !1, ...v } = e, u = this._normalizeReadonlyConfig(c);
    let h = this._normalizeCards(t);
    const _ = (r || []).map((I) => {
      const p = { ...I };
      return p.masterId && (p.source = p.masterId), p.slaveId && (p.target = p.slaveId), p;
    });
    d && (h = gn({ columnKey: s, sort: d, cards: h }, this.sortRule));
    const f = a.map((I) => ({ ...I })), m = (l && i || [{ id: "" }]).map((I) => ({ ...I })), { cardShape: w, columnShape: k, rowShape: b, editorShape: y } = this._normalizeShapes({ ...e, cards: h, readonly: u }), x = { ...v, cards: h, links: _, columns: f, columnKey: s, rowKey: l, rows: m, cardShape: w, columnShape: k, rowShape: b, editorShape: y, readonly: u };
    this._router.init(x), this.setState({ _edit: null, selected: null });
  }
  undo() {
    const e = this.getState().history, t = e.undo.pop();
    if (t) {
      if (typeof t == "object") t.undo(), e.redo.push({ ev: t.ev, key: t.key });
      else if (typeof t == "number") {
        const r = e.batches[t];
        for (let a = r.length - 1; a >= 0; a--) r[a].undo();
        e.redo.push(t);
      }
    }
    this.setState({ history: e });
  }
  redo() {
    const e = this.getState().history, t = [...e.redo], r = t.pop();
    if (r) {
      if (typeof r == "object") {
        const { ev: a, key: i } = r;
        this.in.exec(i, a), this.setState({ history: { ...e, redo: t } });
      } else if (typeof r == "number") {
        const a = e.batches[r];
        delete e.batches[r], a.forEach((i) => {
          const { ev: s, key: l } = i;
          this.in.exec(l, s);
        }), this.setState({ history: { ...e, redo: t } });
      }
    }
  }
  _setHandlers(e) {
    const t = this.getState().history;
    Object.keys(e).forEach((r) => {
      this.in.on(r, (a) => {
        const i = e[r](this, a), s = a?.$meta;
        this.config.history && i && !s?.skipHistory && (s?.batch ? (t.batches[s.batch] ??= [], t.batches[s.batch].push({ undo: i, key: r, ev: { ...a } }), t.undo.includes(s.batch) || t.undo.push(s.batch)) : t.undo.push({ undo: i, key: r, ev: { ...a } }), t.redo.forEach((l) => {
          typeof l == "string" && delete t.batches[l];
        }), t.redo = [], this.setState({ history: t }));
      });
    });
  }
  _getHandlers() {
    return { "add-card": bu, "update-card": pu, "move-card": ji, "duplicate-card": ku, "delete-card": Su, "add-column": Iu, "update-column": Cu, "move-column": Ji, "delete-column": Eu, "add-row": Du, "update-row": Mu, "move-row": Zi, "delete-row": Au, "start-drag-card": Tu, "drag-card": Pu, "end-drag-card": Ru, "set-search": zu, "select-card": Lu, "unselect-card": Fu, scroll: Bu, "set-sort": Nu, "set-edit": Hu, "add-comment": qu, "update-comment": Uu, "delete-comment": Yu, "add-link": Ku, "delete-link": Vu, "add-vote": Gu, "delete-vote": Wu, undo: () => this.undo(), redo: () => this.redo() };
  }
  _initStructure() {
    const e = "default", t = "default";
    this.setState({ columnKey: "column", rowKey: "", columns: [], rows: [], cards: [], cardShape: kn, columnShape: {}, rowShape: {}, editorShape: Yi, readonly: null, cardHeight: null, scrollType: e, renderType: t, editor: {}, currentUser: null, links: [], history: { undo: [], redo: [], batches: {} }, sort: null, selected: null, search: null, _cardsMap: {}, _cardsMeta: {}, _areasMeta: {}, _scroll: null, _edit: null, _layout: `${e}:${t}` });
  }
  _computeLimits({ _areasMeta: e, _cardsMap: t }) {
    for (const r in e) {
      const a = t[r];
      if (a) {
        const i = e[r];
        i.cardsCount = a.length || 0;
        const s = i.column;
        if (s.limit) {
          let l = 0;
          typeof s.limit == "object" ? i.rowId ? l = s.limit[i.rowId] || 0 : l = Object.keys(s.limit).reduce((d, c) => d + s.limit[c], 0) : l = s.limit, i.totalLimit = l, i.isOverLimit = !!l && i.cardsCount > l, i.noFreeSpace = s.strictLimit && !!l && i.cardsCount >= l;
        }
      }
    }
  }
  _normalizeCards(e) {
    return e.map((t) => {
      const r = t.id || Gr();
      return { ...t, id: r };
    });
  }
  _normalizeShapes(e) {
    const { cardShape: t = kn, columnShape: r, rowShape: a, readonly: i, editorShape: s } = e;
    let l = { ...t };
    for (const u in t) {
      const h = t[u];
      typeof h == "boolean" && (l[u] = { show: h });
    }
    l = Object.keys(l).reduce((u, h) => {
      const _ = kn[h];
      return _ ? u[h] = { ..._, ...l[h] } : u[h] = l[h], u;
    }, {}), i && !i.edit && (l.menu = l.menu || {}, l.menu.show = !1), l = yu(l), l = nr({ readonly: i, shape: l, defaultMenuItems: fu });
    const d = wu(s, l), c = nr({ shape: r, defaultMenuItems: hu }), v = nr({ shape: a, defaultMenuItems: mu });
    return { cardShape: l, columnShape: c, rowShape: v, editorShape: d };
  }
  _normalizeReadonlyConfig(e) {
    let t = { add: !0, dnd: !0, edit: !0, select: !0 };
    return typeof e == "object" ? t = { ...t, ...e } : e === !0 && Object.keys(t).forEach((r) => {
      t[r] = !1;
    }), t;
  }
}
function Ju(n, e, t = 5) {
  return Math.abs(e.x - n.x) > t || Math.abs(e.y - n.y) > t;
}
function yr(n, e) {
  return n >= e[0] && n <= e[1];
}
function Zu(n, e) {
  const { x: t, y: r } = n, a = yr(t, [e.x, e.right]), i = yr(r, [e.y, e.bottom]);
  return a && i;
}
function Aa(n, e, t) {
  const r = { x: e.x - t.x, y: e.y - t.y };
  return { x: n.x - r.x, y: n.y - r.y };
}
function Ta(n, e, t = !1) {
  const r = Array.from(n.querySelectorAll("[data-drop-area]")), a = Array.isArray(e) ? e : [e], i = n.querySelector(`[data-drag-item='${a[a.length - 1]}']`)?.offsetHeight || 300, s = {}, l = [], d = r.reduce((c, v) => {
    const u = JSON.parse(JSON.stringify(v.getBoundingClientRect())), h = v.getAttribute("data-drop-area"), _ = Array.from(v.querySelectorAll("[data-drag-item]")), f = [], m = _.reduce((y, x) => {
      const I = JSON.parse(JSON.stringify(x.getBoundingClientRect())), p = x.getAttribute("data-drag-item"), P = y[y.length - 1]?.bottom ?? I.y, A = { ...I, y: P, id: p };
      return s[p] = A, y.push(A), Ki(a, p) || f.push(p), y;
    }, []), w = f.map((y, x) => ({ ...m[x], id: y }));
    if (!t) {
      const y = v.offsetParent, x = 30;
      v.offsetTop + v.offsetHeight + x >= y.scrollHeight && (u.bottom += i + x, u.height += i + x);
    }
    const k = { ...u, id: h }, b = v.querySelector(".wx-list-wrapper");
    return b && (k.scrollList = { node: b, initialScrollY: b.scrollTop }), l.push(k), c[h] = w, c;
  }, {});
  return { dragItemsCoords: s, dropAreasCoords: l, dropAreaItemsCoords: d };
}
function Pa(n) {
  const e = {};
  if (e.target = n.target, "touches" in n) {
    const t = n.touches[0];
    e.touches = n.touches, e.clientX = t.clientX, e.clientY = t.clientY;
  } else e.clientX = n.clientX, e.clientY = n.clientY;
  return e;
}
function jr(n, e = "data-id") {
  let t = n;
  for (!t.tagName && n.target && (t = n.target); t; ) {
    if (t.getAttribute && t.getAttribute(e)) return t;
    t = t.parentNode;
  }
  return null;
}
function br(n, e = "data-id") {
  const t = jr(n, e);
  return t ? t.getAttribute(e) : null;
}
function Fn(n, e = "data-id") {
  const t = jr(n, e);
  return t ? Qu(t.getAttribute(e)) : null;
}
function Qu(n) {
  if (typeof n == "string") {
    const e = n * 1;
    if (!isNaN(e)) return e;
  }
  return n;
}
function Xu() {
  return { detect: () => !0, addEvent: function(n, e, t) {
    return n.addEventListener(e, t), () => n.removeEventListener(e, t);
  }, addGlobalEvent: function(n, e) {
    return document.addEventListener(n, e), () => document.removeEventListener(n, e);
  }, getTopNode: function() {
    return window.document.body;
  } };
}
const lt = Xu();
(/* @__PURE__ */ new Date()).valueOf();
function $u(n, e) {
  if (e.readonly) return;
  let t, r;
  const a = n;
  let i, s, l, d, c, v, u, h, _, f, m, w = null, k = null;
  const b = (Y, H) => {
    e.api.exec(Y, H), e.onAction && e.onAction(Y, H);
  };
  n.querySelector(`[data-kanban-id='${Ye.scrollableContent}']`)?.addEventListener("scroll", () => {
    if (d) {
      const { itemId: Y, itemRect: H, itemsId: T } = d;
      d.scroll = { x: i.scrollLeft, y: i.scrollTop };
      const O = Ta(a, T, !0);
      c = O.dragItemsCoords, u = O.dropAreasCoords, v = O.dropAreaItemsCoords, c[Y] = H;
    }
  }, { capture: !0 });
  const { data: y } = e.api.getStores(), x = { duration: 500, timer: null }, I = () => {
    x.callback && (x.timer = setTimeout(x.callback, x.duration));
  }, p = () => {
    x.timer && clearTimeout(x.timer);
  };
  function P(Y) {
    if (s && clearTimeout(s), i) {
      const H = i.getBoundingClientRect(), T = { x: i.scrollLeft, y: i.scrollTop }, O = 50;
      Y.clientX > H.width + H.left - O && i.scrollTo(T.x + O, T.y), Y.clientX < H.left + O && i.scrollTo(T.x - O, T.y), Y.clientY > H.height + H.top - O && i.scrollTo(T.x, T.y + O), Y.clientY < H.top + O && i.scrollTo(T.x, T.y - O), s = setTimeout(() => {
        P(Y);
      }, 100);
    }
  }
  function A(Y) {
    const H = {}, T = u.find((K) => Zu(Y, K)), O = T?.id;
    if (O) {
      const [K, j] = Vi(O);
      H.overAreaId = { rowId: j, columnId: K };
      let te = Y.y;
      T.scrollList && (te += T.scrollList.node.scrollTop - T.scrollList.initialScrollY);
      const ie = v[O];
      H.before = ie.find((ve) => yr(te, [ve.y, ve.bottom]))?.id;
    }
    return H;
  }
  function N(Y, H, T, O, K) {
    if (Y.touches && Y.touches.length > 1) return;
    const j = O.itemId;
    K?.indexOf(j) === -1 && (b("select-card", { id: j, eventSource: "dnd" }), K = [j]), l = Aa(H, O, c[j]), W(K);
    const te = A(T);
    _ = te.before, h = te.overAreaId, m = K || [j], f = j;
    const { _areasMeta: ie, _layout: ve } = y.getState();
    u?.forEach((X) => {
      X.id && (ie[X.id].height = ve !== "default:lazy" ? X.height : null);
    }), b("start-drag-card", { id: j, rowId: h.rowId, columnId: h.columnId, before: _, source: m });
  }
  function V(Y, H, T, O) {
    const K = c[O.itemId];
    l = Aa(H, O, K), t.style.left = l.x + "px", t.style.top = l.y + "px";
    const j = A(T), te = { id: f, rowId: h.rowId, columnId: h.columnId, before: _, source: m };
    j.overAreaId?.columnId && (te.rowId !== j.overAreaId?.rowId || te.columnId !== j.overAreaId?.columnId) && (h = j.overAreaId, te.rowId = h.rowId, te.columnId = h.columnId), _ !== j.before && (_ = te.before = j.before), b("drag-card", te);
    const ie = Array.from(document.getElementsByClassName("wx-kanban-drop-area"));
    for (const ve of ie) {
      const X = ve;
      X.style.minHeight = `${c[f].height}px`;
    }
  }
  function W(Y) {
    const H = a.closest(".wx-kanban");
    Y?.length > 1 && H.style.setProperty("--wx-kanban-dragged-cards-count", JSON.stringify(`${Y.length}`)), H.appendChild(t), t.classList.add("wx-dragged-card"), t.style.left = l.x + "px", t.style.top = l.y + "px", lt.getTopNode(H).classList.add("wx-ondrag");
  }
  function J() {
    const Y = a.closest(".wx-kanban");
    t.remove(), lt.getTopNode(Y).classList.remove("wx-ondrag"), Y.style.removeProperty("--wx-kanban-dragged-cards-count"), t = null;
  }
  function L(Y, H, T) {
    const O = T.scroll, K = { x: H.scrollLeft, y: H.scrollTop };
    return { x: Y.clientX + (K.x - O.x), y: Y.clientY + (K.y - O.y) };
  }
  function D(Y) {
    const H = Pa(Y);
    if (H.touches && H.touches.length > 1 || "button" in Y && Y.button !== 0) return;
    const T = jr(H.target, "data-drag-item");
    if (i = a.querySelector(`[data-kanban-id="${Ye.content}"]`), T) {
      const O = Fn(T, "data-drag-item"), K = Fn(H.target, "data-drag-item"), j = y.getState().selected, te = j?.length > 1 ? [...j, O] : [O], ie = Ta(a, te);
      c = ie.dragItemsCoords, u = ie.dropAreasCoords, v = ie.dropAreaItemsCoords, t = T.cloneNode(!0), r = "touches" in Y ? { up: "touchend", move: "touchmove" } : { up: "mouseup", move: "mousemove" }, "touches" in Y ? (x.callback = () => {
        document.addEventListener(r.move, M, { passive: !1 });
      }, I()) : w = lt.addGlobalEvent(r.move, M, H.target), k = lt.addGlobalEvent(r.up, q, H.target), d = { x: H.clientX, y: H.clientY, itemId: O, itemsId: te, itemRect: c[O], areaId: K, scroll: { x: i.scrollLeft, y: i.scrollTop } };
    }
  }
  function M(Y) {
    Y.preventDefault(), Y.stopPropagation();
    const H = Pa(Y);
    if (P(H), !d) return;
    const T = y.getState(), { selected: O } = T, K = L(H, i, d), j = { x: H.clientX, y: H.clientY };
    !f && Ju(d, j) && N(H, j, K, d, O), f && V(T, j, K, d);
  }
  function q() {
    w && w(), k && k(), p(), J(), s && clearTimeout(s), f && (b("end-drag-card", { id: f, rowId: h.rowId, columnId: h.columnId, before: _, source: m }), f = null), d = null;
  }
  return a.addEventListener("mousedown", D), a.addEventListener("touchstart", D), a.addEventListener("dragstart", (Y) => Y.preventDefault()), { destroy() {
    a.removeEventListener("mousedown", D), a.removeEventListener("touchstart", D);
  } };
}
function ev(n, e) {
  if (e.readonly) return;
  let t;
  const { api: r } = e, a = (s) => {
    t = s.target;
  };
  r.on("select-card", ({ id: s }) => {
    t || setTimeout(() => {
      r.exec("scroll", { to: "card", id: s });
    }, 100);
  });
  const i = (s) => {
    if (!t || br(s.target, "data-ignore-selection")) return;
    const l = Fn(t, "data-drag-item"), d = Fn(t, "data-kanban-id"), c = s.metaKey || s.ctrlKey, v = s.shiftKey;
    t === s.target && d !== Ye.editor && d !== Ye.vote && tv({ itemId: l, groupMode: c, rangeMode: v, api: r }), t = null;
  };
  return n.addEventListener("mousedown", a), n.addEventListener("mouseup", i), { destroy() {
    n.removeEventListener("mousedown", a), n.removeEventListener("mouseup", i);
  } };
}
function tv(n) {
  const { itemId: e, groupMode: t, rangeMode: r, api: a } = n, { _cardsMap: i, columnKey: s } = a.getState(), { selected: l } = a.getState();
  if (!e && l?.length) {
    a.exec("unselect-card", { id: null });
    return;
  }
  if (r && l?.length) {
    const d = a.getCard(e), c = a.getCard(l[l.length - 1]);
    if (nv(d, c, s)) {
      const v = Object.keys(i).filter((m) => rv(m) === d[s]).reduce((m, w) => {
        const k = i[w];
        return m.concat(k);
      }, []), u = v.findIndex((m) => le(m.id, e)), h = v.findIndex((m) => le(m.id, c?.id)), _ = Math.min(u, h), f = Math.max(u, h);
      v.slice(_, f + 1).forEach((m) => {
        l.indexOf(m.id) === -1 && a.exec("select-card", { id: m.id, groupMode: !0 });
      });
      return;
    }
  }
  a.exec("select-card", { id: e, groupMode: t });
}
function nv(n, e, t) {
  return !n || !e || !t ? !1 : le(n[t], e[t]);
}
function rv(n) {
  return Vi(n)[0];
}
function av(n, e) {
  const { api: t, tick: r = () => new Promise((l) => {
    requestAnimationFrame(() => {
      l();
    });
  }) } = e, a = t.getReactiveState()._scroll, i = { card: "data-drag-item", column: "data-column-header", row: "data-row-header" };
  a?.subscribe((l) => {
    if (l) {
      const { to: d, id: c, options: v } = l;
      s(`[${i[d]}="${c}"]`, v).then((u) => {
        u && t.exec("scroll", null);
      }).catch();
    }
  });
  function s(l, d) {
    return new Promise((c) => {
      r().then(() => {
        const v = n.querySelector(l);
        v && (v.scrollIntoView(d || { behavior: "smooth", block: "nearest", inline: "nearest" }), c(!0)), c(!1);
      });
    });
  }
}
function Jr(n) {
  let e = !1;
  function t(d) {
    d.buttons === 1 && (e = !0);
  }
  function r() {
    e = !1, a && a();
  }
  let a = null;
  function i(d) {
    e && (a && a(), a = _u(d, n));
  }
  function s() {
    a && (a(), a = null), e = !1;
  }
  const l = lt.getTopNode(n);
  return l.addEventListener("mousemove", i), l.addEventListener("mouseup", s), n.addEventListener("mousedown", t), n.addEventListener("mouseover", t), n.addEventListener("mouseleave", r), { destroy: () => {
    l.removeEventListener("mousemove", i), l.removeEventListener("mouseup", s), n.removeEventListener("mousedown", t), n.removeEventListener("mouseover", t), n.removeEventListener("mouseleave", r);
  } };
}
function iv(n, e) {
  if (e.readonly) return;
  const t = e.locale, { api: r } = e, a = e.onAction;
  let i = e.inFocus || !1, s;
  function l(h, _) {
    switch (h) {
      case "delete": {
        const f = r.getState().selected;
        f?.length && (e.confirmDeletion?.() || Promise.resolve()).then(() => {
          f.forEach((m) => {
            r.exec("delete-card", { id: m });
          });
        }).catch(() => {
        });
        break;
      }
      case "ctrl+d":
        _.preventDefault(), r.getState().selected?.forEach((f) => {
          const m = r.getCard(f);
          r.exec("duplicate-card", { id: f, card: { label: `${t("Duplicate of")} ${m?.label}` } });
        });
        break;
      case "ctrl+z":
        _.preventDefault(), r.exec("undo", null);
        break;
      case "ctrl+shift+z":
      case "ctrl+y":
        _.preventDefault(), r.exec("redo", null);
        break;
    }
  }
  function d(h) {
    if (i) {
      const _ = h.ctrlKey || h.metaKey, f = h.shiftKey, m = h.code.replace("Key", "").toLowerCase(), w = `${_ ? "ctrl+" : ""}${f ? "shift+" : ""}${m}`;
      l(w, h), a && a("keydown", { hotkey: w });
    }
  }
  function c(h) {
    const _ = br(h.target, "data-wx-widget");
    i = _ === Ye.kanban || _ === Ye.toolbar, s = _, a && a("set-focus", { inFocus: i });
  }
  function v(h) {
    const _ = br(h.target, "data-wx-widget");
    s === _ && !i && (i = !0, s = Ye.kanban, a && a("set-focus", { inFocus: i }));
  }
  const u = [lt.addGlobalEvent("keydown", d, n), lt.addGlobalEvent("mousedown", c, n), lt.addGlobalEvent("focusin", c, n), lt.addGlobalEvent("focusout", v, n)];
  return { destroy: () => {
    u.forEach((h) => h());
  } };
}
function Ra(n) {
  switch (n?.toLowerCase()) {
    case "jpg":
    case "jpeg":
    case "gif":
    case "png":
    case "bmp":
    case "tiff":
    case "pcx":
    case "svg":
    case "ico":
      return !0;
    default:
      return !1;
  }
}
class ov {
  _store;
  constructor(e) {
    this._store = e;
  }
  json(e) {
    const t = document.querySelector(".wx-kanban"), { cards: r, links: a, columns: i, rows: s } = this._store.getState(), l = { cards: r, links: a, columns: i };
    s.length > 0 && (l.rows = s), this._save(l, `${e || "kanban-export"}`, "json", t);
  }
  _save(e, t, r, a) {
    const i = document.createElement("a");
    lt.getTopNode(a).appendChild(i), i.style.display = "none";
    const s = JSON.stringify(e), l = new Blob([s], { type: "octet/stream" }), d = window.URL.createObjectURL(l);
    i.href = d, i.download = `${t}.${r}`, i.click(), window.URL.revokeObjectURL(d), i.remove();
  }
}
function sv(n, e) {
  return { exec: n.in.exec.bind(n.in), on: n.out.on.bind(n.in), intercept: n.in.intercept.bind(n.in), detach: n.in.detach.bind(n.in), getState: n.getState.bind(n), getReactiveState: n.getReactive.bind(n), setNext: (t) => e = e.setNext(t), getStores: () => ({ data: n }), getCard: (t) => {
    const { cards: r } = n.getState();
    return r.find((a) => a.id == t);
  }, serialize: () => {
    const { cards: t, links: r, columns: a, rows: i } = n.getState();
    return { cards: t, links: r, columns: a, rows: i };
  }, export: new ov(n), getAreaCards: (t, r) => {
    const a = Oe(t, r);
    return n.getState()._cardsMap[a];
  }, getColumnCards: (t) => n.getState()._cardsMap[t] };
}
var lv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cv(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Qi = { exports: {} };
(function(n, e) {
  (function(t, r) {
    n.exports = r();
  })(lv, function() {
    var t = {};
    function r() {
      return typeof navigator.userAgentData == "object" && "mobile" in navigator.userAgentData ? navigator.userAgentData.mobile : (m = navigator.userAgent || navigator.vendor || window.opera, /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(m) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(m.slice(0, 4)));
      var m;
    }
    function a() {
      if (r()) {
        var m = window.innerWidth, w = window.innerHeight, k = Math.min(m, w), b = Math.max(m, w);
        return k <= 480 && b <= 896;
      }
      return !1;
    }
    function i() {
      return t.AppRunsOnLegacyTouchDevice == null && (t.AppRunsOnLegacyTouchDevice = !c("(pointer:fine)") && !c("(pointer:coarse)") && !c("-moz-touch-enabled") && ("ontouchstart" in Window || (navigator.maxTouchPoints || 0) > 0 || /touch|android|iphone|ipod|ipad/i.test(navigator.userAgent))), t.AppRunsOnLegacyTouchDevice;
    }
    function s() {
      return t.DevicePointingAccuracy == null && (l(), d() || t.waitingForLoaded || (t.waitingForLoaded = !0, window.addEventListener("DOMContentLoaded", l))), t.DevicePointingAccuracy;
    }
    function l() {
      t.DeviceCanHover = c("(hover:hover)");
      var m = "fine";
      switch (!0) {
        case c("(pointer:none)"):
          m = "none";
          break;
        case c("(pointer:coarse)"):
        case c("-moz-touch-enabled"):
        case i():
          m = "coarse";
      }
      if (t.DevicePointingAccuracy = m, d()) {
        var w = document.body.classList;
        if (m === "none" !== w.contains("noPointer") || m === "fine" !== w.contains("finePointer") || m === "coarse" !== w.contains("coarsePointer")) switch (document.body.classList.remove("noPointer", "finePointer", "coarsePointer"), m) {
          case "none":
            document.body.classList.add("noPointer");
            break;
          case "fine":
            document.body.classList.add("finePointer");
            break;
          case "coarse":
            document.body.classList.add("coarsePointer");
        }
      }
    }
    function d() {
      return document.readyState === "interactive" || document.readyState === "complete";
    }
    function c(m) {
      var w = window.matchMedia || window.webkitMatchmedia || window.mozMatchmedia || window.oMatchmedia;
      return w != null && w(m).matches;
    }
    function v(m, w) {
      return typeof m.item == "function" ? m.item(w) : m[w];
    }
    function u(m, w) {
      for (var k = 0, b = m.length; k < b; k++) if (w.test(v(m, k))) return !0;
      return !1;
    }
    function h(m, w) {
      if (typeof m != "function") throw new Error("handler function expected");
      t.EventHandlerRegistry == null && (t.EventHandlerRegistry = []);
      for (var k = t.EventHandlerRegistry, b = 0, y = k.length; b < y; b++) if (k[b].Handler === m) return void (k[b].onceOnly = w);
      k.push({ Handler: m, onceOnly: w }), k.length === 1 && (t.AccuracyPoller = setInterval(function() {
        var x = s();
        l(), s() !== x && function() {
          t.EventHandlerRegistry == null && (t.EventHandlerRegistry = []);
          for (var I = t.EventHandlerRegistry, p = 0, P = I.length; p < P; p++) {
            var A = I[p], N = A.Handler, V = A.onceOnly;
            try {
              N(s());
            } catch (W) {
              console.warn("PointingAccuracy observation function failed with", W);
            }
            V && _(N);
          }
        }();
      }, 500));
    }
    function _(m) {
      t.EventHandlerRegistry == null && (t.EventHandlerRegistry = []);
      for (var w = t.EventHandlerRegistry, k = 0, b = w.length; k < b; k++) if (w[k].Handler === m) {
        w.splice(k, 1);
        break;
      }
      w.length === 0 && (clearInterval(t.AccuracyPoller), t.AccuracyPoller = void 0);
    }
    var f = { get isMobile() {
      return r();
    }, get isPhone() {
      return a();
    }, get isTablet() {
      return r() && !a();
    }, get isLegacyTouchDevice() {
      return i();
    }, rewriteMediaQueriesOnLegacyTouchDevices: function m() {
      if (!t.MediaQueriesHaveBeenRewritten && i()) if (d()) {
        for (var w = document.styleSheets, k = 0, b = w.length; k < b; k++) for (var y = w[k].cssRules || w[k].rules, x = 0, I = y.length; x < I; x++) {
          var p = y[x];
          if (p.type === CSSRule.MEDIA_RULE && u(p.media, /handheld/i)) {
            var P = p.media;
            P.mediaText = P.mediaText.replace("handheld", "screen");
          }
        }
        var A = document.getElementsByTagName("link");
        for (k = 0, b = A.length; k < b; k++) {
          var N = A[k];
          /handheld/i.test(N.media) && (N.media = N.media.replace("handheld", "screen"));
        }
        t.MediaQueriesHaveBeenRewritten = !0;
      } else window.addEventListener("DOMContentLoaded", m);
    }, get PointingAccuracy() {
      return s();
    }, get canHover() {
      return t.DevicePointingAccuracy == null && (l(), d() || t.waitingForLoaded || (t.waitingForLoaded = !0, window.addEventListener("DOMContentLoaded", l))), t.DeviceCanHover;
    }, onPointingAccuracyChanged: function(m) {
      h(m, !1);
    }, oncePointingAccuracyChanged: function(m) {
      h(m, !0);
    }, offPointingAccuracyChanged: function(m) {
      _(m);
    }, get observesPointingAccuracy() {
      return t.AccuracyPoller != null;
    } };
    return f;
  });
})(Qi);
var dv = Qi.exports;
const uv = /* @__PURE__ */ cv(dv);
function Zn(n, e) {
  return n.data && (n.data = n.data.map((t) => Zn(t, e))), {
    ...n,
    text: e(n.text),
    css: n.disabled ? "disabled" : ""
  };
}
function vv(n) {
  let e = [];
  n.subscribe((l) => {
    e = l;
  });
  const t = /* @__PURE__ */ new Map(), r = Vr(/* @__PURE__ */ new Map());
  function a(l, d, c) {
    t.set(l, d);
    const v = new ResizeObserver(() => {
      c();
    });
    return v.observe(d), () => {
      v.disconnect();
    };
  }
  function i(l, d, c) {
    const v = typeof c < "u";
    r.update((u) => {
      const h = new Map(u);
      return v ? h.set(l, c) : h.delete(l), h;
    }), r.update((u) => {
      const h = new Map(u);
      for (let _ = d + (v ? 1 : 0); _ < e.length; (_ += 1) - 1) {
        const f = e[_].id, m = t.get(f);
        m && h.set(f, m.offsetLeft);
      }
      return h;
    });
  }
  function s(l, d) {
    t.delete(l), i(l, d);
  }
  wt("column-tracking", {
    register: a,
    unregister: s,
    handleOffsetChange: i,
    get columnOffsets() {
      return r;
    }
  });
}
function Xi() {
  return me("column-tracking");
}
function $i(n, e) {
  return n.map((t) => {
    const r = e(t);
    return t.data && t.data.length && (r.data = $i(t.data, e)), r;
  });
}
function eo(n, e) {
  const t = [];
  return n.forEach((r) => {
    if (r.data) {
      const a = eo(r.data, e);
      a.length && t.push({ ...r, data: a });
    } else
      e(r) && t.push(r);
  }), t;
}
let fv = 1;
function hv(n) {
  return $i(n, (e) => ({ ...e, id: e.id || fv++ }));
}
const mv = {};
function gv(n) {
  return mv[n];
}
var _v = /* @__PURE__ */ C("<i></i>"), wv = /* @__PURE__ */ C('<span class="wx-value svelte-xfznf6"> </span>'), xv = /* @__PURE__ */ C('<span class="wx-subtext svelte-xfznf6"> </span>'), yv = /* @__PURE__ */ C('<i class="wx-sub-icon wxi-angle-right svelte-xfznf6"></i>'), bv = /* @__PURE__ */ C("<div><!> <!> <!> <!></div>");
function pv(n, e) {
  ne(e, !0);
  let t = S(e, "showSub", 15, !1), r = S(e, "activeItem", 15, null);
  function a() {
    t(e.item.data ? e.item.id : !1), r(this);
  }
  var i = bv();
  i.__click = function(...v) {
    e.onclick?.apply(this, v);
  };
  var s = E(i);
  R(s, () => e.item.icon, (v) => {
    var u = _v();
    F(() => we(u, `wx-icon ${e.item.icon ?? ""} svelte-xfznf6`)), g(v, u);
  });
  var l = U(s, 2);
  R(
    l,
    () => e.item.type,
    (v) => {
      var u = $();
      const h = /* @__PURE__ */ z(() => gv(e.item.type));
      var _ = G(u);
      Et(_, () => o(h), (f, m) => {
        m(f, {
          get item() {
            return e.item;
          }
        });
      }), g(v, u);
    },
    (v) => {
      var u = wv(), h = E(u);
      F(() => ee(h, e.item.text)), g(v, u);
    }
  );
  var d = U(l, 2);
  R(d, () => e.item.subtext, (v) => {
    var u = xv(), h = E(u);
    F(() => ee(h, e.item.subtext)), g(v, u);
  });
  var c = U(d, 2);
  R(c, () => e.item.data, (v) => {
    var u = yv();
    g(v, u);
  }), F(() => {
    we(i, `wx-item ${(e.item.css || "") ?? ""} svelte-xfznf6`), Z(i, "data-id", e.item.id);
  }), He("mouseenter", i, a), g(n, i), re();
}
ge(["click"]);
var kv = /* @__PURE__ */ C('<div class="wx-separator svelte-1tqohog"></div>'), Sv = /* @__PURE__ */ C("<!> <!>", 1), Iv = /* @__PURE__ */ C('<div data-wx-menu="true"></div>');
function Zr(n, e) {
  ne(e, !0);
  let t = S(e, "left", 3, 0), r = S(e, "top", 3, 0), a = S(e, "at", 3, "bottom"), i = S(e, "parent", 3, null), s = S(e, "mount", 3, null), l = S(e, "context", 3, null), d = S(e, "css", 3, ""), c = ae(-1e4), v = ae(-1e4), u = ae(20), h = ae(void 0), _ = ae(void 0), f = ae(!1), m = ae(null);
  function w() {
    const I = kl(o(_), i(), a(), t(), r());
    I && (B(c, Q(I.x)), B(v, Q(I.y)), B(u, Q(I.z)), B(h, Q(I.width)));
  }
  s() && s()(w), ht(w);
  function k() {
    B(f, !1);
  }
  function b() {
    e.onclick && e.onclick({ action: null });
  }
  const y = /* @__PURE__ */ z(() => hv(e.options));
  at(() => {
    w(i());
  });
  var x = Iv();
  Se(x, 21, () => o(y), (I) => I.id, (I, p) => {
    var P = Sv(), A = G(P);
    R(
      A,
      () => o(p).type === "separator",
      (V) => {
        var W = kv();
        g(V, W);
      },
      (V) => {
        pv(V, {
          get item() {
            return o(p);
          },
          get showSub() {
            return o(f);
          },
          set showSub(W) {
            B(f, Q(W));
          },
          get activeItem() {
            return o(m);
          },
          set activeItem(W) {
            B(m, Q(W));
          },
          onclick: (W) => {
            if (!o(p).data && !W.defaultPrevented) {
              const J = {
                context: l(),
                action: o(p),
                event: W
              };
              o(p).handler && o(p).handler(J), e.onclick && e.onclick(J), W.stopPropagation();
            }
          }
        });
      }
    );
    var N = U(A, 2);
    R(N, () => o(p).data && o(f) === o(p).id, (V) => {
      Zr(V, {
        get css() {
          return d();
        },
        get options() {
          return o(p).data;
        },
        at: "right-overlap",
        get parent() {
          return o(m);
        },
        get context() {
          return l();
        },
        get onclick() {
          return e.onclick;
        }
      });
    }), g(I, P);
  }), ze(x, (I, p) => Pi(I, p), () => ({ callback: b, modal: !0 })), Te(x, (I) => B(_, I), () => o(_)), F(() => {
    we(x, `wx-menu ${d() ?? ""} svelte-1tqohog`), Z(x, "style", `position:absolute;top:${o(v) ?? ""}px;left:${o(c) ?? ""}px;width:${o(h) ?? ""};z-index:${o(u) ?? ""}`);
  }), He("mouseleave", x, k), g(n, x), re();
}
var Cv = /* @__PURE__ */ C('<span data-menu-ignore="true"><!></span>'), Ev = /* @__PURE__ */ C("<!> <!>", 1);
function Qn(n, e) {
  ne(e, !0);
  let t = S(e, "at", 3, "bottom"), r = S(e, "resolver", 3, null), a = S(e, "dataKey", 3, "contextId"), i = S(e, "filter", 3, null), s = S(e, "css", 3, "");
  var l = /* @__PURE__ */ z(() => Xe(d) !== null && i() ? eo(e.options, (b) => i()(b, Xe(d))) : e.options), d = ae(null), c = ae(null);
  let v = ae(0), u = ae(0);
  function h(b) {
    B(c, null), e.onclick && e.onclick(b);
  }
  function _(b, y) {
    let x = null;
    for (; b && b.dataset && !x; )
      x = b.dataset[y], b = b.parentNode;
    return x ? Hr(x) : null;
  }
  function f(b, y) {
    if (!b) {
      B(c, null);
      return;
    }
    if (b.defaultPrevented) return;
    const x = b.target;
    x && x.dataset && x.dataset.menuIgnore || (B(v, b.clientX + 1), B(u, b.clientY + 1), B(d, Q(typeof y < "u" ? y : _(x, a()))), !(r() && (B(d, Q(r()(Xe(d), b))), !Xe(d))) && (B(c, Q(x)), b.preventDefault()));
  }
  var m = Ev(), w = G(m);
  R(w, () => e.children, (b) => {
    var y = Cv();
    y.__click = f;
    var x = E(y);
    Ie(x, () => e.children ?? Ce), g(b, y);
  });
  var k = U(w, 2);
  return R(k, () => Xe(c), (b) => {
    Kr(b, { children: (x, I) => {
      let p = () => I?.().mount;
      var P = $(), A = G(P);
      Si(A, () => Xe(c), (N) => {
        Zr(N, {
          get css() {
            return s();
          },
          get at() {
            return t();
          },
          get top() {
            return o(u);
          },
          get left() {
            return o(v);
          },
          get mount() {
            return p();
          },
          get parent() {
            return Xe(c);
          },
          get context() {
            return Xe(d);
          },
          onclick: h,
          get options() {
            return Xe(l);
          }
        });
      }), g(x, P);
    }, $$slots: { default: !0 } });
  }), g(n, m), re({ show: f });
}
ge(["click"]);
ge(["click"]);
var Dv = /* @__PURE__ */ C('<span data-menu-ignore="true"><!></span> <!>', 1);
function Mv(n, e) {
  ne(e, !0);
  let t = S(e, "at", 3, "bottom"), r = S(e, "css", 3, "");
  const a = (h) => {
    B(i, Q(h.target)), h.preventDefault();
  };
  var i = ae(null);
  function s(h) {
    B(i, null), e.onclick && e.onclick(h);
  }
  function l(h) {
    let _ = h.target;
    for (; !_.dataset.menuIgnore; )
      B(i, Q(_)), _ = _.parentNode;
  }
  var d = Dv(), c = G(d);
  c.__click = l;
  var v = E(c);
  Ie(v, () => e.children ?? Ce);
  var u = U(c, 2);
  return R(u, () => Xe(i), (h) => {
    Kr(h, { children: (f, m) => {
      let w = () => m?.().mount;
      var k = $(), b = G(k);
      Si(b, () => Xe(i), (y) => {
        Zr(y, {
          get css() {
            return r();
          },
          get at() {
            return t();
          },
          get mount() {
            return w();
          },
          get parent() {
            return Xe(i);
          },
          get options() {
            return e.options;
          },
          onclick: s
        });
      }), g(f, k);
    }, $$slots: { default: !0 } });
  }), g(n, d), re({ handler: a });
}
ge(["click"]);
ge(["contextmenu"]);
var Av = /* @__PURE__ */ C('<div class="wx-list-wrapper svelte-jco5m0" data-id="virtual-content"><div class="wx-content svelte-jco5m0"><!></div></div>');
function Tv(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(_, "$cardHeight", t), a = () => ce(h, "$rows", t), i = () => ce(u, "$columns", t), s = () => ce(v, "$_cardsMap", t), l = () => ce(f, "$cards", t), d = () => ce(m, "$columnKey", t), c = me("wx-kanban-store"), {
    _cardsMap: v,
    columns: u,
    rows: h,
    cardHeight: _,
    cards: f,
    columnKey: m,
    _scroll: w
  } = c.getReactiveState(), k = 10, b = /* @__PURE__ */ z(() => r() + k), y = /* @__PURE__ */ z(() => o(b) * 2);
  let x = ae(void 0), I = ae(0), p = ae(Q({})), P = ae(0), A = ae(1), N = ae(0), V = ae(0);
  function W() {
    const T = {};
    return B(I, Q(a().reduce(
      (O, K) => {
        if (K.collapsed)
          return O;
        const j = i().reduce(
          (te, ie) => {
            const ve = Oe(ie.id, K.id), X = s()[ve].length;
            return X > te && (te = X), te;
          },
          0
        );
        return T[K.id] = {
          id: K.id,
          maxCardsCount: j,
          minIndex: O,
          maxIndex: O + j,
          startIndex: 0,
          endIndex: 0,
          visible: !0
        }, O + j;
      },
      0
    ))), L(), B(N, o(P) * o(b)), B(V, (o(I) - o(A)) * o(b)), T;
  }
  async function J(T) {
    if (o(x).querySelector(`[data-drag-item="${T}"]`))
      return;
    const K = l().find((X) => le(X.id, T)), j = Ln(K, d()), te = s()[j].findIndex((X) => le(X.id, T)), ie = i().findIndex((X) => X.id == j), ve = parseFloat(getComputedStyle(o(x)).getPropertyValue("--wx-kanban-column-width")) || 300;
    return te > -1 ? (await Lt(), o(x).scrollTop = te * o(b), o(x).scrollLeft = ve * ie, !0) : !1;
  }
  function L() {
    const T = o(x).scrollTop - o(y), O = Math.floor(T < 0 ? 0 : T / o(b)), K = O + Math.floor((o(x).offsetHeight + o(y) * 2) / o(b));
    if (K >= o(I)) {
      B(P, Q(O)), B(A, Q(o(I)));
      return;
    }
    B(P, Q(O)), B(A, K);
  }
  function D(T, O, K) {
    const j = {};
    a().forEach((te) => {
      const ie = T[te.id] || { ...o(p)[te.id] }, ve = O - ie.minIndex, X = ve + (K - O);
      ie.startIndex = ve < 0 ? 0 : ve, ie.endIndex = X > ie.maxIndex ? ie.maxIndex : X, ie.visible = ve <= ie.maxIndex && X >= 0, te.collapsed && (ie.visible = !0), j[te.id] = ie;
    }), B(p, Q(j));
  }
  function M() {
    L();
  }
  at(() => {
    a(), o(P), o(A), s() && pe(() => {
      const T = W();
      D(T, o(P), o(A));
    });
  }), w.subscribe((T) => {
    o(x) && T?.to === "card" && T.id && J(T.id).then((O) => {
      O && c.exec("scroll", null);
    });
  });
  var q = Av(), Y = E(q), H = E(Y);
  Ie(H, () => e.children ?? Ce, () => ({
    startIndex: o(P),
    endIndex: o(A),
    byRow: o(p)
  })), Te(q, (T) => B(x, T), () => o(x)), ze(q, (T) => Jr(T)), F(() => Z(Y, "style", `padding-top:${o(N) ?? ""}px;padding-bottom:${o(V) ?? ""}px;`)), He("scroll", q, M), g(n, q), re();
}
function Pv(n, e) {
  ne(e, !1);
  const t = me("wx-i18n"), r = t.getGroup("kanban");
  return Di(), fa(e, "locale", t), fa(e, "_", r), re({ locale: t, _: r });
}
var Rv = /* @__PURE__ */ C('<img class="svelte-4yp8c0">'), Lv = /* @__PURE__ */ C("<div><!></div>");
function Gt(n, e) {
  ne(e, !0);
  let t = S(e, "data", 19, () => ({ label: "", avatar: "", avatarColor: "" })), r = S(e, "noTransform", 3, !1), a = S(e, "size", 3, "normal");
  const i = /* @__PURE__ */ z(() => t().label.split(" ").map((c) => c[0]).join("")), s = /* @__PURE__ */ z(() => `${t().avatarColor ? `background: ${t().avatarColor};` : ""}`);
  var l = Lv(), d = E(l);
  R(
    d,
    () => t().avatar,
    (c) => {
      var v = Rv();
      F(() => {
        Z(v, "src", t().avatar), Z(v, "alt", t().label);
      }), g(c, v);
    },
    (c) => {
      var v = $(), u = G(v);
      R(
        u,
        r,
        (h) => {
          var _ = ke();
          F(() => ee(_, t().label)), g(h, _);
        },
        (h) => {
          var _ = ke();
          F(() => ee(_, o(i))), g(h, _);
        },
        !0
      ), g(c, v);
    }
  ), F(() => {
    we(l, `wx-user ${a() ?? ""} svelte-4yp8c0`), Z(l, "style", o(s)), he(l, "wx-transform", !t().avatarColor);
  }), g(n, l), re();
}
var Fv = /* @__PURE__ */ C('<div class="wx-menu svelte-gu515o"><!></div>'), Ov = /* @__PURE__ */ C('<!> <div class="wx-edit-btns svelte-gu515o"><div class="wx-comment-textarea-btn svelte-gu515o"><!></div> <div class="wx-comment-textarea-btn svelte-gu515o"><!></div></div>', 1), zv = /* @__PURE__ */ C('<pre class="wx-text svelte-gu515o"> </pre>'), Bv = /* @__PURE__ */ C('<div class="wx-comment svelte-gu515o"><div class="wx-comment-icon svelte-gu515o"><!></div> <div class="wx-content svelte-gu515o"><div class="wx-comment-header svelte-gu515o"><div class="wx-name svelte-gu515o"> </div> <!></div> <div class="wx-date svelte-gu515o"> </div> <!></div></div>'), Nv = /* @__PURE__ */ C('<div class="wx-comment-list svelte-gu515o"></div>'), Hv = /* @__PURE__ */ C('<div class="wx-kanban-no-comments svelte-gu515o"> </div>'), qv = /* @__PURE__ */ C('<div class="wx-new-comment-wrapper svelte-gu515o"><div class="wx-new-comment svelte-gu515o"><div class="wx-comment-icon svelte-gu515o"><!></div> <!></div> <div class="wx-comment-textarea-btn svelte-gu515o"><!> <!></div></div>'), Uv = /* @__PURE__ */ C('<div class="wx-comments svelte-gu515o"><!> <!> <!></div>');
function to(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(_, "$selected", t), a = () => ce(h, "$currentUser", t);
  let i = S(e, "comments", 7), s = S(e, "users", 19, () => []), l = S(e, "handleViewChange", 3, null);
  const d = me("wx-kanban-store"), c = me("wx-i18n"), v = c.getGroup("kanban"), { showModal: u } = me("wx-helpers"), { currentUser: h, selected: _ } = d.getReactiveState(), f = /* @__PURE__ */ z(() => r()?.[0]), m = e.shape.config || {}, w = s().reduce(
    (H, T) => (H[T.id] = T, H),
    {}
  ), k = m.format || "%M %d %Y %h:%i", b = Ct(k, c.getRaw().calendar);
  let y = ae("");
  function x() {
    o(y) && d.exec("add-comment", {
      id: Br(),
      cardId: o(f),
      comment: {
        text: o(y),
        date: /* @__PURE__ */ new Date()
      }
    }).then(() => {
      i(d.getCard(o(f)).comments), B(y, "");
    });
  }
  let I = ae(null), p = ae(null);
  function P(H) {
    B(I, Q(H.id)), B(p, Q(H.text));
  }
  function A() {
    o(p) && d.exec("update-comment", {
      cardId: o(f),
      id: o(I),
      comment: { text: o(p) }
    }).then(() => {
      i(d.getCard(o(f)).comments);
    }), N();
  }
  function N() {
    B(I, null), B(p, null);
  }
  function V(H) {
    (m.confirmDeletion ?? !0 ? u({
      message: v("Would you like to delete this comment?")
    }) : Promise.resolve()).then(() => {
      d.exec("delete-comment", { cardId: o(f), id: H }).then(() => {
        i(d.getCard(o(f)).comments);
      });
    }).catch(() => {
    });
  }
  function W(H) {
    const { context: T, action: O } = H;
    if (O)
      switch (O.id) {
        case "edit-comment":
          P(i().find((K) => K.id == T));
          break;
        case "delete-comment":
          V(T);
          break;
      }
  }
  let J = ae(null);
  const L = [
    {
      id: "edit-comment",
      text: v("Edit"),
      icon: "wxi-edit-outline"
    },
    {
      id: "delete-comment",
      text: v("Delete"),
      icon: "wxi-delete-outline"
    }
  ];
  var D = Uv(), M = E(D);
  R(
    M,
    () => i().length,
    (H) => {
      var T = Nv();
      T.__click = function(...O) {
        o(J).show?.apply(this, O);
      }, Se(T, 21, i, (O) => O.id, (O, K) => {
        var j = Bv(), te = E(j), ie = E(te);
        Gt(ie, {
          size: "small",
          get data() {
            return w[o(K).userId];
          }
        });
        var ve = U(te, 2), X = E(ve), oe = E(X), se = E(oe), de = U(oe, 2);
        R(de, () => o(I) !== o(K).id && le(o(K).userId, a()), (Ae) => {
          var be = Fv(), ye = E(be);
          De(ye, { css: "wxi-dots-v" }), F(() => Z(be, "data-menu-id", o(K).id)), g(Ae, be);
        });
        var ue = U(X, 2), fe = E(ue);
        F(() => ee(fe, b(o(K).date)));
        var _e = U(ue, 2);
        R(
          _e,
          () => le(o(I), o(K).id),
          (Ae) => {
            var be = Ov(), ye = G(be);
            hr(ye, {
              get value() {
                return o(p);
              },
              set value(tt) {
                B(p, Q(tt));
              }
            });
            var Le = U(ye, 2), Pe = E(Le), Be = E(Pe);
            Re(Be, {
              type: "secondary",
              onclick: N,
              children: (tt, Ue) => {
                var nt = ke();
                F(() => ee(nt, v("Cancel"))), g(tt, nt);
              },
              $$slots: { default: !0 }
            });
            var Tt = U(Pe, 2), et = E(Tt);
            Re(et, {
              type: "primary",
              onclick: A,
              children: (tt, Ue) => {
                var nt = ke();
                F(() => ee(nt, v("Save"))), g(tt, nt);
              },
              $$slots: { default: !0 }
            }), g(Ae, be);
          },
          (Ae) => {
            var be = $(), ye = G(be);
            R(
              ye,
              () => o(K).html && m.html,
              (Le) => {
                var Pe = $(), Be = G(Pe);
                Gn(Be, () => o(K).html), g(Le, Pe);
              },
              (Le) => {
                var Pe = zv(), Be = E(Pe);
                F(() => ee(Be, o(K).text)), g(Le, Pe);
              },
              !0
            ), g(Ae, be);
          }
        ), F(() => {
          Z(j, "data-comment-id", o(K).id), ee(se, w[o(K).userId].label);
        }), g(O, j);
      }), g(H, T);
    },
    (H) => {
      var T = $(), O = G(T);
      R(
        O,
        () => !a(),
        (K) => {
          var j = Hv(), te = E(j);
          F(() => ee(te, v("No comments yet"))), g(K, j);
        },
        null,
        !0
      ), g(H, T);
    }
  );
  var q = U(M, 2);
  Te(
    Qn(q, {
      at: "left-bottom",
      options: L,
      resolver: (H) => H,
      dataKey: "menuId",
      onclick: W
    }),
    (H) => B(J, Q(H)),
    () => o(J)
  );
  var Y = U(q, 2);
  R(Y, () => a() && !o(I), (H) => {
    var T = qv(), O = E(T), K = E(O), j = E(K);
    Gt(j, {
      size: "small",
      get data() {
        return w[a()];
      }
    });
    var te = U(K, 2), ie = /* @__PURE__ */ z(() => v("Add a comment..."));
    hr(te, {
      get value() {
        return o(y);
      },
      set value(de) {
        B(y, Q(de));
      },
      get placeholder() {
        return o(ie);
      }
    });
    var ve = U(O, 2), X = E(ve), oe = /* @__PURE__ */ z(() => !o(y));
    Re(X, {
      get disabled() {
        return o(oe);
      },
      type: "primary",
      onclick: x,
      children: (de, ue) => {
        var fe = ke();
        F(() => ee(fe, v("Send"))), g(de, fe);
      },
      $$slots: { default: !0 }
    });
    var se = U(X, 2);
    R(se, () => m.placement === "page" && e.placement === "modal", (de) => {
      Re(de, {
        type: "secondary",
        onclick: () => l()("main"),
        children: (ue, fe) => {
          var _e = ke();
          F(() => ee(_e, v("Back"))), g(ue, _e);
        },
        $$slots: { default: !0 }
      });
    }), g(H, T);
  }), g(n, D), re();
}
ge(["click"]);
const Yv = "wx-uploader-api", Kv = {
  uploader: {
    B: "B",
    KB: "KB",
    MB: "MB",
    GB: "GB",
    TB: "TB",
    PB: "PB",
    EB: "EB",
    "Drop files here or": "Drop files here or",
    "select files": "select files"
  }
};
function La(n, e) {
  Array.from(n.target.files).forEach((r) => e(r));
}
var Vv = /* @__PURE__ */ C('<input type="file" class="input svelte-15jokro"> <!>', 1), Gv = /* @__PURE__ */ C('<div class="dropzone svelte-15jokro"><span> <span class="action svelte-15jokro"> </span></span></div>'), Wv = /* @__PURE__ */ C('<div class="label svelte-15jokro"><input type="file" class="input svelte-15jokro"> <!></div>');
function jv(n, e) {
  ne(e, !0);
  let t = S(e, "data", 31, () => Q([])), r = S(e, "ready", 31, () => Q(new Promise(() => ({})))), a = S(e, "accept", 3, ""), i = S(e, "multiple", 3, !0), s = S(e, "folder", 3, !1), l = S(e, "uploadURL", 3, ""), d = S(e, "apiOnly", 3, !1), c = S(e, "disabled", 3, !1), v = ae(void 0), u = ae(void 0), h = 0, _ = {}, f = me("wx-i18n");
  f || (f = Jt(Kv), wt("wx-i18n", f));
  const m = me("wx-i18n").getGroup("uploader"), w = (L, D) => {
    c() || (D = D || {}, L.addEventListener("dragenter", () => {
      D.dragEnter && D.dragEnter(), A();
    }), L.addEventListener("dragleave", () => {
      D.dragEnter && D.dragLeave(), N();
    }), L.addEventListener("dragover", (M) => M.preventDefault(), !0), L.addEventListener(
      "drop",
      (M) => {
        M.preventDefault(), _ = D, k(M), D.dragEnter && D.dragLeave();
      },
      !0
    ));
  };
  ht(() => {
    o(v).webkitdirectory = s();
  });
  function k(L) {
    Array.from(L.dataTransfer.items).forEach((M) => {
      const q = M.webkitGetAsEntry();
      q && b(q);
    }), B(u, !1), h = 0;
  }
  function b(L, D) {
    D = D || "", L.isFile ? L.file((M) => {
      y(M);
    }) : L.isDirectory && L.createReader().readEntries((q) => {
      q.forEach((Y) => {
        b(Y, D + Y.name + "/");
      });
    });
  }
  function y(L) {
    const D = {
      ..._,
      id: qe(),
      status: "client",
      name: L.name,
      file: L
    };
    D.selected && D.selected(D), e.onchange && e.onchange(D), i() ? t([...t(), D]) : t([D]), I(D), o(v).value = "";
  }
  function x(L) {
    const D = new FormData();
    D.append("upload", L.file);
    const M = { method: "POST", body: D };
    return fetch(l(), M).then((q) => q.json()).then((q) => ({ id: L.id, ...q }), () => ({ id: L.id, status: "error" })).catch((q) => console.log(q));
  }
  function I(L) {
    if (!L) return;
    const D = typeof l() == "function" ? l()(L) : x(L);
    r(D.then((M) => {
      M.status = M.status || "server", P(L.id, M);
    }).catch((M) => {
      P(L.id, { status: "error", error: M });
    }));
  }
  function p() {
    let L = "server";
    for (let D = 0; D < t().length; (D += 1) - 1) {
      if (t()[D].status === "client") return "client";
      t()[D].status === "error" && (L = "error");
    }
    return L;
  }
  function P(L, D) {
    const M = t().findIndex((H) => H.id == L), q = t(t()[M] = { ...t()[M], ...D }, !0), Y = { ...q, status: p() };
    q && q.uploaded && q.uploaded(Y), e.onupload && e.onupload(Y), q.temp && t(t().filter((H) => H.id != L));
  }
  function A() {
    h === 0 && B(u, !0), h += 1;
  }
  function N() {
    h -= 1, h === 0 && B(u, !1);
  }
  function V(L) {
    _ = L || {}, o(v).click();
  }
  wt(Yv, { open: V, getState: p, droparea: w });
  var W = $(), J = G(W);
  return R(
    J,
    d,
    (L) => {
      var D = Vv(), M = G(D);
      M.__change = [La, y], Te(M, (Y) => B(v, Y), () => o(v));
      var q = U(M, 2);
      Ie(q, () => e.children ?? Ce), F(() => {
        Z(M, "accept", a()), M.multiple = i(), M.disabled = c();
      }), g(L, D);
    },
    (L) => {
      var D = Wv(), M = E(D);
      M.__change = [La, y], Te(M, (Y) => B(v, Y), () => o(v));
      var q = U(M, 2);
      R(
        q,
        () => e.children,
        (Y) => {
          var H = $(), T = G(H);
          Ie(T, () => e.children, () => ({ open: V })), g(Y, H);
        },
        (Y) => {
          var H = Gv(), T = E(H), O = E(T);
          F(() => ee(O, `${m("Drop files here or") ?? ""}  `));
          var K = U(O);
          K.__click = V;
          var j = E(K);
          F(() => ee(j, m("select files"))), g(Y, H);
        }
      ), ze(D, (Y) => w(Y)), F(() => {
        he(D, "active", o(u)), he(D, "wx-disabled", c()), Z(M, "accept", a()), M.multiple = i(), M.disabled = c();
      }), g(L, D);
    }
  ), g(n, W), re({ droparea: w, getState: p, open: V });
}
ge(["change", "click"]);
ge(["click"]);
var Jv = /* @__PURE__ */ C('<div class="wx-thumb svelte-l8op85"></div>'), Zv = /* @__PURE__ */ C('<div class="wx-size"> </div>'), Qv = /* @__PURE__ */ C("<!> <!>", 1), Xv = /* @__PURE__ */ C('<div class="wx-hidden svelte-l8op85"><a class="wx-upload-link svelte-l8op85" target="_blank" rel="noreferrer nofollow noopener"><!></a> <!> <!></div>'), $v = /* @__PURE__ */ C('<div class="wx-row svelte-l8op85"><div class="wx-file-icon svelte-l8op85"><!></div> <div class="wx-name svelte-l8op85"> </div> <!> <div class="wx-controls svelte-l8op85"><!></div></div>'), ef = /* @__PURE__ */ C('<div class="wx-layout svelte-l8op85"><div class="wx-header svelte-l8op85"><!></div> <div class="wx-list svelte-l8op85"></div></div>');
function tf(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(e.data, "$data", t), a = me("wx-i18n").getGroup("kanban"), i = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];
  function s() {
    e.data.set([]);
  }
  function l(f) {
    e.data.update((m) => m.filter((w) => w.id !== f));
  }
  function d(f) {
    let m = 0;
    for (; f > 1024; )
      m += 1, f = f / 1024;
    return Math.round(f * 100) / 100 + " " + a(i[m]);
  }
  function c(f) {
    const m = f?.url?.split(".").pop(), w = f?.previewURL?.split(".").pop();
    return Ra(w) || Ra(m);
  }
  function v(f) {
    e.data.update((m) => m.map((w) => {
      if (w.id === f)
        return { ...w, isCover: !0 };
      {
        const k = { ...w };
        return delete k.isCover, k;
      }
    }));
  }
  function u() {
    e.data.update((f) => f.map((m) => {
      const w = { ...m };
      return delete w.isCover, w;
    }));
  }
  var h = $(), _ = G(h);
  R(_, () => r().length, (f) => {
    var m = ef(), w = E(m), k = E(w);
    De(k, { css: "wxi-close", onclick: s });
    var b = U(w, 2);
    Se(b, 5, r, (y) => y.id, (y, x) => {
      var I = $v(), p = E(I), P = E(p);
      R(
        P,
        () => c(o(x)),
        (L) => {
          var D = Jv();
          F(() => Z(D, "style", `background-image: url('${(o(x).previewURL || o(x).url) ?? ""}')`)), g(L, D);
        },
        (L) => {
          De(L, { css: "wxi-paperclip" });
        }
      );
      var A = U(p, 2), N = E(A), V = U(A, 2);
      R(V, () => o(x).size, (L) => {
        var D = Zv(), M = E(D);
        F(() => ee(M, d(o(x).size))), g(L, D);
      });
      var W = U(V, 2), J = E(W);
      R(
        J,
        () => o(x).status === "client",
        (L) => {
          De(L, { css: "wxi-loading wx-spin" });
        },
        (L) => {
          var D = $(), M = G(D);
          R(
            M,
            () => o(x).status === "error",
            (q) => {
              var Y = Qv(), H = G(Y);
              De(H, { css: "wxi-alert" });
              var T = U(H, 2);
              De(T, {
                css: "wxi-delete-outline",
                onclick: () => l(o(x).id)
              }), g(q, Y);
            },
            (q) => {
              var Y = $(), H = G(Y);
              R(
                H,
                () => !o(x).status || o(x).status === "server",
                (T) => {
                  var O = Xv(), K = E(O), j = E(K);
                  De(j, { css: "wxi-external" });
                  var te = U(K, 2);
                  De(te, {
                    css: "wxi-delete-outline",
                    onclick: () => l(o(x).id)
                  });
                  var ie = U(te, 2);
                  R(ie, () => c(o(x)), (ve) => {
                    var X = $(), oe = G(X);
                    R(
                      oe,
                      () => !o(x).isCover,
                      (se) => {
                        Re(se, {
                          onclick: () => v(o(x).id),
                          children: (de, ue) => {
                            var fe = ke();
                            F(() => ee(fe, a("Make cover"))), g(de, fe);
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      (se) => {
                        Re(se, {
                          onclick: u,
                          children: (de, ue) => {
                            var fe = ke();
                            F(() => ee(fe, a("Remove cover"))), g(de, fe);
                          },
                          $$slots: { default: !0 }
                        });
                      }
                    ), g(ve, X);
                  }), F(() => {
                    Z(K, "href", o(x).url), Z(K, "download", o(x).name);
                  }), g(T, O);
                },
                null,
                !0
              ), g(q, Y);
            },
            !0
          ), g(L, D);
        }
      ), F(() => ee(N, o(x).name)), g(y, I);
    }), g(f, m);
  }), g(n, h), re();
}
var nf = /* @__PURE__ */ C('<div class="wx-files-control svelte-1vstfbt"><!>  <!></div>');
function rf(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(a, "$files", t);
  let a = Vr(null);
  const i = e.values.subscribe((u) => {
    a.set(u[e.field.key] || []);
  });
  function s(u) {
    e.values.update((h) => {
      const _ = u.filter((f) => f.status !== "error").map((f) => {
        const m = { ...f };
        return delete m.__root, f.file && (m.size = f.file.size, delete m.file), m;
      });
      return h[e.field.key] = _, h;
    });
  }
  const l = a.subscribe((u) => {
    u.find((h) => h.status === "client") || s(u);
  });
  zr(() => {
    l(), i();
  });
  var d = nf(), c = E(d);
  tf(c, { data: a });
  var v = U(c, 2);
  jv(v, We(
    {
      get data() {
        return cs(), r();
      },
      set data(u) {
        ls(a, Q(u));
      }
    },
    () => e.field
  )), g(n, d), re();
}
function af(n, e) {
  B(e, !0);
}
var of = /* @__PURE__ */ C('<!> <div class="wx-buttons svelte-d1z2io"><!> <!> <!></div>', 1), sf = /* @__PURE__ */ C('<div class="wx-layout svelte-d1z2io"><!> <div class="wx-input-icon svelte-d1z2io"><!></div> <!></div>');
function lf(n, e) {
  ne(e, !0);
  let t = S(e, "start", 15), r = S(e, "end", 15), a = S(e, "id", 19, qe);
  const i = me("wx-i18n").getGroup("calendar");
  let s = ae(void 0), l = typeof e.format == "function" ? e.format : Ct(e.format, i);
  function d(b) {
    b.stopPropagation(), B(s, null);
  }
  function c() {
    const b = /* @__PURE__ */ new Date();
    t(b), r(b);
  }
  function v() {
    t(null), r(null);
  }
  const u = /* @__PURE__ */ z(() => t() ? l(t()) + (r() ? ` - ${l(r())}` : "") : "");
  let h = ae(void 0);
  var _ = sf();
  He("scroll", An, d), _.__click = [af, s];
  var f = E(_);
  Jn(f, {
    get value() {
      return o(u);
    },
    get id() {
      return a();
    },
    readonly: !0,
    inputStyle: "cursor: pointer; text-overflow: ellipsis; padding-right: 18px;"
  });
  var m = U(f, 2), w = E(m);
  De(w, { css: "wxi-calendar" });
  var k = U(m, 2);
  R(k, () => o(s), (b) => {
    Kr(b, {
      get target() {
        return o(h);
      },
      children: (y, x) => {
        Mt(y, {
          oncancel: d,
          width: "unset",
          children: (I, p) => {
            var P = of(), A = G(P);
            $c(A, {
              get start() {
                return t();
              },
              set start(L) {
                t(L);
              },
              get end() {
                return r();
              },
              set end(L) {
                r(L);
              },
              buttons: []
            });
            var N = U(A, 2), V = E(N);
            Re(V, {
              type: "link",
              css: "wx-calendar-btn",
              onclick: v,
              children: (L, D) => {
                var M = ke("Clear");
                g(L, M);
              },
              $$slots: { default: !0 }
            });
            var W = U(V, 2);
            Re(W, {
              type: "link",
              css: " wx-calendar-btn",
              onclick: c,
              children: (L, D) => {
                var M = ke("Today");
                g(L, M);
              },
              $$slots: { default: !0 }
            });
            var J = U(W, 2);
            Re(J, {
              type: "primary",
              css: " wx-calendar-btn",
              onclick: d,
              children: (L, D) => {
                var M = ke("Done");
                g(L, M);
              },
              $$slots: { default: !0 }
            }), g(I, P);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 }
    });
  }), Te(_, (b) => B(h, b), () => o(h)), g(n, _), re();
}
ge(["click"]);
function cf(n, e) {
  ne(e, !0);
  let t = S(e, "start", 15), r = S(e, "end", 15), a = S(e, "id", 19, qe);
  lf(n, {
    get start() {
      return t();
    },
    set start(i) {
      t(i);
    },
    get end() {
      return r();
    },
    set end(i) {
      r(i);
    },
    get id() {
      return a();
    },
    get format() {
      return e.format;
    }
  }), re();
}
function df(n, e) {
  e(n.target.value);
}
var uf = /* @__PURE__ */ C('<input type="text" class="wx-title svelte-18nf24j">');
function vf(n, e) {
  ne(e, !0);
  let t = S(e, "id", 19, () => String(vl())), r = S(e, "value", 15, ""), a = S(e, "focus", 3, !1), i = S(e, "placeholder", 3, ""), s = S(e, "readonly", 3, !1), l = S(e, "disabled", 3, !1);
  function d(v) {
    a() && v.focus();
  }
  var c = uf();
  c.__input = [df, r], ze(c, (v) => d(v)), F(() => {
    Z(c, "id", t()), Bt(c, r()), Z(c, "placeholder", i()), c.readOnly = s(), c.disabled = l();
  }), g(n, c), re();
}
ge(["input"]);
function ff(n, e, t, r) {
  B(e, !0), B(t, null), B(r, null);
}
var hf = (n, e, t) => e(o(t)), mf = /* @__PURE__ */ C('<div class="wx-link svelte-1wjxxyz"><div class="wx-link-content"><div class="wx-relates svelte-1wjxxyz"> </div> <div class="wx-task svelte-1wjxxyz"> </div></div> <div class="wx-delete-icon svelte-1wjxxyz"><!></div></div>'), gf = /* @__PURE__ */ C('<div class="wx-set-link svelte-1wjxxyz"><div class="wx-combos-wrapper svelte-1wjxxyz"><div class="wx-relates-combo svelte-1wjxxyz"><!></div> <div class="wx-tasks-combo svelte-1wjxxyz"><!></div></div> <div class="wx-btns-wrapper svelte-1wjxxyz"><div class="wx-cancel-btn"><!></div> <div class="wx-link-btn svelte-1wjxxyz"><!></div></div></div>'), _f = /* @__PURE__ */ C('<div class="wx-add-link svelte-1wjxxyz"><!> <span> </span></div>'), wf = /* @__PURE__ */ C("<div><!> <!></div>");
function xf(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(d, "$cards", t), a = () => ce(c, "$links", t), i = me("wx-kanban-store"), s = me("wx-i18n").getGroup("kanban"), { showModal: l } = me("wx-helpers"), { cards: d, links: c } = i.getReactiveState(), v = [
    {
      id: 1,
      relation: "relatesTo",
      source: !1,
      label: s("Relates to")
    },
    {
      id: 2,
      relation: "requiredFor",
      source: !0,
      label: s("Is required for")
    },
    {
      id: 3,
      relation: "requiredFor",
      source: !1,
      label: s("Depends on")
    },
    {
      id: 4,
      relation: "duplicate",
      source: !0,
      label: s("Duplicates")
    },
    {
      id: 5,
      relation: "duplicate",
      source: !1,
      label: s("Is duplicated by")
    },
    {
      id: 6,
      relation: "parent",
      source: !0,
      label: s("Is parent for")
    },
    {
      id: 7,
      relation: "parent",
      source: !1,
      label: s("Is subtask of")
    }
  ];
  let u = ae(null);
  const h = /* @__PURE__ */ z(() => v.find((L) => le(L.id, o(u)))?.relation);
  let _ = ae(null), f = ae(!1);
  const m = e.shape.config || {}, w = /* @__PURE__ */ z(() => {
    if (e.card)
      return r(), a().filter((L) => le(L.source, e.card.id) && i.getCard(L.target) || le(L.target, e.card.id) && i.getCard(L.source)).map((L) => {
        const D = { ...L };
        return D.isSource = le(D.source, e.card.id), D.label = v.find((M) => M.relation === D.relation && (D.relation === "relatesTo" || D.isSource === M.source)).label, D;
      });
  }), k = /* @__PURE__ */ z(() => {
    if (!o(w)) return !1;
    let L = r().filter((D) => !le(D.id, e.card.id));
    return o(h) && (L = L.filter((D) => !o(w).find((M) => (le(D.id, M.target) && le(M.source, e.card.id) || le(D.id, M.source) && le(M.target, e.card.id)) && M.relation === o(h)))), L;
  }), b = /* @__PURE__ */ z(() => e.card?.id);
  at(() => {
    o(b) && y();
  });
  function y() {
    B(f, !1), B(_, null), B(u, null);
  }
  function x(L) {
    const D = L.isSource ? "target" : "source";
    return i.getCard(L[D]).label;
  }
  function I() {
    if (o(u) && o(_)) {
      const L = v.find((D) => le(D.id, o(u))).source;
      i.exec("add-link", {
        link: {
          source: L ? e.card.id : o(_),
          target: L ? o(_) : e.card.id,
          relation: o(h)
        }
      }), y();
    }
  }
  function p(L) {
    (m.confirmDeletion ?? !0 ? l({
      message: s("Would you like to delete this link?")
    }) : Promise.resolve()).then(() => {
      i.exec("delete-link", { id: L });
    }).catch(() => {
    });
  }
  function P(L) {
    B(u, Q(L.value)), B(_, null);
  }
  function A(L) {
    B(_, Q(L.value));
  }
  function N(L) {
    const D = L.isSource ? "target" : "source";
    i.exec("select-card", { id: L[D] });
  }
  var V = wf(), W = E(V);
  Se(W, 17, () => o(w), (L) => L.id, (L, D) => {
    var M = mf(), q = E(M), Y = E(q), H = E(Y), T = U(Y, 2);
    T.__click = [hf, N, D];
    var O = E(T);
    F(() => ee(O, x(o(D))));
    var K = U(q, 2), j = E(K);
    De(j, {
      css: "wxi-delete-outline",
      onclick: () => p(o(D).id)
    }), F(() => ee(H, o(D).label)), g(L, M);
  });
  var J = U(W, 2);
  R(
    J,
    () => o(f),
    (L) => {
      var D = gf(), M = E(D), q = E(M), Y = E(q), H = /* @__PURE__ */ z(() => s("Select a relation"));
      mr(Y, {
        options: v,
        get value() {
          return o(u);
        },
        get placeholder() {
          return o(H);
        },
        onchange: P,
        children: (de, ue) => {
          let fe = () => ue?.().option;
          var _e = ke();
          F(() => ee(_e, fe().label)), g(de, _e);
        },
        $$slots: { default: !0 }
      });
      var T = U(q, 2), O = E(T), K = /* @__PURE__ */ z(() => s("Select a task")), j = /* @__PURE__ */ z(() => !o(u));
      mr(O, {
        get options() {
          return o(k);
        },
        get value() {
          return o(_);
        },
        get placeholder() {
          return o(K);
        },
        get disabled() {
          return o(j);
        },
        onchange: A,
        children: (de, ue) => {
          let fe = () => ue?.().option;
          var _e = ke();
          F(() => ee(_e, fe().label)), g(de, _e);
        },
        $$slots: { default: !0 }
      });
      var te = U(M, 2), ie = E(te), ve = E(ie);
      Re(ve, {
        type: "secondary block",
        onclick: y,
        children: (se, de) => {
          var ue = ke();
          F(() => ee(ue, s("Cancel"))), g(se, ue);
        },
        $$slots: { default: !0 }
      });
      var X = U(ie, 2), oe = E(X);
      Re(oe, {
        type: "primary block",
        onclick: I,
        children: (se, de) => {
          var ue = ke();
          F(() => ee(ue, s("Link Task"))), g(se, ue);
        },
        $$slots: { default: !0 }
      }), g(L, D);
    },
    (L) => {
      var D = _f();
      D.__click = [
        ff,
        f,
        _,
        u
      ];
      var M = E(D);
      De(M, { css: "wxi-plus" });
      var q = U(M, 2), Y = E(q);
      F(() => ee(Y, s("Add link"))), g(L, D);
    }
  ), F(() => we(V, `wx-links wx-${e.fieldPlace ?? ""} svelte-1wjxxyz`)), g(n, V), re();
}
ge(["click"]);
var yf = /* @__PURE__ */ C('<div class="wx-color svelte-16wv92v"></div>'), bf = /* @__PURE__ */ C('<div class="wx-combo-option svelte-16wv92v"><!> </div>'), pf = /* @__PURE__ */ C('<div class="wx-color svelte-16wv92v"></div>'), kf = /* @__PURE__ */ C('<div class="wx-multiselect-option svelte-16wv92v"><!> <span class="wx-multiselect-label svelte-16wv92v"> </span></div>'), Sf = /* @__PURE__ */ C('<div class="wx-links svelte-16wv92v"><!></div>'), If = /* @__PURE__ */ C("<div><!></div>");
function Fa(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(e.values, "$values", t);
  let a = S(e, "fields", 19, () => []), i = S(e, "fieldsPlace", 3, "right");
  const s = me("wx-i18n").getGroup("kanban"), l = e.api.getState().cardShape.users?.values;
  var d = $(), c = G(d);
  Se(c, 17, a, (v) => v.id, (v, u) => {
    var h = $(), _ = G(h);
    R(
      _,
      () => o(u).type === "text",
      (f) => {
        var m = /* @__PURE__ */ z(() => s(o(u).label));
        je(f, {
          get label() {
            return o(m);
          },
          position: "top",
          children: (k, b) => {
            let y = () => b?.().id;
            Jn(k, We(
              {
                get id() {
                  return y();
                },
                get value() {
                  return r()[o(u).key];
                },
                set value(x) {
                  rt(e.values, pe(r)[o(u).key] = x, pe(r));
                },
                focus: !0
              },
              () => o(u).config
            ));
          },
          $$slots: { default: !0 }
        });
      },
      (f) => {
        var m = $(), w = G(m);
        R(
          w,
          () => o(u).type === "title",
          (k) => {
            je(k, { children: (y, x) => {
              let I = () => x?.().id;
              vf(y, We(
                {
                  get id() {
                    return I();
                  },
                  get value() {
                    return r()[o(u).key];
                  },
                  set value(p) {
                    rt(e.values, pe(r)[o(u).key] = p, pe(r));
                  },
                  focus: !0
                },
                () => o(u).config
              ));
            }, $$slots: { default: !0 } });
          },
          (k) => {
            var b = $(), y = G(b);
            R(
              y,
              () => o(u).type === "textarea",
              (x) => {
                var I = /* @__PURE__ */ z(() => s(o(u).label));
                je(x, {
                  get label() {
                    return o(I);
                  },
                  position: "top",
                  children: (P, A) => {
                    let N = () => A?.().id;
                    var V = /* @__PURE__ */ z(() => i() === "right");
                    hr(P, We(
                      {
                        get id() {
                          return N();
                        },
                        get value() {
                          return r()[o(u).key];
                        },
                        set value(W) {
                          rt(e.values, pe(r)[o(u).key] = W, pe(r));
                        }
                      },
                      () => o(u).config,
                      {
                        get resize() {
                          return o(V);
                        }
                      }
                    ));
                  },
                  $$slots: { default: !0 }
                });
              },
              (x) => {
                var I = $(), p = G(I);
                R(
                  p,
                  () => o(u).type === "progress",
                  (P) => {
                    var A = /* @__PURE__ */ z(() => `${s(o(u).label)} ${r()[o(u).key]}%`);
                    je(P, {
                      get label() {
                        return o(A);
                      },
                      position: "top",
                      children: (V, W) => {
                        let J = () => W?.().id;
                        wd(V, We(
                          {
                            get id() {
                              return J();
                            },
                            get value() {
                              return r()[o(u).key];
                            },
                            set value(L) {
                              rt(e.values, pe(r)[o(u).key] = L, pe(r));
                            }
                          },
                          () => o(u).config
                        ));
                      },
                      $$slots: { default: !0 }
                    });
                  },
                  (P) => {
                    var A = $(), N = G(A);
                    R(
                      N,
                      () => o(u).type === "combo",
                      (V) => {
                        var W = /* @__PURE__ */ z(() => s(o(u).label));
                        je(V, {
                          get label() {
                            return o(W);
                          },
                          position: "top",
                          children: (L, D) => {
                            let M = () => D?.().id;
                            mr(L, We(
                              {
                                get id() {
                                  return M();
                                },
                                get options() {
                                  return o(u).values;
                                },
                                get value() {
                                  return r()[o(u).key];
                                },
                                set value(Y) {
                                  rt(e.values, pe(r)[o(u).key] = Y, pe(r));
                                }
                              },
                              () => o(u).config,
                              { children: (Y, H) => {
                                let T = () => H?.().option;
                                var O = bf(), K = E(O);
                                R(
                                  K,
                                  () => T().color,
                                  (te) => {
                                    var ie = yf();
                                    F(() => Z(ie, "style", `background:${T().color ?? ""}`)), g(te, ie);
                                  },
                                  (te) => {
                                    var ie = $(), ve = G(ie);
                                    R(
                                      ve,
                                      () => T().avatar || T().avatarColor,
                                      (X) => {
                                        Gt(X, {
                                          get data() {
                                            return T();
                                          }
                                        });
                                      },
                                      null,
                                      !0
                                    ), g(te, ie);
                                  }
                                );
                                var j = U(K);
                                F(() => ee(j, ` ${T().label ?? ""}`)), g(Y, O);
                              }, $$slots: { default: !0 } }
                            ));
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      (V) => {
                        var W = $(), J = G(W);
                        R(
                          J,
                          () => o(u).type === "select",
                          (L) => {
                            var D = /* @__PURE__ */ z(() => s(o(u).label));
                            je(L, {
                              get label() {
                                return o(D);
                              },
                              position: "top",
                              children: (q, Y) => {
                                let H = () => Y?.().id;
                                Oi(q, We(
                                  {
                                    get id() {
                                      return H();
                                    },
                                    get value() {
                                      return r()[o(u).key];
                                    },
                                    set value(T) {
                                      rt(e.values, pe(r)[o(u).key] = T, pe(r));
                                    },
                                    get options() {
                                      return o(u).values;
                                    }
                                  },
                                  () => o(u).config
                                ));
                              },
                              $$slots: { default: !0 }
                            });
                          },
                          (L) => {
                            var D = $(), M = G(D);
                            R(
                              M,
                              () => o(u).type === "color",
                              (q) => {
                                var Y = /* @__PURE__ */ z(() => s(o(u).label));
                                je(q, {
                                  get label() {
                                    return o(Y);
                                  },
                                  position: "top",
                                  children: (T, O) => {
                                    let K = () => O?.().id;
                                    Zl(T, We(
                                      {
                                        get id() {
                                          return K();
                                        },
                                        get value() {
                                          return r()[o(u).key];
                                        },
                                        set value(j) {
                                          rt(e.values, pe(r)[o(u).key] = j, pe(r));
                                        },
                                        get colors() {
                                          return o(u).values;
                                        }
                                      },
                                      () => o(u).config
                                    ));
                                  },
                                  $$slots: { default: !0 }
                                });
                              },
                              (q) => {
                                var Y = $(), H = G(Y);
                                R(
                                  H,
                                  () => o(u).type === "multiselect",
                                  (T) => {
                                    var O = /* @__PURE__ */ z(() => s(o(u).label));
                                    je(T, {
                                      get label() {
                                        return o(O);
                                      },
                                      position: "top",
                                      children: (K, j) => {
                                        sd(K, We(
                                          {
                                            get value() {
                                              return r()[o(u).key];
                                            },
                                            set value(ie) {
                                              rt(e.values, pe(r)[o(u).key] = ie, pe(r));
                                            },
                                            checkboxes: !0,
                                            get options() {
                                              return o(u).values;
                                            }
                                          },
                                          () => o(u).config,
                                          { children: (ie, ve) => {
                                            let X = () => ve?.().option;
                                            var oe = kf(), se = E(oe);
                                            R(
                                              se,
                                              () => X().color,
                                              (fe) => {
                                                var _e = pf();
                                                F(() => Z(_e, "style", `background:${X().color ?? ""}`)), g(fe, _e);
                                              },
                                              (fe) => {
                                                var _e = $(), Ae = G(_e);
                                                R(
                                                  Ae,
                                                  () => X().avatar || X().avatarColor,
                                                  (be) => {
                                                    Gt(be, {
                                                      get data() {
                                                        return X();
                                                      }
                                                    });
                                                  },
                                                  null,
                                                  !0
                                                ), g(fe, _e);
                                              }
                                            );
                                            var de = U(se, 2), ue = E(de);
                                            F(() => ee(ue, X().label)), g(ie, oe);
                                          }, $$slots: { default: !0 } }
                                        ));
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  },
                                  (T) => {
                                    var O = $(), K = G(O);
                                    R(
                                      K,
                                      () => o(u).type === "date",
                                      (j) => {
                                        var te = /* @__PURE__ */ z(() => s(o(u).label));
                                        je(j, {
                                          get label() {
                                            return o(te);
                                          },
                                          position: "top",
                                          children: (ve, X) => {
                                            let oe = () => X?.().id;
                                            var se = /* @__PURE__ */ z(() => o(u).format || "%m/%d/%Y");
                                            Qc(ve, We(
                                              {
                                                get id() {
                                                  return oe();
                                                },
                                                get format() {
                                                  return o(se);
                                                },
                                                get value() {
                                                  return r()[o(u).key];
                                                },
                                                set value(de) {
                                                  rt(e.values, pe(r)[o(u).key] = de, pe(r));
                                                }
                                              },
                                              () => o(u).config
                                            ));
                                          },
                                          $$slots: { default: !0 }
                                        });
                                      },
                                      (j) => {
                                        var te = $(), ie = G(te);
                                        R(
                                          ie,
                                          () => o(u).type === "dateRange",
                                          (ve) => {
                                            var X = /* @__PURE__ */ z(() => s(o(u).label));
                                            je(ve, {
                                              get label() {
                                                return o(X);
                                              },
                                              position: "top",
                                              children: (se, de) => {
                                                let ue = () => de?.().id;
                                                var fe = /* @__PURE__ */ z(() => o(u).format || "%m/%d/%Y");
                                                cf(se, {
                                                  get id() {
                                                    return ue();
                                                  },
                                                  get format() {
                                                    return o(fe);
                                                  },
                                                  get start() {
                                                    return r()[o(u).key.start];
                                                  },
                                                  set start(_e) {
                                                    rt(e.values, pe(r)[o(u).key.start] = _e, pe(r));
                                                  },
                                                  get end() {
                                                    return r()[o(u).key.end];
                                                  },
                                                  set end(_e) {
                                                    rt(e.values, pe(r)[o(u).key.end] = _e, pe(r));
                                                  }
                                                });
                                              },
                                              $$slots: { default: !0 }
                                            });
                                          },
                                          (ve) => {
                                            var X = $(), oe = G(X);
                                            R(
                                              oe,
                                              () => o(u).type === "files",
                                              (se) => {
                                                var de = /* @__PURE__ */ z(() => s(o(u).label));
                                                je(se, {
                                                  get label() {
                                                    return o(de);
                                                  },
                                                  position: "top",
                                                  children: (ue, fe) => {
                                                    rf(ue, {
                                                      get field() {
                                                        return o(u);
                                                      },
                                                      get values() {
                                                        return e.values;
                                                      }
                                                    });
                                                  },
                                                  $$slots: { default: !0 }
                                                });
                                              },
                                              (se) => {
                                                var de = $(), ue = G(de);
                                                R(
                                                  ue,
                                                  () => o(u).type === "links",
                                                  (fe) => {
                                                    var _e = Sf(), Ae = E(_e), be = /* @__PURE__ */ z(() => s(o(u).label));
                                                    je(Ae, {
                                                      get label() {
                                                        return o(be);
                                                      },
                                                      position: "top",
                                                      children: (ye, Le) => {
                                                        var Pe = /* @__PURE__ */ z(() => a().find((Be) => Be.type === "links"));
                                                        xf(ye, {
                                                          get fieldPlace() {
                                                            return i();
                                                          },
                                                          get shape() {
                                                            return o(Pe);
                                                          },
                                                          get card() {
                                                            return e.editCard;
                                                          }
                                                        });
                                                      },
                                                      $$slots: { default: !0 }
                                                    }), g(fe, _e);
                                                  },
                                                  (fe) => {
                                                    var _e = $(), Ae = G(_e);
                                                    R(
                                                      Ae,
                                                      () => o(u).type === "comments" && (o(u).values?.length || l?.length),
                                                      (be) => {
                                                        var ye = If(), Le = E(ye), Pe = /* @__PURE__ */ z(() => s(o(u).label));
                                                        je(Le, {
                                                          get label() {
                                                            return o(Pe);
                                                          },
                                                          position: "top",
                                                          children: (Be, Tt) => {
                                                            var et = $(), tt = G(et);
                                                            R(
                                                              tt,
                                                              () => o(u).config?.placement === "editor",
                                                              (Ue) => {
                                                                var nt = /* @__PURE__ */ z(() => o(u).values || l);
                                                                to(Ue, {
                                                                  get comments() {
                                                                    return r()[o(u).key];
                                                                  },
                                                                  get placement() {
                                                                    return e.placement;
                                                                  },
                                                                  get users() {
                                                                    return o(nt);
                                                                  },
                                                                  get shape() {
                                                                    return o(u);
                                                                  }
                                                                });
                                                              },
                                                              (Ue) => {
                                                                Re(Ue, {
                                                                  type: "primary block",
                                                                  onclick: () => e.handleViewChange("comments"),
                                                                  children: (nt, ta) => {
                                                                    var na = ke();
                                                                    F(() => ee(na, `${s("Show comments") ?? ""}
						(${(e.editCard.comments?.length || 0) ?? ""})`)), g(nt, na);
                                                                  },
                                                                  $$slots: { default: !0 }
                                                                });
                                                              }
                                                            ), g(Be, et);
                                                          },
                                                          $$slots: { default: !0 }
                                                        }), F(() => we(ye, `wx-card-comments ${i() ?? ""} svelte-16wv92v`)), g(be, ye);
                                                      },
                                                      null,
                                                      !0
                                                    ), g(fe, _e);
                                                  },
                                                  !0
                                                ), g(se, de);
                                              },
                                              !0
                                            ), g(ve, X);
                                          },
                                          !0
                                        ), g(j, te);
                                      },
                                      !0
                                    ), g(T, O);
                                  },
                                  !0
                                ), g(q, Y);
                              },
                              !0
                            ), g(L, D);
                          },
                          !0
                        ), g(V, W);
                      },
                      !0
                    ), g(P, A);
                  },
                  !0
                ), g(x, I);
              },
              !0
            ), g(k, b);
          },
          !0
        ), g(f, m);
      }
    ), g(v, h);
  }), g(n, d), re();
}
var Cf = /* @__PURE__ */ C('<div class="wx-multiselect-option svelte-1ktufvm"><!> <span class="wx-multiselect-label svelte-1ktufvm"> </span></div>'), Ef = /* @__PURE__ */ C('<div class="wx-kanban-voters-list svelte-1ktufvm"></div>'), Df = /* @__PURE__ */ C('<div class="wx-kanban-editor-voting svelte-1ktufvm"><div class="wx-kanban-editor-vote svelte-1ktufvm"><!></div> <!></div>');
function Mf(n, e) {
  ne(e, !0);
  let t = S(e, "value", 7);
  const r = me("wx-kanban-store");
  let a = ae(!1);
  const i = /* @__PURE__ */ z(() => t()?.includes(e.currentUser)), s = /* @__PURE__ */ z(() => t()?.length && e.users.length ? t().map((h) => e.users.find((_) => _.id == h)) : []);
  function l() {
    o(i) ? (r.exec("delete-vote", { cardId: e.cardId }), t(t().filter((h) => h !== e.currentUser))) : (r.exec("add-vote", { cardId: e.cardId }), t([...t() || [], e.currentUser]));
  }
  var d = Df(), c = E(d), v = E(c);
  Re(v, {
    onclick: l,
    icon: "wxi-like",
    children: (h, _) => {
      var f = ke();
      F(() => ee(f, t()?.length || 0)), g(h, f);
    },
    $$slots: { default: !0 }
  });
  var u = U(c, 2);
  R(u, () => o(a) && o(s)?.length, (h) => {
    Mt(h, {
      width: "230px",
      oncancel: () => B(a, !1),
      align: "end",
      children: (_, f) => {
        var m = Ef();
        Se(m, 21, () => o(s), (w) => w.id, (w, k) => {
          var b = Cf(), y = E(b);
          Gt(y, {
            size: "small",
            get data() {
              return o(k);
            }
          });
          var x = U(y, 2), I = E(x);
          F(() => ee(I, o(k).label)), g(w, b);
        }), g(_, m);
      },
      $$slots: { default: !0 }
    });
  }), F(() => he(c, "wx-kanban-editor-voted", o(i))), He("mouseenter", c, () => B(a, !0)), He("mouseleave", c, () => B(a, !1)), g(n, d), re();
}
var Af = /* @__PURE__ */ C('<div class="wx-editor-save-button svelte-br54ec"><!></div>'), Tf = /* @__PURE__ */ C("<!> <!>", 1), Pf = /* @__PURE__ */ C('<div class="wx-kanban-editor-left svelte-br54ec"><!></div>'), Rf = /* @__PURE__ */ C('<div class="wx-editor-manual-save svelte-br54ec"><div class="wx-editor-cancel-button svelte-br54ec"><!></div> <div class="wx-editor-save-button svelte-br54ec"><!></div></div>'), Lf = /* @__PURE__ */ C('<div class="wx-kanban-editor-main svelte-br54ec"><!> <div class="wx-kanban-editor-right svelte-br54ec"><!></div></div> <!>', 1), Ff = /* @__PURE__ */ C('<div class="wx-editor-controls-wrapper svelte-br54ec"><!> <div><!></div></div> <!>', 1), Of = /* @__PURE__ */ C("<!> <div><!></div>", 1);
function pr(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(_, "$_edit", t), a = () => ce(h, "$cards", t), i = () => ce(w, "$values", t), s = () => ce(f, "$cardShape", t), l = () => ce(m, "$currentUser", t);
  let d = S(e, "shape", 3, null);
  const c = /* @__PURE__ */ z(() => ({ ...Wr, ...e.config })), v = /* @__PURE__ */ z(() => o(c).placement === "modal"), u = /* @__PURE__ */ z(() => o(c).placement), { cards: h, _edit: _, cardShape: f, currentUser: m } = e.api.getReactiveState(), w = au(
    k({}),
    // temp solution for svelte error: Cannot do bind:value={undefined} when value has a fallback value
    () => {
      o(c).autoSave && I();
    },
    // svelte-ignore state_referenced_locally
    { debounce: o(c).debounce }
  );
  function k(D) {
    const M = { ...D };
    return d().forEach((q) => {
      typeof M[q.key] > "u" && (q.type === "files" || q.type === "comments" ? M[q.key] = [] : q.type === "date" ? M[q.key] = null : q.type === "progress" ? M[q.key] = 0 : M[q.key] = "");
    }), M;
  }
  let b = ae(void 0);
  e.api.on("start-drag-card", (D) => {
    B(b, Q(D.id));
  }), e.api.on("end-drag-card", () => {
    B(b, null);
  });
  const y = /* @__PURE__ */ z(() => !o(b) && r() && a()?.find((D) => D.id === r()?.cardId));
  at(() => {
    w.reset(k(o(y)));
  });
  function x() {
    e.api.exec("set-edit", null);
  }
  function I() {
    e.api.exec("update-card", {
      card: { ...i() },
      id: i().id
    });
  }
  function p() {
    I(), o(u) === "modal" && x();
  }
  let P = ae(void 0), A = ae("main");
  function N(D) {
    B(A, Q(D));
  }
  const V = /* @__PURE__ */ z(() => o(u) === "sidebar" ? [] : d().filter((D) => D.modalSection === "left")), W = /* @__PURE__ */ z(() => o(u) === "sidebar" ? [...d()] : d().filter((D) => D.modalSection !== "left")), J = /* @__PURE__ */ z(() => {
    const D = e.api?.getState().cardShape.users;
    return D?.values?.length ? D.values : [];
  }), L = /* @__PURE__ */ z(() => o(v) && !o(V).length);
  At(n, {
    words: { ...jn, ...Wn },
    optional: !0,
    children: (D, M) => {
      var q = Of(), Y = G(q);
      Pv(Y, {
        get _() {
          return o(P);
        },
        set _(O) {
          B(P, Q(O));
        }
      });
      var H = U(Y, 2);
      H.__click = function(...O) {
        e.onclick?.apply(this, O);
      };
      var T = E(H);
      R(T, () => o(P) && o(y), (O) => {
        var K = Ff(), j = G(K), te = E(j);
        R(te, () => o(A) === "main" && !o(c).autoSave && !o(v), (oe) => {
          var se = Af(), de = E(se);
          Re(de, {
            type: "primary",
            css: "wx-editor-btn",
            onclick: p,
            children: (ue, fe) => {
              var _e = ke();
              F(() => ee(_e, o(P)("Save"))), g(ue, _e);
            },
            $$slots: { default: !0 }
          }), g(oe, se);
        });
        var ie = U(te, 2), ve = E(ie);
        R(
          ve,
          () => o(A) === "main",
          (oe) => {
            var se = Tf(), de = G(se);
            R(de, () => s().votes?.show, (fe) => {
              Mf(fe, {
                get cardId() {
                  return o(y).id;
                },
                get users() {
                  return o(J);
                },
                get value() {
                  return i().votes;
                },
                get currentUser() {
                  return l();
                }
              });
            });
            var ue = U(de, 2);
            De(ue, { css: "wxi-close", onclick: x }), g(oe, se);
          },
          (oe) => {
            Re(oe, {
              onclick: () => N("main"),
              children: (se, de) => {
                var ue = ke();
                F(() => ee(ue, o(P)("Back"))), g(se, ue);
              },
              $$slots: { default: !0 }
            });
          }
        );
        var X = U(j, 2);
        R(
          X,
          () => o(A) === "main",
          (oe) => {
            var se = Lf(), de = G(se), ue = E(de);
            R(ue, () => o(v) && o(V).length, (be) => {
              var ye = Pf(), Le = E(ye);
              Fa(Le, {
                get api() {
                  return e.api;
                },
                get fields() {
                  return o(V);
                },
                fieldsPlace: "left",
                get placement() {
                  return o(u);
                },
                values: w,
                get editCard() {
                  return o(y);
                },
                handleViewChange: N
              }), g(be, ye);
            });
            var fe = U(ue, 2), _e = E(fe);
            Fa(_e, {
              get api() {
                return e.api;
              },
              get fields() {
                return o(W);
              },
              fieldsPlace: "right",
              get placement() {
                return o(u);
              },
              values: w,
              get editCard() {
                return o(y);
              },
              handleViewChange: N
            });
            var Ae = U(de, 2);
            R(Ae, () => o(v) && o(A) === "main" && !o(c).autoSave, (be) => {
              var ye = Rf(), Le = E(ye), Pe = E(Le);
              Re(Pe, {
                css: "wx-editor-btn",
                onclick: x,
                children: (et, tt) => {
                  var Ue = ke();
                  F(() => ee(Ue, o(P)("Cancel"))), g(et, Ue);
                },
                $$slots: { default: !0 }
              });
              var Be = U(Le, 2), Tt = E(Be);
              Re(Tt, {
                type: "primary",
                css: "wx-editor-btn",
                onclick: p,
                children: (et, tt) => {
                  var Ue = ke();
                  F(() => ee(Ue, o(P)("Save"))), g(et, Ue);
                },
                $$slots: { default: !0 }
              }), g(be, ye);
            }), g(oe, se);
          },
          (oe) => {
            var se = $(), de = G(se);
            R(
              de,
              () => o(A) === "comments",
              (ue) => {
                var fe = /* @__PURE__ */ z(() => d().find((_e) => _e.type === "comments"));
                to(ue, {
                  get comments() {
                    return i().comments;
                  },
                  get users() {
                    return o(J);
                  },
                  get shape() {
                    return o(fe);
                  },
                  get placement() {
                    return o(u);
                  },
                  handleViewChange: N
                });
              },
              null,
              !0
            ), g(oe, se);
          }
        ), F(() => we(ie, `wx-editor-controls${(o(v) && o(A) === "comments" ? " comments" : "") ?? ""} svelte-br54ec`)), g(O, K);
      }), F(() => {
        we(H, `wx-editor ${o(u) ?? ""} ${o(A) ?? ""} svelte-br54ec`), Z(H, "data-kanban-id", Ye.editor), Z(H, "data-wx-widget", Ye.editor), he(H, "wx-modal-narrow", o(L)), he(H, "wx-editor-open", o(y));
      }), g(D, q);
    },
    $$slots: { default: !0 }
  }), re();
}
ge(["click"]);
var zf = /* @__PURE__ */ C('<div class="wx-editor-modal svelte-10gkwu4"><!></div>'), Bf = /* @__PURE__ */ C('<div class="wx-sidebar svelte-10gkwu4"><!></div>');
function Nf(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(l, "$_edit", t), a = () => ce(d, "$editor", t), i = () => ce(c, "$editorShape", t), s = me("wx-kanban-store"), { _edit: l, editor: d, editorShape: c } = s.getReactiveState(), v = /* @__PURE__ */ z(() => s.getCard(r()?.cardId)), u = /* @__PURE__ */ z(() => ({ ...Wr, ...a() }));
  var h = $(), _ = G(h);
  R(
    _,
    () => o(u).placement === "modal",
    (f) => {
      var m = $(), w = G(m);
      R(w, () => o(v), (k) => {
        var b = zf(), y = E(b);
        zd(y, {
          children: (x, I) => {
            pr(x, {
              api: s,
              get config() {
                return o(u);
              },
              get shape() {
                return i();
              }
            });
          },
          $$slots: { default: !0 }
        }), F(() => Z(b, "data-kanban-id", Ye.editor)), g(k, b);
      }), g(f, m);
    },
    (f) => {
      var m = Bf(), w = E(m);
      pr(w, {
        api: s,
        get config() {
          return o(u);
        },
        get shape() {
          return i();
        }
      }), F(() => {
        Z(m, "data-kanban-id", Ye.editor), he(m, "wx-sidebar-open", !!o(v));
      }), g(f, m);
    }
  ), g(n, h), re();
}
var Hf = (n, e, t) => e(o(t).id), qf = /* @__PURE__ */ C("<div></div>");
function Oa(n, e) {
  ne(e, !1);
  const t = Fe(), r = () => ce(l, "$columns", t), a = () => ce(i, "$columnOffsets", t), { columnOffsets: i } = Xi(), s = me("wx-kanban-store"), { columns: l } = s.getReactiveState();
  function d(u) {
    s.exec("update-column", { id: u, column: { collapsed: !1 } });
  }
  Di();
  var c = $(), v = G(c);
  Se(v, 1, r, (u) => u.id, (u, h) => {
    var _ = $(), f = G(_);
    R(f, () => o(h).collapsed, (m) => {
      var w = qf();
      const k = /* @__PURE__ */ Za(() => `left:${a().get(o(h).id) ?? ""}px;`);
      w.__click = [Hf, d, h], F(() => {
        we(w, `wx-collapsed-column${(o(h).css ? " " + o(h).css : "") ?? ""} svelte-vzvzkt`), Z(w, "style", o(k));
      }), g(m, w);
    }), g(u, _);
  }), g(n, c), re();
}
ge(["click"]);
var Uf = /* @__PURE__ */ C('<input type="text" class="wx-input svelte-9z9yku">'), Yf = /* @__PURE__ */ C('<div class="wx-menu svelte-9z9yku"><!></div>'), Kf = /* @__PURE__ */ C('<div class="wx-label-icon svelte-9z9yku"><!></div> <div class="wx-label-text svelte-9z9yku"><!></div> <!>', 1), Vf = /* @__PURE__ */ C('<div class="wx-content svelte-9z9yku"><!></div>'), Gf = /* @__PURE__ */ C("<div><div><!> <div></div></div> <!></div>");
function za(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(y, "$rowKey", t), a = () => ce(f, "$readonly", t), i = () => ce(m, "$rows", t), s = () => ce(w, "$rowShape", t), l = () => ce(b, "$columns", t), d = () => ce(k, "$_cardsMap", t);
  let c = S(e, "row", 19, () => ({
    id: "default",
    label: "default",
    collapsed: !1
  }));
  const v = me("wx-kanban-store"), u = me("wx-i18n").getGroup("kanban"), { showModal: h } = me("wx-helpers");
  function _() {
    v.exec("update-row", {
      id: c().id,
      row: { collapsed: !c().collapsed }
    });
  }
  const {
    readonly: f,
    rows: m,
    rowShape: w,
    _cardsMap: k,
    columns: b,
    rowKey: y
  } = v.getReactiveState(), x = /* @__PURE__ */ z(() => !!r()), I = /* @__PURE__ */ z(() => a().edit);
  let p = ae(!1), P = null;
  const A = /* @__PURE__ */ z(() => i().findIndex((X) => X.id === c().id));
  function N() {
    o(p) && P?.trim() && v.exec("update-row", { id: c().id, row: { label: P } }), B(p, !1), P = null;
  }
  function V() {
    o(I) && B(p, !0);
  }
  function W(X) {
    P = X.target.value;
  }
  function J(X) {
    X.charCode === 13 && N();
  }
  function L(X) {
    X.focus();
  }
  function D(X) {
    const oe = X === "up" ? o(A) - 1 : o(A) + 2, se = i()[oe]?.id;
    v.exec("move-row", { id: c().id, before: se });
  }
  function M(X) {
    const oe = X.action;
    if (oe) {
      if (oe.onClick) {
        oe.onClick({ id: oe.id, item: oe, row: c() });
        return;
      }
      switch (oe.id) {
        case "set-edit":
          V();
          break;
        case "delete-row": {
          (s().confirmDeletion ?? !0 ? h({
            message: u("Would you like to delete this row?")
          }) : Promise.resolve()).then(() => {
            v.exec("delete-row", { id: c().id });
          }).catch(() => {
          });
          break;
        }
        case "move-row:up":
          D("up");
          break;
        case "move-row:down":
          D("down");
          break;
      }
    }
  }
  const q = (X, oe, se, de) => {
    const ue = de.menu.items({ rows: se, rowIndex: oe, row: X });
    return !ue || !ue.length ? null : ue.map((fe) => Zn(fe, u));
  }, Y = /* @__PURE__ */ z(() => q(c(), o(A), i(), s())), H = /* @__PURE__ */ z(() => s().menu.show && !!o(Y) && o(I) && !o(p));
  function T(X, oe, se, de) {
    let ue = "wx-row";
    if (X.collapsed && (ue += " wx-collapsed"), X.css && (ue += " " + X.css), oe && oe.css) {
      let fe = [];
      se.forEach((_e) => fe = fe.concat(de[Oe(_e.id, X.id)])), ue += " " + oe.css(X, fe);
    }
    return ue;
  }
  const O = /* @__PURE__ */ z(() => T(c(), s(), l(), d()));
  var K = Gf(), j = E(K), te = E(j);
  R(te, () => o(x), (X) => {
    var oe = Kf(), se = G(oe), de = E(se), ue = /* @__PURE__ */ z(() => `wxi-angle-${c().collapsed ? "right" : "down"}`);
    De(de, {
      get css() {
        return o(ue);
      },
      onclick: _
    });
    var fe = U(se, 2);
    fe.__dblclick = V;
    var _e = E(fe);
    R(
      _e,
      () => o(p),
      (be) => {
        var ye = Uf();
        ye.__input = W, ze(ye, (Le) => L(Le)), F(() => Bt(ye, c().label)), He("keypress", ye, J), He("blur", ye, N), g(be, ye);
      },
      (be) => {
        var ye = ke();
        F(() => ee(ye, c().label)), g(be, ye);
      }
    );
    var Ae = U(fe, 2);
    R(Ae, () => o(H), (be) => {
      Qn(be, {
        get options() {
          return o(Y);
        },
        onclick: M,
        children: (ye, Le) => {
          var Pe = Yf(), Be = E(Pe);
          De(Be, { css: "wxi-dots-h" }), g(ye, Pe);
        },
        $$slots: { default: !0 }
      });
    }), g(X, oe);
  });
  var ie = U(te, 2), ve = U(j, 2);
  R(ve, () => !c().collapsed, (X) => {
    var oe = Vf(), se = E(oe);
    Ie(se, () => e.children ?? Ce), g(X, oe);
  }), F(() => {
    we(K, `${o(O) ?? ""} svelte-9z9yku`), he(K, "wx-collapsed", c().collapsed), we(j, `wx-label ${(o(x) ? "collapsable" : "") ?? ""} svelte-9z9yku`), Z(j, "data-row-header", c().id), we(ie, `wx-label-line ${(o(x) ? "collapsable" : "") ?? ""} svelte-9z9yku`);
  }), g(n, K), re();
}
ge(["dblclick", "input"]);
var Wf = /* @__PURE__ */ C('<div class="wx-label svelte-fhl0ry"> </div>'), jf = /* @__PURE__ */ C('<div class="wx-value svelte-fhl0ry"> </div>'), Jf = /* @__PURE__ */ C('<div class="wx-layout svelte-fhl0ry"><!> <div class="wx-wrap svelte-fhl0ry"><div class="wx-progress svelte-fhl0ry"></div> <!></div></div>');
function Zf(n, e) {
  let t = S(e, "label", 3, ""), r = S(e, "min", 3, 0), a = S(e, "max", 3, 100), i = S(e, "value", 3, 0), s = S(e, "showValue", 3, !0);
  const l = /* @__PURE__ */ z(() => Math.round((i() - r()) / (a() - r()) * 100) + "%"), d = /* @__PURE__ */ z(() => `background: linear-gradient(90deg, var(--wx-color-primary) 0% ${o(l)}, var(--wx-kanban-progress-inactive-color) ${o(l)} 100%);`);
  var c = Jf(), v = E(c);
  R(v, t, (f) => {
    var m = Wf(), w = E(m);
    F(() => ee(w, t())), g(f, m);
  });
  var u = U(v, 2), h = E(u), _ = U(h, 2);
  R(_, s, (f) => {
    var m = jf(), w = E(m);
    F(() => ee(w, o(l))), g(f, m);
  }), F(() => Z(h, "style", o(d))), g(n, c);
}
var Qf = /* @__PURE__ */ C('<div class="wx-users svelte-fncexv"></div>'), Xf = /* @__PURE__ */ C('<span class="wx-date-value svelte-fncexv"> </span>'), $f = /* @__PURE__ */ C('<span class="wx-date-value svelte-fncexv"> </span>'), eh = /* @__PURE__ */ C('<div class="wx-date svelte-fncexv"><!> <!> <!> <!></div>'), th = /* @__PURE__ */ C('<span class="wx-item-value svelte-fncexv"> </span>'), nh = /* @__PURE__ */ C('<div class="wx-votes svelte-fncexv"><!></div>'), rh = /* @__PURE__ */ C('<span class="wx-item-value svelte-fncexv"> </span>'), ah = /* @__PURE__ */ C('<div class="wx-comments svelte-fncexv"><!></div>'), ih = /* @__PURE__ */ C('<span class="wx-item-value svelte-fncexv"> </span>'), oh = /* @__PURE__ */ C('<div class="wx-attached svelte-fncexv"><!></div>'), sh = /* @__PURE__ */ C('<div class="wx-footer svelte-fncexv"><!> <div class="wx-card-icons svelte-fncexv"><div class="wx-icons-container svelte-fncexv"><!></div> <div class="wx-icons-container svelte-fncexv"><!> <!> <!></div></div></div>');
function lh(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(o(c), "$currentUser", t), a = me("wx-kanban-store"), i = me("wx-i18n"), s = "%M %d";
  function l(p, P) {
    let A = {};
    const { show: N } = P?.users || {}, V = p.users;
    if (N && V) {
      const Y = (Array.isArray(V) ? V : [V]).reduce(
        (O, K) => {
          const j = P.users.values?.find((te) => te.id === K);
          return j && O.push(j), O;
        },
        []
      );
      let H = Y.map((O) => ({ ...O, label: O.label || "" })), T = 2;
      e.cardShape.users.maxCount === !1 ? T = 1 / 0 : e.cardShape.users.maxCount && (T = e.cardShape.users.maxCount), Y.length > T && (H = H.splice(0, T), H.push({
        label: `+${Y.length - H.length}`,
        id: "$total"
      })), H?.length && (A.users = H);
    }
    const { show: W, format: J } = P.start_date || {}, { show: L, format: D } = P.end_date || {};
    let { end_date: M, start_date: q } = p;
    return (W || L) && (q && (A.startDate = Ct(J || s, i.getRaw().calendar)(q)), M && (A.endDate = Ct(D || s, i.getRaw().calendar)(M))), P?.attached?.show && p.attached?.length && (A.attached = p.attached.length), P.comments?.show && p.comments?.length && (A.comments = p.comments?.length), P.votes?.show && (A.votes = p.votes?.length || 0), A;
  }
  const d = /* @__PURE__ */ z(() => l(e.cardFields, e.cardShape)), c = /* @__PURE__ */ z(() => a?.getReactiveState().currentUser), v = /* @__PURE__ */ z(() => e.cardShape.votes?.clickable);
  function u() {
    if (o(v)) {
      const p = e.cardFields.id;
      e.cardFields.votes?.includes(r()) ? a.exec("delete-vote", { cardId: p }) : a.exec("add-vote", { cardId: p });
    }
  }
  var h = sh();
  const _ = /* @__PURE__ */ z(() => !!Object.keys(o(d)).length);
  F(() => he(h, "wx-with-content", o(_)));
  var f = E(h);
  R(f, () => o(d).users, (p) => {
    var P = Qf();
    Se(P, 21, () => o(d).users, (A) => A.id, (A, N) => {
      var V = /* @__PURE__ */ z(() => o(N).id === "$total");
      Gt(A, {
        get data() {
          return o(N);
        },
        get noTransform() {
          return o(V);
        }
      });
    }), g(p, P);
  });
  var m = U(f, 2), w = E(m), k = E(w);
  R(k, () => o(d).endDate || o(d).startDate, (p) => {
    var P = eh(), A = E(P);
    De(A, { css: "wxi-calendar" });
    var N = U(A, 2);
    R(N, () => o(d).startDate, (J) => {
      var L = Xf(), D = E(L);
      F(() => ee(D, o(d).startDate)), g(J, L);
    });
    var V = U(N, 2);
    R(V, () => o(d).endDate && o(d).startDate, (J) => {
      var L = ke("-");
      g(J, L);
    });
    var W = U(V, 2);
    R(W, () => o(d).endDate, (J) => {
      var L = $f(), D = E(L);
      F(() => ee(D, o(d).endDate)), g(J, L);
    }), g(p, P);
  });
  var b = U(w, 2), y = E(b);
  R(y, () => o(d).votes || o(d).votes === 0 && o(v), (p) => {
    var P = nh();
    const A = /* @__PURE__ */ z(() => e.cardFields.votes?.includes(r()));
    var N = E(P);
    De(N, {
      css: "wxi-like",
      onclick: u,
      children: (V, W) => {
        var J = th(), L = E(J);
        F(() => ee(L, o(d).votes)), g(V, J);
      },
      $$slots: { default: !0 }
    }), F(() => {
      Z(P, "data-kanban-id", o(v) ? "wx-vote-card-button" : ""), he(P, "wx-kanban-editor-voted", o(A)), he(P, "wx-clickable", o(v));
    }), g(p, P);
  });
  var x = U(y, 2);
  R(x, () => o(d).comments, (p) => {
    var P = ah(), A = E(P);
    De(A, {
      css: "wxi-message",
      children: (N, V) => {
        var W = rh(), J = E(W);
        F(() => ee(J, o(d).comments)), g(N, W);
      },
      $$slots: { default: !0 }
    }), g(p, P);
  });
  var I = U(x, 2);
  R(I, () => o(d).attached, (p) => {
    var P = oh(), A = E(P);
    De(A, {
      css: "wxi-paperclip",
      children: (N, V) => {
        var W = ih(), J = E(W);
        F(() => ee(J, o(d).attached)), g(N, W);
      },
      $$slots: { default: !0 }
    }), g(p, P);
  }), g(n, h), re();
}
var ch = /* @__PURE__ */ C('<div class="wx-field wx-priority svelte-16qucgr"><span class="wx-priority-label svelte-16qucgr"> </span></div>'), dh = /* @__PURE__ */ C('<span class="wx-label"> </span>'), uh = /* @__PURE__ */ C('<div><!> <span class="wx-value"> </span></div>'), vh = /* @__PURE__ */ C('<div class="wx-card-header svelte-16qucgr"></div>');
function fh(n, e) {
  function t(i, s) {
    let l = [];
    if (s.priority?.show) {
      const c = s.priority.values?.find((v) => v.id === i.priority);
      c && l.push({
        type: "priority",
        value: c.label,
        color: c.color
      });
    }
    const d = s.headerFields;
    if (d) {
      const c = d.reduce(
        (v, u) => (i[u.key] && v.push({
          value: i[u.key],
          label: u.label,
          css: u.css
        }), v),
        []
      );
      c && l.push(...c);
    }
    return l;
  }
  const r = /* @__PURE__ */ z(() => t(e.cardFields, e.cardShape));
  var a = vh();
  Se(a, 21, () => o(r), ot, (i, s) => {
    var l = $(), d = G(l);
    R(d, () => o(s).value, (c) => {
      var v = $(), u = G(v);
      R(
        u,
        () => o(s).type === "priority",
        (h) => {
          var _ = ch(), f = E(_), m = E(f);
          F(() => {
            Z(_, "style", `background:${o(s).color ?? ""}`), ee(m, o(s).value);
          }), g(h, _);
        },
        (h) => {
          var _ = uh(), f = E(_);
          R(f, () => o(s)?.label, (k) => {
            var b = dh(), y = E(b);
            F(() => ee(y, `${o(s).label ?? ""}:`)), g(k, b);
          });
          var m = U(f, 2), w = E(m);
          F(() => {
            we(_, `wx-field ${(o(s).css || "") ?? ""} svelte-16qucgr`), ee(w, o(s).value);
          }), g(h, _);
        }
      ), g(c, v);
    }), g(i, l);
  }), g(n, a);
}
var hh = /* @__PURE__ */ C('<div class="wx-color wx-rounded svelte-17mj8o9"></div>'), mh = /* @__PURE__ */ C('<div class="wx-field wx-image svelte-17mj8o9"><img alt="" class="svelte-17mj8o9"></div>'), gh = /* @__PURE__ */ C("<span> </span>"), _h = /* @__PURE__ */ C('<div class="wx-menu svelte-17mj8o9" data-ignore-selection="true"><div><!></div></div>'), wh = /* @__PURE__ */ C('<div class="wx-field wx-description svelte-17mj8o9"> </div>'), xh = /* @__PURE__ */ C('<div class="wx-field svelte-17mj8o9"><!></div>'), yh = /* @__PURE__ */ C('<!> <!> <div><!> <div class="wx-body svelte-17mj8o9"><div class="wx-field wx-label svelte-17mj8o9"><!> <!></div> <!> <!></div> <!></div>', 1);
function Qr(n, e) {
  ne(e, !0);
  let t = S(e, "menu", 3, !0);
  const r = /* @__PURE__ */ z(() => e.cardFields?.attached?.find((y) => y.isCover)), a = /* @__PURE__ */ z(() => o(r) ? o(r).coverURL || o(r).url : null);
  function i(y, x) {
    let I = "wx-content";
    return y.css && (I += " " + y.css), x.css ? () => I += ` ${x.css(y)}` : () => I;
  }
  const s = /* @__PURE__ */ z(() => i(e.cardFields, e.cardShape)());
  var l = yh(), d = G(l);
  R(d, () => e.cardShape.color?.show && e.cardFields.color, (y) => {
    var x = hh();
    F(() => Z(x, "style", `background:${e.cardFields.color ?? ""}`)), g(y, x);
  });
  var c = U(d, 2);
  R(c, () => e.cardShape?.cover?.show && o(a), (y) => {
    var x = mh(), I = E(x);
    F(() => {
      he(x, "wx-rounded", !(e.cardShape.color?.show && e.cardFields.color)), Z(I, "src", o(a));
    }), g(y, x);
  });
  var v = U(c, 2), u = E(v);
  fh(u, {
    get cardFields() {
      return e.cardFields;
    },
    get cardShape() {
      return e.cardShape;
    }
  });
  var h = U(u, 2), _ = E(h), f = E(_);
  R(f, () => e.cardShape?.label?.show && e.cardFields.label, (y) => {
    var x = gh(), I = E(x);
    F(() => ee(I, e.cardFields.label)), g(y, x);
  });
  var m = U(f, 2);
  R(m, t, (y) => {
    var x = _h(), I = E(x), p = E(I);
    De(p, { css: "wxi-dots-v" }), F(() => Z(I, "data-menu-id", e.cardFields.id)), g(y, x);
  });
  var w = U(_, 2);
  R(w, () => e.cardShape?.description?.show && e.cardFields.description, (y) => {
    var x = wh(), I = E(x);
    F(() => ee(I, e.cardFields.description)), g(y, x);
  });
  var k = U(w, 2);
  R(k, () => e.cardShape?.progress?.show && e.cardFields.progress, (y) => {
    var x = xh(), I = E(x), p = /* @__PURE__ */ z(() => e.cardShape.progress?.config?.min || 0), P = /* @__PURE__ */ z(() => e.cardShape.progress?.config?.max || 100);
    Zf(I, {
      get min() {
        return o(p);
      },
      get max() {
        return o(P);
      },
      get value() {
        return e.cardFields.progress;
      }
    }), g(y, x);
  });
  var b = U(h, 2);
  lh(b, {
    get cardFields() {
      return e.cardFields;
    },
    get cardShape() {
      return e.cardShape;
    }
  }), F(() => {
    we(v, `${o(s) ?? ""} svelte-17mj8o9`), he(v, "wx-selected", e.selected), he(v, "wx-dragging", e.dragging);
  }), g(n, l), re();
}
var bh = /* @__PURE__ */ C('<div class="wx-card svelte-7hhwxe"><!></div>');
function Xr(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(v, "$_cardsMeta", t), a = () => ce(d, "$selected", t), i = () => ce(u, "$cardHeight", t), s = () => ce(c, "$cardShape", t), l = me("wx-kanban-store"), { selected: d, cardShape: c, _cardsMeta: v, cardHeight: u } = l.getReactiveState(), h = /* @__PURE__ */ z(() => r()?.[e.cardFields.id]?.dragging || !1), _ = /* @__PURE__ */ z(() => Ki(a(), e.cardFields.id) || !1), f = /* @__PURE__ */ z(() => i() ? i() + "px" : "auto"), m = /* @__PURE__ */ z(() => e.cardTemplate);
  var w = bh(), k = E(w);
  Et(k, () => o(m), (b, y) => {
    y(b, {
      get cardFields() {
        return e.cardFields;
      },
      get dragging() {
        return o(h);
      },
      get selected() {
        return o(_);
      },
      get cardShape() {
        return s();
      },
      get menu() {
        return e.menu;
      }
    });
  }), F(() => {
    Z(w, "data-drag-item", e.cardFields.id), Z(w, "style", `height:${o(f) ?? ""};max-height:${o(f) ?? ""};`), Z(w, "data-id", e.cardFields.id), he(w, "wx-hidden", o(h)), he(w, "wx-selected", o(_)), he(w, "wx-dimmed", r()?.[e.cardFields.id]?.dimmed);
  }), g(n, w), re();
}
var ph = /* @__PURE__ */ C('<div class="wx-collapsed-label svelte-1betjxn"><div class="wx-label-text svelte-1betjxn"> </div></div>');
function kh(n, e) {
  ne(e, !0);
  var t = ph(), r = E(t), a = E(r);
  F(() => ee(a, e.column.label)), g(n, t), re();
}
var Sh = /* @__PURE__ */ C('<div class="wx-item svelte-1ve5ytw"><!></div>'), Ih = /* @__PURE__ */ C('<div class="wx-virtual-list svelte-1ve5ytw"><div class="wx-content svelte-1ve5ytw"></div> <!></div>');
function Ch(n, e) {
  ne(e, !0);
  let t = Q([]), r = ae(void 0), a = ae(void 0), i = ae(void 0), s = ae(0), l = ae(0), d = ae(0);
  const c = /* @__PURE__ */ z(() => e.items.slice(o(s), o(l)).map((p, P) => ({ index: P + o(s), data: p })));
  let v = ae(0), u = ae(0), h = ae(0);
  async function _(p) {
    if (o(a).querySelector(`[data-id="${p}"]`))
      return;
    const A = e.items.findIndex((N) => N.id === p);
    A > -1 && (o(a).scrollTop = (A + 1) * o(h) - o(d) / 2, w(), p = null);
  }
  async function f(p, P, A) {
    await Lt(), t.length = p.length, t.fill(0);
    const { scrollTop: N } = o(a);
    let V = o(v) - N;
    for (let W = o(s); W < p.length; (W += 1) - 1) {
      if (V > P) {
        B(l, Q(W));
        break;
      }
      let J = o(r)[W - o(s)];
      J || (B(l, W + 1), await Lt(), J = o(r)[W - o(s)]);
      const L = J.offsetHeight;
      t[W] = L, V += L;
    }
    B(h, Q(Math.round((o(v) + V) / o(l)))), m(o(h)), await Lt(), A && _(A);
  }
  function m(p) {
    const P = e.items.length - o(l);
    B(u, P * p);
  }
  async function w() {
    const { scrollTop: p } = o(a);
    o(c).forEach((N, V) => {
      const { index: W } = N;
      t[W] = o(r)[V].offsetHeight;
    });
    let P = 0, A = 0;
    for (; P < e.items.length; ) {
      const N = t[P] || o(h);
      if (A + N > p) {
        B(s, Q(P)), B(v, Q(A));
        break;
      }
      A += N, P += 1;
    }
    for (; P < e.items.length && (A += t[P] || o(h), P += 1, !(A > p + o(d))); )
      ;
    B(l, Q(P)), B(h, Q(Math.round(A / o(l)))), m(o(h));
  }
  async function k() {
    w(), onscroll && onscroll({ start: o(s), end: o(l) });
  }
  let b = !1;
  ht(() => {
    B(r, Q(o(i).children)), b = !0;
  }), at(() => {
    b && f(e.items, o(d), e.scrollToId);
  });
  var y = Ih(), x = E(y);
  Se(x, 21, () => o(c), (p) => p.index, (p, P) => {
    var A = Sh(), N = E(A);
    Ie(N, () => e.children ?? Ce, () => ({ item: o(P).data })), F(() => {
      Z(A, "data-id", o(P).data.id), Z(A, "data-index", o(P).index);
    }), g(p, A);
  }), Te(x, (p) => B(i, p), () => o(i));
  var I = U(x, 2);
  Ie(I, () => e.extra ?? Ce), Te(y, (p) => B(a, p), () => o(a)), xt(() => is(y, "offsetHeight", (p) => B(d, p))), ze(y, (p) => Jr(p)), F(() => Z(x, "style", `padding-top: ${o(v) ?? ""}px; padding-bottom: ${o(u) ?? ""}px;`)), He("scroll", y, k), g(n, y), re();
}
var Eh = /* @__PURE__ */ C('<div class="wx-kanban-drop-area svelte-raznc"></div>'), Dh = /* @__PURE__ */ C("<!> <!>", 1), Mh = /* @__PURE__ */ C('<div class="wx-kanban-drop-area svelte-raznc"></div>'), Ah = /* @__PURE__ */ C("<div><!></div>"), Th = /* @__PURE__ */ C('<div class="wx-list-wrapper svelte-raznc" data-id="scroll-column"><!></div>');
function Ph(n, e) {
  ne(e, !0);
  let t = S(e, "cardTemplate", 3, null);
  const r = me("wx-kanban-store"), { _scroll: a } = r.getReactiveState();
  let i = ae(void 0), s = ae(void 0), l = ae(void 0);
  r.on("start-drag-card", (h) => {
    B(s, Q(Oe(h.columnId, h.rowId))), B(i, Q(h.before)), B(l, Q(h.id));
  }), r.on("drag-card", (h) => {
    B(s, Q(h.dragAllowed ? Oe(h.columnId, h.rowId) : null)), B(i, Q(h.before));
  }), r.on("end-drag-card", () => {
    B(s, Q(B(i, Q(B(l, null)))));
  });
  const d = /* @__PURE__ */ z(() => e.cards.filter((h) => !le(o(l), h.id)));
  let c = ae(void 0);
  a.subscribe((h) => {
    h?.to === "card" && h.id && o(d).find((_) => le(_.id, h.id)) && (B(c, Q(h.id)), r.exec("scroll", null));
  });
  var v = $(), u = G(v);
  R(u, () => e.cards, (h) => {
    var _ = Th(), f = E(_);
    Ch(f, {
      get items() {
        return o(d);
      },
      get scrollToId() {
        return o(c);
      },
      children: (k, b) => {
        let y = () => b?.().item;
        var x = Dh(), I = G(x);
        R(I, () => le(y().id, o(i)) && le(o(s), e.areaId), (N) => {
          var V = Eh();
          g(N, V);
        });
        var p = U(I, 2), P = /* @__PURE__ */ z(() => t() || Qr), A = /* @__PURE__ */ z(() => e.isMenuVisible?.[y().id]?.visible);
        Xr(p, {
          get cardTemplate() {
            return o(P);
          },
          get cardFields() {
            return y();
          },
          get menu() {
            return o(A);
          }
        }), g(k, x);
      },
      extra: (k) => {
        var b = Ah(), y = E(b);
        R(y, () => !o(i) && le(o(s), e.areaId), (x) => {
          var I = Mh();
          g(x, I);
        }), g(k, b);
      },
      $$slots: { default: !0, extra: !0 }
    }), F(() => he(_, "wx-not-anchored", o(s))), g(h, _);
  }), g(n, v), re();
}
var Rh = /* @__PURE__ */ C('<div class="wx-kanban-drop-area svelte-15vp8g6"></div>'), Lh = /* @__PURE__ */ C("<!> <!>", 1), Fh = /* @__PURE__ */ C('<div class="wx-kanban-drop-area svelte-15vp8g6"></div>'), Oh = /* @__PURE__ */ C("<!> <!>", 1), zh = /* @__PURE__ */ C('<div class="wx-list-wrapper svelte-15vp8g6"><!></div>');
function Bh(n, e) {
  ne(e, !0);
  let t = S(e, "cardTemplate", 3, null);
  const r = me("wx-kanban-store");
  let a = ae(void 0), i = ae(void 0);
  r.on("start-drag-card", (d) => {
    B(i, Q(Oe(d.columnId, d.rowId))), B(a, Q(d.before));
  }), r.on("drag-card", (d) => {
    B(i, Q(d.dragAllowed ? Oe(d.columnId, d.rowId) : null)), B(a, Q(d.before));
  }), r.on("end-drag-card", () => {
    B(i, Q(B(a, null)));
  });
  var s = $(), l = G(s);
  R(l, () => e.cards, (d) => {
    var c = zh(), v = E(c);
    R(v, () => e.cards, (u) => {
      var h = Oh(), _ = G(h);
      Se(_, 17, () => e.cards, (m) => m.id, (m, w) => {
        var k = Lh(), b = G(k);
        R(b, () => le(o(w).id, o(a)) && le(o(i), e.areaId), (p) => {
          var P = Rh();
          g(p, P);
        });
        var y = U(b, 2), x = /* @__PURE__ */ z(() => t() || Qr), I = /* @__PURE__ */ z(() => e.isMenuVisible?.[o(w).id]?.visible);
        Xr(y, {
          get cardTemplate() {
            return o(x);
          },
          get cardFields() {
            return o(w);
          },
          get menu() {
            return o(I);
          }
        }), g(m, k);
      });
      var f = U(_, 2);
      R(f, () => !o(a) && le(o(i), e.areaId), (m) => {
        var w = Fh();
        g(m, w);
      }), g(u, h);
    }), ze(c, (u) => Jr(u)), F(() => he(c, "wx-not-anchored", o(i))), g(d, c);
  }), g(n, s), re();
}
function Nh(n, e, t, r) {
  e.exec("add-card", {
    columnId: t.column.id,
    rowId: t.row.id,
    card: { label: r("Untitled") }
  });
}
var Hh = /* @__PURE__ */ C('<div class="wx-kanban-drop-area svelte-u46fyc"></div>'), qh = /* @__PURE__ */ C("<!> <!>", 1), Uh = /* @__PURE__ */ C('<div class="wx-kanban-drop-area svelte-u46fyc"></div>'), Yh = /* @__PURE__ */ C("<!> <!>", 1), Kh = /* @__PURE__ */ C('<div class="wx-add-card-btn svelte-u46fyc"><!> <span class="wx-add-card-tip svelte-u46fyc"> </span></div>'), Vh = /* @__PURE__ */ C('<div class="wx-swimlane-limit svelte-u46fyc"> </div>'), Gh = /* @__PURE__ */ C('<!> <div class="wx-controls-wrapper svelte-u46fyc"><!> <!></div>', 1), Wh = /* @__PURE__ */ C("<div><!> <!></div>");
function Ba(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(_, "$readonly", t), a = () => ce(h, "$_areasMeta", t), i = () => ce(w, "$_cardsMap", t), s = () => ce(f, "$columnShape", t), l = () => ce(m, "$_layout", t);
  let d = S(e, "cardTemplate", 3, null), c = S(e, "virtual", 3, null);
  const v = me("wx-kanban-store"), u = me("wx-i18n").getGroup("kanban"), {
    _areasMeta: h,
    readonly: _,
    columnShape: f,
    _layout: m,
    _cardsMap: w
  } = v.getReactiveState();
  let k = ae(void 0), b = ae(void 0);
  v.on("start-drag-card", (M) => {
    B(b, Q(Oe(M.columnId, M.rowId))), B(k, Q(M.before));
  }), v.on("drag-card", (M) => {
    B(b, Q(M.dragAllowed ? Oe(M.columnId, M.rowId) : null)), B(k, Q(M.before));
  }), v.on("end-drag-card", () => {
    B(b, Q(B(k, null)));
  });
  const y = /* @__PURE__ */ z(() => r().add), x = /* @__PURE__ */ z(() => a()[Oe(e.column.id, e.row.id)]), I = /* @__PURE__ */ z(() => a()[e.column.id]), p = /* @__PURE__ */ z(() => {
    const M = i()[Oe(e.column.id, e.row.id)];
    if (c() && M) {
      let [q, Y] = [
        c().startIndex,
        c().endIndex
      ];
      return c().byRow[e.row.id] && ([q, Y] = [
        c().byRow[e.row.id].startIndex,
        c().byRow[e.row.id].endIndex
      ]), M.slice(q, Y);
    }
    return M;
  }), P = /* @__PURE__ */ z(() => Oe(e.column.id, e.row.id)), A = /* @__PURE__ */ z(() => o(x)?.height), N = /* @__PURE__ */ z(() => o(A) ? `${o(A)}px` : "auto");
  function V(M, q, Y, H) {
    let T = "wx-column";
    return q.collapsed && (T += " wx-collapsed"), Y && (T += " wx-over-limit"), q.css && (T += " " + q.css), M?.css && (T += " " + M.css(q, H)), T;
  }
  const W = /* @__PURE__ */ z(() => V(s(), e.column, o(x).isOverLimit, i()[e.column.id]));
  var J = Wh(), L = E(J);
  R(
    L,
    () => !e.column.collapsed,
    (M) => {
      var q = Gh(), Y = G(q);
      R(
        Y,
        () => l() === "column:lazy",
        (K) => {
          Ph(K, {
            get cards() {
              return o(p);
            },
            get cardTemplate() {
              return d();
            },
            get areaId() {
              return o(P);
            },
            get isMenuVisible() {
              return e.isMenuVisible;
            }
          });
        },
        (K) => {
          var j = $(), te = G(j);
          R(
            te,
            () => l() === "column:default",
            (ie) => {
              Bh(ie, {
                get cards() {
                  return o(p);
                },
                get cardTemplate() {
                  return d();
                },
                get areaId() {
                  return o(P);
                },
                get isMenuVisible() {
                  return e.isMenuVisible;
                }
              });
            },
            (ie) => {
              var ve = Yh(), X = G(ve);
              R(X, () => o(p), (se) => {
                var de = $(), ue = G(de);
                Se(ue, 17, () => o(p), (fe) => fe.id, (fe, _e) => {
                  var Ae = qh(), be = G(Ae);
                  R(be, () => le(o(_e).id, o(k)) && le(o(b), o(P)), (Be) => {
                    var Tt = Hh();
                    g(Be, Tt);
                  });
                  var ye = U(be, 2), Le = /* @__PURE__ */ z(() => d() || Qr), Pe = /* @__PURE__ */ z(() => e.isMenuVisible?.[o(_e).id]?.visible);
                  Xr(ye, {
                    get cardTemplate() {
                      return o(Le);
                    },
                    get cardFields() {
                      return o(_e);
                    },
                    get menu() {
                      return o(Pe);
                    }
                  }), g(fe, Ae);
                }), g(se, de);
              });
              var oe = U(X, 2);
              R(oe, () => !o(k) && le(o(b), o(P)), (se) => {
                var de = Uh();
                g(se, de);
              }), g(ie, ve);
            },
            !0
          ), g(K, j);
        }
      );
      var H = U(Y, 2), T = E(H);
      R(T, () => o(y) && (typeof e.column.limit == "object" ? !o(x).noFreeSpace : !o(I).noFreeSpace), (K) => {
        var j = Kh();
        j.__click = [Nh, v, e, u];
        var te = E(j);
        De(te, { css: "wxi-plus" });
        var ie = U(te, 2), ve = E(ie);
        F(() => ee(ve, u("Add new card..."))), g(K, j);
      });
      var O = U(T, 2);
      R(O, () => o(x).rowId && typeof e.column.limit == "object" && o(x).totalLimit, (K) => {
        var j = Vh(), te = E(j);
        F(() => ee(te, `${o(x).cardsCount ?? ""}/${o(x).totalLimit ?? ""}`)), g(K, j);
      }), g(M, q);
    },
    (M) => {
      var q = $(), Y = G(q);
      R(
        Y,
        () => s().collapsedTemplate,
        (H) => {
          var T = $();
          const O = /* @__PURE__ */ z(() => s().collapsedTemplate);
          var K = G(T);
          Et(K, () => o(O), (j, te) => {
            te(j, {
              get column() {
                return e.column;
              },
              get columnState() {
                return o(x);
              }
            });
          }), g(H, T);
        },
        (H) => {
          kh(H, {
            get column() {
              return e.column;
            },
            get columnState() {
              return o(x);
            }
          });
        },
        !0
      ), g(M, q);
    }
  );
  var D = U(L, 2);
  R(D, () => e.column.overlay, (M) => {
    var q = $(), Y = G(q);
    Et(Y, () => e.column.overlay, (H, T) => {
      T(H, {});
    }), g(M, q);
  }), F(() => {
    we(J, `${o(W) ?? ""} svelte-u46fyc`), Z(J, "data-drop-area", o(P)), Z(J, "style", `min-height:${o(N) ?? ""};`);
  }), g(n, J), re();
}
ge(["click"]);
var jh = /* @__PURE__ */ C('<div class="wx-label svelte-1dnc12v"> <!></div>'), Jh = /* @__PURE__ */ C('<div class="wx-menu svelte-1dnc12v"><!></div>'), Zh = /* @__PURE__ */ C('<div class="wx-collapse-icon svelte-1dnc12v"><!></div> <!> <!>', 1);
function Qh(n, e) {
  ne(e, !0);
  let t = S(e, "renaming", 3, !1), r = S(e, "readonly", 3, !1);
  var a = Zh(), i = G(a);
  Z(i, "data-action", "collapse");
  var s = E(i), l = /* @__PURE__ */ z(() => e.column.collapsed ? "wxi-angle-right" : "wxi-angle-left");
  De(s, {
    get css() {
      return o(l);
    }
  });
  var d = U(i, 2);
  R(d, () => !t() && !e.column.collapsed, (v) => {
    var u = jh();
    Z(u, "data-action", "rename");
    var h = E(u), _ = U(h);
    R(_, () => e.column.limit, (f) => {
      var m = ke();
      F(() => ee(m, `(${e.columnState.cardsCount ?? ""}/${e.columnState.totalLimit ?? ""})`)), g(f, m);
    }), F(() => ee(h, `${e.column.label ?? ""} `)), g(v, u);
  });
  var c = U(d, 2);
  R(c, () => e.isMenuVisible && !r() && !t() && !e.column.collapsed, (v) => {
    var u = Jh(), h = E(u);
    De(h, { css: "wxi-dots-h" }), F(() => Z(u, "data-menu-id", e.column.id)), g(v, u);
  }), g(n, a), re();
}
var Xh = /* @__PURE__ */ C('<span class="wx-mark svelte-1doi7f4">Trial</span>'), $h = /* @__PURE__ */ C('<input type="text" class="wx-input svelte-1doi7f4">'), em = /* @__PURE__ */ C("<div><!> <!> <!></div>");
function tm(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(c, "$_areasMeta", t), a = () => ce(v, "$columnShape", t), i = () => ce(u, "$_cardsMap", t), s = () => ce(h, "$readonly", t);
  let l = S(e, "renaming", 7, !1);
  const d = me("wx-kanban-store"), {
    _areasMeta: c,
    columnShape: v,
    _cardsMap: u,
    readonly: h
  } = d.getReactiveState(), _ = /* @__PURE__ */ z(() => r()[e.column.id]);
  let f = null, m = ae(void 0);
  function w() {
    l() && f?.trim() && d.exec("update-column", {
      id: e.column.id,
      column: { label: f }
    }), l(!1), f = null, e.onaction?.({ action: "close-column-input", data: {} });
  }
  function k(D) {
    f = D.target.value;
  }
  function b(D) {
    D.charCode === 13 && w();
  }
  function y(D) {
    D.focus();
  }
  function x(D, M, q, Y) {
    let H = "wx-column";
    return M.collapsed && (H += " wx-collapsed"), q && (H += " wx-over-limit"), M.css && (H += " " + M.css), D?.css && (H += " " + D.css(M, Y)), H;
  }
  const I = /* @__PURE__ */ z(() => x(a(), e.column, o(_).isOverLimit, i()[e.column.id])), { register: p, unregister: P, handleOffsetChange: A } = Xi();
  function N() {
    A?.(e.column.id, e.index, o(m).offsetLeft);
  }
  ht(() => p(e.column.id, o(m), N)), zr(() => {
    P(e.column.id, e.index);
  });
  var V = em(), W = E(V);
  R(
    W,
    () => a().headerTemplate,
    (D) => {
      var M = $();
      const q = /* @__PURE__ */ z(() => a().headerTemplate);
      var Y = G(M), H = /* @__PURE__ */ z(() => !s().edit);
      Et(Y, () => o(q), (T, O) => {
        O(T, {
          get column() {
            return e.column;
          },
          get columnState() {
            return o(_);
          },
          get isMenuVisible() {
            return e.isMenuVisible;
          },
          get renaming() {
            return l();
          },
          get readonly() {
            return o(H);
          }
        });
      }), g(D, M);
    },
    (D) => {
      var M = /* @__PURE__ */ z(() => !s().edit);
      Qh(D, {
        get column() {
          return e.column;
        },
        get columnState() {
          return o(_);
        },
        get isMenuVisible() {
          return e.isMenuVisible;
        },
        get renaming() {
          return l();
        },
        get readonly() {
          return o(M);
        }
      });
    }
  );
  var J = U(W, 2);
  R(J, () => !qi(), (D) => {
    var M = Xh();
    const q = /* @__PURE__ */ z(Ui);
    F(() => he(M, "wx-error", o(q))), g(D, M);
  });
  var L = U(J, 2);
  R(L, l, (D) => {
    var M = $h();
    M.__input = k, ze(M, (q) => y(q)), F(() => Bt(M, e.column.label)), He("keypress", M, b), He("blur", M, w), g(D, M);
  }), Te(V, (D) => B(m, D), () => o(m)), F(() => {
    we(V, `${o(I) ?? ""} svelte-1doi7f4`), Z(V, "data-id", e.column.id), Z(V, "data-column-header", e.column.id);
  }), g(n, V), re();
}
ge(["input"]);
var nm = /* @__PURE__ */ C('<div class="wx-header svelte-1vlv8y5"></div> <!>', 1);
function Na(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(v, "$columnShape", t), a = () => ce(c, "$readonly", t), i = () => ce(u, "$columns", t), s = me("wx-kanban-store"), l = me("wx-i18n").getGroup("kanban"), { showModal: d } = me("wx-helpers"), { readonly: c, columnShape: v, columns: u } = s.getReactiveState(), h = /* @__PURE__ */ z(() => r().fixedHeaders !== !1), _ = /* @__PURE__ */ z(() => a().add === !1), f = (D, M, q, Y) => {
    let H = Y.menu.items({ columns: q, columnIndex: M, column: D });
    return !H || !H.length ? null : (o(_) && (H = H.filter((T) => T.id !== "add-card")), H.map((T) => Zn(T, l)));
  }, m = /* @__PURE__ */ z(() => {
    const D = {};
    return i().forEach((M, q) => {
      D[M.id] = f(M, q, i(), r());
    }), D;
  });
  function w(D, M) {
    const q = i().findIndex((T) => T.id === D), Y = M === "left" ? q - 1 : q + 2, H = i()[Y]?.id;
    s.exec("move-column", { id: D, before: H });
  }
  let k = ae(null);
  function b(D) {
    const { action: M, context: q } = D;
    if (M) {
      if (M.onClick) {
        M.onClick({ id: M.id, item: M, column: q });
        return;
      }
      switch (M.id) {
        case "add-card":
          s.exec("add-card", {
            columnId: q.id,
            card: { label: l("Untitled") }
          });
          break;
        case "set-edit":
          a().edit && B(k, Q(q.id));
          break;
        case "delete-column": {
          (r().confirmDeletion ?? !0 ? d({
            message: l("Would you like to delete this column?")
          }) : Promise.resolve()).then(() => {
            s.exec("delete-column", { id: q.id });
          }).catch(() => {
          });
          break;
        }
        case "move-column:left":
          w(q.id, "left");
          break;
        case "move-column:right":
          w(q.id, "right");
          break;
      }
    }
  }
  let y = ae(null), x = ae(Q([]));
  function I(D) {
    return B(x, Q(o(m)[D] || [])), i().find((M) => M.id === D);
  }
  const p = ({ action: D, data: M }) => {
    if (D === "close-column-input") B(k, null);
    else if (D === "expand-column") {
      P(M.id);
      return;
    }
  };
  function P(D) {
    const M = i().find((q) => q.id == D);
    s.exec("update-column", { id: D, column: { collapsed: !M.collapsed } });
  }
  function A(D, M) {
    Nr(M.target, "data-action")?.dataset.action !== "rename" || !a().edit || i().find((Y) => Y.id == D).collapsed || B(k, Q(D));
  }
  const N = {
    dblclick: A,
    collapse: P
  };
  function V(D) {
    return r().menu.show && !!o(m)[D]?.length;
  }
  var W = nm(), J = G(W);
  J.__click = function(...D) {
    o(y).show?.apply(this, D);
  }, Se(J, 7, i, (D) => D.id, (D, M, q) => {
    var Y = /* @__PURE__ */ z(() => V(o(M).id)), H = /* @__PURE__ */ z(() => o(k) == o(M).id);
    tm(D, {
      get column() {
        return o(M);
      },
      get isMenuVisible() {
        return o(Y);
      },
      get renaming() {
        return o(H);
      },
      get index() {
        return o(q);
      },
      onaction: p
    });
  }), ze(J, (D, M) => mn(D, M), () => N);
  var L = U(J, 2);
  Te(
    Qn(L, {
      at: "left-bottom",
      get options() {
        return o(x);
      },
      resolver: I,
      dataKey: "menuId",
      onclick: b
    }),
    (D) => B(y, Q(D)),
    () => o(y)
  ), F(() => he(J, "fixed", o(h))), g(n, W), re();
}
ge(["click"]);
var rm = /* @__PURE__ */ C("<!> <!>", 1), am = /* @__PURE__ */ C("<!> <!>", 1), im = /* @__PURE__ */ C("<!> <!>", 1), om = /* @__PURE__ */ C("<!> <!>", 1), sm = /* @__PURE__ */ C('<div class="wx-kanban svelte-3y7ur4"><div class="wx-content-wrapper svelte-3y7ur4"><div class="wx-content svelte-3y7ur4"><!></div></div> <!></div> <!>', 1);
function lm(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(w, "$cards", t), a = () => ce(m, "$cardShape", t), i = () => ce(f, "$readonly", t), s = () => ce(b, "$_layout", t), l = () => ce(h, "$columns", t), d = () => ce(_, "$rows", t), c = () => ce(k, "$editor", t), v = me("wx-kanban-store"), u = me("wx-i18n").getGroup("kanban");
  let {
    columns: h,
    rows: _,
    readonly: f,
    cardShape: m,
    cards: w,
    editor: k,
    _layout: b
  } = v.getReactiveState();
  const { showModal: y } = me("wx-helpers");
  let x = ae(null), I = ae(Q([]));
  const p = (T, O) => {
    const K = O.menu.items({ card: T });
    return !K || !K.length ? null : K.map((j) => Zn(j, u));
  }, P = /* @__PURE__ */ z(() => r().reduce(
    (T, O) => {
      const K = p(O, a());
      return T[O.id] = {
        options: K,
        visible: !!(a().menu.show && K?.length)
      }, T;
    },
    {}
  ));
  function A(T) {
    const O = r().find((K) => K.id == T);
    return O && (v.getState().selected?.length > 1 && v.exec("select-card", { id: parseInt(T) }), B(I, Q(o(P)[O.id].options || []))), O;
  }
  function N(T) {
    const { action: O, context: K } = T;
    if (O) {
      if (O.onClick) {
        O.onClick({ id: O.id, item: O, card: K });
        return;
      }
      switch (O.id) {
        case "delete-card": {
          (a().confirmDeletion?.show ?? !0 ? V() : Promise.resolve()).then(() => {
            v.exec("delete-card", { id: K.id });
          }).catch(() => {
          });
          break;
        }
        case "set-edit":
          v.exec("set-edit", { cardId: K.id, eventSource: "ui" });
          break;
        case "duplicate-card":
          v.exec("duplicate-card", {
            id: K.id,
            card: {
              label: `${u("Duplicate of")} ${K.label}`
            }
          });
          break;
      }
    }
  }
  function V() {
    return y({
      message: u("Would you like to delete this card?")
    });
  }
  vv(h);
  let W = ae(void 0);
  v.on("start-drag-card", (T) => {
    B(W, Q(T.id));
  }), v.on("end-drag-card", () => {
    B(W, null);
  });
  var J = sm(), L = G(J), D = E(L), M = E(D);
  M.__click = function(...T) {
    o(x).show?.apply(this, T);
  };
  var q = E(M);
  R(
    q,
    () => s() === "default:lazy",
    (T) => {
      Tv(T, { children: (K, j) => {
        let te = () => j?.().startIndex, ie = () => j?.().endIndex, ve = () => j?.().byRow;
        var X = am(), oe = G(X);
        Na(oe, {});
        var se = U(oe, 2);
        R(se, () => l().length, (de) => {
          var ue = rm(), fe = G(ue);
          Se(fe, 1, d, (Ae) => Ae.id, (Ae, be) => {
            var ye = $(), Le = G(ye);
            R(Le, () => ve()[o(be).id]?.visible, (Pe) => {
              za(Pe, {
                get row() {
                  return o(be);
                },
                children: (Be, Tt) => {
                  var et = $(), tt = G(et);
                  Se(tt, 1, l, (Ue) => Ue.id, (Ue, nt) => {
                    var ta = /* @__PURE__ */ z(() => ({
                      startIndex: te(),
                      endIndex: ie(),
                      byRow: ve()
                    }));
                    Ba(Ue, {
                      get column() {
                        return o(nt);
                      },
                      get row() {
                        return o(be);
                      },
                      get virtual() {
                        return o(ta);
                      },
                      get cardTemplate() {
                        return e.cardTemplate;
                      },
                      get isMenuVisible() {
                        return o(P);
                      }
                    });
                  }), g(Be, et);
                },
                $$slots: { default: !0 }
              });
            }), g(Ae, ye);
          });
          var _e = U(fe, 2);
          Oa(_e, {}), g(de, ue);
        }), g(K, X);
      }, $$slots: { default: !0 } });
    },
    (T) => {
      var O = om(), K = G(O);
      Na(K, {});
      var j = U(K, 2);
      R(j, () => l().length, (te) => {
        var ie = im(), ve = G(ie);
        Se(ve, 1, d, (oe) => oe.id, (oe, se) => {
          za(oe, {
            get row() {
              return o(se);
            },
            children: (de, ue) => {
              var fe = $(), _e = G(fe);
              Se(_e, 1, l, (Ae) => Ae.id, (Ae, be) => {
                Ba(Ae, {
                  get column() {
                    return o(be);
                  },
                  get row() {
                    return o(se);
                  },
                  get cardTemplate() {
                    return e.cardTemplate;
                  },
                  get isMenuVisible() {
                    return o(P);
                  }
                });
              }), g(de, fe);
            },
            $$slots: { default: !0 }
          });
        });
        var X = U(ve, 2);
        Oa(X, {}), g(te, ie);
      }), g(T, O);
    }
  ), ze(D, (T, O) => ev(T, O), () => ({
    api: v,
    readonly: i().select === !1
  }));
  var Y = U(D, 2);
  R(Y, () => i().edit && !o(W) && c().show !== !1, (T) => {
    Nf(T, {});
  }), ze(L, (T, O) => $u(T, O), () => ({ api: v, readonly: i().dnd === !1 })), ze(L, (T, O) => iv(T, O), () => ({
    api: v,
    readonly: i().edit === !1,
    locale: u,
    confirmDeletion: a().confirmDeletion?.show ?? !0 ? V : null
  })), ze(L, (T, O) => av(T, O), () => ({ api: v, tick: Lt }));
  var H = U(L, 2);
  Te(
    Qn(H, {
      at: "left-bottom",
      get options() {
        return o(I);
      },
      resolver: A,
      dataKey: "menuId",
      onclick: N
    }),
    (T) => B(x, Q(T)),
    () => o(x)
  ), F(() => {
    Z(L, "data-wx-widget", Ye.kanban), he(L, "wx-dragged", !!o(W)), he(L, "wx-touch", uv.isMobile || navigator.maxTouchPoints > 1), Z(D, "data-kanban-id", Ye.content), he(D, "wx-virtual-content", s() === "default:lazy"), Z(M, "data-kanban-id", Ye.scrollableContent), he(M, "wx-virtual-content", s() === "default:lazy"), he(M, "wx-not-anchored", !!o(W));
  }), g(n, J), re();
}
ge(["click"]);
function cm(n, e) {
  ne(e, !0);
  let t = S(e, "rows", 3, null), r = S(e, "cardShape", 3, kn), a = S(e, "columnShape", 3, null), i = S(e, "rowShape", 3, null), s = S(e, "editorShape", 3, null), l = S(e, "readonly", 3, !1), d = S(e, "columnKey", 3, "column"), c = S(e, "rowKey", 3, ""), v = S(e, "scrollType", 3, "default"), u = S(e, "renderType", 3, "default"), h = S(e, "cardHeight", 3, null), _ = S(e, "cardTemplate", 3, null), f = S(e, "editor", 27, () => Q(Wr)), m = S(e, "history", 3, !0), w = S(e, "currentUser", 3, null), k = S(e, "links", 3, null), b = S(e, "dataStore", 15, null), y = S(e, "init", 3, null), x = /* @__PURE__ */ hn(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "columns",
    "rows",
    "cards",
    "cardShape",
    "columnShape",
    "rowShape",
    "editorShape",
    "readonly",
    "columnKey",
    "rowKey",
    "scrollType",
    "renderType",
    "cardHeight",
    "cardTemplate",
    "editor",
    "history",
    "currentUser",
    "links",
    "dataStore",
    "init"
  ]);
  const I = /-/g;
  let p = new fl((V, W) => {
    const J = "on" + V.replace(I, "");
    x[J] && x[J](W);
  });
  b() || (b(new ju((V) => Vr(V), { history: m() })), b().out.setNext(p));
  const P = sv(b(), p);
  wt("wx-kanban-store", P);
  let A = !0;
  const N = () => {
    b().init({
      columnKey: d(),
      rowKey: c(),
      columns: e.columns,
      rows: t(),
      cards: e.cards,
      cardShape: r(),
      columnShape: a(),
      editorShape: s(),
      rowShape: i(),
      readonly: l(),
      cardHeight: h(),
      currentUser: w(),
      links: k(),
      editor: f(),
      scrollType: v(),
      renderType: u(),
      _cardsMap: {},
      _cardsMeta: {}
    }), A && y() && (y()(P), A = !1);
  };
  return N(), at(N), At(n, {
    words: { ...jn, ...Wn },
    optional: !0,
    children: (V, W) => {
      Rd(V, {
        children: (J, L) => {
          lm(J, {
            get cardTemplate() {
              return _();
            }
          });
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  }), re({ api: P });
}
function kr(n, e) {
  ne(e, !0);
  let t = /* @__PURE__ */ hn(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "template"
  ]);
  const r = /* @__PURE__ */ z(() => typeof e.template == "function" ? e.template({ ...t }) : e.template);
  var a = $(), i = G(a);
  R(i, () => o(r), (s) => {
    var l = $(), d = G(l);
    Gn(d, () => o(r)), g(s, l);
  }), g(n, a), re();
}
function dm(n, e) {
  ne(e, !0);
  let t = S(e, "fonts", 3, !0);
  var r = $(), a = G(r);
  R(
    a,
    () => e.children,
    (i) => {
      Ca(i, {
        get fonts() {
          return t();
        },
        children: (s, l) => {
          var d = $(), c = G(d);
          Ie(c, () => e.children ?? Ce), g(s, d);
        },
        $$slots: { default: !0 }
      });
    },
    (i) => {
      Ca(i, {
        get fonts() {
          return t();
        }
      });
    }
  ), g(n, r), re();
}
function um(n, e) {
  ne(e, !0);
  let t = S(e, "fonts", 3, !0);
  var r = $(), a = G(r);
  R(
    a,
    () => e.children,
    (i) => {
      Ea(i, {
        get fonts() {
          return t();
        },
        children: (s, l) => {
          var d = $(), c = G(d);
          Ie(c, () => e.children ?? Ce), g(s, d);
        },
        $$slots: { default: !0 }
      });
    },
    (i) => {
      Ea(i, {
        get fonts() {
          return t();
        }
      });
    }
  ), g(n, r), re();
}
function vm(n, e) {
  ne(e, !0);
  let t = S(e, "fonts", 3, !0);
  var r = $(), a = G(r);
  R(
    a,
    () => e.children,
    (i) => {
      Da(i, {
        get fonts() {
          return t();
        },
        children: (s, l) => {
          var d = $(), c = G(d);
          Ie(c, () => e.children ?? Ce), g(s, d);
        },
        $$slots: { default: !0 }
      });
    },
    (i) => {
      Da(i, {
        get fonts() {
          return t();
        }
      });
    }
  ), g(n, r), re();
}
var fm = /* @__PURE__ */ C('<div class="wx-item-inner svelte-yq8s5f"><span class="wx-list-item-text svelte-yq8s5f"> </span></div>'), hm = /* @__PURE__ */ C('<div class="wx-list-item svelte-yq8s5f"><!></div>'), mm = /* @__PURE__ */ C('<div class="wx-results svelte-yq8s5f"></div>'), gm = /* @__PURE__ */ C('<div class="wx-list-item wx-no-results svelte-yq8s5f"> </div>'), _m = /* @__PURE__ */ C('<div class="wx-search-popup svelte-yq8s5f"><div class="wx-settings svelte-yq8s5f"><div class="wx-select svelte-yq8s5f"><div class="wx-title svelte-yq8s5f"> </div> <!></div></div> <!></div>'), wm = /* @__PURE__ */ C('<div class="wx-search svelte-yq8s5f"><div class="wx-search-input svelte-yq8s5f"><!></div> <!></div>');
function xm(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(o(l), "$_cardsMeta", t), a = () => ce(o(d), "$search", t), i = me("wx-i18n").getGroup("kanban");
  let s = S(e, "options", 19, () => [
    { id: null, label: i("Everywhere") },
    { id: "label", label: i("Label") },
    {
      id: "description",
      label: i("Description")
    }
  ]);
  const l = /* @__PURE__ */ z(() => e.api?.getReactiveState()._cardsMeta), d = /* @__PURE__ */ z(() => e.api?.getReactiveState().search), c = /* @__PURE__ */ z(() => {
    if (r()) {
      const A = Object.keys(r()).reduce(
        (N, V) => (r()[V].found && N.push(e.api?.getCard(V)), N),
        []
      );
      if (A.length)
        return A;
    }
    return null;
  });
  function v({ value: A }) {
    A || (A = null);
    const N = s().find((V) => V.id === A);
    e.api?.exec("set-search", {
      value: a()?.value || "",
      by: A,
      searchRule: N?.searchRule
    });
  }
  let u = ae(!1), h = ae(void 0);
  function _(A) {
    o(h).contains(A.target) || (B(u, !1), e.api?.exec("set-search", { value: "", by: a()?.by || null }));
  }
  function f({ value: A, input: N }) {
    a()?.value !== A && (B(u, !!N), e.api?.exec("set-search", { value: A, by: a()?.by || null }));
  }
  function m() {
    B(u, !0);
  }
  function w(A) {
    e.api?.exec("select-card", { id: A }), B(u, !1);
  }
  const k = {
    click: (A) => w(A)
  };
  var b = wm();
  Z(b, "tabindex", 1);
  var y = E(b);
  y.__click = m;
  var x = E(y), I = /* @__PURE__ */ z(() => a()?.value || ""), p = /* @__PURE__ */ z(() => i("Search"));
  Jn(x, {
    get value() {
      return o(I);
    },
    get placeholder() {
      return o(p);
    },
    clear: !0,
    icon: "wxi-search",
    css: "wx-icon-left",
    onchange: f,
    onfocus: m
  });
  var P = U(y, 2);
  R(P, () => o(u), (A) => {
    Mt(A, {
      oncancel: _,
      children: (N, V) => {
        var W = _m(), J = E(W), L = E(J), D = E(L), M = E(D);
        F(() => ee(M, `${i("Search in") ?? ""}:`));
        var q = U(D, 2), Y = /* @__PURE__ */ z(() => a()?.by || null);
        Oi(q, {
          get value() {
            return o(Y);
          },
          get options() {
            return s();
          },
          onchange: v
        });
        var H = U(J, 2);
        R(
          H,
          () => o(c),
          (T) => {
            var O = mm();
            Se(O, 21, () => o(c), ot, (K, j) => {
              var te = hm(), ie = E(te);
              R(
                ie,
                () => e.resultTemplate,
                (ve) => {
                  var X = $();
                  const oe = /* @__PURE__ */ z(() => e.resultTemplate);
                  var se = G(X);
                  Et(se, () => o(oe), (de, ue) => {
                    ue(de, {
                      get result() {
                        return o(j);
                      }
                    });
                  }), g(ve, X);
                },
                (ve) => {
                  var X = fm(), oe = E(X), se = E(oe);
                  F(() => ee(se, o(j).label)), g(ve, X);
                }
              ), F(() => Z(te, "data-id", o(j).id)), g(K, te);
            }), ze(O, (K, j) => mn(K, j), () => k), g(T, O);
          },
          (T) => {
            var O = gm(), K = E(O);
            F(() => ee(K, i("No results"))), g(T, O);
          }
        ), g(N, W);
      },
      $$slots: { default: !0 }
    });
  }), Te(b, (A) => B(h, A), () => o(h)), F(() => Z(b, "data-wx-widget", Ye.search)), g(n, b), re();
}
ge(["click"]);
function ym(n, e) {
  ne(e, !0);
  const t = me("wx-i18n").getGroup("kanban");
  function r() {
    e.api?.exec("add-row", {
      id: Br(),
      row: { label: t("Untitled") }
    });
  }
  var a = /* @__PURE__ */ z(() => t("Add new row"));
  De(n, {
    onclick: r,
    get title() {
      return o(a);
    },
    css: "wxi-table-row-plus-after"
  }), re();
}
function bm(n, e) {
  ne(e, !0);
  const t = me("wx-i18n").getGroup("kanban");
  function r() {
    e.api?.exec("add-column", {
      id: Br(),
      column: { label: t("Untitled") }
    });
  }
  var a = /* @__PURE__ */ z(() => t("Add new column"));
  De(n, {
    onclick: r,
    get title() {
      return o(a);
    },
    css: "wxi-table-column-plus-after"
  }), re();
}
var pm = /* @__PURE__ */ C('<div class="wx-preserve svelte-1284skx"><!> </div>'), km = /* @__PURE__ */ C('<div class="wx-control svelte-1284skx"><!></div>'), Sm = /* @__PURE__ */ C('<div class="wx-sort-button svelte-1284skx"><!> <!></div>');
function Im(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(o(l), "$stateSort", t), a = me("wx-i18n").getGroup("kanban");
  let i = S(e, "options", 3, null);
  const s = /* @__PURE__ */ z(() => (Array.isArray(i()) ? i() : vu()).map((f) => {
    const { id: m, text: w, label: k, dir: b } = f;
    return {
      ...f,
      id: m || qe(),
      text: a(w || k),
      icon: b === "asc" ? "wxi-asc" : "wxi-desc"
    };
  }));
  let l = /* @__PURE__ */ z(() => e.api?.getReactiveState().sort), d = /* @__PURE__ */ z(() => r()?.preserve ? o(s).find((f) => f.by === r().by && f.dir === r().dir) : null);
  function c(f) {
    const m = f?.action;
    if (m) {
      const w = o(s).find((k) => k.id === m.id);
      w && e.api.exec("set-sort", { by: w.by, dir: w.dir });
    }
  }
  function v() {
    e.api.exec("set-sort", null);
  }
  var u = Sm(), h = E(u);
  R(h, () => o(d), (f) => {
    var m = pm(), w = E(m);
    De(w, { css: "wxi-close", onclick: v });
    var k = U(w);
    F(() => ee(k, ` ${o(d).text ?? ""}`)), g(f, m);
  });
  var _ = U(h, 2);
  Mv(_, {
    get options() {
      return o(s);
    },
    at: "left-bottom",
    onclick: c,
    children: (f, m) => {
      var w = km();
      F(() => Z(w, "title", a("Sort")));
      var k = E(w);
      De(k, { css: "wxi-sort" }), g(f, w);
    },
    $$slots: { default: !0 }
  }), g(n, u), re();
}
function Cm(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(o(s), "$history", t), a = me("wx-i18n").getGroup("kanban");
  function i() {
    e.api.exec("undo");
  }
  const s = /* @__PURE__ */ z(() => e.api?.getReactiveState().history), l = /* @__PURE__ */ z(() => o(s) && r().undo.length > 0);
  var d = /* @__PURE__ */ z(() => a("Undo")), c = /* @__PURE__ */ z(() => `wxi-undo ${o(l) ? "" : "wx-disabled"}`);
  De(n, {
    onclick: i,
    get title() {
      return o(d);
    },
    get css() {
      return o(c);
    }
  }), re();
}
function Em(n, e) {
  ne(e, !0);
  const t = Fe(), r = () => ce(o(s), "$history", t), a = me("wx-i18n").getGroup("kanban");
  function i() {
    e.api.exec("redo");
  }
  const s = /* @__PURE__ */ z(() => e.api?.getReactiveState().history), l = /* @__PURE__ */ z(() => o(s) && r().redo?.length > 0);
  var d = /* @__PURE__ */ z(() => a("Redo")), c = /* @__PURE__ */ z(() => `wxi-redo ${o(l) ? "" : "wx-disabled"}`);
  De(n, {
    onclick: i,
    get title() {
      return o(d);
    },
    get css() {
      return o(c);
    }
  }), re();
}
function $r(n, e, t) {
  const r = document.createElement("DIV");
  r.className = "wx-theme", n.appendChild(r);
  let a = window.getComputedStyle(r).getPropertyValue("--wx-theme-name");
  return r.remove(), (e && e !== a || !e && !a && t) && (a && n.classList.remove(`wx-${a}-theme`), a = e || t, n.classList.add(`wx-${a}-theme`)), a;
}
const Ha = {
  material: dm,
  willow: um,
  "willow-dark": vm
};
function Dm() {
  Ai(qr);
}
class hg {
  api;
  export;
  #e = ae();
  get config() {
    return o(this.#e);
  }
  set config(e) {
    B(this.#e, Q(e));
  }
  container;
  _kanban;
  constructor(e, t) {
    this.container = typeof e == "string" ? document.querySelector(e) : e, this.config = t, qr.detect() && Dm(), this._init();
  }
  destructor() {
    Lr(this._kanban), this._kanban = this.api = null;
  }
  setConfig(e) {
    this._storeConfig(e), typeof e.history < "u" && console.debug("history cannot be reset at runtime"), typeof e.theme < "u" ? this.setTheme(e.theme) : this.api.getStores().data.init({ ...this.config });
  }
  parse(e) {
    this.setConfig(e);
  }
  serialize() {
    const { cards: e, links: t, columns: r, rows: a } = this.api.getState();
    return { cards: e, links: t, columns: r, rows: a };
  }
  getCard(e) {
    return this.api.getCard(e);
  }
  getAreaCards(e, t) {
    return this.api.getAreaCards(e, t);
  }
  getColumnCards(e) {
    return this.api.getColumnCards(e);
  }
  getSelection() {
    return this.api.getState().selected;
  }
  undo() {
    this.api.exec("undo", null);
  }
  redo() {
    this.api.exec("redo", null);
  }
  addCard(e) {
    this.api.exec("add-card", e);
  }
  updateCard(e) {
    this.api.exec("update-card", e);
  }
  duplicateCard(e) {
    this.api.exec("duplicate-card", e);
  }
  deleteCard(e) {
    this.api.exec("delete-card", e);
  }
  moveCard(e) {
    this.api.exec("move-card", e);
  }
  addColumn(e) {
    this.api.exec("add-column", e);
  }
  updateColumn(e) {
    this.api.exec("update-column", e);
  }
  addRow(e) {
    this.api.exec("add-row", e);
  }
  updateRow(e) {
    this.api.exec("update-row", e);
  }
  moveColumn(e) {
    this.api.exec("move-column", e);
  }
  moveRow(e) {
    this.api.exec("move-row", e);
  }
  deleteColumn(e) {
    this.api.exec("delete-column", e);
  }
  deleteRow(e) {
    this.api.exec("delete-row", e);
  }
  addLink(e) {
    this.api.exec("add-link", e);
  }
  deleteLink(e) {
    this.api.exec("delete-link", e);
  }
  addComment(e) {
    this.api.exec("add-comment", e);
  }
  updateComment(e) {
    this.api.exec("update-comment", e);
  }
  deleteComment(e) {
    this.api.exec("delete-comment", e);
  }
  selectCard(e) {
    this.api.exec("select-card", e);
  }
  unselectCard(e) {
    this.api.exec("unselect-card", e);
  }
  setSearch(e) {
    this.api.exec("set-search", e);
  }
  setSort(e) {
    this.api.exec("set-sort", e);
  }
  setEdit(e) {
    this.api.exec("set-edit", { ...e });
  }
  scroll(e) {
    this.api.exec("scroll", e);
  }
  setLocale(e) {
    this._reset({ locale: e });
  }
  setTheme(e) {
    this._reset({ theme: e });
  }
  _init(e) {
    this._kanban && this.destructor();
    const t = $r(this.container, this.config.theme?.name, "material"), r = /* @__PURE__ */ new Map([
      ["wx-i18n", Jt(this.config.locale)],
      ["wx-theme", t]
    ]);
    Ha[t] && Tn(Ha[t], {
      target: this.container,
      props: { fonts: this.config.theme?.fonts }
    }), e && (this.config.dataStore = e), this._kanban = Tn(cm, {
      target: this.container,
      props: this.config,
      context: r,
      intro: !1
    }), this.api = this._kanban.api, this.export = this.api.export;
  }
  _reset(e) {
    const t = this.api.getStores().data;
    this._storeConfig(e), this._init(t);
  }
  _storeConfig(e) {
    const t = this.serialize();
    this.config = { ...this.config, ...t, ...e };
  }
}
function mg(n) {
  return new Proxy(kr, {
    apply(e, t, r) {
      const [, a] = r;
      return a.template = n, e(r[0], a);
    }
  });
}
function Mm(n, e) {
  pr(n, {
    get api() {
      return e.api;
    },
    get config() {
      return e.config;
    },
    get shape() {
      return e.shape;
    }
  });
}
class gg {
  api;
  config;
  container;
  _component;
  constructor(e, t) {
    this.container = typeof e == "string" ? document.querySelector(e) : e, this.config = t, this._init();
  }
  destructor() {
    Lr(this._component), this._component = this.api = null;
  }
  setConfig(e) {
    e && (this.config = { ...this.config, ...e }, this._init());
  }
  /** @version v1.5.7 */
  setLocale(e, t) {
    this.setConfig({ locale: e, api: t });
  }
  _init() {
    this._component && this.destructor();
    const e = /* @__PURE__ */ new Map([
      ["wx-i18n", Jt(this.config.locale)],
      [
        "wx-theme",
        $r(this.container, this.config.theme, "material")
      ]
    ]);
    this._component = Tn(Mm, {
      target: this.container,
      props: this._configToProps(this.config),
      context: e,
      intro: !1
    });
  }
  _configToProps(e) {
    return e;
  }
}
const no = {};
function Am(n) {
  return no[n] || n;
}
function Qt(n, e) {
  no[n] = e;
}
var Tm = /* @__PURE__ */ C("<div>&nbsp;</div>");
function ro(n, e) {
  let t = S(e, "menu", 3, !1);
  var r = Tm();
  F(() => we(r, `wx-separator${(t() ? "-menu" : "") ?? ""} svelte-1eu7qav`)), g(n, r);
}
var Pm = /* @__PURE__ */ C('<div class="wx-spacer svelte-1mbb7ow"></div>');
function ao(n) {
  var e = Pm();
  g(n, e);
}
var Rm = /* @__PURE__ */ C("<div><!></div>");
function ea(n, e) {
  ne(e, !0);
  let t = S(e, "item", 19, () => ({})), r = S(e, "menu", 3, !1), a = /* @__PURE__ */ z(() => Am(t().comp || "label"));
  function i() {
    t().handler && t().handler(t()), e.onclick && e.onclick({ item: t() });
  }
  let s = /* @__PURE__ */ z(() => t().key ? e.values[t().key] : void 0);
  function l({ value: u }) {
    t().handler && t().handler(t(), u), e.onchange && e.onchange({ value: u, item: t() });
  }
  const d = /* @__PURE__ */ z(() => r() && t().menuText || t().text);
  var c = $(), v = G(c);
  R(
    v,
    () => t().comp == "spacer",
    (u) => {
      ao(u);
    },
    (u) => {
      var h = $(), _ = G(h);
      R(
        _,
        () => t().comp == "separator",
        (f) => {
          ro(f, {
            get menu() {
              return r();
            }
          });
        },
        (f) => {
          var m = Rm();
          const w = /* @__PURE__ */ z(() => o(a));
          var k = E(m);
          Et(k, () => o(w), (b, y) => {
            y(b, We(
              {
                get value() {
                  return o(s);
                },
                onchange: l,
                onclick: i,
                get text() {
                  return o(d);
                },
                get menu() {
                  return r();
                }
              },
              t
            ));
          }), F(() => {
            we(m, `wx-tb-element ${(t().css || "") ?? ""} svelte-ptl7r2`), Z(m, "data-id", t().id), he(m, "wx-spacer", t().spacer), he(m, "wx-menu", r());
          }), g(f, m);
        },
        !0
      ), g(u, h);
    }
  ), g(n, c), re();
}
const Lm = (n, e) => B(e, !1);
var Fm = /* @__PURE__ */ C("<i></i>"), Om = /* @__PURE__ */ C('<div class="wx-label-text"> </div>'), zm = /* @__PURE__ */ C('<i class="wx-label-arrow wxi-angle-down"></i>'), Bm = /* @__PURE__ */ C('<div class="wx-drop-group"><!></div>'), Nm = /* @__PURE__ */ C('<div class="wx-collapsed svelte-155fw4u"><!> <!> <!></div> <!>', 1), Hm = /* @__PURE__ */ C('<div class="wx-label svelte-155fw4u"> </div>'), qm = /* @__PURE__ */ C('<div class="wx-tb-body svelte-155fw4u"></div> <!>', 1), Um = /* @__PURE__ */ C("<div><!></div>");
function On(n, e) {
  ne(e, !0);
  let t = S(e, "values", 3, null), r = S(e, "menu", 3, !1), a = ae(!0);
  const i = (c) => {
    s(), e.onclick && e.onclick(c);
  }, s = () => B(a, !0);
  var l = Um(), d = E(l);
  R(
    d,
    () => e.item.collapsed && !r(),
    (c) => {
      var v = Nm(), u = G(v);
      u.__click = [Lm, a];
      var h = E(u);
      R(h, () => e.item.icon, (w) => {
        var k = Fm();
        F(() => we(k, `icon ${e.item.icon ?? ""} svelte-155fw4u`)), g(w, k);
      });
      var _ = U(h, 2);
      R(_, () => e.item.text, (w) => {
        var k = Om(), b = E(k);
        F(() => ee(b, e.item.text)), g(w, k);
      });
      var f = U(_, 2);
      R(f, () => e.item.text && !e.item.icon, (w) => {
        var k = zm();
        g(w, k);
      });
      var m = U(u, 2);
      R(m, () => !o(a), (w) => {
        Mt(w, {
          width: "",
          oncancel: s,
          children: (k, b) => {
            var y = Bm(), x = E(y), I = /* @__PURE__ */ z(() => ({ ...e.item, text: "", collapsed: !1 }));
            On(x, {
              get item() {
                return o(I);
              },
              get values() {
                return t();
              },
              get menu() {
                return r();
              },
              get onchange() {
                return e.onchange;
              },
              onclick: i
            }), g(k, y);
          },
          $$slots: { default: !0 }
        });
      }), g(c, v);
    },
    (c) => {
      var v = qm(), u = G(v);
      Se(u, 21, () => e.item.items, ot, (_, f) => {
        var m = $(), w = G(m);
        R(
          w,
          () => o(f).items,
          (k) => {
            On(k, {
              get item() {
                return o(f);
              },
              get values() {
                return t();
              },
              onclick: i,
              get onchange() {
                return e.onchange;
              }
            });
          },
          (k) => {
            ea(k, {
              get item() {
                return o(f);
              },
              get values() {
                return t();
              },
              onclick: i,
              get onchange() {
                return e.onchange;
              }
            });
          }
        ), g(_, m);
      });
      var h = U(u, 2);
      R(h, () => e.item.text, (_) => {
        var f = Hm(), m = E(f);
        F(() => ee(m, e.item.text)), g(_, f);
      }), g(c, v);
    }
  ), F(() => {
    we(l, `wx-tb-group ${(e.item.css || "") ?? ""} svelte-155fw4u`), he(l, "wx-column", e.item.layout == "column"), he(l, "wx-group-collapsed", e.item.collapsed && !r());
  }), g(n, l), re();
}
ge(["click"]);
var Ym = /* @__PURE__ */ C('<div class="wx-drop-menu svelte-7mtmlh"></div>'), Km = /* @__PURE__ */ C('<div data-id="$menu"><!> <!></div>');
function Vm(n, e) {
  ne(e, !0);
  let t = S(e, "items", 19, () => []), r = ae(void 0), a = ae(void 0);
  function i() {
    B(r, null);
  }
  function s() {
    B(r, !0);
  }
  function l(u) {
    i(), e.onclick && e.onclick(u);
  }
  var d = Km(), c = E(d);
  Re(c, { icon: "wxi-dots-h", onclick: s });
  var v = U(c, 2);
  R(v, () => o(r), (u) => {
    Mt(u, {
      get width() {
        return `${e.width ?? ""}px`;
      },
      oncancel: i,
      children: (h, _) => {
        var f = Ym();
        Se(f, 21, t, ot, (m, w) => {
          var k = $(), b = G(k);
          R(
            b,
            () => o(w).items,
            (y) => {
              On(y, {
                get item() {
                  return o(w);
                },
                get values() {
                  return e.values;
                },
                menu: !0,
                onclick: l,
                get onchange() {
                  return e.onchange;
                }
              });
            },
            (y) => {
              ea(y, {
                get item() {
                  return o(w);
                },
                get values() {
                  return e.values;
                },
                menu: !0,
                onclick: l,
                get onchange() {
                  return e.onchange;
                }
              });
            }
          ), g(m, k);
        }), g(h, f);
      },
      $$slots: { default: !0 }
    });
  }), Te(d, (u) => B(a, u), () => o(a)), F(() => we(d, `wx-menu ${(e.css || "") ?? ""} svelte-7mtmlh`)), g(n, d), re();
}
var Gm = /* @__PURE__ */ C("<div><!> <!></div>");
function Wm(n, e) {
  ne(e, !0);
  let t = S(e, "items", 31, () => Q([])), r = S(e, "menuCss", 3, ""), a = S(e, "values", 15, null), i = S(e, "overflow", 3, "menu");
  function s(y) {
    a() && (a(a()[y.item.key] = y.value, !0), a(a())), e.onchange && e.onchange(y);
  }
  let l = null, d = -1, c = ae(Q([]));
  function v() {
    if (i() === "wrap") return;
    const y = l.clientWidth;
    if (l.scrollWidth > y) {
      if (i() === "collapse") return h();
      const p = l.children;
      let P = 0;
      for (let A = 0; A < t().length; (A += 1) - 1) {
        if (P += p[A].clientWidth, t()[A].comp == "separator" && (P += 8), P > y - 40) {
          if (d === A) return;
          d = A, B(c, Q([]));
          for (let N = A; N < t().length; (N += 1) - 1)
            o(c).push(t()[N]), p[N].style.visibility = "hidden";
          A > 0 && t()[A - 1].comp == "separator" && (p[A - 1].style.visibility = "hidden");
          break;
        }
        p[A].style.visibility = "";
      }
    } else {
      const p = y - u();
      if (p <= 0) return;
      if (i() === "collapse") return _(p);
      if (o(c).length) {
        d = null;
        const P = l.children;
        for (let A = 0; A < t().length; (A += 1) - 1)
          P[A].style.visibility = "";
        B(c, Q([]));
      }
    }
  }
  function u() {
    const y = l.children;
    let x = 0;
    for (let I = 0; I < t().length; (I += 1) - 1)
      t()[I].comp != "spacer" && (x += y[I].clientWidth, t()[I].comp == "separator" && (x += 8));
    return x;
  }
  function h() {
    for (let y = t().length - 1; y >= 0; (y -= 1) + 1)
      if (t()[y].items && !t()[y].collapsed) {
        t(t()[y].collapsed = !0, !0), t(t()[y].$width = l.children[y].offsetWidth, !0), Lt().then(v), t([...t()]);
        return;
      }
  }
  function _(y) {
    for (let x = 0; x < t().length; (x += 1) - 1)
      if (t()[x].collapsed && t()[x].$width) {
        t()[x].$width - l.children[x].offsetWidth < y + 10 && (t(t()[x].collapsed = !1, !0), Lt().then(v)), t([...t()]);
        return;
      }
  }
  function f(y) {
    return y.forEach((x) => {
      x.id || (x.id = qe());
    }), y;
  }
  ht(() => {
    const y = new ResizeObserver(() => v());
    return y.observe(l), () => {
      y && y.unobserve(l);
    };
  });
  const m = /* @__PURE__ */ z(() => f(t()));
  var w = Gm(), k = E(w);
  Se(k, 17, () => o(m), ot, (y, x) => {
    var I = $(), p = G(I);
    R(
      p,
      () => o(x).items,
      (P) => {
        On(P, {
          get item() {
            return o(x);
          },
          get values() {
            return a();
          },
          get onclick() {
            return e.onclick;
          },
          onchange: s
        });
      },
      (P) => {
        ea(P, {
          get item() {
            return o(x);
          },
          get values() {
            return a();
          },
          get onclick() {
            return e.onclick;
          },
          onchange: s
        });
      }
    ), g(y, I);
  });
  var b = U(k, 2);
  R(b, () => o(c).length, (y) => {
    Vm(y, {
      get items() {
        return o(c);
      },
      get css() {
        return r();
      },
      get values() {
        return a();
      },
      get onclick() {
        return e.onclick;
      },
      onchange: s
    });
  }), Te(w, (y) => l = y, () => l), F(() => {
    we(w, `wx-toolbar ${e.css ?? ""} svelte-b19ms9`), he(w, "wx-wrap", i() === "wrap");
  }), g(n, w), re();
}
var jm = /* @__PURE__ */ C('<div class="wx-item svelte-b4dkf1"><i></i> </div>');
function Jm(n, e) {
  let t = S(e, "text", 3, "");
  var r = $(), a = G(r);
  R(
    a,
    () => e.menu,
    (i) => {
      var s = jm();
      s.__click = function(...c) {
        e.onclick?.apply(this, c);
      };
      var l = E(s), d = U(l);
      F(() => {
        we(l, `${e.icon || "wxi-empty"} ${(e.css || "") ?? ""} svelte-b4dkf1`), ee(d, ` ${t() ?? ""}`);
      }), g(i, s);
    },
    (i) => {
      Re(i, {
        get icon() {
          return e.icon;
        },
        get type() {
          return e.type;
        },
        get css() {
          return e.css;
        },
        get text() {
          return t();
        },
        get disabled() {
          return e.disabled;
        },
        get onclick() {
          return e.onclick;
        }
      });
    }
  ), g(n, r);
}
ge(["click"]);
var Zm = /* @__PURE__ */ C('<div class="wx-label svelte-agyr5c"><!></div>'), Qm = /* @__PURE__ */ C('<div class="wx-label svelte-agyr5c"> </div>');
function Xm(n, e) {
  ne(e, !0);
  var t = $(), r = G(t);
  R(
    r,
    () => e.children,
    (a) => {
      var i = Zm(), s = E(i);
      Ie(s, () => e.children), g(a, i);
    },
    (a) => {
      var i = Qm(), s = E(i);
      F(() => ee(s, e.value || e.text)), g(a, i);
    }
  ), g(n, t), re();
}
var $m = /* @__PURE__ */ C("<i></i>"), eg = /* @__PURE__ */ C('<div class="wx-item svelte-ng2v87"><!> </div>');
function tg(n, e) {
  var t = $(), r = G(t);
  R(
    r,
    () => e.menu,
    (a) => {
      var i = eg();
      i.__click = function(...d) {
        e.onclick?.apply(this, d);
      };
      var s = E(i);
      R(s, () => e.icon, (d) => {
        var c = $m();
        F(() => we(c, `${e.icon ?? ""} ${e.css ?? ""} svelte-ng2v87`)), g(d, c);
      });
      var l = U(s);
      F(() => ee(l, ` ${e.text ?? ""}`)), g(a, i);
    },
    (a) => {
      Re(a, {
        get icon() {
          return e.icon;
        },
        get type() {
          return e.type;
        },
        get css() {
          return e.css;
        },
        get title() {
          return e.text;
        },
        get disabled() {
          return e.disabled;
        },
        get onclick() {
          return e.onclick;
        }
      });
    }
  ), g(n, t);
}
ge(["click"]);
function ng(n, e, t) {
  e.onclick && e.onclick({ id: t() });
}
var rg = /* @__PURE__ */ C("<i></i>"), ag = /* @__PURE__ */ C("<div><!> </div>");
function ig(n, e) {
  ne(e, !0);
  let t = S(e, "id", 3, ""), r = S(e, "text", 3, ""), a = S(e, "css", 3, ""), i = S(e, "icon", 3, "");
  var s = ag();
  s.__click = [ng, e, t];
  var l = E(s);
  R(l, i, (c) => {
    var v = rg();
    F(() => we(v, `${i() ?? ""} svelte-g7c8cw`)), g(c, v);
  });
  var d = U(l);
  F(() => {
    we(s, `wx-label ${a() ?? ""} svelte-g7c8cw`), ee(d, ` ${r() ?? ""}`);
  }), g(n, s), re();
}
ge(["click"]);
Qt("button", Jm);
Qt("separator", ro);
Qt("spacer", ao);
Qt("label", Xm);
Qt("item", ig);
Qt("icon", tg);
function og(n, e) {
  ne(e, !0), e.items.forEach((t) => {
    t.api = e.api, t.type === "search" ? t.comp = xm : t.type === "undo" ? t.comp = Cm : t.type === "redo" ? t.comp = Em : t.type === "spacer" ? t.comp = "spacer" : t.type === "sort" ? t.comp = Im : t.type === "addColumn" ? t.comp = bm : t.type === "addRow" ? t.comp = ym : t.type === "template" && t.template ? t.comp = kr : t && (t.comp = kr, t.template = t.type);
  }), At(n, {
    words: { ...jn, ...Wn },
    optional: !0,
    children: (t, r) => {
      Wm(t, {
        get items() {
          return e.items;
        },
        get onchange() {
          return e.onchange;
        }
      });
    },
    $$slots: { default: !0 }
  }), re();
}
class _g {
  api;
  config;
  container;
  _toolbar;
  constructor(e, t) {
    this.container = typeof e == "string" ? document.querySelector(e) : e, this.config = t, this._init();
  }
  destructor() {
    Lr(this._toolbar), this._toolbar = this.api = null;
  }
  setConfig(e) {
    e && (this.config = { ...this.config, ...e }, this._init());
  }
  /** @version v1.5.7 */
  /** @version v2.0.0 api parameter is deprecated */
  setLocale(e, t) {
    const r = { locale: e };
    t && (r.api = t), this.setConfig(r);
  }
  _init() {
    this._toolbar && this.destructor();
    const e = /* @__PURE__ */ new Map([
      ["wx-i18n", Jt(this.config.locale)],
      [
        "wx-theme",
        $r(this.container, this.config.theme, "material")
      ]
    ]);
    this._toolbar = Tn(og, {
      target: this.container,
      props: this._configToProps(this.config),
      context: e,
      intro: !1
    });
  }
  _configToProps(e) {
    let t = [
      { type: "search" },
      { type: "spacer" },
      { type: "undo" },
      { type: "redo" },
      { type: "sort" },
      { type: "addColumn" },
      { type: "addRow" }
    ];
    return e.items && (t = this._normalizeItems(e.items)), {
      ...e,
      items: t
    };
  }
  _normalizeItems(e) {
    return e.map((t) => typeof t == "string" ? {
      type: t
    } : typeof t == "function" ? {
      type: "template",
      template: t
    } : "template" in t && !t.type ? {
      type: "template",
      template: t.template
    } : t);
  }
}
(/* @__PURE__ */ new Date()).valueOf();
function ar(n) {
  return typeof n == "string" && n.length === 20 && parseInt(n.substr(7)) > 1e12;
}
class sg {
  constructor() {
    this._nextHandler = null, this._handlers = {}, this._tag = /* @__PURE__ */ new WeakMap(), this.exec = this.exec.bind(this);
  }
  on(e, t, r) {
    let a = this._handlers[e];
    a ? r && r.intercept ? a.unshift(t) : a.push(t) : a = this._handlers[e] = [t], r && r.tag && this._tag.set(t, r.tag);
  }
  intercept(e, t, r) {
    this.on(e, t, { ...r, intercept: !0 });
  }
  detach(e) {
    for (const t in this._handlers) {
      const r = this._handlers[t];
      for (let a = r.length - 1; a >= 0; a--)
        this._tag.get(r[a]) === e && r.splice(a, 1);
    }
  }
  async exec(e, t) {
    const r = this._handlers[e];
    if (r)
      for (let a = 0; a < r.length; a++) {
        const i = r[a](t);
        if (i === !1 || i && i.then && await i === !1)
          return;
      }
    return this._nextHandler && await this._nextHandler.exec(e, t), t;
  }
  setNext(e) {
    return this._nextHandler = e;
  }
}
const yn = Symbol(), qa = 0, lg = 1, cg = 2;
class dg {
  constructor() {
    this.reset(!0);
  }
  reset(e = !1) {
    this._awaitAddingQueue = [], this._queue = {}, this._waitPull = {}, this._status = [], e && (this._idPool = {}, this._backId = []);
  }
  resolve(e, t) {
    const r = this._backId[t];
    if (typeof r > "u") return e;
    const a = r[e];
    return typeof a > "u" ? e : a;
  }
  getSync() {
    const e = this._awaitAddingQueue;
    if (!e.length) return qa;
    for (let t = 0; t < e.length; t++)
      if (!e[t].sent) return lg;
    return cg;
  }
  waitSync() {
    return new Promise((e) => {
      this.getSync() === qa ? e() : this._status.push(e);
    });
  }
  getId(e) {
    return this._idPool[e] || (ar(e) ? null : e);
  }
  waitId(e) {
    return new Promise((t) => {
      const r = this.getId(e);
      r !== null && t(r);
      const a = this._waitPull[e] || [];
      a.push(t), this._waitPull[e] = a;
    });
  }
  add(e, t, r) {
    return new Promise((a, i) => {
      if (r = { ...r, resolve: a, reject: i }, r.debounce) {
        const s = `${e}"/"${t.id}`, l = this._queue[s];
        l && (r.resolve = (d) => {
          l.resolve(d), a(d);
        }, r.reject = (d) => {
          l.reject(d), i();
        }, clearTimeout(l.timer)), this._queue[s] = r, r.timer = setTimeout(() => {
          this.tryExec(e, t, r);
        }, r.debounce);
        return;
      }
      this.tryExec(e, t, r);
    });
  }
  tryExec(e, t, r, a) {
    const i = this.exec(e, t, r, a);
    return i === null ? (a || this._awaitAddingQueue.push({ action: e, data: t, proc: r }), !1) : (i.then(
      (s) => {
        const l = s && s.id && s.id != t.id && ar(t.id);
        if (l && (this._idPool[t.id] = s.id, this._waitPull[t.id] && (this._waitPull[t.id].forEach((d) => d(s.id)), delete this._waitPull[t.id]), r.kind)) {
          let d = this._backId[r.kind];
          d || (d = this._backId[r.kind] = {}), d[s.id] = t.id;
        }
        t.response = s, r.resolve(!0), a && a(), l && this.execQueue();
      },
      (s) => {
        a && a(), r.reject(s);
      }
    ), !0);
  }
  exec(e, t, r, a) {
    const i = this.correctID(t, r.ignoreID ? t.id : null);
    if (i === yn)
      return null;
    let s;
    try {
      s = r.handler(i, e, t);
    } catch (l) {
      a(), r.reject(l);
    }
    return s;
  }
  correctID(e, t) {
    let r = null;
    for (const a in e) {
      const i = e[a];
      if (typeof i == "object") {
        const s = this.correctID(i, t);
        if (s !== i) {
          if (s === yn)
            return yn;
          r === null && (r = { ...e }), r[a] = s;
        }
      } else if (ar(i)) {
        const s = this._idPool[i];
        if (s)
          r === null && (r = { ...e }), r[a] = s;
        else if (!t)
          return yn;
      }
    }
    return r || e;
  }
  execQueue() {
    this._awaitAddingQueue.forEach((e) => {
      if (!e.sent) {
        const t = () => this._finishQueue(e);
        this.tryExec(e.action, e.data, e.proc, t) && (e.sent = !0);
      }
    });
  }
  _finishQueue(e) {
    if (this._awaitAddingQueue = this._awaitAddingQueue.filter((t) => t !== e), !this._awaitAddingQueue.length && this._status.length) {
      const t = [...this._status];
      this._status = [], t.forEach((r) => r());
    }
  }
}
class ug extends sg {
  constructor(e, t) {
    super(), this._customHeaders = {}, this._batchQueue = [], this._batchTimeout = null, this._url = e, this._batchUrl = t?.batchURL, this._queue = new dg();
    const r = this.getHandlers();
    for (const a in r)
      this.on(a, (i) => {
        if (!i.skipProvider)
          return this._queue.add(a, i, r[a]);
      });
  }
  getHandlers() {
    return {};
  }
  setHeaders(e) {
    this._customHeaders = e;
  }
  getQueue() {
    return this._queue;
  }
  async send(e, t, r, a = {}) {
    return this._batchUrl && t !== "GET" ? this.sendBatchRequest(e, t, r, a) : this.sendRequest(e, t, r, a);
  }
  async sendBatchRequest(e, t, r, a) {
    return new Promise((i) => {
      this._batchQueue.push({
        url: e,
        method: t,
        data: r,
        resolve: i
      }), this._batchTimeout && clearTimeout(this._batchTimeout), this._batchTimeout = setTimeout(async () => {
        const s = [...this._batchQueue];
        if (this._batchQueue = [], s.length > 1) {
          const l = s.map((c) => ({
            url: c.url,
            method: c.method,
            data: {
              ...c.data
            }
          })), d = await this.sendRequest(
            this._batchUrl,
            "POST",
            l
          );
          s.forEach((c, v) => c.resolve(d[v]));
        } else {
          const l = await this.sendRequest(
            e,
            t,
            r,
            a
          );
          i(l);
        }
      }, 10);
    });
  }
  toPayload(e) {
    return JSON.stringify(e);
  }
  async sendRequest(e, t, r, a = {}) {
    const i = {
      "Content-Type": "application/json",
      ...a,
      ...this._customHeaders
    }, s = {
      method: t,
      headers: i
    };
    r && (s.body = typeof r == "object" ? this.toPayload(r) : r);
    const l = this._url.charAt(-1) === "/" || e[0] === "/" ? "" : "/";
    return fetch(`${this._url}${l}${e || ""}`, s).then(
      (d) => d.json()
    );
  }
}
const Pt = 1, Sn = 2, In = 3, io = 4, vg = 5;
class wg extends ug {
  constructor(e) {
    super(e);
  }
  getHandlers() {
    return {
      "add-card": {
        ignoreID: !0,
        kind: Pt,
        handler: (e) => (e.card = this.prepareCard(e.card), this.send("cards", "POST", e))
      },
      "update-card": {
        debounce: 500,
        handler: (e) => (e.card = this.prepareCard(e.card), this.send(`cards/${e.id}`, "PUT", e))
      },
      "move-card": {
        handler: (e) => this.send(`cards/${e.id}/move`, "PUT", e)
      },
      "delete-card": {
        handler: (e) => this.send(`cards/${e.id}`, "DELETE")
      },
      "add-column": {
        ignoreID: !0,
        kind: In,
        handler: (e) => this.send("columns", "POST", e)
      },
      "update-column": {
        debounce: 500,
        handler: (e) => this.send(`columns/${e.id}`, "PUT", e)
      },
      "move-column": {
        handler: (e) => this.send(`columns/${e.id}/move`, "PUT", e)
      },
      "delete-column": {
        handler: (e) => this.send(`columns/${e.id}`, "DELETE")
      },
      "add-row": {
        ignoreID: !0,
        kind: Sn,
        handler: (e) => this.send("rows", "POST", e)
      },
      "update-row": {
        debounce: 500,
        handler: (e) => this.send(`rows/${e.id}`, "PUT", e)
      },
      "move-row": {
        handler: (e) => this.send(`rows/${e.id}/move`, "PUT", e)
      },
      "delete-row": {
        handler: (e) => this.send(`rows/${e.id}`, "DELETE")
      },
      "add-vote": {
        handler: (e) => this.send(`cards/${e.cardId}/vote`, "POST")
      },
      "delete-vote": {
        handler: (e) => this.send(`cards/${e.cardId}/vote`, "DELETE")
      },
      "add-comment": {
        ignoreID: !0,
        handler: (e) => this.send(
          `cards/${e.cardId}/comments`,
          "POST",
          e.comment
        )
      },
      "update-comment": {
        handler: (e) => this.send(
          `cards/${e.cardId}/comments/${e.id}`,
          "PUT",
          e.comment
        )
      },
      "delete-comment": {
        handler: (e) => this.send(`cards/${e.cardId}/comments/${e.id}`, "DELETE")
      },
      "add-link": {
        ignoreID: !0,
        kind: io,
        handler: (e) => this.send("links", "POST", e)
      },
      "delete-link": {
        handler: (e) => this.send(`links/${e.id}`, "DELETE")
      }
    };
  }
  getCards() {
    return this.send("cards", "GET").then(this.parseCards);
  }
  getColumns() {
    return this.send("columns", "GET");
  }
  getRows() {
    return this.send("rows", "GET");
  }
  getUsers() {
    return this.send("users", "GET");
  }
  getLinks() {
    return this.send("links", "GET");
  }
  getIDResolver() {
    return this.getQueue().resolve.bind(this.getQueue());
  }
  parseCards(e) {
    return e.forEach((t) => (t.end_date && (t.end_date = new Date(t.end_date)), t.start_date && (t.start_date = new Date(t.start_date)), t)), e;
  }
  prepareCard(e) {
    return e ? {
      ...e,
      users: e.users || null
    } : null;
  }
}
function xg(n, e) {
  function t(f) {
    return "id" in f && (f.id = e(f.id, Pt)), "column" in f && (f.column = e(f.column, In)), "row" in f && (f.row = e(f.row, Sn)), f;
  }
  function r(f) {
    return "id" in f && (f.id = e(f.id, Sn)), f;
  }
  function a(f) {
    return "id" in f && (f.id = e(f.id, In)), f;
  }
  function i(f) {
    return "id" in f && (f.id = e(f.id, io)), "source" in f && (f.source = e(f.source, Pt)), "target" in f && (f.target = e(f.target, Pt)), f;
  }
  function s(f) {
    return "id" in f && (f.id = e(f.id, vg)), "cardId" in f && (f.cardId = e(f.cardId, Pt)), f;
  }
  function l(f) {
    return f.cardId = e(f.cardId, Pt), f;
  }
  function d(f) {
    const m = t(f.card);
    switch (m.start_date = m.start_date ? new Date(m.start_date) : null, m.end_date = m.end_date ? new Date(m.end_date) : null, f.type) {
      case "add-card":
        n.exec(f.type, {
          skipProvider: !0,
          card: m,
          select: !1
        });
        break;
      case "update-card":
        n.exec("update-card", {
          skipProvider: !0,
          id: m.id,
          card: m
        });
        break;
      case "delete-card":
        n.exec("delete-card", {
          skipProvider: !0,
          id: m.id
        });
        break;
      case "move-card": {
        n.exec("move-card", {
          skipProvider: !0,
          id: m.id,
          rowId: m.row,
          columnId: m.column,
          before: e(f.before, Pt)
        });
        break;
      }
    }
  }
  function c(f) {
    const m = a(f.column);
    switch (f.type) {
      case "add-column":
        n.exec("add-column", {
          skipProvider: !0,
          column: m
        });
        break;
      case "delete-column":
        n.exec("delete-column", {
          skipProvider: !0,
          id: m.id
        });
        break;
      case "update-column":
        n.exec("update-column", {
          skipProvider: !0,
          id: m.id,
          column: m
        });
        break;
      case "move-column":
        n.exec("move-column", {
          skipProvider: !0,
          id: m.id,
          before: e(f.before, In)
        });
    }
  }
  function v(f) {
    const m = r(f.row);
    switch (f.type) {
      case "add-row":
        n.exec("add-row", {
          skipProvider: !0,
          row: m
        });
        break;
      case "delete-row":
        n.exec("delete-row", {
          skipProvider: !0,
          id: m.id
        });
        break;
      case "update-row":
        n.exec("update-row", {
          skipProvider: !0,
          id: m.id,
          row: m
        });
        break;
      case "move-row":
        n.exec("move-row", {
          skipProvider: !0,
          id: m.id,
          before: e(f.before, Sn)
        });
    }
  }
  function u(f) {
    const m = i(f.link);
    switch (f.type) {
      case "add-link":
        n.exec("add-link", {
          skipProvider: !0,
          id: m.id,
          link: m
        });
        break;
      case "delete-link":
        n.exec("delete-link", {
          skipProvider: !0,
          id: m.id
        });
    }
  }
  function h(f) {
    const m = s(f.comment);
    switch (f.type) {
      case "add-comment":
        n.exec("add-comment", {
          skipProvider: !0,
          id: m.id,
          cardId: m.cardId,
          comment: m
        });
        break;
      case "update-comment":
        n.exec("update-comment", {
          skipProvider: !0,
          id: m.id,
          cardId: m.cardId,
          comment: m
        });
        break;
      case "delete-comment":
        n.exec("delete-comment", {
          skipProvider: !0,
          id: m.id,
          cardId: m.cardId
        });
    }
  }
  function _(f) {
    const m = l(f.vote);
    switch (f.type) {
      case "add-vote":
        n.exec("add-vote", {
          skipProvider: !0,
          cardId: m.cardId,
          userId: m.userId
        });
        break;
      case "delete-vote":
        n.exec("delete-vote", {
          skipProvider: !0,
          cardId: m.cardId,
          userId: m.userId
        });
    }
  }
  return {
    cards: d,
    columns: c,
    rows: v,
    links: u,
    comments: h,
    votes: _
  };
}
class fg {
  constructor(e) {
    const { url: t, token: r } = e;
    this._url = t, this._token = r, this._mode = 1, this._seed = 1, this._queue = [], this.data = {}, this.api = {}, this._events = {};
  }
  headers() {
    return { Accept: "application/json", "Content-Type": "application/json", "Remote-Token": this._token };
  }
  fetch(e, t) {
    const r = { credentials: "include", headers: this.headers() };
    return t && (r.method = "POST", r.body = t), fetch(e, r).then((a) => a.json());
  }
  load(e) {
    return e && (this._url = e), this.fetch(this._url).then((t) => this.parse(t));
  }
  parse(e) {
    const { key: t, websocket: r } = e;
    t && (this._token = e.key);
    for (const a in e.data) this.data[a] = e.data[a];
    for (const a in e.api) {
      const i = this.api[a] = {}, s = e.api[a];
      for (const l in s) i[l] = this._wrapper(a + "." + l);
    }
    return r && this.connect(), this;
  }
  connect() {
    const e = this._socket;
    e && (this._socket = null, e.onclose = function() {
    }, e.close()), this._mode = 2, this._socket = function(t, r, a, i) {
      let s = r;
      s[0] === "/" && (s = document.location.protocol + "//" + document.location.host + r), s = s.replace(/^http(s|):/, "ws$1:");
      const l = s.indexOf("?") != -1 ? "&" : "?";
      s = `${s}${l}token=${a}&ws=1`;
      const d = new WebSocket(s);
      return d.onclose = () => setTimeout(() => t.connect(), 2e3), d.onmessage = (c) => {
        const v = JSON.parse(c.data);
        switch (v.action) {
          case "result":
            t.result(v.body, []);
            break;
          case "event":
            t.fire(v.body.name, v.body.value);
            break;
          case "start":
            i();
            break;
          default:
            t.onError(v.data);
        }
      }, d;
    }(this, this._url, this._token, () => (this._mode = 3, this._send(), this._resubscribe(), this));
  }
  _wrapper(e) {
    return function() {
      const t = [].slice.call(arguments);
      let r = null;
      const a = new Promise((i, s) => {
        r = { data: { id: this._uid(), name: e, args: t }, status: 1, resolve: i, reject: s }, this._queue.push(r);
      });
      return this.onCall(r, a), this._mode === 3 ? this._send(r) : setTimeout(() => this._send(), 1), a;
    }.bind(this);
  }
  _uid() {
    return (this._seed++).toString();
  }
  _send(e) {
    if (this._mode == 2) return void setTimeout(() => this._send(), 100);
    const t = e ? [e] : this._queue.filter((a) => a.status === 1);
    if (!t.length) return;
    const r = t.map((a) => (a.status = 2, a.data));
    this._mode !== 3 ? this.fetch(this._url, JSON.stringify(r)).catch((a) => this.onError(a)).then((a) => this.result(a, r)) : this._socket.send(JSON.stringify({ action: "call", body: r }));
  }
  result(e, t) {
    const r = {};
    if (e) for (let a = 0; a < e.length; a++) r[e[a].id] = e[a];
    else for (let a = 0; a < t.length; a++) r[t[a].id] = { id: t[a].id, error: "Network Error", data: null };
    for (let a = this._queue.length - 1; a >= 0; a--) {
      const i = this._queue[a], s = r[i.data.id];
      s && (this.onResponse(i, s), s.error ? i.reject(s.error) : i.resolve(s.data), this._queue.splice(a, 1));
    }
  }
  on(e, t) {
    const r = this._uid();
    let a = this._events[e];
    const i = !!a;
    return i || (a = this._events[e] = []), a.push({ id: r, handler: t }), i || this._mode != 3 || this._socket.send(JSON.stringify({ action: "subscribe", name: e })), { name: e, id: r };
  }
  _resubscribe() {
    if (this._mode == 3) for (const e in this._events) this._socket.send(JSON.stringify({ action: "subscribe", name: e }));
  }
  detach(e) {
    if (!e) {
      if (this._mode == 3) for (const i in this._events) this._socket.send(JSON.stringify({ action: "unsubscribe", key: i }));
      return void (this._events = {});
    }
    const { id: t, name: r } = e, a = this._events[r];
    if (a) {
      const i = a.filter((s) => s.id != t);
      i.length ? this._events[r] = i : (delete this._events[r], this._mode == 3 && this._socket.send(JSON.stringify({ action: "unsubscribe", name: r })));
    }
  }
  fire(e, t) {
    const r = this._events[e];
    if (r) for (let a = 0; a < r.length; a++) r[a].handler(t);
  }
  onError(e) {
    return null;
  }
  onCall(e, t) {
  }
  onResponse(e, t) {
  }
}
class yg {
  _remote;
  _ready;
  constructor(e, t) {
    const r = new fg({
      url: e,
      token: t
    });
    r.fetch = function(a, i) {
      const s = {
        headers: this.headers()
      };
      return i && (s.method = "POST", s.body = i), fetch(a, s).then((l) => l.json());
    }, this._ready = r.load().then((a) => this._remote = a);
  }
  ready() {
    return this._ready;
  }
  on(e, t) {
    this.ready().then((r) => {
      if (typeof e == "string") r.on(e, t);
      else
        for (const a in e)
          r.on(a, e[a]);
    });
  }
}
const bg = {
  en: { ...jn, ...Wn },
  de: { ...Fs, ...hs },
  cn: { ...As, ...ms },
  es: { ...Hs, ...gs },
  fr: { ...Vs, ..._s },
  it: { ...Zs, ...ws },
  jp: { ...tl, ...xs },
  pt: { ...ol, ...ys },
  ru: { ...ul, ...bs }
};
export {
  gg as Editor,
  hg as Kanban,
  yg as RemoteEvents,
  wg as RestDataProvider,
  _g as Toolbar,
  kn as defaultCardShape,
  Wr as defaultEditorConfig,
  Yi as defaultEditorShape,
  Dm as enableSalesForce,
  fu as getDefaultCardMenuItems,
  hu as getDefaultColumnMenuItems,
  mu as getDefaultRowMenuItems,
  xg as kanbanUpdates,
  bg as locales,
  Fn as locateID,
  qr as salesForceEnv,
  Br as tempID,
  mg as template
};
