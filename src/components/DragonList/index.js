import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import sort from '../../helpers/sort';

import { dragonsImages }  from '../../helpers/dragonsImages';
import { 
    GridContainer,
    GridItem,
    GridItemInfo,
    GridItemPicture
} from './styles';

const DragonList = ({ ...props }) => {
    const history = useHistory();
    return (
        <GridContainer>
            {props.list && props.list.sort(sort)
            .map((item, idx)=> {
               const dragonRandomImage = dragonsImages[Math.floor(Math.random() * dragonsImages.length)];
               return  (
                <GridItem key={idx} onClick={()=> history.push(`/dragon/${item.id}`)}>
                    <GridItemPicture image={dragonRandomImage}/>
                    <GridItemInfo> {item.name}</GridItemInfo>
                </GridItem>
               )
            })}
        </GridContainer>
    )
}
  
;


DragonList.propTypes = {
  list: PropTypes.array,
 
};

export default DragonList;