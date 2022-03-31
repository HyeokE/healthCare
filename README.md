# Getting Started

### 1. clone project
```
$ git clone https://github.com/HyeokE/healthCare
```
### 2. init project

```
$ yarn install && yarn
```

### 3. run project

```angular2html
yarn start
```

## 구현목록

### Table 

- [x]  Table component
- [x]  환자 정보 확인
- [x]  페이지 당 row 개수 설정
- [x]  pagination
- [x]  환자 상세정보 확인

SWR로 일부 구현하였습니다. `store/filter.ts` 참고바랍니다.
- [ ]  환자 sort 기능
- [ ]  환자 filter 기능 


### Graph

- [ ]  Graph component

같은 데이터를 여러 곳에서 사용하는 경우가 많으므로 데이터 캐싱이 되는 SWR를 사용하였습니다.

filter와 sort의 경우 `store/filter.ts`에 코드상으로 일부 구현이 되어있습니다.

그래프의 경우도 table과 같은 데이터를 공유하므로 SWR를 사용하여 구현할 수 있습니다.

## 폴더 구조

```
├── src
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── apis
│   │   ├── hooks
│   │   │   ├── useGetPatientList.ts
│   │   │   └── usePatientDetail.ts
│   │   └── index.ts
│   ├── components
│   │   └── common
│   │       ├── SelectBox
│   │       │   └── index.tsx
│   │       ├── Table
│   │       │   ├── index.tsx
│   │       │   └── styled.ts
│   │       └── TableDetailRow
│   │           ├── index.tsx
│   │           └── styled.ts
│   ├── store
│   │   └── filter.ts
│   ├── styles
│   │   ├── colors.ts
│   │   ├── declearations.ts
│   │   ├── fontSize.ts
│   │   ├── globalStyles.ts
│   │   ├── layouts.ts
│   │   ├── theme.ts
│   │   └── windowSize.ts
│   └── types
│       ├── patientBriefType.d.ts
│       ├── patientFilterType.ts
│       └── patientListType.d.ts
├── tsconfig.json
└── yarn.lock

```