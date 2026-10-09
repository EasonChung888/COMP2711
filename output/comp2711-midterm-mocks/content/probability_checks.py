#!/usr/bin/env python3
"""Independent exact finite enumeration and stochastic-state checks for Q8–10.

Tests use outcome laws/algorithms, not the LaTeX answer formula as a generator.
General identities also receive a separate proof review in the author audit.
"""
from fractions import Fraction as F
from itertools import product, permutations, combinations
from collections import defaultdict
from functools import lru_cache
from math import comb
from pathlib import Path
import json
import re

REPORTS=[]
def checked(name, actual, expected):
    assert actual == expected, (name, actual, expected)
    REPORTS.append(name)
def mass(space, event):
    return sum((p for s,p in space.items() if event(s)), F(0))
def law(space, value):
    result=defaultdict(F)
    for s,p in space.items(): result[value(s)]+=p
    return dict(result)
def moments(dist):
    mean=sum((x*p for x,p in dist.items()), F(0))
    second=sum((x*x*p for x,p in dist.items()), F(0))
    centered=sum(((x-mean)**2*p for x,p in dist.items()),F(0))
    assert centered==second-mean*mean and centered>=0
    return mean,centered

def binary(ps):
    space={}
    for bits in product((0,1),repeat=len(ps)):
        weight=F(1)
        for bit,p in zip(bits,ps):weight*=p if bit else 1-p
        space[bits]=weight
    assert sum(space.values())==1 and all(p>=0 for p in space.values())
    return space

def posterior(space, condition, value):
    denominator=mass(space,condition)
    assert denominator>0
    result=law({s:p/denominator for s,p in space.items() if condition(s)},value)
    assert sum(result.values())==1
    return result

def independent(space, x, y):
    dx,dy=law(space,x),law(space,y)
    return all(mass(space,lambda s:x(s)==a and y(s)==b)==pa*pb
               for a,pa in dx.items() for b,pb in dy.items())

def host(priors, tie_two):
    # Joint sample (prize door, opened door), with the forced goat policy.
    return {(1,2):priors[0]*tie_two,(1,3):priors[0]*(1-tie_two),
            (2,3):priors[1],(3,2):priors[2]}

# Each check below corresponds to one original problem construction.
space={s:F(1,120) for s in permutations(range(6),3)}
checked('01.8 ordered sampling', (len(space),space[(0,3,5)],
 mass(space,lambda s:s[0]<3 and s[1]<3),mass(space,lambda s:all(x>=3 for x in s)),
 independent(space,lambda s:s[0]<3,lambda s:s[1]<3)),
 (120,F(1,120),F(1,5),F(1,20),False))
space={(d,a):pd*pa for d,pd in ((1,F(1,10)),(0,F(9,10)))
       for a,pa in ((1,F(4,5) if d else F(1,5)),(0,F(1,5) if d else F(4,5)))}
checked('01.9 alarm posteriors',(mass(space,lambda s:s[1]),
 posterior(space,lambda s:s[1]==1,lambda s:s[0])[1],
 posterior(space,lambda s:s[1]==0,lambda s:s[0])[1]),(F(13,50),F(4,13),F(1,37)))
dist={0:F(1,4),1:F(1,2),2:F(1,4)}
space={(x,y,z):px*py*pz for x,px in dist.items() for y,py in dist.items() for z,pz in dist.items()}
checked('01.10 moments, affine, independent product, mean',
 (moments(dist),moments(law({x:p for x,p in dist.items()},lambda x:3-2*x)),
 sum(x*y*p for (x,y,z),p in space.items()),
 sum(x*x*p for x,p in dist.items()),moments(law(space,lambda s:F(sum(s),3)))),
 ((F(1),F(1,2)),(F(1),F(2)),F(1),F(3,2),(F(1),F(1,6))))

space={s:F(i,10) for i,s in enumerate('abcd',1)}
checked('02.8 nonuniform preimages and independence',
 (sum(space.values()),mass(space,lambda s:s in 'abc'),law(space,lambda s:{'a':0,'b':1,'c':2,'d':0}[s]),
 independent(space,lambda s:s in 'ab',lambda s:s in 'ac')),
 (F(1),F(3,5),{0:F(1,2),1:F(1,5),2:F(3,10)},False))
