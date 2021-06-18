import React from 'react'
import {  IconButton, ButtonGroup, ButtonToolbar, Icon } from 'rsuite';
const HomeIco = () => {
    return (
        <div>
        <ButtonToolbar>
         <Icon icon="star" />
          <IconButton icon={<Icon icon="star" />} appearance="primary" />
          <ButtonGroup>
            <IconButton icon={<Icon icon="align-left" />} />
            <IconButton icon={<Icon icon="align-center" />} />
            <IconButton icon={<Icon icon="align-right" />} />
            <IconButton icon={<Icon icon="align-justify" />} />
          </ButtonGroup>
        </ButtonToolbar>
    
 
    
        <ButtonToolbar>
          <IconButton icon={<Icon icon="facebook-official" />} color="blue" circle />
          <IconButton icon={<Icon icon="google-plus-circle" />} color="red" circle />
          <IconButton icon={<Icon icon="twitter" />} color="cyan" circle />
          <IconButton icon={<Icon icon="linkedin" />} color="blue" circle />
        </ButtonToolbar>
    
        <ButtonToolbar>
          <IconButton icon={<Icon icon="pause" />} placement="left">
            Pause
          </IconButton>
          <IconButton icon={<Icon icon="arrow-right" />} placement="right">
            Next
          </IconButton>
        </ButtonToolbar>
    
        <ButtonToolbar>
          <IconButton icon={<Icon icon="search" />}>Component</IconButton>
        </ButtonToolbar>
      </div>
    );
    
}

export default HomeIco
