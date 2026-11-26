import React from 'react'

function WithUser(OriginalComponents) {
    return function MaintainData(props){
        return(
            <>
              <OriginalComponents {...props} role="Developer"/>
            </>
        );
    }
}

export default WithUser