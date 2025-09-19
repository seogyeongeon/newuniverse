import React, { createContext } from 'react';
import djadmin from 'assets/images/djadmin.png';
import player from 'assets/images/player.png';
// import player2 from 'assets/images/player2.jpg';
// import unify from 'assets/images/unify.gif';
import assan from 'assets/images/assan.gif';
// import melonticket from 'assets/images/melonticket.png';
import event from 'assets/images/event.png';
// import rent from 'assets/images/rent.gif';
export const ProjectContext = createContext();

const defaultItems = [
  {
    id: 1,
    date: '2020.01 ~ 진행 중',
    company: '디케이테크인',

    private: true,
    title: '멜론 윈도우 PC 플레이어',
    role: '퍼블리싱 및 프론트엔드 개발',
    tools: 'React, HTML, CSS, Figma, Git, Jira',
    desc: `- 윈도우 PC 플레이어 신규 개발 프로젝트
    - 기존 멜론 윈도우 플레이어의 노후화된 이미지를 벗고 모바일과의 사용 수준을 맞춰 PC 환경에서의 최적화된 멜론 플레이어를 사용자에게 제공하는 목적 
    - 일렉트론 기반의 네이티브 애플리케이션
    - 멜론 윈도우 PC 플레이어 개편 및 운영 유지보수 개발 담당
    - Javascript를 활용한 UI/UX 설계 및 구현
    - 재사용 가능한 UI 컴포넌트 개발
    - Restful API를 활용한 비동기 백엔드 서비스와 연동
    - 카카오 웹표준 가이드 반영`,
    url: 'https://www.melon.com/customer/serviceintro/index.htm',
    tool: 'javascript',
    thumbnail: player,
  },
  {
    id: 2,
    date: '2020.01 ~ 2020.06',
    company: '디케이테크인',
    private: true,
    title: '멜론 DJ 어드민 개발',
    role: '퍼블리싱 및 프론트엔드 개발',
    tools: 'React, HTML, CSS, Figma, Git, Jira',
    desc: `- DJ플레이리스트를 생성, 관리하는 관리자 페이지 개발 프로젝트
    - 공통 컴포넌트를 개발하고 이를 조합하여 원하는 페이지 생성 가능하도록 구축
    - 색상, 폰트, 공간, 버튼 스타일 등 다양한 공통 디자인 요소를 정의 및 개발
    - 다양한 디자인 템플릿과 구성 요소 개발
    - 사용 방법, 각 구성 요소의 예제, 커스터마이징 방법 등 가이드 진행`,
    url: 'https://brunch.co.kr/@design-melon/83',
    tool: 'javascript',
    thumbnail: djadmin,
  },
  {
    id: 3,
    date: '2018.11 ~ 2019.12',
    company: '엠텍크루',
    private: true,
    title: '카카오뮤직, 멜론티켓 및 멜론 웹/모바일 이벤트 페이지 개발',
    role: '퍼블리싱 개발',
    tools: 'React, HTML, CSS, Adobe Photoshop, Jira',
    desc: `- 카카오뮤직, 멜론티켓 서비스 및 멜론 웹/모바일 이벤트 페이지 UI/UX 설계 및 구현
    - 모바일/웹 환경 Cross Browsing 개발 경험
    - 반응형 웹 작업
    - EJS를 사용하여 중복 코드 효율화 및 동적/정적 화면 개발
    - css, javascript를 사용하여 애니메이션 요소 개발`,
    url: '',
    tool: 'javascript',
    thumbnail: event,
  },
  {
    id: 4,
    date: '2018.07 ~ 2018.08',
    company: '대동티엘',
    private: true,
    title: '기업 홍보용 웹 사이트 리뉴얼 작업',
    role: '퍼블리싱 개발',
    tools: 'HTML, CSS, Bootstrap, Adobe Photoshop',
    desc: `- 기업의 정체성 및 국내 영업부 담당자 요구 사항을 반영한 사이트 제작
    - 시선을 사로잡는 비비드한 컬러와 컨텐츠의 이해를 돕는 이미지를 배치하여 개발
    - 디자인 시안 및 css, javascript를 사용하여 동적 요소 개발`,
    url: '',
    tool: 'html',
  },
  {
    id: 5,
    date: '2017.11 ~ 2018.05',
    company: '대동티엘',
    private: true,
    title: 'ERP 시스템 개발',
    role: '퍼블리싱 개발',
    tools: 'React, HTML, CSS, Adobe Photoshop',
    desc: `- 기업용 자원 관리(ERP) 시스템의 사용자 인터페이스 마크업 작업
    - 요구사항 기반 화면 설계 및 시안 제작
    - React 기반 마크업 진행`,
    url: '',
    tool: 'html',
  },
  {
    id: 6,
    date: '2017.11 ~ 2018.05',
    company: '',
    private: false,
    title: '벤치마킹 기반 개인 포트폴리오 시리즈 작업',
    role: '퍼블리싱 개발',
    tools: 'HTML, CSS',
    desc: `- 다양한 기업 사이트(홍보, 포털, 렌트카 등)를 벤치마킹하여 퍼블리싱 역량 강화 목적의 포트폴리오 제작  
- HTML/CSS 기반으로 레이아웃, 반응형 구조, UI 모듈화 구현 연습`,
    url: [
      'http://seoddaddo.woobi.co.kr/src/assan/html/main.html',
      'http://seoddaddo.woobi.co.kr/src/unify/html/main.html',
    ],
    tool: 'html',
    thumbnail: assan,
  },
];

const ProjcetProvider = ({ children, items = defaultItems, active, activeName }) => {
  return (
    <ProjectContext.Provider
      value={{
        items,
        active,
        activeName,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};


// ProjcetProvider.propTypes = propTypes;
// ProjcetProvider.defaultProps = defaultProps;

export default ProjcetProvider;
