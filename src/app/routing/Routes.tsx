/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, {FC} from 'react'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {PrivateRoutes} from './PrivateRoutes'
import {MasterInit} from '../../_metronic/layout/MasterInit'


const Routes: FC = () => {

  return (
   <>  
      <MasterLayout>
        <PrivateRoutes />
      </MasterLayout>
        
      <MasterInit />
    </>
  )
}

export {Routes}
