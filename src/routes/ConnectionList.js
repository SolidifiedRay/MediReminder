import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function FolderList() {
  return (
    <List style={{height: 300, overflow: "scroll"}}>
      <ListItem style={{textAlign: "center", "display": "block"}}>
          <BeachAccessIcon />
          <div>
              connect1 
            </div>
      </ListItem>
      <ListItem style={{textAlign: "center", "display": "block"}}>
          <BeachAccessIcon />
          <div>
              connect2
            </div>
      </ListItem>
      <ListItem style={{textAlign: "center", "display": "block"}}>
          <BeachAccessIcon />
          <div>
              connect3
            </div>
      </ListItem>
      <ListItem style={{textAlign: "center", "display": "block"}}>
          <BeachAccessIcon />
          <div>
              connect3
            </div>
      </ListItem>
    </List>
  );
}
