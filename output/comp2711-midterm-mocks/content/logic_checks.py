#!/usr/bin/env python3
"""Exact independent checks for the logic subject, not a proof of infinite claims.
Run from the output root or by tools/check_math.py. General proofs are audited
in audit/logic-checks.md. Assertions use semantic models rather than JSON eval.
"""
from fractions import Fraction
from itertools import product, permutations
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]
COUNT = 0

def check(value, label):
    global COUNT
    COUNT += 1
    assert value, label


def imp(a, b):
    return not a or b


def iff(a, b):
    return a == b


def xor(a, b):
    return a != b


def alltrue(premises, conclusion):
    return not all(premises) or conclusion


# All propositional formulas and all argument premises are checked on every row.
for p, q, r, s, t, u, v in product((False, True), repeat=7):
    check(not ((p or q) and (p or not q)) == (not p), '01.1.a')
    check(alltrue([p or q, not p or r, imp(q, s), imp(r, s), imp(s, t)], t), '01.1.c')
    check(iff(xor(p, q), not iff(p, q)), '02.1.a')
    check(imp(p, q) == imp(not q, not p), '02.1.b contrapositive')
    check(imp(q, p) == imp(not p, not q), '02.1.b converse/inverse')
    check((imp(p, q) and imp(p, r)) == imp(p, q and r), '03.1.a')
    check(imp(p and q, p), '04.1.a.i')
    check(not (imp(p, q) and p and not q), '04.1.a.ii')
    check(alltrue([not t and u, imp(r, t), imp(not r, s), imp(s, v)], v and u), '04.1.c')
    check(not iff(p, q) == ((p or q) and not (p and q)), '05.1.a')
    check(((p or (p and q)) and (q or not q) or (r and False)) == p, '06.1.a')
    check(xor(imp(p, q), imp(q, p)) == xor(p, q), '07.1.a')
    check(alltrue([p and q, imp(p or r, s), imp(q, t)], s and t), '07.1.c')
    check((iff(p, q) and p) == (p and q), '08.1.a')
    check(imp(imp(p, q), p) == p, '09.1.a')
    check(alltrue([imp(p, q), imp(q, r), not r or s, p or t, not t], s), '09.1.c')
    check(imp(p, q) or imp(q, p), '10.1.a.i')
    check(not (iff(p, q) and xor(p, q)), '10.1.a.ii')
    check((imp(p, q) and not q) == (not p and not q), '10.1.a.iii')
check(imp(False, True) and True and not False, '01.1.b separating row')
check(imp(not False or (False and True), False) is False, '03.1.b parsed evaluation')
check(iff(True, not False) and not iff(True, not True), '04.1.a.iii contingency')
check(imp(False, True), '05.1.b false-premise implication')
check(all([imp(False, True), imp(False, True), True]) and not (False or False), '06.1.b counterassignment')
check(imp(False, True) and not imp(True, False) and not imp(True, False), '07.1.b separating row')
# Solve both puzzles independently by exhaustive consistent truth assignments.
models04 = [(p,q) for p,q in product((False,True),repeat=2) if iff(p,q) and iff(q,xor(p,q))]
models09 = [(p,q) for p,q in product((False,True),repeat=2) if iff(p,not q) and iff(q,p or q)]
check(models04 == [(False, False)], '04.1.b unique puzzle model')
check(models09 == [(False, True)], '09.1.b unique puzzle model')

