스프링부트 솔로 프로젝트 
- movie 페이지 구현
- 수업때 사용한 api페이지 활용
- 추가로 https로 접속가능하게 하기

## 1.프로젝트 구성 및 기능
- 메인페이지
  - 메인페이지 전체 조회
  - 메인페이지에서 페이지 버튼 클릭시 다음 api를 호출하여 메인페이지 재구성(페이지네이션)

- 로그인
  - 로그인 및 쿠키 생성(현재 불완전)
  - 로그인 체크

- 회원 가입
  - 회원가입 및 입력데이터 체크 설정
  - 회원 컨트롤러 및 dto를 통해 입력 데이터 체크
  - 회원가입 실패시 에러문구가 추가된 페이지로 이동
  - 회원가입 성공시 로그인 페이지로 이동 가능

- 마이페이지
  - 내 정보 수정페이지 추가 및 회원정보 수정 매퍼/ 쿼리 추가
  - 회원탈퇴 페이지 추가 및 스크립트로 회원탈퇴 의사 확인 추가
  - 회원 탈퇴 매퍼/쿼리 추가

- 자유게시판 (진행중)
  -  보드컨트롤러(RESTAPI?)
  - 매퍼 / 보드DB / 댓글DB / 대댓글DB?
  - 게시글 목록 / 게시글 상세 / 게시글에 달린 댓글 보여주기