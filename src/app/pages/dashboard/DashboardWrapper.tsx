/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'

import {
  Card1,
} from '../../../_metronic/partials/'


const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row mt-0 gy-4 g-xl-8 flex-center'>
     
      <div className='col-xxl-4'>
        <Card1 name={''} job={''} avgEarnings={''} totalEarnings={''}  />
      </div>
      
    </div>
    {/* end::Row */}

   
   
   
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
