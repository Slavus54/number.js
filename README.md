## About       

Light and powerful javascript library to handling numbers.        
            
* Current Version: **1.0.3**        
* Most of algorithms have **O(n)** and **O(log n)** time complexity :star:      
* There are 0 dependencies except Node.js             
* **0.56K** lines of code and **35 methods** :gem:      

## Links

Download - *https://www.npmjs.com/package/numberus.js*  

## Getting Started          

```js

    import NumberusCore from 'numberus.js'  

    const instance = new NumberusCore() 
```

## Examples

How much can I earn in Russia after tax paid? :moneybag:

~~~ 
    const income: number = 350 ($ per month) // tax for this average salary will be 13%    
    let result: number = number.cleanValue(87, income, 1) // 304.5 $         
~~~

I want to know part of my work as builder in % of time last evening? :hammer:   

~~~ 
    const duration: number = 120    

    let work: number = 30   
    let result: number = number.percent(work, duration) // 25    
~~~

Is licence plate on car includes 5 on third position? :oncoming_automobile:  

~~~ 
    const licencePlate: number = 3517

    let isInclude: boolean = number.getNumDigit(licencePlate, 3) === 5 // true     
~~~

## Methods

- **percent** (*value* = 0, *total* = 1e2, *round* = 1) - returns % as ratio of *value* to *total* with rounding.       

- **cleanValue** (*value* = 0, *total* = 1e2, *round* = 1) - returns number as ratio of *value* percent to *total* with rounding.   

- **toRound** (*result*, *round* = 0) - rounds number and returs it with fractional part sized *round*.   

- **getNumDigit** (*num* = 2e3, *index* = 1) - returns digit of *num* by *index* position which starts with smallest digit. 

- **getIntervalValue** (*borders* = []) - generates random number inside *borders*.  

- **numDigitInResidueExist** (*num* = 1e1, *position* = 1) - checks if digit *num* by *position* exist in it residue.       

- **digitsOfNum** (*num* = 1e1) - returns list of num's digits, each one is multiplied by powered 10.           

- **numResidueSum** (*num* = 1e1) - counts sum of all digits of num's fractional part.    

- **getNumListByBordersMultiplicity** (*from* = 1, *to* = 1e3, *num* = 1) - generates list of numbers, each one multiple to *num*.    

- **findNearestBaseOfPoweredNum** (*num* = 1, *list* = []) - finds nearest base among *list* elements to power it for *num*.      

- **deleteNumDigit** (*num* = 1, *digit* = 1) - delete *digit* from *num* by changing it like this: (1368, 2) => 138.   

- **numSimpleProgression** (*start* = 1e3, *step* = 1, *length* = 1e1, *isIncrease* = true) - builds a number progression by parameters.  

- **numPercentProgression** (*num* = 1, *percent* = 1e1, *iterations* = 1, *round* = 0) - multiplies *num* by *iterations* on *percent* = (1 + *percent* * 0.01).    

- **findNumListAverageQuotient** (*list* = [], *num* = 1) - counts average number as quotent of each *list* element (devided on *num* without residue) division on *num*.   

- **findNearestMultipleToNum** (*num* = 1, *list* = []) - finds number with minimal residue after division on *num*.    

- **getFastestNumReachByOperation** (*num* = 1, *operation* = '+', *coefficient* = 1, *list* = []) - return number in *list*, which fastest reach *num* by *coefficient* and *operation*.   

- **analysisProgressionIterations** (*list* = []) - analyze list of numbers and returns array of math actions and values.    

- **numLevelsOfMultiplicity** (*value* = 2e3, *num* = 1) - count times of division *value* on *num* without residue.       

- **numPositionInsideBorders** (*num* = 1, *min* = 1, *max* = 1e1, *round* = 0) - return % as position of *num* inside borders.     

- **buildNumBorders** (*min* = 0, *numbers* = []) - build list of borders as pairs in *numbers* chain starts from *min*.       

- **findMaximumNumDifferenceByIndexedDistance** (*list* = [], *percent* = 1e1) - looking for max difference between numbers on distance by *percent* of list length.    

- **smoothNumSymmetric** (*num* = 1) - smooth digits of num symmetric.  

- **findNumListDivisionPairs** (*list* = []) - find all pairs, which dividing one number by another without residue.   

- **findNumLargestDigit** (*num* = 1) - return largest digit of given number.      

- **findNumListAveragePairs** (*list* = [], *num* = 1) - find all pairs, which have average value equal to *num*.      

- **generateNumByDigitsRandomly** (*list* = [], *size* = 1, *isUniq* = true) - generate num from random choosing digit from *list*.   

- **findNumDistanceByDifference** (*list* = [], *percent* = 1e1) - return positions of number which have difference by % (max - min).   

- **findNumLargestCompareSubsequence** (*list* = [], *num* = 1, *isMore* = true) - find largest subsequence in *list*, each of its elements compared with *num* by *isMore* flag.   

- **findNumMultiplicityList** (*list* = [], *num* = 1) - filter *list* of numbers and returns only divided on *num* without residue.    

- **numPercentBorders** (*num*= 1, *percent* = 1e1, *round* = 0) - return borders generated as -+ *num* and *percent* of *num*.  

- **findNumListSmallestFractionalPart** (*list* = [], *round* = 2) - return number with smallest fractional part among *list* elements.  

- **getNumSymmmetric** (*digit* = 1, *size* = 1) - build number symmetric starts with *digit*.      

- **numListDeviationPercent** (*list* = [], *num* = 1) - return % of deviation among all numbers of *list* from *num*.    

- **findNumDigitPercentFromAll** (*num* = 1, *digit* = 1, *round* = 0) - counts % from *num* as *digit* of *num* (#2 1368 - 68 into %).      

- **numReverse** (*num* = 1) - just reverses given number.        