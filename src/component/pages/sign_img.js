import React from 'react'
import imgPict from './media/mobile_app_development_skills.png'

const sign_img = () => {
  return (
    <div className="rigth_data mt-5" style={{width:"100%"}}>
        <div className="sign_img mt-5">
            <img src={imgPict} style={{maxWidth:400}} alt="" />
        </div>
    </div>

  )
}

export default sign_img
