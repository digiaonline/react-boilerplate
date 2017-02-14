// @flow

import {mockHelloState} from '../hello/mock'

import type {RootState} from './types'

export const mockRootState = (): RootState => ({
  hello: mockHelloState(),
})
