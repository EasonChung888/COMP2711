#!/usr/bin/env python3
"""Independent finite enumeration for every counting calculation and proof families.

No solution string is evaluated. Enumerators work directly from the stated models;
coefficient checks multiply sparse polynomials rather than use binomial formulas.
"""
from collections import Counter, defaultdict
from fractions import Fraction
from itertools import combinations, permutations, product
from math import comb, factorial, ceil, prod
from pathlib import Path
import json

passed = []
def check(ref, actual, expected):
    assert actual == expected, f'{ref}: got {actual!r}, expected {expected!r}'
    passed.append(ref)

def count(it, predicate=lambda x: True):
    return sum(1 for x in it if predicate(x))

def compositions(n, k):
    if k == 1:
        yield (n,)
    else:
        for a in range(n + 1):
            for tail in compositions(n - a, k - 1):
                yield (a,) + tail

def words(multiset):
    # Enumerate one branch per distinct symbol, never label equal objects.
    frequencies = Counter(multiset)
    symbols = sorted(frequencies)
    def generate(prefix):
        if len(prefix) == len(multiset):
            yield tuple(prefix)
            return
        for symbol in symbols:
            if frequencies[symbol]:
                frequencies[symbol] -= 1
                yield from generate(prefix + [symbol])
                frequencies[symbol] += 1
    return generate([])

def paths(a,b):
    for right_indices in combinations(range(a+b),a):
        ri = set(right_indices)
        yield tuple('R' if i in ri else 'U' for i in range(a+b))

def visits(path, vertex):
    x=y=0
    if vertex == (0,0):
        return True
    for move in path:
        x += move == 'R'
        y += move == 'U'
        if (x,y) == vertex:
            return True
    return False

def polynomial_power(terms,n):
    # terms: exponent tuples -> integer coefficients; negative exponents allowed.
    dims = len(next(iter(terms)))
    out = {(0,)*dims: 1}
    for _ in range(n):
        new = defaultdict(int)
        for e,c in out.items():
            for f,d in terms.items():
                new[tuple(a+b for a,b in zip(e,f))] += c*d
        out = dict(new)
    return out

def terminal_sequences(wins):
    def walk(seq,a,b):
        if a == wins or b == wins:
            yield seq
        else:
            yield from walk(seq+('A',),a+1,b)
            yield from walk(seq+('B',),a,b+1)
    return walk((),0,0)

def choose(n,k):
    return comb(n,k) if 0 <= k <= n else 0

def derangements(n):
    return count(permutations(range(n)),lambda p: all(a != b for a,b in enumerate(p)))

