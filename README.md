# Aurelia Value Converters

#### Table of Contents
* [Summary](#summary)
* [Download](#download)
* [Sort](#sort)
* [Group](#group)
* [DateFormat](#dateformat)

## Summary
A package full of common value converters used across my projects

## Download

`npm install aurelia-value-converters`

main.js
```
import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-value-converters');

  aurelia.start().then(() => aurelia.setRoot());
}
```

## Sort

sort by a property named requested
```
  <!-- Ascending order -->
  <div repeat.for="r of requests | sort:'requested'"></div>

  <!-- Descending order -->
  <div repeat.for="r of requests | sort:'requested':'desc'"></div>

  <!-- sort by a nested property within the bar property -->
  <div repeat.for="r of requests | sort:'bar.requested'"></div>
```

## Group
group by a property named requested (nested properties supported too)
```
  <div repeat.for="grp of requests | group:'dateGroup'">
    <span class="text-muted">Name of the group: ${grp.group}</span>

    <!-- The group values as an array -->
    <div repeat.for="val of grp.values"></div>

  </div>
```

## DateFormat
#### Dependencies
moment date formats are supported
```
  <span>${date | dateFormat: format || 'MM/DD/YYYY'}</span>
```
