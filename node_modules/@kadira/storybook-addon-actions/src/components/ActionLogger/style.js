export default {
  wrapper: {
    flex: 1,
    display: 'flex',
    position: 'relative',
  },
  actions: {
    flex: 1,
    margin: 0,
    padding: '8px 2px 20px 0',
    overflowY: 'auto',
    color: '#666',
  },
  action: {
    display: 'flex',
    padding: '3px 3px 3px 0',
    borderLeft: '5px solid white',
    borderBottom: '1px solid #fafafa',
    transition: 'all 0.1s',
    alignItems: 'center',
  },
  countwrap: {
    paddingBottom: 2,
  },
  counter: {
    margin: '0 5px 0 5px',
    backgroundColor: '#777777',
    color: '#ffffff',
    padding: '1px 5px',
    borderRadius: '20px',
  },
  inspector: {
    flex: 1,
    padding: '0 0 0 5px',
  },
  button: {
    position: 'absolute',
    bottom: 0, right: 0,
    border: 'none',
    borderTop: 'solid 1px rgba(0, 0, 0, 0.2)',
    borderLeft: 'solid 1px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.5)',
    padding: '5px 10px',
    borderRadius: '4px 0 0 0',
    color: 'rgba(0, 0, 0, 0.5)',
    outline: 'none',
  },
}