space={}
for urn,balls,prior in (('A',(1,1,0),F(2,3)),('B',(1,0,0),F(1,3))):
    for i,j in permutations(range(3),2):space[(urn,i,j)]=prior/6
red=lambda s:sum(((1,1,0) if s[0]=='A' else (1,0,0))[i] for i in s[1:])
checked('02.9 mixed urns without replacement',
 (mass(space,lambda s:red(s)==2),mass(space,lambda s:red(s)==1),
 posterior(space,lambda s:red(s)==1,lambda s:s[0])['A'],
 independent(space,lambda s:s[0]=='A',lambda s:red(s)==1)),
 (F(2,9),F(2,3),F(2,3),True))
for n in range(2,7):
    ps=list(permutations(range(n)))
    count=lambda p:sum(i==x for i,x in enumerate(p))
    assert F(sum(map(count,ps)),len(ps))==1
    assert F(sum(p[0]==0 and p[1]==1 for p in ps),len(ps))==F(1,n*(n-1))
checked('02.10 hatcheck permutation/indicator means',True,True)

space=binary([F(1,2)]*2)
A=lambda s:s[0]==1;B=lambda s:s[1]==1;C=lambda s:s[0]!=s[1]
checked('03.8 pairwise not mutual',
 (mass(space,A),mass(space,B),mass(space,C),mass(space,lambda s:A(s) and B(s)),
 mass(space,lambda s:A(s) and C(s)),mass(space,lambda s:B(s) and C(s)),
 mass(space,lambda s:A(s) and B(s) and C(s))),
 (F(1,2),F(1,2),F(1,2),F(1,4),F(1,4),F(1,4),F(0)))
space=host([F(1,3)]*3,F(3,4))
checked('03.9 biased host and policy',
 (posterior(space,lambda s:s[1]==2,lambda s:s[0]),
 posterior(space,lambda s:s[1]==3,lambda s:s[0]),mass(space,lambda s:s[0]!=1)),
 ({1:F(3,7),3:F(4,7)},{1:F(1,5),2:F(4,5)},F(2,3)))
for n in range(4,7):
    ps=list(permutations(range(n)))
    records=lambda p:sum(p[i]==max(p[:i+1]) for i in range(n))
    hn=sum((F(1,i) for i in range(1,n+1)),F(0))
    assert F(sum(map(records,ps)),len(ps))==hn
    for i in range(n):assert F(sum(p[i]==max(p[:i+1]) for p in ps),len(ps))==F(1,i+1)
four=list(permutations(range(4)))
replacements=lambda p:sum(p[i]==max(p[:i+1]) for i in range(1,4))
checked('03.10 hiring exact records',F(sum(map(replacements,four)),len(four)),F(13,12))

space=binary([F(1,3)]*4);dist=law(space,sum)
checked('04.8 binomial exact/interval/complement/normalization',
 (dist[2],sum(dist[i] for i in (1,2)),1-dist[0],sum(dist.values())),
 (F(8,27),F(56,81),F(65,81),F(1)))
collisions={}
for n in range(1,5):
    samples=list(product(range(6),repeat=n))
    collisions[n]=F(sum(len(set(s))<n for s in samples),len(samples))
    no_collision=F(1)
    for i in range(n):no_collision*=F(6-i,6)
    assert collisions[n]==1-no_collision
checked('04.9 birthday threshold via exact tuples',
 (collisions[3],collisions[4],next(n for n,p in collisions.items() if p>F(1,2))),
 (F(4,9),F(13,18),4))
def insertion_shifts(seq):
    seq=list(seq);count=0
    for j in range(1,len(seq)):
        key=seq[j];i=j-1
        while i>=0 and seq[i]>key:
            seq[i+1]=seq[i];count+=1;i-=1
        seq[i+1]=key
    assert seq==sorted(seq)
    return count