# Exhaust all unary interpretations on domain sizes 0, 1, 2 and 3.
for n in range(4):
    D = range(n)
    interpretations = list(product((False, True), repeat=n))
    for P,Q,R,S in product(interpretations, repeat=4):
        check(all(P[i] and Q[i] for i in D) == (all(P) and all(Q)), '05.2.c.ii')
        check(any(P[i] or Q[i] for i in D) == (any(P) or any(Q)), '05.2.c.i')
        check(imp(all(P) or all(Q), all(P[i] or Q[i] for i in D)), '02.2.b forward')
        check(imp(any(P[i] and Q[i] for i in D), any(P) and any(Q)), '03.2.c reverse')
        check(alltrue([all(imp(P[i],Q[i]) for i in D), all(imp(Q[i],not R[i]) for i in D), any(P[i] and S[i] for i in D)], any(S[i] and not R[i] for i in D)), '01.2.c')
        check(alltrue([all(imp(P[i],Q[i]) for i in D), all(imp(Q[i],R[i]) for i in D)], all(imp(P[i],R[i]) for i in D)), '02.2.c')
        check(alltrue([all(imp(P[i],Q[i]) for i in D), any(not Q[i] for i in D)], any(not P[i] for i in D)), '07.2.c')
        check(imp(all(P), all(P[i] or Q[i] for i in D)), '08.2.c valid conclusion')
        check(alltrue([all(imp(P[i],Q[i]) for i in D), all(imp(R[i],not Q[i]) for i in D), any(R[i] and S[i] for i in D)], any(S[i] and not P[i] for i in D)), '10.2.c')
        if n:
            front = any(imp(P[i], Q[j]) for i in D for j in D)
            check(imp(all(P), any(Q)) == front, '04.2.b correct polarity')
            left = any(all(P[i] or Q[j] for j in D) for i in D)
            right = all(any(P[i] or Q[j] for i in D) for j in D)
            check(left == right, '06.2.b special swap')
            for A in (False,True):
                check(all(imp(P[i],A) for i in D) == imp(any(P),A), '10.2.b polarity')
# Explicit failed distributions/order/witness countermodels, including empty domain.
P,Q=(True,False),(False,True)
check(all(P[i] or Q[i] for i in range(2)) and not(all(P) or all(Q)), '02.2.b countermodel')
check(any(P) and any(Q) and not any(P[i] and Q[i] for i in range(2)), '03.2.c countermodel')
check(imp(all(P), any((False,False))) and not all(any(imp(P[i],False) for j in range(2)) for i in range(2)), '04.2.b countermodel')
check(any(P) and not all(P), '08.2.c invalid generalization')
check(all(any(x==y for y in range(2)) for x in range(2)) and not any(all(x==y for x in range(2)) for y in range(2)), '09.2.c order countermodel')
check(all([]) and not any([]), '07.2.a empty quantifiers')
check(all([]) != (False and all([])), '10.2.b nonempty safeguard')
check([x*x==1 for x in (-1,0,1)] == [True,False,True], '07.2.a finite expansion')
check(not any(x<0 and x*x==x for x in range(-20,21)) and imp(2<0,2*2==2), '08.2.a incorrect existential implication')

# 06.2.a(ii): "know each other" requires BOTH directed knowledge edges.
# Independent separating model requested by the reviewer: colleagues form a
# complete symmetric irreflexive relation; knowledge is a directed 3-cycle.
staff=range(3)
colleagues={(x,y) for x in staff for y in staff if x!=y}
cycle={(0,1),(1,2),(2,0)}
check(all((y,x) in colleagues for x,y in colleagues),'06.2.a symmetric colleagues')
check(all((x,x) not in colleagues for x in staff),'06.2.a irreflexive colleagues')
old=[all(imp((x,y) in colleagues and (x,z) in colleagues and y!=z,
             (y,z) not in cycle) for y in staff for z in staff) for x in staff]
mutual=[all(imp((x,y) in colleagues and (x,z) in colleagues and y!=z,
                (y,z) not in cycle or (z,y) not in cycle)
            for y in staff for z in staff) for x in staff]
check(old==[False,False,False],'06.2.a old formula fails every witness')
check(mutual==[True,True,True],'06.2.a mutual formula holds every witness')
check(not any(old) and any(mutual),'06.2.a existential formulas separated')
check(not any((y,z) in cycle and (z,y) in cycle for y in staff for z in staff if y!=z),
      '06.2.a no mutual knowledge in directed cycle')
# Compare the repaired ordered-quantifier formula against an independent
# unordered-pair English definition on every directed knowledge relation.
ordered_pairs=list(product(staff,repeat=2))
for bits in product((False,True),repeat=9):
    K={edge for edge,bit in zip(ordered_pairs,bits) if bit}
    intended=[];formula=[]
    for x in staff:
        others=[y for y in staff if (x,y) in colleagues]
        unordered=[(y,z) for y in others for z in others if y<z]
        intended.append(not any((y,z) in K and (z,y) in K for y,z in unordered))
        formula.append(all(imp((x,y) in colleagues and (x,z) in colleagues and y!=z,
                               (y,z) not in K or (z,y) not in K)
                           for y in staff for z in staff))
        check(intended[-1]==formula[-1],'06.2.a directed mutuality per witness')
    check(any(intended)==any(formula),'06.2.a directed mutuality existential scope')

