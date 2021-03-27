import React  from 'react'

const LeeLoo = () => {
    
  window.onload = function() {
    if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }
  }

  window.onload()


      return (
        <div className="py-5 d-flex justify-content-center">
            
               <div className="wepster-hash-yiwcgp"></div>
             
        </div>
    )
}

export default LeeLoo
