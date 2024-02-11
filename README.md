스프링부트 솔로 프로젝트 
movie 페이지 구현
-> 영화 api 정보 보여주기
-> 회원가입
-> 로그인
-> 자유게시판
-> 영화에 따른 게시판 또는 영화에 따른 한줄평
-> 그외 추가할게 있다면 추가?

https 관련 메모

폴더> 인텔리제이 jdk 17 
C:\Users\kitri\.jdks\corretto-17.0.10\bin

관리자 권한으로 cmd/powershell 실행
키스토어 생성
keytool -genkey -alias solotest -keyalg RSA -keystore solotest.pkcs12 -storetype pkcs12

키스토어 확인
keytool -list -v -keystore solotest.pkcs12

키스토어에서 인증서 추출
keytool -export -alias solotest -keystore solotest.pkcs12 -rfc -file solotest.cer

인증서추출 확인
type solotest.cer

트러스트스토어 새성
keytool -import -alias solotesttrust -file solotest.cer -keystore solotesttrust.pkcs12

application.properties에 SSL 설정 후 https://localhost:8080/ 로 접속
주의요함으로 뜨는데? > 인증기관이 만든 인증서에 대해 인지할수 있는 퍼블릭 키 를 모르기때문에 주의요함으로 뜨게 된다
Tomcat initialized with port 8080 (https) 를 통해 https가 설정되어있음을 눈으로 확인
