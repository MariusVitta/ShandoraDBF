import clsx from 'clsx'
import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px',
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px',
  toolbarButtonIconSizeClass = 'svg-icon-1'

const Topbar: FC = () => {
  const {config} = useLayout()

  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
     
      {/* Activities */}
      <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
        {/* begin::Drawer toggle */}
        <div
          className={clsx('btn btn-icon btn-active-light-primary btn-custom', toolbarButtonHeightClass)}
          id='kt_activities_toggle'
        >
            

          <KTSVG
            path='/media/icons/duotune/general/moon.svg'
            className={toolbarButtonIconSizeClass}
          />
          {/*<input
              className='form-check-input'
              type='checkbox'
              name='layout-builder[layout][aside][display]'
              checked={config.aside.display}
              onChange={() =>
                updateData({
                  aside: {
                  ...config.aside,
                  display: !config.aside.display,
                },
              })
              }
          />*/}

            {/*begin::Menu toggle*/}
            <a href="#" className="ml-10 btn btn-icon btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" data-kt-menu-flip="bottom">
                  <i className="fonticon-sun fs-2"></i>
                  test
                  <i className="fonticon-moon fs-2 d-none"></i>
                </a>

                {/*begin::Menu*/}
										<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-bold py-4 fs-6 w-200px" data-kt-menu="true">
											{/*begin::Menu item*/}
											<div className="menu-item px-3 my-1">
												<a href={toAbsoluteUrl("../../demo1/dist/?page=index")} className="menu-link px-3 active">
													<span className="menu-icon">
														<i className="fonticon-sun fs-2"></i>
													</span>
													<span className="menu-title">Light</span>
												</a>
											</div>
											{/*end::Menu item*/}
											{/*begin::Menu item*/}
											<div className="menu-item px-3 my-1">
												<a href="../../../../../demo1/dist/?page=index&amp;mode=dark" className="menu-link px-3">
													<span className="menu-icon">
														<i className="fonticon-moon fs-2"></i>
													</span>
													<span className="menu-title">Dark</span>
												</a>
											</div>
											{/*end::Menu item*/}
										</div>
								{/*end::Menu*/}
              {/*begin::Menu toggle*/}
        </div>
        {/* end::Drawer toggle */}
      </div>
     

      
      {/* begin::Aside Toggler */}
      {config.header.left === 'menu' && (
        <div className='d-flex align-items-center d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
            id='kt_header_menu_mobile_toggle'
          >
            <KTSVG path='/media/icons/duotune/text/txt001.svg' className='svg-icon-1' />
          </div>
        </div>
      )}
    </div>
  )
}

export {Topbar}
