import { Box, Card, CardActions, CardContent, IconButton, LinearProgress, List, Tooltip, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

type Application = {
  id: number;
  c_name: string;
  descr: string;
  date_sent: string;
  date_create: string;
};

function ApplList(props: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [applData, setApplData] = useState<Application[]>([]);

  const retireveAppls = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/appl/all', { params: { id: props.user.id } });
      if (response) setIsLoading(false);
      setApplData(response.data.slice(0).reverse());
    } catch (err) {
      console.log('Could not retrieve data ', err);
    }
  };

  useEffect(() => {
    retireveAppls();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Box sx={{ position: 'absolute', top: 25, left: 0, width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : (
        <Box sx={{ height: '35vh', overflow: 'auto' }}>
          <List>
            {applData.map((item) => {
              return (
                <Card
                  sx={{
                    minHeight: '200px',
                    minWidth: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                  key={item.id}
                  variant='outlined'
                >
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {item.c_name}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {item.descr}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Tooltip title='Got Response' placement='top'>
                      <IconButton sx={{ width: '36px' }}>
                        <CheckBoxOutlinedIcon color='success' />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Edit' placement='top'>
                      <IconButton sx={{ width: '36px' }}>
                        <EditOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Archive' placement='top'>
                      <IconButton sx={{ width: '36px' }}>
                        <ArchiveOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Delete' placement='top'>
                      <IconButton sx={{ width: '36px' }}>
                        <HighlightOffOutlinedIcon color='error' />
                      </IconButton>
                    </Tooltip>
                  </CardActions>
                </Card>
              );
            })}
          </List>
        </Box>
      )}
    </div>
  );
}

export default ApplList;
