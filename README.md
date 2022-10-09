### 목차
1. [프로젝트 소개](#프로젝트-소개)
2. [프로젝트 실행 방법](#프로젝트-실행-방법)
3. [기능 소개](#기능-소개)
4. [적용 기술](#적용-기술) 
5. [개인 별 구현 기능 및 코드 설명](#개인-별-구현-기능-및-코드-설명)
6. Reference

# 프로젝트 소개
프리온보딩 과제 - 바딧 - 감지 센서 관리 프로그램 만들기 \
안녕하세요 저스트코드/위코드 **프리온보딩** 프론트 1팀입니다. \
[바딧](https://www.wanted.co.kr/company/35482) 에서 제공받은 기업협업 과제인  감지 센서 관리 프로그램 개발을 진행했습니다.
> [ **맡은 부분**] \
> 센서목록 화면 : 박예선, 김정연\
데이터 그래프 대시보드 화면 : 이기완, 김진영, 이혜림


> [ **팀 노션** ] : 회의 기록 및 티켓관리, 팀원 프로필 \
 https://wecode.notion.site/1-b2d8f038c91c41aa9c2153b9c656c680

>  [**과제 진행 후기**]
> -  박예선 : [블로그](https://velog.io/@lynn080/%EA%B0%90%EC%A7%80-%EC%84%BC%EC%84%9C-%EA%B4%80%EB%A6%AC-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EA%B0%9C%EB%B0%9C-%ED%9B%84%EA%B8%B0-Pre-OnBoarding)
>
> -  김진영
[블로그 게시글](https://velog.io/@jinyoung985/Pre-Onboarding-%EA%B0%90%EC%A7%80-%EC%84%BC%EC%84%9C-%EA%B4%80%EB%A6%AC-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EB%A7%8C%EB%93%A4%EA%B8%B0)에 정리해두었습니다.


<br/>


## 프로젝트 실행 방법
배포링크 :  https://yesunpark.github.io/pre-onboarding-bodit-front-team1/

위 링크로 접속하시면 센서목록 화면을 보실 수 있습니다. \
페이지 상단의 버튼을 이용해서 센서목록 화면과 데이터 그래프 대시보드 화면을 이동할 수 있습니다.

<br/>



## 기능 소개

#### 1. 공통
- 매 페이지 상단 버튼 : 각 버튼을 클릭하면 해당하는 화면으로 이동할 수 있습니다


#### 2. 센서목록 화면

- 필터링 : 페이지 상단 필터를 이용해 batLvl, cardNum 기준으로 필터링이 가능합니다. 
- 정렬 : batLvl, connCardNumm, rawSentCtn인 경우 오름차순 내림차순 정렬이 가능합니다.
- 배터리 경고 : 각 센서의 batLvl이 20%이하이면 붉게 표시됩니다. 
#### 3. 데이터 그래프 대시보드 화면
- 달력: 모달 형식으로 원하는 날짜를 선택할 수 있습니다.


<br/>

## 적용 기술 
+ React.js,  React-Router-Dom, styled component, react-datepicker 


<br/>

## 개인 별 구현 기능 및 코드 설명

### [박예선] - 센서목록 화면, 페이지 이동 버튼
- 구현한 기능 : 페이지 이동 버튼, 센서목록 필터링 기능, 배터리 20%이하 표시 기능
- 설명 : 
 1.  **페이지 이동 버튼**  \
: 클릭 시 해당하는 페이지로 이동.\
`<PageButton/>` 컴포넌트에서 map함수를 이용해 버튼을 생성한 후,  \
`Router.js`에서 import해서 모든 페이지에서 나타나도록 구현했습니다. 
https://github.com/YesunPark/pre-onboarding-bodit-front-team1/blob/a8abbdf8792942b694e4764eafefeb07f8aab26c/src/components/PageButton.js#L6-L9

 2.  **센서 목록 필터링** \
:  batLvl, cardNum를 기준으로 센서목록을 필터링.\
각 필터에 클릭이벤트가 발생될 때 마다 `filters`에 사용자가 선택한 필터를 state으로 관리하고, \
선택된 필터에 해당하는 조건에 맞게 필터링을 해서 목록을 나타냅니다.
https://github.com/YesunPark/pre-onboarding-bodit-front-team1/blob/a8abbdf8792942b694e4764eafefeb07f8aab26c/src/pages/sensorlist/components/FilterHeader.js#L5
https://github.com/YesunPark/pre-onboarding-bodit-front-team1/blob/a8abbdf8792942b694e4764eafefeb07f8aab26c/src/pages/sensorlist/components/FilterHeader.js#L44-L53

3. **배터리 20%이하 표시 기능** \
:  batLvl이 20%이하인 센서의 배터리만 붉게 표시.\
삼항연산자를 이용하여 배터리가 20%이하일 때만 `className='low-battery'`를 부여하도록 했습니다.
https://github.com/YesunPark/pre-onboarding-bodit-front-team1/blob/a8abbdf8792942b694e4764eafefeb07f8aab26c/src/pages/sensorlist/components/SensorListTable.js#L43-L49

  
  
### [김정연] - 센서목록 화면
- 구현한 기능 : 센서 목록 리스트 UI, 오름차순 내림차순 정렬 기능
- 설명 : table data에 map을 돌려 데이터를 출력하여 센서 목록 리스트 UI를 구현하였습니다. <br />
- 버튼에 id를 부여하여 id가 ‘up’인 경우 오름차순, id가 ‘down’인 경우 내림차순으로 구분하고 sort 메서드로 오름차순 내림차순 정렬 기능을 구현하였습니다.

### [이기완] - 데이터 그래프 대시보드 화면
- 구현한 기능 :
- 설명 : 


       
### [김진영] - 데이터 그래프 대시보드 화면
- 구현한 기능 : 그래프, 그래프 x축 확대 및 축소, Drag & Drop 순서 변경
- 설명 : [블로그 게시글](https://velog.io/@jinyoung985/Pre-Onboarding-%EA%B0%90%EC%A7%80-%EC%84%BC%EC%84%9C-%EA%B4%80%EB%A6%AC-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EB%A7%8C%EB%93%A4%EA%B8%B0)에 정리해두었습니다.


### [이혜림] - 데이터 그래프 대시보드 화면
- 구현한 기능 : 달력
- 설명 : 달력 인풋을 클릭하면 모달형식으로 달력이 표시됩니다. 표시된 달력에서 원하는 날짜를 선택할 수 있습니다. 최대 현재 기준 오늘의 날짜까지만 선택이 가능합니다.  



  <br/>


## Reference

- 이 프로젝트는 비영리목적으로 [Bodit](https://www.wanted.co.kr/company/35482)과의 기업협업 과제 제출용으로 제작한 프로젝트입니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적 문제가 있을 수 있습니다.
