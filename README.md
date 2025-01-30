## About       

Light and powerful javascript library to handling numbers.        
            
* Current Version: **1.0.5**            
* Most of algorithms have **O(n)** and **O(log n)** time complexity :star:          
* Only Node.js as dependency               
* **1.05K** lines of code and **60 methods** :gem:        

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

- **getCleanResidue** (*num* = 1) - returns residue without rounding of *num*.      

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

- **getNumSymmmetric** (*digit* = 1, *size* = 1) - build number symmetric starts with *digit*.      

- **numListDeviationPercent** (*list* = [], *num* = 1) - return % of deviation among all numbers of *list* from *num*.    

- **findNumDigitPercentFromAll** (*num* = 1, *digit* = 1, *round* = 0) - counts % from *num* as *digit* of *num* (#2 1368 - 68 into %).      

- **numReverse** (*num* = 1) - just reverses given number.  

- **getNumDigitPart** (*num* = 1, *digit* = 1) - cut off digits from *num* by position *digit*. 

- **exchangeNumListParts** (*list* = []) - mix base and fractional parts among numbers of *list*.   

- **numRound** (*num* = 1, *min* = 0, *max* = 1, *forward* = 1, *back* = 1) - rounding *num* by it's residue inside borders, if true up to *forward*, false - *back*.   

- **filterNumListByRangePercent** (*list* = [], *num* = 1, *from* = 1, *to* = 1e1) - return numbers, which inside % borders of *list* range (difference between max and min).  

- **generateNumByMultipliersRandomly** (*list* = [], *size* = 1) - build number from multipliers in *list* with length by *size*.  

- **findNumListAllPairsByMultiplicity** (*list* = [], *num* = 1) - return uniq pairs of numbers, which product is a multiple to *num*.  

- **findNumListMaxRangeByMultiplicity** (*list* = [], *num* = 1) - find pair of max range, which difference is multiple to *num*.   

- **filterNumListByFractionalPart** (*list* = [], *min* = 0, *max* = 1, *num* = 1) - validate list of numbers by checking fractional part of each *list* element inside borders and multiple to *num*.  

- **findNumListLargestFractionalBaseDifference** (*list* = []) - looking for number with largest difference between base and fractional part.      

- **findNumLargestSubsequenceBySchemaChanges** (*list* = [], *schema* = []) - returns largest subsequence of *list*, which elements related to boolean *schema* (true - increasing).    

- **updateNumFractionalPartRandomly** (*num* = 1, *from* = 0, *to* = .5, *accuracy* = 1) - generate new fractional part of *num* between borders with length by *accuracy*.  

- **transformNumByPartsExhange** (*num* = 1) - exchange base and fractional parts of *num*. 

- **findNearestPairByDynamicRatio** (*list* = [], *ratio* = 1) - find nearest to *ratio* pair of numbers among *list* and return result.    

- **buildNumListByChainSchema** (*num* = 1, *schema* = [], *forward* = 1, *back* = 1) - build list from *num* by increase/decrease boolean *schema* with randomly steps inside borders.  

- **calculateNumBySchemaOperationsAndListRandomly** (*num* = 1, *schema* = [], *list* = []) - transform *num* by operations in *schema* with *list* randomly.         

- **buildNumListByProgressionSchema** (*num* = 1, *schema* = [], *arithmetic* = 1, *geometric* = 1, *isIncrease* = true) - build list as mixed progression (arithmetic if true and geometric if false) by boolean *schema* and coefficients.        

- **filterNumListByFractionalPartLatestDigit** (*list* = [], *from* = 1, *to* = 1) - return only those numbers, which has latest digit in fractional part between borders.    

- **numFactorialMultiplicity** (*value* = 1, *num* = 1) - count *value* factorial only with those multipliers, which multiple to *num*.  

- **findNumListUltraByMultiplicitySchema** (*list* = [], *schema* = [], *isMax* = true) - find max/min value in *list* which multiple to each *schema* number.    

- **checkNumMultiplicity** (*num* = 1, *base* = 1, *fractional* = 1) - validates parts of *num*, which multiple to *base* and *fractional*.  

- **findNumLargestSubsequenceByFractionalSchemaChanges** (*list* = [], *schema* = []) - return largest subsequence in *list*, which elements related to boolean *schema* (changes of fractional part, true - increase).  

- **numListByAllPartsPercent** (*max* = 1e3, *parts* = [], *round* = 2) - generate list of numbers by % *parts* of *num* + % * 0.01.        

- **getNumListRangeIndex** (*list* = [], *size* = 1, *round* = 2) - split *list* by *size* and count in each range of numbers, return difference between max and min range.  

- **generateNumByBaseRandomly** (*base* = 1, *digits* = 1) - adding *digits* digits to *base* randomly: (125, 2) => 38125.    

- **findNearestMultiplierOfNum** (*start* = 1, *end* = 1, *list* = []) - find among *list* nearest multiplier as result of division *end* on *start*.        