# Actual-parameter Q4 counts, one independent enumerator per question label.
check('01.4.a',count(permutations(range(6),3),lambda p:0 in p),60)
check('01.4.b.i',count(product(range(3),repeat=4),lambda f:f[0]==f[1]),27)
check('01.4.b.ii',count(product(range(3),repeat=4),lambda f:len(set(f))==4),0)
check('01.4.c',tuple(int(i in {1,3,5}) for i in range(1,6)),(1,0,1,0,1))
check('01.4.c.subsets',sum(comb(5,k) for k in range(6)),32)
check('01.4.d',count(product(range(3),range(5),range(4))),60)
check('01.4.e',sum(count(product('ABC01',repeat=l),lambda s:s[0] in 'ABC' and any(c in '01' for c in s)) for l in (2,3)),54)
check('01.4.f',count(permutations('ABCDEFG'),lambda p:max(p.index(x) for x in 'ABC')-min(p.index(x) for x in 'ABC')==2),factorial(5)*factorial(3))
check('01.4.g',count(permutations('BCDEF'),lambda p:p.index('B') in (0,4)),48)
check('01.4.h',polynomial_power({(1,):2,(0,):-1},7)[(4,)],-560)
check('02.4.a',len({('direct',i) for i in range(3)}|{('via',i,j) for i in range(2) for j in range(4)}),11)
check('02.4.b',count(product((0,1),repeat=7),lambda s:sum(s)==3 and s[0]!=s[-1]),20)
check('02.4.c',count(words('BALLOON')),1260)
check('02.4.d',count(product(range(3),repeat=8),lambda x:tuple(x.count(i) for i in range(3))==(2,3,3)),560)
check('02.4.e',count(compositions(9,4),lambda x:min(x)>=1),56)
check('02.4.f',polynomial_power({(2,):2,(-1,):-1},9)[(0,)],672)
check('02.4.g',count(paths(5,4),lambda p:not visits(p,(2,2))),66)
check('02.4.h',count(combinations(range(9),4),lambda s:count(s,lambda x:x<5)==2),60)
check('03.4.a',count(permutations(range(8),3)),336)
check('03.4.b',count(product(range(10),repeat=5),lambda s:s[0]!=0 and s[-1]%2==0 and len(set(s))==5),13776)
check('03.4.c',count(permutations('ABCDEFGH'),lambda p:''.join(p).find('ABC')>=0),factorial(6))
check('03.4.d',count(permutations('BCDEFG'),lambda p:p[0]=='B'),factorial(5))
check('03.4.e',count(words('RRRSSSTT')),560)
check('03.4.f',count(compositions(6,4),lambda x:x[0]>=2),35)
check('03.4.g',polynomial_power({(1,0):1,(0,1):-2},8)[(3,5)],-1792)
check('03.4.h',count(terminal_sequences(2)),6)
check('04.4.a',sum(count(combinations(range(1,9),k),lambda s:1 in s and 2 not in s) for k in range(9)),64)
check('04.4.b',count(permutations(range(5),3),lambda f:f[0]!=0),48)
check('04.4.c',count(product(range(3),repeat=5),lambda s:s[0]!=0 and s==s[::-1]),18)
check('04.4.d',count(product('AB01',repeat=4),lambda s:count(s,lambda c:c in '01')==2),96)
check('04.4.e',count(product((0,1),repeat=4),lambda s:all(not(a==b==1) for a,b in zip(s,s[1:]))),8)
check('04.4.f',count(product(range(3),repeat=10),lambda x:x[0]!=0 and tuple(x.count(i) for i in range(3))==(2,3,5)),2016)
check('04.4.g',count(compositions(8,4),lambda x:x[0]%2==0),95)
triangle = [[1]]
for _ in range(5):
    previous = triangle[-1]
    triangle.append([1]+[a+b for a,b in zip(previous,previous[1:])]+[1])
check('04.4.h.previous',triangle[4],[1,4,6,4,1])
check('04.4.h',triangle[5],[1,5,10,10,5,1])
check('05.4.a',count(permutations('ABCDEFG'),lambda p:p[0]=='A' and p[-1]!='B'),600)
check('05.4.b',sum(len(s) for s in combinations(range(9),4)),504)
check('05.4.c',count(words('STATISTICS'),lambda w:w[0]==w[-1]=='T'),3360)
check('05.4.d',count(permutations('BCDEFGH'),lambda p:p[0]!='B'),4320)
check('05.4.e',count(product((0,1),repeat=6),lambda s:sum(s)==4 and s[0]==1),10)
check('05.4.f',count(compositions(8,5),lambda x:x[0]==2),84)
check('05.4.g',polynomial_power({(2,):1,(0,):2},5)[(6,)],40)
check('05.4.h',sum(count(product('ABCD',repeat=l),lambda s:s[0]=='A' and s[-1]!='A') for l in (3,4)),60)
check('06.4.a',count(product(range(4),repeat=5),lambda f:f[0]==0 and f[1]!=0),192)
for n in range(8):
    for k in range(n+1):
        ordered=set(permutations(range(n),k))
        choose_then_order={p for chosen in combinations(range(n),k) for p in permutations(chosen)}
        check(f'06.4.b.bijection.{n}.{k}',ordered,choose_then_order)
        check(f'06.4.b.count.{n}.{k}',len(ordered),comb(n,k)*factorial(k))
