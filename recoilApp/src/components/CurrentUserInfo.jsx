import React from 'react'
import { useRecoilValue } from 'recoil';
import {currentUserNameState} from '../atom/todoListAtom'

const CurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameState);
  return (
    <div>
      <h1>{userName}</h1>
    </div>
  )
}

export default CurrentUserInfo