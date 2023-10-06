import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginPage = () => {	
  return (
	<div>
		<div className="context">
			<h1>로그인</h1>
			<Form>				
			<Form.Group className="mb-3" controlId="formBasicEmail">
				{/* <Form.Label>Email address</Form.Label> */}
				<Form.Control type="email" placeholder="이메일 주소 또는 전화번호" />				
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				{/* <Form.Label>Password</Form.Label> */}
				<Form.Control type="password" placeholder="비밀번호" />
			</Form.Group>
			<Button variant="danger" type="submit">로그인</Button>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="로그인 정보 저장" checked />
				<a href="https://www.netflix.com/LoginHelp">도움이 필요하신가요?</a>
			</Form.Group>				
			</Form>

			<div className="membership">
				<p>Netflix 회원이 아닌가요? <span>지금 가입하세요.</span></p>
				<p>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</p>
				<p class="detail">Google reCAPTCHA가 수집하는 정보에는 Google <span>개인정보처리방침</span>과 <span>서비스 약관</span>이 적용되며, 해당 정보는 reCAPTCHA 서비스 제공, 관리 및 개선과 일반적인 보안 유지에 사용됩니다(Google의 개인 맞춤 광고에 사용 안 함).</p>
			</div>		
		</div>

	</div>
  )
}

export default LoginPage