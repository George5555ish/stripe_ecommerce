import {makeStyles} from '@material-ui/core/styles';


export default makeStyles(() => ({

  toolbar:{
    marginTop: '100px'
  },
    root: {
        maxWidth: '80%',
        marginLeft: '10%',

        // display: 'flex',
        // flexDirection: 'row'
    }, 
    media: {
        height: '0',
        paddingTop: '40.25%',
        
    },

    flexSide: {
        display: 'flex', 
       alignItems: 'center'
    },
    container:{
        display: 'flex',
        justifyContent: 'space-between'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    }, 
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    description: {
        fontSize: '1.2rem'
    }
}));