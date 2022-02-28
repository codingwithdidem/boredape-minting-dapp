import Onboard from 'bnc-onboard'
import { onboardOptions } from '../dapp.config'

export const initOnboard = (subscriptions) => {
  return Onboard({
    subscriptions,
    ...onboardOptions
  })
}
