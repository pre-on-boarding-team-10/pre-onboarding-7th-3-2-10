# 원티드 프리온보딩 프론트엔드 - Week 3-2

## 10팀 멤버 구성

<br/>

<div align=center>
	
| <img src="https://avatars.githubusercontent.com/u/26901045?v=4" width="130" height="130" />  | <img src="https://avatars.githubusercontent.com/u/105492051?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/92094314?v=4" width="130" height="130"/> | <img src="https://avatars.githubusercontent.com/u/101456751?v=4" width="130" height="130"/> |
| :-----------------------------------------------------------------------------------------:  | :-----------------------------------------------------------------------------------------:  | :----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------:  |
|                                    :full_moon: 오지수                                         |                                :last_quarter_moon: 정억화                                    |                                           송완준                                            |                                            김미성                                            |
|                [:globe_with_meridians:silviaoh](https://github.com/silviaoh)                 |                 [:globe_with_meridians:oka7759](https://github.com/oka7759)                  |            [:globe_with_meridians:natural-nine](https://github.com/natural-nine)           |                  [:globe_with_meridians:kimitt](https://github.com/kimitt)                  |

| <img src="https://avatars.githubusercontent.com/u/83964261?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/103277726?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/93189402?v=4"  width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/109638284?v=4" width="130" height="130"/> |
| :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                                           이학성                                            |                                            김숙영                                            |                                            김인표                                            |                                           박민규                                            |
|            [:globe_with_meridians:Hakseong-Lee](https://github.com/Hakseong-Lee)            |                 [:globe_with_meridians:Maiowol](https://github.com/Maiowol)                  |                [:globe_with_meridians:kiminpyo](https://github.com/kiminpyo)                 |              [:globe_with_meridians:kyle970320](https://github.com/kyle970320)              |

</div>

<br/>

## 프로젝트 요약

### 📆 기간

#### 22년 11월 12일 ~ 22년 11월 18일

### 🔧 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/next.js-black?style=for-the-badge&logo=next.js&logoColor=white"/> 
    <img src="https://img.shields.io/badge/reactquery-df5054?style=for-the-badge&logo=reactquery&logoColor=white"/> 
  <img src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white"/>   
  <img src="https://img.shields.io/badge/tailwindcss-DB7093?style=for-the-badge&logo=tailwindcss&logoColor=white"/><br/>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"/> 
   <img src="https://img.shields.io/badge/react_recoil-3DDC84?style=for-the-badge&logo=react-recoil-async&logoColor=white"/> 
</div>
<br/>

### 💻 실행 방법

1.  라이브러리를 설치합니다.

```
npm install
```

2. 환경변수를 추가합니다.

- .env.development

```
NEXT_PUBLIC_FRONT_BASE_URL = http://localhost:3000
NEXT_PUBLIC_BACK_BASE_URL = http://localhost:4000
```

3.  프로젝트를 실행합니다.

```
 npm run dev
```

### 테스트 계정

```
email : test@test.com
password: test11!

```

<br/>

<!-- ### 배포 링크

[배포링크 바로가기](https://pre-onboarding-7th-3-1-10.vercel.app/)

<br/> -->

## 프로젝트 설명

### 📂 디렉토리 구조

<details>
<summary> 구조</summary>
<div markdown="1">

```
🗂 src
 ┣ 📁 pages
   ┣ 📁 api
     ┣ login.ts
     ┗ logout.ts
   ┣ 📁 users
     ┣ [id].tsx
     ┗ index.tsx
   ┣ _app.tsx
   ┗ indextsx
 ┣ 📁 public
   ┣ favicon.ico
   ┗ vercel.svg
 ┣ 📁 src
   ┣ 📁 components
     ┣ 📁 Bar
       ┣ Pagination.bar.tsx
       ┗ SearchFilter.bar.tsx
     ┣ 📁 Footer
       ┗ Login.footer.tsx
     ┣ 📁 Form
       ┣ EditUser.form.tsx
       ┣ Login.form.tsx
       ┗ User.form.tsx
     ┣ 📁 Header
       ┗ Login.header.tsx
     ┣ 📁 common
       ┣ MainHeader.tsx
       ┗ SideNav.tsx
     ┣ 📁 layout
       ┣ Admin.layout.tsx
       ┣ Root.layout.tsx
       ┗ layout.type.ts
     ┗ 📁 table
       ┣ ThemeOfDark.template.tsx
       ┣ UserHoldingAccount.table.tsx
       ┣ UserInfo.table.tsx
       ┗ UserList.table.tsx
   ┣ 📁 service
     ┣ AuthService.ts
     ┣ AxiosBaseService.ts
     ┣ AxiosJSONService.ts
     ┣ AxiosNextService.ts
     ┗ UserService.ts
   ┣ 📁 types
     ┗ global.type.ts
   ┣ 📁 utils
     ┣ 📁 atom
       ┗ auth.ts
     ┗ 📁 hooks
       ┣ 📁 query
         ┣ useCreateUser.ts
         ┣ useDeleteUser.ts
         ┣ useGetAccounts.ts
         ┣ useGetPaginatedUsers.ts
         ┣ useGetUser.ts
         ┣ useGetUserSetting.ts
         ┣ useGetUsers.ts
         ┣ useLogin.ts
         ┣ useRegister.ts
         ┗ useUpdateUser.ts
       ┗ huseGetAccessToken.ts
   ┗ 📁 view
     ┣ 📁 admin
       ┣ AccountList.view.tsx
       ┣ UserDetail.view.tsx
       ┗ UserList.view.tsx
     ┗ Login.view.tsx

```

</div>
</details>

### ⚙️ 구현기능

1. 사용자 목록

```
- 리스트 페이지에서는 검색 필터링이 가능함
- 페이지네이션
- 임의로 신규 사용자를 추가
- 잘못 생성한 사용자를 삭제
- 개명을 한 사용자를 위해 사용자명을 변경할 수 있는 페이지로 이동 가능함
```

2.  사용자 상세

```
- 사용자 정보에서는 이름, 성별, 생년월일, 주소, 상세 주소, 이메일, 핸드폰, 연령, 가입일, 최근 로그인, 혜택 정보 수신, 활성화 여부를 표시함
- 사용자 계좌 목록에서는 계좌명, 계좌 번호, 계좌 상태, 브로커명, 평가 금액, 입금 금액, 수익률,  계좌 활성화 여부, 계좌 개설일을 표시함
- 사용자 목록에서 수정 버튼을 누를 시 이름을 변경할 수 있는 Form이 표시됨

```

<br/>

### 10팀의 Best Practice 선정 내용

#### 1. 로그인 처리 (cookie)

https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-2-10/blob/b12fbaeae0b57032bdf7a1c9b6cb34a8ed94effe/pages/api/login.ts#L5-L30

- 서버에서 accessToken을 저장하고 접근하기 위해 next server에 api를 생성하여 쿠키를 set하도록 함

<br/>

#### 2. 페이지네이션

https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-2-10/blob/b12fbaeae0b57032bdf7a1c9b6cb34a8ed94effe/src/components/Bar/Pagination.bar.tsx#L5-L53

- currentPage 라는 상태를 만들어 이전, 다음 버튼을 클릭할 경우 숫자가 변동되도록 제어함

https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-2-10/blob/b12fbaeae0b57032bdf7a1c9b6cb34a8ed94effe/src/components/table/UserList.table.tsx#L115-L184

- currentPage가 변할 때마다 query data를 호출한다.

<br/>

#### 3. 보유계좌

https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-2-10/blob/b12fbaeae0b57032bdf7a1c9b6cb34a8ed94effe/src/components/table/UserHoldingAccount.table.tsx#L10-L56

- 상세 페이지에서 사용자가 보유하고 있는 계좌를 테이블로 보여줌

<br/>

#### 4. 리스트 검색

https://github.com/pre-on-boarding-team-10/pre-onboarding-7th-3-2-10/blob/b12fbaeae0b57032bdf7a1c9b6cb34a8ed94effe/src/components/Bar/SearchFilter.bar.tsx#L5-L69

- 검색을 누르면 set 된 쿼리로 API를 호출하여 결과값을 보여준다.

#### 5. 지속적으로 유지되는 상태 관리

- query parameter가 set 되도록하여 뒤로 가거나 앞으로 이동했다가 다시 돌아와도 정상적으로 이전의 결과값이 반영되도록 조치함.

<br/>
### 📝 Meeting Log

[회의록 바로가기](https://www.notion.so/Meeting-log-3eff6566fd844052b7a98702ebab8c5b?p=81f9a3e5723443ce8d357e35d40a17ee&pm=s)