# Exhaust binary/ternary predicate interpretations over a two-element domain.
D=range(2)
U=list(product((False,True),repeat=2))
B=list(product((False,True),repeat=4))
T=list(product((False,True),repeat=8))
def binary(a,x,y):return a[2*x+y]
def ternary(a,x,y,z):return a[4*x+2*y+z]
for A,Bu,C in product(U,U,T):
    original=all(imp(A[x],any(Bu[y] and all(ternary(C,x,y,z) for z in D) for y in D)) for x in D)
    negative=any(A[x] and all(not Bu[y] or any(not ternary(C,x,y,z) for z in D) for y in D) for x in D)
    check(negative == (not original), '01.2.b nested negation')
    original=any(A[x] and all(Bu[y] or any(ternary(C,x,y,z) for z in D) for y in D) for x in D)
    negative=all(not A[x] or any(not Bu[y] and all(not ternary(C,x,y,z) for z in D) for y in D) for x in D)
    check(negative == (not original), '09.2.b nested negation')
for P,Q,R in product(B,U,B):
    original=any(all(any(imp(binary(P,x,y) and Q[z],binary(R,y,z)) for z in D) for y in D) for x in D)
    negative=all(any(all(binary(P,x,y) and Q[z] and not binary(R,y,z) for z in D) for y in D) for x in D)
    check(negative == (not original), '03.2.b nested negation')
for P,Q,R in product(B,U,T):
    original=all(any(all((binary(P,x,y) or Q[z]) and ternary(R,x,y,z) for z in D) for y in D) for x in D)
    negative=any(all(any((not binary(P,x,y) and not Q[z]) or not ternary(R,x,y,z) for z in D) for y in D) for x in D)
    check(negative == (not original), '07.2.b nested negation')
for P,Q,R in product(B,B,B):
    original=all(any(binary(P,x,y) and all(imp(binary(Q,y,z),binary(R,x,z)) for z in D) for y in D) for x in D)
    negative=any(all(not binary(P,x,y) or any(binary(Q,y,z) and not binary(R,x,z) for z in D) for y in D) for x in D)
    check(negative == (not original), '08.2.b nested negation')
for P in T:
    # 05.2.b actual real restrictions evaluated on the finite test domain {0,1}.
    original=all(imp(x>0,any(y>0 and all(imp(z>y,ternary(P,x,y,z)) for z in D) for y in D)) for x in D)
    negative=any(x>0 and all(y<=0 or any(z>y and not ternary(P,x,y,z) for z in D) for y in D) for x in D)
    check(negative == (not original), '05.2.b restricted negation')
for R,S in product(B,B):
    check(alltrue([all(imp(binary(R,x,y),binary(S,x,y)) for x in D for y in D), any(all(binary(R,x,y) for y in D) for x in D)], any(all(binary(S,x,y) for y in D) for x in D)), '04.2.c relational inference')
    check(imp(all(any(binary(R,x,y) for y in D) for x in D), any(any(binary(R,x,y) for x in D) for y in D)), '09.2.c valid conclusion')
    # Quantifier order in uniqueness formulas: every x has exactly one mentor
    unique=all(sum(binary(R,x,y) for y in D)==1 for x in D)
    formula=all(any(binary(R,x,y) and all(imp(binary(R,x,z),z==y) for z in D) for y in D) for x in D)
    check(unique==formula,'02.2.a.i uniqueness translation')
    universal_mentors=[y for y in D if all(binary(R,x,y) for x in D)]
    formula=any(all(binary(R,x,y) for x in D) and all(imp(all(binary(R,x,z) for x in D),z==y) for z in D) for y in D)
    check((len(universal_mentors)==1)==formula,'02.2.a.ii unique universal mentor')
for P,Q in product(U,U):
    for R in B:
        check(alltrue([all(imp(P[x],Q[x]) for x in D),all(imp(Q[x],any(binary(R,x,y) for y in D)) for x in D)],all(imp(P[x],any(binary(R,x,y) for y in D)) for x in D)),'06.2.c existential consequent')

