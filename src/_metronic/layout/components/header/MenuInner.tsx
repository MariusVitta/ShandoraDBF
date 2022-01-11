import React from 'react'
import {MenuItem} from './MenuItem'
import {useIntl} from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title="Twitch" to='/dashboard'  icon='/media/logos/twitch-logo.svg' />
      <MenuItem title='Discord' to='/builder' icon='/media/logos/discord-logo.svg'  />
      <MenuItem title='Twitter' to='' icon='/media/logos/twitter-logo.svg'  />
      <MenuItem title='Tiktok' to='' icon='/media/logos/tiktok-logo.svg' />
      
    </>
  )
}
