# Lavoir Moderne Test Dev Backend

## Installation
TODO

## Test
By following the project tree file (like all the default component), Do each exercise.  
Create your own git repository, don't commit on this repository.  
Don't forget, you're on git, so don't forget to commit : 1 commit by exercise is the minimum, not the maximum ;).

### Test 1
Write a webservice that compute the sum of the numbers in a given list using a for-loop, foreach-loop, a while-loop,
and recursion.

You should made 5 routes:
* /test1/for : the for sum, response,
* /test1/foreach : the foreach sum,
* /test1/while : the while sum,
* /test1/recursion : the recursion sum,
* /test1  : the 4 sums.

The 4 first routes should return the same result :
```
{ result: 0 }
```
the last route result should be : 
```
{"for":{"result":0},"foreach":{"result":0},"while":{"result":0},"recursion":{"result":0}}
```
(where 0 should be replaced by the sum).

Here some calls examples and results to these routes:
```
$ curl -H "Content-Type: application/json" -X POST -d '{ "list":  [1, 2, 3] }' localhost:3000/test1/recursion
{"result":6}
```
```
$ curl -H "Content-Type: application/json" -X POST -d '{ "list":  [1, 2, 3] }' localhost:3000/test1
{"for":{"result":6},"foreach":{"result":6},"while":{"result":6},"recursion":{"result":6}}
```

### Test 2
Write a webservice that combines two lists by alternatingly taking elements in list1, then in list2. For exemple: given two lists `[a, b, c]` and `[1, 2, 3]`, the results sould be `[A, 1, B, 2, C, 3]`.

Here a call example and result:
```
$ curl -H "Content-Type: application/json" -X POST -d '{ "list1": ["a", "b", "c"], "list2": [1, 2, 3] }' localhost:3000/test2
["a",1,"b",2,"c",3]
```