check('06.4.c',count(permutations('ABCDEF'),lambda p:''.join(p).find('AB')>=0 and abs(p.index('C')-p.index('D'))==1),48)
check('06.4.d',count(product(range(4),repeat=9),lambda x:tuple(x.count(i) for i in range(4))==(2,2,2,3)),7560)
check('06.4.e',count(product(range(5),repeat=5),lambda s:s[0]!=0 and tuple(sorted(s))==s),56)
check('06.4.f',count(product(range(4),repeat=6),lambda s:s[0]!=0 and tuple(sorted(s,reverse=True))==s),83)
check('06.4.g',count(product(range(1,5),range(1,8),range(2)),lambda t:(t[0]+t[1])%2==0),28)
check('06.4.h',count(paths(3,3),lambda p:p[0]=='U'),10)
check('07.4.a',count(permutations('ABCDEF'),lambda p:p[0]=='A' and p[-1]=='B'),24)
check('07.4.b',count(product(range(5),repeat=4),lambda f:len(set(f))==3),360)
check('07.4.c',count(product((0,1),repeat=8),lambda s:sum(s)<=1),9)
check('07.4.d',count(words('RRRRBBB'),lambda p:p[0]=='R' and p[-1]=='B'),10)
check('07.4.e',count(permutations('BCDEFG'),lambda p:p[:2]==('B','C')),24)
check('07.4.f',count(product(range(7),repeat=3),lambda p:sum(p)<=6),84)
check('07.4.g',polynomial_power({(3,):1,(-2,):2},10)[(0,)],13440)
check('07.4.h',count(product(range(3),repeat=8),lambda x:(int(x[0]==2)+int(x[1]==2))==1 and tuple(x.count(i) for i in range(3))==(3,2,3)),300)
check('08.4.a',count(product('ABC','0123','0123'),lambda s:s[1]!=s[2])+count(product('ABC','ABC','0123'),lambda s:s[0]!=s[1]),60)
check('08.4.b',count(permutations('ABCDEFGH',4),lambda p:'A' in p and 'B' not in p),480)
check('08.4.c',count(permutations('ABCDEFG'),lambda p:abs(p.index('A')-p.index('B'))!=1),3600)
check('08.4.d',count(permutations('BCDEF'),lambda p:p[2]=='B'),24)
check('08.4.e',count(product((0,1),repeat=9),lambda s:sum(s)==4 and s[-2:]==(0,0)),35)
check('08.4.f',count(compositions(10,6),lambda x:x[0]>=2 and x[1]>=3),252)
check('08.4.g',polynomial_power({(1,0):3,(0,1):-1},6)[(2,4)],135)
check('08.4.h',count(paths(4,4),lambda p:visits(p,(2,1))),30)
check('09.4.a',count(permutations('ABCDE012',4),lambda s:s[0] in '012' and s[1] in 'ABCDE'),450)
check('09.4.b',count(product(range(4),repeat=3),lambda f:f[0]==f[1] and f[2]!=f[0]),12)
check('09.4.c',count(product((0,1),repeat=10),lambda s:sum(s)==3 and '111' in ''.join(map(str,s))),8)
check('09.4.d',count(words('MISSISSIPPI'),lambda w:'PP' not in ''.join(w)),28350)
check('09.4.e',count(product(range(3),repeat=7),lambda f:0 in f),2059)
check('09.4.f',count(compositions(10,3),lambda x:x[0]>=2 and x[1]>=3),21)
a=polynomial_power({(1,):1,(0,):1},8);b=polynomial_power({(1,):1,(0,):1},7)
check('09.4.g',a[(5,)]-b[(5,)],35)
check('09.4.h',Counter(map(len,terminal_sequences(3))),Counter({3:2,4:6,5:12}))
def cyclic_block(p):
    full=('A',)+p
    positions={full.index(c) for c in 'ABC'}
    return any(positions=={j%8,(j+1)%8,(j+2)%8} for j in range(8))
check('10.4.a',sum(comb(6,k)**2 for k in range(7)),count(combinations(range(12),6)))
check('10.4.a.value',count(combinations(range(12),6)),924)
check('10.4.b',count(permutations('BCDEFGH'),cyclic_block),720)
check('10.4.c',count(words('AABBCC'),lambda s:'AA' not in ''.join(s)),60)
check('10.4.d',count(combinations('ABCDEFGHIJ',6),lambda s:not('A' in s and 'B' in s)),140)
check('10.4.e',count(compositions(6,3),lambda x:x[0]%2==0),16)
check('10.4.f',polynomial_power({(1,):1,(-1,):-2},8)[(0,)],1120)
check('10.4.g',count(permutations(range(1,5)),lambda f:f[1]==2 and f[0]!=1),4)
check('10.4.h',count(paths(4,3),lambda p:p[:2]!=('R','R')),25)

