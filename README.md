# React Native Dimensions API Inconsistent Dimensions on Android

This repository demonstrates a common issue encountered when using the `Dimensions` API in React Native to retrieve screen dimensions, specifically on Android devices. The problem arises when the API returns inconsistent or inaccurate dimensions, leading to layout issues within the application.

The `DimensionsBug.js` file showcases the problem. The `DimensionsBugSolution.js` file provides a potential solution.  The core issue is often timing related (the dimensions haven't fully settled when the component mounts).

## Problem

The `Dimensions` API may report incorrect width and height values, resulting in elements being rendered with inappropriate sizes or positions. This is frequently more pronounced on Android than iOS.

## Solution

The provided solution uses `useEffect` and `Dimensions.addEventListener` to dynamically update the dimensions whenever a change is detected in the screen orientation.  It allows for handling dimensions after the layout is complete.