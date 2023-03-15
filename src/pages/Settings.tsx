import { Box, Container, FormControlLabel, FormGroup, Paper, Switch, Tooltip, useThemeProps } from '@mui/material';
import { classes } from '../styles/classes';

function Settings(props: { isDarkModeEnabled: boolean; changeDarkMode: any }) {
  function handleThemeChange(): void {
    props.changeDarkMode();
  }
  return (
    <Container sx={[classes.flexCol, classes.alignFlexCenter, classes.fullRelatSize]}>
      <Paper elevation={8}>
        <FormGroup>
          <Tooltip placement='top' arrow title='Override system preference'>
            <FormControlLabel
              onChange={handleThemeChange}
              control={<Switch checked={props.isDarkModeEnabled} />}
              label='Dark Theme'
            />
          </Tooltip>
        </FormGroup>
      </Paper>
    </Container>
  );
}

export default Settings;