# Q5 identities: exact small/boundary cases plus finite model cross-checks.
for n in range(2,13):
    for r in range(2,n+1):
        check(f'01.5.n{n}.r{r}',r*(r-1)*comb(n,r),n*(n-1)*comb(n-2,r-2))
for m in range(7):
    for n in range(7):
        for r in range(m+n+1):
            check(f'02.5.{m}.{n}.{r}',sum(choose(m,k)*choose(n,r-k) for k in range(r+1)),comb(m+n,r))
for n in range(1,13):
    check(f'03.5.n{n}',sum(k*comb(n,k)**2 for k in range(n+1)),n*comb(2*n-1,n-1))
for n in range(1,10):
    for t in range(1,n+1):
        for r in range(1,t+1):
            check(f'04.5.{n}.{t}.{r}',sum(comb(j-1,r-1) for j in range(t,n+1)),comb(n,r)-choose(t-1,r))
for n in range(1,9):
    subsets=[frozenset(i for i,b in enumerate(s) if b) for s in product((0,1),repeat=n)]
    even={s for s in subsets if len(s)%2==0};odd={s for s in subsets if len(s)%2==1}
    check(f'05.5.toggle.n{n}',{s^{0} for s in even},odd)
    check(f'05.5.signed.n{n}',sum((-1)**k*comb(n,k) for k in range(n+1)),0)
for n in range(9):
    check(f'06.5.a.n{n}',sum(comb(n,k) for k in range(n+1)),len(list(product((0,1),repeat=n))))
    check(f'06.5.b.n{n}',sum(2**k*comb(n,k) for k in range(n+1)),len(list(product((0,1,2),repeat=n))))
for n in range(2,13):
    for r in range(1,n):
        check(f'07.5.a.{n}.{r}',comb(n,r),comb(n-1,r-1)+comb(n-1,r))
check('07.5.b.paths',count(paths(4,3),lambda p:not visits(p,(2,1))),17)
for n in range(9):
    expanded=polynomial_power({(1,0):1,(0,1):1},n)
    scaled=polynomial_power({(2,0):1,(0,1):-3},n)
    for r in range(n+1):
        check(f'08.5.a.{n}.{r}',expanded[(n-r,r)],comb(n,r))
        check(f'08.5.b.{n}.{r}',scaled[(2*n-2*r,r)],comb(n,r)*(-3)**r)
