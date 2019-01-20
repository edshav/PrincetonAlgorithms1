# Union-Find
* dynamic connectivity
* quick find
* quick union
* improvements
* applications

 Given a set of ```N``` objects.
* Union command:  connect two objects.
* Find/connected query:  is there a path connecting the two objects?

## quick find
## quick union
Data structure.
* Integer array ```id[]``` of length ```N```.
* Interpretation:  ```id[i]``` is parent of ```i```.
* Root of i is ```id[id[id[...id[i]...]]].```    
keep going until it doesn’t change (algorithm ensures no cycles)  
##### Quick-find defect.
* Union too expensive (N array accesses).
* Trees are flat, but too expensive to keep them flat.  
##### Quick-union defect.
* Trees can get tall.
* Find too expensive (could be N array accesses).
##### Improvement 1:  weighting
##### Improvement 2:  path compression