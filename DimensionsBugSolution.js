```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';

const DimensionsBugSolution = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View>
      <View style={{ width: dimensions.width / 2, height: dimensions.height / 2, backgroundColor: 'red' }}/>
      <Text>Width: {dimensions.width}, Height: {dimensions.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;
```