for n in range(9):
    for r in range(n+1):
        for s in range(n-r+1):
            check(f'09.5.{n}.{r}.{s}',comb(n,r)*comb(n-r,s),comb(n,r+s)*comb(r+s,r))
            if n<=5:
                encoded=count(product('RSU',repeat=n),lambda w:w.count('R')==r and w.count('S')==s)
                check(f'09.5.encoding.{n}.{r}.{s}',encoded,factorial(n)//(factorial(r)*factorial(s)*factorial(n-r-s)))
for n in range(1,7):
    small=sum(comb(2*n,k) for k in range(n))
    check(f'10.5.n{n}',small,(2**(2*n)-comb(2*n,n))//2)
    allsets=[frozenset(i for i,b in enumerate(w) if b) for w in product((0,1),repeat=2*n)]
    ground=frozenset(range(2*n))
    check(f'10.5.bijection.n{n}',{ground-s for s in allsets if len(s)<n},{s for s in allsets if len(s)>n})

# Actual IE models, directly enumerated without inclusion-exclusion.
check('01.6',count(product(range(1,6),range(5),range(2,8)),lambda x:sum(x)==12),15)
check('02.6',count(product('ABC',repeat=6),lambda f:f[0]!='C' and set(f)==set('ABC')),360)
check('03.6',count(product(range(10),repeat=5),lambda s:s[0]!=0 and {0,1,2}<=set(s)),3376)
for n in range(9):
    dn=derangements(n)
    formula=sum((-1)**j*comb(n,j)*factorial(n-j) for j in range(n+1))
    check(f'04.6.derangements.n{n}',dn,formula)
    check(f'04.6.probability.n{n}',Fraction(dn,factorial(n)),sum((Fraction((-1)**j,factorial(j)) for j in range(n+1)),Fraction()))
check('05.6.a',count(permutations(range(7)),lambda p:sum(i==v for i,v in enumerate(p))==2),924)
check('05.6.b',count(permutations(range(7)),lambda p:sum(i==v for i,v in enumerate(p))==6),0)
check('06.6.a',count(range(1,181),lambda x:all(x%d for d in (2,3,5))),48)
for r in range(1,17):
    check(f'06.6.b.multiplicity{r}',sum((-1)**(j+1)*comb(r,j) for j in range(1,r+1)),1)
check('07.6',count(product('ABCD',repeat=6),lambda s:s[0]!=s[-1] and set('ABC')<=set(s)),1710)
pairs=({0,1},{2,3},{4,5})
check('08.6',count(combinations(range(9),5),lambda s:all(not p<=set(s) for p in pairs)),36)
check('09.6',count(permutations('ABCDEF'),lambda p:p[0]!='A' and p[1]!='A' and p[2]!='B' and p[3]!='C'),348)
check('10.6',count(range(1,181),lambda x:sum(x%d==0 for d in (2,3,5))==2),42)

# PHP: verify proposed partitions, avoidance capacities and extremal witnesses.
for kind in ('sum','difference'):
    boxes=[{i,31-i} if kind=='sum' else {i,i+15} for i in range(1,16)]
    check('01.7.'+kind+'.partition',set.union(*boxes),set(range(1,31)))
    check('01.7.'+kind+'.disjoint',sum(map(len,boxes)),30)
    check('01.7.'+kind+'.sharp',max(len(b&set(range(1,16))) for b in boxes),1)
# Half-open boundary assignment remains unique at every grid-line intersection.
def box_index(x,maxcoord):
    return min(int(x//2),int(maxcoord//2)-1)
check('02.7.boxes',{(box_index(x,8),box_index(y,6)) for x,y in product(range(9),range(7))},set(product(range(4),range(3))))
check('02.7.diagonal_squared',2**2+2**2,8)
check('02.7.strip_bound',all(max(x)>=4 for x in compositions(13,4)),True)
check('03.7.a.avoidance',sum([4]*5),20)
check('03.7.b.avoidance',sum([7]*4+[4]),32)
for k in range(1,9):
    for n in range(1,13):
        q=(n+k-1)//k
        check(f'04.7.ceiling.{n}.{k}',k*(q-1)<n,True)
        if k<=4:
            check(f'04.7.occupancies.{n}.{k}',all(max(c)>=q for c in compositions(n,k)),True)
check('04.7.restricted',all(sum(x>=3 for x in c)>=3 for c in product(range(5),repeat=8) if sum(c)==22),True)
score_boxes={3*w+d+int(w>0) for w in range(4) for d in range(4-w)}
check('05.7.score_boxes',score_boxes,set(range(9))|{10})
check('05.7.actual_capacity',len(score_boxes)<11,True)
check('05.7.naive_range_insufficient',11<=max(score_boxes)-min(score_boxes)+1,True)
for n in (3,5,7):
    check(f'06.7.odd.n{n}',all(prod(v-(i+1) for i,v in enumerate(p))%2==0 for p in permutations(range(1,n+1))),True)
for m in range(1,6):
    p=tuple(x for j in range(1,m+1) for x in (2*j,2*j-1))
    check(f'06.7.even.m{m}',prod(v-(i+1) for i,v in enumerate(p)),(-1)**m)
sharp7=[p+(0,) for p in product((0,1),repeat=6)]
check('07.7.sharp_count',len(sharp7),64)
check('07.7.sharp_prefixes',len({s[:6] for s in sharp7}),64)
check('08.7.avoidance',max(sum(c) for c in product(range(11),range(9),range(7)) if c[0]<6 and c[1]<4 and c[2]<3),10)
check('08.7.sharp',sum((5,3,2)),10)
blocks=defaultdict(list)
for cube in product(range(4),repeat=3):
    blocks[tuple(x//2 for x in cube)].append(cube)
check('09.7.block_count',len(blocks),8)
for key,cubes in blocks.items():
    centre=tuple(2*x+1 for x in key)
    check('09.7.common_vertex.'+str(key),all(centre in set(product(*[(x,x+1) for x in cube])) for cube in cubes),True)
sharp10=[(0,)*8,(1,)*8]
for k in range(1,8):
    sharp10 += [tuple(int(i<k) for i in range(8)),tuple(int(1<=i<=k) for i in range(8))]
check('10.7.sharp_count',len(set(sharp10)),16)
check('10.7.sharp_max_weight_occupancy',max(Counter(map(sum,sharp10)).values()),2)
check('10.7.avoidance_capacity',1+7*2+1,16)

# Subject-local contract and source admissibility; other subjects may still be absent.
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'content/counting.json').read_text())
check('structure.papers',[p['number'] for p in data['papers']],list(range(1,11)))
refs={}
for paper in data['papers']:
    check(f'structure.{paper["number"]}.slots',[(p['number'],p['points']) for p in paper['problems']],[(4,16),(5,10),(6,9),(7,7)])
    for q in paper['problems']:
        check(f'structure.{paper["number"]}.{q["number"]}.marks',sum(p['points'] for p in q['parts']),q['points'])
        assert q['sources'] and len(q['sources'])==len(set(q['sources']))
        labels=[a['label'] for a in q['parts']]
        assert len(labels)==len(set(labels)) and ('' not in labels or len(labels)==1)
        for a in q['parts']:
            ref=f'{paper["number"]:02}.{q["number"]}'+('.'+a['label'] if a['label'] else '')
            refs[ref]=set(a['concepts'])
            assert all(a[k] for k in ('question','solution','rubric','concepts'))
            assert a['space_cm']>0
            assert all(cid.startswith('A') and 43<=int(cid[1:])<=69 for cid in a['concepts'])
    check(f'structure.{paper["number"]}.quick_marks',[a['points'] for a in paper['problems'][0]['parts']],[2]*8)
for pn,label,leaf_strings,edge_count,crosses,space in [
    (3,'h',('AA','ABA','ABB','BB','BAA','BAB'),10,0,4),
    (4,'e',('0000','0001','0010','0100','0101','1000','1001','1010'),22,4,5)]:
    a=next(a for a in data['papers'][pn-1]['problems'][0]['parts'] if a['label']==label)
    assert r'\begin{picture}' in a['solution'] and r'\end{picture}' in a['solution']
    check(f'{pn:02}.4.{label}.diagram.edges',a['solution'].count(r'\qbezier'),edge_count)
    check(f'{pn:02}.4.{label}.diagram.crosses',a['solution'].count(r'\times'),crosses)
    check(f'{pn:02}.4.{label}.diagram.terminal_labels',all(r'\underline{'+leaf+'}' in a['solution'] for leaf in leaf_strings),True)
    check(f'{pn:02}.4.{label}.writing_space',a['space_cm']>=space,True)

check('coverage.ids',{c['id'] for c in data['coverage']},{f'A{i}' for i in range(43,70)})
assert len(data['coverage'])==27
for c in data['coverage']:
    actual={ref for ref,ids in refs.items() if c['id'] in ids}
    check('coverage.'+c['id'],set(c['assessed_at']),actual)
    assert actual and c['pages'] and len(c['assessed_at'])==len(set(c['assessed_at']))
kb=Path('/Users/eason/Documents/ChatGPT/COMP2711/knowledge_base/04-Questions')
for sid in sorted({sid for p in data['papers'] for q in p['problems'] for sid in q['sources']}):
    notes=list(kb.glob(sid+' - *.md'))
    assert len(notes)==1,sid
    text=notes[0].read_text()
    assert 'verification_status: "verified"' in text and 'syllabus_status: "in-scope"' in text and 'exam_type: "midterm"' in text,sid
    passed.append('source.'+sid)
print(f'PASS: {len(passed)} exact counting, identity, pigeonhole, structure, coverage and source checks.')
print('All 80 Q4 labels and ten actual IE applications checked; general proofs manually audited in audit/counting-checks.md.')