# Arithmetic/finite-function checks support separate symbolic proofs.
ints=range(-100,101)
for n in ints:
    check((n%2==1)==((n+1)%2==0)==(n*n%2==1),'08.1.c parity cycle')
    check(n%2!=1 or (n*(n+2))%2==1,'10.1.c.ii')
    check(((2*n+1)-1)//2==n,'01.3.b odd inverse')
    check(1-n != -n-1,'02.3.b composition distinction')
    for m in range(-11,12,2):
        check(((n+m)%2==0)==(n%2==1),'05.1.c fixed odd m')
for h,k in product(range(-12,13),repeat=2):
    check((h*h)*(k*k)==(h*k)**2,'03.1.c.ii perfect-square witness')
rationals={Fraction(a,b) for a in range(-5,6) for b in range(1,6)}
for u,v in product(rationals,repeat=2):
    check(u*v == Fraction(u.numerator*v.numerator,u.denominator*v.denominator),'03.1.c.i cross-product formula')
    if v:
        check((u/v)*v==u,'10.1.c.i nonzero quotient')
for a,b,c in product([Fraction(i,4) for i in range(1,13)],repeat=3):
    check(not(a*b<=c*c) or a<=c or b<=c,'02.1.c positive product bound')
    check(not(a>c and b>c) or a*b>c*c,'02.1.c contrapositive')
check(1*1==(-1)*(-1) and 1!=-1,'03.3.a collision')
f={0:'a',1:'b',2:'b',3:'a'}
check(set(f.values())=={'a','b'} and {x for x,y in f.items() if y=='b'}=={1,2},'06.3.a function data')
check(set(f.values())!={'a','b','c'},'06.3.a codomain miss')
h=lambda n: n//2 if n%2==0 else -(n+1)//2
check({h(n) for n in range(201)}==set(range(-100,101)),'10.3.b finite enumeration window')
check(len({h(n) for n in range(201)})==201,'10.3.b no collisions')
for z in ints:
    preimage=2*z if z>=0 else -2*z-1
    check(preimage>=0 and h(preimage)==z,'10.3.b preimage formula')
for n in range(1,4):
    D=range(n)
    maps=list(product(D,repeat=n))
    for f,g in product(maps,repeat=2):
        composite=tuple(g[f[i]] for i in D)
        check(not(len(set(f))==n and len(set(g))==n) or len(set(composite))==n,'07.3.b composition injection')
        check(len(set(composite))!=n or len(set(f))==n,'07.3.c.vi left factor')
    for f,g in product(permutations(D),repeat=2):
        fi={f[i]:i for i in D};gi={g[i]:i for i in D}
        inverse=lambda c:fi[gi[c]]
        check(all(inverse(g[f[i]])==i for i in D),'09.3.b left inverse')
        check(all(g[f[inverse(c)]]==c for c in D),'09.3.b right inverse')
f0={0:0}; g0={0:0,1:0}
check(len({g0[f0[x]] for x in f0})==len(f0) and len(set(g0.values()))<len(g0),'07.3.b g need not inject')
for x in rationals:
    if 0<=x<=1:
        check(0<(x+1)/3<1,'04.3.b reverse injection endpoints')

# Exhaust finite-set laws, all subsets of a four-element universe.
def powerset(S):
    values=tuple(S)
    return {frozenset(values[i] for i,b in enumerate(bits) if b) for bits in product((False,True),repeat=len(values))}
U=frozenset(range(4));subsets=powerset(U)
for A,B,C in product(subsets,repeat=3):
    check((A-B)&C == A&(C-B),'01.3.a')
    check(A|(B-A)==A|B,'05.3.a')
    check(U-(A&B)==(U-A)|(U-B),'09.3.a')
    check(A&(A|B)==A,'04.3.c.i absorption')
    check(len(A|B)==len(A)+len(B)-len(A&B),'union size identity')
    check(powerset(A&B)==powerset(A)&powerset(B),'07.3.c.ii')
    check(not(A<=B) or A-B==frozenset(),'04.3.c.v')
    check(bool(A&B) or A-B==A,'06.3.c.iv')
    check(not(A<B) or len(A)<len(B),'10.3.c.v finite proper subset')
empty=frozenset()
check(powerset(empty)=={empty},'08.3.a first power set')
check(powerset(powerset(empty))=={empty,frozenset({empty})},'08.3.a iterated power set')
check(len(powerset({empty,frozenset({1})}))==4,'02.3.a nested set')
check(empty in {empty} and not({empty}<=set()),'01.3.c.i/ii')
check(len(powerset(range(5)))==32,'09.3.c.ii')
check((U-({0}|set())) != (U-{0})|(U-set()),'04.3.c.ii counterexample')
check(powerset({0,1}) != powerset({0})|powerset({1}),'07.3.c.i counterexample')
A=[{i,i+1} for i in range(3)]
check(set.union(*A)=={0,1,2,3} and set.intersection(*A)==set(),'07.3.a indexed operations')
check({0,2,4}-{2,3,4}=={0} and set(range(6))-({0,2,4}|{2,3,4})=={1,5},'10.3.a rosters')
# Exhaust every finite candidate map S -> P(S) for |S| <= 3, including S empty.
for n in range(4):
    S=set(range(n));Ps=list(powerset(S))
    for images in product(Ps,repeat=n):
        diagonal=frozenset(i for i in S if i not in images[i])
        check(diagonal in Ps and diagonal not in images,'03.3.b finite Cantor diagonal')
        check(len(set(images))<len(Ps),'03.3.b cannot be onto')
# Finite prefixes of the decimal construction differ at the designated coordinate.
for digits in product(range(10),repeat=4):
    new=[5 if digit==4 else 4 for digit in digits]
    check(all(a!=b for a,b in zip(new,digits)) and set(new)<={4,5},'08.3.b diagonal digit rule')

# Structural, provenance and reference checks, restricted to this owned subject.
data=json.loads((ROOT/'content/logic.json').read_text())
check([p['number'] for p in data['papers']]==list(range(1,11)),'ten papers')
coverage={e['id']:e for e in data['coverage']}
check(len(coverage)==42,'42 distinct concept IDs')
actual={c:set() for c in coverage}
sources=set()
for paper in data['papers']:
    check([p['number'] for p in paper['problems']]==[1,2,3],'subject slots')
    check([p['points'] for p in paper['problems']]==[10,13,12],'subject point anchors')
    for problem in paper['problems']:
        check(sum(x['points'] for x in problem['parts'])==problem['points'],'part marks')
        check([x['points'] for x in problem['parts']]=={1:[3,2,5],2:[4,4,5],3:[2,3,7]}[problem['number']],'original part density')
        sources.update(problem['sources'])
        for part in problem['parts']:
            ref=f"{paper['number']:02}.{problem['number']}.{part['label']}"
            for c in part['concepts']:
                check(c in coverage,'defined concept')
                actual[c].add(ref)
            for field in ('question','solution','rubric'):
                check(bool(part[field].strip()),'nonempty content')
                check('``' not in part[field] and "''" not in part[field],'quote typography')
                check(part[field].count('$')%2==0,'paired inline math')
        if problem['number']==3:
            c=problem['parts'][2]
            check(c['question'].count(r'\item ')==7 and c['solution'].count(r'\item ')==7,'seven T/F items')
for c,e in coverage.items():
    check(set(e['assessed_at'])==actual[c] and bool(actual[c]),'exact coverage references')
    n=int(e['lecture'][1:3]);limit={1:36,2:49,3:43,4:43}[n]
    check(all(1<=page<=limit for page in e['pages']),'physical source pages')
kb=Path('/Users/eason/Documents/ChatGPT/COMP2711/knowledge_base/04-Questions')
for sid in sources:
    files=list(kb.glob(sid+' - *.md'))
    check(len(files)==1,'current source note '+sid)
    text=files[0].read_text()
    for key,value in [('verification_status','verified'),('syllabus_status','in-scope'),('exam_type','midterm')]:
        check(bool(re.search(r'^'+key+r':\s*"?'+value+r'"?\s*$',text,re.M)),sid+' '+key)
# Independent classification answer keys; infinite/terminology claims hand-audited.
keys=['TFTTFTF','TFTTFTT','FTFFT TF'.replace(' ',''),'TFTFTTT','TFTFTFT','FTFTTFT','FTTTFTF','TTTTFTF','TFTTFTF','FTTTTFF']
for paper,key in zip(data['papers'],keys):
    sol=paper['problems'][2]['parts'][2]['solution']
    actualkey=''.join(re.findall(r'\\textbf\{([TF])\}',sol))
    check(actualkey==key,f"{paper['number']:02}.3.c independently reviewed key")
print(f'PASS: {COUNT:,} exact assertions; complete propositional tables, finite quantifier/predicate models, finite sets/functions, arithmetic witnesses, 30-problem schema, 42-cluster references, current verified MID sources and 70 classification keys.')
print('Infinite statements and general proof dependencies: see audit/logic-checks.md; finite testing alone does not certify them.')
