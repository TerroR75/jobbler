const classes = {
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  alignFlexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridColTwo: {
    display: 'grid',
    gridColumnCol: '1fr 1fr',
  },
  gridRowTwo: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
  },
  fullViewSize: {
    width: '100vw',
    height: '100vh',
  },
  fullRelatSize: {
    width: '100%',
    height: '100%',
  },
  alignCenterAbsoluteTop: {
    textAlign: 'center',
    position: 'absolute',
    left: '0',
    right: '0',
    top: '-28px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export { classes };
