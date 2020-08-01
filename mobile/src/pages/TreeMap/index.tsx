import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';

import FriendsMap from '../../components/FriendsMap';
import InfoMap from '../../components/InfoMap';

enum MapType {
  FRIENDS_MAP,
  INFO_MAP,
}

const TreeMap: React.FC = () => {
  const [mapType, setMapType] = useState<MapType>(MapType.FRIENDS_MAP);

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="LeafLife" />
      </Appbar.Header>
      {mapType === MapType.FRIENDS_MAP ? (
        <FriendsMap onChangeMapType={() => setMapType(MapType.INFO_MAP)} />
      ) : (
        <InfoMap onChangeMapType={() => setMapType(MapType.FRIENDS_MAP)} />
      )}
    </>
  );
};

export default TreeMap;
