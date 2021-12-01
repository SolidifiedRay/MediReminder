import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

export default function FolderList() {
  return (
    <List style={{ height: 300, overflow: 'scroll' }}>
      {
        ['Jack', 'Tom', 'Luck'].map((name) => {
          return <ListItem style={{ textAlign: 'center', display: 'block', cursor: "pointer" }}>
                  <Avatar style={{ width: '80px', height: '80px', margin: "0 auto" }}>
                        <PersonIcon
                          style={{ width: '70px', height: '70px', color: 'black' }}
                        />
                    </Avatar>
                  <div style={{'marginTop': 10, fontWeight: "strong"}}>{name}</div>
                </ListItem>
        })
      }
    </List>
  );
}
