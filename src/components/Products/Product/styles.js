import {makeStyles} from '@material-ui/core/styles';


export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        cursor: 'pointer'
    }, 
    media: {
        height: '0',
        paddingTop: '56.25%',
        
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