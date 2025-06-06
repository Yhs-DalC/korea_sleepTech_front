import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavigatePage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }
  const handleGoRouterHome = () => {
    //절대 경로
    navigate('/router');
  }
  const handleGoRelativeRouter = () => {
    navigate('params/123')
  }
  return (
    <div>
      <h3>useNavigate</h3>
      <button onClick={handleGoBack}>뒤로가기</button>
      <button onClick={handleGoRouterHome}>Router Home으로 이동(절대경로)</button>
      <button onClick={handleGoRelativeRouter}>(상대경로)</button>
    </div>
  )
}

export default NavigatePage