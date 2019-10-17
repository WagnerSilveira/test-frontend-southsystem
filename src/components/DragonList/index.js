import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import sort from '../../helpers/sort';

import dragonsImages from '../../helpers/dragonsImages';
import {
  GridContainer,
  GridItem,
  GridItemInfo,
  GridItemPicture,
} from './styles';

const DragonList = ({ list }) => {
  const history = useHistory();

  return (
    <GridContainer>
      {list && list.sort(sort)
        .map((item, index) => {
          const key = index + 1;
          const dragonRandomImage = dragonsImages[
            Math.floor(Math.random() * dragonsImages.length)
          ];
          return (
            <GridItem key={key} onClick={() => history.push(`/dragon/${item.id}`)}>
              <GridItemPicture image={dragonRandomImage} />
              <GridItemInfo>
                {item.name}
              </GridItemInfo>
            </GridItem>
          );
        })}
    </GridContainer>
  );
};

DragonList.defaultProps = {
  list: [],
};

DragonList.propTypes = {
  list: PropTypes.array,
};

export default DragonList;