for n in range(2,7):
    ps=list(permutations(range(n)))
    assert F(sum(p.index(0)+1 for p in ps),len(ps))==F(n+1,2)
    assert F(sum(2*(p.index(0)+1)-1 for p in ps),len(ps))==n
    assert F(sum(insertion_shifts(p) for p in ps),len(ps))==F(n*(n-1),4)
checked('04.10 search and actual insertion shifts',moments({6:F(1)}),(F(6),F(0)))

p=F(1,4);q=1-p
for k in (1,2,7,20):
    assert sum((p*q**(j-1) for j in range(1,k+1)),F(0))==1-q**k
checked('05.8 density rectangle and geometric residual normalization',
 ((F(3,2)-F(1,2))*F(1,2),q**2),(F(1,2),F(9,16)))
space={('known',1):F(1,2),('eliminate',1):F(1,6),('eliminate',0):F(1,6),
       ('unknown',1):F(1,24),('unknown',0):F(1,8)}
checked('05.9 three knowledge states',
 (mass(space,lambda s:s[1]==1),posterior(space,lambda s:s[1]==1,lambda s:s[0])),
 (F(17,24),{'known':F(12,17),'eliminate':F(4,17),'unknown':F(1,17)}))
for n in range(2,7):
    @lru_cache(None)
    def remaining(mask):
        if mask==(1<<n)-1:return F(0)
        new=[i for i in range(n) if not mask>>i&1]
        # E=1 + (old/n)E + sum_new E(next)/n, independently of stage formula.
        return (n+sum((remaining(mask|1<<i) for i in new),F(0)))/len(new)
    assert remaining(0)==n*sum((F(1,j) for j in range(1,n+1)),F(0))
checked('05.10 coupon expectation by absorbing subset states',True,True)

space={s:F(1,comb(8,3)) for s in combinations(range(1,9),3)}
dist=law(space,lambda s:len(set(s)&{1,2,3}))
checked('06.8 lottery match pmf',
 (len(space),dist[3],dist[0],1-dist[0],dist[1]+dist[2],sum(dist.values())),
 (56,F(1,56),F(5,28),F(23,28),F(45,56),F(1)))
space={(factory,defect):prior*(rate if defect else 1-rate)
       for factory,prior,rate in [('A',F(1,2),F(1,20)),('B',F(1,3),F(1,10)),('C',F(1,6),F(1,5))]
       for defect in (0,1)}
checked('06.9 generalized defect Bayes',
 (mass(space,lambda s:s[1]==1),posterior(space,lambda s:s[1]==1,lambda s:s[0])),
 (F(11,120),{'A':F(3,11),'B':F(4,11),'C':F(4,11)}))
for n in range(2,6):
    for m in range(1,6):
        space={s:F(1,n**m) for s in product(range(n),repeat=m)}
        q=F(n-1,n)**m;r=F(n-2,n)**m
        empty=lambda s:n-len(set(s))
        assert mass(space,lambda s:0 not in s)==q
        assert mass(space,lambda s:0 not in s and 1 not in s)==r
        assert r<q*q
        assert moments(law(space,empty))==(n*q,n*q+n*(n-1)*r-n*n*q*q)
checked('06.10 bin occupancy moments by placements',True,True)

space={x:F(1,60) for x in range(1,61)}
checked('07.8 triple probability inclusion-exclusion',
 (mass(space,lambda x:x%6==0),mass(space,lambda x:x%10==0),mass(space,lambda x:x%15==0),
 mass(space,lambda x:x%30==0),mass(space,lambda x:any(x%d==0 for d in (2,3,5)))),
 (F(1,6),F(1,10),F(1,15),F(1,30),F(11,15)))
space=host([F(1,2),F(1,3),F(1,6)],F(1,2))
checked('07.9 nonuniform host posteriors and contingent policy',
 (posterior(space,lambda s:s[1]==2,lambda s:s[0]),posterior(space,lambda s:s[1]==3,lambda s:s[0]),
 mass(space,lambda s:(s[1]==2 and s[0]==1) or (s[1]==3 and s[0]==2))),
 ({1:F(3,5),3:F(2,5)},{1:F(3,7),2:F(4,7)},F(7,12)))
