/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import Carousel from './Carousel'

type Props = {
  color?: string
  avatar?: string
  online?: boolean
  name: string
  job: string
  avgEarnings: string
  totalEarnings: string
}

const Card1: FC<Props> = ({
  color = '',
  avatar = '',
  online = false,
  name,
  job,
  avgEarnings,
  totalEarnings,
}) => {
  return (
    <div className='card'>
      <div className='card-body d-flex flex-column p-9'>
        <Carousel/>
        <div className='mb-5 mt-15'>
          <div className='d-flex flex-center justify-content-center'>
             
          </div>
        </div>

        <div className='d-flex flex-center flex-wrap mb-5'>
            {/* begin::Input */}
            <input type="text" className="form-control form-control-solid mb-9"  placeholder="Pseudo" name="card_cvv"/>
            {/* end::Input */}
        </div>

        <button className='btn btn-block btn-light-primary fw-bolder mb-5' id='kt_drawer_chat_toggle' disabled>
          Rejoindre une partie.
        </button>
        <button className='btn btn-block btn btn-success fw-bolder' id='kt_drawer_chat_toggle' disabled>
          Créer une partie privée.
        </button>
      </div>
    </div>
  )
}

export {Card1}