space=binary([F(1,2)]*2)
a=lambda s:s[0];b=lambda s:s[1];c=lambda s:int(s[0]!=s[1])
checked('07.10 all pairwise joint laws and weighted moments',
 (independent(space,a,b),independent(space,a,c),independent(space,b,c),
 mass(space,lambda s:a(s)==b(s)==c(s)==1),moments(law(space,lambda s:a(s)+b(s)-c(s)))),
 (True,True,True,F(0),(F(1,2),F(3,4))))

space=binary([F(1,2),F(1,3),F(1,4)]);dist=law(space,sum)
checked('08.8 heterogeneous Bernoulli pmf',
 (dist[3],dist[0],dist[1],1-dist[0],sum(dist.values())),
 (F(1,24),F(1,4),F(11,24),F(3,4),F(1)))
space={}
for spam,prior,pw,pv in [(1,F(3,5),F(1,4),F(2,5)),(0,F(2,5),F(1,20),F(1,6))]:
    for (w,v),p in binary([pw,pv]).items():space[(spam,w,v)]=prior*p
assert all((weight*600).denominator==1 for weight in space.values()), 'Archive intersections must have integral message counts'
checked('08.9 conditional marker products and Bayes',
 (mass(space,lambda s:s[1]),posterior(space,lambda s:s[1],lambda s:s[0])[1],
 posterior(space,lambda s:s[1] and s[2],lambda s:s[0])[1]),
 (F(17,100),F(15,17),F(18,19)))
for n in range(1,7):
    space=binary([F(2,3)]*n)
    ht=sum(sum(s)*(n-sum(s))*p for s,p in space.items())
    assert ht==F(2*n*(n-1),9)
    assert moments(law(space,lambda s:sum(s)+(n-sum(s))))==(F(n),F(0))
    assert not independent(space,sum,lambda s:n-sum(s))
    dist=law(space,sum)
    assert sum(x*y*px*py for x,px in dist.items() for y,py in dist.items())==F(4*n*n,9)
checked('08.10 dependent heads/tails and independent batches',True,True)

space={s:F(1,16) for s in product(range(4),repeat=2)}
space_no={s:F(1,12) for s in permutations(range(4),2)}
checked('09.8 replacement comparison',
 (len(space),mass(space,lambda s:s[0]==s[1]),mass(space,lambda s:s[0]<2 and s[1]<2),
 mass(space,lambda s:sum(x<2 for x in s)==1),mass(space_no,lambda s:s[0]<2 and s[1]<2)),
 (16,F(1,4),F(1,4),F(1,2),F(1,6)))
space={}
for device,p in enumerate((F(1),F(1,2),F(1,4))):
    for bits,w in binary([p]*4).items():space[(device,bits)]=w/3
R=lambda s:all(s[1][:3])
checked('09.9 repeated-device evidence and prediction',
 (mass(space,R),posterior(space,R,lambda s:s[0]),
 mass(space,lambda s:R(s) and s[1][3])/mass(space,R),mass(space,lambda s:s[1][3])),
 (F(73,192),{0:F(64,73),1:F(8,73),2:F(1,73)},F(273,292),F(7,12)))
space={x:F(1,4) for x in range(4)}
checked('09.10 finite transforms and centered variance',
 (moments(space),sum(x*x*p for x,p in space.items()),
 sum(x*(x-1)*p for x,p in space.items()),moments(law(space,lambda x:x-x*x))),
 ((F(3,2),F(5,4)),F(7,2),F(2),(F(-2),F(6))))
for a,b in ((F(-2),F(3)),(F(0),F(7)),(F(1,3),F(-1))):
    assert moments(law(space,lambda x:a*x+b))[1]==a*a*moments(space)[1]

space={(0,0):F(1,2),(0,1):F(1,4),(1,0):F(1,8),(1,1):F(1,8)}
checked('10.8 nonuniform event rules',
 (mass(space,lambda s:s[0]),mass(space,lambda s:s[1]),mass(space,lambda s:all(s)),
 mass(space,lambda s:any(s)),mass(space,lambda s:not any(s)),independent(space,lambda s:s[0],lambda s:s[1])),
 (F(1,4),F(3,8),F(1,8),F(1,2),F(1,2),False))
space=binary([F(1,2)]*4)
E=lambda s:s[0]==1;Ftwo=lambda s:sum(s)==2;G=lambda s:sum(s)==2 and any(s[i]==s[i+1]==1 for i in range(3))
checked('10.9 restricted spaces and conditional independence',
 (mass(space,lambda s:E(s) and Ftwo(s))/mass(space,Ftwo),
 mass(space,G)/mass(space,Ftwo),mass(space,lambda s:Ftwo(s) and E(s))/mass(space,E),
 independent(space,E,Ftwo)),(F(1,2),F(1,2),F(3,8),True))
for n in range(1,7):
    for p in (F(1,5),F(1,2),F(2,3)):
        space=binary([p]*n)
        assert moments(law(space,sum))==(n*p,n*p*(1-p))
        assert moments(law(space,lambda s:F(sum(s),n)))==(p,p*(1-p)/n)
checked('10.10 Bernoulli sum and measurement mean exact moments',True,True)

# Contract verification against the actual delivered content, including reciprocity.
path=Path(__file__).with_name('probability.json')
data=json.loads(path.read_text())
assert [p['number'] for p in data['papers']]==list(range(1,11))
refs={};observed=defaultdict(list)
allowed={'Q-2023F-MID-P08','Q-2023F-MID-P09-d-i','Q-2023F-MID-P09-c'}
allowed|={f'Q-2023F-MID-P09-{p}-{m}' for p in ('a','b') for m in ('expectation','variance')}
allowed|={f'Q-2025F-MID-P10-a-{p}-{m}' for p in ('i','ii','iii') for m in ('E','var')}
for paper in data['papers']:
    assert [p['number'] for p in paper['problems']]==[8,9,10]
    assert [p['points'] for p in paper['problems']]==[6,7,10]
    for pr in paper['problems']:
        assert pr['sources'] and set(pr['sources'])<=allowed
        assert sum(p['points'] for p in pr['parts'])==pr['points']
        for pt in pr['parts']:
            ref=f"{paper['number']:02}.{pr['number']}.{pt['label']}"
            assert ref not in refs
            refs[ref]=pt
            assert all(pt[k] for k in ('question','solution','rubric','concepts'))
            assert isinstance(pt['space_cm'],(int,float)) and pt['space_cm']>0
            for c in pt['concepts']:
                assert c in {f'A{i}' for i in range(70,96)}
                observed[c].append(ref)
coverage={c['id']:c for c in data['coverage']}
assert set(coverage)=={f'A{i}' for i in range(70,96)}
for cid,row in coverage.items():
    assert row['assessed_at']==observed[cid] and row['assessed_at']
    assert row['pages'] and row['lecture'] in ('L15-Probability-Probability.pdf','L16-Probability-Cond.pdf','L17-Probability-RV.pdf')
source_root=Path('/Users/eason/Documents/ChatGPT/COMP2711/knowledge_base/04-Questions')
for sid in {sid for pp in data['papers'] for pr in pp['problems'] for sid in pr['sources']}:
    notes=list(source_root.glob(sid+' - *.md'))
    assert len(notes)==1, ('source ID does not resolve uniquely',sid)
    note=notes[0].read_text()
    for field,value in [('verification_status','verified'),('syllabus_status','in-scope'),('exam_type','midterm')]:
        assert re.search(r'^'+field+r':\s*[\"]?'+value+r'[\"]?\s*$',note,re.M), (sid,field)
checked('contract: 10 papers, 30 slots, 230 points, 26 reciprocal clusters',True,True)
print(f'PASS: {len(REPORTS)-1} independent construction checks; 10-paper/30-slot/230-point/26-cluster contract.')
print('Exact methods: finite outcome masses, full binary joint laws, urn/host Bayes normalization, permutation algorithms, absorbing coupon states, occupancy moments, and geometric residual sums.')
